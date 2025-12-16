"use client"

import { motion } from 'motion/react';

import { values, stats } from './constants';

const AboutSection = () => {

    return (
        <section id="about" className="py-28 bg-white dark:bg-dark-950">
            <div className="container max-w-7xl mx-auto px-4 mb-8">
                <motion.div
                    className="text-center mb-16"
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
                        About Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
                        SSH Softtech has been at the forefront of Artificial Intelligence, digital
                        innovation, and helping businesses transform their ideas into powerful
                        software solutions.
                    </p>
                </motion.div>
                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16 bg-brand-light/80 dark:bg-brand-dark/80 px-6 md:px-12 py-8 rounded-3xl"
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
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-50 dark:text-white/80 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="feature-card p-8 group"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <div className="flex items-start">
                                <motion.div
                                    className="mr-6 mt-1 p-3 rounded-xl bg-brand-light/10 dark:bg-brand-dark/10 group-hover:bg-brand-light/20 dark:group-hover:bg-brand-dark/20 transition-colors text-brand-light dark:text-brand-dark"
                                    whileHover={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                >
                                    {value.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;