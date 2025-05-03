import React from "react";

export default function SectionDivider({ text }) {
  return (
    <div className="relative my-8 flex items-center justify-center w-full">
      <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
      <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
        {text}
      </span>
    </div>
  );
}
