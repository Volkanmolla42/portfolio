"use client";

import { motion } from "framer-motion";
import { 
  staggerContainerVariants, 
  cardVariants, 
  fadeInUpVariants,
  fadeInDownVariants,
  hoverScaleLarge,
  viewportOnce,
  defaultViewportOptions
} from "@/lib/animations";
import { useScrollNavigation } from "@/lib/hooks";
import { CheckCircleIcon, getServiceIcon } from "../ui/icons";
import type { ServicesTranslations } from "@/lib/types";

// ============================================
// Types
// ============================================

interface ServicesProps {
  data: ServicesTranslations;
}

// ============================================
// Services Component
// ============================================

export default function Services({ data }: ServicesProps) {
  const { scrollToContact } = useScrollNavigation();

  return (
    <div className="size-full flex flex-col text-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={staggerContainerVariants(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewportOptions}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {data.packages.map((service, index) => {
          const ServiceIcon = getServiceIcon(index);
          
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={hoverScaleLarge.whileHover}
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" 
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-red-600 to-fuchsia-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircleIcon size={16} className="flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-fuchsia-600 hover:from-red-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
                >
                  {service.cta}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}