import Image from 'next/image';
import styles from '../app/styles/mycards.module.css';

import angerIcon from '../lib/Icons/angerIcon.png';
import cutenessIcon from '../lib/Icons/cutenessIcon.png';
import peckStrengthIcon from '../lib/Icons/peckStrengthIcon.png';
import crestSizeIcon from '../lib/Icons/crestSizeIcon.png';

export default function RenderTableBox({ anger, cuteness, peckStrength, crestSize }) {
  return (
    <table className={ styles.table }>
      <tbody>
        <tr>
          <td>
            <Image
              className={ styles.icon }
              alt="anger"
              src={ angerIcon }
            />
          </td>
          <td>{ anger }</td>
          <td>
            <Image
              className={ styles.icon }
              alt="cuteness"
              src={ cutenessIcon }
            />
          </td>
          <td>{ cuteness }</td>
        </tr>
        <tr>
          <td>
            <Image
              className={ styles.icon }
              alt="peckStrength"
              src={ peckStrengthIcon }
            />
          </td>
          <td>{ peckStrength }</td>
          <td>
            <Image
              className={ styles.icon }
              alt="crestSize"
              src={ crestSizeIcon }
            />
          </td>
          <td>{ crestSize }</td>
        </tr>
      </tbody>
    </table>
  );
}

//  <Image
//    src={ angerIcon }
//    alt="banana"
//    layout="responsive"
//    height="10px"
//    width="10px"
//  />
