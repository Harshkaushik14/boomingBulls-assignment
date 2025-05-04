// components/CommonVideo.tsx
"use client";

import React from "react";
import Button from "./Button";

interface CommonVideoProps {
  videoSrc: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
  buttonLabel?: string;
  buttonBgColor?: string;
  buttonClassName?: string;
  buttonWidth?: string;
  showButton?: boolean;
}

const CommonVideo: React.FC<CommonVideoProps> = ({
  videoSrc,
  autoPlay = true,
  muted = true,
  loop = true,
  showControls = false,
  buttonLabel = "Get Funded",
  buttonBgColor = "black",
  buttonClassName = "",
  buttonWidth = "10rem",
  showButton = true,
}) => {
  return (
    <div className="mb-20">
      <div className="w-full mx-auto max-w-[470px]">
        <video
          src={videoSrc}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          controls={showControls}
          preload="auto"
          className="w-full h-auto"
        />
      </div>

      {showButton && (
        <Button
          label={buttonLabel}
          bgColor={buttonBgColor}
          isRotate={true}
          className={`w-min mx-auto border border-black mt-[3.5rem] ${buttonClassName}`}
          width={buttonWidth}
        />
      )}
    </div>
  );
};

export default CommonVideo;
