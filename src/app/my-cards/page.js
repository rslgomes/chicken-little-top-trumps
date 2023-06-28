import CardForm from '../../components/CardForm';
import CardListDisplay from '../../components/CardListDisplay';
import styles from '../styles/mycards.module.css';

export default function MyCards() {
  return (
    <div className={ styles.myCards }>
      <CardForm />
      <CardListDisplay />
    </div>
  );
}
