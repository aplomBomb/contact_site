import React, { FC } from "react";
import { Frame } from "framer";
import "./RisingText.scss";

export const RisingText: FC<{
  text: string;
  animationCallback: () => void;
}> = ({ text, animationCallback }) => {
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };

  let parsedText = text.split("");
  console.log(parsedText)

  return (
    <Frame
      center={"y"}
      height={26}
      width={"100%"}
      background={""}
      style={{
        fontFamily: "Montserrat, Work Sans, sans-serif",
        fontWeight: "bolder",
        letterSpacing: "-0.04em",
        fontSize: "3rem",
        color: "black",
        display: "flex",
        justifyContent: "center", 
      }}
      variants={containerVariants}
      initial={"before"}
      animate={"after"}
      onAnimationComplete={() => animationCallback()}
    >
      {parsedText.map((letter: string, index: number) => (
        <Frame
          key={index}
          width={"auto"}
          height={26} 
          background={""}
          style={{ position: "relative" }} 
          variants={letterVariants}
          whileHover={{ scale: 1.2 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </Frame>
      ))}
    </Frame>
  );
};
