import cardStyles from '../app/styles/mycards.module.css';

export default function RenderCardImage({ imageUrl, cardName }) {
  return (
    <div className={ cardStyles.imageContainer }>
      <img
        className={ cardStyles.image }
        src={ imageUrl }
        width="100%"
        height="100%"
        alt={ cardName }
      />
    </div>
  );
}
