import React, { useEffect, useRef, useState } from "react";
import MessagePoem from "./components/MessagePoem";
import CanvasHeart from "./components/CanvasHeart";
import MemorySlideshow from "./components/MemorySlideshow";
import QuizLoop from "./components/QuizLoop";
import WrittenGallery from "./components/WrittenGallery";
import Testimonials from "./components/Testimonials";
import FinalSurprise from "./components/FinalSurprise";

export default function App() {
  const [poemDone, setPoemDone] = useState(false);
  const [heartDone, setHeartDone] = useState(false);
  const [memoriesDone, setMemoriesDone] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [writtenDone, setWrittenDone] = useState(false);
  const [testimonialsDone, setTestimonialsDone] = useState(false);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  // Auto-scroll with delay
  useEffect(() => {
    if (poemDone && heartDone) {
      setTimeout(() => {
        section2Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 3000);
    }
  }, [poemDone, heartDone]);

  useEffect(() => {
    if (memoriesDone) {
      setTimeout(() => {
        section3Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 3000);
    }
  }, [memoriesDone]);

  useEffect(() => {
    if (quizDone) {
      setTimeout(() => {
        section4Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 3000);
    }
  }, [quizDone]);

  useEffect(() => {
    if (writtenDone) {
      setTimeout(() => {
        section5Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 3000);
    }
  }, [writtenDone]);

  useEffect(() => {
    if (testimonialsDone) {
      setTimeout(() => {
        section6Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 3000);
    }
  }, [testimonialsDone]);

  const SectionHeader = ({ text }) => (
    <div className="relative my-8 flex items-center justify-center w-full">
      <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
      <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-sm animate-pulse border border-rose-200">
        {text}
      </span>
    </div>
  );

  return (
    <div className="bg-[#fffdeb] text-gray-800 font-mono">
      {/* Section 1 - Poem + Heart */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <SectionHeader text="One Dream Forever → Happiest Us" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <MessagePoem onComplete={() => setPoemDone(true)} />
          <CanvasHeart onComplete={() => setHeartDone(true)} />
        </div>
      </div>

      {/* Section 2 - Memories */}
      {poemDone && heartDone && (
        <div ref={section2Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <SectionHeader text="💞 Smile! You are On Camera!! 💞" />
          <MemorySlideshow onComplete={() => setMemoriesDone(true)} />
        </div>
      )}

      {/* Section 3 - Quiz */}
      {memoriesDone && (
        <div ref={section3Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <SectionHeader text="Forever Love 💗" />
          <QuizLoop onComplete={() => setQuizDone(true)} />
        </div>
      )}

      {/* Section 4 - Written Gallery */}
      {quizDone && (
        <div ref={section4Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <SectionHeader text="usse likhna pasand hai !!" />
          <WrittenGallery onComplete={() => setWrittenDone(true)} />
        </div>
      )}

      {/* Section 5 - Testimonials */}
      {writtenDone && (
        <div ref={section5Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <SectionHeader text="Dii-Jiju hamare lagte sabko pyaare" />
          <Testimonials onComplete={() => setTestimonialsDone(true)} />
        </div>
      )}

      {/* Section 6 - Final Surprise */}
      {testimonialsDone && (
        <div ref={section6Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
          <SectionHeader text="Pyaar Kiya to Darna Kya ❤️" />
          <FinalSurprise />
        </div>
      )}
    </div>
  );
}


// import React, { useEffect, useRef, useState } from "react";
// import MessagePoem from "./components/MessagePoem";
// import CanvasHeart from "./components/CanvasHeart";
// import MemorySlideshow from "./components/MemorySlideshow";
// import QuizLoop from "./components/QuizLoop";
// import WrittenGallery from "./components/WrittenGallery";

// export default function App() {
//   const [poemDone, setPoemDone] = useState(false);
//   const [heartDone, setHeartDone] = useState(false);
//   const [memoriesDone, setMemoriesDone] = useState(false);
//   const [quizDone, setQuizDone] = useState(false);

//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const section4Ref = useRef(null);

//   // Scroll with delay logic
//   useEffect(() => {
//     if (poemDone && heartDone && section2Ref.current) {
//       setTimeout(() => {
//         section2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 3000); // 5s delay
//     }
//   }, [poemDone, heartDone]);

//   useEffect(() => {
//     if (memoriesDone && section3Ref.current) {
//       setTimeout(() => {
//         section3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 3000);
//     }
//   }, [memoriesDone]);

//   useEffect(() => {
//     if (quizDone && section4Ref.current) {
//       setTimeout(() => {
//         section4Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 3000);
//     }
//   }, [quizDone]);

//   return (
//     <div className="bg-[#fffdeb] text-gray-800 font-mono">
//       {/* Top Tagline */}
//       <div className="min-h-screen flex flex-col justify-center items-center px-4">
//         <div className="relative mb-8 flex items-center justify-center w-full">
//           <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
//           <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-sm animate-pulse border border-rose-200">
//             One Dream Forever → Happiest Us
//           </span>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
//           <MessagePoem onComplete={() => setPoemDone(true)} />
//           <CanvasHeart onComplete={() => setHeartDone(true)} />
//         </div>
//       </div>

//       {/* Section 2 - Memories */}
//       {poemDone && heartDone && (
//         <div ref={section2Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           {/* Break line */}
//           <div className="relative my-8 flex items-center justify-center w-full">
//             <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
//             <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-500 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
//               💞 Smile! You are On Camera!! 💞
//             </span>
//           </div>
//           <MemorySlideshow onComplete={() => setMemoriesDone(true)} />
//         </div>
//       )}

//       {/* Section 3 - Quiz */}
//       {memoriesDone && (
//         <div ref={section3Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           {/* Break line */}
//           <div className="relative my-8 flex items-center justify-center w-full">
//             <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
//             <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-500 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
//               Forever Love 💗
//             </span>
//           </div>
//           <QuizLoop onComplete={() => setQuizDone(true)} />
//         </div>
//       )}

//       {/* Section 4 - Writing Gallery */}
//       {quizDone && (
//         <div ref={section4Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           {/* Break line */}
//           <div className="relative my-8 flex items-center justify-center w-full">
//             <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
//             <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
//               usse likhna pasand hai !!
//             </span>
//           </div>
//           <WrittenGallery />
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useEffect, useRef, useState } from "react";
// import MessagePoem from "./components/MessagePoem";
// import CanvasHeart from "./components/CanvasHeart";
// import MemorySlideshow from "./components/MemorySlideshow";
// import QuizLoop from "./components/QuizLoop";
// import WrittenGallery from "./components/WrittenGallery";
// import Testimonials from "./components/Testimonials";

// export default function App() {
//   const [poemDone, setPoemDone] = useState(false);
//   const [heartDone, setHeartDone] = useState(false);
//   const [memoriesDone, setMemoriesDone] = useState(false);
//   const [quizDone, setQuizDone] = useState(false);
//   const [writtenDone, setWrittenDone] = useState(false);

//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const section4Ref = useRef(null);
//   const section5Ref = useRef(null);

//   // Auto-scroll handlers
//   useEffect(() => {
//     if (poemDone && heartDone) {
//       setTimeout(() => {
//         section2Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 2000);
//     }
//   }, [poemDone, heartDone]);

//   useEffect(() => {
//     if (memoriesDone) {
//       setTimeout(() => {
//         section3Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 2000);
//     }
//   }, [memoriesDone]);

//   useEffect(() => {
//     if (quizDone) {
//       setTimeout(() => {
//         section4Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 2000);
//     }
//   }, [quizDone]);

//   useEffect(() => {
//     if (writtenDone) {
//       setTimeout(() => {
//         section5Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 5000);
//     }
//   }, [writtenDone]);

//   // Line break component
//   const LineBreak = ({ text }) => (
//     <div className="relative my-10 flex items-center justify-center w-full">
//       <div className="w-full h-px bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
//       <span className="absolute px-6 py-1 bg-[#fffdeb] text-rose-600 text-lg md:text-xl font-semibold italic rounded-full shadow-md animate-pulse border border-rose-200">
//         {text}
//       </span>
//     </div>
//   );

//   return (
//     <div className="bg-[#fffdeb] text-gray-800 font-mono scroll-smooth">
//       {/* Section 1 */}
//       <div className="min-h-screen flex flex-col justify-center items-center px-4">
//         <LineBreak text="One Dream Forever → Happiest Us" />
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
//           <MessagePoem onComplete={() => setPoemDone(true)} />
//           <CanvasHeart onComplete={() => setHeartDone(true)} />
//         </div>
//       </div>

//       {/* Section 2 */}
//       {poemDone && heartDone && (
//         <div ref={section2Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           <LineBreak text="💞 Smile! You are On Camera!! 💞" />
//           <MemorySlideshow onComplete={() => setMemoriesDone(true)} />
//         </div>
//       )}

//       {/* Section 3 */}
//       {memoriesDone && (
//         <div ref={section3Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           <LineBreak text="Forever Love 💗" />
//           <QuizLoop onComplete={() => setQuizDone(true)} />
//         </div>
//       )}

//       {/* Section 4 */}
//       {quizDone && (
//         <div ref={section4Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           <LineBreak text="usse likhna pasand hai !!" />
//           <WrittenGallery onComplete={() => setWrittenDone(true)} />
//         </div>
//       )}

//       {/* Section 5 */}
//       {writtenDone && (
//         <div ref={section5Ref} className="min-h-screen flex flex-col justify-center items-center px-4">
//           <LineBreak text="Dii-Jiju hamare lagte sabko pyaare" />
//           <Testimonials />
//         </div>
//       )}
//     </div>
//   );
// }
