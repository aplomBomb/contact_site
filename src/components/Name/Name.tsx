import React, { FC, useState } from "react";
import { Frame, useCycle } from "framer";
import "./Name.scss";

export const Name: FC<{
  name: string;
  animationCallback: () => void;
}> = ({ name, animationCallback }) => {
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

  let parsedName = name.split("");

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
        display: "flex", // Set the display value to flex
        justifyContent: "center", // Center all children elements on the x axis
      }}
      variants={containerVariants}
      initial={"before"}
      animate={"after"}
      onAnimationComplete={() => animationCallback()}
    >
      {parsedName.map((letter: string, index: number) => (
        <Frame
          key={index}
          width={"auto"} // Set the width to the width of the letter
          height={26} // Set the height to the height of the text
          background={""}
          style={{ position: "relative" }} // Position elements
          variants={letterVariants}
          whileHover={{ scale: 1.2 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </Frame>
      ))}
    </Frame>
  );
};
