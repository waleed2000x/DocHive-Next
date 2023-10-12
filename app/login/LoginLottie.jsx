"use client";
import Lottie from "lottie-react";
import DoctorLottie from "./DoctorLottie.json";
export default function LoginLottie() {
  return (
    <div className="doctor-lottie">
      <p>
        Get Started With <b>Doc</b>
        <span>
          <b>Hive</b>
        </span>
      </p>
      <Lottie animationData={DoctorLottie} loop={true} />
    </div>
  );
}
