"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import ImageCard from "@/components/ImageCard";
import Intro from "@/components/Intro";
import { ModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Container className="mb-5" id="product-info">
        {/* left side */}
        <Container className="flex-col w-2/3">
          <Container className=" h-80">
            <div className="w-2/3">
              <Intro />
            </div>
            <div className="w-1/3 ">
              <ImageCard />
            </div>
          </Container>
          <Container className="h-[310px]">
            <div className="w-1/2">
              <About />
            </div>
            <div className="w-1/2">
              <Contact />
            </div>
          </Container>
        </Container>
        {/* right side */}
        <Container className="w-1/3 flex-col">
          <Projects />
          <Socials />
        </Container>
      </Container>
      <div className="bottom-4 right-4 fixed z-50">
        <ModeToggle />
      </div>
      {/* <ModeToggle />
      <Button onClick={() => generatePDF()}>Generate PDF</Button> */}
    </>
  );
}
