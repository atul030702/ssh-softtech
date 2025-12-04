"use client"

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'motion/react';

import { RiCodeSSlashFill, RiSmartphoneLine, RiShoppingCart2Line, RiBrain3Fill, RiGlobalLine, RiCloudLine } from "@remixicon/react";

// --- 1. Define the Service Interface for Type Safety ---
interface Service {
  title: string
  description: string
  icon: React.ReactElement // Type for the icon component
  image: string
  color: string // Tailwind gradient class snippet
}

const NullSkeleton: React.FC = () => null;

// --- 2. Service Skeletons/Visuals (JSX remains the same, but definitions are clearer) ---
// These are illustrative components designed to look like a "skeleton"
// or a simplified visual representation of the service.
const WebDevSkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100">
    <div className="h-full w-full bg-gray-200/50 dark:bg-gray-800/50 rounded-lg shadow-inner flex flex-col justify-end p-2 border-t-4 border-blue-500">
      <div className="h-2 w-full bg-blue-500/70 mb-1 rounded-full animate-pulse"></div>
      <div className="h-1.5 w-1/2 bg-blue-500/70 mb-0.5 rounded-full animate-pulse"></div>
      <div className="flex justify-between mt-2">
        <div className="h-1 w-1/4 bg-blue-500/70 rounded-full animate-pulse"></div>
        <div className="h-1 w-1/5 bg-blue-500/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
)

const MobileAppSkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
    <div className="w-1/3 h-2/3 bg-gray-200/50 dark:bg-gray-800/50 rounded-xl shadow-2xl p-1 border-b-4 border-purple-500">
      <div className="h-1.5 w-4/5 mx-auto bg-purple-500/70 mt-1 rounded-full animate-pulse"></div>
      <div className="h-full w-full bg-white dark:bg-gray-700 rounded-lg mt-1 p-1">
        <div className="h-1/5 bg-purple-500/50 rounded animate-pulse"></div>
        <div className="h-1/12 bg-purple-500/70 my-1 rounded-full animate-pulse"></div>
        <div className="h-1/12 bg-purple-500/70 w-2/3 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
)

const CustomSoftwareSkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
    <div className="w-full h-full bg-gray-200/50 dark:bg-gray-800/50 rounded-xl shadow-xl flex flex-col p-4 border-l-4 border-green-500">
      <div className="text-sm text-green-500 font-mono mb-2">
        &gt; init_project...
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="h-2 bg-green-500/70 w-3/4 mb-2 rounded-full animate-pulse"></div>
        <div className="h-2 bg-green-500/70 w-full mb-2 rounded-full animate-pulse"></div>
        <div className="h-2 bg-green-500/70 w-2/3 mb-2 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
)

const EcommerceSkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end">
    <div className="w-full h-1/2 bg-gray-200/50 dark:bg-gray-800/50 rounded-t-xl shadow-inner p-2 border-t-4 border-orange-500">
      <div className="flex space-x-2 mb-2">
        <div className="w-1/3 h-12 bg-orange-500/70 rounded animate-pulse"></div>
        <div className="w-1/3 h-12 bg-orange-500/70 rounded animate-pulse"></div>
        <div className="w-1/3 h-12 bg-orange-500/70 rounded animate-pulse"></div>
      </div>
      <div className="h-2 bg-orange-500/70 w-1/2 rounded-full mx-auto animate-pulse"></div>
    </div>
  </div>
)

const CloudComputingSkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
    <div className="flex space-x-4">
      <div className="w-12 h-12 bg-indigo-500/50 rounded-full animate-pulse flex items-center justify-center border-2 border-indigo-500/70">
        <div className="w-4 h-4 bg-white/70 rounded-full"></div>
      </div>
      <div className="w-12 h-12 bg-indigo-500/50 rounded-full animate-pulse flex items-center justify-center border-2 border-indigo-500/70 translate-x-4">
        <div className="w-4 h-4 bg-white/70 rounded-full"></div>
      </div>
      <div className="w-12 h-12 bg-indigo-500/50 rounded-full animate-pulse flex items-center justify-center border-2 border-indigo-500/70 -translate-x-4">
        <div className="w-4 h-4 bg-white/70 rounded-full"></div>
      </div>
    </div>
  </div>
)

