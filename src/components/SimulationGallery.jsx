import React, { useEffect, useState } from 'react';

const SimulationGallery = ({ items, instagram }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

export default SimulationGallery;
