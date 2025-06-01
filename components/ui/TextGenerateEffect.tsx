"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    // Set visible immediately on mount
    setIsVisible(true);
  }, []);

  const renderWords = () => {
    return (
      <div
        className="transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              }`}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
