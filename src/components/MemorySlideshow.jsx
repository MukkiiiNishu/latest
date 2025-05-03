import React, { useEffect, useState, useRef } from "react";

const items = [
  {
    src: "/1.jpg",
    text: "Tum aayi zindagi mein... sab kuch thoda aur khoobsurat ho gaya ✨\nHar lamha tere saath, jaise kisi film ka pyaara sa scene 🎬\nPata nahi kab... par main pura ka pura tera ho gaya 💕",
  },
  {
    src: "/2.jpg",
    text: "Pehli baar jab tu haansi thi... lagaa time ruk gaya ho 💫\nBas wahi moment tha jahan se sab shuru hua 🌸\nAur dil bola... “yeh wali toh apni hi hai” 😌",
  },
  {
    src: "/3.jpg",
    text: "Tere saath har choti baat bhi special ban jaati hai 💬\nKabhi gussa, kabhi pyaar... par har baar tu hi chahiye 💞\nSach bolun? Tu mil gayi, toh sab kuch mil gaya 🥹",
  },
  {
    src: "/4.jpg",
    text: "Main strong dikh sakta hoon sabke saamne 💪\nPar tu jo aankhon mein dekhti hai... sab kuch padh leti hai 👀\nTere saath, main waise hoon jaise main hoon — bina mask ke ❤️",
  },
  {
    src: "/5.jpg",
    text: "Hum hamesha ke liye ban gaye hain... tu aur main 🫶\nHar mushkil, har khushi... bas tu saath ho 💑\nTu hansti hai, toh meri duniya khil jaati hai 🌍💐",
  },
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
