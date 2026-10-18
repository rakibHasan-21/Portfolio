"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Horizantall = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const wrapper = section.querySelector(".wrapper-404");

      const getScrollAmount = () =>
        Math.max(0, wrapper.scrollWidth - window.innerWidth);

      gsap.to(wrapper, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="about-area relative h-screen w-full overflow-hidden bg-[#f5f5f3]"
    >
      <div className="scroll-bar h-screen w-full overflow-hidden">
        <div className="wrapper-404 flex h-screen w-[400vw] items-center will-change-transform">
          <h1 className="web-text m-0 w-[400vw] whitespace-nowrap text-[40vw] font-black leading-none tracking-[-0.06em] text-[#171717]">
            Web Developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Horizantall;
