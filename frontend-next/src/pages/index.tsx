import Head from "next/head";
import styles from "@/styles/style";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import { h } from "../../public/index";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Head>
        <title>Gustavo Rodñane</title>
        <meta name="description" content="Gustavo Rodñane Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gr1.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={h}
              alt="home"
              className="w-16 h-16 rounded-full filter grayscale hover:grayscale-0 scale-75"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
