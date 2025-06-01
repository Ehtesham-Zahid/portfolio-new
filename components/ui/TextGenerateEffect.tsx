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
    setIsVisible(true);
  }, []);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease",
                transitionDelay: `${idx * 100}ms`,
              }}
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
