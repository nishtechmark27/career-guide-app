import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const RegisterScreen = () => {
  const { register, navigate } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please complete all fields');
      return;
    }
    register(fullName, email, password);
  };

  return (
    <div className="figma-content auth-content">
      <h1 className="title-large">Create account</h1>
      <p className="subtitle-text">Get career matches in minutes.</p>

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
        {/* Field/Full name */}
        <div className="form-field-group">
          <label className="field-label" htmlFor="register-name">Full name</label>
          <input
            id="register-name"
            type="text"
            className="form-input-box"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Field/Email */}
        <div className="form-field-group">
          <label className="field-label" htmlFor="register-email">Email</label>
          <input
            id="register-email"
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
          <label className="field-label" htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            className="form-input-box"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button/Primary */}
        <button id="register-submit" type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
          <span>Create account</span>
        </button>

        {/* Already registered? Log in */}
        <button
          id="goto-login"
          type="button"
          onClick={() => navigate('login')}
          className="form-link-center"
        >
          Already registered? Log in
        </button>
      </form>
    </div>
  );
};
