"use client";

import { useParams, useRouter } from 'next/navigation';
import {
    Video,
    Clock,
    CheckCircle,
    BookOpen,
    Shield,
    ArrowRight,
    Users
} from 'lucide-react';

import { courses } from '@/components/CoursesOffered/constants';
import { useAuth } from '@/context/AuthContext';
import { schedule, syllabus, prerequisites } from '@/components/CoursesOffered/constants';

const CourseDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const { isAuthenticated, loading } = useAuth();

    // Handle loading state or finding course
    const courseId = params?.id as string;
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-900">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Course Not Found</h1>
                <button
                    onClick={() => router.push('/courses')}
                    className="text-primary-600 hover:underline"
                >
                    Back to Courses
                </button>
            </div>
        );
    }

    const handleEnroll = () => {
        if (isAuthenticated) {
            router.push(`/checkout?courseId=${course.id}`);
        } else {
            router.push(`/login?next=/checkout?courseId=${course.id}`);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-dark-950 pb-20">
            {/* Hero Section */}
            <div className="w-full pt-28 pb-20 px-6 sm:px-12 bg-gray-50 dark:bg-dark-900/50 border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-white/20 text-gray-800 dark:text-gray-100 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Live Instructor-Led
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">{course.title}</h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm">
                                <Clock size={20} className="text-blue-500" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm">
                                <Users size={20} className="text-purple-500" />
                                <span>{course.students} Students</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm">
                                <Shield size={20} className="text-green-500" />
                                <span>{course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Syllabus Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <BookOpen size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Course Syllabus</h2>
                            </div>

                            <div className="space-y-4">
                                {syllabus.map((module, idx) => (
                                    <div key={idx} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-dark-900/50">
                                        <div className="p-4 md:p-6 bg-white dark:bg-dark-900 border-b border-gray-100 dark:border-gray-800">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex justify-between items-center">
                                                <span>{module.title}</span>
                                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-800 px-3 py-1 rounded-full">{module.week}</span>
                                            </h3>
                                        </div>
                                        <div className="p-4 md:p-6 bg-gray-50/50 dark:bg-dark-900/30">
                                            <ul className="space-y-3">
                                                {module.topics.map((topic, tIdx) => (
                                                    <li key={tIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Prerequisites Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                    <CheckCircle size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Prerequisites</h2>
                            </div>

                            <div className="bg-white dark:bg-dark-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
                                <ul className="space-y-4">
                                    {prerequisites.map((req, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <div className="h-2 w-2 rounded-full bg-purple-500 shrink-0" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                    </div>

                    {/* Right Column: Sticky Enrollment Card */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-dark-900/50">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Cohort</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Limited seats available</p>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="space-y-4">

                                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-800/50">
                                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                                <Clock className="text-orange-500" size={20} />
                                                <span className="font-medium">Time</span>
                                            </div>
                                            <span className="text-gray-900 dark:text-white font-semibold text-right">{schedule.time}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-800/50">
                                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                                <Video className="text-green-500" size={20} />
                                                <span className="font-medium">Platform</span>
                                            </div>
                                            <span className="text-gray-900 dark:text-white font-semibold">{schedule.platform}</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <button
                                            onClick={handleEnroll}
                                            disabled={loading}
                                            className="w-full flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-light/80 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            {loading ? 'Checking...' : isAuthenticated ? (
                                                <>Proceed to Checkout <ArrowRight size={20} /></>
                                            ) : (
                                                <>Login to Enroll <ArrowRight size={20} /></>
                                            )}
                                        </button>

                                        <p className="text-center text-xs text-gray-400 mt-4">
                                            Lifetime access
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-white dark:bg-dark-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex justify-between gap-2 text-center">
                                <div className="flex-1">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                                    <div className="text-xs text-gray-500">Rating</div>
                                </div>
                                <div className="w-px bg-gray-100 dark:bg-dark-800" />
                                <div className="flex-1">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">96%</div>
                                    <div className="text-xs text-gray-500">Completion</div>
                                </div>
                                <div className="w-px bg-gray-100 dark:bg-dark-800" />
                                <div className="flex-1">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                                    <div className="text-xs text-gray-500">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
