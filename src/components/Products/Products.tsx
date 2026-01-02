"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Bot, ArrowRight, CheckCircle2, Check } from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import { mainProducts, stats, integrations, featureData, marketingData } from './constants';
import VideoModal from '../ui/VideoModal';
import ContactForm from '../ui/ContactForm';
import { cal_ssh_link } from '@/utils/constants';

const Products = () => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    return (
        <div className="bg-white dark:bg-dark-950 min-h-screen text-slate-900 dark:text-white transition-colors duration-300">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-28 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-brand-500/10 dark:from-brand-500/5" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8 mt-4">
                        <ScrollReveal
                            className="max-w-4xl mx-auto mb-16"
                            delay={0.1}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-black tracking-tight mb-6 animate-fade-in-up">
                                Connect, Process, & Scale operations using our{' '}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-600 dark:via-brand-dark dark:to-blue-600 animate-gradient-x">
                                    AI Product Suite
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-gray-400 leading-tight">
                                Empower your organization with business-ready software products designed for modern enterprises.
                                Our suite of AI agents converts static documents into interactive knowledge systems, automates customer engagement,
                                and drives precision in data processing to help you scale faster.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}
                            className="flex flex-col sm:flex-row items-center sm:justify-center gap-8 w-full sm:w-auto mb-16"
                        >
                            <button
                                popoverTarget="contact-form-popover"
                                popoverTargetAction="show"
                                className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-brand-light px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <div className="relative flex items-center justify-center gap-2">
                                    <Bot size={20} />
                                    <span>Start Your AI Journey</span>
                                </div>
                            </button>

                            <Link href={cal_ssh_link} target="_blank" rel='noopener noreferrer'
                                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white rounded-xl font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Book a Free Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal
                            className="flex flex-col justify-center items-center"
                            delay={0.3}
                        >
                            <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
                                {marketingData.map((item, index) => (
                                    <div key={index} className="inline-flex items-center gap-2 bg-slate-200 dark:bg-slate-800 py-1 px-4 rounded-3xl">
                                        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600 dark:bg-green-500">
                                            <Check size={14} className="text-white font-bold" />
                                        </div>
                                        <p className="text-slate-600 dark:text-gray-400">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <img
                                src="./product_hero_image.png"
                                alt="product hero image"
                                className="w-full object-cover"
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* --- DETAILED PRODUCTS --- */}
            <section className="py-24 space-y-32">
                {mainProducts.map((product, i) => (
                    <div key={i} className={`max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                        <ScrollReveal className={`space-y-8 animate-fade-in-up ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                            <div className="inline-flex p-4 rounded-3xl bg-slate-100 dark:bg-white/5 text-brand-600 dark:text-brand-400">
                                {product.icon}
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
                                    {product.title}
                                </h2>
                                <p className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-[0.2em] text-sm mb-6">
                                    {product.subtitle}
                                </p>
                                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                                    {product.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                                        <span className="text-sm font-bold text-slate-700 dark:text-gray-300">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedVideoId(product.videoId)}
                                className="group px-6 py-3 border border-brand-500/30 dark:border-brand-500/20 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Learn more about {product.title}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </ScrollReveal>

                        <div className={`relative group animate-fade-in-up ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                            <div className={`absolute -inset-4 bg-linear-to-br ${product.color} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                            <ScrollReveal className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-1000"
                                    loading="lazy"
                                    decoding='async'
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-lg mb-1">Live Deployment</p>
                                        <p className="text-sm text-slate-300">Trusted by Global Enterprises</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                ))}
            </section>

            {/* --- INTEGRATIONS SECTION --- */}
            <section className="py-24 bg-slate-100 dark:bg-white/5 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Integrate with Your Ecosystem</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto font-medium">Connect SSH Softtech products seamlessly with the tools you already use to drive productivity across your entire organization.</p>

                    <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {integrations.map((app, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 cursor-default animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">{app.icon}</div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white tracking-wider">{app.name}</div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* --- FEATURES GRID (The "Why Ideal" section) --- */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Built for Enterprise Performance</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Our infrastructure is designed to handle complex requirements with zero-leakage privacy and lightning-fast execution.</p>
                </div>

                <ScrollReveal className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureData.map((feature, i) => (
                        <div key={i} className="p-10 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="mb-6 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-white/10 flex items-center justify-center text-brand-500 dark:text-brand-400">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </ScrollReveal>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-16 bg-slate-50 dark:bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="text-4xl md:text-5xl font-black text-brand-600 dark:text-brand-400 mb-2">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6">
                <ScrollReveal className="max-w-5xl mx-auto rounded-4xl bg-linear-to-br from-brand-600 to-indigo-700 p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-500/20">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-4xl blur-[120px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight animate-fade-in-up">Ready to revolutionize your <br /> business with AI?</h2>
                        <p className="text-lg text-brand-100 mb-12 max-w-2xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Join the 20+ companies that have already scaled their operations using our custom AI agents.</p>
                        <button
                            popoverTarget="contact-form-popover"
                            popoverTargetAction="show"
                            className="px-8 py-4 bg-white text-brand-600 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform cursor-pointer"
                        >
                            Get Started Now
                        </button>
                    </div>
                </ScrollReveal>
            </section>

            <VideoModal
                isOpen={!!selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
                videoId={selectedVideoId}
            />
            <ContactForm />
        </div>
    );
};

export default Products;