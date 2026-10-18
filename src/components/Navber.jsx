"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".navbar-main", {
        y: -70,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".navbar-logo",
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.5,
          },
          "-=0.35",
        )
        .from(
          ".desktop-link",
          {
            y: -15,
            opacity: 0,
            stagger: 0.12,
            duration: 0.45,
          },
          "-=0.2",
        );
    },
    { scope: navRef },
  );

  // Mobile menu animation
  useGSAP(
    () => {
      if (!isMenuOpen) return;

      gsap.from(".mobile-link", {
        x: 25,
        opacity: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    {
      scope: navRef,
      dependencies: [isMenuOpen],
    },
  );

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-[1000] w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-main mt-5 flex items-center justify-between rounded-full border border-white/40 bg-gradient-to-r from-white/70 via-white/40 to-white/20 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-2xl md:px-7">
          {/* Logo */}
          <Link
            href="/"
            className="navbar-logo text-3xl font-bold tracking-tight text-[#101010]"
          >
            Rakib<span className="text-red-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-9">
              <li>
                <Link
                  href="/"
                  className="desktop-link group relative inline-block py-1 text-[16px] font-medium text-[#333] transition-colors duration-300 hover:text-black"
                >
                  Home
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>

              <li>
                <Link
                  href="/About"
                  className="desktop-link group relative inline-block py-1 text-[16px] font-medium text-[#333] transition-colors duration-300 hover:text-black"
                >
                  About
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>

              <li>
                <Link
                  href="/Resume"
                  className="desktop-link group relative inline-block py-1 text-[16px] font-medium text-[#333] transition-colors duration-300 hover:text-black"
                >
                  Resume
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>

              <li>
                <Link
                  href="/Contact"
                  className="desktop-link group relative inline-block py-1 text-[16px] font-medium text-[#333] transition-colors duration-300 hover:text-black"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/Skills"
                  className="desktop-link group relative inline-block py-1 text-[16px] font-medium text-[#333] transition-colors duration-300 hover:text-black"
                >
                  Skills
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center text-3xl text-[#101010] transition-colors hover:text-red-500 md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1100] bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      >
        <nav
          id="mobileMenu"
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
          className={`mobile-panel absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-white px-7 py-8 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="self-end text-4xl leading-none text-[#101010] transition-colors hover:text-red-500"
          >
            &times;
          </button>

          {/* Mobile Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="mobile-link mt-5 text-3xl font-bold text-[#101010]"
          >
            Rakib<span className="text-red-500">.</span>
          </Link>

          {/* Mobile Links */}
          <ul className="mt-10 flex flex-col gap-7">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="mobile-link block text-lg font-medium text-[#333] transition-colors hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                onClick={closeMenu}
                className="mobile-link block text-lg font-medium text-[#333] transition-colors hover:text-red-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/Resume"
                onClick={closeMenu}
                className="mobile-link block text-lg font-medium text-[#333] transition-colors hover:text-red-500"
              >
                Resume
              </Link>
            </li>

            <li>
              <Link
                href="/Skills"
                onClick={closeMenu}
                className="mobile-link block text-lg font-medium text-[#333] transition-colors hover:text-red-500"
              >
                Skills
              </Link>
            </li>
          </ul>

          {/* Hire Me */}
          <Link
            href="/Contact"
            onClick={closeMenu}
            className="mobile-link mt-10 rounded-full bg-[#1a1a1b] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-red-500"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navber;