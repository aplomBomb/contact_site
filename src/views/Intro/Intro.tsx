import React, { FC, useState, useEffect } from "react";
import { Frame, useCycle } from "framer";
import { RisingText } from "../../components";
import "./Intro.scss";

export const Intro: FC<{}> = () => {
  const [nameCurrent, cycleNameProperties] = useCycle("initial", "finished");
  const [hobbyCurrent, cycleHobbyProperties] = useCycle("initial", "finished");
  const [nameFinished, setNameFinished] = useState(false);
  const [hobbyFinished, setHobbyFinished] = useState(false);

  const hobbyVariants = {
    initial: {
      opacity: 0,
      height: "100vh",
      width: "100vw",
      // translateX: 100,
      background: "transparent",
    },
    finished: {
      opacity: 1,
      height: "100vh",
      width: "100vw",
      // translateX: -100,
      background: "transparent",
    },
  };

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
    if (hobbyCurrent === "finished") {
      setHobbyFinished(true);
    }
  }, [setNameFinished, nameCurrent, hobbyCurrent, setHobbyFinished]);

  return (
    <>
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
          speed={0.04}
        />
      </Frame>
      <Frame
        style={{
          height: "100vh",
          width: "100vw",
          background: "transparent",
        }}
        className="Home_container"
        variants={hobbyVariants}
        animate={nameCurrent}
      >
        {nameCurrent === "finished" && (
          <RisingText
            text="I make stuff"
            animationCallback={() => cycleHobbyProperties()}
            speed={0.02}
            fromTop={true}
          />
        )}
      </Frame>
    </>
  );
};
