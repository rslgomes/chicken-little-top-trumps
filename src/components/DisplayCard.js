import RenderCardName from './RenderCardName';
import RenderCardImage from './RenderCardImage';
import RenderTableBox from './RenderTableBox';
import styles from '../app/styles/mycards.module.css';

export default function DisplayCard({
  card,
  setFormData,
  setIsEdit,
}) {
  const {
    id,
    cardName,
    imageUrl,
    anger,
    cuteness,
    peckStrength,
    crestSize,
  } = card;

  const handleCardClick = () => {
    setFormData(
      { 'Card Name': cardName,
        'Image Url': imageUrl,
        Anger: anger,
        'Peck Strength': peckStrength,
        Cuteness: cuteness,
        'Crest Size': crestSize,
      },
    );
    setIsEdit({ state: true, id });
  };

  return (
    <div className={ styles.cardHolder }>
      <button className={ styles.card } onClick={ handleCardClick }>
        <RenderCardName cardName={ cardName } />
        <RenderCardImage
          imageUrl={ imageUrl }
          cardName={ cardName }
        />
        <RenderTableBox
          anger={ anger }
          cuteness={ cuteness }
          peckStrength={ peckStrength }
          crestSize={ crestSize }
        />
      </button>
    </div>
  );
}
