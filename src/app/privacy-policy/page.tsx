import { Shield, Lock, Eye, Info } from 'lucide-react';

const PrivacyPolicy = () => {

    return (
        <div className="relative pt-32 pb-32 bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 selection:bg-brand-500/30">
            {/* Abstract Background Decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-brand-500/5 to-transparent blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
                {/* Document Header */}
                <header className="mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <Shield size={14} />
                        <span>Privacy Standards</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
                        Effective Date: January 1, 2024. Your data privacy and protection is the core of our technical infrastructure.
                    </p>
                </header>

                {/* Content Body */}
                <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <section className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <span className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500">
                                <Info size={18} />
                            </span>
                            1. Overview
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            <p>
                                SSH Softtech is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by SSH Softtech.
                            </p>
                            <p>
                                By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                            </p>
                        </div>
                    </section>

                    <section className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                                <Eye size={18} />
                            </span>
                            2. Information We Collect
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal Information: Name, email address, mailing address, phone number.</li>
                                <li>Professional Information: Job title, company name, industry sector.</li>
                                <li>Technical Data: IP address, browser type, device information, and usage patterns through cookies.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <Lock size={18} />
                            </span>
                            3. Data Security and AI Models
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. We use state-of-the-art encryption at rest and in transit.
                            </p>
                            <p className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 italic">
                                Specifically for our AI services: We do not use customer-provided proprietary data for training our public foundational models. All Retrieval Augmented Generation (RAG) processes occur in isolated environments to ensure zero leakage of intellectual property.
                            </p>
                        </div>
                    </section>

                    <section className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6">4. Third-Party Services</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            We may share information with third-party service providers that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. These third parties are prohibited from using your data for any other purpose than providing services to SSH Softtech.
                        </p>
                    </section>

                    <section className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6">5. Contact Us</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                            If you have any questions or concerns about this Privacy Policy, please contact our Data Protection Officer at:
                        </p>
                        <div className="p-8 rounded-2xl bg-brand-500/5 border border-brand-500/10">
                            <p className="font-bold text-slate-900 dark:text-white">SSH Softtech Global</p>
                            <p className="text-slate-600 dark:text-slate-400">Email: connect@sshsofttech.com</p>
                            <p className="text-slate-600 dark:text-slate-400">Address: Digha, Patna (800013)</p>
                        </div>
                    </section>
                </div>

                {/* Footer of the document */}
                <footer className="mt-20 pt-10 border-t border-slate-100 dark:border-white/10 text-slate-400 text-sm italic">
                    <p>This policy is reviewed annually and updated as necessary to comply with evolving data protection regulations globally (GDPR, CCPA).</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;