"use client";
import Lottie from "lottie-react";
import PerfectBackground from "./PerfectBackground.json";
export default function BackgroundAnimation() {
  return (
    <div
      style={{
        position: "fixed",
        top: "-370px",
        width: "100%",
        zIndex: "-1",
      }}
    >
      <Lottie animationData={PerfectBackground} loop={true} />
    </div>
  );
}
