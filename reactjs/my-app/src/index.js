import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App'
// import ForFragment from './30-03-2022/Fragment'
// import Cssmodulesjs from './30-03-2022/Cssmodulesjs';
// import Renderinglist from "./29-03-2022/Renderinglist"
// import Conditionalcontent from './29-03-2022/Conditionalcontent'
// import Multiplestateinone from "./29-03-2022/Multiplestateinone"
// import Child2parentparent from "./29-03-2022/Child2parentparent"

// import Dynamicstylingjs from "./29-03-2022/Dynamicstylingjs"
// import Portals from './31-03-2022/Portals'
// import Refs from './31-03-2022/Refs'
// import Foruseeffect from './31-03-2022/Foruseeffect'

// import Context from './1-04-2022/Context'
// import Reducer from './1-04-2022/Reducer'
// import WIthoutmemo from './2-04-2022/WIthoutmemo'
// import Forcallback from './06-04-2022/Forcallback'
// import Assignment1 from './06-04-2022/Assignment1'
// import Usingrefassignment1 from './06-04-2022/Usingrefassignment1'
// import Forinputbox from './Project1/Forinputbox'
// import Forpropscc from './07-04-2022/Forpropscc'
// import Forstate from './07-04-2022/Forstate'
// import ForComponentwillmount from './04-08-2022/ForComponentwillmount'
// import Maincomponent from './04-10-2022/Maincomponent'
// import Usingasyncawait from './04-10-2022/Usingasyncawait'
// import Tohandelerror from './04-11-2022/Tohandelerror';
// import Mainfile from './FoodOrderingProject/Mainfile'

// import Tosendrequest from './04-14-2022/Forpost/Tosendrequest'
// import Main from './04-14-2022/Forcumstomhook/Main'
// import MainFileForCustomHook from './04-14-2022/Formorerelisticapp/MainFileForCustomHook'
// import ForForms from './04-18-2022/ForForms'
// import ForOnblur from './04-18-2022/ForOnblur'
// import ToDisable from './04-18-2022/ToDisable'
import ToPrint from './04-18-2022/ToPrint'
// import Forredux from './01-05-2022/store/Forredux'
// import Main from './ReduxApp/Main'
import {Provider} from 'react-redux'
// import store from './ReduxApp/store/Forredux'
import MainApp from './AdvanceReduxProject/MainApp'
import store from './AdvanceReduxProject/store/redux-store'
// import SimpleInput from './04-18-2022/usingcustomhook/Form'


ReactDOM.render(
  // <Provider store={store}>
  //    <MainApp />
  // </Provider>
  <ToPrint/>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
