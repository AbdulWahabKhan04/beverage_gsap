import React from "react";
import { nutrientLists } from "../constants";

function NutritionSection() {
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
              <h1>It still does</h1>
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
                    nutrientLists.map((e,i)=>{
                     return  <div key={i} className="relative flex-1 col-center">
                            <div>
                                <p className="md:text-lg font-paragraph">{e.label}</p>
                                <p className="font-paragraph text-sm mt-2">up to</p>
                                <p className="text-2xl md:text-4xl tracking-tighter font-bold">{e.amount}</p>
                            </div>

                            {
                                i !== nutrientLists.length-1 && <div className="spacer-border" />
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
