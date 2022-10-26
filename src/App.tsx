import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const playPoker = () => {
    const deck = new CardDeck();
    const round = deck.getCards(5);
    setCards(round);
    const result = new PokerHand(round);
    const print = result.getOutcome();
    console.log(print);
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
        <CardView rank={cards[0].rank} suit={cards[0].suit}/>
        <CardView rank={cards[1].rank} suit={cards[1].suit}/>
        <CardView rank={cards[2].rank} suit={cards[2].suit}/>
        <CardView rank={cards[3].rank} suit={cards[3].suit}/>
        <CardView rank={cards[4].rank} suit={cards[4].suit}/>
      </div>
    );
  }
}

export default App;
