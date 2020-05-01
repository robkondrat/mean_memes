import React from 'react';
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import MemesIndex from "./components/MemesIndex"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MemesIndex} />
          <Route exact path="/MemeGenerator" component={MemeGenerator} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
