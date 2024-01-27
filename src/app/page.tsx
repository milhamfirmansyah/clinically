import Navbar from './components/Navbar';
import './sass/pages/main.css';

export default function Home() {
  return (
    <div className="body-wrapper">
      <div className="body-container">
        <Navbar />
      </div>
    </div>
  );
}
