import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconBookmark } from '../components/icons';
import {
  COURSES_DATA,
  SCHOLARSHIPS_DATA,
  JOBS_DATA,
  INTERNSHIPS_DATA
} from '../data/mockData';

export const OpportunitiesScreen = () => {
  const {
    activeOpportunityTab,
    setActiveOpportunityTab,
    setSelectedOpportunity,
    navigate,
    savedOpportunities,
    toggleSaveOpportunity
  } = useApp();

  const tabs = [
    { id: 'courses', label: 'Courses', subtitle: 'Courses picked for your roadmap.' },
    { id: 'scholarships', label: 'Scholarships', subtitle: 'Funding you may qualify for.' },
    { id: 'jobs', label: 'Jobs', subtitle: 'Entry-level roles that match you.' },
    { id: 'internships', label: 'Internships', subtitle: 'Build experience while you study.' }
  ];

  const currentTabInfo = tabs.find(t => t.id === activeOpportunityTab) || tabs[0];

  const handleSelectOpportunity = (item, type) => {
    setSelectedOpportunity(item);
    if (type === 'courses') navigate('course-details', { opportunity: item });
    else if (type === 'scholarships') navigate('scholarship-details', { opportunity: item });
    else if (type === 'jobs') navigate('job-details', { opportunity: item });
    else if (type === 'internships') navigate('job-details', { opportunity: item });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Title: Opportunities */}
        <h1 className="title-dashboard">Opportunities</h1>

        {/* Dynamic Subtitle per Segment */}
        <p className="subtitle-text">{currentTabInfo.subtitle}</p>

        {/* 4 Segmented Tabs */}
        <div className="segment-tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-opp-${tab.id}`}
              className={`segment-tab-item ${activeOpportunityTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveOpportunityTab(tab.id)}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Cards per Active Segment */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* COURSES TAB */}
          {activeOpportunityTab === 'courses' && COURSES_DATA.map((course) => {
            const isSaved = savedOpportunities.includes(course.id);
            return (
              <div
                key={course.id}
                id={`card-course-${course.id}`}
                className="figma-card-full"
                onClick={() => handleSelectOpportunity(course, 'courses')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{course.title}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveOpportunity(course.id);
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: isSaved ? 'var(--primary)' : 'var(--text-muted)' }}
                  >
                    <IconBookmark size={15} fill={isSaved ? "var(--primary)" : "none"} />
                  </button>
                </div>
                <div className="card-subtitle">{course.tagline}</div>
                <div className="chip-badge" style={{ marginTop: '4px' }}>
                  <span>{course.badge}</span>
                </div>
              </div>
            );
          })}

          {/* SCHOLARSHIPS TAB */}
          {activeOpportunityTab === 'scholarships' && SCHOLARSHIPS_DATA.map((sch) => {
            const isSaved = savedOpportunities.includes(sch.id);
            const isWarn = sch.badgeType === 'warning';
            return (
              <div
                key={sch.id}
                id={`card-sch-${sch.id}`}
                className="figma-card-full"
                onClick={() => handleSelectOpportunity(sch, 'scholarships')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{sch.title}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveOpportunity(sch.id);
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: isSaved ? 'var(--primary)' : 'var(--text-muted)' }}
                  >
                    <IconBookmark size={15} fill={isSaved ? "var(--primary)" : "none"} />
                  </button>
                </div>
                <div className="card-subtitle">{sch.tagline}</div>
                <div className={`chip-badge ${isWarn ? 'chip-warning' : ''}`} style={{ marginTop: '4px' }}>
                  <span>{sch.badge}</span>
                </div>
              </div>
            );
          })}

          {/* JOBS TAB */}
          {activeOpportunityTab === 'jobs' && JOBS_DATA.map((job) => {
            const isSaved = savedOpportunities.includes(job.id);
            const isWarn = job.badgeType === 'warning';
            return (
              <div
                key={job.id}
                id={`card-job-${job.id}`}
                className="figma-card-full"
                onClick={() => handleSelectOpportunity(job, 'jobs')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{job.title}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveOpportunity(job.id);
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: isSaved ? 'var(--primary)' : 'var(--text-muted)' }}
                  >
                    <IconBookmark size={15} fill={isSaved ? "var(--primary)" : "none"} />
                  </button>
                </div>
                <div className="card-subtitle">{job.tagline}</div>
                <div className={`chip-badge ${isWarn ? 'chip-warning' : ''}`} style={{ marginTop: '4px' }}>
                  <span>{job.badge}</span>
                </div>
              </div>
            );
          })}

          {/* INTERNSHIPS TAB */}
          {activeOpportunityTab === 'internships' && INTERNSHIPS_DATA.map((intern) => {
            const isSaved = savedOpportunities.includes(intern.id);
            const isWarn = intern.badgeType === 'warning';
            return (
              <div
                key={intern.id}
                id={`card-intern-${intern.id}`}
                className="figma-card-full"
                onClick={() => handleSelectOpportunity(intern, 'internships')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{intern.title}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveOpportunity(intern.id);
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: isSaved ? 'var(--primary)' : 'var(--text-muted)' }}
                  >
                    <IconBookmark size={15} fill={isSaved ? "var(--primary)" : "none"} />
                  </button>
                </div>
                <div className="card-subtitle">{intern.tagline}</div>
                <div className={`chip-badge ${isWarn ? 'chip-warning' : ''}`} style={{ marginTop: '4px' }}>
                  <span>{intern.badge}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
