"use strict";

var p_name = "IPhone 14 Pro";
var p_price = 45000;
var product = {
  name: "IPhone 15",
  price: 55000
};
function formatPrice(product) {
  return product.price + " TL";
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), /*#__PURE__*/React.createElement("div", {
  "class": "product-details"
}, /*#__PURE__*/React.createElement("h2", null, product.name), /*#__PURE__*/React.createElement("p", null, formatPrice(product)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
