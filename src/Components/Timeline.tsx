import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import tm from "../assets/tm.svg"
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    date: "6th Feb",
    title: "Registration Opens",
    description: "Teams can start registering via Devfolio.",
  },
  {
    date: "11th Feb",
    title: "Registration Closes",
    description: "Deadline for team registrations.",
  },
  {
    date: "12th Feb",
    title: "Top Teams Announced",
    description: "Qualified teams are shortlisted and announced.",
  },
  {
    date: "15th Feb",
    title: "FlashHack Finale Begins",
    description: "Check-in, problem statement reveal, and kickoff!",
  },
  {
    date: "15th Feb (After 3 Hours)",
    title: "Judging & Winner Announcement",
    description: "Teams submit their projects, followed by judging and winner announcement.",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#timeline-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={timelineRef} className="flex bg-black relative flex-col items-center md:py-10 pt-10 pb-5">
      <div className="absolute inset-0 bg-cover bg-center md:bg-initial " style={{ backgroundImage: `url(${tm})` }} />
      <div className="mt-14">

        <h2 className="text-3xl relative font-bold text-center z-10 mb-8">Event Timeline</h2>
        <div className="relative w-full max-w-md">
          <div className="absolute left-5 top-0 h-4/5 w-1 bg-[#ff7300] rounded"></div>
          {timelineData.map((event, index) => (
            <div
              key={index}
              id="timeline-item"
              className="relative pl-10 pb-10 opacity-0"
            >
              <div className="absolute left-3 top-1 w-6 h-6 flex items-center justify-center bg-[#ff7300] text-white rounded-full shadow-md">
                <FaCheckCircle className="text-lg" />
              </div>
              <p className="text-gray-100 text-sm">{event.date}</p>
              <h3 className="text-lg text-[#deb100] font-semibold">{event.title}</h3>
              <p className="text-[#ffedd5] font-Doto font-bold">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Timeline;
