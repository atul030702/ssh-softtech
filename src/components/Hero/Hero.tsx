import Link from 'next/link';
import { ArrowRight, Cpu, Bot } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

import HeroCards from './HeroCards';
import NeuralBackground from '../NeuralBackground';
import ContactForm from '../ui/ContactForm';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-300">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Animated Grid - Reverted to static as requested */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <NeuralBackground />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">

                {/* Top Text Content - Centered */}
                <div className="text-center max-w-5xl mx-auto mb-16">

                    {/* Tagline Pill */}
                    <ScrollReveal
                        className="inline-flex items-center gap-2 px-2 sm:px-4 py-1.5 mb-8 sm:mb-4 rounded-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm text-sm font-medium text-slate-600 dark:text-gray-300 hover:border-brand-light/90 transition-colors cursor-default"
                    >
                        <Bot size={16} className="text-brand-light dark:text-brand-dark" />
                        <span className="text-slate-500 dark:text-gray-400">
                            Chatbots • Generative AI • RAG Systems
                        </span>
                    </ScrollReveal>

                    {/* Headline */}
                    <ScrollReveal
                        delay={0.1}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]"
                    >
                        <h1 className="inline">
                            From an Idea to Impact: <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-600 dark:via-brand-dark dark:to-blue-600 animate-gradient-x">
                                Engineering Intelligent Software
                            </span>
                        </h1>
                    </ScrollReveal>

                    {/* Action Buttons */}
                    <ScrollReveal
                        delay={0.3}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button popoverTarget="contact-form-popover"
                            popoverTargetAction="show"
                            className="w-full inline-flex items-center justify-center sm:w-auto px-8 py-4 gap-2 bg-brand-light/90 hover:bg-brand-light text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-light/20 hover:shadow-brand-light/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            <Cpu size={18} className="text-white" />
                            Build Your AI Solution
                        </button>
                        <Link href="https://cal.com/atul-cal" target="_blank" rel='noopener noreferrer'
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white rounded-xl font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none cursor-pointer"
                        >
                            Book a Free Demo
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>

                {/* Bottom Visual Content - The 5 Cards Layout */}
                <HeroCards />
                <ContactForm />
            </div>
        </div>
    );
};

export default Hero;