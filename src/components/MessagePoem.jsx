import React, { useEffect, useState } from "react";

const fullText = `
Hey Prachi !
Do you remember the day we first met?

Since that day a spark begun;

Your everything got imprinted in my heart;
As the time went by
My love for you grew stronger;
And now I know for sure,
Together will have the best time of our life 💖`;

export default function MessagePoem({ onComplete }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 p-4">
      <pre className="text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap">
        {displayed}
      </pre>
    </div>
  );
}
