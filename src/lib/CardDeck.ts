import Card from "./Card";

class CardDeck {
  public array: Card[] = [];

  constructor(
    public suits = ['clubs', 'spades', 'diams', 'hearts'],
    public ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
  )

  {
    for (let i = 0; i <= this.suits.length - 1; i++) {
      for (let j = 0; j <= this.ranks.length - 1; j++) {
        this.array.push(new Card(this.suits[i], this.ranks[j]));
      }
    }
  }

  getCard(): Card {
    const randomCard = Math.floor(Math.random() * this.array.length);
    return this.array.splice(randomCard, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const round = [];
    for (let i = 0; i < howMany; i++) {
      round.push(this.getCard());
    }
    return round;
  }

}

export default CardDeck;
