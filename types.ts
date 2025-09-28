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

export type Theme =
  | 'light' | 'dark' | 'system'
  // Jio
  | 'myjio' | 'jiofinance' | 'jiosaavn' | 'jiohotstar'
  // Meta
  | 'facebook' | 'instagram' | 'whatsapp' | 'messenger'
  // Google
  | 'google' | 'gmail' | 'googledrive' | 'googledocs' | 'googlesheets' | 'googleslides' | 'youtube'
  // Other Tech
  | 'amazon' | 'primevideo' | 'aws'
  // Banking
  | 'icicibank' | 'hdfcbank'
  // Fintech
  | 'groww' | 'zerodhakite' | 'upstox'
  // AI
  | 'geminiai' | 'openai'
  // Dev Palettes
  | 'solarizeddark' | 'nord' | 'dracula'
  // Creative
  | 'neonai' | 'synthwaveai';

export interface ThemeOption {
  name: Theme;
  label: string;
}

export interface ThemeCategory {
  name: string;
  themes: ThemeOption[];
}

export const THEME_CATEGORIES: ThemeCategory[] = [
    {
        name: "Default",
        themes: [
            { name: 'light', label: 'Light' },
            { name: 'dark', label: 'Dark' },
            { name: 'system', label: 'System' },
        ],
    },
    {
        name: "Jio Ecosystem",
        themes: [
            { name: 'myjio', label: 'MyJio' },
            { name: 'jiofinance', label: 'JioFinance' },
            { name: 'jiosaavn', label: 'JioSaavn' },
            { name: 'jiohotstar', label: 'Hotstar' },
        ],
    },
    {
        name: "Meta Ecosystem",
        themes: [
            { name: 'facebook', label: 'Facebook' },
            { name: 'instagram', label: 'Instagram' },
            { name: 'whatsapp', label: 'WhatsApp' },
            { name: 'messenger', label: 'Messenger' },
        ],
    },
    {
        name: "Google Ecosystem",
        themes: [
            { name: 'google', label: 'Google' },
            { name: 'gmail', label: 'Gmail' },
            { name: 'googledrive', label: 'Google Drive' },
            { name: 'googledocs', label: 'Google Docs' },
            { name: 'googlesheets', label: 'Google Sheets' },
            { name: 'googleslides', label: 'Google Slides' },
            { name: 'youtube', label: 'YouTube' },
        ],
    },
    {
        name: "Other Tech",
        themes: [
            { name: 'amazon', label: 'Amazon' },
            { name: 'primevideo', label: 'Prime Video' },
            { name: 'aws', label: 'AWS' },
        ],
    },
    {
        name: "Banking & FinTech",
        themes: [
            { name: 'icicibank', label: 'ICICI Bank' },
            { name: 'hdfcbank', label: 'HDFC Bank' },
            { name: 'groww', label: 'Groww' },
            { name: 'zerodhakite', label: 'Zerodha Kite' },
            { name: 'upstox', label: 'Upstox' },
        ],
    },
    {
        name: "AI & Dev Palettes",
        themes: [
            { name: 'geminiai', label: 'Gemini AI' },
            { name: 'openai', label: 'OpenAI' },
            { name: 'solarizeddark', label: 'Solarized Dark' },
            { name: 'nord', label: 'Nord' },
            { name: 'dracula', label: 'Dracula' },
        ],
    },
    {
        name: "Futuristic & Creative",
        themes: [
            { name: 'neonai', label: 'Neon AI' },
            { name: 'synthwaveai', label: 'SynthWave AI' },
        ],
    }
];