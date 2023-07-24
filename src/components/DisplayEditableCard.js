import RenderCardName from './RenderCardName';
import RenderCardImage from './RenderCardImage';
import RenderTableBox from './RenderTableBox';
import styles from '../app/styles/mycards.module.css';

export default function DisplayEditableCard({ formData }) {
  const {
    'Card Name': cardName,
    'Image Url': imageUrl,
    Anger: anger,
    'Peck Strength': peckStrength,
    Cuteness: cuteness,
    'Crest Size': crestSize,
  } = formData;

  return (
    <div className={ styles.cardHolder }>
      <div className={ styles.card }>
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
      </div>
    </div>
  );
}
