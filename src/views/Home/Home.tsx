import React, { FC, useState, useEffect } from "react";
import { Frame, useCycle } from "framer";
import { Name } from "../../components";
import "./Home.scss";

export const Home: FC<{}> = () => {
  const nameVariants = {
    initial: { height: "100vh", width: "100vw", background: "transparent" },
    middle: { height: "15vh", width: "15vw", background: "transparent" },
  };

  const [nameCurrent, cycleNameProperties] = useCycle("initial", "middle");

  return (
    <Frame
      style={{ height: "100vh", width: "100vw", background: "transparent" }}
      className="Home_container"
      variants={nameVariants}
      animate={nameCurrent}
    >
      <Name
        name="Christian Baldwin"
        animationCallback={() => cycleNameProperties()}
      />
    </Frame>
  );
};
