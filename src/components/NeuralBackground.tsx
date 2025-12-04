"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { ParticleClass } from "../utils/particleAnimation";

function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [hoveredCell, setHoveredCell] = useState<{
        x: number
        y: number
    } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const particleBg = new ParticleClass(canvas);
        particleBg.start();

        return () => particleBg.destroy();
    }, []);

    const handleGridMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        // You should calculate the cell size dynamically or keep it consistent (e.g., 60px)
        const cellSize = 60; 
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);
        setHoveredCell({ x, y });
    };

    const handleGridMouseLeave = () => {
        setHoveredCell(null);
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full transition-all duration-300"
            />
            <div
                ref={gridRef}
                className="absolute inset-0 opacity-20"
                onMouseMove={handleGridMouseMove}
                onMouseLeave={handleGridMouseLeave}
                style={{
                // Ensure the background size matches the cell size used in handleGridMouseMove (60px)
                backgroundImage:
                    'linear-gradient(rgba(77, 148, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 148, 255, 0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            >
                {hoveredCell && (
                    <motion.div
                        className="absolute pointer-events-none"
                        style={{
                            // Use the same cell size (60) for positioning the highlight
                            left: hoveredCell.x * 60,
                            top: hoveredCell.y * 60,
                            width: 60,
                            height: 60,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        <div className="w-full h-full bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-lg" />
                    </motion.div>
                )}
            </div>
        </>
    );
}

export default NeuralBackground;