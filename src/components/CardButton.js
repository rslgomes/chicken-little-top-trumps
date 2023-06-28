import styles from '../app/styles/mycards.module.css';

export default function CardButton() {
  return (
    <div className={styles.cardHolder}>
    <div className={ styles.createCard }>
      <button className={ styles.createButton }>+</button>
    </div>
    </div>
  );
}
