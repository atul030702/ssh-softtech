import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from '../ui/ScrollReveal';
import { servicesData } from "./constants";

const ServicesSectionHero = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                        Our Core &nbsp;
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                            Software Solutions
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                        Engineering ideas into digital solutions. We deliver full-stack, AI-powered systems designed for scale and performance.
                    </p>
                </ScrollReveal>

                {/* Services Grid - Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
                    {servicesData.map((service, index) => {
                        const isTopRow = index < 2;
                        const colSpanClass = isTopRow
                            ? "lg:col-span-3" // Top row: 2 cards
                            : "lg:col-span-2"; // Bottom row: 3 cards

                        return (
                            <ServiceCard
                                key={index}
                                service={service}
                                index={index}
                                className={`${colSpanClass} h-full`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: typeof servicesData[0]; index: number; className?: string }> = ({ service, index, className = "" }) => {
    return (
        <ScrollReveal
            delay={index * 0.1}
            className={`group relative p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-2 overflow-hidden ${className}`}
        >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-50 to-transparent dark:from-brand-500/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="relative mb-4">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {service.icon}
                </div>
                {/* Glow behind icon */}
                <div className={`absolute inset-0 ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                    {service.description}
                </p>

                {/* Link / Action */}
                <Link href='/services'
                    className="flex items-center gap-2 text-sm font-bold text-brand-light dark:text-brand-dark opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                    <span>Learn more</span>
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </ScrollReveal>
    );
};

export default ServicesSectionHero;