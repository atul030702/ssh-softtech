"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const ContactSection = () => {
    const [hoveredDot, setHoveredDot] = useState<number | null>(null);

    const dots = Array.from(
        {
            length: 150,
        },
        (_, i) => i,
    );

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-950"
        >
            {/* Interactive Dots Background */}
            <div className="absolute top-20 left-4 inset-0 opacity-30">
                <div className="relative w-full h-full">
                    {dots.map((dot) => {
                        const x = (dot % 15) * 80;
                        const y = Math.floor(dot / 15) * 80;
                        const isHovered = hoveredDot === dot;

                        return (
                            <motion.div
                                key={dot}
                                className="absolute w-2 h-2 rounded-full bg-brand-light dark:bg-brand-dark cursor-pointer z-0"
                                style={{
                                    left: x,
                                    top: y,
                                }}
                                initial={{
                                    scale: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: isHovered ? 2.5 : 1,
                                    opacity: isHovered ? 1 : 0.3,
                                }}
                                transition={{
                                    duration: 0.2, // Consistent duration for hover enter/exit
                                }}
                                onMouseEnter={() => setHoveredDot(dot)}
                                onMouseLeave={() => setHoveredDot(null)}
                                whileHover={{
                                    boxShadow: '0 0 20px rgba(80, 88, 156, 0.8)', // Matching brand-light color approximately
                                }}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Let's discuss how SSH Softtech can help you achieve your
                            technology goals. Schedule a meeting with our team today.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white dark:bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/20 shadow-2xl dark:shadow-none"
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                >
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all"
                                    placeholder="Your Company"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"
                                >
                                    How can we help?
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all resize-none"
                                    placeholder="Tell us about your project or requirements..."
                                ></textarea>
                            </motion.div>
                            <div className="text-center">
                                <motion.button
                                    type="submit"
                                    className="bg-brand-light hover:bg-brand-light/90 text-white px-10 py-4 font-medium inline-flex items-center shadow-2xl rounded-xl transition-all cursor-pointer"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                >
                                    <Send className="mr-2" size={18} />
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                    <motion.div
                        className="mt-12 text-center"
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <p className="text-slate-600 dark:text-gray-300">
                            Prefer to email us directly? Reach out at{' '}
                            <a
                                href="mailto:connect@sshsofttech.com"
                                className="text-brand-light dark:text-brand-dark hover:underline"
                            >
                                connect@sshsofttech.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;