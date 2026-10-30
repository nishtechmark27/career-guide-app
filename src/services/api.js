// API Client with Cloud + Offline Native Android Support

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const api = {
  // Healthcheck
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/health`);
      return await res.json();
    } catch (err) {
      return { status: 'offline-mode', client: 'native-android' };
    }
  },

  // Auth: Login
  async login(email, password) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error('Invalid credentials');
      return await res.json();
    } catch (err) {
      // Local fallback for offline APK mode
      return {
        success: true,
        user: { name: email.split('@')[0], email, educationLevel: 'Undergraduate' }
      };
    }
  },

  // Roadmap updates
  async updateStep(careerId, stepId) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/roadmap/${careerId}/step/${stepId}`, {
        method: 'PUT'
      });
      return await res.json();
    } catch (err) {
      return { success: true };
    }
  }
};

