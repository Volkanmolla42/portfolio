import { Mail } from "lucide-react";
import React from "react";

const MailMeLink = () => {
  return (
    <button className="absolute right-6 bottom-6 opacity-70 z-[1000] flex flex-col items-center justify-center">
      <Mail className="w-8 h-8" />
      <span className="text-white">Touch Me</span>
    </button>
  );
};

export default MailMeLink;
