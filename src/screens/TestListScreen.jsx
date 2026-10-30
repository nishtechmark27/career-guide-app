import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconTests } from '../components/icons';
import { APTITUDE_TESTS } from '../data/mockData';

export const TestListScreen = () => {
  const { navigate, setSelectedTest, setQuizIndex, selectQuizAnswer } = useApp();

  const handleStartTest = (test) => {
    setSelectedTest(test);
    setQuizIndex(0);
    navigate('aptitude-quiz', { test });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Title & Subtitle */}
        <h1 className="title-dashboard">Aptitude tests</h1>
        <p className="subtitle-text">Pick a test to discover your strengths.</p>

        {/* Tests List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {APTITUDE_TESTS.map((test) => (
            <div
              key={test.id}
              id={`test-card-${test.id}`}
              className="figma-card-full"
              onClick={() => handleStartTest(test)}
            >
              <div className="card-title">{test.title}</div>
              <div className="card-subtitle">{test.badge}</div>
              <div className="chip-badge" style={{ marginTop: '4px' }}>
                <span>{test.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
