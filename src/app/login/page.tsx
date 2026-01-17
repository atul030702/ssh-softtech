"use client";

import React, { useState, Suspense } from 'react';
import { Mail, Lock, User as UserIcon, ArrowRight, Bot, Sparkles, ShieldCheck, MoveLeft, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { loginAction, signUpAction } from '@/actions/users';
import { handleSignupFormError } from '@/utils/handleError';
import { SignupFormErrorType } from '@/types/company';
import { useAuth } from '@/context/AuthContext';
import { GoogleIcon } from '@/utils/footerConstant';

const AuthForm = () => {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState<SignupFormErrorType | string | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { setUserData } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get("redirect") || searchParams.get("next") || "/";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFormError(null);
        setAuthError(null);
        setSuccessMessage(null);

        const form = new FormData(e.currentTarget);
        const name = form.get('name') as string;
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        const confirmPassword = form.get('confirm-password') as string;

        if (mode === 'signup') {
            const error = handleSignupFormError(email, password, confirmPassword);
            if (error.email || error.password || error.confirmPassword) {
                setFormError(error.email || error.password || error.confirmPassword);
                setLoading(false);
                return;
            }
        }

        try {
            if (mode === 'login') {
                const response = await loginAction(email, password);

                if (response.errorMessage) {
                    setAuthError(response.errorMessage);
                } else if ('user' in response) {
                    setUserData(response.user ?? null);
                    router.push(redirectPath);
                }
            } else {
                const response = await signUpAction(email, password, name);

                if (response.errorMessage) {
                    setAuthError(response.errorMessage);
                } else if ('message' in response) {
                    setSuccessMessage(response.message);
                }
            }
        } catch (error) {
            setAuthError("An unexpected error occurred, Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // login();
        router.push(redirectPath);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-dark-950 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div className="relative z-10 w-full max-w-lg">
                <div className="text-center my-8 flex items-center justify-center">
                    <div
                        className="inline-flex p-4 rounded-3xl bg-brand-500/10 dark:bg-brand-500/5 text-brand-600 dark:text-brand-400"
                    >
                        <Bot size={48} />
                    </div>
                    <div className='p-4'>
                        <h1
                            className="text-4xl font-black text-slate-900 dark:text-white mb-2"
                        >
                            {mode === 'login' ? 'Welcome Back' : 'Join the Future'}
                        </h1>
                        <p
                            className="text-slate-500 dark:text-gray-400 font-medium"
                        >
                            {mode === 'login' ? 'Continue your AI engineering journey' : 'Start learning autonomous software today'}
                        </p>
                    </div>
                </div>

                <div
                    className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-2xl mb-10">
                        <button
                            onClick={() => setMode('login')}
                            className={`flex-1 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${mode === 'login' ? 'bg-white dark:bg-white/10 text-brand-600 dark:text-white shadow-sm' : 'text-slate-500 dark:text-gray-500'}`}
                            type="button"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setMode('signup')}
                            className={`flex-1 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${mode === 'signup' ? 'bg-white dark:bg-white/10 text-brand-600 dark:text-white shadow-sm' : 'text-slate-500 dark:text-gray-500'}`}
                            type="button"
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {formError && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-400 p-3 rounded-xl flex items-center gap-2 text-sm font-bold animate-shake">
                                <AlertCircle size={18} />
                                <p>{typeof formError === 'string' ? formError : Object.values(formError).find(Boolean)}</p>
                            </div>
                        )}
                        {authError && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-400 p-3 rounded-xl flex items-center gap-2 text-sm font-bold animate-shake">
                                <AlertCircle size={18} />
                                <p>{authError}</p>
                            </div>
                        )}
                        {successMessage && (
                            <div className="bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400 p-3 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in">
                                <CheckCircle size={18} />
                                <p>{successMessage}</p>
                            </div>
                        )}
                        {mode === 'signup' && (
                            <div className="space-y-6 overflow-hidden animate-fade-in">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-black tracking-widest text-slate-400 dark:text-gray-500 ml-1">Full Name</label>
                                    <div className="relative group flex items-center">
                                        <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required={mode === 'signup'}
                                            className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white outline-none focus:border-brand-500 dark:focus:border-brand-500/50 transition-all font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-black tracking-widest text-slate-400 dark:text-gray-500 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white outline-none focus:border-brand-500 dark:focus:border-brand-500/50 transition-all font-medium"
                                    placeholder="connect@sshsofttech.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label htmlFor="password" className="text-xs font-black tracking-widest text-slate-400 dark:text-gray-500">Password</label>
                                {mode === 'login' && (
                                    <button type="button" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline cursor-pointer">
                                        Forgot Password?
                                    </button>
                                )}
                            </div>
                            <div className="relative group">
                                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-10 text-slate-900 dark:text-white outline-none focus:border-brand-500 dark:focus:border-brand-500/50 transition-all font-medium"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {mode === 'signup' && (
                            <div className="space-y-6 overflow-hidden animate-fade-in">
                                <div className="space-y-2">
                                    <label htmlFor="confirm-password" className="text-xs font-black tracking-widest text-slate-400 dark:text-gray-500 ml-1">Confirm Password</label>
                                    <div className="relative group">
                                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        <input
                                            id="confirm-password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirm-password"
                                            required={mode === 'signup'}
                                            className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-10 text-slate-900 dark:text-white outline-none focus:border-brand-500 dark:focus:border-brand-500/50 transition-all font-medium"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-light hover:bg-brand-light/80 disabled:bg-brand-light/50 text-white py-3 rounded-xl font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Google Auth */}
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/10 text-center">
                        <div className="flex gap-4">
                            <button
                                onClick={handleGoogleLogin}
                                className="flex-1 py-3 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <GoogleIcon />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-20">
                <Sparkles size={300} className="text-brand-500/10" />
            </div>
        </div>
    );
}

const AuthPage = () => {
    return (
        <Suspense fallback={<div></div>}>
            <AuthForm />
        </Suspense>
    );
};

export default AuthPage;