export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  challenges: string[];
  features: string[];
  technologies: string[];
  impact: string;
  lessons: string;
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  category: 'Featured' | 'Academic' | 'AI & Web';
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  image: string;
  logo: string;
  verificationBadge: boolean;
  skillsLearned: string[];
  verificationUrl?: string;
  credentialId?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools' | 'AI Tools';
  level: number; // Percentage, e.g. 85 for 8.5/10 skill
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  date: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  badge: string;
  points: string[];
}
