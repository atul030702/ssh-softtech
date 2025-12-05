import React from 'react';
import { Globe, Smartphone, Code, ShoppingCart, Cloud, BrainCircuit } from 'lucide-react';

export const servicesData = [
    {
        icon: React.createElement(Globe, { size: 28 }),
        title: "Web Development",
        description: "Custom, responsive websites and web applications built with modern technologies. We create stunning, high-performance digital experiences.",
        color: "bg-blue-500"
    },
    {
        icon: React.createElement(Smartphone, { size: 28 }),
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android, focusing on intuitive design and user engagement.",
        color: "bg-purple-500"
    },
    {
        icon: React.createElement(Code, { size: 28 }),
        title: "Custom Software",
        description: "Bespoke software solutions tailored to your specific business needs and complex operational challenges.",
        color: "bg-emerald-500"
    },
    {
        icon: React.createElement(ShoppingCart, { size: 28 }),
        title: "E-commerce Development",
        description: "Scalable online stores with secure payment gateways, seamless inventory management, and powerful sales drivers.",
        color: "bg-orange-500"
    },
    {
        icon: React.createElement(Cloud, { size: 28 }),
        title: "Cloud Computing",
        description: "Secure, scalable cloud infrastructure and migration services (AWS/Azure) for optimal cost-efficiency and performance.",
        color: "bg-sky-500"
    },
    {
        icon: React.createElement(BrainCircuit, { size: 28 }),
        title: "AI & Machine Learning",
        description: "Intelligent algorithms and predictive models that automate processes and unlock actionable insights from your data.",
        color: "bg-pink-500"
    }
];