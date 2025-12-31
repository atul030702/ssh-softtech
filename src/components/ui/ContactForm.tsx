"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, MapPin, Check } from 'lucide-react';

const ContactForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const rawData = Object.fromEntries(new FormData(form));

        const apiData = {
            name: rawData.fullName,
            email: rawData.email,
            phone: rawData.phone,
            subject: rawData.requirement,
            description: rawData.message,
        };
        console.log(apiData);

        try {
            setLoading(true);
            setStatus({ type: null, message: '' });
            const response = await fetch(`https://managerial-giselle-bisanjeevni-d402e2ea.koyeb.app/api/contact/website1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) throw new Error('Submission failed');

            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            form.reset();

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            id="contact-form-popover"
            popover="auto"
            className="m-auto w-full max-w-5xl p-0 bg-white dark:bg-black text-slate-900 dark:text-white rounded-3xl overflow-hidden shadow-2xl backdrop:backdrop-blur-sm backdrop:bg-black/50 open:animate-in open:fade-in open:zoom-in-95 open:duration-300 inset-0"
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 z-20 p-2 text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                popoverTarget="contact-form-popover"
                popoverTargetAction="hide"
                onClick={() => setStatus({ type: null, message: '' })}
            >
                <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] lg:max-h-[800px] overflow-y-auto lg:overflow-hidden">
                <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-slate-50 dark:bg-[#0a0a0a] flex flex-col justify-start relative border-r border-slate-200 dark:border-white/5">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Let's get in touch</h2>
                    <p className="text-slate-600 dark:text-gray-400 mb-8">Our team will respond within 24-48 hours.</p>

                    <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden mb-8 border border-slate-200 dark:border-white/10 group shadow-sm dark:shadow-none">
                        {/* Placeholder map image or iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1652030000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 group-hover:opacity-100 transition-opacity dark:invert-0 invert"
                        />
                        <div className="absolute top-4 left-4 bg-white text-black p-3 rounded-lg shadow-lg max-w-[200px]">
                            <p className="font-bold text-sm">2323 N Pulaski Rd</p>
                            <a href="#" className="text-xs text-blue-600 hover:underline">View larger map</a>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-sm">
                            <MapPin size={20} className="text-red-500" />
                        </div>
                    </div>

                    {/* Status Message */}
                    {status.message && (
                        <div className={`mt-auto p-4 rounded-xl border ${status.type === 'success'
                            ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                            : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                            } transition-all animate-in fade-in slide-in-from-bottom-2`}>
                            <p className="font-medium text-sm flex items-center gap-2">
                                {status.type === 'success' ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    <X className="w-4 h-4" />
                                )}
                                {status.message}
                            </p>
                        </div>
                    )}
                </div>

                {/* --- RIGHT COLUMN (Form) --- */}
                <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-white dark:bg-black flex flex-col justify-center">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Phone Number (with country code) <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 (123) 456-7890"
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                                required
                            />
                        </div>

                        {/* Requirement */}
                        <div className="space-y-2">
                            <label htmlFor="requirement" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Requirement <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="requirement"
                                name="requirement"
                                defaultValue=""
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer"
                                required
                            >
                                <option value="" disabled>Select Your Requirement</option>
                                <option value="ai-chatbot">AI Chatbot</option>
                                <option value="voice-agent">Voice Agent</option>
                                <option value="data-extraction">Data Extraction</option>
                                <option value="custom">Custom Solution</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="web-development">Web + Mobile Development</option>
                                <option value="others">Other</option>
                            </select>
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                Message <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us more about your project..."
                                rows={4}
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-3">
                            <div className="relative flex items-center pt-1">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    className="peer w-5 h-5 appearance-none border border-brand-500 rounded bg-white dark:bg-black checked:bg-brand-500 checked:border-brand-500 cursor-pointer"
                                    defaultChecked
                                    required
                                />
                                <Check size={14} className="absolute inset-0 m-auto text-white pointer-events-none hidden peer-checked:block" />
                            </div>
                            <label htmlFor="consent" className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed cursor-pointer select-none">
                                By using this website, you consent to the collection and processing of your data as outlined in our{' '}
                                <Link href="/privacy-policy" target="_blank"
                                    className="text-brand-600 dark:text-blue-500 hover:underline"
                                >
                                    Privacy Policy
                                </Link>.
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center px-8 py-4 gap-2 bg-brand-light/90 hover:bg-brand-light text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-light/20 hover:shadow-brand-light/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
