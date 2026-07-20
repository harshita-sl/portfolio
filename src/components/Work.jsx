import React from 'react';
import FiducialMarker from './FiducialMarker';

const WorkCase = ({ project }) => {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <article className="work-case">
      <div className="work-rail">
        <FiducialMarker id={project.id} size={64} className="work-marker" />
        <div className="work-domain">{project.domain}</div>
        <div className="work-context">{project.context}</div>
        <div className="work-rail-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tag">{tech}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link.url} target="_blank" rel="noopener noreferrer" className="work-link">
            {project.link.text} ↗
          </a>
        )}
      </div>

      <div className="work-body">
        <h3 className="work-title">{project.title}</h3>

        <div className="work-block">
          <div className="work-block-label">The Problem</div>
          <p className="work-block-text">{cs.problem}</p>
        </div>
        <div className="work-block">
          <div className="work-block-label">What I Built</div>
          <p className="work-block-text">{cs.built}</p>
        </div>
        <div className="work-block">
          <div className="work-block-label">A Decision I Had to Make</div>
          <p className="work-block-text">{cs.decision}</p>
        </div>
        <div className="work-block work-block-gap">
          <div className="work-block-label">What Didn't Show Up in the Plan</div>
          <p className="work-block-text">{cs.simGap}</p>
        </div>
        <div className="work-block">
          <div className="work-block-label">Where It Landed</div>
          <p className="work-block-text">{cs.landed}</p>
        </div>
      </div>
    </article>
  );
};

const Work = ({ projects }) => {
  return (
    <section id="work">
      <div className="section-heading">Work</div>
      <p className="section-sub">Four projects, read as case studies</p>
      <div className="work-list">
        {(projects || []).map((project) => (
          <WorkCase key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
