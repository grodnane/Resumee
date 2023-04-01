import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const urls: string[] = [
  "https://www.linkedin.com/in/grodnane",
  "https://github.com/grodnane",
  "mailto:grodnane@gmail.com",
];

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center gap-4"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/grodnane"
          fgColor="transparent"
          bgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/grodnane"
          fgColor="transparent"
          bgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/grodnane"
          fgColor="transparent"
          bgColor="gray"
        />
      </motion.div>
      {/* <motion.div
        initial={{ y: -200, opacity: 0, scale: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="rounded-full"
      >
        <Image
          className="rounded-full"
          alt="logo"
          src="/../public/gr.png"
          width={90}
          height={80}
        />
      </motion.div> */}
      <motion.div
        initial={{ x: +500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="gap-8"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
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
