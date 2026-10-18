"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGreensock,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaShieldAlt, FaRobot } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories = ["All", "Frontend", "Backend", "Tools"];

const skills = [
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26", desc: "Web Structure" },
  { name: "CSS3", category: "Frontend", icon: SiCss, color: "#1572B6", desc: "Visual Styling" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#D4A900", desc: "Core Language" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6", desc: "Type Safety" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#087EA4", desc: "UI Development" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#171717", desc: "React Framework" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#0891B2", desc: "Utility Styling" },
  { name: "Bootstrap", category: "Frontend", icon: SiBootstrap, color: "#7952B3", desc: "CSS Framework" },
  { name: "GSAP", category: "Frontend", icon: SiGreensock, color: "#65A30D", desc: "Web Animation" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#43853D", desc: "JavaScript Runtime" },
  { name: "Express.js", category: "Backend", icon: SiExpress, color: "#171717", desc: "Server Framework" },
  { name: "MongoDB", category: "Backend", icon: SiMongodb, color: "#16803D", desc: "NoSQL Database" },
  { name: "Better Auth", category: "Backend", icon: FaShieldAlt, color: "#525252", desc: "Authentication" },
  { name: "VS Code", category: "Tools", icon: VscVscode, color: "#007ACC", desc: "Code Editor" },
  { name: "AI Tools", category: "Tools", icon: FaRobot, color: "#171717", desc: "AI-Assisted Workflow" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "All" || skill.category === activeCategory
  );

  useGSAP(
    () => {
      gsap.from(".skills-top > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.from(".skill-item", {
        y: 25,
        opacity: 0,
        scale: 0.96,
        stagger: 0.05,
        duration: 0.45,
        ease: "power2.out",
      });
    },
    {
      scope: sectionRef,
      dependencies: [activeCategory],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#f5f5f3] px-5 py-24 text-[#171717] sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="skills-top">
          <div className="flex items-center justify-between border-b border-black/15 pb-5">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500 sm:text-sm">
              <span className="h-[2px] w-8 bg-red-500" />
              03 / My Skills
            </p>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-black/40 sm:block">
              Tech Stack
            </span>
          </div>

          <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[7rem]">
              MY
              <br />
              <span className="text-red-500">SUPER</span>
              <br />
              POWERS<span className="text-red-500">.</span>
            </h2>

            <div className="max-w-md pb-2 lg:justify-self-end">
              <p className="text-lg font-semibold leading-relaxed sm:text-xl">
                The technologies I use to turn ideas into digital experiences.
              </p>

              <p className="mt-4 text-sm leading-8 text-black/50 sm:text-base">
                From crafting responsive interfaces to exploring backend
                systems, I'm continuously learning and building with modern
                web technologies.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/55">
                  Always learning something new
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-2 border-b border-black/15 pb-6 sm:mt-20">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                activeCategory === category
                  ? "border-[#171717] bg-[#171717] text-white"
                  : "border-black/10 bg-transparent text-black/55 hover:border-black/40 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}

          <span className="ml-auto text-xs tabular-nums text-black/40">
            {String(filteredSkills.length).padStart(2, "0")} TECHNOLOGIES
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className="skill-item group relative flex min-h-[170px] flex-col justify-between overflow-hidden border-b border-r border-black/10 bg-transparent p-5 transition-colors duration-300 hover:bg-white sm:min-h-[195px] sm:p-7 lg:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-14 sm:w-14">
                    <Icon
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-[10px] font-medium tracking-widest text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-base font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    {skill.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <p className="text-xs text-black/45">{skill.desc}</p>

                    <span className="translate-x-1 text-sm text-red-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: skill.color }}
                />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;