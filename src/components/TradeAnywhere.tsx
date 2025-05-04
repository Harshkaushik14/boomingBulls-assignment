import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TradeAnywhere = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTrade = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-[50vh] sm:min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <motion.h1
            style={{ x: xTrade }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white"
          >
            Trade
          </motion.h1>

          <motion.h1
            style={{ x: xTrade }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white"
          >
            Anytime
          </motion.h1>

          <motion.h1
            style={{ x: xTrade }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-purple-500"
          >
            Anywhere
          </motion.h1>
        </div>
      </div>

      <div className="absolute mt-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-20">
        <div className="group bg-white p-2 w-40 sm:w-56 h-40 sm:h-56 rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
          <img
            src="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png"
            alt="Overlay"
            className="w-36 sm:w-52 h-36 sm:h-52 object-contain mx-auto pointer-events-none"
          />
        </div>

        <img
          src="https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png"
          alt="Below Overlay"
          className="w-32 sm:w-40 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TradeAnywhere;
