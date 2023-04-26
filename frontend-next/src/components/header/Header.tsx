import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo, Social } from "../../../typings";

type Props = { pageInfo: PageInfo; social: Social[] };

export default function Header({ social }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center gap-4"
      >
        {social?.map((s) => (
          <SocialIcon
            key={s?._id}
            url={s?.url}
            fgColor="transparent"
            bgColor="gray"
            target="blank"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: +500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="gap-8"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="#contact"
          // fgColor="trasparent"
          bgColor="gray"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 px-4">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
