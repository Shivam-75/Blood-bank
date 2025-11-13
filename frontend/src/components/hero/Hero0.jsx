import { useEffect, useState } from "react";

const Hero0 = () => {
  const fullText = "One donation can change many tomorrows";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // typing speed

  useEffect(() => {
    const handleTyping = () => {
      setText(fullText.slice(0, index));

      if (!isDeleting && index < fullText.length) {
        // keep typing
        setIndex(index + 1);
        setSpeed(120);
      } else if (isDeleting && index > 0) {
        setIndex(index - 1);
        setSpeed(60);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
        setSpeed(120);
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
  return (
    <div
      className="bg-gradient-to-l from-red-700 to-black min-h-[91vh] flex flex-col items-center justify-center text-white px-4 transition-colors duration-700"
      role="banner">
      {/* ✅ Headline optimized for faster paint & stable layout */}
      <h1 className="text-center text-[20px] font-extrabold font-serif capitalize sm:text-3xl md:text-4xl lg:text-5xl text-white">
        {text}
        <span className="border-r-4 border-red-500  animate-pulse ml-1"></span>
      </h1>

      {/* ✅ Paragraph width optimized + reduced layout shift */}
      <p className="max-w-[800px] text-center font-serif pt-5 sm:pt-10 text-sm sm:text-base opacity-90 leading-relaxed ">
        Life is precious, and every drop counts. Your blood can bring hope to
        those fighting for their tomorrow. One act of kindness today can create
        countless smiles. Donate blood, save lives, and be a hero in someone’s
        story.
      </p>
    </div>
  );
};

export default Hero0;
