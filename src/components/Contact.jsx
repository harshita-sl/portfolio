import React from 'react';
import FiducialMarker from './FiducialMarker';

const Contact = ({ email, links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <div className="contact-big">Let's Connect</div>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontStyle: "italic", color: "var(--dim)", marginBottom: "1.5rem", fontSize: "1.05rem", position: "relative" }}>
        Open to research collaborations, internships &amp; interesting projects.
      </p>
      <a href={`mailto:${email}`} className="contact-email">{email}</a>

      <div className="contact-row">
        {links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="signature-note">
        <FiducialMarker id="Harshita Sharma" size={30} className="signature-marker" />
        <p>
          Every project and entry on this site carries a marker like this one — a pattern generated
          deterministically from its name. This one's mine.
        </p>
      </div>

      <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: ".58rem", color: "var(--dim)", marginTop: "2rem", letterSpacing: ".1em", position: "relative" }}>
        © {currentYear} HARSHITA SHARMA · IIT BHILAI
      </p>
    </section>
  );
};

export default Contact;
