import React from 'react';

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = (props) => {
  const cardClass = 'card rank-' + props.rank + ' ' + props.suit;

  const getSuit = () => {
    if (props.suit === 'clubs') {
      return '♣';
    } else if (props.suit === 'diams') {
      return '♦';
    } else if (props.suit === 'spades') {
      return '♠';
    } else if (props.suit === 'hearts') {
      return '♥';
    }
  }

  return (
    <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{getSuit()}</span>
      </span>
    </div>
  )
};

export default CardView;