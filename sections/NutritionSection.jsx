import React, { useEffect, useState } from "react";
import { nutrientLists } from "../constants";
import {useMediaQuery} from "react-responsive"
import {useGSAP} from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap";

function NutritionSection() {
  const isMobile = useMediaQuery({
    query:"(max-width:768px)"
  })
  const [lists,setLists] = useState(nutrientLists)

  useGSAP(()=>{
     const titleSplit = SplitText.create(".nutrition-title",{
      type:"chars"
     })
      const pSplit = SplitText.create(".nutrition-section p",{
        type:"words,lines",
        linesClass:"paragraph-line"
      })

      const contentTl = gsap.timeline({
        scrollTrigger:{
          trigger:".nutrition-section",
          start:"top center",
          
        }
      })

      contentTl.from(titleSplit.chars,{
        yPercent:100,
        stagger:0.03,
        ease:"power2.out"
      }).from(pSplit.words,{
        yPercent:300,
        rotate:3,
        ease:"power1.inOut",
        duration:1,
        stagger:0.01,
      })


  })

  useEffect(()=>{
    if(isMobile){
      setLists(nutrientLists.slice(0,3))
    } else{
      setLists(nutrientLists)
    }
  },[isMobile])
  return (
    <section className="nutrition-section">
      <img
        className="w-full object-cover"
        src="/images/slider-dip.png"
        alt=""
      />

      <img src="/images/big-img.png" alt="bg" className="big-img" />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mnt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center gap-24 itemes-center">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div className="nutrition-text-scroll place-self-start">
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right font-paragraph text-balance">
              Milk contains blah blah blah b la hb lah blah bl ah bl a hb lah
            </p>
          </div>
        </div>

        <div className="nutrition-box">
            <div className="list-wrapper">
                {
                    lists.map((e,i)=>{
                     return  <div key={i} className="relative flex-1 col-center">
                            <div>
                                <p className="md:text-lg font-paragraph">{e.label}</p>
                                <p className="font-paragraph text-sm mt-2">up to</p>
                                <p className="text-2xl md:text-4xl tracking-tighter font-bold">{e.amount}</p>
                            </div>

                            {
                                i !== lists.length-1 && <div className="spacer-border" />
                            }
                        </div>
                    })
                }
            </div>
        </div>
      </div>
    </section>
  );
}

export default NutritionSection;
