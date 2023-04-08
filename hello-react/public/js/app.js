"use strict";

// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

var template = /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My first react application"); // JSX: Javascript XML
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
