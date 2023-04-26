import React from "react";
import Image from "next/image";
import styles from "@/styles/style";
import { Experiences, Skill } from "../../../typings";
import { urlForr } from "../../../sanity";

type Props = { exp: Experiences };

export default function ExperienceCard({ exp }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[500px] snap-center bg-[#343434] mt-24 px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        className="relative mx-auto object-cover rounded-full h-28  w-28 mt-20"
        src={urlForr(exp?.companyPic.asset._ref).url()}
        width={112}
        height={112}
        alt="xel"
      />
      <div className="px-0 md:px-10">
        <h4 className="font-ligth text-2xl px-4 md:text-xl text-center">
          {exp?.role}
        </h4>
        <div className="flex space-x-2 my-2 justify-center">
          {exp?.technology.map((skill) => (
            <Image
              key={skill?._id}
              src={urlForr(skill?.image.asset._ref).url()}
              height={14}
              width={20}
              className="object-contain rounded-full md:h-7 md:w-10"
              alt={skill?.title}
            />
          ))}
        </div>
        <div className="flex justify-center items-center uppercase py-2">
          started work at: {exp?.dateStart} ... -{" "}
          {exp?.dateEnded ? exp.dateEnded : "present"}
        </div>
        <ul className={`${styles.ul}`}>
          {exp?.summary.map((sum) => (
            <li
              key={Math.random()}
              className="summary text-gray-500 text-sm md:text-lg bold text-center list-none"
            >
              {sum}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
