import styles from "@/styles/style";
import React from "react";
import Image from "next/image";
import { next } from "./../../../public/index";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-evenly xl:space-x-0 items-center max-w-full z-0 mx-auto"
    >
      <h3
        className={`${styles.heading4} absolute  top-24 uppercase tracking-[14px] `}
      >
        Projects
      </h3>

      <div className="relative w-full flex  overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((p, i) => (
          <div
            className="w-screen flex-shrink-0 hover:overscroll-contain flex 
        snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={p}
          >
            <Image src={next} alt="asd" />
            <div>
              <h4>
                <span className="">
                  Case study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
            </div>
            <p className="text-lg text-center  md:max-w-[700px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              rerum eveniet accusamus fuga obcaecati, cupiditate iusto
              exercitationem ducimus placeat recusandae distinctio minima modi
              dolore, necessitatibus nesciunt vel dolorem! Ratione, inventore.
            </p>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#653565] absolute left-0 h-[40%] top-[30%] opacity-20 -skew-y-12 " />
    </motion.div>
  );
}
