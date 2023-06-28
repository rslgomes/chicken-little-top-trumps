import styles from '../app/styles/mycards.module.css';
import Image from 'next/image'
import angerIcon from '../lib/Icons/angerIcon.png';

export default function RenderTableBox({ anger, cuteness, peckStrength, crestSize }) {
  return (
    <div>
      <table className={ styles.table }>
        <tr>
          <td>anger</td>
          <td>{ anger }</td>
          <td>Cuteness</td>
          <td>{ cuteness }</td>
        </tr>
        <tr>
          <td>Peck Strength</td>
          <td>{ peckStrength }</td>
          <td>Crest Size</td>
          <td>{ crestSize }</td>
        </tr>
      </table>
    </div>
  );
}

//  <Image
//    src={ angerIcon }
//    alt="banana"
//    layout="responsive"
//    height="10px"
//    width="10px"
//  />
