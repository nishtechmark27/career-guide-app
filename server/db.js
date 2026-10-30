import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'database.json');

// Initial seed data
const initialData = {
  users: [
    {
      id: "usr_1",
      name: "Student",
      email: "student@email.com",
      password: "password123",
      educationLevel: "Undergraduate (Computer Science)",
      joinDate: "October 2026"
    }
  ],
  roadmaps: {
    "usr_1_ai-ml-engineer": [
      { id: 1, title: "Python", status: "done" },
      { id: 2, title: "Mathematics", status: "done" },
      { id: 3, title: "Data analysis", status: "done" },
      { id: 4, title: "Machine learning", status: "current" },
      { id: 5, title: "Deep learning", status: "pending" },
      { id: 6, title: "Projects", status: "pending" },
      { id: 7, title: "Internship", status: "pending" },
      { id: 8, title: "AI/ML Engineer", status: "pending" }
    ]
  },
  savedCareers: {
    "usr_1": ["ai-ml-engineer"]
  },
  savedOpportunities: {
    "usr_1": ["ml-basics", "stem-merit-award"]
  },
  testResults: {}
};

export const getDB = () => {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
  }
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return initialData;
  }
};

export const saveDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
};

