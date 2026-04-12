import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;

    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.8 + 0.2,
        d: (Math.random() - 0.5) * 0.015,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      }));
    };

    initStars();
    window.addEventListener('resize', initStars);

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const computedStyle = getComputedStyle(document.body);
      const gold = computedStyle.getPropertyValue('--gold').trim() || '#c9a84c';
      const particleColor = isDark ? gold : '#000000';

      stars.forEach(s => {
        // Move particles slightly
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around screens
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;
        
        // Twinkle
        s.o += s.d;
        if (s.o > 1 || s.o < 0.1) s.d *= -1;
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        
        ctx.fillStyle = particleColor; 
        ctx.globalAlpha = s.o;
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(drawStars);
    };
    drawStars();

    return () => {
      window.removeEventListener('resize', initStars);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="starfield" 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default Starfield;
