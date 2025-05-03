import React, { useState } from "react";
import ReactPlayer from "react-player";

const videoList = [
  "/videos/roka1.mp4",
  "/videos/roka2.mp4",
  "/videos/roka3.mp4",
];

export default function VideoMemorySection({ visible, onComplete }) {
  const [index, setIndex] = useState(0);

  const handleVideoEnd = () => {
    if (index < videoList.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete?.();
    }
  };

  if (!visible) return null;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl border-4 border-pink-300 ring-4 ring-rose-400 ring-offset-2 animate-pulse">
        <ReactPlayer
          url={videoList[index]}
          playing
          muted
          controls={false}
          width="100%"
          height="100%"
          onEnded={handleVideoEnd}
          config={{
            file: {
              attributes: {
                playsInline: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
