"use client"

import Link from 'next/link';
import { motion } from 'motion/react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
} from 'lucide-react';

import { footerItems } from '../utils/constants';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-dark-950 text-slate-600 dark:text-gray-300 border-t border-slate-200 dark:border-white/10">
            <div className="container max-w-7xl mx-auto px-4 py-12">
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
                            viewport={{
                                once: true,
                            }}
                        >
                            <Link href="/" className="flex items-center mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                                <span className="text-2xl font-bold text-brand-light dark:text-brand-dark">SSH</span>
                                Softtech
                            </Link>
                            <p className="text-sm text-slate-600 dark:text-gray-300 mb-4">
                                Transforming ideas into exceptional software solutions. Your
                                vision, our expertise.
                            </p>
                            <div className="flex space-x-4">
                                {[Twitter, Facebook, Instagram, Linkedin].map(
                                    (Icon, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            className="text-slate-500 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-colors p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10"
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
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    'AI Solutions',
                                    'Web Development',
                                    'Mobile App Development',
                                    'Custom Software',
                                    'E-Commerce Development',
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-sm text-slate-600 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-all hover:translate-x-1 inline-block duration-150 ease-out"
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
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Company</h3>
                            <ul className="space-y-3">
                                {footerItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-slate-600 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-all hover:translate-x-1 inline-block duration-150 ease-out"
                                        >
                                            {item.label}
                                        </Link>
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
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Contact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-slate-600 dark:text-gray-300">
                                    <MapPin size={16} className="mr-2 text-brand-light dark:text-brand-dark" />
                                    Digha, Patna (800013)
                                </li>
                                <li className="flex items-center text-sm text-slate-600 dark:text-gray-300">
                                    <Phone size={16} className="mr-2 text-brand-light dark:text-brand-dark" />
                                    +91 83038 94288
                                </li>
                                <li className="flex items-center text-sm text-slate-600 dark:text-gray-300">
                                    <Mail size={16} className="mr-2 text-brand-light dark:text-brand-dark" />
                                    connect@sshsofttech.com
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="border-t border-slate-200 dark:border-white/10 mt-12 pt-8 text-sm text-center text-slate-500 dark:text-gray-400"
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