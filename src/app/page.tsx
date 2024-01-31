import AboutUs from './components/AboutUs';
import Appointment from './components/Appointment';
import CTA from './components/CTA';
import DifferentThings from './components/DifferentThings';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Location from './components/Location';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testi from './components/Testi';
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
      <Testi />
      <CTA />
      <Footer />
    </>
  );
}
