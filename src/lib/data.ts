// In your project, save this as: lib/data.ts
import { Project, Testimonial, Service, TechData } from './types';

// --- Project Data ---
export const projectsData: Project[] = [
    { 
        id: 1, 
        title: 'BoardSuite Management System', 
        subtitle: 'AI-Enhanced Property Management', 
        category: 'Full Stack', 
        images: ['https://placehold.co/600x400/1e293b/ffffff?text=Dashboard', 'https://placehold.co/600x400/334155/ffffff?text=Billing', 'https://placehold.co/600x400/475569/ffffff?text=Reports'], 
        description: 'A comprehensive, AI-powered system for managing boarding house operations, including tenant records, automated billing with late fees, and AI-summarized financial reports.',
        tech: ['Next.js', 'React', 'TypeScript', 'MySQL', 'Gemini AI', 'jsPDF']
    },
    { 
        id: 2, 
        title: 'Corporate Landing Page', 
        subtitle: 'Modern & Responsive Website', 
        category: 'Web', 
        images: ['https://placehold.co/600x400/7c3aed/ffffff?text=Homepage', 'https://placehold.co/600x400/9d5bff/ffffff?text=Services'], 
        description: 'A responsive and SEO-friendly landing page developed with Next.js and Tailwind CSS to boost a company\'s online presence and capture leads.',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
    },
    { 
        id: 3, 
        title: 'TaskFlow Mobile App', 
        subtitle: 'A Cross-Platform Productivity Tool', 
        category: 'Mobile', 
        images: ['https://placehold.co/600x400/166534/ffffff?text=Task+List', 'https://placehold.co/600x400/15803d/ffffff?text=Add+Task'], 
        description: 'A mobile app built with React Native for iOS and Android, designed to help users organize daily tasks with an intuitive interface and reminders.',
        tech: ['React Native', 'Firebase', 'JavaScript']
    },
];

// --- Tech Stacks Data ---
export const technologies: TechData = {
    'Frontend': ['ReactJS', 'NextJS', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Django', 'Laravel', 'PHP', 'Python', 'Node.js']
};
export const tools: TechData = {
    'Development': ['VS Code', 'Laragon', 'XAMPP', 'MySQL Server', 'Git', 'GitHub'],
    'Productivity & Design': ['MS Office', 'Photoshop', 'Canva', 'Figma'],
    'Video Editing': ['Capcut', 'Vita', 'Filmora']
};

// --- Services Data ---
export const servicesList: Service[] = [
    { title: 'Full Stack Development', desc: 'End-to-end web application development, from database to UI.', iconName: 'code' },
    { title: 'Computer Troubleshooting', desc: 'PC diagnostics, reformatting, and OS installation.', iconName: 'server' },
    { title: 'Creative Services', desc: 'Professional video editing and graphic design for digital content.', iconName: 'palette' },
    { title: 'Academic & MS Office Needs', desc: 'Assistance with technical documentation, research papers, and office tasks.', iconName: 'pen' },
];

// --- Testimonials Data ---
export const testimonialsData: Testimonial[] = [
    { name: 'Jane Doe', title: 'CEO, Tech Solutions', image: 'https://placehold.co/100x100/eab308/422006?text=JD', testimonial: 'An incredibly talented developer who delivered results beyond our expectations. The project was on time and on budget.' },
    { name: 'John Smith', title: 'Project Manager, Creative Minds', image: 'https://placehold.co/100x100/3b82f6/ffffff?text=JS', testimonial: 'Working with them was a pleasure. Their technical skills and professional attitude made the whole process seamless.' },
    { name: 'Emily White', title: 'Startup Founder', image: 'https://placehold.co/100x100/ec4899/ffffff?text=EW', testimonial: 'Their ability to translate complex requirements into a functional and beautiful application is truly impressive. Highly recommended!' },
];
