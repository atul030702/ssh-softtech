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
    {
        title: 'AI & Machine Learning',
        description:
            'Explore artificial intelligence, deep learning, and neural networks.',
        icon: React.createElement(Brain, { size: 28 }),
        duration: '14 weeks',
        students: '1.1k+',
        image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
        level: 'Advanced',
        color: 'from-violet-500 to-purple-500',
    },
];
