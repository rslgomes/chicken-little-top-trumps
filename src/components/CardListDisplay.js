import CardSamples from '../lib/CardSamples.json';
import DisplayCard from './DisplayCard';
import styles from '../app/styles/mycards.module.css';

export default function CardListDisplay() {
  const cards = CardSamples.sample;

  return (
    <div className={ styles.cardList }>
      { cards.map((card) => (
        <DisplayCard
          key={ card.id }
          card={ card }
        />
      ))}
    </div>
  );
}
