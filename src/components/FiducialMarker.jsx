import React from 'react';

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Deterministic 4x4 ArUco-style bit pattern, hashed from a stable id.
// Same id always renders the same marker.
const FiducialMarker = ({ id, size = 64, className = '' }) => {
  const hash = hashString(id);
  const cell = size / 6;
  const bits = [];
  for (let i = 0; i < 16; i++) {
    bits.push((hash >> i) & 1);
  }

  return (
    <svg
      className={`fiducial-marker ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Fiducial marker ${id}`}
    >
      <rect x="0" y="0" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" />
      {bits.map((bit, i) => {
        if (!bit) return null;
        const row = Math.floor(i / 4);
        const col = i % 4;
        return (
          <rect
            key={i}
            x={cell + col * cell}
            y={cell + row * cell}
            width={cell}
            height={cell}
            fill="currentColor"
          />
        );
      })}
    </svg>
  );
};

export default FiducialMarker;
