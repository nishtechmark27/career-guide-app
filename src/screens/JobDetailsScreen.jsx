import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft, IconBookmark, IconCheck } from '../components/icons';

export const JobDetailsScreen = () => {
  const { goBack, selectedOpportunity, savedOpportunities, toggleSaveOpportunity } = useApp();
  const [applied, setApplied] = useState(false);

  const job = selectedOpportunity;
  if (!job) return null;

  const isSaved = savedOpportunities.includes(job.id);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ Jobs / Back */}
        <button id="job-details-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>{job.type === 'Internship' ? 'Internships' : 'Jobs'}</span>
        </button>

        {/* Title */}
        <h1 className="title-dashboard">{job.title}</h1>

        {/* Subtitle */}
        <p className="subtitle-text" style={{ fontSize: '14px', lineHeight: '17px' }}>
          {job.company} · {job.location}
        </p>

        {/* Chips */}
        <div className="chip-row">
          <div className="chip-badge">
            <span>{job.company}</span>
          </div>
          <div className="chip-badge">
            <span>{job.salary || job.stipend || "Competitive"}</span>
          </div>
          {job.duration && (
            <div className="chip-badge" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
              <span>{job.duration}</span>
            </div>
          )}
        </div>

        {/* Details Card */}
        <div className="figma-card-full" style={{ padding: '14px', gap: '8px' }}>
          <div className="card-title">Role</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {job.roleOverview || "Clean and analyse data, build dashboards and share insights with teams."}
          </p>

          <div className="card-title" style={{ marginTop: '4px' }}>Requirements</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {job.requirements || "Python, SQL, statistics basics. Degree in any science stream."}
          </p>
        </div>

        {/* Button/Primary: Apply now */}
        <button
          id="btn-apply-job"
          className="btn-primary"
          onClick={handleApply}
          style={{ marginTop: '8px' }}
        >
          <span>{applied ? '✓ Application Submitted!' : 'Apply now'}</span>
        </button>

        {/* Button/Ghost: Save job */}
        <button
          id="btn-save-job"
          className="btn-ghost"
          onClick={() => toggleSaveOpportunity(job.id)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          {isSaved ? <IconCheck size={16} /> : <IconBookmark size={16} />}
          <span>{isSaved ? 'Saved to bookmarks' : (job.type === 'Internship' ? 'Save internship' : 'Save job')}</span>
        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
