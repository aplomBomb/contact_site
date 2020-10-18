import React, { FC, useState, useEffect } from "react";
import { Frame, useCycle } from "framer";
import { RisingText } from "../../components";
import "./Intro.scss";

export const Intro: FC<{}> = () => {
  const [nameCurrent, cycleNameProperties] = useCycle("initial", "finished");
  const [, setNameFinished] = useState(false);

  const nameVariants = {
    initial: {
      opacity: 1,
      height: "100vh",
      width: "100vw",
      // translateX: 100,
      background: "transparent",
    },
    finished: {
      opacity: 0,
      height: "100vh",
      width: "100vw",
      // translateX: -100,
      background: "transparent",
    },
  };

  useEffect(() => {
    if (nameCurrent === "finished") {
      setNameFinished(true);
    }
  }, [setNameFinished, nameCurrent]);

  return (
    <Frame
      style={{
        height: "100vh",
        width: "100vw",
        background: "transparent",
      }}
      className="Home_container"
      variants={nameVariants}
      animate={nameCurrent}
    >
      <RisingText
        text="My name is Christian"
        animationCallback={() => cycleNameProperties()}
      />
    </Frame>
  );
};
