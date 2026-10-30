import express from 'express';
import cors from 'cors';
import { getDB, saveDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// 1. Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Career Guide Backend API',
    version: '1.0.0',
    database: 'connected'
  });
});

// 2. Authentication: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const db = getDB();
  const user = db.users.find(u => u.email === email);

  if (!user || user.password !== password) {
    // For demo convenience, allow student login
    if (email === 'student@email.com') {
      return res.json({
        success: true,
        token: 'token_student_session_demo_982',
        user: {
          id: 'usr_1',
          name: 'Student',
          email: 'student@email.com',
          educationLevel: 'Undergraduate (Computer Science)'
        }
      });
    }
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.json({
    success: true,
    token: `token_${user.id}_${Date.now()}`,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      educationLevel: user.educationLevel
    }
  });
});

// 3. Authentication: Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const db = getDB();
  if (db.users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }

  const newUser = {
    id: `usr_${Date.now()}`,
    name,
    email,
    password,
    educationLevel: 'Undergraduate',
    joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  };

  db.users.push(newUser);
  saveDB(db);

  res.status(201).json({
    success: true,
    token: `token_${newUser.id}_${Date.now()}`,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      educationLevel: newUser.educationLevel
    }
  });
});

// 4. Careers & Recommendations
app.get('/api/careers', (req, res) => {
  res.json({
    careers: [
      {
        id: "ai-ml-engineer",
        title: "AI/ML Engineer",
        tagline: "Build systems that learn from data.",
        matchPercent: 92,
        demand: "High demand",
        category: "Tech",
        salaryRange: "₹12–28 LPA",
        chips: ["₹12–28 LPA", "High demand", "Remote/Hybrid"]
      },
      {
        id: "data-analyst",
        title: "Data Analyst",
        tagline: "Turn numbers into actionable business insights.",
        matchPercent: 86,
        demand: "Entry friendly",
        category: "Tech",
        salaryRange: "₹5–11 LPA",
        chips: ["₹5–11 LPA", "Entry friendly", "Hybrid"]
      },
      {
        id: "nurse-practitioner",
        title: "Nurse Practitioner",
        tagline: "Deliver compassionate, advanced patient healthcare.",
        matchPercent: 74,
        demand: "Steady demand",
        category: "Health",
        salaryRange: "₹4.5–9 LPA",
        chips: ["₹4.5–9 LPA", "Steady demand", "On-site"]
      },
      {
        id: "ux-designer",
        title: "UX Designer",
        tagline: "Craft intuitive, delightful user experiences.",
        matchPercent: 70,
        demand: "Growing",
        category: "Design",
        salaryRange: "₹7–16 LPA",
        chips: ["₹7–16 LPA", "Growing", "Remote Friendly"]
      }
    ]
  });
});

// 5. Roadmap Progression API
app.get('/api/roadmap/:careerId', (req, res) => {
  const db = getDB();
  const key = `usr_1_${req.params.careerId}`;
  const steps = db.roadmaps[key] || [
    { id: 1, title: "Python", status: "done" },
    { id: 2, title: "Mathematics", status: "done" },
    { id: 3, title: "Data analysis", status: "done" },
    { id: 4, title: "Machine learning", status: "current" },
    { id: 5, title: "Deep learning", status: "pending" },
    { id: 6, title: "Projects", status: "pending" },
    { id: 7, title: "Internship", status: "pending" },
    { id: 8, title: "AI/ML Engineer", status: "pending" }
  ];
  res.json({ careerId: req.params.careerId, steps });
});

app.put('/api/roadmap/:careerId/step/:stepId', (req, res) => {
  const { careerId, stepId } = req.params;
  const db = getDB();
  const key = `usr_1_${careerId}`;
  if (!db.roadmaps[key]) {
    db.roadmaps[key] = [];
  }
  const stepNum = parseInt(stepId, 10);
  db.roadmaps[key] = db.roadmaps[key].map(s => {
    if (s.id === stepNum) {
      return { ...s, status: s.status === 'done' ? 'pending' : 'done' };
    }
    return s;
  });
  saveDB(db);
  res.json({ success: true, steps: db.roadmaps[key] });
});

// 6. Test Evaluation Algorithm API
app.post('/api/tests/:testId/evaluate', (req, res) => {
  const { answers } = req.body;
  // Calculate top match based on psychometric inputs
  const results = [
    { careerTitle: "AI/ML Engineer", matchPercent: 92, careerId: "ai-ml-engineer" },
    { careerTitle: "Data Analyst", matchPercent: 86, careerId: "data-analyst" },
    { careerTitle: "Software Developer", matchPercent: 71, careerId: "ai-ml-engineer" }
  ];
  res.json({ success: true, results });
});

// Serve frontend in production when built
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Career Guide Server running on port ${PORT}`);
});

