// Master dataset for Student Career Guidance Application
export const INITIAL_USER = {
  name: "Student",
  email: "student@email.com",
  educationLevel: "Undergraduate (3rd Year, Computer Science)",
  interests: ["Artificial Intelligence", "Machine Learning", "Data Science", "Web Development"],
  avatar: null,
  joinDate: "October 2026",
};

export const CAREERS_DATA = [
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    tagline: "Build systems that learn from data.",
    matchPercent: 92,
    demand: "High demand",
    demandBadge: "high",
    category: "Tech",
    salaryRange: "₹12–28 LPA",
    experienceLevel: "Entry to Mid",
    growthRate: "+36% (High Growth)",
    chips: ["₹12–28 LPA", "High demand", "Remote/Hybrid"],
    overview: {
      description: "Train, evaluate and ship models that power search, recommendations and automation across modern software platforms.",
      keySkills: ["Python", "PyTorch", "TensorFlow", "Data Pipelines", "MLOps", "Transformers"],
      education: "Bachelor's degree in Computer Science, Data Science, Mathematics, or equivalent practical portfolio.",
      responsibilities: [
        "Design and implement machine learning models, algorithms, and deep learning pipelines.",
        "Pre-process large-scale structured and unstructured datasets for training.",
        "Evaluate model accuracy, latency, and resource efficiency for production deployment.",
        "Collaborate with backend engineers to integrate inference APIs into consumer products."
      ],
      roadmapId: "ai-ml-engineer"
    }
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    tagline: "Turn numbers into actionable business insights.",
    matchPercent: 86,
    demand: "Entry friendly",
    demandBadge: "entry",
    category: "Tech",
    salaryRange: "₹5–11 LPA",
    experienceLevel: "Entry level",
    growthRate: "+28% (Steady Growth)",
    chips: ["₹5–11 LPA", "Entry friendly", "Hybrid"],
    overview: {
      description: "Extract, clean, and visualize enterprise metrics to empower leaders to make confident data-driven decisions.",
      keySkills: ["SQL", "PowerBI / Tableau", "Python / R", "Statistics", "Excel"],
      education: "Degree in Business, Statistics, Economics, Engineering, or relevant certification.",
      responsibilities: [
        "Write complex SQL queries to extract data from data warehouses.",
        "Design visual dashboards tracking KPIs and performance metrics.",
        "Identify data trends and translate statistical discoveries for non-technical stakeholders."
      ],
      roadmapId: "data-analyst"
    }
  },
  {
    id: "nurse-practitioner",
    title: "Nurse Practitioner",
    tagline: "Deliver compassionate, advanced patient healthcare.",
    matchPercent: 74,
    demand: "Steady demand",
    demandBadge: "steady",
    category: "Health",
    salaryRange: "₹4.5–9 LPA",
    experienceLevel: "Licensed Professional",
    growthRate: "+45% (Critical Demand)",
    chips: ["₹4.5–9 LPA", "Steady demand", "On-site"],
    overview: {
      description: "Provide advanced diagnostic, preventive, and clinical medical services to diverse patient populations.",
      keySkills: ["Clinical Diagnosis", "Patient Care", "Pharmacology", "Emergency Triage", "Empathy"],
      education: "B.Sc. Nursing / M.Sc. with valid council registration.",
      responsibilities: [
        "Examine patients and take comprehensive health histories.",
        "Order, perform, and interpret diagnostic tests.",
        "Prescribe medications and formulate individualized care plans."
      ],
      roadmapId: "nurse-practitioner"
    }
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    tagline: "Craft intuitive, delightful user experiences.",
    matchPercent: 70,
    demand: "Growing",
    demandBadge: "growing",
    category: "Design",
    salaryRange: "₹7–16 LPA",
    experienceLevel: "Entry to Mid",
    growthRate: "+22% (Growing)",
    chips: ["₹7–16 LPA", "Growing", "Remote Friendly"],
    overview: {
      description: "Research user behaviors, architect wireframes, and design human-centric digital interfaces.",
      keySkills: ["Figma", "User Research", "Wireframing", "Usability Testing", "Design Systems"],
      education: "Degree in Design, Human-Computer Interaction, or strong design portfolio.",
      responsibilities: [
        "Conduct user interviews and synthesis sessions.",
        "Create low and high-fidelity wireframes and interactive prototypes.",
        "Test designs with real users to eliminate usability friction."
      ],
      roadmapId: "ux-designer"
    }
  },
  {
    id: "product-manager",
    title: "Product Manager",
    tagline: "Bridge business, tech, and user experience.",
    matchPercent: 68,
    demand: "High demand",
    demandBadge: "high",
    category: "Business",
    salaryRange: "₹14–30 LPA",
    experienceLevel: "Mid to Senior",
    growthRate: "+25% (High Demand)",
    chips: ["₹14–30 LPA", "High demand", "Hybrid"],
    overview: {
      description: "Define product strategy, lead cross-functional roadmaps, and ship impactful solutions.",
      keySkills: ["Product Strategy", "Agile", "User Analytics", "Prioritization", "Roadmapping"],
      education: "Degree in Tech or Business / MBA preferred.",
      responsibilities: [
        "Define customer problem statements and PRDs.",
        "Prioritize engineering sprint backlogs for maximum business value.",
        "Analyze product metrics to optimize user acquisition and retention."
      ],
      roadmapId: "product-manager"
    }
  }
];

