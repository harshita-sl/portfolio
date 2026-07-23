import React, { useEffect, useRef, useState } from 'react';
import FiducialMarker from './FiducialMarker';
import SimulationGallery from './SimulationGallery';

const DeckCard = ({ id, category, period, badge, title, sub, body, bullets, tags, link, children, onCardClick }) => {
  const clickable = link && link.url && link.url !== '#';
  return (
    <div
      className={`deck-card-inner ${clickable ? 'deck-card-clickable' : ''}`}
      onClick={() => { if (clickable) onCardClick(link.url); }}
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

const CareerDeck = ({ education, experience, achievements, simulations }) => {
  const leadership = (achievements || []).filter(a => /^(Maintainer|Core Member)/.test(a.title));
  const awards = (achievements || []).filter(a => !/^(Maintainer|Core Member)/.test(a.title));

  const cards = [
    ...(education || []).map((item, i) => ({
      key: `edu-${i}`, id: `edu-${item.institution}-${i}`, category: 'Education',
      period: item.period, title: item.degree, sub: item.institution, body: item.score
    })),
    ...(experience || []).map((item, i) => ({
      key: `exp-${i}`, id: `exp-${item.institution}-${i}`, category: 'Experience',
      period: item.period, badge: item.badge, title: item.title, sub: item.institution,
      bullets: item.bullets, tags: item.techStack, link: item.link
    })),
    ...awards.map((item, i) => ({
      key: `award-${i}`, id: `award-${item.title}-${i}`, category: 'Achievement',
      title: item.title, body: item.description, link: item.link
    })),
    ...leadership.map((item, i) => ({
      key: `lead-${i}`, id: `lead-${item.title}-${i}`, category: 'Leadership',
      title: item.title, body: item.description, link: item.link
    })),
    ...(simulations || []).map((item, i) => ({
      key: `sim-${i}`, id: `sim-${item.title}-${i}`, category: 'Studio',
      title: item.title, sub: item.description,
      gallery: <SimulationGallery items={item.gallery} instagram={item.instagram} />
    }))
  ];

  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const dragState = useRef({ startX: 0, dragging: false, moved: false });

  const goPrev = () => setActive((i) => Math.max(0, i - 1));
  const goNext = () => setActive((i) => Math.min(cards.length - 1, i + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cards.length]);

  const onPointerDown = (e) => {
    dragState.current = { startX: e.clientX, dragging: true, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 5) dragState.current.moved = true;
    setDragX(delta);
  };
  const onPointerUp = () => {
    if (!dragState.current.dragging) return;
    if (dragX < -60) goNext();
    else if (dragX > 60) goPrev();
    dragState.current.dragging = false;
    setDragX(0);
  };

  const handleCardClick = (url) => {
    if (dragState.current.moved) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="timeline">
      <div className="section-heading">Career Deck</div>
      <p className="section-sub">Education, experience, and the record so far — drag or use the arrows</p>

      <div className="deck-wrap">
        <button className="deck-nav deck-nav-prev" onClick={goPrev} disabled={active === 0} aria-label="Previous">‹</button>

        <div
          className="deck-track"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {cards.map((card, i) => {
            const offset = i - active;
            let style;
            if (offset === 0) {
              style = {
                transform: `translateX(${dragX}px) rotate(${dragX / 30}deg)`,
                opacity: 1, zIndex: 50,
                transition: dragState.current.dragging ? 'none' : 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              };
            } else if (offset === -1) {
              style = { transform: 'translateX(-38px) translateY(10px) rotate(-6deg) scale(0.94)', opacity: 0.7, zIndex: 40, pointerEvents: 'none' };
            } else if (offset === 1) {
              style = { transform: 'translateX(38px) translateY(10px) rotate(6deg) scale(0.94)', opacity: 0.7, zIndex: 40, pointerEvents: 'none' };
            } else if (offset === -2) {
              style = { transform: 'translateX(-62px) translateY(18px) rotate(-10deg) scale(0.88)', opacity: 0.35, zIndex: 30, pointerEvents: 'none' };
            } else if (offset === 2) {
              style = { transform: 'translateX(62px) translateY(18px) rotate(10deg) scale(0.88)', opacity: 0.35, zIndex: 30, pointerEvents: 'none' };
            } else {
              style = { transform: `translateX(${offset > 0 ? 90 : -90}px) scale(0.8)`, opacity: 0, zIndex: 10, pointerEvents: 'none' };
            }
            return (
              <div className="deck-card" key={card.key} style={style}>
                <DeckCard {...card} onCardClick={handleCardClick}>
                  {card.gallery}
                </DeckCard>
              </div>
            );
          })}
        </div>

        <button className="deck-nav deck-nav-next" onClick={goNext} disabled={active === cards.length - 1} aria-label="Next">›</button>
      </div>

      <div className="deck-dots">
        {cards.map((card, i) => (
          <button
            key={card.key}
            className={`deck-dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to ${card.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerDeck;
