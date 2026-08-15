import React from 'react';
import resumeFile from '../assets/Resume_harshita.pdf';

const About = ({ data }) => {
  // Extract LinkedIn and GitHub links from data.links
  const githubLink = data.links.find(l => l.label === 'GitHub')?.url || '#';
  const linkedinLink = data.links.find(l => l.label === 'LinkedIn')?.url || '#';
  const xLink = "https://x.com/Harshit45268856";
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
            I am a <strong>Mechanical Engineering student</strong> at <strong>IIT Bhilai</strong> with a passion for building intelligent autonomous systems at the intersection of <strong>Robotics</strong>, <strong>Machine Learning</strong>, and <strong>Software Engineering</strong>. My work focuses on developing reliable, production-ready solutions that combine perception, control, and data-driven decision making.
            </p>

            <p className="about-text">
            I have hands-on experience building <strong>ROS 2</strong> and <strong>PX4</strong> based autonomous drone systems, designing distributed multi-process architectures, and developing machine learning models for real-world forecasting and risk prediction. I enjoy solving challenging engineering problems, from vision-based navigation and control systems to scalable ML pipelines and open-source software development.
          </p>

          <p className="about-text">
            Currently, I am expanding my expertise in <strong>Artificial Intelligence</strong>, <strong>Computer Vision</strong>, and <strong>Autonomous Robotics</strong>, while contributing to open-source projects and exploring technologies that make intelligent systems more reliable, efficient, and impactful.
          </p>
          </div>
          
          <div className="about-sidebar">
            <div className="resume-card">
              <div className="resume-icon">📄</div>
              <div className="resume-info">
                <h3>Curriculum Vitae</h3>
                <p>Detailed overview of my academic and technical journey.</p>
              </div>
              <a href={resumeFile} download="Resume_harshita.pdf" className="btn-resume">
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
              <a href={xLink} target="_blank" rel="noopener noreferrer" className="social-box x">
                <div className="social-icon-label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  <span className="social-tag">X</span>
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
