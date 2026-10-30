import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const LoginScreen = () => {
  const { login, navigate } = useApp();
  const [email, setEmail] = useState('student@email.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in both fields');
      return;
    }
    login(email, password);
  };

  const handleDemoLogin = () => {
    login('student@email.com', 'demo');
  };

  return (
    <div className="figma-content auth-content">
      <h1 className="title-large">Welcome back</h1>
      <p className="subtitle-text">Log in to continue your career journey.</p>

      {error && (
        <div style={{
          width: '100%',
          padding: '8px 12px',
          background: '#FFEAEA',
          color: '#D32F2F',
          borderRadius: '8px',
          fontSize: '13px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Field/Email */}
        <div className="form-field-group">
          <label className="field-label" htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            className="form-input-box"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Field/Password */}
        <div className="form-field-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <label className="field-label" htmlFor="login-password">Password</label>
            <button
              type="button"
              onClick={() => navigate('forgot-password')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Forgot?
            </button>
          </div>
          <input
            id="login-password"
            type="password"
            className="form-input-box"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button/Primary */}
        <button id="login-submit" type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
          <span>Log in</span>
        </button>

        {/* Demo Fast Login for Reviewers */}
        <button
          type="button"
          onClick={handleDemoLogin}
          className="btn-ghost"
          style={{ height: '38px', fontSize: '13px' }}
        >
          <span>⚡ Fast Demo Login (Student)</span>
        </button>

        {/* New here? Create an account */}
        <button
          id="goto-register"
          type="button"
          onClick={() => navigate('register')}
          className="form-link-center"
        >
          New here? Create an account
        </button>
      </form>
    </div>
  );
};
