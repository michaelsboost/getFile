"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsxRuntime classic */
/** @jsx React.createElement */
var _React = React,
  useState = _React.useState;
function App() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    libraries = _useState4[0],
    setLibraries = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    suggestions = _useState6[0],
    setSuggestions = _useState6[1];
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    searchText = _useState8[0],
    setSearchText = _useState8[1];
  var fetchSuggestions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchText) {
      var response, data, _libraries;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://api.cdnjs.com/libraries?search=".concat(searchText, "&fields=filename,description,version"));
          case 3:
            response = _context.sent;
            if (response.ok) {
              _context.next = 6;
              break;
            }
            throw new Error("Network response was not ok");
          case 6:
            _context.next = 8;
            return response.json();
          case 8:
            data = _context.sent;
            if (data && data.results && data.results.length > 0) {
              _libraries = data.results.map(function (result) {
                return result;
              });
              setSuggestions(_libraries);
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching data:", _context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function fetchSuggestions(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSearch = function handleSearch(event) {
    var searchText = event.target.value.trim();
    setSearchText(searchText);
    if (searchText.length > 0) {
      setSuggestions([]);
      fetchSuggestions(searchText);
    } else {
      setSuggestions([]);
    }
  };
  var addLibrary = function addLibrary(url) {
    if (!url) {
      setLibraries([].concat(_toConsumableArray(libraries), [url]));
      setSuggestions([]);
      setSearchText('');
      return false;
    }
    if (!libraries.includes(url)) {
      setLibraries([].concat(_toConsumableArray(libraries), [url]));
      setSuggestions([]);
      setSearchText('');
    } else {
      console.error("Library already exists: ".concat(url));
    }
  };
  var removeLibrary = function removeLibrary(index) {
    setLibraries(libraries.filter(function (_, i) {
      return i !== index;
    }));
  };
  var getFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch(url);
          case 3:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 6;
              break;
            }
            throw new Error("Network response was not ok");
          case 6:
            _context2.next = 8;
            return response.text();
          case 8:
            return _context2.abrupt("return", _context2.sent);
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.warn("Request error:", _context2.t0);
            throw _context2.t0;
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function getFile(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var downloadFile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
      var data, parts, name, blob;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getFile(url);
          case 3:
            data = _context3.sent;
            parts = url.split("/");
            name = parts[parts.length - 1];
            blob = new Blob([data], {
              type: "application/octet-stream"
            });
            saveAs(blob, name);
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error("Error downloading file:", _context3.t0);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    return function downloadFile(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var exportZip = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(libraries) {
      var zip, promises, _content;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            zip = new JSZip();
            promises = libraries.map( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(library) {
                var data, parts, name;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return getFile(library);
                    case 2:
                      data = _context4.sent;
                      parts = library.split("/");
                      name = parts[parts.length - 1];
                      zip.file(name, data);
                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }());
            _context5.next = 5;
            return Promise.all(promises);
          case 5:
            _context5.next = 7;
            return zip.generateAsync({
              type: "blob"
            });
          case 7:
            _content = _context5.sent;
            saveAs(_content, "libraries-".concat(new Date().getFullYear(), ".zip"));
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.error("Error exporting zip:", _context5.t0);
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function exportZip(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var content;
  if (suggestions.length > 0) {
    content = suggestions.map(function (result) {
      return /*#__PURE__*/React.createElement("section", {
        className: "cursor-pointer",
        key: result.filename,
        onClick: function onClick() {
          return addLibrary(result.latest);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between mb-2 font-bold text-1xl"
      }, /*#__PURE__*/React.createElement("span", null, result.name), /*#__PURE__*/React.createElement("span", null, result.version)), /*#__PURE__*/React.createElement("div", {
        className: "text-sm"
      }, result.description, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", null)));
    });
    content = /*#__PURE__*/React.createElement("div", {
      className: "relative px-4 capitalize h-auto max-h-64 overflow-auto"
    }, content);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container flex flex-col justify-center gap-2 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-8"
  }, /*#__PURE__*/React.createElement(LogoIcon, null)), /*#__PURE__*/React.createElement("fieldset", {
    role: "group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Search for resources (JQuery, Bootstrap, Foundation...)",
    className: "w-full p-3",
    value: searchText,
    onInput: handleSearch
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return addLibrary('');
    }
  }, "+")), content, /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, libraries.map(function (library, index) {
    return /*#__PURE__*/React.createElement("fieldset", {
      role: "group",
      key: index,
      "data-index": index
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js",
      className: "rounded-r-none py-2",
      value: library,
      onChange: function onChange(e) {
        var newLibraries = _toConsumableArray(libraries);
        newLibraries[index] = e.target.value.trim();
        setLibraries(newLibraries);
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "w-auto border-0 bg-red-400 rounded-l-none py-0",
      onClick: function onClick() {
        return removeLibrary(index);
      }
    }, "\u2718"));
  })), /*#__PURE__*/React.createElement("button", {
    className: "w-full",
    onClick: function onClick() {
      if (libraries.length === 1) downloadFile(libraries[0]);else exportZip(libraries);
    }
  }, /*#__PURE__*/React.createElement(DownloadIcon, null))));
}
var LogoIcon = function LogoIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    "class": "container w-full max-w-fit h-full",
    fill: "currentColor",
    preserveAspectRatio: "xMidYMin",
    viewBox: "0 0 247.614 256",
    width: "247.614pt",
    height: "256pt"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: " M 117.426 0 C 118.763 0 120.1 0 121.437 0 C 121.437 30.632 121.437 61.265 121.437 91.897 C 113.171 91.897 104.906 91.897 96.64 91.897 C 96.761 71.231 96.64 50.567 96.275 29.903 C 62.433 41.925 40.006 65.021 28.993 99.191 C 19.605 136.018 27.142 168.839 51.602 197.652 C 64.071 211.088 79.023 220.691 96.457 226.462 C 96.64 200.57 96.7 174.678 96.64 148.786 C 84.605 148.786 72.571 148.786 60.537 148.786 C 60.537 140.399 60.537 132.011 60.537 123.624 C 80.837 123.624 101.137 123.624 121.437 123.624 C 121.437 167.749 121.437 211.875 121.437 256 C 83.045 253.489 51.744 237.444 27.534 207.863 C 2.666 174.863 -5.357 138.031 3.466 97.368 C 14.809 55.985 40.032 26.629 79.135 9.299 C 91.481 4.298 104.245 1.198 117.426 0 Z  M 129.825 0 C 169.077 2.646 200.864 19.3 225.187 49.96 C 235.993 64.282 243.469 80.206 247.614 97.732 C 239.104 97.793 230.595 97.732 222.087 97.55 C 212.27 69.017 193.915 47.987 167.021 34.462 C 163.001 32.615 158.869 31.096 154.622 29.903 C 154.622 61.144 154.622 92.384 154.622 123.624 C 170.911 123.624 187.2 123.624 203.489 123.624 C 203.489 131.89 203.489 140.156 203.489 148.422 C 187.2 148.422 170.911 148.422 154.622 148.422 C 154.622 183.187 154.622 217.953 154.622 252.718 C 146.464 254.604 138.198 255.698 129.825 256 C 129.825 170.667 129.825 85.333 129.825 0 Z "
  })));
};
var TrashIcon = function TrashIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    "class": "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
};
var DownloadIcon = function DownloadIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    "class": "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));