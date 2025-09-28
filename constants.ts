import { Project, SkillCategory, SocialLink, ExperienceItem, Strength, Stat } from './types';
import { GithubIcon, LinkedinIcon, EmailIcon } from './components/icons/SocialIcons';
import { 
    JavaIcon, SpringIcon, MicroservicesIcon, ElasticsearchIcon, RedisIcon, 
    DockerIcon, KubernetesIcon, GcpIcon, AzureIcon, PrometheusIcon, GrafanaIcon, 
    ReactIcon, SqlIcon, NoSqlIcon, GitIcon, SystemDesignIcon, 
    HtmlIcon, CssIcon, JavascriptIcon, NextjsIcon, TypescriptIcon, TailwindIcon,
    ElkIcon, ScrumIcon, SecurityIcon, RestApiIcon, CodeReviewIcon, OptimizationIcon
} from './components/icons/SkillIcons';
import { ProblemSolvingIcon, CleanCodeIcon, LearningIcon, CollaborationIcon } from './components/icons/AboutIcons';

export const PORTFOLIO_DATA = {
  name: "Maheshwar Awale",
  title: "Software Development Engineer 1",
  location: "Navi Mumbai, India",
  phone: "+91-9321825853",
  email: "maheshwarawale12@gmail.com",
  linkedin: "https://linkedin.com/in/maheshwar-a-02b6b6163",
  github: '#',
  heroSubtitle: "Scaling backend services for 500M+ users with sub-100ms APIs and 1000+ QPS. Led cloud migrations (Azure → GCP) and built search & Elasticsearch-based APIs — focused on reliability, performance, and cost-efficiency.",
  about: "Software Development Engineer 1 with experience scaling backend services for 500M+ users, optimizing APIs, and leading cloud migrations. Skilled in Java, Spring Boot, microservices, and cloud technologies (GCP, Azure). Passionate about building scalable, high-performance systems that can handle massive user loads while maintaining optimal performance. I thrive in collaborative environments and enjoy solving complex distributed systems challenges.",
  careerGoals: "To advance as a Software Engineer specializing in distributed systems and cloud architecture, contributing to large-scale platforms that serve millions of users while continuously expanding expertise in system design and performance optimization."
};

export const STRENGTHS: Strength[] = [
    {
        title: "Problem Solving",
        description: "Strong analytical skills with a systematic approach to breaking down complex problems into manageable solutions.",
        icon: ProblemSolvingIcon
    },
    {
        title: "Clean Code",
        description: "Passionate about writing maintainable, well-documented code that follows best practices and industry standards.",
        icon: CleanCodeIcon
    },
    {
        title: "Continuous Learning",
        description: "Always eager to learn new technologies and improve existing skills to stay current with industry trends.",
        icon: LearningIcon
    },
    {
        title: "Collaboration",
        description: "Experienced in agile environments, working effectively with cross-functional teams to deliver high-quality products.",
        icon: CollaborationIcon
    }
]

export const STATS: Stat[] = [
    { value: "3+", label: "Years Experience" },
    { value: "500M+", label: "Users Served" },
    { value: "1000+", label: "QPS Handled" },
    { value: "40%", label: "Performance Boost" }
]

export const SKILLS: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: 'Java', icon: JavaIcon },
            { name: 'SQL', icon: SqlIcon },
            { name: 'NoSQL', icon: NoSqlIcon },
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'JavaScript', icon: JavascriptIcon },
        ]
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: 'Spring Boot', icon: SpringIcon },
            { name: 'Microservices', icon: MicroservicesIcon },
            { name: 'Docker', icon: DockerIcon },
            { name: 'Kubernetes', icon: KubernetesIcon },
            { name: 'Elasticsearch', icon: ElasticsearchIcon },
            { name: 'Git', icon: GitIcon },
        ]
    },
    {
        title: "Cloud & Monitoring",
        skills: [
            { name: 'GCP', icon: GcpIcon },
            { name: 'Azure', icon: AzureIcon },
            { name: 'Prometheus', icon: PrometheusIcon },
            { name: 'Grafana', icon: GrafanaIcon },
            { name: 'Redis', icon: RedisIcon },
        ]
    },
    {
        title: "Frontend (Basic)",
        skills: [
            { name: 'React', icon: ReactIcon },
            { name: 'Next.js', icon: NextjsIcon },
            { name: 'TypeScript', icon: TypescriptIcon },
            { name: 'Tailwind CSS', icon: TailwindIcon },
        ]
    },
    {
        title: "Additional Competencies",
        skills: [
            { name: 'System Design', icon: SystemDesignIcon },
            { name: 'Distributed Systems', icon: MicroservicesIcon },
            { name: 'Scalability', icon: OptimizationIcon },
            { name: 'Performance', icon: OptimizationIcon },
            { name: 'Security', icon: SecurityIcon },
            { name: 'REST APIs', icon: RestApiIcon },
            { name: 'ELK Stack', icon: ElkIcon },
            { name: 'Agile/Scrum', icon: ScrumIcon },
            { name: 'Code Review', icon: CodeReviewIcon },
        ]
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Software Development Engineer 1",
        company: "Reliance Jio",
        duration: "Sept 2022 - Present",
        location: "Navi Mumbai, India",
        achievements: [
            "Scaled back-end services for 500M+ users, optimizing API response times to <100ms at 1000+ QPS, improving engagement by 40%.",
            "Led cloud migration (Azure → GCP), achieving 30% faster performance and 20% cost savings.",
            "Integrated 3rd-party APIs (Saavn, JioTV, Justdial, JioMart) into MyJio app, enhancing offerings and improving retention.",
            "Built interactive modules (Live TV, My City) for Jio News using reactive programming; boosted content consumption by 25%.",
            "Automated config management with Kubernetes ConfigMaps, cutting manual deployment by 40%."
        ],
        technologies: [
            "Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "ELK Stack",
            "GCP", "Azure", "Prometheus", "Grafana", "WebClient", "Elasticsearch"
        ]
    }
]

