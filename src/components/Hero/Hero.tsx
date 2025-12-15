"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Bot } from 'lucide-react';
import HeroCards from './HeroCards';
import NeuralBackground from '../NeuralBackground';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center pt-28 pb-20 overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-300">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Animated Grid - Reverted to static as requested */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <NeuralBackground />

                {/* Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-light/10 dark:bg-brand-dark/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">

                {/* Top Text Content - Centered */}
                <div className="text-center max-w-5xl mx-auto mb-16">

                    {/* Tagline Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm text-sm font-medium text-slate-600 dark:text-gray-300 mb-4 hover:border-brand-light/90 transition-colors cursor-default"
                    >
                        <Bot size={16} className="text-brand-light dark:text-brand-dark" />
                        <span className="text-slate-500 dark:text-gray-400">
                            Chatbots • Generative AI • RAG Systems
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]"
                    >
                        From an Idea to Impact: <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-brand-dark to-brand-light dark:from-white dark:to-white/40">
                            Engineering Intelligent Software
                        </span>
                    </motion.h1>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full inline-flex items-center sm:w-auto px-8 py-4 gap-2 bg-brand-light/90 hover:bg-brand-light text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-light/20 hover:shadow-brand-light/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                            <Cpu size={18} className="text-white" />
                            Build Your AI Solution
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white rounded-xl font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none cursor-pointer">
                            Book a Free Demo
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Bottom Visual Content - The 5 Cards Layout */}
                <HeroCards />

            </div>
        </div>
    );
};

export default Hero;