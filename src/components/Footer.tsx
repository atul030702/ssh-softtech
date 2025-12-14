"use client"

import { motion } from 'motion/react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Github,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary dark:bg-dark text-white border-t border-white/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <div className="flex items-center mb-6">
                                <span className="text-2xl font-bold">SSH</span>
                                <span className="text-2xl font-bold text-accent">Softtech</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-6">
                                Transforming ideas into exceptional software solutions. Your
                                vision, our expertise.
                            </p>
                            <div className="flex space-x-4">
                                {[Twitter, Facebook, Instagram, Linkedin, Github].map(
                                    (Icon, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            className="text-gray-300 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/10"
                                            whileHover={{
                                                scale: 1.1,
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    ),
                                )}
                            </div>
                        </motion.div>
                    </div>
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                        >
                            <h3 className="text-lg font-semibold mb-6">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    'Web Development',
                                    'Mobile App Development',
                                    'Custom Software',
                                    'E-commerce Development',
                                    'Cloud Computing',
                                    'AI & ML Solutions',
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-300 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                        >
                            <h3 className="text-lg font-semibold mb-6">Company</h3>
                            <ul className="space-y-3">
                                {[
                                    'About Us',
                                    'Our Team',
                                    'Careers',
                                    'Blog',
                                    'Case Studies',
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-300 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                            }}
                        >
                            <h3 className="text-lg font-semibold mb-6">Contact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-gray-300">
                                    <MapPin size={16} className="mr-2 text-accent" />
                                    123 Tech Park, Silicon Valley, CA
                                </li>
                                <li className="flex items-center text-sm text-gray-300">
                                    <Phone size={16} className="mr-2 text-accent" />
                                    +1 (555) 123-4567
                                </li>
                                <li className="flex items-center text-sm text-gray-300">
                                    <Mail size={16} className="mr-2 text-accent" />
                                    info@sshsofttech.com
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="border-t border-white/10 mt-12 pt-8 text-sm text-center text-gray-400"
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                >
                    <p>
                        © {new Date().getFullYear()} SSH Softtech. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;