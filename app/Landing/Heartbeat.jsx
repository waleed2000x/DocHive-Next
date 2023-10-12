"use client";
import Lottie from "lottie-react";
import BPM from "./BPM.json";

export default function Heartbeat() {
  return (
    <div className="BPM">
      <Lottie animationData={BPM} />
    </div>
  );
}
