import { Send } from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import ContactDotsBackground from './ContactDotsBackground';

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-950"
        >
            {/* Interactive Dots Background */}
            <ContactDotsBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Let's discuss how SSH Softtech can help you achieve your
                            technology goals. Schedule a meeting with our team today.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal
                        delay={0.2}
                        className="bg-white dark:bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/20 shadow-2xl dark:shadow-none"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group transition-transform duration-200 hover:scale-[1.02]">
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
                                </div>
                                <div className="group transition-transform duration-200 hover:scale-[1.02]">
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
                                </div>
                            </div>
                            <div className="group transition-transform duration-200 hover:scale-[1.02]">
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
                            </div>
                            <div className="group transition-transform duration-200 hover:scale-[1.02]">
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
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-brand-light hover:bg-brand-light/90 text-white px-10 py-4 font-medium inline-flex items-center shadow-2xl rounded-xl transition-all cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                                >
                                    <Send className="mr-2" size={18} />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>

                    <ScrollReveal
                        delay={0.4}
                        className="mt-12 text-center"
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
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;