export const ROADMAPS = {
  "ai-ml-engineer": {
    careerId: "ai-ml-engineer",
    careerTitle: "AI/ML Engineer",
    steps: [
      {
        id: 1,
        title: "Python",
        subtitle: "Syntax, data structures, libraries",
        status: "done", // "done", "current", "pending"
        details: "Master core Python syntax, OOP, virtual environments, NumPy, and standard library manipulation."
      },
      {
        id: 2,
        title: "Mathematics",
        subtitle: "Linear algebra, probability",
        status: "done",
        details: "Matrix multiplications, eigenvalues, partial derivatives, Bayes rule, distributions, and gradient descent intuition."
      },
      {
        id: 3,
        title: "Data analysis",
        subtitle: "Pandas, visualisation",
        status: "done",
        details: "Exploratory data analysis, cleaning datasets, feature engineering, Matplotlib, Seaborn, and Plotly."
      },
      {
        id: 4,
        title: "Machine learning",
        subtitle: "Regression, trees, evaluation",
        status: "current",
        details: "Scikit-Learn, Linear/Logistic regression, Decision Trees, Random Forests, XGBoost, Cross-validation, ROC-AUC."
      },
      {
        id: 5,
        title: "Deep learning",
        subtitle: "Neural networks, transformers",
        status: "pending",
        details: "PyTorch fundamentals, CNNs for computer vision, RNNs/LSTMs, and Attention mechanisms / Transformer architectures."
      },
      {
        id: 6,
        title: "Projects",
        subtitle: "Build 2–3 portfolio projects",
        status: "pending",
        details: "Develop end-to-end applications: sentiment analysis pipeline, recommendation system, and deploy using FastAPI."
      },
      {
        id: 7,
        title: "Internship",
        subtitle: "Apply to ML internships",
        status: "pending",
        details: "Prepare resume, showcase GitHub repositories, practice LeetCode and ML system design interviews."
      },
      {
        id: 8,
        title: "AI/ML Engineer",
        subtitle: "Your target role",
        status: "pending",
        details: "Achieve full-time placement as an Associate / Junior AI/ML Engineer with industry impact."
      }
    ]
  }
};

