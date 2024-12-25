// import Encryption from "@/components/main/Encryption";

// import Projects from "@/components/main/Projects";
// import Skills from "@/components/main/Skills";
import Image from "next/image";
import Hero from "./component/main/Hero";
import Skills from "./component/main/Skills";
import Encryption from "./component/main/Encryption";
import Projects from "./component/main/Projects";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}