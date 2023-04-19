/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { gr3 } from "../../../public/index";
import styles from "@/styles/style";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left 
    md:flex-col md:items-center max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3
        className={`${styles.heading4} absolute  top-24 uppercase tracking-[14px] `}
      >
        About
      </h3>

      <Image
        className="mt-32 relative object-cover rounded-full  h-36 w-36  md:h-52 md:w-52"
        src={gr3}
        alt="Gustavo Rodñane"
      />
      <div className="space-y-5 px-0 md:mx-10 mt-15">
        <h4 className={`${styles.heading4}`}>From Eldorado to the World</h4>
        <p className="px-4 md:text-xl">
          My Name is Gustavo but you can call me Gus, Im from a little town in
          Misiones Argentina called Eldorado. Currently I'm living in Buenos
          Aires (Argentina). I put myself in a self thaught developer career 2
          years ago realizing that coding is one a the tinghs that I most enjoy.
          I'm about to finish my degree in Computer Science. Beside my love for
          coding currently I'm working in a ITSM company for +4 years. Nowdays I
          feel confident about my skills in order to work on a developer role.
        </p>
      </div>
    </motion.div>
  );
}
