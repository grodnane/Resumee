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
      max-w-full px-10 mx-auto `}
    >
      <h3
        className={`${styles.heading4} absolute  top-28 uppercase tracking-[14px] `}
      >
        Experience
      </h3>

      <div className="w-10/12 flex space-x-5 overflow-x-auto  p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
