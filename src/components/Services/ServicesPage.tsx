import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Rocket, Bot } from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import ContactForm from '../ui/ContactForm';
import { servicesPageData } from './constants';
import { cal_ssh_link } from '@/utils/constants';

const ServicesPage = () => {
    return (
        <div className="bg-white dark:bg-dark-950 min-h-screen transition-colors duration-300 pb-20">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-from)_0%,transparent_60%)] from-indigo-500/10 dark:from-indigo-500/10 blur-3xl opacity-50" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8">
                    <ScrollReveal className="max-w-6xl mx-auto text-center flex flex-col items-center">
                        <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white">
                            Engineering{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-violet-600 to-blue-600 dark:from-blue-400 dark:via-violet-400 dark:to-blue-400 animate-gradient-x text-glow-sm">
                                Digital Intelligence
                            </span>
                        </h1>

                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed mb-12 font-medium text-center">
                            We don't just build software; we engineer autonomous systems. Bridge the gap between human vision and algorithmic precision with our AI-native solutions.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesPageData.map((service) => (
                        <ScrollReveal
                            key={service.id}
                            delay={service.delay}
                            threshold={0.05}
                            className={`group relative p-10 rounded-[3rem] bg-white dark:bg-white/5 border ${service.border} transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col`}
                        >
                            {/* Animated Accent Glow */}
                            <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/10 w-fit group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 text-brand-600 dark:text-brand-400">
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <div className="h-px bg-slate-100 dark:bg-white/10 w-full mb-6" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="shrink-0 w-5 h-5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center">
                                                    <CheckCircle2 size={12} className="text-brand-500" />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 dark:text-gray-300">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    popoverTarget="contact-form-popover"
                                    popoverTargetAction="show"
                                    className="mt-10 flex items-center gap-2 text-brand-600 dark:text-brand-400 font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 cursor-pointer bg-transparent border-none p-0 text-left"
                                >
                                    Discuss project <ArrowRight size={16} />
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* --- REASONS SECTION --- */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-slate-50 dark:bg-white/5 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                                    Your vision <br />
                                    <span className="text-brand-600 dark:text-brand-400">Our code.</span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 font-medium leading-relaxed">
                                    We don't just build features; we engineer competitive advantages. By integrating AI at the core of your software, we ensure your business stays ahead of the automation curve.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Performance-first Engineering",
                                        "Security-hardened Architectures",
                                        "Zero-leakage AI Privacy",
                                        "Continuous Delivery Support"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-900 dark:text-white font-bold">
                                            <Zap className="text-brand-600 dark:text-brand-400" size={20} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square bg-linear-to-br from-brand-600/10 to-purple-600/10 dark:from-brand-600/20 dark:to-purple-600/20 rounded-[3rem] border border-brand-200 dark:border-white/10 backdrop-blur-3xl p-10 flex flex-col justify-center shadow-2xl shadow-brand-500/10">
                                    <div className="text-center mb-8">
                                        <div className="text-6xl font-black text-brand-600 dark:text-white mb-2">20+</div>
                                        <p className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm">Active Deployments</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-slate-600 dark:text-slate-300 text-center italic text-lg">
                                            "SSH Softtech redefined our operational efficiency by building a custom software layer that thinks as much as it executes."
                                        </p>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10" />
                                            <div className="text-left">
                                                <p className="text-slate-900 dark:text-white font-bold text-sm">Marcus Thorne</p>
                                                <p className="text-slate-500 text-xs">CTO, Vanguard Dynamics</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-12">Ready to transform your ideas?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-8 w-full sm:w-auto">
                        <button
                            popoverTarget="contact-form-popover"
                            popoverTargetAction="show"
                            className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-brand-light px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <div className="relative flex items-center justify-center gap-2">
                                <Rocket size={20} />
                                <span>Start Building Now</span>
                            </div>
                        </button>

                        <Link href={cal_ssh_link} target="_blank" rel='noopener noreferrer'
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white rounded-xl font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Schedule a Call
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <ContactForm />
        </div>
    );
};

export default ServicesPage;