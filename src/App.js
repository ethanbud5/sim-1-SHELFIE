import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
