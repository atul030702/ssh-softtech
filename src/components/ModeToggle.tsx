"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return (
            <button className="relative h-9 w-9 flex items-center justify-center cursor-pointer opacity-0" title="Toggle Theme" type="button" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative h-9 w-9 flex items-center justify-center cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg"
            title="Toggle Theme"
            type="button"
        >
            {resolvedTheme === "dark" ? (
                <RiSunLine size={18} className="text-yellow-300 transition-all dark:rotate-0 rotate-90" />
            ) : (
                <RiMoonLine size={18} className="text-slate-700 transition-all rotate-0 dark:-rotate-90" />
            )}
        </button>
    );
}

export default ModeToggle;