"use client";

import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    delay?: number;
}

export default function ScrollReveal({
    children,
    className = "",
    threshold = 0.1,
    delay = 0,
    ...props
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger only once
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    // Construct the transition delay style
    const style = {
        transitionDelay: `${delay}s`,
    };

    return (
        <div
            ref={ref}
            style={style}
            className={`transition-all duration-700 ease-out transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
