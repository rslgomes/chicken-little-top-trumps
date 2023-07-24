import styles from '../app/styles/home.module.css';
import cardStyles from '../app/styles/mycards.module.css';
import RenderCardName from './RenderCardName';
import RenderCardImage from './RenderCardImage';
import RenderTableBox from './RenderTableBox';
import CardSamples from '../lib/CardSamples.json';

export default function Frame1() {
  const {
    cardName,
    imageUrl,
    anger,
    cuteness,
    peckStrength,
    crestSize,
  } = CardSamples.sample[2];

  return (
    <div className={ styles.frame }>
      <div className={ styles.firstLeft }>
        <h1>XicoLiro</h1>
        <p>Create toptrumps inspired cards featuring wrong names for chicken little</p>
      </div>
      <div className={ styles.firstRight }>
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
      </div>
    </div>
  );
}
