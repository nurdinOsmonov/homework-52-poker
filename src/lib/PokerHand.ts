import Card from "./Card";

class PokerHand {
  constructor(public hand: Card[]) {
  }

  getOutcome() {
    let counter = 0;
    for (let i = 0; i < this.hand.length; i++) {
      for (let j = 0; j < this.hand.length; i++) {
        counter++;
      }
    }
    return counter;
  }
}

export default PokerHand;