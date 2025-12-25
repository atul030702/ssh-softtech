import React from 'react';
import { 
    MessageSquare, Mic, FileSearch, Smartphone, Cloud, Database, Zap, 
    Laptop, Shield, BarChart3, Layers, Globe, Users, Headphones 
} from 'lucide-react';

export const mainProducts = [
    {
        title: "AI Chatbot",
        subtitle: "Document-Based Q&A",
        description: "Convert static documents into interactive knowledge systems. Our intelligent chatbot allows businesses to upload PDFs, manuals, and reports for instant, context-aware answers.",
        features: [
            "Natural Language Understanding",
            "PDF & Doc Knowledge Base",
            "Instant Multi-source Retrieval",
            "Context-Aware Conversations"
        ],
        icon: React.createElement(MessageSquare, { className: "text-blue-500", size: 32 }),
        color: "from-blue-600/20 to-cyan-500/20",
        image: "/chatbot.png",
        videoId: "qlMRQpaMqes?si=Ji9Zw8nzeq6csN9X"
    },
    {
        title: "AI Voice Agent",
        subtitle: "Call Automation",
        description: "Human-like voice solutions handling inbound and outbound calls. Automate scheduling, routing, and follow-ups while reducing operational costs by up to 60%.",
        features: [
            "Human-like Voice Synthesis",
            "24/7 Call Handling",
            "Automated Appointment Booking",
            "Intelligent Call Routing"
        ],
        icon: React.createElement(Mic, { className: "text-purple-500", size: 32 }),
        color: "from-purple-600/20 to-pink-500/20",
        image: "/voice_agent.png",
        videoId: "dPc3_8BZKIs?si=-d543HyL_5J-jw1Q"
    },
    {
        title: "Extract Agent",
        subtitle: "Intelligent Data Processing",
        description: "Eliminate manual entry with AI that reads handwritten forms, scanned documents, and invoices. Extract structured data directly into your CRM or database.",
        features: [
            "Handwriting Recognition",
            "Invoice Data Extraction",
            "Direct Database Integration",
            "Error-Correction AI"
        ],
        icon: React.createElement(FileSearch, { className: "text-emerald-500", size: 32 }),
        color: "from-emerald-600/20 to-teal-500/20",
        image: "/extract_agent.png",
        videoId: "CQeM37iB2KY?si=ETY0KquVQUJYfV_t"
    }
];

export const marketingData = [
    "Generate 10x more leads",
    "Solve 80% more queries",
    "Engage 70% more visitors",
    "Earn 90% more revenue",
];

export const stats = [
    { value: '10+', label: 'Countries Served' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '1M+', label: 'Requests Processed' },
    { value: '15+', label: 'Industry Sectors' },
];

export const integrations = [
  { name: 'WhatsApp', icon: React.createElement(Smartphone, { size: 20, className: "text-emerald-500" }) },
  { name: 'Salesforce', icon: React.createElement(Cloud, { size: 20, className: "text-sky-500" }) },
  { name: 'Bitrix24', icon: React.createElement(Database, { size: 20, className: "text-blue-500" }) },
  { name: 'Slack', icon: React.createElement(MessageSquare, { size: 20, className: "text-purple-500" }) },
  { name: 'n8n', icon: React.createElement(Zap, { size: 20, className: "text-orange-500" }) },
  { name: 'Shopify', icon: React.createElement(Laptop, { size: 20, className: "text-green-600" }) },
];

export const featureData = [
    { icon: React.createElement(Shield, { size: 24 }), title: "Zero-Leakage Privacy", desc: "Proprietary data is isolated and never used for training public models." },
    { icon: React.createElement(BarChart3, { size: 24 }), title: "Advanced Analytics", desc: "Real-time insights and usage metrics across all AI interactions." },
    { icon: React.createElement(Layers, { size: 24 }), title: "Multi-modal Support", desc: "Process text, audio, and visual documents in a single unified workflow." },
    { icon: React.createElement(Globe, { size: 24 }), title: "Global Scale", desc: "Distributed infrastructure ensuring low latency for users." },
    { icon: React.createElement(Users, { size: 24 }), title: "Multi-tenant Access", desc: "Granular permission controls for enterprise teams and departments." },
    { icon: React.createElement(Headphones, { size: 24 }), title: "Concierge Support", desc: "Dedicated engineering support for custom integration challenges." },
];