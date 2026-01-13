"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useState, Suspense } from "react";

function SignupForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { login } = useAuth(); // Assuming signup also logs in for this demo
    const redirectPath = searchParams.get("redirect") || "/";
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            login(); // Simulate signup and login
            router.push(redirectPath);
        } catch (error) {
            setErrorMessage("An error occurred during signup.");
        }
    };

    const handleGoogleSignup = () => {
        login();
        router.push(redirectPath);
    }

    return (
        <div className="grid gap-6">
            <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 font-medium"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                </svg>
                Sign up with Google
            </button>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-50 dark:bg-black px-2 text-slate-500 dark:text-slate-500">
                        Or continue with
                    </span>
                </div>
            </div>

            <form className="grid gap-4" onSubmit={handleSignup}>
                <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name
                    </label>
                    <input
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="name"
                        autoCorrect="off"
                        className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all duration-200"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                    </label>
                    <input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all duration-200"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white transition-all duration-200"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-600 text-white hover:bg-brand-700 h-11 px-8 w-full shadow-lg shadow-brand-500/20"
                >
                    Create account
                </button>
            </form>

            <p className="px-8 text-center text-sm text-slate-600 dark:text-slate-400">
                By clicking continue, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-brand-600 dark:hover:text-brand-500">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline underline-offset-4 hover:text-brand-600 dark:hover:text-brand-500">
                    Privacy Policy
                </Link>
                .
            </p>

            <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                Already have an account?{" "}
                <Link
                    href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
                    className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-500 dark:hover:text-brand-400"
                >
                    Sign in
                </Link>
            </div>
        </div>
    )
}

const SignupPage = () => {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Column - Branding/Info */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-white dark:bg-dark-950 border-r border-slate-200 dark:border-slate-800 relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                    >
                        <MoveLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Join the future of <br />
                        <span className="text-brand-600 dark:text-brand-500">Intelligent Tech</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Create an account to access our suite of AI-powered tools and services designed to scale with your ambition.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                            <div className="text-2xl font-bold text-brand-600 dark:text-brand-500 mb-1">10k+</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                            <div className="text-2xl font-bold text-brand-600 dark:text-brand-500 mb-1">99.9%</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-sm text-slate-500 dark:text-slate-500">
                    © {new Date().getFullYear()} SSH Softtech. All rights reserved.
                </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className="flex items-center justify-center p-6 sm:p-12 bg-slate-50 dark:bg-black">
                <div className="w-full max-w-[440px] space-y-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Create an account
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            Enter your details below to get your free account
                        </p>
                    </div>

                    <Suspense fallback={<div>Loading...</div>}>
                        <SignupForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;