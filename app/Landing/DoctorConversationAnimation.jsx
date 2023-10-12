"use client";
import Lottie from "lottie-react";
import DoctorConversation from "./DoctorConversation.json";

export default function DoctorConversationAnimation() {
  return (
    <div>
      <Lottie animationData={DoctorConversation} />
    </div>
  );
}
