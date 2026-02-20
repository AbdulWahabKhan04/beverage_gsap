import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer dip"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHURSBOUGH
          </h1>
        </div>
        {
          isMobile ? (<img src="/images/footer-drink.png" className="absolute top-0 object-contain"></img>) : (
        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          className="absolute top-0 object-contain mix-blend-lighten"
        ></video>
)
        }
        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPLYT Flavors</p>
            </div>

            <div>
              <p>Club</p>
              <p>Marketing</p>
              <p>Diary Dealers</p>
            </div>

            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>
          <div className="md:max-w-lg">
            <p>
              Get Exclusve Updates, Tasty News, and Special Offers Delivered
              Straight to Your Inbox! Sign Up for Our Newsletter and Stay in the
              Loop with All Things SPLYT.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10" >
              <input type="email" placeholder="Enter Your Email!"
              className="w-full placeholder:font-sans placeholder:text-yellow-50"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>© 2024 SPLYT Flavors. All rights reserved.</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
