import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import styles from "@/styles/style";
import { PageInfo } from "../../../typings";
import { urlForr } from "../../../sanity";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-col md:items-center max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3
        className={`${styles.heading4} absolute  top-24 uppercase tracking-[14px] `}
      >
        About
      </h3>

      <Image
        className="mt-28 relative object-cover rounded-full h-40 w-40 md:h-52 md:w-52 "
        width={144}
        height={144}
        src={urlForr(pageInfo?.aboutPic.asset._ref).url()}
        alt="Gustavo Rodñane"
      />

      <div className="space-y-5 px-0 md:mx-10 mt-15">
        <h4 className={`${styles.heading4} md:no-underline underline`}>
          {pageInfo?.text}
        </h4>
        <p className="px-4 md:text-xl">{pageInfo?.aobutInfo}</p>
      </div>
    </motion.div>
  );
}
