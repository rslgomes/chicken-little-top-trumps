import Image from 'next/image';
import cardStyles from '../app/styles/mycards.module.css';

import angerIcon from '../lib/Icons/angerIcon.png';
import cutenessIcon from '../lib/Icons/cutenessIcon.png';
import peckStrengthIcon from '../lib/Icons/peckStrengthIcon.png';
import crestSizeIcon from '../lib/Icons/crestSizeIcon.png';

export default function RenderTableBox({ anger, cuteness, peckStrength, crestSize }) {
  return (
    <div className={ cardStyles.tableContainer }>
      <table className={ cardStyles.table }>
        <tbody>
          <tr>
            <td>
              <Image
                className={ cardStyles.icon }
                alt="anger"
                src={ angerIcon }
              />
            </td>
            <td>{ anger }</td>
            <td>
              <Image
                className={ cardStyles.icon }
                alt="cuteness"
                src={ cutenessIcon }
              />
            </td>
            <td>{ cuteness }</td>
          </tr>
          <tr>
            <td>
              <Image
                className={ cardStyles.icon }
                alt="peckStrength"
                src={ peckStrengthIcon }
              />
            </td>
            <td>{ peckStrength }</td>
            <td>
              <Image
                className={ cardStyles.icon }
                alt="crestSize"
                src={ crestSizeIcon }
              />
            </td>
            <td>{ crestSize }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
