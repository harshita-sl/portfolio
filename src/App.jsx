import React, { useEffect } from 'react';
import { resumeData } from './data/resumeData';
import './index.css';

import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import SkillsOrbit from './components/SkillsOrbit';
import Contact from './components/Contact';

function App() {
  // Cursor follower logic
  useEffect(() => {
    const cur = document.createElement('div');
    const cur2 = document.createElement('div');
    
    cur.style.cssText = 'position:fixed; width:8px; height:8px; background:var(--gold); border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:difference; transition:transform .15s; top:0; left:0;';
    cur2.style.cssText = 'position:fixed; width:32px; height:32px; border:1px solid rgba(201,168,76,.4); border-radius:50%; pointer-events:none; z-index:9998; top:0; left:0; transition:width .2s, height .2s;';
    
    document.body.appendChild(cur);
    document.body.appendChild(cur2);

    let mx = 0, my = 0, rx = 0, ry = 0;
    const updateMouse = (e) => {
      mx = e.clientX; 
      my = e.clientY;
      cur.style.left = (mx - 4) + 'px'; 
      cur.style.top = (my - 4) + 'px';
    };

    window.addEventListener('mousemove', updateMouse);

    let reqId;
    const animCur = () => {
      rx += (mx - rx - 16) * 0.1; 
      ry += (my - ry - 16) * 0.1;
      cur2.style.left = rx + 'px'; 
      cur2.style.top = ry + 'px';
      reqId = requestAnimationFrame(animCur);
    };
    animCur();

    const hoverElements = document.querySelectorAll('a, button, .node-card, .dot-outer');
    const onEnter = () => {
      cur2.style.width = '50px'; 
      cur2.style.height = '50px'; 
      cur.style.transform = 'scale(2)';
    };
    const onLeave = () => {
      cur2.style.width = '32px'; 
      cur2.style.height = '32px'; 
      cur.style.transform = 'scale(1)';
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      cancelAnimationFrame(reqId);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cur.remove();
      cur2.remove();
    };
  }, []);

  // Merge links and coding profiles for Contact component
  let contactLinks = [];
  if (resumeData.header.links) {
    contactLinks = resumeData.header.links.filter(l => l.label !== 'Email' && l.label !== 'Phone');
  }
  if (resumeData.header.codingProfiles) {
    const profilesAsLinks = resumeData.header.codingProfiles.map(p => ({
      label: p.platform,
      url: p.url
    }));
    contactLinks = [...contactLinks, ...profilesAsLinks];
  }

  // Find the email
  const emailLink = resumeData.header.links.find(l => l.label === 'Email')?.url.replace('mailto:', '') || '';

  return (
    <>
      <Starfield />
      <Navbar />
      <Hero data={resumeData.header} />
      <About data={resumeData.header} />
      <Timeline 
        education={resumeData.education} 
        experience={resumeData.experience} 
        projects={resumeData.projects} 
        achievements={resumeData.achievements} 
        simulations={resumeData.simulations}
      />
      <SkillsOrbit skills={resumeData.skills} />
      <Contact email={emailLink} links={contactLinks} />
    </>
  );
}

export default App;
