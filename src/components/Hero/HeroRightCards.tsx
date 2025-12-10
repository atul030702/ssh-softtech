import React from 'react';
import { motion, Variants } from 'motion/react';
import { Code, Smartphone, Database, Globe, Cloud, CheckCircle } from 'lucide-react';

import { colorClasses } from '../../utils/constants';

const HeroCards: React.FC = () => {
    // Container variants for staggered children animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    };

    // Individual card animation variant
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        },
    };

    // Floating animation for the center card
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-7xl mx-auto mt-8 px-4"
        >
            {/* 
                The group/cards class allows us to style children based on the hover state of this container.
                This enables the "focus" effect where non-hovered cards fade out.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative group/cards perspective-1000">

                {/* Column 1 (Left) - Pushed down slightly */}
                <div className="flex flex-col gap-6 md:translate-y-8">
                    <FeatureCard
                        variants={cardVariants}
                        icon={<Code className="text-brand-light" size={28} />}
                        title="Web Development"
                        subtitle="Custom Solutions"
                        meta="Progress: 80%"
                        color="blue"
                        delay={0}
                    >
                        {/* Micro-interaction: Simple Progress Bar */}
                        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700/50 rounded-full mt-3 overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "80%" }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="h-full bg-brand-light rounded-full"
                            />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        variants={cardVariants}
                        icon={<Database className="text-purple-500 dark:text-purple-400" size={28} />}
                        title="Backend Systems"
                        subtitle="Scalable Infrastructure"
                        color="purple"
                        delay={0.1}
                    >
                        <div className="flex -space-x-2 mt-3 pl-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 border border-white dark:border-white/10 flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-white shadow-sm">
                                    U{i}
                                </div>
                            ))}
                            <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-white/5 border border-white dark:border-white/10 flex items-center justify-center text-[9px] text-slate-500 dark:text-gray-400">
                                +4k
                            </div>
                        </div>
                    </FeatureCard>
                </div>

                {/* Column 2 (Center) - The Anchor Card - Popped Up */}
                <div className="flex justify-center relative z-20 md:-mt-8 order-first md:order-0 mb-8 md:mb-0">
                    <motion.div
                        variants={cardVariants}
                        animate={floatingAnimation}
                        className="w-full max-w-sm md:max-w-full aspect-square md:aspect-auto md:h-[380px] rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-slate-200/50 dark:border-white/20 relative overflow-hidden group transition-all duration-400 md:scale-110 bg-slate-50/80 dark:bg-gray-700/50 backdrop-blur-sm"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 dark:bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-500/10 dark:bg-blue-500/30 rounded-full blur-3xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700 delay-100" />

                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative z-10 bg-white/80 dark:bg-white/10 p-5 rounded-2xl mb-8 ring-1 ring-slate-200 dark:ring-white/20 backdrop-blur-md shadow-lg"
                        >
                            <CheckCircle className="text-brand-light dark:text-white w-12 h-12" />
                        </motion.div>

                        <h3 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">20+</h3>
                        <p className="text-slate-600 dark:text-blue-100 font-medium text-lg mb-8 max-w-[200px] leading-snug">Projects Delivered Successfully</p>

                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-white/90 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-colors px-5 py-2.5 rounded-full backdrop-blur-md border border-slate-200 dark:border-white/10 cursor-default">
                            <Globe size={16} className="text-brand-light dark:text-white" />
                            <span>Global Reach</span>
                        </div>
                    </motion.div>
                </div>

                {/* Column 3 (Right) - Pushed down slightly */}
                <div className="flex flex-col gap-6 md:translate-y-8">
                    <FeatureCard
                        variants={cardVariants}
                        icon={<Smartphone className="text-emerald-500 dark:text-emerald-400" size={28} />}
                        title="Mobile Apps"
                        subtitle="iOS & Android"
                        color="emerald"
                        delay={0.2}
                    >
                        <div className="flex gap-2 mt-3 pl-1">
                            <div className="h-6 w-10 rounded bg-emerald-50 border border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20 flex items-center justify-center">
                                <div className="w-1 h-2 bg-emerald-400 dark:bg-emerald-500/50 rounded-[1px]"></div>
                            </div>
                            <div className="h-6 w-10 rounded bg-blue-50 border border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20 flex items-center justify-center">
                                <div className="w-2.5 h-1.5 bg-blue-400 dark:bg-blue-500/50 rounded-[1px]"></div>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        variants={cardVariants}
                        icon={<Cloud className="text-orange-500 dark:text-orange-400" size={28} />}
                        title="Cloud & AI Solutions"
                        subtitle="Future Ready Tech"
                        color="orange"
                        delay={0.3}
                    >
                        <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-orange-600/70 dark:text-orange-200/50">
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">AWS</span>
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">Azure</span>
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">AI</span>
                        </div>
                    </FeatureCard>
                </div>

            </div>
        </motion.div>
    );
};

// Reusable Sub-component for side cards
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    meta?: string;
    children?: React.ReactNode;
    variants: Variants;
    color: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, meta, children, variants, color }) => {
    const hoverBgClasses = colorClasses[color] || '';

    return (
        <motion.div
            variants={variants}
            // Micro-interaction: Focus effect
            // When the group (grid) is hovered, non-hovered items fade out slightly
            className={`
            relative p-5 rounded-2xl 
            bg-slate-50/60 dark:bg-white/5 
            border border-slate-200/50 dark:border-white/5 
            backdrop-blur-sm 
            transition-all duration-500 ease-out
            group-hover/cards:opacity-40 group-hover/cards:scale-[0.98] group-hover/cards:blur-[2px]
            hover:opacity-100! hover:scale-105! hover:blur-none! hover:z-10
            hover:bg-white dark:hover:bg-dark-800
            hover:border-slate-200 dark:hover:border-white/10
            hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50
            cursor-default
        `}
        >
            <div className="flex justify-between items-start mb-3">
                <div className={`
                    p-2.5 rounded-xl transition-colors duration-300
                    bg-white/50 dark:bg-white/5 
                    group-hover:bg-${hoverBgClasses}-50 dark:group-hover:bg-white/10
                `}>
                    {icon}
                </div>
                {meta && (
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-500 bg-slate-100/50 dark:bg-white/5 px-2 py-1 rounded-md">
                        {meta}
                    </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mb-0.5 leading-tight">{title}</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mb-2 font-medium">{subtitle}</p>

            {children}
        </motion.div>
    );
};

export default HeroCards;