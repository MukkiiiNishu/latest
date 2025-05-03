import React, { useEffect, useState, useRef } from "react";

const items = [
  { src: "/1.jpg", text: "You made my world brighter, just by being in it." },
  { src: "/7.jpg", text: "Our first walk together — I still remember your smile." },
  { src: "/3.jpg", text: "From awkward to awesome, our story bloomed beautifully." },
  { src: "/4.jpg", text: "You are my favorite hello and hardest goodbye." },
  { src: "/9.jpg", text: "Every day with you is my favorite memory." },
  { src: "/6.jpg", text: "You made my world brighter, just by being in it." },
  { src: "/2.jpg", text: "Our first walk together — I still remember your smile." },
  { src: "/8.jpg", text: "From awkward to awesome, our story bloomed beautifully." },
  { src: "/5.jpg", text: "Every day with you is my favorite memory." },
];

export default function MemorySlideshow({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(items[index].text.slice(0, i + 1));
      i++;
      if (i >= items[index].text.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (index === items.length - 1 && onComplete) {
            onComplete(); // 🔔 Notify parent to unlock Section 3
          } else {
            setIndex((prev) => (prev + 1) % items.length);
          }
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
      <div className="w-full md:w-1/2 p-4">
        <pre className="text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap">
          {displayed}
        </pre>
      </div>

      <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-xl overflow-hidden shadow-2xl transition-all">
        <img
          src={items[index].src}
          alt="Memory"
          className="w-full h-full object-cover absolute inset-0 rounded-xl opacity-0 animate-fadeIn"
        />
      </div>
    </div>
  );
}
