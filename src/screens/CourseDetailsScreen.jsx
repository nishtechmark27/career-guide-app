import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft, IconBookmark, IconCheck } from '../components/icons';

export const CourseDetailsScreen = () => {
  const { goBack, selectedOpportunity, savedOpportunities, toggleSaveOpportunity } = useApp();
  const [enrolled, setEnrolled] = useState(false);

  const course = selectedOpportunity;
  if (!course) return null;

  const isSaved = savedOpportunities.includes(course.id);

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      window.open(course.externalUrl || "https://www.coursera.org", "_blank");
    }, 400);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ Courses */}
        <button id="course-details-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>Courses</span>
        </button>

        {/* Title */}
        <h1 className="title-dashboard">{course.title}</h1>

        {/* Subtitle */}
        <p className="subtitle-text" style={{ fontSize: '14px', lineHeight: '17px' }}>
          {course.tagline}
        </p>

        {/* Chips */}
        <div className="chip-row">
          <div className="chip-badge">
            <span>{course.provider || "Coursera"}</span>
          </div>
          <div className="chip-badge">
            <span>{course.level || "Beginner"}</span>
          </div>
          <div className="chip-badge" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
            <span>⭐ {course.rating || "4.8"}</span>
          </div>
        </div>

        {/* Details Card */}
        <div className="figma-card-full" style={{ padding: '14px', gap: '8px' }}>
          <div className="card-title">About</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {course.about || "Learn regression, classification and model evaluation with hands-on labs."}
          </p>

          <div className="card-title" style={{ marginTop: '4px' }}>You’ll learn</div>
          <p className="card-subtitle" style={{ lineHeight: '18px' }}>
            {course.youLearn || "Supervised learning, feature engineering, model tuning."}
          </p>
        </div>

        {/* Button/Primary: Enroll now */}
        <button
          id="btn-enroll-course"
          className="btn-primary"
          onClick={handleEnroll}
          style={{ marginTop: '8px' }}
        >
          <span>{enrolled ? '✓ Enrolled · Launching Course' : 'Enroll now'}</span>
        </button>

        {/* Button/Ghost: Save course */}
        <button
          id="btn-save-course"
          className="btn-ghost"
          onClick={() => toggleSaveOpportunity(course.id)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          {isSaved ? <IconCheck size={16} /> : <IconBookmark size={16} />}
          <span>{isSaved ? 'Saved to bookmarks' : 'Save course'}</span>
        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
