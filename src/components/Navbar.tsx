"use client"

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { navItems } from "../utils/constants";
import ModeToggle from "./ModeToggle";

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [currentHash, setCurrentHash] = useState<string>(() => {
        if(typeof window !== 'undefined') {
            return window.location.hash;
        }
        return '';
    });

    // Subscribe to hash changes
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Derive active tab from pathname and hash
    const activeTab = useMemo(() => {
        if (currentHash) {
            const matchingItem = navItems.find(item => item.href === currentHash);
            return matchingItem?.label || '';
        }
        
        const matchingItem = navItems.find(item => item.href === pathname);
        return matchingItem?.label || '';
    }, [pathname, currentHash]);

    const isHashLink = (href: string): boolean => href.startsWith('#');

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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link 
            href="/" 
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
            >
            <span className="text-blue-600 dark:text-blue-400 transition-colors">
                SSH
            </span>{' '}SOFTTECH
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
                isHashLink(item.href) ? (
                <a 
                    href={item.href}
                    key={item.label}
                    onClick={() => handleTabClick(item.label, item.href)}
                    className={`relative pb-1 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive(item)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                    {item.label}
                    {isActive(item) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                </a>
                ) : (
                <Link 
                    href={item.href}
                    key={item.href}
                    onClick={() => handleTabClick(item.label, item.href)}
                    className={`relative pb-1 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive(item)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                    {item.label}
                    {isActive(item) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                </Link>
                )
            ))}
            </div>

            {/* Dark Mode Toggle & Hamburger */}
            <div className="flex items-center gap-3">
                <ModeToggle />

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                    <RiCloseLine className="w-6 h-6" />
                    ) : (
                    <RiMenuLine className="w-6 h-6" />
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Menu - Fixed positioning */}
        {mobileMenuOpen && (
            <>
                {/* Backdrop */}
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ top: '73px' }}
                />
            
                {/* Menu Panel */}
                <div className="fixed right-0 top-18 w-64 h-max bg-white dark:bg-gray-900 rounded-bl-lg backdrop-blur-xl border-l border-gray-200 dark:border-gray-700 shadow-2xl lg:hidden overflow-y-auto">
                    <div className="flex flex-col p-5 gap-1">
                        {navItems.map((item) => (
                            isHashLink(item.href) ? (
                                <a 
                                    href={item.href}
                                    key={item.label}
                                    onClick={() => handleTabClick(item.label, item.href)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(item)
                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link 
                                    href={item.href}
                                    key={item.href}
                                    onClick={() => handleTabClick(item.label, item.href)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(item)
                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </>
        )}
    </nav>
  );
};

export default Navbar;
