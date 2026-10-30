import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const PhoneFrame = ({ children }) => {
  const { currentScreen } = useApp();
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours % 12 || 12}:${mins}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const isDarkStatus = currentScreen === 'splash';

  return (
    <div className="mobile-app-root">
      {/* 375x812px Figma Mobile App Frame */}
      <div className="mobile-device-shell">
        {/* iOS Native Status Bar */}
        <div className={`mobile-status-bar ${isDarkStatus ? 'status-dark' : ''}`}>
          <span className="status-clock">{currentTime}</span>

          {/* Dynamic Island / Notch */}
          <div className="mobile-island">
            <div className="island-lens" />
          </div>

          <div className="status-system-icons">
            {/* Cellular */}
            <svg width="15" height="11" viewBox="0 0 17 12" fill="currentColor">
              <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
              <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
              <rect x="9" y="3.5" width="2.5" height="8.5" rx="0.5" />
              <rect x="13.5" y="1" width="2.5" height="11" rx="0.5" />
            </svg>
            {/* Wifi */}
            <svg width="14" height="11" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-4.2-2.8a6 6 0 0 1 8.4 0 .75.75 0 0 0 1.06-1.06 7.5 7.5 0 0 0-10.52 0 .75.75 0 0 0 1.06 1.06zm-2.8-2.8a10 10 0 0 1 14 0 .75.75 0 0 0 1.06-1.06 11.5 11.5 0 0 0-16.12 0 .75.75 0 0 0 1.06 1.06z" />
            </svg>
            {/* Battery */}
            <svg width="22" height="11" viewBox="0 0 25 12" fill="currentColor">
              <rect x="0.5" y="0.5" width="20" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="2" y="2" width="14" height="8" rx="1.5" />
              <path d="M22 4v4a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 22 4z" />
            </svg>
          </div>
        </div>

        {/* Scrollable Mobile Screen */}
        <div className="mobile-screen-body">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="mobile-home-indicator-bar">
          <div className="home-indicator-pill" />
        </div>
      </div>
    </div>
  );
};
