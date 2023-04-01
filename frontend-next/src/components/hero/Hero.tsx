import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "../../styles/style";
import Image from "next/image";
import { gr0 } from "../../../public/index";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, useText] = useTypewriter({
    words: ["Hi, I'm Gustavo", "Cofee enjoyer", "Let's work together"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative mx-auto object-cover rounded-full h-52 w-52 "
        src={gr0}
        alt="Gustavo Rodñane"
      />
      <div>
        <h2 className="text-md text-gray-400 pb-2 tracking-[9px] pt-4 underline-offset-2 underline underline-gray-300">
          SOFTWARE ENGINEER
        </h2>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}
