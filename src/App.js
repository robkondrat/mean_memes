import React from 'react';
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import MemesIndex from "./components/MemesIndex"
import MyMemes from "./components/MyMemes"
import EditMeme from "./components/EditMeme"
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
          <Route exact path="/MyMemes" component={MyMemes} />
          <Route exact path="/EditMeme" component={EditMeme} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
