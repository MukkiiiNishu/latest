import React, { useEffect, useRef, useState } from "react";
import MessagePoem from "./components/MessagePoem";
import CanvasHeart from "./components/CanvasHeart";
import MemorySlideshow from "./components/MemorySlideshow";
import QuizLoop from "./components/QuizLoop";
import WrittenGallery from "./components/WrittenGallery";


export default function App() {
  const [poemDone, setPoemDone] = useState(false);
  const [heartDone, setHeartDone] = useState(false);
  const [memoriesDone, setMemoriesDone] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  // Smooth scrolling into sections
  useEffect(() => {
    if (poemDone && heartDone && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [poemDone, heartDone]);

  useEffect(() => {
    if (memoriesDone && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [memoriesDone]);

  useEffect(() => {
    if (quizDone && section4Ref.current) {
      section4Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [quizDone]);

  return (
    <div className="bg-[#fffdeb] text-gray-800 font-mono">
      {/* Top Tagline */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="relative mb-8 flex items-center justify-center w-full">
          <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
          <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-sm animate-pulse border border-rose-200">
            One Dream Forever → Happiest Us
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <MessagePoem onComplete={() => setPoemDone(true)} />
          <CanvasHeart onComplete={() => setHeartDone(true)} />
        </div>
      </div>

      {/* Section 2 - Memories */}
      {poemDone && heartDone && (
        <div ref={section2Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          {/* Break line */}
          <div className="relative my-8 flex items-center justify-center w-full">
            <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
            <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-500 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
              💞 Smile! You are On Camera!! 💞
            </span>
          </div>
          <MemorySlideshow onComplete={() => setMemoriesDone(true)} />
        </div>
      )}

      {/* Section 3 - Quiz */}
      {memoriesDone && (
        <div ref={section3Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          {/* Break line */}
          <div className="relative my-8 flex items-center justify-center w-full">
            <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
            <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-500 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
              Forever Love 💗
            </span>
          </div>
          <QuizLoop onComplete={() => setQuizDone(true)} />
        </div>
      )}
      {/* Section 4 - Writing Gallery */}
{quizDone && (
  <div ref={section4Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
    {/* Break line */}
    <div className="relative my-8 flex items-center justify-center w-full">
      <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
      <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
        usse likhna pasand hai !!
      </span>
    </div>

    {/* 📖 Gallery */}
    <WrittenGallery />
  </div>
)}


      {/* Section 5 - Final Title */}
      { WrittenGallery&& (
        <div ref={section5Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <div className="relative my-8 flex items-center justify-center w-full">
            <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
            <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
              Pyaar Kiya to Darna Kya ❤️
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
