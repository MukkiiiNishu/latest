import React, { useState, useEffect } from "react";
import "./QuizLoop.css"; // 👈 We'll define some floating heart CSS here

const options = [
  "I love you 100%",
  "To the moon and back 🌕",
  "More than pizza 🍕",
  "More than Netflix 😎",
  "You're tolerable 😂",
  "Love you more than I do ❤️",
];

function shuffle(array) {
  return array
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
}

export default function QuizLoop({ onComplete }) {
  const [shuffledOptions, setShuffledOptions] = useState(shuffle(options));
  const [message, setMessage] = useState("");
  const [correct, setCorrect] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (correct) {
      const hearts = document.createElement("div");
      hearts.innerHTML = `
        <div class="fixed inset-0 z-50 pointer-events-none">
          <div class="absolute top-1/2 left-1/2 text-6xl animate-ping text-pink-500">❤️</div>
          <div class="absolute top-[45%] left-[40%] text-4xl animate-bounce text-rose-400">💘</div>
          <div class="absolute top-[55%] left-[60%] text-5xl animate-bounce text-pink-300">💕</div>
        </div>
      `;
      document.body.appendChild(hearts);
      setTimeout(() => {
        document.body.removeChild(hearts);
        onComplete?.();
      }, 2500);
    }
  }, [correct]);

  const handleClick = (option) => {
    if (option === "Love you more than I do ❤️") {
      setMessage("Aww 🥰 That's the right one!");
      setCorrect(true);
    } else {
      setMessage("Try again! True love is just a few giggles away ❤️");
      setShuffledOptions(shuffle(options));
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="relative py-16 w-full flex flex-col items-center justify-center quiz-bg">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-rose-700 mb-4">
          ❤️ The Love Detector Quiz ❤️
        </h1>
        <p className="text-lg text-rose-500 italic mb-10">
          Only true love can pass this... let's see how much you really love me 😘
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-rose-600 mb-6 animate-bounce">
          💞 How much do you love me? 💞
        </h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${shake ? "animate-shake" : ""}`}>
          {shuffledOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className="bg-pink-100 text-pink-700 text-lg font-semibold px-6 py-3 rounded-full hover:bg-pink-200 shadow-lg transition-all duration-300 hover:scale-105"
            >
              {opt}
            </button>
          ))}
        </div>
        {message && (
          <p className="mt-6 text-rose-600 font-bold text-xl animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
