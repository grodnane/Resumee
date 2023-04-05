import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import styles from "@/styles/style";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";

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
      {/* Projects */}
      {/* contact me */}
    </div>
  );
}
