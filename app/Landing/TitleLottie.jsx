"use client";
import Lottie from "lottie-react";
import Title from "./Title.json";
// import DoctorAssistant from "./DoctorAssistant.json";

export default function TitleLottie() {
  return (
    <div>
      {/* <Lottie animationData={DoctorAssistant} loop={true} /> */}
      <Lottie animationData={Title} loop={true} />
    </div>
  );
}
