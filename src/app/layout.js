import './styles/globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Chicken Little TopTrumps',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <NavBar />
        { children }
      </body>
    </html>
  );
}
