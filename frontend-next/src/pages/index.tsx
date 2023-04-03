import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import styles from "@/styles/style";

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
      <section id="Hero" className="snap-center">
        <Hero />
      </section>

      {/* about */}
      <section>
        <About />
      </section>

      {/* experience */}
      {/* skills */}
      {/* Projects */}
      {/* contact me */}
    </div>
  );
}
