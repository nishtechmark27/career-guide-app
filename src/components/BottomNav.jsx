import React from 'react';
import { useApp } from '../context/AppContext';
import {
  IconHome,
  IconCareers,
  IconTests,
  IconOpportunities,
  IconUser
} from './icons';

export const BottomNav = () => {
  const { currentScreen, navigate, unreadNotificationCount } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: IconHome },
    { id: 'careers', label: 'Careers', icon: IconCareers },
    { id: 'tests', label: 'Tests', icon: IconTests },
    { id: 'opportunities', label: 'Opportunities', icon: IconOpportunities },
    { id: 'profile', label: 'Profile', icon: IconUser, badge: unreadNotificationCount > 0 }
  ];

  const isActive = (id) => {
    if (id === 'dashboard') return currentScreen === 'dashboard';
    if (id === 'careers') return currentScreen === 'careers' || currentScreen === 'career-details' || currentScreen === 'roadmap';
    if (id === 'tests') return currentScreen === 'tests' || currentScreen === 'aptitude-quiz' || currentScreen === 'test-result';
    if (id === 'opportunities') return currentScreen === 'opportunities' || currentScreen === 'course-details' || currentScreen === 'scholarship-details' || currentScreen === 'job-details';
    if (id === 'profile') return currentScreen === 'profile' || currentScreen === 'notifications';
    return false;
  };

  return (
    <nav className="figma-bottom-nav" aria-label="Main Navigation">
      {navItems.map((item) => {
        const active = isActive(item.id);
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            onClick={() => navigate(item.id)}
            className={`nav-tab-button ${active ? 'active' : ''}`}
            aria-label={item.label}
          >
            <div className={`nav-icon-container ${active ? 'active' : ''}`}>
              <Icon size={22} color={active ? 'var(--primary)' : 'var(--text-muted)'} />
              {active && <span className="active-dot" />}
            </div>
            {item.badge && <span className="nav-badge" title="Unread updates" />}
          </button>
        );
      })}
    </nav>
  );
};