const AISkeleton = () => (
  <div className="absolute inset-0 p-4 opacity-20 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
    <div className="w-1/2 h-1/2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full shadow-2xl border-4 border-violet-500 flex items-center justify-center animate-pulse">
      <div className="w-1/4 h-1/4 bg-violet-500/70 rounded-full"></div>
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-violet-500/70 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-violet-500/70 rounded-full"></div>
    </div>
  </div>
)

// Map type definition
const serviceVisuals: Record<string, React.FC> = {
  'Web Development': WebDevSkeleton,
  'Mobile App Development': MobileAppSkeleton,
  'Custom Software': CustomSoftwareSkeleton,
  'E-commerce Development': EcommerceSkeleton,
  'Cloud Computing': CloudComputingSkeleton,
  'AI & ML Solutions': AISkeleton,
}

// --- 3. Bento Card Component with Props Interface ---
interface BentoCardProps {
  service: Service
  index: number
  variants: Variants
}

const BentoCard: React.FC<BentoCardProps> = ({ service, index, variants }) => {
  const ServiceVisual = serviceVisuals[service.title] || NullSkeleton

  // Determine the grid span based on the index to create the Bento effect
  const className = `
    relative p-8 rounded-3xl overflow-hidden shadow-xl
    bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
    group transition-all duration-500 hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-cyan-500/50
    ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''}  
    ${index === 5 ? 'lg:col-span-2 md:col-span-2' : 'col-span-1'}
  `
  
  // Style for the content overlay
  const contentStyle = `
    relative z-10 flex flex-col h-full 
    ${index === 0 ? 'md:flex-row md:items-center md:space-x-8' : ''}
    ${index === 5 ? 'lg:flex-row lg:items-center lg:space-x-8' : ''}
  `

  return (
    <motion.div
      className={className}
      variants={variants}
    >
      {/* Background Visual/Skeleton */}
      <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-100">
        <ServiceVisual />
      </div>

      {/* Main Content */}
      <div className={contentStyle}>
        {/* Icon & Image (if applicable for wider cards) */}
        <div className={`shrink-0 mb-4 ${index === 0 || index === 5 ? 'md:w-1/3' : ''}`}>
          <div className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center text-white p-3 shadow-lg 
                          bg-linear-to-br ${service.color}`}>
            {service.icon} 
          </div>
          {(index === 0 || index === 5) && (
            <div className="hidden md:block mt-4 w-full h-40 rounded-xl overflow-hidden shadow-lg">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className={`grow ${index === 0 || index === 5 ? 'md:w-2/3' : ''}`}>
          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}


// --- 4. Main Component ---
export const ServicesSection: React.FC = () => {
  const iconSize = 32; 

  const services: Service[] = [
    {
      title: 'Web Development',
      description:
        'Custom, responsive websites and web applications built with modern technologies. We create stunning, high-performance digital experiences.',
      icon: <RiGlobalLine size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android, focusing on intuitive design and user engagement.',
      icon: <RiSmartphoneLine size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Custom Software',
      description:
        'Bespoke software solutions tailored to your specific business needs and complex operational challenges.',
      icon: <RiCodeSSlashFill size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'E-commerce Development',
      description:
        'Scalable online stores with secure payment gateways, seamless inventory management, and powerful sales drivers.',
      icon: <RiShoppingCart2Line size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Cloud Computing',
      description:
        'Secure, scalable cloud infrastructure and migration services (AWS/Azure) for optimal cost-efficiency and performance.',
      icon: <RiCloudLine size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'AI & ML Solutions',
      description:
        'Intelligent applications with Machine Learning, Agentic AI, and custom chatbots to automate processes and unlock data insights.',
      icon: <RiBrain3Fill size={iconSize} />,
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      color: 'from-violet-500 to-purple-500',
    },
  ]
  
  // Variants are typed as Variants from framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
            Our Core Software Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Engineering Ideas Into Digital Solutions. We deliver full-stack, AI-powered systems designed for scale and performance.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <BentoCard key={index} service={service} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}