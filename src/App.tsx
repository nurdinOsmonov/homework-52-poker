import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const deck = new CardDeck();
  const round = deck.getCards(5);

  const playPoker = () => {
    setCards(round);
  }

  const button = <button className="playButton" onClick={playPoker}>Play</button>;

  if (cards.length === 0) {
    return (
      <div>
        {button}
      </div>
    )
  } else {
    return (
      <div className="App">
        {button}
        <CardView rank={round[0].rank} suit={round[0].suit}/>
        <CardView rank={round[1].rank} suit={round[1].suit}/>
        <CardView rank={round[2].rank} suit={round[2].suit}/>
        <CardView rank={round[3].rank} suit={round[3].suit}/>
        <CardView rank={round[4].rank} suit={round[4].suit}/>
      </div>
    );
  }
}

export default App;
