"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Keep both files inside the public folder
const RESUME_PDF = "/Rakib_Hasan_Frontend_Developer_Resume%20(1).pdf";
const RESUME_IMAGE = "/Rakib.png";

const highlights = [
  { label: "Role", value: "Web Developer" },
  { label: "Stack", value: "React, JavaScript Next.js, Mongodb, node, expressjs" },
  { label: "Looking for", value: "Internship or junior role" },
  {
    label: "Education",
    value: "Vivekananda High School and College, Tangail",
  },
];

const Resume = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;

      gsap.from(".resume-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="relative overflow-hidden bg-[#f5f5f3] px-5 py-24 text-[#171717] sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="resume-reveal flex items-center justify-between border-b border-black/15 pb-5">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500 sm:text-sm">
            <span className="h-[2px] w-8 bg-red-500" />
            05 / Resume
          </p>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-black/40 sm:block">
            One-page CV
          </span>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Text side */}
          <div>
            <h2 className="resume-reveal text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[6.5rem]">
              MY
              <br />
              <span className="text-red-500">RESUME.</span>
            </h2>

            <p className="resume-reveal mt-8 max-w-md text-base leading-8 text-black/55 sm:text-lg">
              I am looking for a frontend internship or junior role where I can
              apply my skills, contribute to useful products, and keep learning
              backend development.
            </p>

            {/* Resume details */}
            <dl className="resume-reveal mt-10 grid gap-x-8 gap-y-6 border-t border-black/15 pt-8 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base font-bold tracking-tight">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Buttons */}
            <div className="resume-reveal mt-10 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PDF}
                download="Rakib-Hasan-Frontend-Developer-Resume.pdf"
                className="group inline-flex items-center gap-4 rounded-full bg-[#171717] px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Download PDF
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-4 text-sm font-bold transition-colors duration-300 hover:border-black hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Open in new tab
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Resume preview */}
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume PDF in a new tab"
            className="resume-reveal group relative mx-auto block w-full max-w-md"
          >
            {/* Stacked sheets */}
            <span className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-2xl bg-black/10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-6" />

            <span className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-2 rounded-2xl bg-red-500/20 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-rotate-4" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/15 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1">
              <img
                src={RESUME_IMAGE}
                alt="Preview of Rakib Hasan's resume"
                className="block w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent pb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-bold text-white">
                  View full resume ↗
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;