import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft } from '../components/icons';

export const AptitudeTestScreen = () => {
  const {
    navigate,
    selectedTest,
    quizIndex,
    setQuizIndex,
    quizAnswers,
    selectQuizAnswer,
    submitQuiz
  } = useApp();

  const questions = selectedTest?.questions || [];
  const currentQuestion = questions[quizIndex] || questions[0];
  const totalQuestions = questions.length;

  const currentSelection = quizAnswers[currentQuestion?.id];

  const handleNext = () => {
    if (quizIndex < totalQuestions - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      submitQuiz();
    }
  };

  const progressPercentage = Math.round(((quizIndex + 1) / totalQuestions) * 100);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* ‹ Exit test */}
        <button id="exit-test-btn" className="back-button-link" onClick={() => navigate('tests')}>
          <IconChevronLeft size={16} />
          <span>Exit test</span>
        </button>

        {/* Question X of Y */}
        <div className="subtitle-text">
          Question {quizIndex + 1} of {totalQuestions}
        </div>

        {/* Progress */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Question Prompt */}
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '27px',
          color: 'var(--text-dark)',
          margin: '6px 0 4px'
        }}>
          {currentQuestion?.prompt || "I prefer building things to analysing them."}
        </h2>

        {/* Options */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentQuestion?.options.map((option, idx) => {
            const isSelected = currentSelection === idx;
            return (
              <div
                key={idx}
                id={`quiz-option-${idx}`}
                className={`quiz-option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => selectQuizAnswer(currentQuestion.id, idx)}
              >
                <span className="quiz-option-text" style={{ color: isSelected ? 'var(--primary)' : 'var(--text-dark)', fontWeight: isSelected ? 600 : 500 }}>
                  {option.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Button/Primary: Next / Submit */}
        <button
          id="btn-quiz-next"
          className="btn-primary"
          onClick={handleNext}
          disabled={currentSelection === undefined}
          style={{
            marginTop: '8px',
            opacity: currentSelection === undefined ? 0.6 : 1,
            cursor: currentSelection === undefined ? 'not-allowed' : 'pointer'
          }}
        >
          <span>{quizIndex < totalQuestions - 1 ? 'Next' : 'Submit'}</span>
        </button>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
