import styles from "@/styles/style";
import React from "react";
import { EnvelopeIcon, InboxIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:grodnane@gmail?subject={FormData.subject}&body={FormData.message} sended by {FormDate.name} from {FormDate.email}`;
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly px-10 md:text-left md:flex-row max-w-7xl mx-auto">
      <h3
        className={`${styles.heading4} top-24 uppercase tracking-[14px] mx-auto absolute`}
      >
        Contact
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col space-y-2 w-fit mx-auto max-w-[500px]"
      >
        <h4 className={`${styles.heading5}  uppercase py-4  `}>
          For job offers or details request please feel free to send me an
          E-Mail
        </h4>
        <div className="flex gap-2 w-full">
          <input
            {...register("name")}
            placeholder="Name"
            className={`${styles.contactForm} placeholder:text-xl text-center`}
            type="text"
          />
          <input
            {...register("email")}
            placeholder="E-Mail"
            className={`${styles.contactForm} placeholder:text-xl text-center`}
            type="text"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className={`${styles.contactForm} placeholder:text-xl text-center h-[40px]`}
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className={`${styles.contactForm} placeholder:text-xl text-center h-[200px] sm:h[90px]`}
        />
        <button
          type="submit"
          className={`${styles.contactForm} bg-[#653565]/30 md:bg-[#653565]/30 text-xl uppercase md:hover:bg-[#653565] px-10 py-5`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
