import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

// const template = React.createElement("p", {}, 'Hello World');
const template = <p>Hello World</p>;

root.render(template);