import React from 'react';
import resumeFile from '../assets/Harshita_Sharma_resume.pdf';

const About = ({ data }) => {
  // Extract LinkedIn and GitHub links from data.links
  const githubLink = data.links.find(l => l.label === 'GitHub')?.url || '#';
  const linkedinLink = data.links.find(l => l.label === 'LinkedIn')?.url || '#';
  const instagramLink = "https://www.instagram.com/3d__dreamer_/";

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-main">
            <p className="about-text">
              I am a <strong>Mechanical Engineering student</strong> at <strong>IIT Bhilai</strong> with a deep focus on <strong>Robotics</strong> and <strong>Machine Learning</strong>. 
              My journey involves bridging the gap between mechanical systems and intelligent software, specializing in autonomous drone systems, vision-based navigation, and high-fidelity simulations.
            </p>
            <p className="about-text">
              I am deeply invested in the integration of <strong>Blockchain technology</strong> with <strong>Machine Learning</strong> to create decentralized, high-trust intelligent systems. 
              My work explores how predictive models can be deployed on-chain for secure data verification and automated decision-making in robotics and smart infrastructure.
            </p>
          </div>
          
          <div className="about-sidebar">
            <div className="resume-card">
              <div className="resume-icon">📄</div>
              <div className="resume-info">
                <h3>Curriculum Vitae</h3>
                <p>Detailed overview of my academic and technical journey.</p>
              </div>
              <a href={resumeFile} download="Harshita_Sharma_Resume.pdf" className="btn-resume">
                Download Resume
              </a>
            </div>
            
            <div className="social-links-about">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="social-box github">
                <div className="social-icon-label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                  <span className="social-tag">GitHub</span>
                </div>
                <span className="social-arrow">↗</span>
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="social-box linkedin">
                <div className="social-icon-label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="social-tag">LinkedIn</span>
                </div>
                <span className="social-arrow">↗</span>
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="social-box instagram">
                <div className="social-icon-label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span className="social-tag">Instagram</span>
                </div>
                <span className="social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
