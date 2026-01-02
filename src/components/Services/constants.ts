import React from 'react';
import { Globe, Smartphone, Code, ShoppingCart, Cloud, BrainCircuit, MessageSquare, Layout, ShoppingBag } from 'lucide-react';

export const servicesData = [
    {
        icon: React.createElement(BrainCircuit, { size: 28 }),
        title: "Custom AI Agents & Chatbots",
        description: "Deploy intelligent agents that understand context, execute complex business logic, and autonomously resolve customer queries 24/7.",
        color: "bg-brand-light"
    },
    {
        icon: React.createElement(Globe, { size: 28 }),
        title: "AI-Powered Web Apps",
        description: "Next-gen web platforms integrated with predictive analytics and personalized user experiences, built on robust, scalable architectures.",
        color: "bg-brand-light"
    },
    {
        icon: React.createElement(Smartphone, { size: 28 }),
        title: "Intelligent Mobile Solutions",
        description: "Smart mobile applications with on-device AI capabilities, ensuring seamless performance and adaptive user interfaces.",
        color: "bg-brand-light"
    },
    {
        icon: React.createElement(Code, { size: 28 }),
        title: "Enterprise AI Software",
        description: "Bespoke software ecosystems driven by machine learning algorithms to automate workflows and optimize operational efficiency.",
        color: "bg-brand-light"
    },
    {
        icon: React.createElement(ShoppingCart, { size: 28 }),
        title: "Smart E-commerce",
        description: "Conversion-focused online stores featuring AI-driven recommendations, dynamic pricing, and intelligent inventory management.",
        color: "bg-brand-light"
    },
];

export const servicesPageData = [
    {
        id: 1,
        title: "Custom AI Agents & Chatbots",
        description: "Beyond simple scripts. We build context-aware AI agents that integrate deeply with your CRM and internal tools to automate complex workflows and drive engagement.",
        features: [
            "Custom RAG Pipelines",
            "Autonomous Task Execution",
            "Context-Aware Conversations",
            "Multi-Agent Orchestration"
        ],
        icon: React.createElement(MessageSquare, { size: 32 }),
        color: "from-blue-600/10 to-cyan-500/10",
        border: "border-blue-500/20",
        delay: 0.1
    },
    {
        id: 2,
        title: "AI-Native Web Platforms",
        description: "We engineer web applications that think. From predictive dashboards to personalized content engines, we embed intelligence into every layer of your digital presence.",
        features: [
            "AI-Driven Personalization",
            "Predictive Analytics Integration",
            "Self-Optimizing UX",
            "Scalable Cloud Architectures"
        ],
        icon: React.createElement(Layout, { size: 32 }),
        color: "from-purple-600/10 to-pink-500/10",
        border: "border-purple-500/20",
        delay: 0.2
    },
    {
        id: 3,
        title: "Enterprise AI Software",
        description: "Transform your operations with bespoke software that learns from your data. We build systems that automate decision-making and optimize resource allocation in real-time.",
        features: [
            "Automated Decision Engines",
            "Process Mining & Optimization",
            "Predictive Maintenance",
            "Secure AI Infrastructure"
        ],
        icon: React.createElement(Code, { size: 32 }),
        color: "from-amber-600/10 to-orange-500/10",
        border: "border-amber-500/20",
        delay: 0.3
    },
    {
        id: 4,
        title: "Smart Commerce Systems",
        description: "Turn your e-commerce store into a sales machine with AI. Implement semantic search, visual discovery, and hyper-personalized shopping journeys that convert.",
        features: [
            "Semantic Product Search",
            "Dynamic Pricing Models",
            "Visual Search & Discovery",
            "Automated Inventory Intelligence"
        ],
        icon: React.createElement(ShoppingBag, { size: 32 }),
        color: "from-emerald-600/10 to-teal-500/10",
        border: "border-emerald-500/20",
        delay: 0.4
    }
];