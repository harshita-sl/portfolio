import React, { useEffect, useRef, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

const Orbit = ({ skills }) => {
  const wrapRef = useRef(null);

  const categories = Object.keys(skills);
  const parsedSkills = [];
  categories.forEach((cat, index) => {
    skills[cat].forEach((skillName) => {
      parsedSkills.push({ n: skillName, r: Math.min(index, 2) });
    });
  });

  useEffect(() => {
    if (!wrapRef.current) return;
    const wrap = wrapRef.current;

    const existingOrbs = wrap.querySelectorAll('.skill-orb');
    existingOrbs.forEach((el) => el.remove());

    const byRing = [
      parsedSkills.filter((s) => s.r === 0),
      parsedSkills.filter((s) => s.r === 1),
      parsedSkills.filter((s) => s.r === 2),
    ];

    byRing.forEach((ring, ri) => {
      ring.forEach((skill, si) => {
        const a = (si / ring.length) * Math.PI * 2 - Math.PI / 2;
        const orb = document.createElement('div');
        orb.className = 'skill-orb';
        orb.dataset.ring = ri;
        orb.dataset.angle = a;
        orb.textContent = skill.n;
        wrap.appendChild(orb);
      });
    });

    const updatePositions = () => {
      const size = wrap.offsetWidth;
      const scale = size / 720;
      const rads = [140 * scale, 245 * scale, 350 * scale];
      const center = size / 2;

      wrap.querySelectorAll('.skill-orb').forEach((orb) => {
        const ri = parseInt(orb.dataset.ring, 10);
        const a = parseFloat(orb.dataset.angle);
        orb.style.left = center + rads[ri] * Math.cos(a) + 'px';
        orb.style.top = center + rads[ri] * Math.sin(a) + 'px';
      });
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let oa = 0;
    let reqId;
    if (!reducedMotion) {
      const animOrbit = () => {
        oa += 0.0012;
        wrap.querySelectorAll('.orbit-ring').forEach((ring, i) => {
          ring.style.transform = `translate(-50%,-50%) rotate(${oa * (i % 2 === 0 ? 1 : -1) * (i + 1)}rad)`;
        });
        reqId = requestAnimationFrame(animOrbit);
      };
      animOrbit();
    }

    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      window.removeEventListener('resize', updatePositions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skills]);

  return (
    <div className="skills-orbit-wrap" ref={wrapRef} aria-hidden="true">
      <div className="orbit-ring orbit-ring-1"></div>
      <div className="orbit-ring orbit-ring-2"></div>
      <div className="orbit-ring orbit-ring-3"></div>
      <div className="orbit-center">SKILLS</div>
    </div>
  );
};

const SkillsOrbit = ({ skills }) => {
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const categories = Object.keys(skills);

  return (
    <section id="skills-section" aria-labelledby="skills-heading">
      <h2 className="section-heading" id="skills-heading">ARSENAL</h2>
      <p className="section-sub">Languages · Tools · Frameworks</p>

      {/* Accessible, data-complete grid — always in the DOM for semantics/SEO */}
      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skill-category" key={cat}>
            <h3>{cat}</h3>
            <ul className="skill-tags">
              {skills[cat].map((s) => (
                <li key={s} className="tag">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {isDesktop && <Orbit skills={skills} />}
    </section>
  );
};

export default SkillsOrbit;
