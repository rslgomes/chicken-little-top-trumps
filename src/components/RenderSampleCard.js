import styles from '../app/styles/home.module.css';
import cardStyles from '../app/styles/mycards.module.css';

import RenderCardImage from './RenderCardImage';
import RenderCardName from './RenderCardName';
import RenderTableBox from './RenderTableBox';

export default function RenderSampleCard({ card }) {
  const {
    cardName,
    imageUrl,
    anger,
    cuteness,
    peckStrength,
    crestSize,
  } = card;

  return (
    <div className={ styles.cardHolder }>
      <div className={ cardStyles.card }>
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
