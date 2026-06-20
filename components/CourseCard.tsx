"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import * as Icons from "lucide-react";
import { Course } from "../types/database.type";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { title, progress, icon_name } = course;
  
  const LucideIcon = (Icons[icon_name as keyof typeof Icons] || Icons.BookOpen) as React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
  };

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.015 }}
      className="bg-[#09090b] border border-zinc-800/60 rounded-3xl p-6 relative overflow-hidden group transition-colors duration-300 hover:border-zinc-700/40 select-none flex flex-col justify-between min-h-[190px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.06),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] pointer-events-none" />
      
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/20 transition-colors duration-300">
            <LucideIcon size={20} strokeWidth={2} />
          </div>
          <span className="text-xs font-semibold tracking-wider text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-900">
            {progress}%
          </span>
        </div>

        <h3 className="text-sm font-semibold text-zinc-100 tracking-wide line-clamp-2 group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>

      <div className="relative z-10 space-y-2 mt-4">
        <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.4)]"
          />
        </div>
      </div>
    </motion.article>
  );
}