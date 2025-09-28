export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    location: string;
    achievements: string[];
    technologies: string[];
}

export interface Strength {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface Stat {
    value: string;
    label: string;
}

export enum ChatRole {
    USER = 'user',
    MODEL = 'model',
}

export interface ChatMessage {
    role: ChatRole;
    content: string;
}