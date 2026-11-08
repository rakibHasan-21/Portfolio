
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Globe,
  Camera,
  Compass,
  ShoppingBag,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "StudioSpace",
    category: "Full Stack Web Application",
    description:
      "A creative workspace rental platform where users can explore studios, manage listings, and book creative spaces.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    live: "https://studio-space-client-lake.vercel.app/",
    client: "https://github.com/rakibHasan-21/studio-space-client",
    server: "https://github.com/rakibHasan-21/studio-space-server-",
    Icon: Camera,
    theme: "from-violet-500/30 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    label: "CREATIVE SPACE",
  },
  {
    id: "02",
    title: "Wanderlust",
    category: "Full Stack Web Application",
    description:
      "A travel-focused web application designed with a clean interface and a smooth user experience.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    live: "https://wanderlust-frontend-pi.vercel.app/",
    client: "https://github.com/rakibHasan-21/wanderlust-frontend",
    server: "https://github.com/rakibHasan-21/wanderlust-backend",
    Icon: Compass,
    theme: "from-cyan-500/30 via-blue-500/10 to-transparent",
    accent: "text-cyan-400",
    label: "TRAVEL EXPERIENCE",
  },
  {
    id: "03",
    title: "Bazar Dor",
    category: "Web Application",
    description:
      "A modern web project focused on product browsing and an intuitive shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://b14-a7-bazar-dor-sable.vercel.app/",
    client: "https://github.com/rakibHasan-21/B14-A7-Bazar-dor",
    Icon: ShoppingBag,
    theme: "from-emerald-500/30 via-green-500/10 to-transparent",
    accent: "text-emerald-400",
    label: "ONLINE MARKETPLACE",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
        },
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });

      gsap.from(".projects-footer", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-footer",
          start: "top 95%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section relative overflow-hidden bg-[#09090b] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="project-heading mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
                My Selected Work
              </span>
            </div>

            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Featured
              <span className="ml-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-zinc-400 md:text-base">
            Turning ideas into meaningful digital experiences through clean
            code, creative design, and modern technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.Icon;

            return (
              <article
                key={project.id}
                className={`project-card group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111114] transition-colors duration-500 hover:border-white/20 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Project visual */}
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.theme} sm:h-64`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />

                  <span className="absolute left-6 top-6 text-xs tracking-[0.25em] text-white/50">
                    PROJECT / {project.id}
                  </span>

                  <span className="absolute bottom-6 right-6 text-[10px] font-medium tracking-[0.3em] text-white/40">
                    {project.label}
                  </span>

                  {/* Decorative circles */}
                  <div className="absolute h-44 w-44 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125 sm:h-52 sm:w-52" />

                  <div className="absolute h-32 w-32 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon
                      className={`h-11 w-11 ${project.accent}`}
                      strokeWidth={1.3}
                    />
                  </div>

                  <div className="absolute right-8 top-8 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                </div>

                {/* Project content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                      {project.category}
                    </span>

                    <span className="text-sm text-zinc-600">
                      {project.id} / 03
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-400 sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mb-7 max-w-xl text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
                    >
                      <Globe size={16} />
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>

                    {/* Client GitHub */}
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} client GitHub`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                    >
                      <FaGithub size={17} />
                      Client
                    </a>

                    {/* Server GitHub */}
                    {project.server && (
                      <a
                        href={project.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} server GitHub`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                      >
                        <FaGithub size={17} />
                        Server
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="projects-footer mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row">
          <p className="text-sm text-zinc-500">
            More projects coming soon...
          </p>

          <a
            href="https://github.com/rakibHasan-21"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
          >
            <FaGithub size={17} />
            Explore My GitHub

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
