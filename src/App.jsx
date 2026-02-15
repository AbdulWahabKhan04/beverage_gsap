import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "../sections/Message";
import FlavorSection from "../sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "../sections/NutritionSection";
import BenefitSection from "../sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <FlavorSection />
          <NutritionSection/>
          <BenefitSection />
          <div className="h-dvh"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
