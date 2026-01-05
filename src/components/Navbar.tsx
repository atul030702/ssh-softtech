"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

import ModeToggle from "./ModeToggle";
import { navItems } from "../utils/constants";

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeLabel = navItems.find(item => item.href === pathname)?.label;

    const handleNavigation = () => {
        setMobileMenuOpen(false);
    };

    const renderNavItem = (item: { href: string; label: string }, isMobile = false) => {
        const isActive = activeLabel === item.label;

        const baseClassName = "text-sm font-medium transition-all cursor-pointer";
        const mobileClassName = `block w-full px-4 py-3 rounded-xl ${isActive
            ? 'bg-brand-50 dark:bg-white/10 text-brand-600 dark:text-white font-semibold'
            : 'text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand-600 dark:hover:text-white'
            }`;
        const desktopClassName = `border-b-2 ${isActive
            ? 'text-brand-600 dark:text-white border-brand-600 dark:border-brand-600'
            : 'text-slate-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white border-transparent'
            }`;

        return (
            <Link
                key={item.label}
                href={item.href}
                className={`${baseClassName} ${isMobile ? mobileClassName : desktopClassName}`}
                onClick={handleNavigation}
            >
                {item.label}
            </Link>
        );
    };

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 h-4 z-40 backdrop-blur-md transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'max-w-7xl py-4 sm:mx-auto top-2 sm:top-4 left-2 right-2 rounded-xl bg-white/80 dark:bg-dark-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none'
                    : 'max-w-full bg-transparent py-4 sm:py-6 top-0 left-0 right-0'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/"
                            className="flex items-center font-bold text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <>
                                <Image
                                    src="/ssh_dark.png"
                                    alt="ssh logo"
                                    height={40}
                                    width={40}
                                    className="hidden dark:block mr-2 object-contain"
                                    priority
                                />
                                <Image
                                    src="/ssh_light.png"
                                    alt="ssh logo"
                                    height={40}
                                    width={40}
                                    className="block dark:hidden mr-2 object-contain"
                                    priority
                                />
                            </>
                            <span className="text-brand-light dark:text-brand-dark font-extrabold">SSH</span>
                            &nbsp;SOFTTECH
                        </Link>

                        <div className="hidden md:flex items-center gap-4 md:gap-8">
                            {navItems.map((item) => renderNavItem(item, false))}
                            <ModeToggle />
                        </div>

                        <div className="md:hidden flex items-center gap-4">
                            <ModeToggle />
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-slate-100 dark:bg-[#050B14] border-b border-gray-200 dark:border-white/10 py-4 px-4 flex flex-col gap-2 shadow-2xl">
                        {navItems.map((item) => renderNavItem(item, true))}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
