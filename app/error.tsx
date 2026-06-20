
"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 selection:bg-red-500/30">
      <div className="w-full max-w-md bg-[#09090b] border border-red-500/20 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(239,68,68,0.05)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="p-4 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
            <AlertCircle size={32} strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-tight text-white">Database Core Offline</h2>
            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
              Unable to establish a secure data socket connection to the application server engine.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-sm font-medium text-zinc-200 hover:text-white transition-all duration-200 select-none outline-none group-active:scale-95 shadow-lg"
          >
            <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>Retry Handshake</span>
          </button>
        </div>
      </div>
    </div>
  );
}