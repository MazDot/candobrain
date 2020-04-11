import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import brainGames from './components/pages/brainGames';
import NotFoundPage from './components/pages/NotFoundPage';
// importing game pages
import arrows from './components/pages/games/arrows';
import bigorsmall from './components/pages/games/bigorsmall';
import colorsvstext from './components/pages/games/colorsvstext';
import comparesides from './components/pages/games/comparesides';
import connectdots from './components/pages/games/connectdots';
import remembernew from './components/pages/games/remembernew';
import rememberold from './components/pages/games/rememberold';
import rememberthree from './components/pages/games/rememberthree';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/braingames" component={brainGames} />
            <Route path="/about" component={About} />
            <Route path="/brainreflexgames-arrows" component={arrows} />
            <Route path="/brainreflexgames-bigorsmall" component={bigorsmall} />
            <Route path="/brainreflexgames-colorsvstext" component={colorsvstext} />
            <Route path="/brainreflexgames-comparesides" component={comparesides} />
            <Route path="/brainreflexgames-connectdots" component={connectdots} />
            <Route path="/brainmemorygame-remembernew" component={remembernew} />
            <Route path="/brainmemorygame-rememberold" component={rememberold} />
            <Route path="/brainmemorygame-rememberthree" component={rememberthree} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
