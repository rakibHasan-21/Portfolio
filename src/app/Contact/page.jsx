"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EMAIL = "rh9331492@gmail.com";

/*
  How messages reach you:
  1. Go to https://web3forms.com, enter your email, and copy the Access Key.
  2. Create a file named .env.local in your project root and add:
       NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
  3. Restart the dev server.
  Without a key, the form falls back to opening the visitor's email app.
*/
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const fieldBase =
  "peer block w-full border-0 border-b-2 border-black/15 bg-transparent pb-3 pt-6 text-base font-semibold text-[#171717] outline-none placeholder-transparent transition-colors duration-300 focus:border-transparent";

const labelBase =
  "pointer-events-none absolute left-0 top-6 origin-left text-base font-medium text-black/45 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75";

const lineBase =
  "pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-red-600 transition-transform duration-500 peer-focus:scale-x-100";

const Contact = () => {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".contact-reveal", {
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
    { scope: sectionRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Without an access key, open the visitor's email app instead.
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `Portfolio message from ${data.get("name")}`);
    data.append("from_name", "Portfolio contact form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#000] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-40 -top-20 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-black/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="contact-reveal flex items-center justify-between border-b border-white/30 pb-5">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] sm:text-sm">
            <span className="h-[2px] w-8 bg-white" />
            06 / Contact
          </p>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/70 sm:block">
            Get In Touch
          </span>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* left side */}
          <div>
            <h2 className="contact-reveal text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[6.5rem]">
              SAY
              <br />
              HELLO<span className="text-[#171717]">.</span>
            </h2>

            <p className="contact-reveal mt-8 max-w-md text-base leading-8 text-white/85 sm:text-lg">
              Have a job, an internship, or a project idea? Send me a message
              and I will get back to you by email.
            </p>

            <div className="contact-reveal relative mt-12 flex h-36 w-36 items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite] motion-reduce:animate-none"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="contact-circle"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="19"
                  fontWeight="800"
                  textLength="465"
                  lengthAdjust="spacing"
                >
                  <textPath href="#contact-circle">
                    OPEN TO WORK • OPEN TO WORK •{" "}
                  </textPath>
                </text>
              </svg>
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] text-2xl"
              >
                →
              </span>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="contact-reveal rounded-3xl bg-white p-6 text-[#171717] shadow-2xl shadow-black/25 sm:p-10"
          >
            {/* spam trap: real visitors never see or tick this */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-8">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder=" "
                  className={fieldBase}
                />
                <label htmlFor="name" className={labelBase}>
                  Your name
                </label>
                <span className={lineBase} />
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder=" "
                  className={fieldBase}
                />
                <label htmlFor="email" className={labelBase}>
                  Your email
                </label>
                <span className={lineBase} />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder=" "
                  className={`${fieldBase} resize-none`}
                />
                <label htmlFor="message" className={labelBase}>
                  Your message
                </label>
                <span className={lineBase} />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">
                  {status === "sending" ? "Sending..." : "Send message"}
                </span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-sm font-semibold ${
                  status === "error" ? "text-red-600" : "text-green-700"
                }`}
              >
                {status === "success" && "Thank you! Your message was sent."}
                {status === "error" &&
                  `Something went wrong. Please email me at ${EMAIL}.`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;