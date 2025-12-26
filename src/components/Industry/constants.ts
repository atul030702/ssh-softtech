import React from "react";

import { BookOpen, HeartPulse, Building2, Truck, Plane, ShoppingBag } from 'lucide-react';

const industriesData = [
    { icon: React.createElement(BookOpen, { size: 24 }), name: "Education", color: "text-pink-500 bg-pink-500/10" },
    { icon: React.createElement(HeartPulse, { size: 24 }), name: "Healthcare", color: "text-rose-500 bg-rose-500/10" },
    { icon: React.createElement(Building2, { size: 24 }), name: "Real Estate", color: "text-amber-500 bg-amber-500/10" },
    { icon: React.createElement(Truck, { size: 24 }), name: "Logistics", color: "text-indigo-500 bg-indigo-500/10" },
    { icon: React.createElement(Plane, { size: 24 }), name: "Travel", color: "text-sky-500 bg-sky-500/10" },
    { icon: React.createElement(ShoppingBag, { size: 24 }), name: "E-commerce", color: "text-emerald-500 bg-emerald-500/10" },
];

// Duplicate the list to create a seamless loop
export const duplicatedIndustriesData = [...industriesData, ...industriesData, ...industriesData];