import { ArrowRight, Bot } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const CTA: React.FC = () => {
    return (
        <section className="relative w-full py-32 lg:py-40 overflow-hidden bg-slate-50 dark:bg-[#050B14] flex flex-col items-center justify-center">
            {/* 1. Spherical shape */}
            <div className="absolute bottom-0 left-1/2 top-10 -translate-x-1/2 w-[250%] md:w-[150%] h-[500px] md:h-[750px]
                rounded-t-[100%] md:rounded-t-[50%]
                bg-slate-100 dark:bg-[#050B14]
                border-t border-brand-light/50 dark:border-white/20
                shadow-[inset_0_20px_50px_rgba(59,130,246,0.3)] dark:shadow-[inset_0_20px_50px_rgba(255,255,255,0.3)]"
            />

            {/* 2. Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-8 sm:mt-16">
                <ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mx-auto tracking-tight text-black dark:text-white max-w-3xl">
                            Ready to Engineer Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
                                Autonomous Future?
                            </span>
                        </h2>
                    </ScrollReveal>

                    {/* Subtext */}
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 mx-auto leading-relaxed max-w-4xl">
                            We don't just wrap APIs. We build autonomous Agentic AI workflows and precision Retrieval-Augmented Generation (RAG) systems that solve complex enterprise challenges.
                        </p>
                    </ScrollReveal>

                    {/* Buttons */}
                    <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center sm:justify-center gap-8 w-full sm:w-auto">
                        {/* Primary Button */}
                        <button className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-brand-light px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98]">
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <div className="relative flex items-center justify-center gap-2">
                                <Bot size={20} />
                                <span>Start Your AI Journey</span>
                            </div>
                        </button>

                        {/* Secondary Button */}
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white rounded-xl font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 group shadow-sm dark:shadow-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
                            Book a Free Demo
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </ScrollReveal>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CTA;