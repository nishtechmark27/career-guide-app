import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { IconSearch, IconBookmark } from '../components/icons';
import { CAREERS_DATA } from '../data/mockData';

export const CareerExplorerScreen = () => {
  const { navigate, setSelectedCareer, savedCareers, toggleSaveCareer } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Tech', 'Health', 'Business', 'Design'];

  const filteredCareers = CAREERS_DATA.filter(career => {
    const matchesCat = activeCategory === 'All' || career.category === activeCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          career.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    navigate('career-details', { career });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="figma-content" style={{ paddingBottom: '75px' }}>
        
        {/* Title & Subtitle */}
        <h1 className="title-dashboard">Explore careers</h1>
        <p className="subtitle-text">Find roles that fit your skills.</p>

        {/* Search */}
        <div className="figma-search-bar">
          <IconSearch size={16} color="var(--text-muted)" />
          <input
            id="career-search-input"
            type="text"
            className="figma-search-input"
            placeholder="Search careers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="filter-pills-row">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Career Cards List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredCareers.map((career) => {
            const isSaved = savedCareers.includes(career.id);
            return (
              <div
                key={career.id}
                id={`career-card-${career.id}`}
                className="figma-card-full"
                onClick={() => handleSelectCareer(career)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div className="card-title">{career.title}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveCareer(career.id);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      color: isSaved ? 'var(--primary)' : 'var(--text-muted)'
                    }}
                    title={isSaved ? "Saved" : "Save career"}
                  >
                    <IconBookmark size={16} fill={isSaved ? "var(--primary)" : "none"} />
                  </button>
                </div>

                <div className="card-subtitle">
                  {career.matchPercent}% match · {career.demand}
                </div>

                <div className="chip-row" style={{ marginTop: '4px' }}>
                  <div className="chip-badge">
                    <span>{career.chips[1] || career.demand}</span>
                  </div>
                  <div className="chip-badge" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    <span>{career.salaryRange}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredCareers.length === 0 && (
            <div style={{ width: '100%', padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
              No careers found for "{searchQuery}" in {activeCategory}.
            </div>
          )}
        </div>

      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
