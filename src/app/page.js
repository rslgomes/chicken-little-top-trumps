import styles from './styles/home.module.css';
import Frame1 from '../components/Frame1';
import Frame2 from '../components/Frame2';

export default function Home() {
  return (
    <div className="mainContainer">
      <Frame1 />
      <Frame2 />
    </div>
  );
}
