import React, {useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import { useJitsu } from "@jitsu/react";

const App = () => {

  const { id, trackEvent, trackPageView } = useJitsu();

  useEffect(() => {
    id({id: 'react_test_9', email: 'artem@jitsu.com'})
    trackPageView()
    trackEvent('custom_event', {test: true});
  }, [])

  const clickHandler = () => {
    trackEvent("my_button_click")
  }

  return (
    <div className="App">
      <button onClick={clickHandler}></button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
