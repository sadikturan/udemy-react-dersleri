"use strict";

var products = [{
  name: "iphone 15",
  price: 50000
}, {
  name: "iphone 16",
  price: 60000
}, {
  name: "iphone 17",
  price: 60000
}];
function addProduct(event, p_name) {
  console.log(event.target, p_name);
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: index
  }, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " "), product.price, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: index,
    onClick: function onClick(event) {
      return addProduct(event, product.name);
    }
  }, "Ekle"));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
