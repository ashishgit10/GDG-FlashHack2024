import React, { useState, useEffect } from 'react';
import FlipNumbers from 'react-flip-numbers';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  .flip-numbers span {
    font-weight: bold !important; 
  }
`;

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-17T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="flex flex-col items-center justify-center pt-8 md:px-4 md:py-10">
        {/* Responsive Grid for Countdown Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {/** Days **/}
          <div className="flex flex-col items-center md:p-4 px-4 py-4 rounded-lg">
            <FlipNumbers
              height={45} // Smaller size for mobile
              width={35}
              play={true}
              color="white"
              numbers={String(timeLeft.days).padStart(2, '0')}
            />
            <span className="mt-2 sm:mt-4 text-orange-500 text-2xl sm:text-2xl">Days</span>
          </div>

          {/** Hours **/}
          <div className="flex flex-col items-center md:p-4 px-4 py-4 rounded-lg">
            <FlipNumbers
              height={45}
              width={35}
              play={true}
              color="white"
              numbers={String(timeLeft.hours).padStart(2, '0')}
            />
            <span className="mt-2 sm:mt-4 text-orange-500 text-2xl sm:text-2xl">Hours</span>
          </div>

          {/** Minutes **/}
          <div className="flex flex-col items-center md:p-4 px-4 py-4 rounded-lg">
            <FlipNumbers
              height={45}
              width={35}
              play={true}
              color="white"
              numbers={String(timeLeft.minutes).padStart(2, '0')}
            />
            <span className="mt-2 sm:mt-4 text-orange-500 text-2xl sm:text-2xl">Minutes</span>
          </div>

          {/** Seconds **/}
          <div className="flex flex-col items-center md:p-4 px-4 py-4 rounded-lg">
            <FlipNumbers
              height={45}
              width={35}
              play={true}
              color="white"
              numbers={String(timeLeft.seconds).padStart(2, '0')}
            />
            <span className="mt-2 sm:mt-4 text-orange-500 text-2xl sm:text-2xl">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
