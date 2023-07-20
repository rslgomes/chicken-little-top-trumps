import DisplayCard from './DisplayCard';
import styles from '../app/styles/mycards.module.css';
import DisplayEditableCard from './DisplayEditableCard';

export default function CardListDisplay({
  cards,
  formData,
  setFormData,
  isEdit,
  setIsEdit,
}) {
  if (isEdit.state) {
    return (
      <div className={ styles.cardList }>
        <DisplayEditableCard formData={ formData } />
      </div>
    );
  }
  return (
    <div className={ styles.cardList }>
      { cards.map((card) => (
        <DisplayCard
          key={ card.id }
          card={ card }
          setFormData={ setFormData }
          setIsEdit={ setIsEdit }
        />
      ))}
    </div>
  );
}
