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
        style={{ marginTop: '1rem' }}
      >
        {isOpen ? '✕ Close Showcase' : '⚡ Open Simulation Showcase'}
      </button>
      
      {isOpen && (
        <div className="gallery-overlay">
          <div className="gallery-grid">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item" 
                onClick={() => setSelectedItem(item)}
                style={{ cursor: 'zoom-in' }}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={`Simulation render ${idx + 1}`} loading="lazy" />
                ) : (
                  <div className="video-thumb-container">
                    <video src={item.src} muted playsInline />
                    <div className="video-play-hint">▶</div>
                  </div>
                )}
              </div>
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
        <div className="lightbox-overlay" onClick={() => setSelectedItem(null)}>
          <button className="lightbox-close" onClick={() => setSelectedItem(null)}>✕</button>
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
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

  const contentBody = (
    <div 
      className={`node-card ${accentClass} ${item.link ? 'clickable-card' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (item.link && item.link.url !== '#') {
          window.open(item.link.url, '_blank', 'noopener,noreferrer');
        }
      }}
      style={{ position: 'relative', overflow: 'hidden', cursor: item.link ? 'pointer' : 'default' }}
    >
      {item.video && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 10,
          backgroundColor: '#000',
          borderRadius: 'inherit'
        }}>
          <video 
            ref={videoRef}
            src={item.video} 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      )}
      {item.period && <div className="card-year">{item.period}</div>}
      {item.badge && <div className="badge">{item.badge}</div>}
      <div className="card-header-flex">
        <div className="card-title">{item.title || item.degree}</div>
        {item.link && <span className="card-link-icon">↗</span>}
      </div>
      <div className="card-sub">{item.institution || item.sub || ''}</div>
      <div className="card-body">
        {item.score && <p>{item.score}</p>}
        {item.description && <p>{item.description}</p>}
        {item.bullets && (
          <ul style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>

      {item.gallery && (
        <div onClick={(e) => e.stopPropagation()}>
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
        <div className="node-dot"><div className="dot-outer"><div className="dot-inner"></div></div></div>
      )}
      
      {isLeft ? (
        <div className="node-dot"><div className="dot-outer"><div className="dot-inner"></div></div></div>
      ) : (
        <div className="node-content">{contentBody}</div>
      )}
      
      {isLeft ? <div className="node-empty"></div> : null}
    </div>
  );
};

const Timeline = ({ education, experience, projects, achievements, simulations }) => {
  let isLeft = true;
  const tlRef = useRef(null);
  const glowRef = useRef(null);

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
  
  const renderList = (title, items) => {
    return (
      <React.Fragment key={title}>
        <div className="chapter"><div className="chapter-label">✦ {title}</div></div>
        {items.map((item, idx) => {
          const content = <TimelineNode key={idx + title} item={item} isLeft={isLeft} />;
          isLeft = !isLeft;
          return content;
        })}
      </React.Fragment>
    );
  };

  return (
    <div id="timeline" ref={tlRef}>
      <div className="spine"></div>
      <div className="spine-glow" ref={glowRef}></div>
      {renderList('Education', education || [])}
      {renderList('Experience', experience || [])}
      {renderList('Projects', projects || [])}
      {renderList('Achievements', achievements || [])}
      {renderList('Simulations', simulations || [])}
    </div>
  );
};

export default Timeline;
