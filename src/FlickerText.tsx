import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FlickerText: React.FC = () => {
  const text = "Flash Hack";
  const [fade] = useState<number>(0);
  const [flickerDuration, ] = useState<number>(100);
  
  useEffect(() => {
    const container = document.getElementById("container");
    if (!container) return;

    container.innerHTML = "";
    text.split("").forEach((char) => {
      const p = document.createElement("p");
      p.classList.add("flicker");
      p.textContent = char;
      container.appendChild(p);
    });
  }, []);

  useEffect(() => {
    const flickerEffect = () => {
      const p = document.getElementsByClassName("flicker");
      const randomNumber = Math.floor(Math.random() * p.length);

      for (let i = 0; i < p.length; i++) {
        (p[i] as HTMLElement).style.transitionDuration = `${fade}s`;
      }

      if (!p[randomNumber].classList.contains("on")) {
        p[randomNumber].classList.add("on");
      } else {
        p[randomNumber].classList.remove("on", "white");
      }
    };

    const myInterval = setInterval(flickerEffect, 20);

    return () => clearInterval(myInterval);
  }, [fade, flickerDuration]);

  return (
    <AppContainer>
      <Container id="container"></Container>
      
    </AppContainer>
  );
};

export default FlickerText;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  

  p {
    text-transform: uppercase;
    font-size: 10vh;
    text-align: center;
    margin: 0 10px;
    transition: all 0.2s ease-in-out;
  }

  .on {
    -webkit-text-stroke: 1px white;
    text-shadow: 0px 0px 8px white, 0px 0px 20px rgba(255, 255, 255, 0.5);
  }

  .white {
    color: white;
  }
`;

