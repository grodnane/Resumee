import React from "react";
import Image from "next/image";
import { next } from "./../../../public/index";

type Props = {};

function Skill({}: Props) {
  return (
    <div>
      <Image
        src={next}
        alt="asd"
        className="rounded-full h-24 w-24 opacity-40 hover:opacity-100 p-4 m-2 border border-gray-500 items-center justify-center xl:w-40 xl:h-40 transition-opacity duration-400 ease-in-out"
      />
    </div>
  );
}

export default Skill;
