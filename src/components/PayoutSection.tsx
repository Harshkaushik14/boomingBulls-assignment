import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PayoutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLHeadingElement>(null);
  const secondRef = useRef<HTMLHeadingElement>(null);
  const thirdRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yFirst = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const ySecond = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const yThird = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  const isFirstInView = useInView(firstRef, { once: false, amount: 0.5 });
  const isSecondInView = useInView(secondRef, { once: false, amount: 0.5 });
  const isThirdInView = useInView(thirdRef, { once: false, amount: 0.5 });

  const textVariants = (isInView: boolean) => ({
    hidden: { opacity: 1, filter: "blur(5px)" },
    visible: { opacity: 1, filter: isInView ? "blur(0px)" : "blur(5px)" },
  });

  const [amount, setAmount] = useState<number>(909132);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prev) => prev + Math.floor(Math.random() * 20 + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toLocaleString("en-US");

  return (
    <div className="bg-black text-center  overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div ref={containerRef} className="flex flex-col items-center">
          <motion.h1
            ref={firstRef}
            initial="hidden"
            animate="visible"
            variants={textVariants(isFirstInView)}
            style={{ y: yFirst }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            We’ve Paid Out Over
          </motion.h1>
          <motion.h1
            ref={secondRef}
            initial="hidden"
            animate="visible"
            variants={textVariants(isSecondInView)}
            style={{ y: ySecond }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            $1M to Traders
          </motion.h1>
          <motion.p
            ref={thirdRef}
            initial="hidden"
            animate="visible"
            variants={textVariants(isThirdInView)}
            style={{ y: yThird }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            Your Trust is Our Fuel—Power Up with Zuperior
          </motion.p>
        </div>
      </div>

      <div className="relative w-full h-[600px] mt-[-100px]">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-[67%] object-cover object-top"
          src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4"
        />

        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="text-6xl md:text-8xl lg:text-[12rem] font-bold text-white flex items-center drop-shadow-lg">
            <span className="text-purple-500">$</span>
            <motion.span
              key={amount}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {formatNumber(amount)}
            </motion.span>
            <span className="text-purple-500">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutSection;
