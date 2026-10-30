import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft, IconBookmark, IconCheck } from '../components/icons';

export const ScholarshipDetailsScreen = () => {
  const { goBack, selectedOpportunity, savedOpportunities, toggleSaveOpportunity } = useApp();
  const [applied, setApplied] = useState(false);

  const sch = selectedOpportunity;
  if (!sch) return null;

  const isSaved = savedOpportunities.includes(sch.id);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ Scholarships */}
        <button id="sch-details-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>Scholarships</span>
        </button>

        {/* Title */}
        <h1 className="title-dashboard">{sch.title}</h1>

        {/* Subtitle */}
        <p className="subtitle-text" style={{ fontSize: '14px', lineHeight: '17px' }}>
          {sch.tagline}
        </p>

        {/* Chips */}
        <div className="chip-row">
          <div className="chip-badge chip-warning">
            <span>{sch.badge || "Closes soon"}</span>
          </div>
          <div className="chip-badge">
            <span>{sch.targetLevel || "Undergraduate"}</span>
          </div>
        </div>

        {/* Details Card */}
        <div className="figma-card-full" style={{ padding: '14px', gap: '8px' }}>
          <div className="card-title">Eligibility</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {sch.eligibility || "Class 12 score above 85% and enrolled in a STEM degree."}
          </p>

          <div className="card-title" style={{ marginTop: '4px' }}>Documents</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {sch.documents || "Marksheet, ID proof, income certificate."}
          </p>
        </div>

        {/* Button/Primary: Apply now */}
        <button
          id="btn-apply-scholarship"
          className="btn-primary"
          onClick={handleApply}
          style={{ marginTop: '8px' }}
        >
          <span>{applied ? '✓ Application Submitted!' : 'Apply now'}</span>
        </button>

        {/* Button/Ghost: Save scholarship */}
        <button
          id="btn-save-scholarship"
          className="btn-ghost"
          onClick={() => toggleSaveOpportunity(sch.id)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          {isSaved ? <IconCheck size={16} /> : <IconBookmark size={16} />}
          <span>{isSaved ? 'Saved to bookmarks' : 'Save scholarship'}</span>
        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
