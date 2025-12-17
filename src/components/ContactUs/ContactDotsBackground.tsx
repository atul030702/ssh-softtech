const ContactDotsBackground = () => {
    // We can generate the dots statically or just memoize them, 
    // but since this component might be lazy loaded, simple generation is fine.
    const dots = Array.from({ length: 150 }, (_, i) => i);

    return (
        <div className="absolute top-20 left-4 inset-0 opacity-30 select-none pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto">
                {dots.map((dot) => {
                    const x = (dot % 15) * 80;
                    const y = Math.floor(dot / 15) * 80;

                    return (
                        <div
                            key={dot}
                            className="absolute w-2 h-2 rounded-full bg-brand-light dark:bg-brand-dark cursor-pointer transition-all duration-200 ease-out hover:scale-[2.5] opacity-30 hover:opacity-100 hover:shadow-[0_0_20px_rgba(80,88,156,0.8)]"
                            style={{
                                left: x,
                                top: y,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ContactDotsBackground;
