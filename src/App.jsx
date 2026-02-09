import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Message from "../sections/Message";
import FlavorSection from "../sections/FlavorSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <FlavorSection/>
      <div className="h-dvh">

      </div>
    </main>
  );
}

export default App;
