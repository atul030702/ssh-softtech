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
        title: 'AI & Autonomus Agents',
        description:
            'Explore artificial intelligence, autonomous agents, and how to orchestrate them.',
        icon: React.createElement(Brain, { size: 28 }),
        duration: '12 weeks',
        students: '1.1k+',
        image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-violet-500 to-purple-500',
    },
    {
        id: 'full-stack-web-development',
        title: 'Full Stack Web Development',
        description:
            'Master modern web development with React, Node.js, and database management.',
        icon: React.createElement(Code2, { size: 28 }),
        duration: '12 weeks',
        students: '2.5k+',
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'ui-ux-design-mastery',
        title: 'UI/UX Design Mastery',
        description:
            'Learn design thinking, prototyping, and creating beautiful user experiences.',
        icon: React.createElement(Palette, { size: 28 }),
        duration: '8 weeks',
        students: '1.8k+',
        image:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
        level: 'Beginner',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 'data-science-analytics',
        title: 'Data Science & Analytics',
        description:
            'Dive into data analysis, visualization, and machine learning fundamentals.',
        icon: React.createElement(Database, { size: 28 }),
        duration: '10 weeks',
        students: '1.2k+',
        image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-green-500 to-emerald-500',
    },
    {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        description:
            'Build native and cross-platform mobile apps for iOS and Android.',
        icon: React.createElement(Smartphone, { size: 28 }),
        duration: '10 weeks',
        students: '1.5k+',
        image:
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        color: 'from-orange-500 to-red-500',
    },
    {
        id: 'cloud-architecture',
        title: 'Cloud Architecture',
        description:
            'Master AWS, Azure, and cloud-native application development.',
        icon: React.createElement(Cloud, { size: 28 }),
        duration: '8 weeks',
        students: '980+',
        image:
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-indigo-500 to-blue-500',
    },
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
