"use client";
import Lottie from "lottie-react";
import Animation from "./DoctorMobile.json";
export default function DoctorMobiles() {
  return (
    <div>
      <Lottie animationData={Animation} loop={true} />
    </div>
  );
}
