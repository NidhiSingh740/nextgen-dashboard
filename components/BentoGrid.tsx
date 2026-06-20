
"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
    >
      {children}
    </motion.main>
  );
}