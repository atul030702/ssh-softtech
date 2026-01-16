"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    CreditCard,
    Lock,
    ShieldCheck,
    CheckCircle2,
    Loader2
} from 'lucide-react';

import { courses } from '@/components/CoursesOffered/constants';
import { useAuth } from '@/context/AuthContext';

const CheckoutPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isAuthenticated, loading: authLoading } = useAuth();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const courseId = searchParams.get('courseId');
    const course = courses.find(c => c.id === courseId);

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.push(`/login?next=/checkout?courseId=${courseId}`);
        }
    }, [isAuthenticated, authLoading, router, courseId]);

    if (authLoading || (!isAuthenticated && !course)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-950">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-950">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Course Not Found</h1>
                <button
                    onClick={() => router.push('/courses')}
                    className="text-blue-600 hover:underline"
                >
                    Browse Courses
                </button>
            </div>
        );
    }

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        //await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        setIsSuccess(true);

        // Redirect after showing success for a moment
        /*setTimeout(() => {
            router.push('/courses');
        }, 2000);*/
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-950 p-4">
                <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-4 border border-gray-100 dark:border-gray-800">
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Successful!</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        You have successfully subscribed to <strong>{course.title}</strong>.
                    </p>
                    <p className="text-sm text-gray-500">Redirecting to courses page...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-950 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 my-8 text-gray-900 dark:text-white">
                    <ShieldCheck className="text-green-600" />
                    <h1 className="text-2xl font-bold">Secure Checkout</h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Payment Form */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Details</h2>
                                <div className="flex gap-2 text-gray-400">
                                    <CreditCard size={24} />
                                    {/* Add more card icons if needed */}
                                </div>
                            </div>

                            <form onSubmit={handlePayment} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Cardholder Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Card Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                                            />
                                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Expiry
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="MM/YY"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                CVC
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="123"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-light/80 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed mt-8 cursor-pointer"
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Lock size={18} />
                                            Pay $10.00
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                                    <Lock size={12} />
                                    Payments are secure and encrypted
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="space-y-6 lg:order-last">
                        <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden sticky top-24">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-dark-900/50">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Order Summary</h2>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-20 w-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            Monthly Subscription
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Subtotal</span>
                                        <span>$10.00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Tax</span>
                                        <span>$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                                        <span className="font-bold text-gray-900 dark:text-white">Total</span>
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">$10.00<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mo</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border-t border-blue-100 dark:border-blue-900/20">
                                <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
                                    Recurring billing • Cancel anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
