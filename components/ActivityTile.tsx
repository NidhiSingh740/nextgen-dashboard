"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function ActivityTile() {
  const [columns, setColumns] = useState<number[][]>([]);

  useEffect(() => {
    const mockData = Array.from({ length: 18 }, () => 
      Array.from({ length: 4 }, () => Math.floor(Math.random() * 4))
    );
    setColumns(mockData);
  }, []);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
  };

  const getColorClass = (level: number) => {
    switch(level) {
      case 1: return "bg-violet-950/60 border border-violet-900/40";
      case 2: return "bg-violet-800/50 border border-violet-700/30";
      case 3: return "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]";
      default: return "bg-zinc-950 border border-zinc-900";
    }
  };

  return (
    <motion.section
      variants={itemVariants}
      whileHover={{ scale: 1.015 }}
      className="bg-[#09090b] border border-zinc-800/60 rounded-3xl p-6 relative overflow-hidden group transition-colors duration-300 hover:border-zinc-700/40 select-none lg:row-span-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col justify-between h-full gap-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-white tracking-wide">Consistency Engine</h3>
            <p className="text-xs text-zinc-500">System deployment contributions</p>
          </div>
          <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400">
            <BarChart3 size={16} />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center py-2 overflow-hidden">
          <div className="grid grid-flow-col gap-1.5 auto-cols-max">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="grid grid-rows-4 gap-1.5">
                {col.map((level, rowIdx) => (
                  <div
                    key={rowIdx}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 transform hover:scale-125 hover:z-20 ${getColorClass(level)}`}
                  />
                ))}
              </div>
            ))}
            {columns.length === 0 && (
              <div className="grid grid-flow-col gap-1.5 auto-cols-max animate-pulse">
                {Array.from({ length: 18 }).map((_, colIdx) => (
                  <div key={colIdx} className="grid grid-rows-4 gap-1.5">
                    {Array.from({ length: 4 }).map((_, rowIdx) => (
                      <div key={rowIdx} className="w-3.5 h-3.5 rounded-sm bg-zinc-900 border border-zinc-800/50" />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-zinc-500 border-t border-zinc-900 pt-3">
          <span>Less active</span>
          <div className="flex gap-1 items-center">
            <div className="w-2.5 h-2.5 rounded-sm bg-zinc-950 border border-zinc-900" />
            <div className="w-2.5 h-2.5 rounded-sm bg-violet-950/60 border border-violet-900/40" />
            <div className="w-2.5 h-2.5 rounded-sm bg-violet-800/50 border border-violet-700/30" />
            <div className="w-2.5 h-2.5 rounded-sm bg-violet-500" />
          </div>
          <span>Highly active</span>
        </div>
      </div>
    </motion.section>
  );
}