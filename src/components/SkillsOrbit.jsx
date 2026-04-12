import React, { useEffect, useRef } from 'react';

const SkillsOrbit = ({ skills }) => {
  const wrapRef = useRef(null);

  // Flatten skills into a ring array where r=0, r=1, r=2 based on category or index
  const categories = Object.keys(skills);
  let parsedSkills = [];
  categories.forEach((cat, index) => {
    const list = skills[cat];
    list.forEach(skillName => {
      parsedSkills.push({
        n: skillName,
        r: Math.min(index, 2) // limit to 3 rings max (0, 1, 2)
      });
    });
  });

  useEffect(() => {
    if (!wrapRef.current) return;
    const wrap = wrapRef.current;
    
    // Clear old orbs for strict mode compliance
    const existingOrbs = wrap.querySelectorAll('.skill-orb');
    existingOrbs.forEach(el => el.remove());

    const rads = [110, 185, 260];
    const byRing = [
      parsedSkills.filter(s => s.r === 0),
      parsedSkills.filter(s => s.r === 1),
      parsedSkills.filter(s => s.r === 2)
    ];

    byRing.forEach((ring, ri) => {
      ring.forEach((skill, si) => {
        const a = (si / ring.length) * Math.PI * 2 - Math.PI / 2;
        const cx = 270 + rads[ri] * Math.cos(a);
        const cy = 270 + rads[ri] * Math.sin(a);
        const orb = document.createElement('div');
        orb.className = 'skill-orb';
        orb.textContent = skill.n;
        orb.style.left = cx + 'px';
        orb.style.top = cy + 'px';
        wrap.appendChild(orb);
      });
    });

    let oa = 0;
    let reqId;
    const animOrbit = () => {
      oa += 0.0012;
      const rings = wrap.querySelectorAll('.orbit-ring');
      rings.forEach((ring, i) => {
        ring.style.transform = `translate(-50%,-50%) rotate(${oa * (i % 2 === 0 ? 1 : -1) * (i + 1)}rad)`;
      });
      reqId = requestAnimationFrame(animOrbit);
    };
    animOrbit();

    return () => cancelAnimationFrame(reqId);
  }, [skills]);

  return (
    <section id="skills-section">
      <div className="section-heading">ARSENAL</div>
      <p className="section-sub">Languages · Tools · Frameworks</p>
      <div className="skills-orbit-wrap" id="orbitWrap" ref={wrapRef}>
        <div className="orbit-ring orbit-ring-1"></div>
        <div className="orbit-ring orbit-ring-2"></div>
        <div className="orbit-ring orbit-ring-3"></div>
        <div className="orbit-center">SKILLS</div>
      </div>
    </section>
  );
};

export default SkillsOrbit;
