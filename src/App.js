import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from'./components/flat';

class App extends Component {
  render() {

      const flat = {
        "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
        "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
        "price": 164,
        "priceCurrency": "EUR",
        "lat": 48.884211,
        "lng": 2.346890
      };
  return (
       // <div>
       //   <Flat flat={flat}/>
       //   <Flat flat={flat}/>
       // </div>
      <div className="app">
        <div className="main">
            <div className="search">
              x
            </div>
            <div className="flats">
              y
            </div>
        </div>
        <div className="map">
          z
        </div>
      </div>
    );
  }
}

export default App;
