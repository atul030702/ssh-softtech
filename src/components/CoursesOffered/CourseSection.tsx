import {
    Clock,
    Users,
} from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import { courses } from './constants';

const CoursesSection = () => {

    return (
        <section id="courses" className="py-24 bg-white dark:bg-dark-950">
            <div className="container mx-auto px-6 max-w-7xl">
                <ScrollReveal className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 tracking-widest mb-4">
                        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Professional Courses</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                        Upskill{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                            with Us
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Elevate your skills with our industry-leading courses taught by
                        experienced professionals.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            className="bento-card p-0 overflow-hidden h-full group cursor-pointer"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    decoding="async"
                                    loading="lazy"
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
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;