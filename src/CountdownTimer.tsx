import React, { useState, useEffect } from 'react';
import FlipNumbers from 'react-flip-numbers';
import styled, { createGlobalStyle } from 'styled-components';

// Global style to target the inner span elements of FlipNumbers
const GlobalStyle = createGlobalStyle`
  .flip-numbers span {
    font-weight: bold !important; /* Override the default font-weight */
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
    // Set target date to 15th February 2025
    const targetDate = new Date('2025-02-15T00:00:00'); // 15th Feb 2025, 00:00 AM

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval); // Stop the timer when countdown is finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
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
