"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-bg-text", {
        y: 80,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".hero-image",
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 1,
          },
          "-=0.6",
        )
        .from(
          ".hero-intro > *",
          {
            x: -40,
            opacity: 0,
            stagger: 0.18,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".hero-stat",
          {
            x: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
          },
          "-=0.5",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#f5f5f3] pt-28 sm:pt-32"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center px-5 pb-12 sm:px-8 lg:px-10">
        {/* Background Text */}
        <h1 className="hero-bg-text pointer-events-none absolute left-1/2 top-[17%] z-0 -translate-x-1/2 whitespace-nowrap text-[19vw] font-black leading-none tracking-[-0.07em] text-black/[0.06] sm:top-[15%] sm:text-[17vw] lg:top-[12%] lg:text-[15rem]">
          DEVELOPER
        </h1>

        {/* Main Content */}
        <div className="relative z-10 grid flex-1 items-center gap-8 lg:grid-cols-[1fr_1.1fr_0.8fr] lg:gap-5">
          {/* Left Content */}
          <div className="hero-intro order-2 self-center text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-red-500 sm:text-sm">
              HELLO! I'M RAKIB
            </p>

            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#151515] sm:text-4xl lg:text-[2.8rem] xl:text-5xl">
              I'M Web Developer{" "}
              <span className="text-red-500">CREATE A WEB APP.</span>
            </h2>

            <p className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#333] sm:text-lg">
              <span className="text-xl text-red-500">→</span>
              Web Development
            </p>

            {/* <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-500 lg:mx-0">
              Building modern, responsive, and engaging web experiences with
              clean code and creative design.
            </p> */}
          </div>

          {/* Center Image */}
          <div className="hero-image order-1 flex h-[300px] items-end justify-center sm:h-[400px] lg:order-2 lg:h-[540px]">
            <div className="relative h-full w-full max-w-[420px]">
              <Image
                src="/Rakib.png"
                alt="Rakib - Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 420px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Statistics */}
          <div className="order-3 grid grid-cols-2 gap-3 self-center lg:grid-cols-1 lg:gap-5 lg:pl-8">
            {/* <div className="hero-stat rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <h3 className="text-4xl font-black tracking-tight text-[#151515] sm:text-5xl">
                90<span className="text-red-500">%</span>
              </h3>
              <p className="mt-2 text-xs font-medium leading-5 text-gray-500 sm:text-sm">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="hero-stat rounded-2xl bg-[#171717] p-5 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
                32<span className="text-red-500">+</span>
              </h3>
              <p className="mt-2 text-xs font-medium leading-5 text-white/60 sm:text-sm">
                Projects Launched
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
