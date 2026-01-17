import React from "react";
import {
    Code2,
    Palette,
    Database,
    Smartphone,
    Cloud,
    Brain,
} from 'lucide-react';

export const courses = [
    {
        id: 'ai-machine-learning',
        title: 'AI & Autonomus Systems',
        description: 'Develop intelligent systems using machine learning and AI concepts.',
        icon: React.createElement(Brain, { size: 28 }),
        duration: '20 Hours',
        students: '1.1k+',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-violet-500 to-purple-500',
        keyTopics: [
            'Machine learning fundamentals',
            'Feature engineering',
            'Intro to NLP & computer vision',
            'Generative AI basics',
            'Model deployment overview'
        ],
        project: 'AI-powered solution'
    },
    {
        id: 'full-stack-web-development',
        title: 'Full Stack Web Development',
        description: 'End-to-end web application development using modern frontend, backend, and deployment practices.',
        icon: React.createElement(Code2, { size: 28 }),
        duration: '20 Hours',
        students: '2.5k+',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        color: 'from-blue-500 to-cyan-500',
        keyTopics: [
            'HTML, CSS, JavaScript (ES6+)',
            'React & modern UI architecture',
            'Node.js, REST APIs & authentication',
            'Database design (PostgreSQL / MongoDB)',
            'Git & deployment basics'
        ],
        project: 'Full-stack business web application'
    },
    {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Build scalable cross-platform mobile applications integrated with backend services.',
        icon: React.createElement(Smartphone, { size: 28 }),
        duration: '20 Hours',
        students: '1.5k+',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        color: 'from-orange-500 to-red-500',
        keyTopics: [
            'Flutter or React Native',
            'State management & UI components',
            'API integration & authentication',
            'Push notifications',
            'App deployment overview'
        ],
        project: 'End-to-end mobile application'
    },
    {
        id: 'data-science-analytics',
        title: 'Data Science & Analytics',
        description: 'Analyze data and generate business insights using modern analytics tools.',
        icon: React.createElement(Database, { size: 28 }),
        duration: '20 Hours',
        students: '1.2k+',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-green-500 to-emerald-500',
        keyTopics: [
            'Python for data analysis',
            'EDA & visualization',
            'Statistics fundamentals',
            'SQL for analytics',
            'Dashboarding concepts'
        ],
        project: 'Business analytics case study'
    },
    {
        id: 'data-engineering',
        title: 'Data Engineering',
        description: 'Design and implement scalable data pipelines.',
        icon: React.createElement(Cloud, { size: 28 }),
        duration: '20 Hours',
        students: '980+',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-indigo-500 to-blue-500',
        keyTopics: [
            'Python & SQL',
            'ETL/ELT pipelines',
            'Data modeling',
            'Intro to Spark',
            'Cloud data concepts'
        ],
        project: 'Data pipeline implementation'
    },
    {
        id: 'ui-ux-design-mastery',
        title: 'UI/UX Design Mastery',
        description: 'Create intuitive and user-centric digital designs.',
        icon: React.createElement(Palette, { size: 28 }),
        duration: '15 Hours',
        students: '1.8k+',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
        level: 'Beginner',
        color: 'from-purple-500 to-pink-500',
        keyTopics: [
            'UI/UX fundamentals',
            'User research & wireframing',
            'Figma tools',
            'Responsive design',
            'Design handoff'
        ],
        project: 'Complete UI/UX case study'
    }
];

export const schedule = {
    time: "Sat/Sun 8:00 PM IST",
    platform: "Google Meet",
    duration: "Live Interactive Sessions"
};

export const syllabus = [
    {
        week: "Week 1-2",
        title: "Foundation & Setup",
        topics: ["Environment Setup", "Core Concepts", "Best Practices", "First Project"]
    },
    {
        week: "Week 3-5",
        title: "Deep Dive & Implementation",
        topics: ["Advanced Patterns", "State Management", "API Integration", "Real-world Scenarios"]
    },
    {
        week: "Week 6-8",
        title: "Advanced Concepts",
        topics: ["Performance Optimization", "Security", "Testing", "Deployment Pipelines"]
    },
    {
        week: "Week 9+",
        title: "Capstone Project",
        topics: ["Project Planning", "Development Phase", "Code Review", "Final Presentation"]
    }
];

export const prerequisites = [
    "A working laptop/PC (Windows, Mac, or Linux)",
    "Stable internet connection",
    "Basic logical thinking",
    "No prior coding experience required (for beginner courses)",
    "Commitment (6-8 hours/week)"
];
