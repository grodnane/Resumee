import styles from "@/styles/style";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../../typings";
import { urlForr } from "../../../sanity";
import Link from "next/link";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
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
        {projects?.map((p, i) => (
          <div
            className="w-screen flex-shrink-0 hover:overscroll-contain flex 
        snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={p?._id}
          >
            <Image
              src={`${urlForr(p?.image.asset._ref).url()}`}
              alt={`${p?.title}`}
              width={244}
              height={244}
              className="object-scale-down md:w-[450px] md:h-[300px] objet-cover"
            />
            <div>
              <h4>
                <span className="">
                  Case study {i + 1} of {projects?.length}: &nbsp;
                </span>
                {p?.title}
              </h4>
            </div>
            <p className="text-lg text-center  md:max-w-[700px] ">
              {p?.summary}
            </p>
            <Link
              target="_blank"
              className="text-gray-500 tracking-wide text-lg z-20"
              href={p?.link}
            >
              To the page
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#653565] absolute left-0 h-[40%] top-[30%] opacity-20 -skew-y-12 " />
    </motion.div>
  );
}
