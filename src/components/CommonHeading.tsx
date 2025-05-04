"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimationDirection = "left" | "right" | "top" | "bottom" | "fade";

interface CommonHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
  direction?: AnimationDirection;
}

const directionVariants: Record<
  AnimationDirection,
  { opacity: number; x?: number; y?: number }
> = {
  left: { opacity: 0, x: -100 },
  right: { opacity: 0, x: 100 },
  top: { opacity: 0, y: -100 },
  bottom: { opacity: 0, y: 100 },
  fade: { opacity: 0 },
};

export const CommonHeading: React.FC<CommonHeadingProps> = ({
  title,
  highlight,
  subtitle,
  direction = "right",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8 },
      });
    } else {
      controls.start(directionVariants[direction]);
    }
  }, [controls, inView, direction]);

  return (
    <div className="text-center py-12">
      <motion.h1
        ref={ref}
        initial={directionVariants[direction]}
        animate={controls}
        className="text-4xl md:text-5xl font-bold"
      >
        {title} <span className="text-purple-400">{highlight}</span>
      </motion.h1>
      {subtitle && <p className="mt-4 text-sm text-gray-400">{subtitle}</p>}
    </div>
  );
};
