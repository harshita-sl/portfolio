import React, { useEffect, useState } from 'react';
import robotImg from '../assets/hero-robot.webp';

const SPLINE_SRC = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
const SPLINE_SCENE = 'https://prod.spline.design/75fTLlPIu8VIqV9G/scene.splinecode';

const isSplineEligible = () =>
  window.matchMedia('(min-width: 900px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  !(navigator.connection && navigator.connection.saveData);

const Hero = ({ data }) => {
  const typedName = data && data.name ? data.name.split('') : [];
  // Only load the heavy 3D viewer on larger screens with motion enabled.
  const [splineEligible] = useState(isSplineEligible);
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Defer loading the viewer until the user first interacts (pointer move,
  // scroll, touch) — keeps the heavy WASM/WebGL init off the critical path.
  useEffect(() => {
    if (!splineEligible) return;

    let done = false;
    const loadSpline = () => {
      if (done) return;
      done = true;
      if (customElements.get('spline-viewer')) {
        setSplineLoaded(true);
        return;
      }
      const script = document.createElement('script');
      script.type = 'module';
      script.src = SPLINE_SRC;
      script.onload = () => setSplineLoaded(true);
      document.head.appendChild(script);
    };

    const opts = { once: true, passive: true };
    window.addEventListener('pointermove', loadSpline, opts);
    window.addEventListener('scroll', loadSpline, opts);
    window.addEventListener('touchstart', loadSpline, opts);
    const fallback = setTimeout(loadSpline, 10000);

    return () => {
      window.removeEventListener('pointermove', loadSpline);
      window.removeEventListener('scroll', loadSpline);
      window.removeEventListener('touchstart', loadSpline);
      clearTimeout(fallback);
    };
  }, [splineEligible]);

  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-spline" aria-hidden="true">
        <div className="spline-wrap">
          {splineLoaded && (
            <spline-viewer
              url={SPLINE_SCENE}
              style={{ width: '100%', height: '100%' }}>
            </spline-viewer>
          )}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">B.Tech · IIT Bhilai · 2024–2028</div>
        <div className="name-wrap">
          <div className="name-shadow" aria-hidden="true">{data.name.toUpperCase()}</div>
          <h1 className="name-typed">
            {typedName.map((char, index) => (
              <span key={index} style={{
                display: 'inline-block',
                opacity: 1
              }}>
                {char === ' ' ? ' ' : char.toUpperCase()}
              </span>
            ))}
          </h1>
        </div>
        <p className="hero-subtitle">Engineer · <em>ML Explorer</em> · 3D Artist</p>
      </div>

      {!splineLoaded && (
        <img
          className="hero-robot"
          src={robotImg}
          alt="3D render of a small robot character"
          width="400"
          height="430"
          fetchpriority="high"
        />
      )}

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
