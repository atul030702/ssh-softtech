"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import ModeToggle from "./ModeToggle";
import { navItems } from "../utils/constants";

interface NavItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            return window.location.hash;
        }
        return '';
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const activeTab = useMemo(() => {
        if (currentHash) {
            const matchingItem = navItems.find(item => item.href === currentHash);
            return matchingItem?.label || '';
        }
        const matchingItem = navItems.find(item => item.href === pathname);

        return matchingItem?.label || '';
    }, [pathname, currentHash]);

    const isHashLink = (href: string): boolean => href.startsWith('#');
    const homeRoute = '/';

    const handleTabClick = (label: string, href: string): void => {
        setMobileMenuOpen(false);

        // Smooth scroll for hash links
        if (isHashLink(href)) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isActive = (item: NavItem): boolean => {
        if (isHashLink(item.href)) {
            return activeTab === item.label;
        }
        return pathname === item.href || activeTab === item.label;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'max-w-7xl py-4 mx-auto rounded-bl-xl rounded-br-xl bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none'
                : 'max-w-full bg-transparent py-4 sm:py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/"
                        className="flex items-center gap-2 font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                    >
                        <span className="text-brand-light dark:text-brand-dark font-extrabold">SSH</span>
                        <span className="text-slate-900 dark:text-white">SOFTTECH</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isHashItem = isHashLink(item.href);
                            const isHomePage = pathname === homeRoute;
                            const activeClass = isActive(item) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300';
                            const baseClass = `text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors relative group ${activeClass}`;

                            // Determine the correct href
                            // If it's a hash link and we are NOT on home, prepend "/" to make it navigate home first
                            // If it's a page link, use as is
                            const href = isHashItem && !isHomePage ? `/${item.href}` : item.href;

                            return isHomePage && isHashItem ? (
                                <a
                                    key={item.label}
                                    href={href}
                                    className={baseClass}
                                    onClick={() => handleTabClick(item.label, href)}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={href}
                                    className={baseClass}
                                    onClick={() => handleTabClick(item.label, href)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ModeToggle />

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-100 dark:bg-[#050B14] border-b border-gray-200 dark:border-white/10 py-4 px-4 flex flex-col gap-4 shadow-2xl">
                    {navItems.map((item) => {
                        const isHashItem = isHashLink(item.href);
                        const isHomePage = pathname === homeRoute;
                        const activeClass = isActive(item) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300';
                        const baseClass = `text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors relative group ${activeClass}`;

                        const href = isHashItem && !isHomePage ? `/${item.href}` : item.href;
                        // If home route: show anchor tags for hash links, Link component for non-hash
                        return isHomePage && isHashItem ? (
                            <a
                                key={item.label}
                                href={href}
                                className={baseClass}
                                onClick={() => handleTabClick(item.label, href)}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                href={href}
                                className={baseClass}
                                onClick={() => handleTabClick(item.label, href)}
                            >
                                {item.label}
                            </Link>
                        );

                        // If NOT home route: show Link to "/" with label "Home" ONLY for first hash item, skip others
                        // Non-hash items stay as regular Links
                        if (!isHomePage && isHashItem) {
                            // Only render the first hash link as "Home"
                            const firstHashIndex = navItems.findIndex(i => isHashLink(i.href));
                            if (firstHashIndex === navItems.indexOf(item)) {
                                return (
                                    <Link
                                        key={item.label}
                                        href="/"
                                        className={baseClass}
                                        onClick={() => handleTabClick(item.label, item.href)}
                                    >
                                        Home
                                    </Link>
                                );
                            }
                            return null; // Skip other hash items
                        }

                        // Non-hash items on non-home routes
                        return !isHashItem ? (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={baseClass}
                                onClick={() => handleTabClick(item.label, item.href)}
                            >
                                {item.label}
                            </Link>
                        ) : null;
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
