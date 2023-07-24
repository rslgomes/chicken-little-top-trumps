import styles from '../app/styles/home.module.css';

export default function AccordionStep({
  isOpen,
  id,
  stepTitle,
  setOpenStepId,
  image
}) {
  const handleClick = (event) => {
    const clickedId = event.target.id;
    setOpenStepId(clickedId);
  };

  return (
    <div className={ `${styles.accordionStep} ${isOpen ? styles.open : ''}` }>
      <div className={ styles.accordionHeader }>
        <button
          id={ id }
          className={ styles.invisibleButton }
          onClick={ handleClick }
          aria-label={ stepTitle }
        />
        <span className={ styles.buttonText }>{stepTitle}</span>
      </div>
      <div className={ styles.accordionContent }>
        <img src={ image } alt={ stepTitle } />
      </div>
    </div>
  );
}
