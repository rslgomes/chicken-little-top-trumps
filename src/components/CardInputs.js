import CardSamples from '../lib/CardSamples.json';
import camelToTitle from './camelToTitle';

export default function CardInputs() {
  const keysArray = CardSamples.keyNames;
  return keysArray.map((key) => {
    return (
      <label
        key={ key }
      >
        { key }
        <input
          type="text"
          id={ key }
          name={ key }
        />
      </label>
    );
  });
}
