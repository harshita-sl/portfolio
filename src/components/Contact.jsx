import React from 'react';

const Contact = ({ email, links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="contact-big">Let's Connect</div>
      <p className="contact-blurb">
        Open to research collaborations, internships &amp; interesting projects.
      </p>
      <a href={`mailto:${email}`} className="contact-email">{email}</a>

      <nav className="contact-row" aria-label="Social and coding profiles">
        {links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            {link.label}
          </a>
        ))}
      </nav>

      <p className="contact-note">
        © {currentYear} HARSHITA SHARMA · IIT BHILAI
      </p>
    </footer>
  );
};

export default Contact;
