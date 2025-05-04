import { ArrowUpRight } from "lucide-react";
import React from "react";
import BorderWithGradient from "./BorderWithGradient";

export interface ShinyButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  iconSize?: number;
  className?: string;
  bgColor?: string;
  isRotate?: boolean;
  width?: string;
  showIcon?: boolean;
}

const Button: React.FC<ShinyButtonProps> = ({
  label,
  onClick,
  showIcon,
  iconSize = 18,
  className = "",
  bgColor = "#6242A5",
  isRotate = false,
  width = "13rem",
}) => {
  return (
    <BorderWithGradient className={`mb-[2rem] ${className}`}>
      <div
        className="
          h-[2.7rem] 
          flex items-center justify-center
          text-white font-semibold gap-2
          rounded-[1rem]
          cursor-pointer
          group
        "
        onClick={onClick}
        style={{ backgroundColor: bgColor, width }}
      >
        <h1>{label}</h1>
        {showIcon && (
          <div
            className={`
   transition-transform duration-300 ease-in-out
   ${isRotate ? "group-hover:rotate-45" : ""}
 `}
          >
            <ArrowUpRight size={iconSize} />
          </div>
        )}
      </div>
    </BorderWithGradient>
  );
};

export default Button;
