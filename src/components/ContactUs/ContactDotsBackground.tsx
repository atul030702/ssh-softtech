"use client";

import { useState } from 'react';
import { motion } from 'motion/react';

const ContactDotsBackground = () => {
    const [hoveredDot, setHoveredDot] = useState<number | null>(null);

    const dots = Array.from(
        {
            length: 150,
        },
        (_, i) => i,
    );

    return (
        <div className="absolute top-20 left-4 inset-0 opacity-30">
            <div className="relative w-full h-full">
                {dots.map((dot) => {
                    const x = (dot % 15) * 80;
                    const y = Math.floor(dot / 15) * 80;
                    const isHovered = hoveredDot === dot;

                    return (
                        <motion.div
                            key={dot}
                            className="absolute w-2 h-2 rounded-full bg-brand-light dark:bg-brand-dark cursor-pointer z-0"
                            style={{
                                left: x,
                                top: y,
                            }}
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                scale: isHovered ? 2.5 : 1,
                                opacity: isHovered ? 1 : 0.3,
                            }}
                            transition={{
                                duration: 0.2, // Consistent duration for hover enter/exit
                            }}
                            onMouseEnter={() => setHoveredDot(dot)}
                            onMouseLeave={() => setHoveredDot(null)}
                            whileHover={{
                                boxShadow: '0 0 20px rgba(80, 88, 156, 0.8)', // Matching brand-light color approximately
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default ContactDotsBackground;
