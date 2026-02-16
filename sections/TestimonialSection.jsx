import React, { useRef } from "react";
import { cards } from "../constants";

function TestimonialSection() {
  const handleMouseEnter = (i) => {
    const video = vdRef.current[i]
    video.play()
  };
  const handlePause = (index)=>{
    const video = vdRef.current[index]
    video.pause()
  }
  const vdRef = useRef({});
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title"> Saying?</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => {
          return (
            <div
              onMouseLeave={() => handlePause(index)}
              key={index}
              className={`vd-card ${card.translation} ${card.rotation}`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <video
                ref={(el) => {
                  vdRef.current[index] = el;
                }}
                src={card.src}
                playsInline
                muted
                loop
                className="size-full object-cover "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TestimonialSection;
