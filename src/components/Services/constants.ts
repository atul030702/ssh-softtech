import React from 'react';
import { Globe, Smartphone, Code, ShoppingCart, Cloud, BrainCircuit, MessageSquare, Layout, ShoppingBag } from 'lucide-react';

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

export const servicesPageData = [
    {
        id: 1,
        title: "Custom Chatbot Development",
        description: "Get custom chatbots tailored for your use case & integrated with your existing & preferred software system. We build agents that understand context and execute complex business logic.",
        features: [
            "Custom RAG Pipelines",
            "Legacy System Integration",
            "Context-Aware Logic",
            "Multi-platform Deployment"
        ],
        icon: React.createElement(MessageSquare, { size: 32 }),
        color: "from-blue-600/10 to-cyan-500/10",
        border: "border-blue-500/20",
        delay: 0.1
    },
    {
        id: 2,
        title: "AI Powered Web + Mobile Dev",
        description: "Custom, responsive websites and web applications built with modern technologies. We create stunning, high-performance digital experiences for iOS and Android, focusing on intuitive design.",
        features: [
            "Responsive Web Architectures",
            "Native iOS & Android Apps",
            "High-performance Vitals",
            "AI-driven User Journeys"
        ],
        icon: React.createElement(Layout, { size: 32 }),
        color: "from-purple-600/10 to-pink-500/10",
        border: "border-purple-500/20",
        delay: 0.2
    },
    {
        id: 3,
        title: "Custom Software Solutions",
        description: "Bespoke software solutions tailored to your specific business needs and complex operational challenges. Your vision combined with our code to deliver a solution that works exactly as you want.",
        features: [
            "Complex Backend Logic",
            "Operational Automation",
            "Bespoke System Architecture",
            "Scalable Infrastructure"
        ],
        icon: React.createElement(Code, { size: 32 }),
        color: "from-amber-600/10 to-orange-500/10",
        border: "border-amber-500/20",
        delay: 0.3
    },
    {
        id: 4,
        title: "E-commerce Development",
        description: "Scalable online stores with secure payment gateways, seamless inventory management, and powerful sales drivers. Be it chat storefronts or AI-assisted e-shopping.",
        features: [
            "Secure Payment Systems",
            "AI Assisted Shopping",
            "Smart Inventory Logic",
            "Conversion Optimized UI"
        ],
        icon: React.createElement(ShoppingBag, { size: 32 }),
        color: "from-emerald-600/10 to-teal-500/10",
        border: "border-emerald-500/20",
        delay: 0.4
    }
];