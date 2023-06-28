import RenderCardName from './RenderCardName';
import RenderCardImage from './RenderCardImage';
import RenderTableBox from './RenderTableBox';
import styles from '../app/styles/mycards.module.css';

export default function DisplayCard({ card }) {
  const { cardName, imageUrl, anger, cuteness, peckStrength, crestSize } = card;
  return (
    <div className={ styles.cardHolder }>
      <div className={ styles.card }>
        <div className={ styles.nameContainer }>
          <RenderCardName
            cardName={ cardName }
          />
        </div>
        <div className={ styles.imageContainer }>
          <RenderCardImage
            imageUrl={ imageUrl }
            cardName={ cardName }
          />
        </div>
        <div className={ styles.tableContainer }>
          <RenderTableBox
            anger={ anger }
            cuteness={ cuteness }
            peckStrength={ peckStrength }
            crestSize={ crestSize }
          />
        </div>
      </div>
    </div>
  );
}
