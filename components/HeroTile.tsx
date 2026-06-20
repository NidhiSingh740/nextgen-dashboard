
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Flame, GraduationCap, Award } from "lucide-react";

export default function HeroTile() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
  };

  return (
    <motion.section
      variants={itemVariants}
      whileHover={{ scale: 1.015 }}
      className="md:col-span-2 bg-[#09090b] border border-zinc-800/60 rounded-3xl p-6 lg:p-8 relative overflow-hidden group transition-colors duration-300 hover:border-zinc-700/40 select-none"
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col justify-between gap-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-medium">
              <GraduationCap size={14} className="text-violet-400" />
              <span>Academic Workspace</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mt-2">
              Welcome back, <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Nidhi</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-md">
              Your server pipelines are fully optimized. Ready to scale your next full-stack system architecture?
            </p>
          </div>

          <div className="flex items-center gap-1 bg-zinc-950/80 border border-zinc-800/80 px-3.5 py-2 rounded-2xl shadow-inner group/streak">
            <Flame size={20} className="text-orange-500 fill-orange-500 dynamic-transform group-hover/streak:scale-110 duration-300" />
            <span className="text-white font-bold text-sm tracking-tight">12</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
              <Award size={18} />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-medium">Target Progress</div>
              <div className="text-sm font-semibold text-zinc-200">85% Weekly</div>
            </div>
          </div>
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
              <Flame size={18} />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-medium">Streak Multiplier</div>
              <div className="text-sm font-semibold text-zinc-200">1.5x Boost</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}