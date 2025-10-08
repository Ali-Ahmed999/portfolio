import Hero from "./component/main/Hero";
import About from "./component/main/About";
import Skills from "./component/main/Skills";
import Encryption from "./component/main/Encryption";
import Projects from "./component/main/Projects";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}