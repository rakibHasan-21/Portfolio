import About from "@/components/About";
import Hero from "@/components/Hero";
import Horizantall from "@/components/Horizantall";
import Skills from "@/components/Skills";
import Contact from "./Contact/page";


export default function Home() {
  return (
    <div>
      <Hero />
      <Horizantall></Horizantall>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
