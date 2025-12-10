"use client"

import React, { useEffect, useRef } from "react";

import { ParticleClass } from "../utils/particleAnimation";

function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const particleBg = new ParticleClass(canvas);
        particleBg.start();

        return () => particleBg.destroy();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-10 bottom-15 left-1/2 -translate-x-1/2 max-w-5xl max-h-1/2 transition-all duration-300"
        />
    );
}

export default NeuralBackground;