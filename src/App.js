import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [show, setShow] = useState(false);
  const onButtonClick = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. or don't, whatever
        </p>
        {show && <p>now u see me</p>}
        {!show && <p>now u dont?</p>}
        <a href="http://legalaid.org">legal aid</a>
        <a href="http://legalaid.org">legal aid</a>
        <a href="http://legalaid.org">legal aid</a>
        <a href="http://legalaid.org">legal aid</a>
        <a href="http://legalaid.org">legal aid</a>
        <button onClick={onButtonClick}>switch</button>
        <p>hello to all my friends welcome to my internet location</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React queen
        </a>
      </header>
    </div>
  );
}

export default App;
