"use client";
import Typewriter from "typewriter-effect";
export default function TypeWriter({ title, words, style }) {
  let stylingClass = style.stylingClass;
  return (
    <div className="title-heading">
      <h1>
        {title.h1}
        <span>{title.span}</span>
      </h1>
      <Typewriter
        options={{
          wrapperClassName: stylingClass,
          deleteSpeed: "fast",
          cursor: "",
          strings: words,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
