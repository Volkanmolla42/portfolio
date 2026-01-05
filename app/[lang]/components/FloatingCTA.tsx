"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  popInVariants, 
  glowPulseAnimation, 
  glowPulseTransition,
  hoverScale 
} from "@/lib/animations";
import { useScrollVisibility } from "@/lib/hooks";
import { CONTACT_INFO } from "@/lib/constants";
import { WhatsAppIcon } from "./ui/icons";
import type { FloatingCTATranslations } from "@/lib/types";

// ============================================
// Types
// ============================================

interface FloatingCTAProps {
  data: FloatingCTATranslations;
}

// ============================================
// Tooltip Component
// ============================================

interface TooltipProps {
  text: string;
  isVisible: boolean;
}

function Tooltip({ text, isVisible }: TooltipProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg shadow-xl border border-zinc-700 whitespace-nowrap"
        >
          {text}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-zinc-900" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================
// Main Component
// ============================================

const SCROLL_THRESHOLD = 600;

export default function FloatingCTA({ data }: FloatingCTAProps) {
  const isVisible = useScrollVisibility(SCROLL_THRESHOLD);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popInVariants}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          <Tooltip text={data.tooltip} isVisible={showTooltip} />

          {/* WhatsApp Button */}
          <motion.a
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={data.ariaLabel}
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
            whileHover={hoverScale.whileHover}
            whileTap={hoverScale.whileTap}
            animate={{
              boxShadow: glowPulseAnimation.boxShadow,
            }}
            transition={{
              boxShadow: glowPulseTransition,
            }}
          >
            {/* Pulse Ring */}
            <span 
              className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" 
              aria-hidden="true"
            />

            {/* WhatsApp Icon */}
            <WhatsAppIcon size={32} className="relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}