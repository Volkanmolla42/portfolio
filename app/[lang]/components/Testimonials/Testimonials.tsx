"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  fadeInUpVariants, 
  fadeInDownVariants,
  viewportOnce 
} from "@/lib/animations";
import { useScrollNavigation } from "@/lib/hooks";
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from "../ui/icons";
import type { TestimonialsTranslations, Testimonial } from "@/lib/types";

// ============================================
// Types
// ============================================

interface TestimonialsProps {
  data: TestimonialsTranslations;
}

// ============================================
// Sub-Components
// ============================================

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: rating }, (_, i) => (
        <StarIcon key={i} size={24} />
      ))}
    </div>
  );
}

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeftIcon : ChevronRightIcon;
  const translateClass = isLeft 
    ? "-translate-x-4 sm:-translate-x-12" 
    : "translate-x-4 sm:translate-x-12";

  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 ${translateClass} p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full border border-zinc-700 transition-all duration-300 hover:scale-110`}
      aria-label={`${isLeft ? "Previous" : "Next"} testimonial`}
    >
      <Icon size={24} />
    </button>
  );
}

interface DotIndicatorProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

function DotIndicator({ count, currentIndex, onDotClick }: DotIndicatorProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "w-8 bg-red-500"
              : "bg-zinc-600 hover:bg-zinc-500"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export default function Testimonials({ data }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollToContact } = useScrollNavigation();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % data.items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + data.items.length) % data.items.length);
  };

  const currentTestimonial = data.items[currentIndex];

  return (
    <div className="size-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-16">
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
          className="text-zinc-400 text-lg"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 sm:p-12 border border-zinc-700 shadow-2xl"
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <QuoteIcon size={48} />
            </div>

            {/* Comment */}
            <p className="text-xl sm:text-2xl text-zinc-200 leading-relaxed mb-8 italic">
              &quot;{currentTestimonial.comment}&quot;
            </p>

            {/* Rating */}
            <StarRating rating={currentTestimonial.rating} />

            {/* Client Info */}
            <div className="border-t border-zinc-700 pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    {currentTestimonial.role}
                  </p>
                </div>
                <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">
                    {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <NavigationButton direction="left" onClick={prevTestimonial} />
        <NavigationButton direction="right" onClick={nextTestimonial} />

        {/* Dots Indicator */}
        <DotIndicator 
          count={data.items.length} 
          currentIndex={currentIndex} 
          onDotClick={setCurrentIndex} 
        />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        className="mt-12"
      >
        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-fuchsia-600 hover:from-red-500 hover:to-fuchsia-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
        >
          {data.cta}
        </button>
      </motion.div>
    </div>
  );
}