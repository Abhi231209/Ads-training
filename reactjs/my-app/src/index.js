import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
// import Renderinglist from "./29-03-2022/Renderinglist"
// import Conditionalcontent from './29-03-2022/Conditionalcontent'
// import Multiplestateinone from "./29-03-2022/Multiplestateinone"
// import Child2parentparent from "./29-03-2022/Child2parentparent"

import Dynamicstylingjs from "./29-03-2022/Dynamicstylingjs"


ReactDOM.render(
  <React.StrictMode>
    <Dynamicstylingjs/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
