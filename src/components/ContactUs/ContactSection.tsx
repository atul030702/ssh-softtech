"use client";

import { Send, Check, X, Loader2 } from 'lucide-react';
import useSendFormData from '../../hooks/useSendFormData';

import ScrollReveal from '../ui/ScrollReveal';
import ContactDotsBackground from './ContactDotsBackground';

const ContactSection = () => {
    const { loading, status, handleFormSubmit } = useSendFormData();

    return (
        <section
            id="contact"
            aria-labelledby="contact page"
            className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-950"
        >
            <ContactDotsBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                            Ready to Transform Your{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                                Digital Presence?
                            </span>
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
                        <form className="space-y-4" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group transition-transform duration-200 hover:scale-[1.02]">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-slate-700 dark:text-gray-200 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
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
                                        name="email"
                                        required
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
                                    Company Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all"
                                    placeholder="eg: SSH Softtech"
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
                                    name="message"
                                    rows={4}
                                    className="w-full bg-slate-50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-brand-light dark:focus:border-brand-light focus:ring-2 focus:ring-brand-light/50 transition-all resize-none"
                                    placeholder="Tell us about your project or requirements..."
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded-xl border ${status.type === 'success'
                                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                                    : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                                    } transition-all animate-in fade-in slide-in-from-bottom-2`}>
                                    <p className="font-medium text-sm flex items-center justify-center gap-2">
                                        {status.type === 'success' ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <X className="w-4 h-4" />
                                        )}
                                        {status.message}
                                    </p>
                                </div>
                            )}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-brand-light hover:bg-brand-light/90 text-white px-10 py-4 font-medium inline-flex items-center shadow-2xl rounded-xl transition-all cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 animate-spin" size={18} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2" size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>

                    <ScrollReveal
                        delay={0.3}
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