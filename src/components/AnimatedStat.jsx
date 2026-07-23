import React, { useEffect, useRef, useState } from 'react';

// Parses a leading numeric value out of a stat string, e.g. "95.43" from "95.43" or "1st" -> 1
const parseTarget = (value) => {
  const match = String(value).match(/[\d.]+/);
  return match ? parseFloat(match[0]) : null;
};

const AnimatedStat = ({ value, label, duration = 1200 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);
  const target = parseTarget(value);
  const prefix = target !== null ? String(value).slice(0, String(value).indexOf(String(target))) : '';
  const suffix = target !== null ? String(value).slice(String(value).indexOf(String(target)) + String(target).length) : '';
  const decimals = target !== null && String(target).includes('.') ? String(target).split('.')[1].length : 0;

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(target * eased);
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(target);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div className="stat-tile" ref={ref}>
      <div className="stat-value">
        {target !== null ? `${prefix}${(display ?? 0).toFixed(decimals)}${suffix}` : value}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default AnimatedStat;
