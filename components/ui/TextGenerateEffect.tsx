"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import "../components.css";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        { opacity: 1 },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope, animate]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div
          className="dark:text-white text-black leading-snug tracking-wide"
          ref={scope}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              className={cn(
                "text-gen opacity-0",
                idx > 2 ? "text-purple" : "dark:text-white text-black"
              )}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
