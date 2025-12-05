"use client"

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, HeartPulse, Building2, Truck, Plane, Droplet, ShoppingBag } from 'lucide-react';

const industriesData = [
  { icon: <BookOpen />, name: "Education", color: "text-pink-500 bg-pink-500/10" },
  { icon: <HeartPulse />, name: "Healthcare", color: "text-rose-500 bg-rose-500/10" },
  { icon: <Building2 />, name: "Real Estate", color: "text-amber-500 bg-amber-500/10" },
  { icon: <Truck />, name: "Logistics", color: "text-indigo-500 bg-indigo-500/10" },
  { icon: <Plane />, name: "Travel", color: "text-sky-500 bg-sky-500/10" },
  { icon: <Droplet />, name: "Oil & Gas", color: "text-yellow-500 bg-yellow-500/10" },
  { icon: <ShoppingBag />, name: "E-commerce", color: "text-emerald-500 bg-emerald-500/10" },
];

// Duplicate the list to create a seamless loop
const duplicatedIndustries = [...industriesData, ...industriesData, ...industriesData];

const Industries: React.FC = () => {
    return (
        <section id='industries'
            className="py-24 bg-slate-50 dark:bg-[#050B14] overflow-hidden relative border-t border-slate-200 dark:border-white/5"
        >
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
                >
                    Industries <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-500 to-purple-500">We Empower</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    We usher innovation on-demand, catalyzing growth across industries — from healing hands to fueling the world engine.
                </motion.p>
                </div>

                {/* Vertical Scroll Container */}
                <div className="relative w-full max-w-2xl h-[400px] overflow-hidden">
                {/* Gradient Masks to create the fade effect */}
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 to-transparent dark:from-[#050B14] dark:to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent dark:from-[#050B14] dark:to-transparent z-20 pointer-events-none" />

                {/* Scrolling Content */}
                <motion.div
                    animate={{ y: [0, -100 * industriesData.length] }} // Adjust depending on item height
                    transition={{
                    y: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20, // Adjust speed
                        ease: "linear",
                    },
                    }}
                    className="flex flex-col items-center gap-0"
                >
                    {duplicatedIndustries.map((industry, index) => (
                    <div 
                        key={index} 
                        className="h-[100px] w-full flex items-center justify-center shrink-0"
                    >
                        <div className="flex items-center gap-6 px-8 py-4 rounded-2xl transition-all hover:bg-white dark:hover:bg-white/5 hover:shadow-lg border border-transparent hover:border-slate-200 dark:hover:border-white/10 group cursor-default">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${industry.color} group-hover:scale-110 transition-transform`}>
                            {React.cloneElement(industry.icon, { size: 24 })}
                        </div>
                        <span className="text-2xl md:text-3xl font-bold text-slate-400 group-hover:text-slate-900 dark:text-gray-600 dark:group-hover:text-white transition-colors">
                            {industry.name}
                        </span>
                        </div>
                    </div>
                    ))}
                </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Industries;