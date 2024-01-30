import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import './sass/pages/main.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </>
  );
}