export const APTITUDE_TESTS = [
  {
    id: "career-fit",
    title: "Career Fit Assessment",
    duration: "12 min",
    questionCount: 3,
    badge: "15 questions · 12 min",
    category: "Fit",
    description: "Discover your psychological strengths, problem-solving preferences, and aligned career paths.",
    questions: [
      {
        id: 1,
        prompt: "When tackling a challenge, what energizes you the most?",
        options: [
          { text: "Analyzing patterns, statistics, and solving algorithmic puzzles", traits: { "ai-ml-engineer": 3, "data-analyst": 3 } },
          { text: "Designing visual layouts, interfaces, and empathizing with users", traits: { "ux-designer": 3 } },
          { text: "Collaborating with people, managing timelines, and driving vision", traits: { "product-manager": 3 } }
        ]
      },
      {
        id: 2,
        prompt: "I prefer building things to analysing them.",
        options: [
          { text: "Building", traits: { "ai-ml-engineer": 3, "ux-designer": 2 } },
          { text: "Analysing", traits: { "data-analyst": 3, "ai-ml-engineer": 2 } },
          { text: "Both equally", traits: { "ai-ml-engineer": 3, "data-analyst": 2, "product-manager": 2 } }
        ]
      },
      {
        id: 3,
        prompt: "Which work environment sounds most rewarding to you?",
        options: [
          { text: "High-tech software lab developing automated smart systems", traits: { "ai-ml-engineer": 3 } },
          { text: "Consulting or corporate office optimizing metrics and reporting", traits: { "data-analyst": 3 } },
          { text: "Creative studio crafting user-centered mobile apps", traits: { "ux-designer": 3 } }
        ]
      }
    ]
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    duration: "15 min",
    questionCount: 20,
    badge: "20 questions · 15 min",
    category: "Logic",
    description: "Evaluate your deductive reasoning, pattern recognition, and logical deduction abilities.",
    questions: [
      {
        id: 1,
        prompt: "If all AI models are software, and some software is open-source, what logically follows?",
        options: [
          { text: "Some AI models may be open-source", traits: { "ai-ml-engineer": 3 } },
          { text: "All AI models are open-source", traits: {} },
          { text: "No AI models can be open-source", traits: {} }
        ]
      },
      {
        id: 2,
        prompt: "Complete the numerical pattern: 2, 6, 12, 20, 30, ?",
        options: [
          { text: "42 (Difference increments by 2 each time)", traits: { "data-analyst": 3, "ai-ml-engineer": 2 } },
          { text: "40", traits: {} },
          { text: "38", traits: {} }
        ]
      }
    ]
  },
  {
    id: "numerical-ability",
    title: "Numerical Ability",
    duration: "18 min",
    questionCount: 20,
    badge: "20 questions · 18 min",
    category: "Math",
    description: "Benchmark your arithmetic aptitude, percentages, probability, and chart interpretation.",
    questions: [
      {
        id: 1,
        prompt: "A model's training loss drops by 20% in epoch 1 and 25% in epoch 2. What is the net percentage reduction?",
        options: [
          { text: "40% net reduction", traits: { "ai-ml-engineer": 3, "data-analyst": 3 } },
          { text: "45% net reduction", traits: {} },
          { text: "50% net reduction", traits: {} }
        ]
      }
    ]
  },
  {
    id: "verbal-skills",
    title: "Verbal Skills",
    duration: "10 min",
    questionCount: 15,
    badge: "15 questions · 10 min",
    category: "Communication",
    description: "Test reading comprehension, vocabulary precision, and clear technical communication.",
    questions: [
      {
        id: 1,
        prompt: "Which word best characterizes a system that adapts autonomously based on empirical experience?",
        options: [
          { text: "Heuristic / Adaptive", traits: { "ai-ml-engineer": 3 } },
          { text: "Static", traits: {} },
          { text: "Monolithic", traits: {} }
        ]
      }
    ]
  }
];

export const COURSES_DATA = [
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    provider: "Coursera",
    duration: "6 weeks",
    level: "Beginner",
    tagline: "Coursera · 6 weeks · Beginner",
    badge: "Beginner",
    category: "Machine Learning",
    about: "Learn regression, classification and model evaluation with hands-on labs and real datasets.",
    youLearn: "Supervised learning, feature engineering, model tuning, and evaluation metrics.",
    rating: 4.8,
    enrolledCount: "142,000+",
    instructor: "Stanford University / DeepLearning.AI",
    externalUrl: "https://www.coursera.org",
    chips: ["Coursera", "Beginner", "Hands-on"]
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    provider: "NPTEL",
    duration: "8 weeks",
    level: "All Levels",
    tagline: "NPTEL · 8 weeks",
    badge: "Government Certified",
    category: "Programming",
    about: "Comprehensive course taught by IIT faculty covering Python programming, Pandas, data wrangling, and statistical visualisations.",
    youLearn: "NumPy arrays, Pandas DataFrames, cleaning missing values, time-series analysis.",
    rating: 4.7,
    enrolledCount: "85,000+",
    instructor: "IIT Madras Faculty",
    externalUrl: "https://nptel.ac.in",
    chips: ["NPTEL", "IIT Madras", "Certificate"]
  },
  {
    id: "intro-deep-learning",
    title: "Intro to Deep Learning",
    provider: "edX",
    duration: "5 weeks",
    level: "Intermediate",
    tagline: "edX · 5 weeks · Intermediate",
    badge: "Intermediate",
    category: "Deep Learning",
    about: "Explore deep artificial neural networks, backpropagation, convolutional networks for images, and sequence modeling.",
    youLearn: "PyTorch architecture, gradient optimization, transfer learning, regularization techniques.",
    rating: 4.9,
    enrolledCount: "62,000+",
    instructor: "MIT / Harvard edX",
    externalUrl: "https://www.edx.org",
    chips: ["edX", "PyTorch", "Intermediate"]
  },
  {
    id: "statistics-foundations",
    title: "Statistics Foundations",
    provider: "Khan Academy",
    duration: "Self-paced",
    level: "Foundational",
    tagline: "Khan Academy · Self-paced",
    badge: "Free Access",
    category: "Mathematics",
    about: "Build the foundational mathematical intuition needed for machine learning, data science, and analytical thinking.",
    youLearn: "Descriptive statistics, normal distributions, confidence intervals, hypothesis testing, p-values.",
    rating: 4.9,
    enrolledCount: "350,000+",
    instructor: "Sal Khan & Team",
    externalUrl: "https://www.khanacademy.org",
    chips: ["Free", "Self-paced", "Math"]
  }
];

