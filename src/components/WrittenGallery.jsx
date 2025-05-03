import React, { useState } from "react";

const images = [
  "/11.jpg",
  "21.jpg",
  "/31.jpg",
  "/41.jpg",
  "/51.jpg",
  "/61.jpg",
];

export default function WrittenGallery() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-rose-600 italic mb-6">
        Mujhe uska likha padhna !! ✍️
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-pink-50 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setZoomedImage(src)}
          >
            <img
              src={src}
              alt={`Written ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
}
