import styles from '../app/styles/mycards.module.css';

export default function RenderCardImage({ imageUrl, cardName }) {
  return (
    <img
      className={ styles.image }
      src={ imageUrl }
      width="100%"
      height="100%"
      alt={ cardName }
    />
  );
}
