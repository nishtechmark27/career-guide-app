import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { CAREERS_DATA } from '../data/mockData';

export const TestResultScreen = () => {
  const { navigate, setSelectedCareer, quizResult } = useApp();

  const results = quizResult || [
    { careerTitle: "AI/ML Engineer", matchPercent: 92, careerId: "ai-ml-engineer" },
    { careerTitle: "Data Analyst", matchPercent: 86, careerId: "data-analyst" },
    { careerTitle: "Software Developer", matchPercent: 71, careerId: "ai-ml-engineer" }
  ];

  const handleExploreTopMatch = () => {
    const topCareer = CAREERS_DATA.find(c => c.id === results[0].careerId) || CAREERS_DATA[0];
    setSelectedCareer(topCareer);
    navigate('career-details', { career: topCareer });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Your results */}
        <h1 className="title-dashboard">Your results</h1>

        {/* Top matches based on your answers */}
        <p className="subtitle-text">Top matches based on your answers.</p>

        {/* Matches Card */}
        <div
          className="figma-card-full"
          style={{ padding: '16px', gap: '14px', marginTop: '6px' }}
        >
          {results.map((res, idx) => (
            <div
              key={idx}
              style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '17px',
                color: 'var(--text-dark)'
              }}>
                {res.careerTitle} · {res.matchPercent}%
              </div>

              <div className="progress-track" style={{ height: '8px' }}>
                <div
                  className="progress-fill"
                  style={{ width: `${res.matchPercent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button/Primary: Explore AI/ML Engineer */}
        <button
          id="btn-explore-top-result"
          className="btn-primary"
          onClick={handleExploreTopMatch}
          style={{ marginTop: '12px' }}
        >
          <span>Explore AI/ML Engineer</span>
        </button>

        {/* Retake test or explore all */}
        <button
          id="btn-retake-test"
          className="btn-ghost"
          onClick={() => navigate('tests')}
        >
          <span>Browse other tests</span>
        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
