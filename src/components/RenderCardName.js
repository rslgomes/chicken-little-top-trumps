import cardStyles from '../app/styles/mycards.module.css';

export default function RenderCardName({ cardName }) {
  return (
    <div className={ cardStyles.nameContainer }>
      <div>
        <div>{ cardName }</div>
      </div>
    </div>
  );
}
