import React, { Component } from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import FlashcardsPage from "./components/flashcards-page/Flashcards-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
            <Route path='/flashcards' component={}/>
        </Switch>
      </div>
    );
  }
}

export default App;
