import React from 'react';
import Dif1 from '../assets/dif-things-1.png';
import Dif2 from '../assets/dif-things-2.png';
import Dif3 from '../assets/dif-things-3.png';
import Dif4 from '../assets/dif-things-4.png';
import Image from 'next/image';

function DifferentThings() {
  return (
    <section className="dif-things">
      <div className="dif-things__left">
        <h1>Here's what makes us different from conventional clinics</h1>
        <p>We are brave compared to other clinics, because we believe that what we have is the best</p>
      </div>

      <div className="dif-things__right">
        <div className="dif-things__card">
          <div className="dif-things__icon-container dif-things__icon-container-1">
            <Image src={Dif1} alt="dif-thing-icon-1" style={{ width: '28px', height: 'auto' }} />
          </div>
          <h2>25+ Year Experience</h2>
          <p>Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, </p>
        </div>
        <div className="dif-things__card">
          <div className="dif-things__icon-container dif-things__icon-container-2">
            <Image src={Dif2} alt="dif-thing-icon-2" style={{ width: '28px', height: 'auto' }} />
          </div>
          <h2>24/7 Service Available</h2>
          <p>Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, </p>
        </div>
        <div className="dif-things__card">
          <div className="dif-things__icon-container dif-things__icon-container-3">
            <Image src={Dif3} alt="dif-thing-icon-3" style={{ width: '28px', height: 'auto' }} />
          </div>
          <h2>Fast process, best results</h2>
          <p>Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, </p>
        </div>
        <div className="dif-things__card">
          <div className="dif-things__icon-container dif-things__icon-container-4">
            <Image src={Dif4} alt="dif-thing-icon-4" style={{ width: '28px', height: 'auto' }} />
          </div>
          <h2>Professional Medical Team</h2>
          <p>Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, </p>
        </div>
      </div>
    </section>
  );
}

export default DifferentThings;
