"use client";
import Button from "@/src/components/Button";
import { CommonHeading } from "@/src/components/CommonHeading";
import CommonVideo from "@/src/components/CommonVideo";
import Plans from "@/src/components/Packages";
import PayoutSection from "@/src/components/PayoutSection";
import TimelineStep from "@/src/components/TimelineStep";
import TradeAnywhere from "@/src/components/TradeAnywhere";
import { steps } from "@/src/utils/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Button
        label="Our Process"
        showIcon={false}
        bgColor="black"
        isRotate={false}
        className="w-min m-auto border border-black mt-[2rem]"
        width="9rem"
      />
      <CommonHeading
        title="Become a"
        highlight="Zuperior Pro"
        subtitle="🚀 Sign up. Fund. Trade."
        direction="right"
      />
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {steps.map((item) => (
            <TimelineStep key={item.step} step={item.step} title={item.title} />
          ))}
        </div>
      </div>
      <CommonHeading
        title="Compare your"
        highlight="Zuper Plan"
        subtitle="Prove your skills, get funded, and trade like a pro."
        direction="left"
      />
      <Button
        label="Open FREE Account"
        bgColor="black"
        showIcon={true}
        isRotate={true}
        className="w-min m-auto border border-black mt-[1rem]"
        width="14rem"
      />
      <Plans />
      <CommonHeading
        title="Get Funded Up to"
        highlight="$10,000"
        subtitle="Prove your skills, get funded, and trade like a pro."
        direction="left"
      />

      <CommonVideo
        videoSrc="https://framerusercontent.com/assets/sWmiKEKRNwHsRnlCdsxkQraiFc.mp4"
        showButton={false}
        buttonBgColor="purple"
        buttonWidth="12rem"
      />
      <Button
        label="Get Funded"
        bgColor="black"
        showIcon={true}
        isRotate={true}
        className="w-min m-auto border border-black mt-[1rem] "
        width="9rem"
      />
      <PayoutSection />
      <TradeAnywhere />
    </div>
  );
}
