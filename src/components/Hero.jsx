import React, { useEffect, useState } from 'react';
import AnimatedStat from './AnimatedStat';

const heroStats = [
  { value: '95.43', label: 'OOF R² · Flipkart Gridlock Hackathon' },
  { value: '1st', label: 'Intra-IIT ML Challenge' },
  { value: '82%', label: 'Hazardous-asteroid classification accuracy' },
  { value: '4', label: 'ML & robotics systems shipped' }
];

const Hero = ({ data }) => {
  const [typedName, setTypedName] = useState([]);
  
  useEffect(() => {
    if (data && data.name) {
      const letters = data.name.split('');
      setTypedName(letters);
    }
  }, [data]);

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-tag">B.Tech · IIT Bhilai · 2024–2028</div>
        <div className="name-wrap">
          <div className="name-shadow">{data.name.toUpperCase()}</div>
          <div className="name-typed">
            {typedName.map((char, index) => (
              <span key={index} style={{
                display: 'inline-block',
                opacity: 1
              }}>
                {char === ' ' ? '\u00A0' : char.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <p className="hero-subtitle">
          Mechanical engineering at IIT Bhilai, building <em>software and machine learning systems</em> —
          demand forecasting for a state power grid, classification and ensemble models for ML competitions,
          and <em>autonomous control</em> for a quadrotor. I like problems where the model has to hold up
          outside a notebook.
        </p>

        <div className="hero-stats">
          {heroStats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
      <style dangerouslySetInnerHTML={{__html: ``}}/>
    </section>
  );
};

export default Hero;
