"use client"

import { motion } from "motion/react";

import NeuralBackground from "./NeuralBackground";
import { RiCodeSSlashFill, RiSmartphoneLine, RiCloudyLine, RiShoppingCart2Line, RiDatabase2Line, RiMindMap, RiSparklingFill } from "@remixicon/react";

const Hero = () => {
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors">
        {/* Technical Background */}
        <NeuralBackground />

        {/* Content Layer */}
        <div className="relative z-10">
            <section className="w-full py-20 md:py-40">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-5"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.2,
                                }}
                            >
                                <RiSparklingFill size={16} className="text-blue-600 dark:text-blue-500" />
                                <span className="text-sm font-medium">
                                    Chatbot | Generative AI | Custom Software
                                </span>
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors mb-8">
                                From Idea to Impact: Engineering Your {' '}
                                <div className="relative inline-block">
                                    <span className="relative z-10 text-white px-4">
                                        Digital Future
                                    </span>
                                    <span className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg transform -skew-x-6"></span>
                                </div>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl transition-colors">
                                Transform your vision into reality with our cutting-edge
                                software development, cloud solutions, and AI-powered
                                innovations.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-600/30 dark:shadow-blue-500/30">
                                Book a Demo
                            </button>
                            <a href="#services"
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                            <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-900"></div>
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-gray-900"></div>
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 border-2 border-white dark:border-gray-900"></div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                500+
                            </span>{' '}
                            clients trust us worldwide
                            </p>
                        </div>
                    </div>

                    {/* Right Visual Elements */}
                    <div className="relative h-[500px] hidden md:block">
                        {/* Floating Cards */}
                        <div className="absolute top-0 right-0 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 animate-float border border-blue-100 dark:border-gray-700 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                                <RiCodeSSlashFill className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                Web Development
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                Custom Solutions
                                </div>
                            </div>
                            </div>
                            <div className="space-y-2">
                            <div className="h-2 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full w-4/5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                Project Progress: 80%
                            </div>
                            </div>
                        </div>

                        <div className="absolute top-32 left-0 w-56 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-5 animate-float-delayed border border-blue-100 dark:border-gray-700 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                                    <RiSmartphoneLine className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                                    Mobile Apps
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                    iOS & Android
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 h-16 bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg"></div>
                                <div className="flex-1 h-16 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-20 right-12 w-60 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 animate-float border border-blue-100 dark:border-gray-700 transition-colors">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="aspect-square bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                                    <RiCloudyLine className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="aspect-square bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                                    <RiMindMap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="aspect-square bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center">
                                    <RiShoppingCart2Line className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div className="col-span-3 mt-2">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                        Cloud & AI Solutions
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Scalable Infrastructure
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-8 w-52 bg-linear-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl p-5 text-white animate-float-delayed">
                            <div className="flex items-center gap-3 mb-3">
                                <RiDatabase2Line className="w-8 h-8" />
                                <div>
                                    <div className="text-2xl font-bold">200+</div>
                                    <div className="text-sm text-blue-100 dark:text-blue-200">
                                        Projects Delivered
                                    </div>
                                </div>
                            </div>
                            <div className="h-1 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Hero;
