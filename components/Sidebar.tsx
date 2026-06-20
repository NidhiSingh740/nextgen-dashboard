
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X 
} from "lucide-react";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
          <span className="font-semibold tracking-wider text-white text-sm bg-clip-text">NEXTGEN</span>
        </div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-[#09090b] border-r border-zinc-800/50 text-zinc-400 max-lg:w-72 max-lg:fixed
          ${isCollapsed ? "lg:w-20" : "lg:w-64"} 
          max-lg:translate-x-0 transition-[width] duration-300 ease-in-out
          max-lg:top-16 max-lg:h-[calc(100vh-64px)]
        `}
        animate={typeof window !== "undefined" && window.innerWidth < 1024 ? {
          x: isMobileOpen ? 0 : "-100%"
        } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="hidden lg:flex items-center justify-between h-20 px-6 border-b border-zinc-800/30">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] flex-shrink-0" />
            {!isCollapsed && (
              <span className="font-bold tracking-wider text-white text-base bg-clip-text">
                NEXTGEN
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-zinc-800/50 hover:text-white transition-colors border border-zinc-800/0 hover:border-zinc-800/50"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <div className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`relative w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-sm transition-colors group select-none outline-none
                  ${isActive ? "text-white font-semibold" : "hover:text-zinc-200"}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-zinc-800/80 to-zinc-900/50 border border-zinc-700/30 rounded-xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  />
                )}
                
                <div className={`flex-shrink-0 relative transition-transform duration-200 dynamic-transform group-hover:scale-105
                  ${isActive ? "text-violet-400" : "text-zinc-400 group-hover:text-zinc-200"}
                `}>
                  <IconComponent size={20} strokeWidth={2.2} />
                </div>

                <span className={`origin-left opacity-100 transition-[opacity,transform] duration-200 whitespace-nowrap
                  ${isCollapsed ? "lg:opacity-0 lg:scale-95 lg:pointer-events-none" : "opacity-100 scale-100"}
                `}>
                  {item.label}
                </span>

                {isCollapsed && (
                  <div className="hidden lg:block absolute left-full ml-4 px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium rounded-md opacity-0 scale-95 pointer-events-none transition-all group-hover:opacity-100 group-hover:scale-100 shadow-xl">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>

      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#09090b]/90 backdrop-blur-md border-t border-zinc-800/50 flex items-center justify-around px-2 z-40 max-sm:flex sm:hidden">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-colors outline-none
                ${isActive ? "text-violet-400" : "text-zinc-500"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobileTabPill"
                  className="absolute inset-0 bg-zinc-800/40 rounded-xl -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                />
              )}
              <IconComponent size={20} strokeWidth={2.2} />
            </button>
          );
        })}
      </nav>
    </>
  );
}