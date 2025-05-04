"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  step: number;
  title: string;
};

export default function TimelineStep({ step, title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const isOddStep = step % 2 !== 0;
  const containerClass = isOddStep ? "left-30" : "right-14";
  const flexDirection = isOddStep ? "flex-row" : "flex-row-reverse";
  const textAlign = isOddStep ? "text-left" : "text-right mr-5";

  return (
    <div className={`relative ${containerClass}`}>
      <div className={`relative flex ${flexDirection} items-start space-x-6`}>
        <div className="flex flex-col items-center" ref={ref}>
          <div
            className={cn(
              "text-4xl font-bold transition-colors mt-4",
              active ? "text-white" : "text-gray-500"
            )}
          >
            {String(step).padStart(2, "0")}
          </div>

          <div className="w-[2px] h-80 mt-10 mb-10 bg-gray-600 overflow-hidden relative">
            <div
              className={cn(
                "absolute left-0 top-0 w-full h-full bg-white transition-all duration-[1200ms]",
                active ? "h-full" : "h-0"
              )}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={textAlign}
        >
          <p className="text-white font-medium text-lg mt-1">Step {step}</p>
          <p className="text-white font-medium text-lg mt-1">{title}</p>
        </motion.div>
      </div>
    </div>
  );
}
