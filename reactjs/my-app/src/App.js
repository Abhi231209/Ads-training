import logo from './logo.svg';
import './App.css';
// import New from './28-03-2022/New'
// import Child2parentparent from "./29-03-2022/Child2parentparent"
import Renderinglist from "./29-03-2022/Renderinglist"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <New/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Renderinglist />
    </div>
  );
}

export default App;
