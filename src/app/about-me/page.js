import style from '../styles/aboutMe.module.css';
import CardSamples from '../../lib/CardSamples.json';
import Description from '../../lib/Description.json';
import RenderSampleCard from '../../components/RenderSampleCard';

export default function AboutMe() {
  return (
    <div className={ style.mainContainer }>

      <div className={ style.cardDiv }>

        <RenderSampleCard
          card={ CardSamples.sample[3] }
        />
      </div>
      <div className={ style.descriptionDiv }>
        <p>
          { Description.paragraphs[0].text }
        </p>
        <p>
          { Description.paragraphs[1].text }
        </p>
        <p>
          { Description.paragraphs[2].text }
        </p>
        <div className={ style.linksDiv }>
          <a href="https://github.com/rslgomes" >GitHub</a>
          <a href="https://www.linkedin.com/in/rodrigo-gomes-0532b564/" >LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
