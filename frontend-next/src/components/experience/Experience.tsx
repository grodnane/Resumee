import styles from "@/styles/style";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "../../../typings";

type Props = { exp: Experiences[] };

export default function Experience({ exp }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`h-screen relative flex justify-center items-center overflow-hidden flex-col text-left md:flex-row 
      md:max-w-[70%] px-10 mx-auto `}
    >
      <h3
        className={`${styles.heading4} absolute  top-28 uppercase tracking-[14px] `}
      >
        Experience
      </h3>

      <div className="w-10/12 flex space-x-5 overflow-x-auto  p-10 snap-x snap-mandatory">
        {exp?.map((e) => (
          <ExperienceCard key={e?._id} exp={e} />
        ))}
      </div>
    </motion.div>
  );
}
