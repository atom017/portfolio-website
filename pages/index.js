import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import HomePage from "@/components/HomePage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  
  return (
    <div >
      <Navbar />
      <main>
        <HomePage/>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
