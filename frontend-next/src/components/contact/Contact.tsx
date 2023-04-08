import styles from "@/styles/style";
import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly px-10 md:text-left md:flex-row max-w-7xl mx-auto">
      <h3
        className={`${styles.heading4} absolute top-24 uppercase tracking-[14px] `}
      >
        Contact
      </h3>

      <form action="mailto:grodnane@gmail.com"></form>
    </div>
  );
}
