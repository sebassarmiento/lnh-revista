import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import New from './layout/New';
import NotaIndividual from './components/NotaIndividual';

class App extends Component {
  render() {
    return (
      <div >
        <h1 className="header-title" >LE NOUVEL HÉDONISMO</h1>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={New} />
              <Route path="/notas/id/:notaId" component={NotaIndividual} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
