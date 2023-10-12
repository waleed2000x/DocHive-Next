"use client";
import Lottie from "lottie-react";
import DoctorAssistant from "./DoctorAssistant.json";

export default function Heartbeat() {
  return (
    <div style={{ width: "100%" }}>
      <Lottie animationData={DoctorAssistant} />
    </div>
  );
}
