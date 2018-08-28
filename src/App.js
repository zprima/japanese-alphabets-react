import React, { Component } from "react";
import "./App.css";

import JpnList from "./components/jpnList.jsx";
import { hiragana, katakana } from "./utils/mappings.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <JpnList title="Hiragana" alphabeth={hiragana} />
        <br />
        <JpnList title="Katakana" alphabeth={katakana} />
      </div>
    );
  }
}

export default App;
