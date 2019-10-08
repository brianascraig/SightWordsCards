import React, { Component } from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import FlashcardsPage from "./components/flashcards-page/Flashcards-page";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
            <Route path='/flashcards' component={FlashcardsPage}/>
            <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
