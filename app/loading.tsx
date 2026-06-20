
import React from "react";

export default function Loading() {
  const skeletonCards = Array.from({ length: 4 });

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      <div className="fixed inset-y-0 left-0 z-50 bg-[#09090b] border-r border-zinc-800/50 w-64 max-lg:hidden" />
      <div className="flex-1 lg:pl-64 min-w-0 max-lg:pt-16">
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            <div className="md:col-span-2 bg-[#09090b] border border-zinc-800/40 rounded-3xl p-6 lg:p-8 h-[220px] animate-pulse">
              <div className="h-4 bg-zinc-800/60 rounded-md w-1/4 mb-4" />
              <div className="h-8 bg-zinc-800/60 rounded-md w-1/3 mb-4" />
              <div className="h-4 bg-zinc-800/60 rounded-md w-1/2" />
            </div>
            {skeletonCards.map((_, i) => (
              <div key={i} className="bg-[#09090b] border border-zinc-800/40 rounded-3xl p-6 h-[190px] flex flex-col justify-between animate-pulse">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-zinc-800/60 mb-4" />
                  <div className="h-4 bg-zinc-800/60 rounded-md w-3/4" />
                </div>
                <div className="h-2 bg-zinc-800/60 rounded-full w-full" />
              </div>
            ))}
            <div className="bg-[#09090b] border border-zinc-800/40 rounded-3xl p-6 h-[260px] lg:row-span-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}