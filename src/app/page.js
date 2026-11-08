import About from "@/components/About";
import Hero from "@/components/Hero";
// import Horizantall from "@/components/Horizantall";
import Skills from "@/components/Skills";
import Contact from "./Contact/page";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Horizantall></Horizantall> */}
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
