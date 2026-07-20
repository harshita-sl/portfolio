import React, { useEffect, useState } from 'react';

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
      <div className="hero-spline">
        <div className="spline-wrap">
          <video
            src={`${import.meta.env.BASE_URL}videos/gazebo_demo.webm`}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

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
          Mechanical engineering at IIT Bhilai. I build systems that predict and systems that act —
          a <em>quadrotor that lands itself on a marker</em>, and short-term load forecasting for a state grid.
        </p>
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