export const SCHOLARSHIPS_DATA = [
  {
    id: "stem-merit-award",
    title: "STEM Merit Award",
    amount: "₹50,000 per year",
    targetLevel: "Undergraduate",
    tagline: "₹50,000 per year · Undergraduate",
    badge: "Closes soon",
    badgeType: "warning",
    daysRemaining: 6,
    eligibility: "Class 12 score above 85% and enrolled in a recognized STEM degree program.",
    documents: "Marksheet, ID proof, income certificate, and college admission slip.",
    provider: "Ministry of Science & Technology",
    deadline: "November 5, 2026",
    chips: ["₹50,000 / yr", "Undergraduate", "Merit Based"]
  },
  {
    id: "first-gen-grant",
    title: "First Generation Grant",
    amount: "Full tuition support",
    targetLevel: "All Degree Years",
    tagline: "Full tuition support",
    badge: "Full Funding",
    badgeType: "default",
    daysRemaining: 24,
    eligibility: "First student in immediate family pursuing higher education with household income < ₹3 LPA.",
    documents: "Family declaration, community certificate, latest grade sheet, bank details.",
    provider: "National Educational Equality Trust",
    deadline: "November 25, 2026",
    chips: ["Full Tuition", "First Gen", "Need Based"]
  },
  {
    id: "women-in-tech",
    title: "Women in Tech Scholarship",
    amount: "₹75,000 one-time",
    targetLevel: "Female Engineering Students",
    tagline: "₹75,000 one-time",
    badge: "Closing in 4 days",
    badgeType: "warning",
    daysRemaining: 4,
    eligibility: "Female students currently enrolled in B.Tech / B.E / BCA / MCA in CS, IT, or AI streams.",
    documents: "College ID, resume, statement of purpose, faculty recommendation.",
    provider: "Tech For Tomorrow Global Initiative",
    deadline: "November 3, 2026",
    chips: ["₹75,000", "Women in Tech", "Mentorship"]
  },
  {
    id: "rural-talent-fund",
    title: "Rural Talent Fund",
    amount: "₹30,000 per year",
    targetLevel: "Rural School Alumni",
    tagline: "₹30,000 per year",
    badge: "Open Enrollment",
    badgeType: "default",
    daysRemaining: 40,
    eligibility: "Completed secondary education in a rural taluk school with distinction.",
    documents: "Rural schooling certificate, domicile verification, college admission letter.",
    provider: "State Development Council",
    deadline: "December 10, 2026",
    chips: ["₹30,000 / yr", "State Govt", "Open"]
  }
];

export const JOBS_DATA = [
  {
    id: "junior-data-analyst-infosys",
    title: "Junior Data Analyst",
    company: "Infosys",
    location: "Bengaluru",
    salary: "₹5–8 LPA",
    tagline: "Infosys · Bengaluru · ₹5–8 LPA",
    badge: "Full Time",
    type: "Full-Time",
    roleOverview: "Clean and analyse data, build dashboards and share business insights with global cross-functional teams.",
    requirements: "Python, SQL, statistics basics. Degree in any science, engineering, or mathematics stream.",
    postedDate: "2 days ago",
    openings: 8,
    chips: ["Infosys", "Bengaluru", "₹5–8 LPA"]
  },
  {
    id: "ml-engineer-trainee-zoho",
    title: "ML Engineer Trainee",
    company: "Zoho",
    location: "Chennai",
    salary: "₹7–10 LPA",
    tagline: "Zoho · Chennai · ₹7–10 LPA",
    badge: "Campus / Fresher",
    type: "Full-Time",
    roleOverview: "Contribute to core natural language processing and computer vision microservices across Zoho cloud suite.",
    requirements: "Strong understanding of data structures, algorithms, Python, and applied machine learning fundamentals.",
    postedDate: "Just now",
    openings: 12,
    chips: ["Zoho", "Chennai", "₹7–10 LPA"]
  },
  {
    id: "software-developer-wipro",
    title: "Software Developer",
    company: "Wipro",
    location: "Remote",
    salary: "₹4–7 LPA",
    tagline: "Wipro · Remote · ₹4–7 LPA",
    badge: "Remote",
    type: "Full-Time",
    roleOverview: "Develop, debug, and maintain cloud microservices and scalable web applications for enterprise clients.",
    requirements: "Proficiency in JavaScript/TypeScript, React, Node.js or Java Spring Boot.",
    postedDate: "3 days ago",
    openings: 15,
    chips: ["Wipro", "Remote", "₹4–7 LPA"]
  },
  {
    id: "research-assistant-iisc",
    title: "Research Assistant",
    company: "IISc",
    location: "Bengaluru",
    salary: "₹35,000 / month",
    tagline: "IISc · Bengaluru",
    badge: "Research Fellowship",
    badgeType: "warning",
    type: "Contract / Project",
    roleOverview: "Assist faculty researchers in training foundation models and running experimental benchmarks in computational intelligence.",
    requirements: "Linear algebra, PyTorch, research paper reading comprehension, strong coding hygiene.",
    postedDate: "1 day ago",
    openings: 2,
    chips: ["IISc", "Research", "Bengaluru"]
  }
];

