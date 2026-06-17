import { Project, Certification, Skill, Achievement, TimelineItem } from './types';

export const PERSONAL_DETAILS = {
  name: "Anirudh Kuppili",
  fullName: "Anirudh Kuppili",
  role: "B.Tech Computer Science Engineering Student",
  location: "Visakhapatnam, Andhra Pradesh, India",
  cgpa: "8.50",
  email: "kuppilianirudh@gmail.com",
  phone: "8523856898",
  github: "https://github.com/kuppilianirudh-coder",
  codechef: "https://www.codechef.com/users/anirudh_4_2",
  taglines: [
    "B.Tech CSE Student",
    "Aspiring Software Developer",
    "AI Enthusiast",
    "Full Stack Developer",
    "Problem Solver"
  ],
  bio: "I am a passionate Computer Science Engineering student with a strong interest in Software Development, Artificial Intelligence, Full Stack Development, Databases, and Problem Solving. I enjoy building real-world projects, exploring modern technologies, and continuously improving my technical skills through certifications, internships, hackathons, and hands-on project development. My goal is to become a highly skilled Software Engineer capable of building impactful products that solve real-world problems."
};

export const PROJECTS: Project[] = [
  {
    id: "quickchargev",
    name: "QuickChargeV",
    tagline: "AI-Powered EV Charging Assistant",
    description: "An intelligent EV charging platform designed to help electric vehicle users find nearby charging stations, calculate routes, and predict real-time availability using machine learning recommendations.",
    overview: "QuickChargeV is an intelligent EV charging platform designed to help electric vehicle users find the best charging stations quickly and efficiently. The platform reduces range anxiety through AI-driven charging recommendations based on location, distance, availability, and user preferences.",
    problem: "Electric vehicle users often struggle to locate nearby charging stations, verify real-time slots availability, and identify the most suitable charging tier during active travel. This creates significant range anxiety, wastes time, and leads to sub-optimal charging experiences.",
    challenges: [
      "Integrating high-fidelity canvas location services with Google Maps API and handling asynchronous geo-coordinate buffers.",
      "Designing responsive recommendation logic that balances distances, peak occupancy hours, and user budget profiles.",
      "Managing live updates in Firebase to ensure slots status corresponds to real-world charger occupancy state.",
      "Structuring a glassmorphic dashboard in mobile resolutions while maintaining excellent speed ratings."
    ],
    features: [
      "Smart EV charging station auto-discovery",
      "AI-powered charging suggestions and recommendations",
      "Location-aware instant station search mechanics",
      "Real-time charger availability and connector type tracking",
      "Route-aware proactive charging recommendations and notifications",
      "Recruiter-ready responsive user interface",
      "Substantial reduction in range anxiety",
      "Scalable cloud architecture using Firebase modules"
    ],
    technologies: ["Flutter", "Firebase", "Python", "Google Maps API", "AI/ML Model"],
    impact: "Significantly improves EV overall charging accessibility, helps drivers reduce queue delays by up to 35%, and enhances the user's trust and overall experience in sustainable EV operations.",
    lessons: "Acquired critical engineering skills in blending deep neural network predictions with real-world location intelligence APIs. Understood the value of responsive offline caches is crucial for on-road automotive assistants.",
    highlights: [
      "Built during a highly competitive Hackathon",
      "Combines AI/ML recommendation clusters with geographic APIs",
      "Demonstrates high-level engineering and problem-solving"
    ],
    githubUrl: "https://github.com/kuppilianirudh-coder/quickchargev",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    category: "Featured"
  },
  {
    id: "placement-mgmt",
    name: "Placement Management System",
    tagline: "Simplified College Recruitment Platform",
    description: "A comprehensive digital portal designed to streamline campus placements. Enables placement officers, students, and recruiters to interact, coordinate schedules, auto-verify clean CGPAs, and download analytics.",
    overview: "A sophisticated campus-recruitment coordinator system designed to modernize placement workflows. It eliminates physical file overheads, hosts verified resume databases, and drives auto-selection filters based on company eligibility requirements.",
    problem: "Traditional physical file tracking of student credits, manual verification of CGPA standards, and communication latencies during active recruitment schedules often bottleneck placement cells.",
    challenges: [
      "Formulating reliable table relationships in SQL to maintain immutable student records.",
      "Building a batch-resume validation microservice for automated eligibility compliance."
    ],
    features: [
      "Unified student academic & certification dossier profile builder",
      "Instant recruiting company requirement verification logic",
      "Interactive analytics scoreboard for success rates",
      "Automated automated invitations and notifications scheduler"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    impact: "Reduces processing times in recruitment drives from weeks to minutes, offering robust transparency to student applicants and placements teams alike.",
    lessons: "Mastered building highly query-optimized SQL database systems and robust RESTful security validation processes.",
    highlights: [
      "End-to-end full stack application development",
      "Solves a real administrative operational bottleneck"
    ],
    githubUrl: "https://github.com/kuppilianirudh-coder/placement-management",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Academic"
  },
  {
    id: "crm-lead",
    name: "CRM Lead Management System",
    tagline: "Dynamic Business Sales Accelerator",
    description: "An elegant, interactive customer relations tracker. Focuses on lead score algorithms, interactive kanban sales pipelines, real-time activity histories, and analytics reporting logs.",
    overview: "A secure, enterprise-grade CRM console designed for small businesses and startups. Enables lead capturing, auto-calculates visual sales pipeline values, and supports deep status audits with modern filtering UI.",
    problem: "Failing to promptly convert customer inquiries into sales channels due to chaotic communication histories and inadequate lead prioritization matrices.",
    challenges: [
      "Creating modular state controls for the drag-drop Kanban board components.",
      "Implementing database audit trails to trace historical updates of commercial leads."
    ],
    features: [
      "Fluid Kanban Board drag-and-drop workflow status card boards",
      "Predictive client conversion value indicators",
      "Instant email integration hooks for rapid customer contact follow-ups"
    ],
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    impact: "Allows high accuracy lead scoring and increases conversion velocity by 25% by preventing communication gaps.",
    lessons: "Strengthened core understanding of non-relational database schemas, state state orchestration, and styling customized interactive user boards.",
    highlights: [
      "Enterprise workflow design focus",
      "Highly responsive data search features"
    ],
    githubUrl: "https://github.com/kuppilianirudh-coder/crm-lead-tracker",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    category: "AI & Web"
  },
  {
    id: "ai-study",
    name: "AI Study Assistant",
    tagline: "Intelligent personalized tutor & note organizer",
    description: "Powered by modern neural integrations to help college peers organize code assignments, summarize notes, formulate cheat sheets, and solve competitive coding algorithms.",
    overview: "An AI-powered academic learning companion that allows students to transform long, dense reading files into clear bullet summaries, interactive practice questions, and code solutions.",
    problem: "Volume fatigue during exam preparation and difficulty compiling complex programming assignments into readable structural notes.",
    challenges: [
      "Developing API endpoints capable of running prompts while mitigating key exposures.",
      "Maintaining responsive text streaming to create fluid dialogue sequences."
    ],
    features: [
      "Instant code debugging engine with step-by-step guidance",
      "Dynamic mock test quiz generator covering multiple engineering headers",
      "Organized sidebar notebooks with standard markdown parsing highlights"
    ],
    technologies: ["React.js", "TypeScript", "Google GenAI SDK", "Tailwind CSS", "Express.js"],
    impact: "Democratizes qualitative tech guidance for students, helping them save preparation hours and master key concepts faster.",
    lessons: "Deepened competency in prompt engineering, prompt parameters, and front-end markdown rendering components.",
    highlights: [
      "Generative AI integration showcasing",
      "Combines study productivity with developer tools"
    ],
    githubUrl: "https://github.com/kuppilianirudh-coder/ai-study-assistant",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    category: "AI & Web"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-ai",
    name: "Introduction to AI",
    organization: "Google",
    issueDate: "May 28, 2026",
    image: "/src/assets/images/google_ai_cert_1781679716371.jpg",
    logo: "/src/assets/images/google_p_logo_1781679787422.jpg",
    verificationBadge: true,
    skillsLearned: ["Generative AI Models", "Large Language Concepts", "Ethical AI Design Principles", "Prompt Mechanics"],
    verificationUrl: "https://coursera.org/verify/LC9AOM5S5LIV",
    credentialId: "LC9AOM5S5LIV"
  },
  {
    id: "cert-dbms",
    name: "Database Management System Part - 1",
    organization: "Infosys Springboard",
    issueDate: "January 6, 2026",
    image: "/src/assets/images/infosys_db_cert_1781679732463.jpg",
    logo: "/src/assets/images/infosys_p_logo_1781679804975.jpg",
    verificationBadge: true,
    skillsLearned: ["Relational Database Schemas", "Normalized Forms (1NF, 2NF, 3NF)", "Advanced SQL Querying", "Index Strategies"],
    verificationUrl: "https://verify.onwingspan.com"
  },
  {
    id: "cert-deloitte",
    name: "Data Analytics Job Simulation",
    organization: "Deloitte (via Forage)",
    issueDate: "April 26, 2026",
    image: "/src/assets/images/deloitte_data_cert_1781679748045.jpg",
    logo: "/src/assets/images/deloitte_p_logo_1781679821835.jpg",
    verificationBadge: true,
    skillsLearned: ["Data Quality Wrangling", "Dashboard Telemetry Mockup", "Insights Presentation", "Business Metrics Evaluation"],
    verificationUrl: "https://www.theforage.com/verify/2bBiokogY2eZXEHac",
    credentialId: "2bBiokogY2eZXEHac / 69e451ddec0da8fc9b25a710"
  },
  {
    id: "cert-ibm",
    name: "SQL and Relational Databases 101",
    organization: "IBM Skills Network",
    issueDate: "June 7, 2026",
    image: "/src/assets/images/ibm_sql_cert_1781679762850.jpg",
    logo: "/src/assets/images/ibm_p_logo_1781679838184.jpg",
    verificationBadge: true,
    skillsLearned: ["Relational Database Engine theory", "SQL DDL statements", "SQL DML triggers and joins", "Schema creation templates"],
    verificationUrl: "https://courses.cognitiveclass.ai/certificates/aed24ba453bf4efd996fbfb72a4a7642",
    credentialId: "aed24ba453bf4efd996fbfb72a4a7642"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 90, icon: "React" },
  { name: "HTML5 & CSS3", category: "Frontend", level: 92, icon: "Html" },
  { name: "JavaScript", category: "Frontend", level: 88, icon: "Js" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: "Tailwind" },

  // Backend
  { name: "Node.js", category: "Backend", level: 83, icon: "Node" },
  { name: "Express.js", category: "Backend", level: 85, icon: "Express" },

  // Database
  { name: "MySQL", category: "Database", level: 88, icon: "Mysql" },
  { name: "MongoDB", category: "Database", level: 80, icon: "Mongodb" },
  { name: "SQL", category: "Database", level: 90, icon: "Sql" },

  // Programming
  { name: "Python", category: "Programming", level: 87, icon: "Python" },
  { name: "C Programming", category: "Programming", level: 85, icon: "C" },
  { name: "TypeScript", category: "Programming", level: 80, icon: "TypeScript" },

  // Tools
  { name: "Git", category: "Tools", level: 88, icon: "Git" },
  { name: "GitHub", category: "Tools", level: 92, icon: "Github" },
  { name: "VS Code", category: "Tools", level: 95, icon: "VsCode" },
  { name: "Postman", category: "Tools", level: 84, icon: "Postman" },

  // AI Tools
  { name: "ChatGPT", category: "AI Tools", level: 95, icon: "Ai" },
  { name: "Google AI Studio", category: "AI Tools", level: 90, icon: "Ai" },
  { name: "GitHub Copilot", category: "AI Tools", level: 92, icon: "Ai" }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "viit-btech",
    year: "2023 - Present",
    title: "Bachelor of Technology",
    subtitle: "Computer Science Engineering",
    location: "Vignan's Institute of Information Technology, Visakhapatnam",
    badge: "Undergraduate Study",
    points: [
      "Maintaining a stellar Cumulative Grade Point Average (CGPA) of 8.50/10.",
      "Dedicated exploration in core subjects: Data Structures & Algorithms, Database Management, and Object Oriented Paradigms.",
      "Engaged in technical hackathons, coding workshops, and software innovation project setups."
    ]
  },
  {
    id: "viit-prev",
    year: "2023",
    title: "Core Foundation Journey",
    subtitle: "Problem Solving & System Logic Architectures",
    location: "Visakhapatnam, Andhra Pradesh",
    badge: "Higher Secondary & Foundation",
    points: [
      "Mastered basics of C, database syntax logic, and mathematical analytics.",
      "Secured eligibility for computing sciences through engineering exams with rigorous preparation."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-hack",
    title: "Hackathon Active Contributor",
    subtitle: "Built & Pitching QuickChargeV App",
    description: "Successfully co-created and deployed an AI-driven EV routing assistant in a time-capped 36-hour hackathon environment, resolving complex real-time geospatial availability hurdles.",
    category: "Hackathons",
    date: "2026"
  },
  {
    id: "ach-ai",
    title: "AI Specialist Credentials",
    subtitle: "Approved by Google & Coursera Teams",
    description: "Validated competencies in foundational artificial intelligence configurations, large model prompts, and deep-learning pipeline ethics.",
    category: "Certifications",
    date: "2026"
  },
  {
    id: "ach-data",
    title: "Enterprise Data Analytics Simulation",
    subtitle: "Deloitte Skill Academy Accomplishment",
    description: "Designed multi-layer analytics dashboards mimicking commercial environments. Addressed data preparation, quality review loops, and client presentation simulations.",
    category: "Job Simulations",
    date: "2026"
  },
  {
    id: "ach-db",
    title: "DBMS Master Accolades",
    subtitle: "Infosys & IBM Professional Endorsements",
    description: "Acquired double endorsements in relational structures, normalized databases, complex SQL sub-joins, indexing, and transactional integrity constraints.",
    category: "Certifications",
    date: "2025"
  }
];
