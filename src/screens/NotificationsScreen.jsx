import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconChevronLeft } from '../components/icons';
import { COURSES_DATA, SCHOLARSHIPS_DATA, INTERNSHIPS_DATA } from '../data/mockData';

export const NotificationsScreen = () => {
  const {
    goBack,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    navigate,
    setSelectedOpportunity
  } = useApp();

  const handleNotificationClick = (notif) => {
    markNotificationRead(notif.id);
    if (notif.actionType === 'scholarship') {
      const sch = SCHOLARSHIPS_DATA.find(s => s.id === notif.targetId) || SCHOLARSHIPS_DATA[0];
      setSelectedOpportunity(sch);
      navigate('scholarship-details', { opportunity: sch });
    } else if (notif.actionType === 'course') {
      const course = COURSES_DATA.find(c => c.id === notif.targetId) || COURSES_DATA[0];
      setSelectedOpportunity(course);
      navigate('course-details', { opportunity: course });
    } else if (notif.actionType === 'internship') {
      const intern = INTERNSHIPS_DATA.find(i => i.id === notif.targetId) || INTERNSHIPS_DATA[0];
      setSelectedOpportunity(intern);
      navigate('job-details', { opportunity: intern });
    } else if (notif.actionType === 'test-result') {
      navigate('test-result');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Back Link */}
        <button id="notif-back" className="back-button-link" onClick={goBack}>
          <IconChevronLeft size={16} />
          <span>Back</span>
        </button>

        {/* Title & Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 className="title-dashboard">Notifications</h1>
          <button
            onClick={markAllNotificationsRead}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Mark all read
          </button>
        </div>

        {/* Deadlines and updates */}
        <p className="subtitle-text">Deadlines and updates.</p>

        {/* Notifications List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {notifications.map((notif) => {
            const isWarning = notif.badgeType === 'warning';
            return (
              <div
                key={notif.id}
                id={`notif-${notif.id}`}
                className="figma-card-full"
                onClick={() => handleNotificationClick(notif)}
                style={{
                  borderLeft: notif.read ? '1px solid transparent' : '4px solid var(--primary)',
                  opacity: notif.read ? 0.85 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{notif.title}</div>
                  {!notif.read && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '5px' }} />
                  )}
                </div>

                <div className="card-subtitle">{notif.subtitle}</div>

                {notif.badge && (
                  <div className={`chip-badge ${isWarning ? 'chip-warning' : ''}`} style={{ marginTop: '2px' }}>
                    <span>{notif.badge}</span>
                  </div>
                )}
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
