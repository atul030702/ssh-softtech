"use client";

import { motion } from 'motion/react';
import {
    Clock,
    Users,
} from 'lucide-react';

import { courses, containerVariants, itemVariants } from './constants';

const CoursesSection = () => {

    return (
        <section id="courses" className="py-24 bg-white dark:bg-dark-950">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{
                        opacity: 0,
                        y: -20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                        Professional Courses
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Elevate your skills with our industry-leading courses taught by
                        experienced professionals.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="bento-card p-0 overflow-hidden h-full group cursor-pointer"
                            variants={itemVariants}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${course.color} opacity-30 group-hover:opacity-40 transition-opacity`}
                                ></div>
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-950/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-900 dark:text-white">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-brand-light dark:text-brand-dark/75 mb-3 transition-transform duration-300 group-hover:scale-110">
                                    {course.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-black/80 dark:text-white">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={16} />
                                        <span>{course.students}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoursesSection;