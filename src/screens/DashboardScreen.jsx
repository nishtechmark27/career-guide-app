import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import {
  IconSearch,
  IconTests,
  IconCareers,
  IconCourses,
  IconScholarships,
  IconJobs,
  IconInternships,
  IconBell
} from '../components/icons';
import { CAREERS_DATA, APTITUDE_TESTS } from '../data/mockData';

export const DashboardScreen = () => {
  const {
    user,
    navigate,
    unreadNotificationCount,
    setSelectedCareer,
    setSelectedTest,
    setActiveOpportunityTab
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Filter matching careers or courses for live search
  const filteredCareers = CAREERS_DATA.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartAssessment = () => {
    setSelectedTest(APTITUDE_TESTS[0]);
    navigate('aptitude-quiz', { test: APTITUDE_TESTS[0] });
  };

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    navigate('career-details', { career });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Header: Good morning, Student + Notification Bell */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 className="title-dashboard">Good morning, {user?.name || 'Student'}</h1>
          <button
            onClick={() => navigate('notifications')}
            style={{
              position: 'relative',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)'
            }}
            aria-label="View notifications"
          >
            <IconBell size={18} color="var(--text-dark)" />
            {unreadNotificationCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '10px',
                height: '10px',
                background: '#E53E3E',
                borderRadius: '50%',
                border: '2px solid var(--bg-surface)'
              }} />
            )}
          </button>
        </div>

        {/* Search: Search careers or courses */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div className="figma-search-bar">
            <IconSearch size={16} color="var(--text-muted)" />
            <input
              id="dashboard-search-input"
              type="text"
              className="figma-search-input"
              placeholder="Search careers or courses"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(e.target.value.trim().length > 0);
              }}
              onFocus={() => setShowSearchResults(searchQuery.trim().length > 0)}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px' }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Search Results Dropdown */}
          {showSearchResults && (
            <div style={{
              position: 'absolute',
              top: '48px',
              left: 0,
              right: 0,
              background: 'var(--bg-surface)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-card-hover)',
              border: '1px solid var(--border-color)',
              zIndex: 80,
              maxHeight: '220px',
              overflowY: 'auto',
              padding: '8px'
            }}>
              {filteredCareers.length > 0 ? (
                filteredCareers.map(career => (
                  <div
                    key={career.id}
                    onClick={() => {
                      setShowSearchResults(false);
                      handleSelectCareer(career);
                    }}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '13px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-subtle)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{career.title}</span>
                    <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600 }}>{career.matchPercent}% Match</span>
                  </div>
                ))
              ) : (
                <div style={{ padding: '12px', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
                  No careers matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Assessment hero */}
        <div className="assessment-hero">
          <div className="hero-title">Find your best-fit career</div>
          <div className="subtitle-hero">15-minute assessment, instant matches.</div>
          <button
            id="hero-start-assessment"
            className="hero-btn-white"
            onClick={handleStartAssessment}
          >
            <span>Take assessment</span>
          </button>
        </div>

        {/* Quick access tiles (2 rows x 3 tiles) */}
        <div className="quick-access-grid">
          {/* Row 1: Tests, Careers, Courses */}
          <div className="quick-access-row">
            <div
              id="tile-tests"
              className="quick-tile"
              onClick={() => navigate('tests')}
            >
              <div className="tile-ellipse">
                <IconTests size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Tests</span>
            </div>

            <div
              id="tile-careers"
              className="quick-tile"
              onClick={() => navigate('careers')}
            >
              <div className="tile-ellipse">
                <IconCareers size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Careers</span>
            </div>

            <div
              id="tile-courses"
              className="quick-tile"
              onClick={() => {
                setActiveOpportunityTab('courses');
                navigate('opportunities');
              }}
            >
              <div className="tile-ellipse">
                <IconCourses size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Courses</span>
            </div>
          </div>

          {/* Row 2: Scholarships, Jobs, Internships */}
          <div className="quick-access-row">
            <div
              id="tile-scholarships"
              className="quick-tile"
              onClick={() => {
                setActiveOpportunityTab('scholarships');
                navigate('opportunities');
              }}
            >
              <div className="tile-ellipse">
                <IconScholarships size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Scholarships</span>
            </div>

            <div
              id="tile-jobs"
              className="quick-tile"
              onClick={() => {
                setActiveOpportunityTab('jobs');
                navigate('opportunities');
              }}
            >
              <div className="tile-ellipse">
                <IconJobs size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Jobs</span>
            </div>

            <div
              id="tile-internships"
              className="quick-tile"
              onClick={() => {
                setActiveOpportunityTab('internships');
                navigate('opportunities');
              }}
            >
              <div className="tile-ellipse">
                <IconInternships size={16} color="var(--primary)" />
              </div>
              <span className="tile-label">Internships</span>
            </div>
          </div>
        </div>

        {/* Recommended for you */}
        <div className="title-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Recommended for you</span>
          <button
            onClick={() => navigate('careers')}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
          >
            See all
          </button>
        </div>

        {/* Recommended Cards Row */}
        <div className="cards-horizontal-row">
          {/* Card/AI/ML Engineer */}
          <div
            id="card-aiml-engineer"
            className="recommended-card"
            onClick={() => handleSelectCareer(CAREERS_DATA[0])}
          >
            <div className="card-title">AI/ML Engineer</div>
            <div className="card-subtitle">92% match</div>
            <div className="chip-badge" style={{ marginTop: 'auto' }}>
              <span>High demand</span>
            </div>
          </div>

          {/* Card/Data Analyst */}
          <div
            id="card-data-analyst"
            className="recommended-card"
            onClick={() => handleSelectCareer(CAREERS_DATA[1])}
          >
            <div className="card-title">Data Analyst</div>
            <div className="card-subtitle">86% match</div>
            <div className="chip-badge" style={{ marginTop: 'auto' }}>
              <span>Entry friendly</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  );
};
