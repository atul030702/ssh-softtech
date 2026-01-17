import { Star, Quote, ExternalLink } from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import { testimonials } from './constant';

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                        Trusted by{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Hear from the partners who chose SSH Softtech for their most critical digital engineering challenges.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className={`h-full group relative p-6 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-2 flex flex-col overflow-hidden`}>
                                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-200 dark:text-white/10"}
                                                />
                                            ))}
                                        </div>
                                        <Quote className="text-brand-500/20 dark:text-white/10 group-hover:text-brand-500/40 transition-colors" size={48} />
                                    </div>

                                    <p className="text-lg text-slate-700 dark:text-gray-300 mb-10 leading-relaxed font-medium grow italic">
                                        "{item.content}"
                                    </p>

                                    <div className="mt-auto">
                                        <div className="h-px bg-slate-100 dark:bg-white/10 w-full mb-6" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-brand-400">
                                                    {item.tag}
                                                </p>
                                            </div>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-brand-500 hover:text-white transition-all transform hover:scale-110 group/link"
                                                title="Visit Site"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4} className="mt-20 flex justify-center">
                    <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                            Join <span className="text-brand-600 dark:text-white">20+</span> satisfied enterprise partners
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Testimonials;