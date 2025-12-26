import { duplicatedIndustriesData } from "./constants";
import ScrollReveal from '../ui/ScrollReveal';

const Industries = () => {
    return (
        <section id='industries'
            className="py-24 bg-slate-50 dark:bg-[#050B14] overflow-hidden relative border-t border-slate-200 dark:border-white/5"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white mb-4">
                        Industries &nbsp;
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                            We Empower
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We bridge the gap between data and decision, empowering every mission, from shaping minds in Education to securing futures in Finance.
                    </p>
                </ScrollReveal>

                {/* Vertical Scroll Container */}
                <div className="relative w-full max-w-2xl h-[400px] overflow-hidden">
                    {/* Gradient Masks to create the fade effect */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 to-transparent dark:from-[#050B14] dark:to-transparent z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent dark:from-[#050B14] dark:to-transparent z-20 pointer-events-none" />

                    {/* Scrolling Content - CSS Animation */}
                    <div className="flex flex-col items-center gap-0 animate-infinite-scroll-y">
                        {duplicatedIndustriesData.map((industry, index) => (
                            <div
                                key={index}
                                className="h-[100px] w-full flex items-center justify-center shrink-0"
                            >
                                <div className="flex items-center gap-6 px-8 py-4 rounded-2xl transition-all hover:bg-white dark:hover:bg-white/5 hover:shadow-lg border border-transparent hover:border-slate-200 dark:hover:border-white/10 group cursor-default">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${industry.color} group-hover:scale-110 transition-transform`}>
                                        {industry.icon}
                                    </div>
                                    <span className="text-2xl md:text-3xl font-bold text-slate-400 group-hover:text-slate-900 dark:text-gray-600 dark:group-hover:text-white transition-colors">
                                        {industry.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Industries;