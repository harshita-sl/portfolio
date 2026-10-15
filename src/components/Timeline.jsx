import React, { useEffect, useRef, useState } from 'react';

const SimulationGallery = ({ items, instagram }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="simulation-content">
      <button
        className="btn-gallery-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ marginTop: '1rem' }}
      >
        {isOpen ? '✕ Close Showcase' : '⚡ Open Simulation Showcase'}
      </button>

      {isOpen && (
        <div className="gallery-overlay">
          <div className="gallery-grid">
            {items.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="gallery-item"
                onClick={() => setSelectedItem(item)}
                aria-label={`Open ${item.type} ${idx + 1} in lightbox`}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={`Simulation render ${idx + 1}`} loading="lazy" />
                ) : (
                  <div className="video-thumb-container">
                    <video src={item.src} muted playsInline preload="metadata" />
                    <div className="video-play-hint" aria-hidden="true">▶</div>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="gallery-footer">
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram">
               Follow @3d__dreamer_ on Instagram ↗
            </a>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          <button className="lightbox-close" onClick={() => setSelectedItem(null)} aria-label="Close media viewer">✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img src={selectedItem.src} alt="Zoomed simulation" />
            ) : (
              <video src={selectedItem.src} controls autoPlay loop playsInline />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const TimelineNode = ({ item, isLeft }) => {
  const nodeRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const nodeClass = isLeft ? 'left-node' : 'right-node';
  const accentClass = isLeft ? 'card-accent-right' : 'card-accent-left';
  const hasLink = item.link && item.link.url && item.link.url !== '#';

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    const node = nodeRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  const openLink = () => {
    if (hasLink) {
      window.open(item.link.url, '_blank', 'noopener,noreferrer');
    }
  };

  const contentBody = (
    <div
      className={`node-card ${accentClass} ${hasLink ? 'clickable-card' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openLink}
      onKeyDown={(e) => {
        if (hasLink && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          openLink();
        }
      }}
      role={hasLink ? 'link' : undefined}
      tabIndex={hasLink ? 0 : undefined}
      aria-label={hasLink ? `${item.title || item.degree} — ${item.link.text}` : undefined}
    >
      {item.video && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 10,
          backgroundColor: '#000',
          borderRadius: 'inherit',
          pointerEvents: 'none'
        }}>
          <video
            ref={videoRef}
            src={item.video}
            loop
            muted
            playsInline
            preload="metadata"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
      {item.period && <div className="card-year">{item.period}</div>}
      {item.badge && <div className="badge">{item.badge}</div>}
      <div className="card-header-flex">
        <div className="card-title">{item.title || item.degree}</div>
        {item.link && <span className="card-link-icon" aria-hidden="true">↗</span>}
      </div>
      <div className="card-sub">{item.institution || item.sub || ''}</div>
      <div className="card-body">
        {item.score && <p>{item.score}</p>}
        {item.description && <p>{item.description}</p>}
        {item.bullets && (
          <ul>
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>

      {item.gallery && (
        <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <SimulationGallery items={item.gallery} instagram={item.instagram} />
        </div>
      )}

      {item.techStack && (
        <div className="card-tags">
          {item.techStack.map((tech, i) => <span key={i} className="tag">{tech}</span>)}
        </div>
      )}
    </div>
  );

  return (
    <div ref={nodeRef} className={`node ${nodeClass}`}>
      {isLeft ? null : <div className="node-empty"></div>}

      {isLeft ? (
        <div className="node-content">{contentBody}</div>
      ) : (
        <div className="node-dot" aria-hidden="true"><div className="dot-outer"><div className="dot-inner"></div></div></div>
      )}

      {isLeft ? (
        <div className="node-dot" aria-hidden="true"><div className="dot-outer"><div className="dot-inner"></div></div></div>
      ) : (
        <div className="node-content">{contentBody}</div>
      )}

      {isLeft ? <div className="node-empty"></div> : null}
    </div>
  );
};

const Timeline = ({ education, experience, projects, achievements, simulations }) => {
  const tlRef = useRef(null);
  const glowRef = useRef(null);

  // Flatten chapters and items into a single alternating-left/right list
  const entries = React.useMemo(() => {
    const sections = [
      ['Education', education],
      ['Experience', experience],
      ['Projects', projects],
      ['Achievements', achievements],
      ['Simulations', simulations],
    ];
    const out = [];
    let left = true;
    sections.forEach(([title, items]) => {
      out.push({ type: 'chapter', key: `chapter-${title}`, title });
      (items || []).forEach((item, idx) => {
        out.push({ type: 'node', key: `${title}-${idx}`, item, isLeft: left });
        left = !left;
      });
    });
    return out;
  }, [education, experience, projects, achievements, simulations]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tlRef.current || !glowRef.current) return;
      const r = tlRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -r.top + window.innerHeight/2);
      const pct = Math.min(1, scrolled / tlRef.current.offsetHeight);
      glowRef.current.style.height = pct * tlRef.current.offsetHeight + 'px';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" ref={tlRef} aria-label="Education, experience, projects and achievements">
      <div className="spine" aria-hidden="true"></div>
      <div className="spine-glow" ref={glowRef} aria-hidden="true"></div>
      {entries.map((entry) =>
        entry.type === 'chapter' ? (
          <div className="chapter" key={entry.key}>
            <h2 className="chapter-label">✦ {entry.title}</h2>
          </div>
        ) : (
          <TimelineNode key={entry.key} item={entry.item} isLeft={entry.isLeft} />
        )
      )}
    </section>
  );
};

export default Timeline;
