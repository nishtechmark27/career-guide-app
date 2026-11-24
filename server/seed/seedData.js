import mongoose from 'mongoose';
import {
  User,
  StudentProfile,
  AptitudeQuestion,
  AptitudeResult,
  Career,
  Course,
  Scholarship,
  Internship,
  Placement,
  Notification,
  Admin,
  Application,
  Bookmark,
  Feedback,
  Reminder
} from '../models/index.js';

export const seedDatabase = async () => {
  try {
    console.log('\x1b[36mℹ Checking and initializing collections in career_guidance_db...\x1b[0m');

    // 1. Users
    let studentUser = await User.findOne({ email: 'student@email.com' });
    if (!studentUser) {
      studentUser = await User.create({
        name: 'Student User',
        email: 'student@email.com',
        password: 'password123',
        role: 'student',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      });
      console.log('✔ Initialized user: student@email.com');
    }

    let adminUser = await User.findOne({ email: 'admin@careerguide.com' });
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Platform Administrator',
        email: 'admin@careerguide.com',
        password: 'adminpassword123',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
      });
      console.log('✔ Initialized admin: admin@careerguide.com');
    }

    // 2. Student Profiles
    const existingProfile = await StudentProfile.findOne({ user: studentUser._id });
    if (!existingProfile) {
      await StudentProfile.create({
        user: studentUser._id,
        educationLevel: 'Undergraduate (3rd Year, Computer Science)',
        college: 'National Institute of Technology',
        stream: 'Computer Science & Engineering',
        gradeOrCgpa: '8.8 / 10',
        bio: 'Aspiring AI/ML Engineer passionate about neural networks, data structures, and computer vision.',
        targetCareer: 'AI/ML Engineer',
        skills: ['Python', 'SQL', 'PyTorch', 'Data Analysis', 'React', 'FastAPI'],
        interests: ['Artificial Intelligence', 'Data Science', 'Cloud Computing', 'Web Development'],
        githubUrl: 'https://github.com/nishtechmark27',
        linkedinUrl: 'https://linkedin.com'
      });
      console.log('✔ Initialized student profile');
    }

    // 3. Admins
    const existingAdmin = await Admin.findOne({ user: adminUser._id });
    if (!existingAdmin) {
      await Admin.create({
        user: adminUser._id,
        adminCode: 'ADM-2026-CHIEF',
        department: 'Operations & Academic Alliances',
        permissions: ['manage_all', 'manage_users', 'manage_content', 'system_config']
      });
      console.log('✔ Initialized admin record');
    }

    // 4. Careers
    const careerCount = await Career.countDocuments();
    if (careerCount === 0) {
      await Career.create([
        {
          careerId: 'ai-ml-engineer',
          title: 'AI/ML Engineer',
          tagline: 'Build systems that learn from data and automate complex tasks.',
          matchPercent: 94,
          demand: 'Very High Demand',
          demandBadge: 'high',
          category: 'Tech',
          salaryRange: '₹14–32 LPA',
          experienceLevel: 'Entry to Mid',
          growthRate: '+38% (Explosive Growth)',
          chips: ['₹14–32 LPA', 'High Demand', 'Remote/Hybrid'],
          overview: {
            description: 'Develop, evaluate, and ship neural networks and statistical models that power real-time inference, search, robotics, and natural language understanding.',
            keySkills: ['Python', 'PyTorch / TensorFlow', 'Data Pipelines', 'MLOps', 'Transformers', 'Linear Algebra'],
            education: "B.Tech/B.S. in Computer Science, Data Science, Artificial Intelligence, or equivalent portfolio.",
            responsibilities: [
              'Architect, train, and benchmark deep learning models for classification, regression, and generation.',
              'Construct scalable feature extraction and dataset preparation pipelines.',
              'Profile latency and optimize inference on GPU, TPU, and edge microcontrollers.',
              'Deploy containerized inference endpoints through REST and gRPC architectures.'
            ],
            roadmapId: 'ai-ml-engineer'
          },
          roadmap: [
            { stepNumber: 1, title: 'Python Fundamentals & OOP', status: 'done', estimatedWeeks: 2, resource: 'Python 3 Official Docs', officialUrl: 'https://docs.python.org/3/' },
            { stepNumber: 2, title: 'Linear Algebra & Multivariable Calculus', status: 'done', estimatedWeeks: 3, resource: 'Khan Academy Math', officialUrl: 'https://www.khanacademy.org/math' },
            { stepNumber: 3, title: 'Data Wrangling with Pandas & NumPy', status: 'done', estimatedWeeks: 2, resource: 'Kaggle Micro-courses', officialUrl: 'https://www.kaggle.com/learn' },
            { stepNumber: 4, title: 'Supervised Learning Algorithms', status: 'current', estimatedWeeks: 4, resource: 'Coursera ML Specialization', officialUrl: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { stepNumber: 5, title: 'Deep Neural Networks & PyTorch', status: 'pending', estimatedWeeks: 5, resource: 'Fast.ai & PyTorch Tutorials', officialUrl: 'https://pytorch.org/tutorials/' },
            { stepNumber: 6, title: 'Computer Vision & Transformers', status: 'pending', estimatedWeeks: 4, resource: 'Hugging Face Course', officialUrl: 'https://huggingface.co/learn' },
            { stepNumber: 7, title: 'MLOps, Docker & Inference APIs', status: 'pending', estimatedWeeks: 3, resource: 'Full Stack Deep Learning', officialUrl: 'https://fullstackdeeplearning.com/' },
            { stepNumber: 8, title: 'End-to-End Capstone Production Project', status: 'pending', estimatedWeeks: 4, resource: 'GitHub Portfolio Showcase', officialUrl: 'https://github.com/' }
          ]
        },
        {
          careerId: 'data-analyst',
          title: 'Data Analyst',
          tagline: 'Turn numbers into actionable business insights.',
          matchPercent: 88,
          demand: 'Entry friendly',
          demandBadge: 'entry',
          category: 'Tech',
          salaryRange: '₹6–12 LPA',
          experienceLevel: 'Entry level',
          growthRate: '+26% (Steady Growth)',
          chips: ['₹6–12 LPA', 'Entry friendly', 'Hybrid'],
          overview: {
            description: 'Extract, clean, and visualize enterprise metrics to empower leadership to make high-impact data-driven decisions.',
            keySkills: ['SQL', 'PowerBI / Tableau', 'Python / R', 'Statistics', 'Excel'],
            education: 'Degree in Business, Statistics, Economics, Mathematics, Engineering, or relevant certification.',
            responsibilities: [
              'Query relational databases and cloud data warehouses with optimized SQL.',
              'Synthesize exploratory data findings into interactive dashboards.',
              'Identify seasonal variances, user funnel drop-offs, and operational bottlenecks.'
            ],
            roadmapId: 'data-analyst'
          },
          roadmap: [
            { stepNumber: 1, title: 'Advanced Excel & Business Formulas', status: 'done', estimatedWeeks: 2, resource: 'Microsoft Learn', officialUrl: 'https://learn.microsoft.com/' },
            { stepNumber: 2, title: 'Relational Database Design & SQL', status: 'current', estimatedWeeks: 3, resource: 'Mode SQL Tutorial', officialUrl: 'https://mode.com/sql-tutorial/' },
            { stepNumber: 3, title: 'BI Dashboards with PowerBI & Tableau', status: 'pending', estimatedWeeks: 3, resource: 'Tableau Public Training', officialUrl: 'https://www.tableau.com/learn/training' },
            { stepNumber: 4, title: 'Python for Data Analysis (Pandas)', status: 'pending', estimatedWeeks: 4, resource: 'NPTEL Python for Data Science', officialUrl: 'https://nptel.ac.in/' }
          ]
        },
        {
          careerId: 'cloud-devops-engineer',
          title: 'Cloud & DevOps Engineer',
          tagline: 'Architect robust, scalable cloud infrastructure and CI/CD automation.',
          matchPercent: 84,
          demand: 'High demand',
          demandBadge: 'high',
          category: 'Tech',
          salaryRange: '₹10–24 LPA',
          experienceLevel: 'Entry to Mid',
          growthRate: '+30% (Rapid Growth)',
          chips: ['₹10–24 LPA', 'High Demand', 'Remote'],
          overview: {
            description: 'Manage scalable cloud resources across AWS, GCP, and Azure, orchestrating automated CI/CD deployment pipelines.',
            keySkills: ['Docker', 'Kubernetes', 'AWS / GCP', 'Terraform', 'GitHub Actions', 'Linux'],
            education: 'Degree in IT, Computer Science, or Cloud Certifications (AWS Solutions Architect / CKA).',
            responsibilities: [
              'Deploy microservices with high availability and self-healing resilience.',
              'Maintain CI/CD automation pipelines for automated test and delivery.',
              'Monitor infrastructure reliability, response latency, and disaster recovery.'
            ],
            roadmapId: 'cloud-devops-engineer'
          },
          roadmap: [
            { stepNumber: 1, title: 'Linux System Administration & Bash', status: 'done', estimatedWeeks: 2, resource: 'Linux Foundation', officialUrl: 'https://www.linuxfoundation.org/' },
            { stepNumber: 2, title: 'Docker Containerization & Networking', status: 'current', estimatedWeeks: 3, resource: 'Docker Official Docs', officialUrl: 'https://docs.docker.com/' },
            { stepNumber: 3, title: 'Kubernetes Cluster Orchestration', status: 'pending', estimatedWeeks: 4, resource: 'Kubernetes.io Tutorials', officialUrl: 'https://kubernetes.io/docs/tutorials/' },
            { stepNumber: 4, title: 'CI/CD with GitHub Actions', status: 'pending', estimatedWeeks: 2, resource: 'GitHub Actions Documentation', officialUrl: 'https://docs.github.com/en/actions' }
          ]
        },
        {
          careerId: 'ux-designer',
          title: 'Product UX/UI Designer',
          tagline: 'Craft intuitive, delightful user experiences for digital products.',
          matchPercent: 78,
          demand: 'Growing',
          demandBadge: 'growing',
          category: 'Design',
          salaryRange: '₹8–18 LPA',
          experienceLevel: 'Entry to Mid',
          growthRate: '+24% (Expanding)',
          chips: ['₹8–18 LPA', 'Growing', 'Remote Friendly'],
          overview: {
            description: 'Conduct user research, design wireframes, high-fidelity prototypes, and design systems for mobile and web apps.',
            keySkills: ['Figma', 'User Research', 'Wireframing', 'Usability Testing', 'Design Systems'],
            education: 'Degree in Design, HCI, Multimedia, or demonstrated design portfolio.',
            responsibilities: [
              'Conduct qualitative and quantitative user interviews to discover pain points.',
              'Build wireframes, interactive prototypes, and design tokens.',
              'Test prototypes with users and iterate designs based on behavioral analytics.'
            ],
            roadmapId: 'ux-designer'
          },
          roadmap: [
            { stepNumber: 1, title: 'UX Research & User Persona Creation', status: 'done', estimatedWeeks: 2, resource: 'Nielsen Norman Group', officialUrl: 'https://www.nngroup.com/' },
            { stepNumber: 2, title: 'Figma Auto-Layout & Component Systems', status: 'current', estimatedWeeks: 3, resource: 'Figma Learn Portal', officialUrl: 'https://help.figma.com/' },
            { stepNumber: 3, title: 'Interactive Prototyping & Micro-animations', status: 'pending', estimatedWeeks: 3, resource: 'Designlab Tutorials', officialUrl: 'https://designlab.com/' }
          ]
        }
      ]);
      console.log('✔ Initialized careers collection with roadmaps');
    }

    // 5. Courses
    const courseCount = await Course.countDocuments();
    if (courseCount === 0) {
      await Course.create([
        {
          courseId: 'course-ml-specialization',
          title: 'Machine Learning Specialization',
          provider: 'Coursera / Stanford University',
          instructor: 'Andrew Ng',
          category: 'Machine Learning',
          level: 'Beginner to Intermediate',
          pricingType: 'Free Audit / Paid Certificate',
          fees: 'Free to Audit (₹3,999/mo for certificate)',
          duration: '3 months (8 hrs/week)',
          rating: 4.9,
          enrolledCount: '480,000+',
          badge: 'Industry Standard',
          eligibility: 'Basic high-school mathematics and introductory Python syntax knowledge.',
          about: 'A foundational online program co-created by DeepLearning.AI and Stanford Online teaching core machine learning algorithms and practical implementation.',
          youLearn: [
            'Supervised machine learning (Linear regression, logistic regression, decision trees)',
            'Unsupervised learning (K-means, PCA, anomaly detection, recommender systems)',
            'Reinforcement learning and neural network training best practices'
          ],
          officialUrl: 'https://www.coursera.org/specializations/machine-learning-introduction',
          chips: ['Coursera', 'Stanford', 'Andrew Ng', 'Verified Certificate']
        },
        {
          courseId: 'course-cs50-harvard',
          title: 'CS50x: Introduction to Computer Science',
          provider: 'Harvard University / edX',
          instructor: 'David J. Malan',
          category: 'Computer Science',
          level: 'All Levels',
          pricingType: 'Free',
          fees: '100% Free',
          duration: '12 weeks (Self-paced)',
          rating: 4.9,
          enrolledCount: '5,200,000+',
          badge: 'World Renowned',
          eligibility: 'Open to anyone with no prior programming experience required.',
          about: "Harvard University's flagship introduction to the intellectual enterprises of computer science and the art of programming.",
          youLearn: [
            'Algorithmic thinking and efficient problem solving',
            'Low-level concepts: C, memory management, pointers, and data structures',
            'High-level programming: Python, SQL, HTML/CSS, JavaScript, and Flask'
          ],
          officialUrl: 'https://cs50.harvard.edu/x/',
          chips: ['Harvard', '100% Free', 'Self-paced', 'Official Harvard Portal']
        },
        {
          courseId: 'course-nptel-data-structures',
          title: 'Programming, Data Structures and Algorithms Using Python',
          provider: 'NPTEL / IIT Madras',
          instructor: 'Prof. Madhavan Mukund',
          category: 'Programming',
          level: 'Undergraduate',
          pricingType: 'Free',
          fees: 'Free (₹1,000 optional exam fee for IIT Certificate)',
          duration: '8 weeks',
          rating: 4.8,
          enrolledCount: '125,000+',
          badge: 'Govt Certified',
          eligibility: 'College students and learners pursuing college degrees or technical entrance exams.',
          about: 'Official National Programme on Technology Enhanced Learning (NPTEL) certified course by IIT Madras faculty covering core data structure design.',
          youLearn: [
            'Computational complexity, big-O notation, asymptotic analysis',
            'Lists, stacks, queues, binary search trees, and heaps',
            'Sorting algorithms, graph representations, and dynamic programming'
          ],
          officialUrl: 'https://nptel.ac.in/courses/106106145',
          chips: ['NPTEL', 'IIT Madras', 'Government Certified', 'Academic Credits']
        },
        {
          courseId: 'course-google-data-analytics',
          title: 'Google Data Analytics Professional Certificate',
          provider: 'Google Career Certificates / Coursera',
          instructor: 'Google Certified Instructors',
          category: 'Data Science',
          level: 'Beginner',
          pricingType: 'Paid with Financial Aid',
          fees: 'Financial Aid Available (or ₹1,200/mo)',
          duration: '6 months (10 hrs/week)',
          rating: 4.8,
          enrolledCount: '2,100,000+',
          badge: 'Google Certified',
          eligibility: 'No prior experience or college degree required.',
          about: 'Hands-on curriculum engineered by Google data scientists preparing learners for in-demand junior data analyst positions.',
          youLearn: [
            'Data cleaning and spreadsheet calculations in Google Sheets & Excel',
            'Database querying with SQL in BigQuery',
            'Data visualization in Tableau and statistical programming with R'
          ],
          officialUrl: 'https://grow.google/certificates/data-analytics/',
          chips: ['Google', 'Professional Certificate', 'BigQuery', 'Tableau']
        },
        {
          courseId: 'course-khan-statistics',
          title: 'Statistics and Probability Mastery',
          provider: 'Khan Academy',
          instructor: 'Sal Khan',
          category: 'Mathematics',
          level: 'Foundational',
          pricingType: 'Free',
          fees: '100% Free Forever',
          duration: 'Self-paced',
          rating: 4.9,
          enrolledCount: '950,000+',
          badge: 'Nonprofit Free',
          eligibility: 'Open to all students building mathematics intuition.',
          about: 'Comprehensive, visual mastery of statistical theory essential for data analytics, machine learning, and AI model evaluation.',
          youLearn: [
            'Descriptive statistics, variance, standard deviation, and z-scores',
            'Probability distributions, binomial, and normal bell curves',
            'Hypothesis testing, confidence intervals, p-values, and linear regression'
          ],
          officialUrl: 'https://www.khanacademy.org/math/statistics-probability',
          chips: ['Khan Academy', 'Free Forever', 'Math Foundations']
        }
      ]);
      console.log('✔ Initialized courses collection');
    }

    // 6. Scholarships
    const scholarshipCount = await Scholarship.countDocuments();
    if (scholarshipCount === 0) {
      await Scholarship.create([
        {
          scholarshipId: 'nsp-post-matric',
          title: 'National Scholarship Portal (NSP) Post Matric Scholarship',
          provider: 'Ministry of Electronics & IT / Ministry of Minority Affairs',
          amount: '₹20,000–₹50,000 per year + Tuition waiver',
          targetLevel: 'Undergraduate / Postgraduate',
          category: 'Government',
          badge: 'Open For 2026-27',
          badgeType: 'default',
          deadline: new Date('2026-12-31'),
          daysRemaining: 36,
          eligibility: 'Enrolled in recognized undergraduate/postgraduate degree. Minimum 50% in previous qualifying exam with family income under ₹2.5 LPA.',
          documents: 'Aadhaar Card, Previous Marksheet, Income Certificate from competent authority, Bank Passbook, College Fee Receipt.',
          officialUrl: 'https://scholarships.gov.in/',
          chips: ['Government of India', 'Tuition Fee Waiver', 'NSP Verified']
        },
        {
          scholarshipId: 'aicte-pragati',
          title: 'AICTE Pragati Scholarship for Girl Students',
          provider: 'All India Council for Technical Education (AICTE)',
          amount: '₹50,000 per year for entire course duration',
          targetLevel: 'Female Technical Students (1st & 2nd Year)',
          category: 'Government',
          badge: 'Closes Soon',
          badgeType: 'warning',
          deadline: new Date('2026-12-15'),
          daysRemaining: 20,
          eligibility: 'Female students admitted to 1st year of technical degree/diploma in an AICTE approved institution. Family annual income less than ₹8 LPA.',
          documents: '10th & 12th Marksheet, AICTE College Allotment Letter, Annual Family Income Certificate, Bank Account in applicant name.',
          officialUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
          chips: ['AICTE', 'Women in STEM', '₹50,000/yr', 'Direct Benefit Transfer']
        },
        {
          scholarshipId: 'reliance-foundation-ug',
          title: 'Reliance Foundation Undergraduate Scholarship',
          provider: 'Reliance Foundation',
          amount: 'Up to ₹2,00,000 over course duration',
          targetLevel: '1st Year Full-time Undergraduate',
          category: 'Private Trust',
          badge: 'Merit-cum-Means',
          badgeType: 'default',
          deadline: new Date('2026-12-25'),
          daysRemaining: 30,
          eligibility: 'First year regular full-time undergraduate students from any stream with minimum 60% in Class 12. Household income below ₹15 LPA.',
          documents: 'Class 12 marksheet, household income proof, college admission proof, aptitude test score.',
          officialUrl: 'https://www.reliancefoundation.org/scholarships',
          chips: ['Reliance Foundation', 'Up to ₹2 Lakhs', 'Mentorship Included']
        },
        {
          scholarshipId: 'tata-trusts-education-grant',
          title: 'Tata Trusts Means & Merit Higher Education Grant',
          provider: 'Tata Trusts',
          amount: 'Full or Partial Tuition Support (up to ₹1,50,000)',
          targetLevel: 'Undergraduate & Professional Courses',
          category: 'Private Philanthropy',
          badge: 'High Support',
          badgeType: 'default',
          deadline: new Date('2027-01-10'),
          daysRemaining: 46,
          eligibility: 'Students pursuing engineering, medicine, sciences, and professional streams in recognized Indian universities with stellar academic records.',
          documents: 'Income tax returns/salary slips, university bonafide certificate, semester grade cards, fee structure document.',
          officialUrl: 'https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants',
          chips: ['Tata Trusts', 'Merit Based', 'Tuition Grant']
        }
      ]);
      console.log('✔ Initialized scholarships collection');
    }

    // 7. Internships
    const internshipCount = await Internship.countDocuments();
    if (internshipCount === 0) {
      await Internship.create([
        {
          internshipId: 'intern-aicte-digital-india',
          title: 'National Internship Portal - Digital India Internship',
          company: 'Ministry of Electronics & IT (MeitY) / NIC',
          sector: 'Government',
          workType: 'Hybrid',
          location: 'New Delhi / State Capital NIC Centers',
          stipend: '₹20,000 / month',
          duration: '3 months (Expandable to 6 months)',
          deadline: new Date('2026-12-20'),
          badge: 'Government of India',
          badgeType: 'default',
          eligibility: 'Indian students pursuing B.Tech/M.Tech/MCA/B.Sc. with minimum 60% cumulative aggregate.',
          roleOverview: 'Contribute to national public digital goods, e-governance platforms, Aadhaar/UPI ecosystem microservices, and cyber resilience systems.',
          requirements: 'Proficiency in Java, Python, REST APIs, database querying, and strong analytical reasoning.',
          officialUrl: 'https://internship.aicte-india.org/',
          chips: ['Government', 'MeitY', '₹20,000/mo', 'Official Govt Portal']
        },
        {
          internshipId: 'intern-flipkart-leap',
          title: 'Flipkart Leap Internship Program',
          company: 'Flipkart',
          sector: 'Private',
          workType: 'Remote',
          location: 'Bengaluru, Karnataka',
          stipend: '₹50,000 / month',
          duration: '3 months',
          deadline: new Date('2026-12-18'),
          badge: 'High Stipend + PPO',
          badgeType: 'high',
          eligibility: 'Pre-final and final year students in CS/IT/Data Science disciplines.',
          roleOverview: 'Collaborate with senior software and data engineers to build high-scale logistics tracking, checkout pipelines, and recommender systems.',
          requirements: 'Data Structures & Algorithms, Python/Java, SQL, problem-solving curiosity for high-volume transactions.',
          officialUrl: 'https://www.flipkartcareers.com/',
          chips: ['Flipkart', '₹50,000/mo', 'Remote/Hybrid', 'PPO Track']
        },
        {
          internshipId: 'intern-swiggy-product-design',
          title: 'Product Design & UX Internship',
          company: 'Swiggy',
          sector: 'Private',
          workType: 'On-site',
          location: 'Bengaluru, Karnataka',
          stipend: '₹40,000 / month',
          duration: '6 months',
          deadline: new Date('2026-12-25'),
          badge: 'Design Portfolio',
          badgeType: 'default',
          eligibility: 'Design, HCI, or multimedia undergraduate students with an active Figma portfolio.',
          roleOverview: 'Design consumer micro-interactions, refine instant delivery map tracking UI, and run moderated usability testing sessions.',
          requirements: 'Deep proficiency in Figma, design systems, wireframing, and empathy for consumer behaviors.',
          officialUrl: 'https://careers.swiggy.com/',
          chips: ['Swiggy', 'Bengaluru', '₹40,000/mo', 'Design Team']
        },
        {
          internshipId: 'intern-iit-madras-research',
          title: 'Computer Vision & Robotics Research Intern',
          company: 'IIT Madras Research Park',
          sector: 'Academic / Research',
          workType: 'On-site',
          location: 'Chennai, Tamil Nadu',
          stipend: '₹25,000 / month',
          duration: '2 months (Summer/Winter)',
          deadline: new Date('2027-01-05'),
          badge: 'Research Fellowship',
          badgeType: 'warning',
          eligibility: 'Engineering students in 2nd, 3rd, or 4th year with foundational machine learning coursework.',
          roleOverview: 'Collaborate with doctoral faculty on deep neural networks for autonomous agricultural drone imagery and drone obstacle avoidance.',
          requirements: 'Python, PyTorch, OpenCV, matrix calculus, clean git hygiene.',
          officialUrl: 'https://www.iitm.ac.in/',
          chips: ['IIT Madras', 'Research', '₹25,000/mo', 'Academic Fellowship']
        }
      ]);
      console.log('✔ Initialized internships collection');
    }

    // 8. Placements
    const placementCount = await Placement.countDocuments();
    if (placementCount === 0) {
      await Placement.create([
        {
          placementId: 'job-tcs-ninja-digital',
          title: 'Software Engineer (TCS National Qualifier Test)',
          company: 'Tata Consultancy Services (TCS)',
          sector: 'Private',
          location: 'Pan-India (Bengaluru, Hyderabad, Pune, Chennai)',
          salary: '₹4.5–9 LPA (Ninja / Digital / Prime Bands)',
          type: 'Full-Time Placement',
          badge: 'Fresher Friendly',
          openings: 500,
          deadline: new Date('2026-12-30'),
          eligibility: 'Graduating Batch 2025/2026 with 60% throughout 10th, 12th, and Degree without active backlogs.',
          roleOverview: 'Develop, test, and maintain enterprise software solutions across banking, healthcare, telecom, and cloud infrastructure.',
          requirements: 'Foundational aptitude, coding in C++/Java/Python, OOPs principles, SQL databases.',
          officialUrl: 'https://www.tcs.com/careers/india',
          chips: ['TCS', 'Pan-India', '₹4.5–9 LPA', 'National Drive']
        },
        {
          placementId: 'job-zoho-software-developer',
          title: 'Software Developer & ML Trainee',
          company: 'Zoho Corporation',
          sector: 'Private',
          location: 'Chennai / Tenkasi / Salem',
          salary: '₹7.5–12 LPA',
          type: 'Full-Time Placement',
          badge: 'Degree Independent',
          openings: 45,
          deadline: new Date('2027-01-15'),
          eligibility: 'Open to any degree or discipline; selection is strictly based on practical coding and problem-solving aptitude.',
          roleOverview: 'Design core web microservices, build real-time collaborative editors, and train applied NLP models for Zoho Office Suite.',
          requirements: 'Exceptional mastery of Data Structures, C/Java/Python programming, and algorithmic design.',
          officialUrl: 'https://www.zoho.com/careers/',
          chips: ['Zoho', '₹7.5–12 LPA', 'Product Engineering', 'No Resume Filter']
        },
        {
          placementId: 'job-infosys-specialist-programmer',
          title: 'Specialist Programmer & Systems Engineer',
          company: 'Infosys',
          sector: 'Private',
          location: 'Bengaluru / Pune / Hyderabad',
          salary: '₹6.5–11 LPA',
          type: 'Full-Time Placement',
          badge: 'High Coding Standard',
          openings: 120,
          deadline: new Date('2026-12-28'),
          eligibility: 'B.E/B.Tech/M.E/M.Tech in any engineering stream with strong coding skills.',
          roleOverview: 'Architect microservices, optimize cloud databases, and work on client-facing generative AI platforms.',
          requirements: 'Algorithmic problem solving (LeetCode medium/hard), REST APIs, Docker, and full-stack familiarity.',
          officialUrl: 'https://www.infosys.com/careers.html',
          chips: ['Infosys', '₹6.5–11 LPA', 'Specialist Programmer']
        }
      ]);
      console.log('✔ Initialized placements collection');
    }

    // 9. Aptitude Questions
    const questionCount = await AptitudeQuestion.countDocuments();
    if (questionCount === 0) {
      await AptitudeQuestion.create([
        {
          questionNumber: 1,
          category: 'Analytical',
          questionText: 'When tackling an unfamiliar system challenge, what is your instinctive approach?',
          difficulty: 'Medium',
          options: [
            { text: 'Analyze empirical data logs and isolate root-cause anomalies.', scoreWeight: { 'ai-ml-engineer': 3, 'data-analyst': 3 } },
            { text: 'Interview active users to comprehend the experiential frustration.', scoreWeight: { 'ux-designer': 3 } },
            { text: 'Audit network security architecture and access permissions.', scoreWeight: { 'cloud-devops-engineer': 3 } },
            { text: 'Evaluate the business cost, ROI, and delivery roadmap timeline.', scoreWeight: { 'data-analyst': 2 } }
          ]
        },
        {
          questionNumber: 2,
          category: 'Technical',
          questionText: 'Which environment or workflow brings out your peak focus?',
          difficulty: 'Medium',
          options: [
            { text: 'Writing Python scripts, training neural layers, and visualizing loss curves.', scoreWeight: { 'ai-ml-engineer': 3 } },
            { text: 'Crafting pixel-perfect prototypes in Figma with micro-interactions.', scoreWeight: { 'ux-designer': 3 } },
            { text: 'Automating multi-stage CI/CD pipelines with Docker and Kubernetes.', scoreWeight: { 'cloud-devops-engineer': 3 } },
            { text: 'Building SQL queries and reporting business conversion funnels.', scoreWeight: { 'data-analyst': 3 } }
          ]
        },
        {
          questionNumber: 3,
          category: 'Logical',
          questionText: 'If a critical service slows down under peak load, what do you check first?',
          difficulty: 'Hard',
          options: [
            { text: 'Database query execution plans and index fragmentation.', scoreWeight: { 'data-analyst': 2, 'ai-ml-engineer': 2 } },
            { text: 'Container CPU throttling, horizontal pod autoscalers, and ingress bandwidth.', scoreWeight: { 'cloud-devops-engineer': 3 } },
            { text: 'Model inference compute latency and GPU batch queuing.', scoreWeight: { 'ai-ml-engineer': 3 } },
            { text: 'User friction points and client-side page load spinners.', scoreWeight: { 'ux-designer': 2 } }
          ]
        },
        {
          questionNumber: 4,
          category: 'Decision Making',
          questionText: 'Which achievement gives you the greatest career satisfaction?',
          difficulty: 'Medium',
          options: [
            { text: 'Shipping a machine learning feature that automates repetitive workflows.', scoreWeight: { 'ai-ml-engineer': 3 } },
            { text: 'Creating an intuitive app flow that users praise for its beauty and simplicity.', scoreWeight: { 'ux-designer': 3 } },
            { text: 'Achieving 99.99% uptime with zero-downtime rolling deployments.', scoreWeight: { 'cloud-devops-engineer': 3 } },
            { text: 'Uncovering a hidden data correlation that boosts annual company revenue.', scoreWeight: { 'data-analyst': 3 } }
          ]
        },
        {
          questionNumber: 5,
          category: 'Creativity',
          questionText: 'How do you prefer to communicate your project results?',
          difficulty: 'Easy',
          options: [
            { text: 'Interactive charts, data dashboards, and statistical confidence intervals.', scoreWeight: { 'data-analyst': 3 } },
            { text: 'High-fidelity Figma walk-throughs and usability benchmark reports.', scoreWeight: { 'ux-designer': 3 } },
            { text: 'Technical whitepapers detailing model architecture and benchmark scores.', scoreWeight: { 'ai-ml-engineer': 3 } },
            { text: 'Live telemetry dashboards displaying uptime, latency, and node health.', scoreWeight: { 'cloud-devops-engineer': 3 } }
          ]
        }
      ]);
      console.log('✔ Initialized aptitude_questions collection');
    }

    // 10. Aptitude Results
    const resultCount = await AptitudeResult.countDocuments();
    if (resultCount === 0) {
      await AptitudeResult.create({
        user: studentUser._id,
        testId: 'career-fit-assessment',
        testName: '15-Minute Career Fit Assessment',
        score: 94,
        totalQuestions: 5,
        topMatches: [
          { careerId: 'ai-ml-engineer', careerTitle: 'AI/ML Engineer', matchPercent: 94, summary: 'Strong alignment with analytical thinking and algorithms.' },
          { careerId: 'data-analyst', careerTitle: 'Data Analyst', matchPercent: 88, summary: 'High affinity for SQL, statistical insights, and business metrics.' },
          { careerId: 'cloud-devops-engineer', careerTitle: 'Cloud & DevOps Engineer', matchPercent: 84, summary: 'Good foundation in systems architecture and automation.' }
        ]
      });
      console.log('✔ Initialized aptitude_results collection');
    }

    // 11. Notifications
    const notifCount = await Notification.countDocuments();
    if (notifCount === 0) {
      await Notification.create([
        {
          notificationId: 'notif-1',
          user: studentUser._id,
          title: 'AICTE Pragati Scholarship Closing Soon',
          subtitle: 'Closes in 20 days · ₹50,000/yr support for technical students',
          badge: 'Urgent',
          badgeType: 'warning',
          actionType: 'scholarship',
          targetId: 'aicte-pragati'
        },
        {
          notificationId: 'notif-2',
          user: studentUser._id,
          title: 'Digital India Internship Status: In Review',
          subtitle: 'Your application submitted to MeitY is currently under evaluation',
          badge: 'Application',
          badgeType: 'default',
          actionType: 'application',
          targetId: 'intern-aicte-digital-india'
        },
        {
          notificationId: 'notif-3',
          user: null, // global
          title: 'Recommended Course for Milestone 4',
          subtitle: 'Machine Learning Specialization by Andrew Ng (Stanford Online)',
          badge: 'Roadmap',
          badgeType: 'default',
          actionType: 'course',
          targetId: 'course-ml-specialization'
        }
      ]);
      console.log('✔ Initialized notifications collection');
    }

    // Complementary collections: Applications, Bookmarks, Reminders, Feedbacks
    const appCount = await Application.countDocuments();
    if (appCount === 0) {
      await Application.create([
        {
          applicationId: 'app_101',
          user: studentUser._id,
          targetId: 'intern-aicte-digital-india',
          targetTitle: 'Digital India Internship (MeitY)',
          category: 'internship',
          entityName: 'Ministry of Electronics & IT',
          status: 'In Review',
          notes: 'Application submitted with college NOC and semester marksheet.',
          officialPortalUrl: 'https://internship.aicte-india.org/'
        },
        {
          applicationId: 'app_102',
          user: studentUser._id,
          targetId: 'course-cs50-harvard',
          targetTitle: 'CS50x: Introduction to Computer Science',
          category: 'course',
          entityName: 'Harvard University',
          status: 'Accepted',
          notes: 'Enrolled in Week 3 (Algorithms) module.',
          officialPortalUrl: 'https://cs50.harvard.edu/x/'
        },
        {
          applicationId: 'app_103',
          user: studentUser._id,
          targetId: 'nsp-post-matric',
          targetTitle: 'NSP Post Matric Scholarship 2026',
          category: 'scholarship',
          entityName: 'National Scholarship Portal',
          status: 'Applied',
          notes: 'Application ID generated: NSP2026TN8921.',
          officialPortalUrl: 'https://scholarships.gov.in/'
        }
      ]);
      console.log('✔ Initialized applications collection');
    }

    const bookmarkCount = await Bookmark.countDocuments();
    if (bookmarkCount === 0) {
      await Bookmark.create([
        { user: studentUser._id, itemType: 'career', itemId: 'ai-ml-engineer', title: 'AI/ML Engineer' },
        { user: studentUser._id, itemType: 'course', itemId: 'course-ml-specialization', title: 'Machine Learning Specialization' },
        { user: studentUser._id, itemType: 'scholarship', itemId: 'nsp-post-matric', title: 'NSP Post Matric Scholarship' }
      ]);
      console.log('✔ Initialized bookmarks collection');
    }

    const reminderCount = await Reminder.countDocuments();
    if (reminderCount === 0) {
      await Reminder.create([
        {
          user: studentUser._id,
          title: 'Submit AICTE Pragati Documents',
          category: 'Scholarship',
          dueDate: new Date('2026-12-15'),
          notes: 'Collect updated college bonafide certificate before Friday.',
          completed: false
        },
        {
          user: studentUser._id,
          title: 'Flipkart Leap Coding Assessment Round',
          category: 'Internship',
          dueDate: new Date('2026-12-18'),
          notes: 'Review dynamic programming and graph algorithms.',
          completed: false
        }
      ]);
      console.log('✔ Initialized reminders collection');
    }

    const feedbackCount = await Feedback.countDocuments();
    if (feedbackCount === 0) {
      await Feedback.create({
        user: studentUser._id,
        userName: 'Student User',
        userEmail: 'student@email.com',
        rating: 5,
        category: 'App Experience',
        message: 'The roadmap tracking and verified official scholarship links are genuinely helpful. No fake ads!'
      });
      console.log('✔ Initialized feedbacks collection');
    }

    console.log('\x1b[32m✔ All 11 collections verified and seeded successfully in career_guidance_db!\x1b[0m');
  } catch (error) {
    console.error('\x1b[31m✖ Error during database seeding:\x1b[0m', error);
  }
};

export default seedDatabase;
