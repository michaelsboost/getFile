/** @jsxRuntime classic */
/** @jsx React.createElement */
const { useState } = React;

function App() {
  const [counter, setCounter] = useState(0);
  const [libraries, setLibraries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState();

  const fetchSuggestions = async searchText => {
    try {
      const response = await fetch(`https://api.cdnjs.com/libraries?search=${searchText}&fields=filename,description,version`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data && data.results && data.results.length > 0) {
        const libraries = data.results.map(result => result);
        setSuggestions(libraries);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = event => {
    const searchText = event.target.value.trim();
    setSearchText(searchText);
    if (searchText.length > 0) {
      setSuggestions([]);
      fetchSuggestions(searchText);
    } else {
      setSuggestions([]);
    }
  };

  const addLibrary = url => {
    if (!url) {
      setLibraries([...libraries, url]);
      setSuggestions([]);
      setSearchText('');
      return false;
    }
  
    if (!libraries.includes(url)) {
      setLibraries([...libraries, url]);
      setSuggestions([]);
      setSearchText('');
    } else {
      console.error(`Library already exists: ${url}`);
    }
  };

  const removeLibrary = index => {
    setLibraries(libraries.filter((_, i) => i !== index));
  };
  
  const getFile = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.text();
    } catch (error) {
      console.warn("Request error:", error);
      throw error; // Re-throw to handle in caller
    }
  };
  
  const downloadFile = async url => {
    try {
      const data = await getFile(url);
      const parts = url.split("/");
      const name = parts[parts.length - 1];
      const blob = new Blob([data], { type: "application/octet-stream" });
      saveAs(blob, name);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  
  const exportZip = async libraries => {
    try {
      let zip = new JSZip();
      const promises = libraries.map(async library => {
        const data = await getFile(library);
        const parts = library.split("/");
        const name = parts[parts.length - 1];
        zip.file(name, data);
      });
  
      await Promise.all(promises);
  
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `libraries-${new Date().getFullYear()}.zip`);
    } catch (error) {
      console.error("Error exporting zip:", error);
    }
  };

  let content;
  if (suggestions.length > 0) {
    content = suggestions.map(result => (
      <section className="cursor-pointer" key={result.filename} onClick={() => addLibrary(result.latest)}>
        <div className="flex justify-between mb-2 font-bold text-1xl">
          <span>{result.name}</span>
          <span>{result.version}</span>
        </div>
        <div className="text-sm">{result.description}<br /><hr /></div>
      </section>
    ));
    content = (
      <div className="relative px-4 capitalize h-auto max-h-64 overflow-auto">
        {content}
      </div>
    )
  }

  return (
    <div className="container flex flex-col justify-center gap-2 h-full">
      <div className="p-4">
        <div className="text-center mb-8">
          <a style={{color: 'unset'}} href="https://github.com/michaelsboost/getFile" target="_blank">
            <LogoIcon />
          </a>
        </div>
        <fieldset role="group">
          <input 
            type="search" 
            placeholder="Search for resources (JQuery, Bootstrap, Foundation...)" 
            className="w-full p-3" 
            value={searchText}
            onInput={handleSearch}
          />
          <button onClick={() => addLibrary('')}>
            +
          </button>
        </fieldset>
        {content}
        <div className="mt-4">
          {libraries.map((library, index) => (
            <fieldset role="group" key={index} data-index={index}>
              <input 
                type="text" 
                placeholder="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js" 
                className="rounded-r-none py-2" 
                value={library}
                onChange={(e) => {
                  const newLibraries = [...libraries];
                  newLibraries[index] = e.target.value.trim();
                  setLibraries(newLibraries);
                }}
              />
              <button className="w-auto border-0 bg-red-400 rounded-l-none py-0" onClick={() => removeLibrary(index)}>
                ✘
              </button>
            </fieldset>
          ))}
        </div>
        <button className="w-full" onClick={() => {
          if (libraries.length === 1) downloadFile(libraries[0]);
          else exportZip(libraries);
        }}>
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

const LogoIcon = () => (
  <svg 
    className="container w-full max-w-fit h-full"
    fill="currentColor"
    preserveAspectRatio="xMidYMin" viewBox="0 0 247.614 256" width="247.614pt" height="256pt">
    <g>
      <path d=" M 117.426 0 C 118.763 0 120.1 0 121.437 0 C 121.437 30.632 121.437 61.265 121.437 91.897 C 113.171 91.897 104.906 91.897 96.64 91.897 C 96.761 71.231 96.64 50.567 96.275 29.903 C 62.433 41.925 40.006 65.021 28.993 99.191 C 19.605 136.018 27.142 168.839 51.602 197.652 C 64.071 211.088 79.023 220.691 96.457 226.462 C 96.64 200.57 96.7 174.678 96.64 148.786 C 84.605 148.786 72.571 148.786 60.537 148.786 C 60.537 140.399 60.537 132.011 60.537 123.624 C 80.837 123.624 101.137 123.624 121.437 123.624 C 121.437 167.749 121.437 211.875 121.437 256 C 83.045 253.489 51.744 237.444 27.534 207.863 C 2.666 174.863 -5.357 138.031 3.466 97.368 C 14.809 55.985 40.032 26.629 79.135 9.299 C 91.481 4.298 104.245 1.198 117.426 0 Z  M 129.825 0 C 169.077 2.646 200.864 19.3 225.187 49.96 C 235.993 64.282 243.469 80.206 247.614 97.732 C 239.104 97.793 230.595 97.732 222.087 97.55 C 212.27 69.017 193.915 47.987 167.021 34.462 C 163.001 32.615 158.869 31.096 154.622 29.903 C 154.622 61.144 154.622 92.384 154.622 123.624 C 170.911 123.624 187.2 123.624 203.489 123.624 C 203.489 131.89 203.489 140.156 203.489 148.422 C 187.2 148.422 170.911 148.422 154.622 148.422 C 154.622 183.187 154.622 217.953 154.622 252.718 C 146.464 254.604 138.198 255.698 129.825 256 C 129.825 170.667 129.825 85.333 129.825 0 Z " />
    </g>
  </svg>
);
const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
)
const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);