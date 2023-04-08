import React from 'react';
import ReactDom from 'react-dom/client';
import  App from './components/App';
import './css/main.scss';

var root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);