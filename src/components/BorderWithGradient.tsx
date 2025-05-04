import React from "react";

export interface BorderWithGradientProps {
  children: React.ReactNode;
  className?: string;
}

const BorderWithGradient: React.FC<BorderWithGradientProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative rounded-[1rem] ${className}`}>
      <div
        className="
          absolute inset-0
          rounded-[1rem]
          bg-gradient-to-r 
          from-[#e0e0e0] 
          via-[#6242A5] 
          to-[#a0a0a0]
          animate-shine
          pointer-events-none
        "
      />

      <div
        className="
          relative
          m-[1.5px]
          rounded-[1rem]
          overflow-hidden
        "
      >
        {children}
      </div>
    </div>
  );
};

export default BorderWithGradient;
