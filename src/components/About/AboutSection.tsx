"use client"

import { motion } from 'motion/react';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        {
            label: 'Projects Completed',
            value: '500+',
        },
        {
            label: 'Happy Clients',
            value: '200+',
        },
        {
            label: 'Team Members',
            value: '50+',
        },
        {
            label: 'Years Experience',
            value: '10+',
        },
    ];
    const values = [
        {
            icon: <Target size={32} />,
            title: 'Our Mission',
            description:
                'To empower businesses with innovative technology solutions that drive growth and transform digital experiences.',
        },
        {
            icon: <Eye size={32} />,
            title: 'Our Vision',
            description:
                'To be the leading software development partner recognized for excellence, innovation, and client success.',
        },
        {
            icon: <Award size={32} />,
            title: 'Our Values',
            description:
                'Excellence, integrity, innovation, and collaboration guide everything we do for our clients and team.',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Our Approach',
            description:
                'Agile methodology combined with deep industry expertise ensures we deliver solutions that exceed expectations.',
        },
    ];

    return (
        <section id="about" className="py-28 bg-white dark:bg-dark-950">
            <div className="container max-w-7xl max-h-screen mx-auto px-4 mb-8">
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
                        About SSH Softtech
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
                        Founded in 2014, SSH Softtech has been at the forefront of Artificial Intelligence, digital
                        innovation, and helping businesses transform their ideas into powerful
                        software solutions.
                    </p>
                </motion.div>
                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20"
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
                            <div className="text-4xl md:text-5xl font-bold text-brand-light dark:text-brand-dark mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
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
    )
};

export default AboutSection;