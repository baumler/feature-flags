import React from 'react';
import { ReactComponent as Logo} from './logo.svg';
import './App.css';
import { FlaggedFeature } from "./FlaggedFeature";

function App() {
  return (
    <div className="app">
      <div className="app-banner-empty">
        Banner flag is set to "true" so it is hidden
      </div>

      <FlaggedFeature flag="test-banner">
        <div className="app-banner">
          BANNER -- Flag is set to "false" so you see me!
        </div>
      </FlaggedFeature>

      <div className="app-content">
        <div className="centered">
          <h1>React Feature Flag</h1>

          <div className="logos">
            <Logo />
            <Logo />
          </div>
        </div>

        <hr/>

        <div className="center-left">
          <p>To toggle the feature flag:</p>

          <ul>
            <li>Open <code>src/features.json</code></li>
            <li>Change <code>active</code></li>
          </ul>
        </div>
      </div>

      <footer>&copy; {new Date().getFullYear()} Tyler Baumler</footer>
    </div>
  );
}

export default App;
