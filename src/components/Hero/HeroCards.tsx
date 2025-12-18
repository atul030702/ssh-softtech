import React from 'react';
import { Database, Cloud, Activity, LayoutTemplate, Server } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

import { colorClasses } from '../../utils/constants';

const HeroCards: React.FC = () => {
    return (
        <div className="hidden sm:block w-full max-w-7xl mx-auto mt-8 px-4">
            {/* 
                The group/cards class allows us to style children based on the hover state of this container.
                This enables the "focus" effect where non-hovered cards fade out.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative group/cards perspective-1000">

                {/* Column 1 (Left) - Pushed down slightly */}
                <div className="flex flex-col gap-6 md:translate-y-8">
                    <FeatureCard
                        icon={<LayoutTemplate className="text-brand-light" size={28} />}
                        title="Intelligent Apps"
                        subtitle="Web & Mobile + AI"
                        color="blue"
                        delay={0.4}
                    >
                        {/* Micro-interaction: UI skeleton loading */}
                        <div className="mt-3 space-y-2">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-white/10" />
                                <div className="flex-1 space-y-1 py-1">
                                    <div className="h-2 bg-slate-200 dark:bg-white/10 rounded w-3/4" />
                                    <div className="h-2 bg-slate-200 dark:bg-white/10 rounded w-1/2" />
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        icon={<Database className="text-purple-500 dark:text-purple-400" size={28} />}
                        title="Distributed Systems"
                        subtitle="Scalable & Performant"
                        color="purple"
                        delay={0.5}
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
                <div className="flex justify-center relative z-20 md:-mt-12 order-first md:order-0 mb-8 md:mb-0">
                    <ScrollReveal
                        delay={0.55}
                        className="w-full max-w-sm md:max-w-full"
                    >
                        <div className="w-full aspect-square md:aspect-auto md:h-[420px] bg-slate-50/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between text-left shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(110,140,251,0.15)] border border-slate-200/50 dark:border-white/20 relative overflow-hidden group transition-all duration-300 ease-out md:scale-110 hover:shadow-2xl">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

                            {/* Header */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md">
                                        <Activity className="text-brand-600 dark:text-brand-400" size={24} />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        System Online
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Deployed Solutions</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Enterprise-grade architectures running in production.</p>
                            </div>

                            {/* Visual: Neural Network / Connectivity */}
                            <div className="relative h-24 w-full mt-4 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-brand-500/30 animate-[spin_10s_linear_infinite]" />
                                    <div className="w-16 h-16 rounded-full border border-brand-400/50 absolute animate-[spin_7s_linear_infinite_reverse]" />
                                    <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse-scale" />
                                </div>


                                {/* Connecting lines */}
                                <div className="absolute w-full h-px bg-linear-to-r from-transparent via-brand-500/20 to-transparent top-1/2 overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-400/80 to-transparent w-1/2 h-full blur-[1px] animate-beam-x" />
                                </div>
                                <div className="absolute h-full w-px bg-linear-to-b from-transparent via-brand-500/20 to-transparent left-1/2 overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-400/80 to-transparent w-full h-1/2 blur-[1px] animate-beam-y" />
                                </div>
                            </div>

                            {/* Footer Stats */}
                            <div className="flex justify-between items-center w-full relative z-10 pt-4 border-t border-slate-200 dark:border-white/5">
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">Uptime</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">20+</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-1">Projects</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Column 3 (Right) - Pushed down slightly */}
                <div className="flex flex-col gap-6 md:translate-y-8">
                    <FeatureCard
                        icon={<Server className="text-rose-500 dark:text-rose-400" size={28} />}
                        title="MCP Infrastructure"
                        subtitle="Future Ready Tech"
                        color="rose"
                        delay={0.6}
                    >
                        <div className="flex gap-2 mt-3 pl-1">
                            <div className="h-2 w-8 bg-rose-200 dark:bg-rose-500/20 rounded-full" />
                            <div className="h-2 w-8 bg-rose-300 dark:bg-rose-500/40 rounded-full" />
                            <div className="h-2 w-4 bg-rose-400 dark:bg-rose-500/60 rounded-full" />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        icon={<Cloud className="text-orange-500 dark:text-orange-400" size={28} />}
                        title="Cloud Providers"
                        subtitle="Secure and Cost-efficient"
                        color="orange"
                        delay={0.7}
                    >
                        <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-orange-600/70 dark:text-orange-200/50">
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">AWS</span>
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">Azure</span>
                            <span className="px-2 py-0.5 rounded-md bg-orange-50/50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">GCP</span>
                        </div>
                    </FeatureCard>
                </div>

            </div>
        </div>
    );
};

// Reusable Sub-component for side cards
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    meta?: string;
    children?: React.ReactNode;
    color: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, meta, children, color, delay }) => {
    const hoverBgClasses = colorClasses[color] || '';

    return (
        <ScrollReveal delay={delay} className="w-full">
            <div
                // Micro-interaction: Focus effect
                // When the group (grid) is hovered, non-hovered items fade out slightly
                className={`
                relative p-5 rounded-2xl 
                bg-slate-50/60 dark:bg-white/5 
                border border-slate-200/50 dark:border-white/5 
                backdrop-blur-sm 
                transition-all duration-300 ease-out
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
            </div>
        </ScrollReveal>
    );
};

export default HeroCards;