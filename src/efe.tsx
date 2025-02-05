import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import { Flame, Clock, Brain } from "lucide-react";

gsap.registerPlugin(CSSPlugin);

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

/*   useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);
 */
  const reveal = (): void => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
        setIsLoaded(true); // Show content after loading
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
        height: "100%",
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

  const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = React.useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  
    React.useEffect(() => {
      const targetDate = new Date('2025-01-15T00:00:00');
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex gap-4 text-center justify-center relative speedometer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-orange-500/20">
            <div className="text-4xl font-bold text-white flicker">{value}</div>
            <div className="text-sm text-orange-400 uppercase tracking-wider">{unit}</div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <AppContainer>
      {!isLoaded && (
        <Loading>
          <Follow className="follow"></Follow>
          <ProgressBar
            className="hide"
            id="progress-bar"
            style={{ width: `${counter}%` }}
          ></ProgressBar>
          <Count id="count" className="hide">
            {counter}%
          </Count>
        </Loading>
      )}

      {isLoaded && (
        <Content className="content">
          <div className="relative min-h-screen flex items-center overflow-hidden electric-grid">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/20" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 speed-lines" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Flame className="w-12 h-12 text-orange-500 animate-pulse" />
                  <h1 className="text-6xl md:text-8xl font-bold comic-text text-yellow-100">
                    FlashHack
                  </h1>
                </div>
                <p className="text-2xl md:text-4xl mb-8 text-yellow-100 text-center comic-text">
                  Think Fast. Build Faster.
                </p>
                <p className="text-xl mb-12 text-yellow-300">
                  A high-speed hackathon where ideas turn into reality in just 3 hours!
                </p>
                <CountdownTimer />
                <div className="flex gap-4 justify-center mt-12">
                  <a
                    href="https://flashhack.devfolio.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] glow-effect"
                  >
                    Register Now
                  </a>
                  <a
                    href="https://chat.whatsapp.com/FgqWREf3HapCY2rORB3r65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] glow-effect"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="py-20 bg-black/30 relative overflow-hidden">
            <div className="absolute inset-0 speed-lines opacity-50" />
            <div className="container mx-auto px-4 relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 comic-text text-yellow-100">
                    What is FlashHack?
                  </h2>
                  <p className="text-orange-100 mb-6">
                    FlashHack is a high-intensity, AI-powered hackathon hosted by GDG On Campus RCET, designed for innovators who thrive under pressure. With just 3 hours on the clock, participants will race against time to build functional prototypes using AI tools, open-source modifications, or custom-built solutions from scratch.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-gradient-to-br from-orange-900/30 to-transparent rounded-lg border border-orange-500/20">
                      <Brain className="w-8 h-8 text-orange-500 mb-2" />
                      <h3 className="font-bold mb-2 text-orange-400">Critical Thinking</h3>
                      <p className="text-sm text-orange-200">Test your problem-solving skills</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-red-900/30 to-transparent rounded-lg border border-red-500/20">
                      <Clock className="w-8 h-8 text-red-500 mb-2" />
                      <h3 className="font-bold mb-2 text-red-400">Time Challenge</h3>
                      <p className="text-sm text-red-200">Build under pressure</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                    alt="AI Technology"
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg" />
                </div>
              </div>
            </div>
          </section>
        </Content>
      )}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
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
  background-color: #f48049;
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
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
  transition: width 0.7s ease-in-out;

  p {
    text-align: center;
    font-size: 104px;
    opacity: 0;
    display: none;
    font-weight: 500;
    margin: 0;
  }
`;
