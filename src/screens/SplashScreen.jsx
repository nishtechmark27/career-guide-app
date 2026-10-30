import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { IconCareers, IconSparkles } from '../components/icons';

export const SplashScreen = () => {
  const { navigate, isAuthenticated } = useApp();

  // Auto transition after 2.5s or click button
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate('dashboard');
      } else {
        navigate('login');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  return (
    <div className="splash-container">
      <div className="splash-logo-circle">
        <IconCareers size={52} color="#FFFFFF" />
      </div>

      <h1 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '34px',
        color: '#EEF1F7',
        marginTop: '12px'
      }}>
        Career Guide
      </h1>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#EEF1F7',
        opacity: 0.9,
        marginBottom: '24px'
      }}>
        Find your path
      </p>

      <button
        id="splash-get-started"
        onClick={() => navigate(isAuthenticated ? 'dashboard' : 'login')}
        className="btn-primary"
        style={{
          background: '#FFFFFF',
          color: '#3A4DE0',
          maxWidth: '240px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
        }}
      >
        <span>Get Started</span>
      </button>
    </div>
  );
};
