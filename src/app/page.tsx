import AboutUs from './components/AboutUs';
import Appointment from './components/Appointment';
import DifferentThings from './components/DifferentThings';
import Hero from './components/Hero';
import Location from './components/Location';
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
      <Appointment />
      <Location />
      <DifferentThings />
    </>
  );
}
