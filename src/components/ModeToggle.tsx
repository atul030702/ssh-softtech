
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!resolvedTheme) {
        return <div className="h-9 w-9"></div>;
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative h-9 w-9 flex items-center justify-center cursor-pointer"
            title="Toggle Theme"
            type="button"
        > 
            {resolvedTheme === "dark" ? (
                <RiSunLine size={18} className="text-yellow-300" />
            ) : (
                <RiMoonLine size={18} />
            )}
        </button>
    );
}

export default ModeToggle;