
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  Globe,
  MoveUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const details = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and interactive interfaces using modern frontend technologies.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Creative Development",
    description:
      "Creating engaging digital experiences with smooth animations, creative layouts, and interactions.",
    icon: Sparkles,
    tags: ["GSAP", "Tailwind CSS", "UI/UX"],
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Exploring server-side development, REST APIs, authentication, and database management.",
    icon: Layers3,
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
];

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-top", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            once: true,
          },
        });

        gsap.from(".about-title-line", {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".about-description", {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-description",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".about-info-card", {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-info-grid",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".about-bottom", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".about-bottom",
            start: "top 95%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: aboutRef }
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-[#f5f5f3] px-5 py-24 text-[#111111] sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Label */}
        <div className="about-top flex flex-col justify-between gap-4 border-b border-black/20 pb-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500" />

            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              About Me
            </p>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Independent Developer / Bangladesh
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

          {/* Heading */}
          <div className="about-title">
            <p className="mb-8 text-sm font-medium text-red-500">
              A LITTLE INTRODUCTION
            </p>

            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              <span className="block overflow-hidden pb-2">
                <span className="about-title-line block">
                  CREATIVE
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="about-title-line block text-red-500">
                  DEVELOPER
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="about-title-line block">
                  <span className="text-red-500">.</span> THINKER
                </span>
              </span>
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-black/30" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Turning ideas into reality
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-end lg:pb-4">
            <div className="about-description">
              <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Hello! I'm{" "}
                <span className="text-red-500">Rakib</span>, a developer
                passionate about creating meaningful digital experiences.
              </p>
            </div>

            <div className="about-description mt-7">
              <p className="text-sm leading-8 text-black/60 sm:text-base sm:leading-9">
                I enjoy building modern web applications that combine clean
                design with powerful functionality. My journey started with
                frontend development, and now I'm expanding my knowledge
                into backend development to build complete web solutions.
              </p>
            </div>

            <div className="about-description mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-xs font-bold tracking-wider text-white transition-all duration-300 hover:bg-red-500"
              >
                LET'S CONNECT
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://github.com/rakibHasan-21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 text-xs font-bold tracking-wider transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                GITHUB
                <MoveUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px border-y border-black/15 bg-black/15 md:grid-cols-4">
          <div className="bg-[#f5f5f3] py-8 pr-4 md:py-10">
            <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
              03<span className="text-red-500">+</span>
            </h3>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 sm:text-xs">
              Projects Built
            </p>
          </div>

          <div className="bg-[#f5f5f3] py-8 pl-4 md:py-10 md:pl-8">
            <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
              10<span className="text-red-500">+</span>
            </h3>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 sm:text-xs">
              Technologies
            </p>
          </div>

          <div className="bg-[#f5f5f3] py-8 pr-4 md:py-10 md:pl-8">
            <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
              24<span className="text-red-500">/7</span>
            </h3>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 sm:text-xs">
              Learning
            </p>
          </div>

          <div className="bg-[#f5f5f3] py-8 pl-4 md:py-10 md:pl-8">
            <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
              100<span className="text-red-500">%</span>
            </h3>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 sm:text-xs">
              Passion
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-24 md:mt-32">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                WHAT I BRING
              </p>

              <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
                My Expertise<span className="text-red-500">.</span>
              </h3>
            </div>

            <p className="max-w-xs text-sm leading-7 text-black/50">
              A combination of technical skills, creative thinking, and
              continuous learning.
            </p>
          </div>

          <div className="about-info-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="about-info-card group border border-black/10 bg-white/40 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-black/35">
                      / {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h4 className="mt-12 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h4>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-black/55">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-black/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full bg-black/10 transition-all duration-500 group-hover:bg-red-500" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="about-bottom mt-20 flex flex-col justify-between gap-6 border-t border-black/20 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold tracking-tight sm:text-2xl">
              Always learning. Always building.
            </p>

            <p className="mt-2 text-xs text-black/45">
              Focused on growth, creativity, and better solutions.
            </p>
          </div>

          <a
            href="https://github.com/rakibHasan-21"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-xs font-bold tracking-widest transition-colors hover:text-red-500"
          >
            EXPLORE MY WORK
            <Globe
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
