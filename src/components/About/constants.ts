import React from "react";

import { Target, Eye, Award, TrendingUp } from 'lucide-react';

export const values = [
    {
        icon: React.createElement(Target, { size: 32 }),
        title: 'Our Mission',
        description:
            'To empower businesses with innovative technology solutions that drive growth and transform digital experiences.',
    },
    {
        icon: React.createElement(Eye, { size: 32 }),
        title: 'Our Vision',
        description:
            'To be the leading software development partner recognized for excellence, innovation, and client success.',
    },
    {
        icon: React.createElement(Award, { size: 32 }),
        title: 'Our Values',
        description:
            'Excellence, integrity, innovation, and collaboration guide everything we do for our clients and team.',
    },
    {
        icon: React.createElement(TrendingUp, { size: 32 }),
        title: 'Our Approach',
        description:
            'Agile methodology combined with deep industry expertise ensures we deliver solutions that exceed expectations.',
    },
];