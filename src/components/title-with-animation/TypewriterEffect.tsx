import { useState, useEffect } from "react";

const TypewriterEffect: React.FC = () => {
  const fullText = "Your Story, Our Community";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const colorClass = "text-[#29ADC5]"; // Tailwind CSS color class

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 70); // Adjust speed by changing the delay (100ms)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const renderTextWithColor = () => {
    const startIndex = fullText.indexOf("Community");
    const endIndex = startIndex + "Community".length;

    return (
      <>
        {displayedText.split("").map((char, i) => (
          <span
            key={i}
            className={i >= startIndex && i < endIndex ? colorClass : ""}
          >
            {char}
          </span>
        ))}
      </>
    );
  };

  return (
    <h1 className="text-h1 font-bold text-center">{renderTextWithColor()}</h1>
  );
};

export default TypewriterEffect;
