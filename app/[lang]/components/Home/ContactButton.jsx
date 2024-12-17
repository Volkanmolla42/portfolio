import Image from "next/image";
import React from "react";
const ContactButton = ({ href, icon, text, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-sm justify-center gap-1 bg-zinc-900 text-nowrap w-max text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 hover:underline hover:underline-offset-4"
    >
      <Image
        width={16}
        height={16}
        src={icon}
        alt={`${text} icon`}
        className={className}
      ></Image>
      <span>{text}</span>
    </a>
  );
};

export default ContactButton;
