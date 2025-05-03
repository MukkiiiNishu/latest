import React from "react";

export default function TopDivider() {
  return (
    <div className="relative my-8 flex items-center justify-center">
      <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 animate-glow" />
      <span className="absolute px-4 py-1 bg-[#fffdeb] text-rose-500 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
        One Dream Forever → Happiest Us
      </span>
    </div>
  );
}
