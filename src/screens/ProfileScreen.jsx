import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconUser, IconChevronRight } from '../components/icons';
import { CAREERS_DATA, COURSES_DATA, SCHOLARSHIPS_DATA } from '../data/mockData';

export const ProfileScreen = () => {
  const {
    user,
    setUser,
    logout,
    navigate,
    savedCareers,
    savedOpportunities,
    theme,
    toggleTheme,
    completedStepsCount,
    roadmapProgressPercent
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [tempName, setTempName] = useState(user?.name || 'Student');
  const [tempEmail, setTempEmail] = useState(user?.email || 'student@email.com');
  const [tempEdu, setTempEdu] = useState(user?.educationLevel || 'Undergraduate (3rd Year)');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      name: tempName,
      email: tempEmail,
      educationLevel: tempEdu
    }));
    setIsEditing(false);
  };

  // Find saved objects
  const savedCareerObjects = CAREERS_DATA.filter(c => savedCareers.includes(c.id));
  const savedOppObjects = [
    ...COURSES_DATA.filter(c => savedOpportunities.includes(c.id)),
    ...SCHOLARSHIPS_DATA.filter(s => savedOpportunities.includes(s.id))
  ];

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Header Avatar and Info */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          width: '100%',
          padding: '8px 0 12px'
        }}>
          <div className="profile-avatar-large">
            <IconUser size={36} color="var(--primary)" />
          </div>

          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            color: 'var(--text-dark)',
            marginTop: '4px'
          }}>
            {user?.name || 'Student'}
          </h2>

          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '16px',
            color: 'var(--text-muted)'
          }}>
            {user?.email || 'student@email.com'}
          </div>

          {/* Education pill */}
          <div className="chip-badge" style={{ marginTop: '4px' }}>
            <span>{user?.educationLevel || 'Undergraduate CS'}</span>
          </div>
        </div>

        {/* Action Rows */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          {/* Row/Edit profile */}
          <div
            id="profile-row-edit"
            className="profile-action-row"
            onClick={() => setIsEditing(true)}
          >
            <span className="profile-row-label">Edit profile</span>
            <span className="profile-row-chevron">›</span>
          </div>

          {/* Row/Saved careers */}
          <div
            id="profile-row-saved"
            className="profile-action-row"
            onClick={() => setShowSavedModal(true)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="profile-row-label">Saved careers</span>
              <span className="chip-badge" style={{ height: '20px', padding: '2px 8px', fontSize: '11px' }}>
                {savedCareers.length}
              </span>
            </div>
            <span className="profile-row-chevron">›</span>
          </div>

          {/* Row/Notifications */}
          <div
            id="profile-row-notifs"
            className="profile-action-row"
            onClick={() => navigate('notifications')}
          >
            <span className="profile-row-label">Notifications</span>
            <span className="profile-row-chevron">›</span>
          </div>

          {/* Roadmap Progress Overview Row */}
          <div
            id="profile-row-roadmap"
            className="profile-action-row"
            onClick={() => navigate('roadmap')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="profile-row-label">Roadmap progress</span>
              <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>
                {roadmapProgressPercent}%
              </span>
            </div>
            <span className="profile-row-chevron">›</span>
          </div>

          {/* Theme Switch Row */}
          <div
            className="profile-action-row"
            onClick={toggleTheme}
          >
            <span className="profile-row-label">Theme appearance</span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>
              {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
            </span>
          </div>

          {/* Log Out Row */}
          <div
            id="profile-row-logout"
            className="profile-action-row"
            onClick={logout}
            style={{ marginTop: '8px', color: '#E53E3E' }}
          >
            <span className="profile-row-label" style={{ color: '#E53E3E' }}>Log out</span>
            <span className="profile-row-chevron" style={{ color: '#E53E3E' }}>›</span>
          </div>

        </div>

      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="modal-backdrop" onClick={() => setIsEditing(false)}>
          <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Edit Profile</h3>
            
            <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-field-group">
                <label className="field-label">Full Name</label>
                <input
                  type="text"
                  className="form-input-box"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Email</label>
                <input
                  type="email"
                  className="form-input-box"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Education / Stream</label>
                <input
                  type="text"
                  className="form-input-box"
                  value={tempEdu}
                  onChange={(e) => setTempEdu(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Saved Careers & Opportunities Drawer */}
      {showSavedModal && (
        <div className="modal-backdrop" onClick={() => setShowSavedModal(false)}>
          <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)' }}>Saved Bookmarks</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginTop: '4px' }}>
                Careers ({savedCareerObjects.length})
              </div>
              {savedCareerObjects.map(career => (
                <div
                  key={career.id}
                  onClick={() => {
                    setShowSavedModal(false);
                    navigate('career-details', { career });
                  }}
                  className="figma-card-full"
                  style={{ padding: '10px 12px', gap: '2px' }}
                >
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-dark)' }}>{career.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{career.salaryRange} · {career.demand}</div>
                </div>
              ))}

              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginTop: '10px' }}>
                Saved Opportunities ({savedOppObjects.length})
              </div>
              {savedOppObjects.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowSavedModal(false);
                    navigate('opportunities');
                  }}
                  className="figma-card-full"
                  style={{ padding: '10px 12px', gap: '2px' }}
                >
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-dark)' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.tagline || item.badge}</div>
                </div>
              ))}

              <button
                className="btn-ghost"
                onClick={() => setShowSavedModal(false)}
                style={{ marginTop: '12px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
