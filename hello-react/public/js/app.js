"use strict";

var products = [{
  name: "iphone 15",
  price: 50000,
  description: "iyi telefon",
  colors: ["silver", "red", "white", "black"]
}, {
  name: "iphone 16",
  price: 60000,
  description: "iyi telefon",
  colors: ["silver", "red", "white"]
}, {
  name: "iphone 17",
  price: 60000,
  description: "iyi telefon",
  colors: ["silver", "red", "white"]
}];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: index
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, " \xFCr\xFCn ismi girilmemi\u015F "), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, " ", product.description, " "), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, "renk se\xE7eneklerimiz mevcut") : "", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, color);
  })));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
