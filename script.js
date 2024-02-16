let sortable;

const app = {
  libraries: [],

  // Function to handle storage and display of library/framework
  fetchSuggestions: searchText => {
    fetch(
      `https://api.cdnjs.com/libraries?search=${searchText}&fields=filename,description,version`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data && data.results && data.results.length > 0) {
          const libraries = data.results.map(result => result);
          app.displaySuggestions(libraries);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
  displaySuggestions: suggestions => {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    suggestions.forEach(result => {
      const listItem = document.createElement("li");
      listItem.className = "list-none";
      listItem.innerHTML = `<div class="flex justify-between mb-2 font-bold text-1xl">
            <span>${result.name}</span>
            <span>${result.version}</span>
        </div>
        <div class="text-sm">${result.description}<br><hr></div>`;
      listItem.onclick = () => {
        // Add the clicked suggestion to the libraries array
        const url = result.latest; // Assuming 'latest' holds the URL
        app.libraries.push(url);
        // Clear the suggestions list
        suggestionsList.innerHTML = "";
        // Display the libraries display
        app.displayLibrariesArray();
        searchBox.value = "";
      };
      suggestionsList.appendChild(listItem);
    });
  },
  displayLibrariesArray: () => {
    const librariesArray = app.libraries;
    let sortLibrariesContainer = document.getElementById("sortLibraries");
    sortLibrariesContainer.innerHTML = "";
    const embedArray = (result, index) => {
      const newNav = document.createElement("nav");
      newNav.setAttribute("data-index", index);

      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder =
        "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js";
      newInput.setAttribute("data", "library");
      newInput.className = "bg-white rounded-r-none py-2";
      newInput.value = result;
      newInput.onkeyup = () => {
        // Update the value of the librariesArray at the corresponding index
        librariesArray[index] = newInput.value.trim();
      };

      const deleteButton = document.createElement("button");
      deleteButton.className =
        "delete-button w-auto border-0 bg-red-400 rounded-l-none py-2";
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      deleteButton.onclick = () => {
        // Remove the library from the array by its index
        project.pages[app.activePage].libraries.splice(index, 1);
        // Re-render the libraries array
        app.displayLibrariesArray();
      };

      newNav.appendChild(newInput);
      newNav.appendChild(deleteButton);
      sortLibrariesContainer.appendChild(newNav);
    };

    // Embed each library into a new input field and delete button
    librariesArray.forEach((input, index) => {
      embedArray(librariesArray[index], index);
    });

    // Check if the last input field is empty, and append an additional empty input field if needed
    if (
      librariesArray.length === 0 ||
      librariesArray[librariesArray.length - 1].trim() !== ""
    ) {
      embedArray("", librariesArray.length);
    }
  },

  // Ajax function to download over http
  getFile: (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = data => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.warn("request_error");
      }
    };
  },

  // Downloads the file
  downloadFile: url => {
    let parts = url.split("/");
    let name = parts[parts.length - 1];

    getFile(url, data => {
      const blob = new Blob([data], { type: "application/octet-stream" });
      saveAs(blob, name);
    });
  },
  
  // Exports zip file
  exportZip: () => {
    let zip = new JSZip();
    
    // Iterate over each library
    app.libraries.forEach(library => {
      app.getFile(library, data => {
        // Get the name of the library file from its URL
        let parts = library.split("/");
        let name = parts[parts.length - 1];
  
        // Add the downloaded file to the zip archive
        zip.file(name, data);
  
        // Check if all files are added, then generate and download the zip file
        if (Object.keys(zip.files).length === app.libraries.length) {
          let content = zip.generate({ type: "blob" });
          saveAs(content, `libraries-${new Date().getFullYear()}.zip`);
        }
      });
    });
  }
};

// display libraries array
app.displayLibrariesArray();

const sortLibrariesContainer = document.getElementById("sortLibraries");
const searchBox = document.getElementById("searchBox");
const suggestionsList = document.getElementById("suggestions");
searchBox.addEventListener("keyup", function () {
  const searchText = this.value.trim();
  suggestionsList.innerHTML = "";
  if (!searchBox.value) {
    suggestionsList.innerHTML = "";
    return false;
  }

  if (searchText.length > 0) {
    app.fetchSuggestions(searchText);
  }
});

btn.onclick = () => {
  if (app.libraries.length === 1) {
    app.downloadFile(input);
    return false;
  }
  
  app.exportZip();
};