export const INTERNSHIPS_DATA = [
  {
    id: "data-science-intern-flipkart",
    title: "Data Science Intern",
    company: "Flipkart",
    location: "Remote",
    duration: "3 months",
    stipend: "₹45,000 / month",
    tagline: "Flipkart · Remote · 3 months",
    badge: "High Stipend",
    type: "Internship",
    roleOverview: "Analyze customer shopping cart trends, run A/B testing analysis, and optimize search ranking heuristics.",
    requirements: "Python, Pandas, SQL, curiosity for e-commerce data problems.",
    chips: ["Flipkart", "Remote", "3 months"]
  },
  {
    id: "ml-research-intern-iit-madras",
    title: "ML Research Intern",
    company: "IIT Madras",
    location: "On-site",
    duration: "2 months",
    stipend: "₹25,000 / month",
    tagline: "IIT Madras · On-site · 2 months",
    badge: "Academic",
    badgeType: "warning",
    type: "Internship",
    roleOverview: "Work closely with PhD scholars on computer vision pipelines for agricultural drone imagery.",
    requirements: "CNNs, PyTorch, OpenCV, OpenCV dataset pipelines.",
    chips: ["IIT Madras", "On-site", "2 months"]
  },
  {
    id: "product-design-intern-swiggy",
    title: "Product Design Intern",
    company: "Swiggy",
    location: "Bengaluru",
    duration: "6 months",
    stipend: "₹35,000 / month",
    tagline: "Swiggy · Bengaluru · 6 months",
    badge: "PPO Opportunity",
    type: "Internship",
    roleOverview: "Design user micro-interactions, refine consumer delivery tracking UI, and run usability tests.",
    requirements: "Figma portfolio, UI design eye, basic prototyping skills.",
    chips: ["Swiggy", "Bengaluru", "6 months"]
  },
  {
    id: "analytics-intern-deloitte",
    title: "Analytics Intern",
    company: "Deloitte",
    location: "Hybrid",
    duration: "3 months",
    stipend: "₹30,000 / month",
    tagline: "Deloitte · Hybrid · 3 months",
    badge: "Corporate",
    type: "Internship",
    roleOverview: "Assist consulting teams with client risk analysis, data visualization in PowerBI, and data hygiene.",
    requirements: "Excel modeling, SQL, Tableau / PowerBI, strong presentation skills.",
    chips: ["Deloitte", "Hybrid", "3 months"]
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "STEM Merit Award closes soon",
    subtitle: "Closes in 6 days",
    badge: "Urgent",
    badgeType: "warning",
    timestamp: "10 mins ago",
    read: false,
    actionType: "scholarship",
    targetId: "stem-merit-award"
  },
  {
    id: "notif-2",
    title: "Your test result is ready",
    subtitle: "Career Fit Assessment · 92% AI/ML match",
    badge: "New",
    badgeType: "default",
    timestamp: "2 hours ago",
    read: false,
    actionType: "test-result",
    targetId: "ai-ml-engineer"
  },
  {
    id: "notif-3",
    title: "New course for Machine learning",
    subtitle: "Recommended from your roadmap",
    badge: "Course",
    badgeType: "default",
    timestamp: "Yesterday",
    read: true,
    actionType: "course",
    targetId: "ml-basics"
  },
  {
    id: "notif-4",
    title: "Internship added",
    subtitle: "Data Science Intern · Remote",
    badge: "Job",
    badgeType: "default",
    timestamp: "2 days ago",
    read: true,
    actionType: "internship",
    targetId: "data-science-intern-flipkart"
  }
];
