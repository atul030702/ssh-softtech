"use client"

// import { useState, useEffect, useMemo } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { RiMenuLine, RiCloseLine } from "@remixicon/react";
// import { navItems } from "../utils/constants";
// import ModeToggle from "./ModeToggle";

// interface NavItem {
//   label: string;
//   href: string;
// }

// const Navbar = () => {
//     const pathname = usePathname();
//     const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
//     const [currentHash, setCurrentHash] = useState<string>(() => {
//         if(typeof window !== 'undefined') {
//             return window.location.hash;
//         }
//         return '';
//     });

//     // Subscribe to hash changes
//     useEffect(() => {
//         const handleHashChange = () => {
//             setCurrentHash(window.location.hash);
//         };

//         window.addEventListener('hashchange', handleHashChange);
//         return () => window.removeEventListener('hashchange', handleHashChange);
//     }, []);

//     // Derive active tab from pathname and hash
//     const activeTab = useMemo(() => {
//         if (currentHash) {
//             const matchingItem = navItems.find(item => item.href === currentHash);
//             return matchingItem?.label || '';
//         }
        
//         const matchingItem = navItems.find(item => item.href === pathname);
//         return matchingItem?.label || '';
//     }, [pathname, currentHash]);

//     const isHashLink = (href: string): boolean => href.startsWith('#');

//     const handleTabClick = (label: string, href: string): void => {
//         setMobileMenuOpen(false);
        
//         // Smooth scroll for hash links
//         if (isHashLink(href)) {
//             const element = document.querySelector(href);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     };

//     const isActive = (item: NavItem): boolean => {
//         if (isHashLink(item.href)) {
//         return activeTab === item.label;
//         }
//         return pathname === item.href || activeTab === item.label;
//     };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//             {/* Logo */}
//             <Link 
//             href="/" 
//             className="text-2xl font-bold hover:opacity-80 transition-opacity"
//             >
//             <span className="text-blue-600 dark:text-blue-400 transition-colors">
//                 SSH
//             </span>{' '}SOFTTECH
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//                 isHashLink(item.href) ? (
//                 <a 
//                     href={item.href}
//                     key={item.label}
//                     onClick={() => handleTabClick(item.label, item.href)}
//                     className={`relative pb-1 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
//                     isActive(item)
//                         ? 'text-blue-600 dark:text-blue-400'
//                         : 'text-gray-700 dark:text-gray-300'
//                     }`}
//                 >
//                     {item.label}
//                     {isActive(item) && (
//                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
//                     )}
//                 </a>
//                 ) : (
//                 <Link 
//                     href={item.href}
//                     key={item.href}
//                     onClick={() => handleTabClick(item.label, item.href)}
//                     className={`relative pb-1 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
//                     isActive(item)
//                         ? 'text-blue-600 dark:text-blue-400'
//                         : 'text-gray-700 dark:text-gray-300'
//                     }`}
//                 >
//                     {item.label}
//                     {isActive(item) && (
//                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
//                     )}
//                 </Link>
//                 )
//             ))}
//             </div>

//             {/* Dark Mode Toggle & Hamburger */}
//             <div className="flex items-center gap-3">
//                 <ModeToggle />

//                 <button
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
//                     aria-label="Toggle menu"
//                 >
//                     {mobileMenuOpen ? (
//                     <RiCloseLine className="w-6 h-6" />
//                     ) : (
//                     <RiMenuLine className="w-6 h-6" />
//                     )}
//                 </button>
//             </div>
//         </div>

//         {/* Mobile Menu - Fixed positioning */}
//         {mobileMenuOpen && (
//             <>
//                 {/* Backdrop */}
//                 <div 
//                     className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
//                     onClick={() => setMobileMenuOpen(false)}
//                     style={{ top: '73px' }}
//                 />
            
//                 {/* Menu Panel */}
//                 <div className="fixed right-0 top-18 w-64 h-max bg-white dark:bg-gray-900 rounded-bl-lg backdrop-blur-xl border-l border-gray-200 dark:border-gray-700 shadow-2xl lg:hidden overflow-y-auto">
//                     <div className="flex flex-col p-5 gap-1">
//                         {navItems.map((item) => (
//                             isHashLink(item.href) ? (
//                                 <a 
//                                     href={item.href}
//                                     key={item.label}
//                                     onClick={() => handleTabClick(item.label, item.href)}
//                                     className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
//                                     isActive(item)
//                                         ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
//                                         : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                                     }`}
//                                 >
//                                     {item.label}
//                                 </a>
//                             ) : (
//                                 <Link 
//                                     href={item.href}
//                                     key={item.href}
//                                     onClick={() => handleTabClick(item.label, item.href)}
//                                     className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
//                                     isActive(item)
//                                         ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
//                                         : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                                     }`}
//                                 >
//                                     {item.label}
//                                 </Link>
//                             )
//                         ))}
//                     </div>
//                 </div>
//             </>
//         )}
//     </nav>
//   );
// };

// export default Navbar;

interface NavItem {
  label: string;
  href: string;
}

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import ModeToggle from "./ModeToggle";
import { navItems } from "../utils/constants";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState<string>(() => {
        if(typeof window !== 'undefined') {
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                ? 'max-w-7xl py-4 mx-auto rounded-bl-xl rounded-br-xl bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none' 
                : 'max-w-full bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/"
                        className="flex items-center gap-2 font-bold text-xl tracking-tight"
                    >
                        <span className="text-brand-600 dark:text-brand-500 text-2xl">SSH</span>
                        <span className="text-slate-900 dark:text-white">SOFTTECH</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isHashItem = isHashLink(item.href);
                            const isHomePage = pathname === homeRoute;
                            const activeClass = isActive(item) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300';
                            const baseClass = `text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors relative group ${activeClass}`;
                            
                            // If home route: show anchor tags for hash links, Link component for non-hash
                            if (isHomePage) {
                                return isHashItem ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={baseClass}
                                        onClick={() => handleTabClick(item.label, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={baseClass}
                                        onClick={() => handleTabClick(item.label, item.href)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }
                            
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
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-white/10 py-4 px-4 flex flex-col gap-4 shadow-2xl">
                    {navItems.map((item) => {
                        const isHashItem = isHashLink(item.href);
                        const isHomePage = pathname === homeRoute;
                        const activeClass = isActive(item) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300';
                        const baseClass = `text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors relative group ${activeClass}`;
                        
                        // If home route: show anchor tags for hash links, Link component for non-hash
                        if (isHomePage) {
                            return isHashItem ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={baseClass}
                                    onClick={() => handleTabClick(item.label, item.href)}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={baseClass}
                                    onClick={() => handleTabClick(item.label, item.href)}
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                        
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
