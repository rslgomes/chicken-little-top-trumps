import styles from '../app/styles/mycards.module.css';

export default function FormButtons({ isEdit, handleDeleteCard }) {
  if (isEdit.state) {
    return (
      <div className={ styles.buttonContainer }>
        <button type="submit">Update</button>
        <button type="reset">Cancel</button>
        <button
          className={ styles.deleteButton }
          type="button"
          onClick={ handleDeleteCard }
        >
          Delete
        </button>
      </div>
    );
  }
  return (
    <div className={ styles.buttonContainer }>
      <button type="submit">Create</button>
      <button type="reset">Cancel</button>
    </div>
  );
}
