import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1.5, 2, 1],
        opacity: [0.2, 0.3, 0.5, 0.7, 1],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center z-1"
    >
      <div className="absolute border rounded-full opacity-10 border-solid border-gray-700 animate-pulse h-[250px] w-[250px] mt-52" />
      <div className="absolute border rounded-full opacity-10 border-solid border-gray-600 animate-spin h-[350px] w-[350px] mt-52" />
      <div className="absolute border rounded-full opacity-10 border-solid border-gray-700 animate-ping h-[450px] w-[450px] mt-52" />
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-10 w-[750px] h-[750px] mt-52 animate-pulse" />
      <div className=" absolute rounded-full border  border-gray-700 opacity-40 w-[870px] h-[870px] mt-52 animate-pulse" />
    </motion.div>
  );
}
