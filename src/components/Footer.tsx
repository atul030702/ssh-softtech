import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

import ScrollReveal from './ui/ScrollReveal';
import { footerItems, footerSocialIcons } from '../utils/footerConstant';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-[#02060B] text-slate-600 dark:text-gray-300 border-t border-slate-200 dark:border-white/10">
            <div className="container max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <ScrollReveal>
                            <Link href="/" className="flex items-center mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                                <span className="text-2xl font-bold text-brand-light dark:text-brand-dark">SSH</span>
                                Softtech
                            </Link>
                            <p className="text-sm text-slate-600 dark:text-gray-300 mb-4">
                                Transforming ideas into exceptional software solutions. Your
                                vision, our expertise.
                            </p>
                            <div className="flex space-x-4">
                                {footerSocialIcons.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        title={item.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-all p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                                    >
                                        <item.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-1">
                        <ScrollReveal delay={0.1}>
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    'Custom AI Chatbots Development',
                                    'Web + Mobile App Development',
                                    'Custom Software Solutions',
                                    'E-Commerce Development',
                                ].map((service) => (
                                    <li key={service}>
                                        <Link
                                            href="/services" target="_blank" rel="noopener noreferrer"
                                            className="text-sm text-slate-600 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-all hover:translate-x-1 inline-block duration-150 ease-out"
                                        >
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-1">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Company</h3>
                            <ul className="space-y-3">
                                {footerItems.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href} target="_blank" rel="noopener noreferrer"
                                            className="text-sm text-slate-600 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-dark transition-all hover:translate-x-1 inline-block duration-150 ease-out"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-1">
                        <ScrollReveal delay={0.3}>
                            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start text-sm text-slate-600 dark:text-gray-300">
                                    <MapPin size={18} className="mr-3 text-brand-light dark:text-brand-dark shrink-0 mt-0.5" />
                                    <div className="flex flex-col gap-1.5">
                                        <span>Patna, India</span>
                                        <span>Delaware, United States</span>
                                    </div>
                                </li>
                                <li className="flex items-start text-sm text-slate-600 dark:text-gray-300">
                                    <Phone size={18} className="mr-3 text-brand-light dark:text-brand-dark shrink-0 mt-0.5" />
                                    <div className="flex flex-col gap-1.5">
                                        <a href="tel:+918303894288" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                                            +91 83038 94288 (IN)
                                        </a>
                                        <a href="tel:+13024019055" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                                            +1 (302) 401-9055 (USA)
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center text-sm text-slate-600 dark:text-gray-300">
                                    <Mail size={18} className="mr-3 text-brand-light dark:text-brand-dark shrink-0" />
                                    <a href="mailto:connect@sshsofttech.com" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                                        connect@sshsofttech.com
                                    </a>
                                </li>
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
                <ScrollReveal
                    className="border-t border-slate-200 dark:border-white/10 mt-12 pt-8 text-sm text-center text-slate-500 dark:text-gray-400"
                    delay={0.4}
                >
                    <p>
                        © {new Date().getFullYear()} SSH Softtech. All rights reserved.
                    </p>
                </ScrollReveal>
            </div>
        </footer>
    )
}

export default Footer;