"use strict";

var product = {
  name: "iphone 15",
  price: 50000,
  description: "iyi telefon",
  colors: []
};
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}
function printDescription(product) {
  if (product.description) {
    return /*#__PURE__*/React.createElement("p", null, " ", product.description, " ");
  }
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, " \xFCr\xFCn ismi girilmemi\u015F "), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, " ", product.description, " "), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, "renk se\xE7eneklerimiz mevcut") : "", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
