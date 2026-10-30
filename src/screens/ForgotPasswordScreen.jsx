import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ForgotPasswordScreen = () => {
  const { navigate } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="figma-content auth-content">
      <h1 className="title-large">Reset password</h1>
      <p className="subtitle-text">We’ll email you a link to reset it.</p>

      {submitted ? (
        <div style={{
          width: '100%',
          padding: '16px',
          background: 'var(--primary-subtle)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '12px'
        }}>
          <p style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 600 }}>
            ✓ Password reset link sent!
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            We sent instructions to <strong>{email}</strong>. Check your inbox and follow the link to create a new password.
          </p>
          <button
            type="button"
            onClick={() => navigate('login')}
            className="btn-primary"
            style={{ height: '38px', fontSize: '13px' }}
          >
            Back to log in
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Field/Email */}
          <div className="form-field-group">
            <label className="field-label" htmlFor="reset-email">Email</label>
            <input
              id="reset-email"
              type="email"
              className="form-input-box"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Button/Primary */}
          <button id="reset-submit" type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
            <span>Reset password</span>
          </button>

          {/* Back to log in */}
          <button
            id="goto-login-from-reset"
            type="button"
            onClick={() => navigate('login')}
            className="form-link-center"
          >
            Back to log in
          </button>
        </form>
      )}
    </div>
  );
};
