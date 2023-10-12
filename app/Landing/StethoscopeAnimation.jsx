"use client";
import Lottie from "lottie-react";
import Stethoscope from "./Stethoscope.json";

export default function StethoscopeAnimation() {
  return (
    <div>
      <Lottie animationData={Stethoscope} loop={true} />
    </div>
  );
}
