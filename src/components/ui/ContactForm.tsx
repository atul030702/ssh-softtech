"use client";

import Link from 'next/link';
import { X, MapPin, Check } from 'lucide-react';

const ContactForm = () => {
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
            >
                <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] lg:max-h-[800px] overflow-y-auto lg:overflow-hidden">

                {/* --- LEFT COLUMN (Info & Map) --- */}
                <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-slate-50 dark:bg-[#0a0a0a] flex flex-col justify-start relative border-r border-slate-200 dark:border-white/5">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Let's get in touch</h2>
                    <p className="text-slate-600 dark:text-gray-400 mb-8">Our team will respond within 24 hours.</p>

                    {/* Map Card */}
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
                </div>

                {/* --- RIGHT COLUMN (Form) --- */}
                <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-white dark:bg-black flex flex-col justify-center">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Full Name *"
                            className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email Address *"
                            className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                            required
                        />

                        {/* Phone */}
                        <div className="flex gap-4">
                            <input
                                type="tel"
                                placeholder="Mobile Number *"
                                className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
                                required
                            />
                        </div>

                        {/* Requirement */}
                        <select defaultValue="Select" className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer">
                            <option value="Select" disabled>Select Your Requirement *</option>
                            <option value="ai-chatbot">AI Chatbot</option>
                            <option value="voice-agent">Voice Agent</option>
                            <option value="data-extraction">Data Extraction</option>
                            <option value="custom">Custom Solution</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="web-development">Web + Mobile Development</option>
                        </select>

                        {/* Notes */}
                        <textarea
                            placeholder="Additional Notes (Optional)"
                            rows={4}
                            className="w-full bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                        />

                        {/* Checkbox */}
                        <div className="flex items-start gap-3">
                            <div className="relative flex items-center">
                                <input type="checkbox" id="consent" className="peer w-5 h-5 appearance-none border border-brand-500 rounded bg-white dark:bg-black checked:bg-brand-500 checked:border-brand-500 cursor-pointer" defaultChecked />
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
                        <button className="w-full inline-flex items-center justify-center px-8 py-4 gap-2 bg-brand-light/90 hover:bg-brand-light text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-light/20 hover:shadow-brand-light/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
