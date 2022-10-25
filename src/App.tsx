import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

function App() {

  const deck = new CardDeck();
  const round = deck.getCards(5);



    return (
      <div className="App">

      </div>
    );

}

export default App;
