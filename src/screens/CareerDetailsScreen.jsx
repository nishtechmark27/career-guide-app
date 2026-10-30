import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft, IconBookmark, IconCheck } from '../components/icons';

export const CareerDetailsScreen = () => {
  const { goBack, navigate, selectedCareer, savedCareers, toggleSaveCareer } = useApp();
  const [activeTab, setActiveTab] = useState('Overview');

  const career = selectedCareer;
  const isSaved = savedCareers.includes(career?.id);

  if (!career) return null;

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ Back */}
        <button id="career-details-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>Back</span>
        </button>

        {/* Title */}
        <h1 className="title-dashboard">{career.title}</h1>

        {/* Tagline */}
        <p className="subtitle-text" style={{ fontSize: '14px', lineHeight: '17px' }}>
          {career.tagline}
        </p>

        {/* Chips */}
        <div className="chip-row">
          {career.chips.map((chip, idx) => (
            <div key={idx} className="chip-badge">
              <span>{chip}</span>
            </div>
          ))}
        </div>

        {/* Tabs: Overview, Skills, Education */}
        <div className="content-tabs-row">
          {['Overview', 'Skills', 'Education'].map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase()}`}
              className={`content-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Tab Card */}
        {activeTab === 'Overview' && (
          <div className="figma-card-full" style={{ padding: '14px', gap: '6px' }}>
            <div className="card-title">What you’ll do</div>
            <p className="card-subtitle" style={{ lineHeight: '18px' }}>
              {career.overview.description}
            </p>
            <div className="chip-row" style={{ marginTop: '4px' }}>
              {career.overview.keySkills.slice(0, 3).map((skill, idx) => (
                <div key={idx} className="chip-badge">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Skills' && (
          <div className="figma-card-full" style={{ padding: '14px', gap: '8px' }}>
            <div className="card-title">Core Competencies</div>
            <p className="card-subtitle">
              Industry standards and core tech stacks demanded by hiring companies:
            </p>
            <div className="chip-row" style={{ gap: '6px', marginTop: '4px' }}>
              {career.overview.keySkills.map((skill, idx) => (
                <div key={idx} className="chip-badge" style={{ padding: '6px 12px', height: '26px' }}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Education' && (
          <div className="figma-card-full" style={{ padding: '14px', gap: '6px' }}>
            <div className="card-title">Recommended Education</div>
            <p className="card-subtitle" style={{ lineHeight: '18px' }}>
              {career.overview.education}
            </p>
            <div className="card-title" style={{ marginTop: '6px', fontSize: '13px' }}>Typical Degree Routes:</div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: '18px' }}>
              <li>B.Tech / B.E in CS / AI / Data Science</li>
              <li>B.Sc / BCA with dedicated coding portfolio</li>
              <li>Self-taught + verified certifications</li>
            </ul>
          </div>
        )}

        {/* Button/Primary: View roadmap */}
        <button
          id="btn-view-roadmap"
          className="btn-primary"
          onClick={() => navigate('roadmap')}
          style={{ marginTop: '8px' }}
        >
          <span>View roadmap</span>
        </button>

        {/* Button/Ghost: Save career */}
        <button
          id="btn-save-career"
          className="btn-ghost"
          onClick={() => toggleSaveCareer(career.id)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          {isSaved ? <IconCheck size={16} /> : <IconBookmark size={16} />}
          <span>{isSaved ? 'Saved to bookmarks' : 'Save career'}</span>
        </button>

      </div>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  );
};
