import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  INITIAL_USER,
  CAREERS_DATA,
  ROADMAPS,
  APTITUDE_TESTS,
  COURSES_DATA,
  SCHOLARSHIPS_DATA,
  JOBS_DATA,
  INTERNSHIPS_DATA,
  INITIAL_NOTIFICATIONS
} from '../data/mockData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Theme & Viewport Frame State
  const [theme, setTheme] = useState(() => localStorage.getItem('cg_theme') || 'light');
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('cg_view_mode') || 'phone');

  // Auth State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('cg_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('cg_auth') === 'true';
  });

  // Navigation Stack
  const [currentScreen, setCurrentScreen] = useState(() => {
    return localStorage.getItem('cg_auth') === 'true' ? 'dashboard' : 'splash';
  });
  const [historyStack, setHistoryStack] = useState(['dashboard']);

  // Selected Entities
  const [selectedCareer, setSelectedCareer] = useState(CAREERS_DATA[0]);
  const [activeOpportunityTab, setActiveOpportunityTab] = useState('courses');
  const [selectedOpportunity, setSelectedOpportunity] = useState(COURSES_DATA[0]);
  const [selectedTest, setSelectedTest] = useState(APTITUDE_TESTS[0]);

  // Roadmap State (with user-toggled progression)
  const [roadmapSteps, setRoadmapSteps] = useState(() => {
    const saved = localStorage.getItem('cg_roadmap_aiml');
    return saved ? JSON.parse(saved) : ROADMAPS['ai-ml-engineer'].steps;
  });

  // Saved Bookmarks
  const [savedCareers, setSavedCareers] = useState(() => {
    const saved = localStorage.getItem('cg_saved_careers');
    return saved ? JSON.parse(saved) : ['ai-ml-engineer'];
  });
  const [savedOpportunities, setSavedOpportunities] = useState(() => {
    const saved = localStorage.getItem('cg_saved_opps');
    return saved ? JSON.parse(saved) : ['ml-basics', 'stem-merit-award'];
  });

  // Notifications State
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('cg_notifications');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  // Quiz Engine State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  // Global Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Persist Theme & View Mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cg_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('cg_view_mode', viewMode);
  }, [viewMode]);

  // Persist Auth
  useEffect(() => {
    localStorage.setItem('cg_user', JSON.stringify(user));
    localStorage.setItem('cg_auth', isAuthenticated ? 'true' : 'false');
  }, [user, isAuthenticated]);

  // Persist Roadmaps
  useEffect(() => {
    localStorage.setItem('cg_roadmap_aiml', JSON.stringify(roadmapSteps));
  }, [roadmapSteps]);

  // Persist Bookmarks
  useEffect(() => {
    localStorage.setItem('cg_saved_careers', JSON.stringify(savedCareers));
  }, [savedCareers]);

  useEffect(() => {
    localStorage.setItem('cg_saved_opps', JSON.stringify(savedOpportunities));
  }, [savedOpportunities]);

  // Persist Notifications
  useEffect(() => {
    localStorage.setItem('cg_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Navigation Handlers
  const navigate = (screenName, payload = null) => {
    if (payload?.career) setSelectedCareer(payload.career);
    if (payload?.opportunity) setSelectedOpportunity(payload.opportunity);
    if (payload?.opportunityTab) setActiveOpportunityTab(payload.opportunityTab);
    if (payload?.test) {
      setSelectedTest(payload.test);
      setQuizIndex(0);
      setQuizAnswers({});
    }

    setHistoryStack(prev => [...prev, screenName]);
    setCurrentScreen(screenName);
  };

  const goBack = () => {
    if (historyStack.length > 1) {
      const nextStack = [...historyStack];
      nextStack.pop();
      const previous = nextStack[nextStack.length - 1];
      setHistoryStack(nextStack);
      setCurrentScreen(previous);
    } else {
      setCurrentScreen('dashboard');
    }
  };

  // Auth Operations
  const login = (email, password) => {
    setUser(prev => ({
      ...prev,
      email: email || prev.email,
      name: email ? email.split('@')[0] : prev.name
    }));
    setIsAuthenticated(true);
    navigate('dashboard');
  };

  const register = (fullName, email, password) => {
    setUser({
      name: fullName || "Student",
      email: email || "student@email.com",
      educationLevel: "Undergraduate (Computer Science)",
      interests: ["Tech", "Machine Learning"],
      avatar: null,
      joinDate: "October 2026"
    });
    setIsAuthenticated(true);
    navigate('dashboard');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('login');
  };

  // Bookmark Toggles
  const toggleSaveCareer = (careerId) => {
    setSavedCareers(prev => 
      prev.includes(careerId) 
        ? prev.filter(id => id !== careerId) 
        : [...prev, careerId]
    );
  };

  const toggleSaveOpportunity = (oppId) => {
    setSavedOpportunities(prev => 
      prev.includes(oppId) 
        ? prev.filter(id => id !== oppId) 
        : [...prev, oppId]
    );
  };

  // Roadmap Step Progression
  const toggleStepDone = (stepId) => {
    setRoadmapSteps(prev => 
      prev.map(step => {
        if (step.id === stepId) {
          const nextStatus = step.status === 'done' ? 'pending' : 'done';
          return { ...step, status: nextStatus };
        }
        return step;
      })
    );
  };

  // Quiz Answer Selection & Completion
  const selectQuizAnswer = (questionId, optionIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const submitQuiz = () => {
    // Generate results
    const results = [
      { careerTitle: "AI/ML Engineer", matchPercent: 92, careerId: "ai-ml-engineer" },
      { careerTitle: "Data Analyst", matchPercent: 86, careerId: "data-analyst" },
      { careerTitle: "Software Developer", matchPercent: 71, careerId: "ai-ml-engineer" }
    ];
    setQuizResult(results);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    navigate('test-result');
  };

  // Notification Operations
  const markNotificationRead = (notifId) => {
    setNotifications(prev => 
      prev.map(n => n.id === notifId ? { ...n, read: true } : n)
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationCount = notifications.filter(n => !n.read).length;

  // Roadmap Calculated Progress
  const completedStepsCount = roadmapSteps.filter(s => s.status === 'done').length;
  const roadmapProgressPercent = Math.round((completedStepsCount / roadmapSteps.length) * 100);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light'),
        viewMode,
        setViewMode,
        toggleViewMode: () => setViewMode(prev => prev === 'phone' ? 'fluid' : 'phone'),
        user,
        setUser,
        isAuthenticated,
        login,
        register,
        logout,
        currentScreen,
        setCurrentScreen,
        navigate,
        goBack,
        selectedCareer,
        setSelectedCareer,
        activeOpportunityTab,
        setActiveOpportunityTab,
        selectedOpportunity,
        setSelectedOpportunity,
        selectedTest,
        setSelectedTest,
        roadmapSteps,
        toggleStepDone,
        completedStepsCount,
        roadmapProgressPercent,
        savedCareers,
        toggleSaveCareer,
        savedOpportunities,
        toggleSaveOpportunity,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        unreadNotificationCount,
        quizIndex,
        setQuizIndex,
        quizAnswers,
        selectQuizAnswer,
        submitQuiz,
        quizResult,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
