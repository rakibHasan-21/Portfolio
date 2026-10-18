"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            once: true,
          },
        });

        tl.from(".about-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
          .from(
            ".about-heading-line",
            {
              yPercent: 110,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.2",
          )
          .from(
            ".about-copy",
            {
              y: 25,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.4",
          )
          .from(
            ".about-detail",
            {
              y: 25,
              opacity: 0,
              stagger: 0.12,
              duration: 0.6,
            },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: aboutRef },
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-[#f5f5f3] px-5 py-24 text-[#171717] sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top line */}
        <div className="about-eyebrow flex items-center justify-between border-b border-black pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 sm:text-sm">
            ( 01 — About Me )
          </p>

          <p className="hidden text-xs font-medium uppercase tracking-widest text-black/45 sm:block">
            The person behind the code
          </p>
        </div>

        {/* Main heading */}
        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">
              <span className="block overflow-hidden pb-2">
                <span className="about-heading-line block">
                  I BUILD
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="about-heading-line block text-red-500">
                  FOR THE
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="about-heading-line block">
                  WEB<span className="text-red-500">.</span>
                </span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-end lg:pb-3">
            <p className="about-copy text-xl font-semibold leading-relaxed tracking-tight sm:text-2xl">
              I'm Rakib — a Full Stack developer who enjoys turning ideas into
              thoughtful digital experiences.
            </p>

            <p className="about-copy mt-6 text-sm leading-8 text-black sm:text-base sm:leading-9">
              I work with React, Next.js, TypeScript, and Tailwind CSS to
              create responsive, accessible, and interactive interfaces.
              I'm also exploring backend development to understand how
              complete web applications work, from UI to database.
            </p>

            <a
              href="#contact"
              className="about-copy group mt-8 inline-flex w-fit items-center gap-4 border-b border-red-500 pb-2 text-sm font-bold transition-colors hover:text-red-500"
            >
              LET'S WORK TOGETHER
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Developer details */}
        <div className="mt-20 border-t border-black sm:mt-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            <div className="about-detail border-b border-black py-8 sm:border-r sm:pr-8 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
                01 / What I Do
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Web Development
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black">
                Responsive interfaces, reusable components, and smooth
                user experiences built with modern web technologies.
              </p>
            </div>

            <div className="about-detail border-b border-black py-8 sm:pl-8 lg:border-r lg:px-8 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
                02 / What I Explore
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Motion & Interaction
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black">
                Learning GSAP to build meaningful animations and
                interactive experiences that make interfaces feel alive.
              </p>
            </div>

            <div className="about-detail border-b border-black py-8 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:pl-8 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
                03 / Where I'm Going
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Full-Stack Knowledge
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-black">
                Expanding my backend skills with APIs, databases, and
                authentication while strengthening my frontend foundation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="about-detail mt-10 flex flex-col justify-between gap-5 sm:mt-14 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-black">
            Always learning. Always building. Always looking for a better
            way to solve problems.
          </p>

          <a
            href="https://github.com/rakibHasan-21"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-bold"
          >
            EXPLORE MY GITHUB
            <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
