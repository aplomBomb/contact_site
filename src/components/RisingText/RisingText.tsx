import React, { FC, useState, useLayoutEffect } from "react";
import { Frame } from "framer";
import "./RisingText.scss";

export const RisingText: FC<{
  text: string;
  animationCallback: () => void;
  delay?: number
  speed: number
  fromTop?: boolean
}> = ({ text, animationCallback, delay, speed, fromTop }) => {
    const [orientation, setOrientation] = useState('landscape' || 'portrait')
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: speed } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: fromTop ? -20 : 20,
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

  useLayoutEffect(() => {
      if (window.innerWidth < window.innerHeight) {
          setOrientation('portrait')
      }
      console.log('FIRE!!!')
  })
  

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
        fontSize: orientation === 'landscape' ? '4rem' : '1.8rem',
        color: "black",
        display: "flex",
        justifyContent: "center", 
      }}
      variants={containerVariants}
      initial={"before"}
      animate={"after"}
      onAnimationComplete={animationCallback ? () => animationCallback() : undefined }
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
