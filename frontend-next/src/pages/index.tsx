import Head from "next/head";
import styles from "@/styles/style";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { Experiences, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocial";
import { urlForr } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  social: Social[];
  proj: Project[];
  exp: Experiences[];
};

export default function Home({ pageInfo, social, skills, proj, exp }: Props) {
  return (
    <div className={`${styles.page}`}>
      <Head>
        <title>Gustavo Rodñane - Resume</title>
        <meta name="description" content="Gustavo Rodñane Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gr1.ico" />
      </Head>
      <Header pageInfo={pageInfo} social={social} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience exp={exp} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={proj} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={urlForr(pageInfo?.toTopImg).url()}
              width={48}
              height={48}
              alt="home"
              className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0 scale-75"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const social: Social[] = await fetchSocials();
  const proj: Project[] = await fetchProjects();
  const exp: Experiences[] = await fetchExperiences();
  return { props: { pageInfo, skills, social, proj, exp }, revalidate: 1 };
};
