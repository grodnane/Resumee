import styles from "@/styles/style";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Skill } from "../../../typings";
import { urlForr } from "../../../sanity";

type Props = { skills: Skill[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[1500px] xl:px-10 min-h-screen justify-center xl:space-x-0 mx-auto items-center"
    >
      <h3
        className={`${styles.heading4} absolute  top-24 uppercase tracking-[14px]`}
      >
        Skills
      </h3>
      <div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-4 gap-3 pt-9 mt-9"
        >
          {skills.slice(0, skills.length / 4).map((s) => (
            <Image
              key={s._id}
              src={`${urlForr(s.image).url()}`}
              alt={`${s.title}`}
              width={96}
              height={96}
              className=" bg-gray-600 rounded-full object-scale-down  h-20 w-20 opacity-70 hover:opacity-100 p-1 m-2 border  border-gray-500 items-center justify-center md:w-40 md:h-40 transition-opacity duration-400 ease-in-out"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.9 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-4 gap-3 "
        >
          {skills.slice(skills.length / 4, skills.length / 2).map((s) => (
            <Image
              key={s._id}
              src={`${urlForr(s.image).url()}`}
              alt={`${s.title}`}
              width={96}
              height={96}
              className=" bg-gray-600 rounded-full object-scale-down  h-20 w-20 opacity-70 hover:opacity-100 p-1 m-2 border  border-gray-500 items-center justify-center md:w-40 md:h-40 transition-opacity duration-400 ease-in-out"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-4 gap-3 "
        >
          {skills.slice(skills.length / 2, skills.length / 0.75).map((s) => (
            <Image
              key={s._id}
              src={`${urlForr(s.image).url()}`}
              alt={`${s.title}`}
              width={96}
              height={96}
              className=" bg-gray-600 rounded-full object-scale-down  h-20 w-20 opacity-70 hover:opacity-100 p-1 m-2 border  border-gray-500 items-center justify-center md:w-40 md:h-40 transition-opacity duration-400 ease-in-out"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.3, repeat: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-4 gap-3   "
        >
          {skills.slice(skills.length / 0.75, skills.length).map((s) => (
            <Image
              key={s._id}
              src={`${urlForr(s.image).url()}`}
              alt={`${s.title}`}
              width={96}
              height={96}
              className=" bg-gray-600 rounded-full object-scale-down  h-20 w-20 opacity-70 hover:opacity-100 p-1 m-2 border  border-gray-500 items-center justify-center md:w-40 md:h-40 transition-opacity duration-400 ease-in-out"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
