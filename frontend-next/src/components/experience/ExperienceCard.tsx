import React from "react";
import { xel } from "../../../public/index";
import Image from "next/image";
import styles from "@/styles/style";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex">
      <Image
        className="relative mx-auto object-cover rounded-full h-52 w-52 "
        src={xel}
        alt="xel"
      />
      <div className="px-0 md:px-10">
        <h4 className="font-ligth text-4xl">Self Thaught developer</h4>
        <div className="flex space-x-2 my-2">tech</div>
        <div className="flex justify-center items-center uppercase py-3">
          started work at ... - Ended
        </div>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>summary</li>
          <li className={`${styles.li}`}>summary</li>
          <li className={`${styles.li}`}>summary</li>
          <li className={`${styles.li}`}>summary</li>
        </ul>
      </div>
    </article>
  );
}