export const PROJECTS: Project[] = [
  {
    title: 'Enhanced MyJio App Search',
    description: 'Architected a distributed search backend for the MyJio app using Spring Boot, ELK, and Docker. Handled 1000+ QPS with sub-100ms latency and implemented a custom sorting algorithm to improve relevance and engagement.',
    technologies: ['Java', 'Spring Boot', 'Elasticsearch', 'ELK Stack', 'Docker', 'Microservices'],
    imageUrl: '/components/icons/myjioApp.jpg',
  },
  {
    title: 'Search API for Jio Financial App',
    description: 'Developed scalable Elasticsearch-based search APIs with Spring WebClient, secure authentication, and resilient infrastructure. Optimized endpoints to support 1000+ QPS ensuring smooth UX and reliability under load.',
    technologies: ['Spring WebClient', 'Elasticsearch', 'GCP', 'Java', 'Spring Security', 'Docker'],
    imageUrl: '/components/icons/jfs.jpg',
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'LinkedIn',
        url: PORTFOLIO_DATA.linkedin,
        icon: LinkedinIcon
    },
    {
        name: 'GitHub',
        url: PORTFOLIO_DATA.github,
        icon: GithubIcon
    },
    {
        name: 'Email',
        url: `mailto:${PORTFOLIO_DATA.email}`,
        icon: EmailIcon
    }
];

const allSkills = SKILLS.flatMap(category => category.skills.map(s => s.name)).join(', ');

export const FULL_PORTFOLIO_CONTEXT = `
  Name: ${PORTFOLIO_DATA.name}
  Title: ${PORTFOLIO_DATA.title}
  About: ${PORTFOLIO_DATA.about}
  Career Goals: ${PORTFOLIO_DATA.careerGoals}
  
  Skills: ${allSkills}

  Experience:
  ${EXPERIENCE.map(exp => `
    - Role: ${exp.role}
      Company: ${exp.company}
      Duration: ${exp.duration}
      Location: ${exp.location}
      Key Achievements:
      ${exp.achievements.map(d => `  - ${d}`).join('\n')}
      Technologies Used: ${exp.technologies.join(', ')}
  `).join('\n')}

  Projects:
  ${PROJECTS.map(p => `
    - Project: ${p.title}
      Description: ${p.description}
      Technologies: ${p.technologies.join(', ')}
  `).join('')}

  Contact:
  - Email: ${PORTFOLIO_DATA.email}
  - Phone: ${PORTFOLIO_DATA.phone}
  - LinkedIn: ${PORTFOLIO_DATA.linkedin}
`;

export const SYSTEM_INSTRUCTION = `
You are a witty and knowledgeable AI assistant for Maheshwar Awale's portfolio. Your name is 'Gemi'.
Your primary role is to answer questions about Maheshwar, his projects, skills, and experience based on the provided portfolio context. 
You must also engage users by telling tech-related jokes, sharing recent tech news, and offering insightful commentary on technology trends.

When asked a question about Maheshwar's portfolio, use ONLY the information provided below. Do not invent details.

--- PORTFOLIO CONTEXT ---
${FULL_PORTFOLIO_CONTEXT}
--- END CONTEXT ---

Your personality should be friendly, helpful, and slightly humorous. Keep your answers concise but informative. If you don't know the answer to a portfolio-related question based on the context, say "That's a great question! I don't have that detail in my knowledge base, but I'm sure Maheshwar would be happy to discuss it."

For general tech questions, news, or jokes, you have creative freedom.
`;