import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });
    const secondSplit = SplitText.create(".second-text-split", {
      type: "chars",
    });
    
    const revealTl = gsap.timeline({
        scrollTrigger:{
            trigger:".flavor-section",
            start:"top 30%",
        },
    })

    revealTl.from(firstSplit.chars,{
        stagger:0.05,
        duration:0.5,
        yPercent:200,
        ease:"power2.out",
        
    })
    revealTl.from(secondSplit.chars,{
        stagger:0.05,
        duration:0.5,
        yPercent:200,
        ease:"power2.out",
        
    })

    revealTl.to(".flavor-text-scroll",{
        duration:0.5,
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
        ease:"circ.inOut",
        
    },"=-0.5" )



  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 ">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div style={{ clipPath: "polygon(50% 0, 50% 1%, 50% 100%, 50% 100%)" }} className="flavor-text-scroll">
        <div className="bg-mid-brown ">
          <h2 className="text-milk pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
            Freaking
          </h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
