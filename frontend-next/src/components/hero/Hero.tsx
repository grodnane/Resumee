import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { layout } from "../../styles/style";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../../../typings";
import { urlForr } from "../../../sanity";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
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
        width={208}
        height={208}
        src={urlForr(pageInfo?.heroImage.asset._ref).url()}
        alt="Gustavo Rodñane"
      />
      <div className="z-20 ">
        <h2 className="text-md text-gray-400 pb-2 tracking-[9px] pt-4 underline-offset-2 underline underline-gray-300 uppercase">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 z-2">
          <span>{text}</span>
          <Cursor cursorColor="#653565" />
        </h1>
        <div className="px-4">
          <Link href={`#about`} className="px-2">
            <button className={`${layout.heroButton}`}>About</button>
          </Link>
          <Link href={`#experience`} className="px-2">
            <button className={`${layout.heroButton}`}>Experience</button>
          </Link>
          <Link href={`#skills`} className="px-2">
            <button className={`${layout.heroButton}`}>Skills</button>
          </Link>
          <Link href={`#projects`} className="px-2">
            <button className={`${layout.heroButton}`}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
