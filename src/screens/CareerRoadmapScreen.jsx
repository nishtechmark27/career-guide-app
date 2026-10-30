import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft, IconCheck } from '../components/icons';

export const CareerRoadmapScreen = () => {
  const {
    goBack,
    selectedCareer,
    roadmapSteps,
    toggleStepDone,
    completedStepsCount,
    roadmapProgressPercent
  } = useApp();

  const [activeStepDetail, setActiveStepDetail] = useState(null);

  const careerTitle = selectedCareer?.title || "AI/ML Engineer";

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ AI/ML Engineer */}
        <button id="roadmap-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>{careerTitle}</span>
        </button>

        {/* Your roadmap */}
        <h1 className="title-dashboard">Your roadmap</h1>

        {/* 3 of 8 steps done */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <p className="subtitle-text">
            {completedStepsCount} of {roadmapSteps.length} steps done
          </p>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>
            {roadmapProgressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${roadmapProgressPercent}%` }}
          />
        </div>

        {/* Steps Container */}
        <div className="roadmap-steps-card">
          {roadmapSteps.map((step) => {
            const isDone = step.status === 'done';
            const isCurrent = step.status === 'current';

            let badgeClass = 'step-badge-pending';
            if (isDone) badgeClass = 'step-badge-done';
            else if (isCurrent) badgeClass = 'step-badge-current';

            return (
              <div
                key={step.id}
                id={`roadmap-step-${step.id}`}
                className="roadmap-step-item"
                onClick={() => toggleStepDone(step.id)}
                title="Click to toggle done / pending status"
              >
                {/* Number Badge */}
                <div className={`step-number-badge ${badgeClass}`}>
                  {isDone ? <IconCheck size={14} color="#FFFFFF" /> : step.id}
                </div>

                {/* Texts */}
                <div className="step-texts">
                  <div
                    className="step-title"
                    style={{ textDecoration: isDone ? 'none' : 'none' }}
                  >
                    {step.title}
                  </div>
                  <div className="step-subtitle">
                    {step.subtitle}
                  </div>
                </div>

                {/* Small indicator pill */}
                <div style={{ alignSelf: 'center' }}>
                  {isDone && (
                    <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>Done</span>
                  )}
                  {isCurrent && (
                    <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600 }}>In progress</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', width: '100%', marginTop: '4px' }}>
          💡 Tap any milestone to toggle between completed & in-progress
        </p>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
