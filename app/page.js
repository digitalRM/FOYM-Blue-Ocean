import Hero from "@/components/sections/1 - Hero";
import TheProblem from "@/components/sections/2 - TheProblem";
import OurSolution from "@/components/sections/3 - OurSolution";
import Footer from "@/components/sections/4 - Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen scroll-smooth">  
      <Hero />
      <TheProblem />
      <OurSolution />
      <Footer />
    </div>
  );
}
