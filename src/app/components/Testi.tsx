import React from 'react';
import photo1 from '../assets/testi-photo-1.png';
import Image from 'next/image';
import pattern from '../assets/testi pattern.png'

function Testi() {
  return (
    <section className="testi">
      <div className="testi__container">
        <h1>96% our patients satisfied with our services</h1>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
          <div className="testi-card">
            <div className="testi-card-profil">
              <Image src={photo1} alt="testi photo 1" />
              <div>
                <span style={{ display: 'block' }} className="span-1">
                  Kostas Maprovanos
                </span>
                <span className="span-2">Product Designer</span>
              </div>
            </div>
            <p>When your body is not going well, you must to go to clinically. The service is definetely fast, good and clinically. I already recomendthis clinic to my family and friends</p>
          </div>
        </div>
      </div>
      <Image src={pattern} alt='testi pattern' className='testi-pattern'/>
    </section>
  );
}

export default Testi;
