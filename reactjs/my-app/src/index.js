import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import ForFragment from './30-03-2022/Fragment'
import Cssmodulesjs from './30-03-2022/Cssmodulesjs';
// import Renderinglist from "./29-03-2022/Renderinglist"
// import Conditionalcontent from './29-03-2022/Conditionalcontent'
// import Multiplestateinone from "./29-03-2022/Multiplestateinone"
// import Child2parentparent from "./29-03-2022/Child2parentparent"

// import Dynamicstylingjs from "./29-03-2022/Dynamicstylingjs"
// import Portals from './31-03-2022/Portals'
// import Refs from './31-03-2022/Refs'
// import Foruseeffect from './31-03-2022/Foruseeffect'

import Context from './1-04-2022/Context'
import Reducer from './1-04-2022/Reducer'



ReactDOM.render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
