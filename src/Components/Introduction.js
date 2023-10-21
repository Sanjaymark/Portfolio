import React, { useState, useEffect } from "react";

export const Introduction = () => {
  const [text, setText] = useState(""); // State to store the typed text
  const fullText = "Hi, I'm Sanjay\nFull Stack Developer"; // The full text you want to type

  useEffect(() => {
    let currentIndex = 0; // Index of the current character being typed
    const delay = 200; // Delay between typing each character (in milliseconds)

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, delay);
      }
    };

    typeText();
  }, []);

  return (
    <div className="mb-2 introduction">
      <div className="text-7xl font-serif antialiased pt-8">
        <p>{text}</p>
      </div>
    </div>
  );
};
