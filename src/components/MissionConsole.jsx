import React, { useEffect, useRef, useState } from 'react';
import FiducialMarker from './FiducialMarker';
import SimulationGallery from './SimulationGallery';

const MissionTile = ({ id, category, period, badge, title, sub, body, bullets, tags, link, children }) => {
  const tileRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setVisible(true); });
    }, { threshold: 0.15 });
    if (tileRef.current) observer.observe(tileRef.current);
    return () => { if (tileRef.current) observer.unobserve(tileRef.current); };
  }, []);

  const clickable = link && link.url && link.url !== '#';

  return (
    <div
      ref={tileRef}
      className={`mission-tile ${visible ? 'visible' : ''} ${clickable ? 'mission-tile-clickable' : ''}`}
      onClick={() => { if (clickable) window.open(link.url, '_blank', 'noopener,noreferrer'); }}
    >
      <div className="mission-tile-head">
        <FiducialMarker id={id} size={34} className="mission-marker" />
        <div className="mission-category">{category}</div>
      </div>

      {(period || badge) && (
        <div className="mission-meta">
          {period && <span className="mission-period">{period}</span>}
          {badge && <span className="badge">{badge}</span>}
        </div>
      )}

      <div className="mission-title">{title}</div>
      {sub && <div className="mission-sub">{sub}</div>}

      {body && <p className="mission-body">{body}</p>}
      {bullets && (
        <ul className="mission-bullets">
          {bullets.slice(0, 2).map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {children}

      {tags && tags.length > 0 && (
        <div className="card-tags mission-tags">
          {tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
        </div>
      )}

      {clickable && <span className="mission-link-icon">↗</span>}
    </div>
  );
};

const MissionConsole = ({ education, experience, achievements, simulations }) => {
  const leadership = (achievements || []).filter(a => /^(Maintainer|Core Member)/.test(a.title));
  const awards = (achievements || []).filter(a => !/^(Maintainer|Core Member)/.test(a.title));

  return (
    <section id="timeline">
      <div className="section-heading">Mission Log</div>
      <p className="section-sub">Education, experience, and the record so far</p>

      <div className="mission-grid">
        {(education || []).map((item, i) => (
          <MissionTile
            key={`edu-${i}`}
            id={`edu-${item.institution}-${i}`}
            category="Education"
            period={item.period}
            title={item.degree}
            sub={item.institution}
            body={item.score}
          />
        ))}

        {(experience || []).map((item, i) => (
          <MissionTile
            key={`exp-${i}`}
            id={`exp-${item.institution}-${i}`}
            category="Experience"
            period={item.period}
            badge={item.badge}
            title={item.title}
            sub={item.institution}
            bullets={item.bullets}
            tags={item.techStack}
            link={item.link}
          />
        ))}

        {awards.map((item, i) => (
          <MissionTile
            key={`award-${i}`}
            id={`award-${item.title}-${i}`}
            category="Achievement"
            title={item.title}
            body={item.description}
            link={item.link}
          />
        ))}

        {leadership.map((item, i) => (
          <MissionTile
            key={`lead-${i}`}
            id={`lead-${item.title}-${i}`}
            category="Leadership"
            title={item.title}
            body={item.description}
            link={item.link}
          />
        ))}

        {(simulations || []).map((item, i) => (
          <MissionTile
            key={`sim-${i}`}
            id={`sim-${item.title}-${i}`}
            category="Studio"
            title={item.title}
            sub={item.description}
          >
            <SimulationGallery items={item.gallery} instagram={item.instagram} />
          </MissionTile>
        ))}
      </div>
    </section>
  );
};

export default MissionConsole;
