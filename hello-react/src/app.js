// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

var template = <h1 id="header">My first react application</h1>; // JSX: Javascript XML
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);