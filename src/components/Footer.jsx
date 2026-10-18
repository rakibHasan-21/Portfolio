"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EMAIL = "rh9331492@gmail.com";
const PHONE_DISPLAY = "01614979333";
const PHONE_LINK = "+8801614979333";

const contacts = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "rakibHasan-21",
    href: "https://github.com/rakibHasan-21",
    icon: FaGithub,
    external: true,
  },
  {
    label: "Facebook",
    value: "rakib.hasan.456853",
    href: "https://www.facebook.com/rakib.hasan.456853",
    icon: FaFacebookF,
    external: true,
  },
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_LINK}`,
    icon: FaPhoneAlt,
  },
];

const quickLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

const NAME = "RAKIB HASAN";

const Footer = () => {
  const sectionRef = useRef(null);
  const marqueeTween = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".footer-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".footer-letter", {
        yPercent: 110,
        stagger: 0.05,
        duration: 0.9,
        ease: "power4.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".footer-name",
          start: "top 95%",
          once: true,
        },
      });

      marqueeTween.current = gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  };

  const slowMarquee = () =>
    marqueeTween.current &&
    gsap.to(marqueeTween.current, { timeScale: 0.2, duration: 0.5 });
  const resumeMarquee = () =>
    marqueeTween.current &&
    gsap.to(marqueeTween.current, { timeScale: 1, duration: 0.5 });

  const marqueeGroup = (key) => (
    <div key={key} className="flex shrink-0 items-center gap-10 pr-10">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-10">
          <span className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
            Open to internships
          </span>
          <span className="text-2xl text-red-500 sm:text-4xl">✦</span>
          <span className="text-3xl font-black uppercase tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] sm:text-5xl">
            Let's build something
          </span>
          <span className="text-2xl text-red-500 sm:text-4xl">✦</span>
        </div>
      ))}
    </div>
  );

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#000] pt-24 text-white sm:pt-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-red-500/15 blur-[150px]" />

      {/* marquee */}
      <div
        className="footer-reveal border-y border-white/10 py-6"
        onPointerEnter={slowMarquee}
        onPointerLeave={resumeMarquee}
        aria-hidden="true"
      >
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max">
            {marqueeGroup("a")}
            {marqueeGroup("b")}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* headline + email */}
        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="footer-reveal flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500 sm:text-sm">
              <span className="h-[2px] w-8 bg-red-500" />
              06 / Contact
            </p>

            <h2 className="footer-reveal mt-8 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[7rem]">
              LET'S WORK
              <br />
              <span className="text-red-500">TOGETHER</span>
              <span className="text-red-500">.</span>
            </h2>

            <a
              href={`mailto:${EMAIL}`}
              className="footer-reveal group mt-10 inline-flex max-w-full items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              <span className="relative break-all pb-2 text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {EMAIL}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg transition-all duration-300 group-hover:rotate-45 group-hover:border-red-500 group-hover:bg-red-500">
                ↗
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            className="footer-reveal w-fit rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold transition-colors duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <span aria-live="polite">{copied ? "Email copied ✓" : "Copy email"}</span>
          </button>
        </div>

        {/* contact cards */}
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="footer-reveal">
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  <span className="absolute inset-0 translate-y-full bg-red-500 transition-transform duration-500 ease-out group-hover:translate-y-0" />

                  <span className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white group-hover:text-red-500">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-lg opacity-40 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>

                  <span className="relative mt-8 block">
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-white/80">
                      {item.label}
                    </span>
                    <span className="mt-2 block break-all text-base font-bold tracking-tight">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* quick links + back to top */}
        <div className="footer-reveal mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative pb-1 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#171717] transition-colors duration-300 hover:bg-red-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>

      {/* giant name: letters rise on scroll, turn red on hover */}
      <div className="footer-name mt-12 overflow-hidden px-5 pb-2 pt-6 sm:px-8 lg:px-12" aria-hidden="true">
        <div className="flex select-none justify-between whitespace-nowrap text-[12.5vw] font-black uppercase leading-[0.85] tracking-[-0.06em]">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="footer-letter inline-block text-transparent transition-all duration-300 [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:-translate-y-3 hover:text-red-500 hover:[-webkit-text-stroke:1px_transparent]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 sm:px-8">
        © {new Date().getFullYear()} Rakib Hasan. Built with Next.js, Tailwind CSS and GSAP.
      </div>
    </footer>
  );
};

export default Footer;