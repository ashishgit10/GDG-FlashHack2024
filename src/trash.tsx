
import Faq from './Faq';

import About from './Components/About';
import Timeline from './Components/Timeline';
import Judging from './Components/Judging';
import Community from './Components/Community';

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { gsap, CSSPlugin, Expo } from "gsap";
import Landingpage from './Components/Landingpage';
gsap.registerPlugin(CSSPlugin);


function App() {
  const [counter, setCounter] = useState<number>(0);
/* 
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter: number) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);
 */


  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%aq",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <div className=" bg-black text-white">
      <AppContainer>
        <Loading>
          <Follow className="follow"></Follow>
          <ProgressBar
            className="hide"
            id="progress-bar"
            style={{ width: counter + "%" }}
          ></ProgressBar>
          <Count id="count" className="hide">
            {counter}%
          </Count>
        </Loading>

        <Content className="content">

          {/* Hero Section */}
          <section className="title-lines">
            <Landingpage />
          </section>

          {/* About Section */}
          <section className="title-lines">
            <About />
          </section>

          {/* Timeline Section */}

          <div className="title-lines">
            <Timeline />
          </div>

          {/* Judging Criteria */}
          <section className="title-lines">
            <Judging />
          </section>

          {/* FAQ Section */}
          <section className="title-lines">
            <Faq />
          </section>

          {/* Community Section */}
          <section className="title-lines">
            <Community />
          </section>
        </Content>
      </AppContainer>


    </div>
  );
}

export default App;


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #000000;
  position: relative;
  overflow-x: hidden;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #34a40e;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #121212;
  padding: auto;

  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  color: #fff;

  p {
    text-align: center;
    font-size: 104px;
    opacity: 0;
    display: none;
    font-weight: 500;
    margin: 0;
  }
`;