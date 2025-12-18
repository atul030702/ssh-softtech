import { values, stats } from './constants';
import ScrollReveal from '../ui/ScrollReveal';

const AboutSection = () => {

    return (
        <section id="about" className="py-28 bg-white dark:bg-dark-950">
            <div className="container max-w-7xl mx-auto px-4 mb-8">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        The SSH
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-brand-light dark:from-blue-400 dark:via-indigo-500 dark:to-brand-light animate-gradient-x">
                            {' '}Softtech Story
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
                        SSH Softtech has been at the forefront of Artificial Intelligence, digital
                        innovation, and helping businesses transform their ideas into powerful
                        software solutions.
                    </p>
                </ScrollReveal>
                {/* Stats Section */}
                <ScrollReveal
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16 bg-brand-light/80 dark:bg-brand-dark/80 px-6 md:px-12 py-8 rounded-3xl"
                    delay={0.2}
                >
                    {stats.map((stat, index) => (
                        <ScrollReveal
                            key={index}
                            className="text-center"
                            delay={0.2 + (index * 0.1)}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-50 dark:text-white/80 font-medium">
                                {stat.label}
                            </div>
                        </ScrollReveal>
                    ))}
                </ScrollReveal>
                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <ScrollReveal
                            key={index}
                            className="feature-card p-8 group"
                            delay={index * 0.1}
                        >
                            <div className="flex items-start">
                                <div
                                    className="mr-6 mt-1 p-3 rounded-xl bg-brand-light/10 dark:bg-brand-dark/10 group-hover:bg-brand-light/20 dark:group-hover:bg-brand-dark/20 text-brand-light dark:text-brand-dark hover:rotate-360 transition-transform duration-500"
                                >
                                    {value.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;