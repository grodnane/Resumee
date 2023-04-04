import styles from "@/styles/style";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-screen relative flex justify-evenly items-center overflow-hidden flex-col text-left md:flex-row 
      max-w-full px-10 mx-auto`}
    >
      <h3
        className={`${styles.heading4} absolute  top-24 uppercase tracking-wide`}
      >
        Experience
      </h3>

      <div>
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
