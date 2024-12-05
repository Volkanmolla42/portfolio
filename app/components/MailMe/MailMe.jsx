"use client";
import "@/app/components/MailMe/style.css";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/app/context/AppContext";
import SealIcon from "@/app/components/MailMe/SealIcon";
import PlaySound from "@/app/components/utils/PlaySound";
import AnimateEnvelope from "@/app/components/MailMe/animateEnvelope";
import { sendEmail } from "@/app/components/utils/sendMail";
import DateComponent from "./DateComponent";

export default function MailMe() {
  const { bokor, toggleClasses } = useAppContext();
  const textareaRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.target);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      setTimeout(() => {
        event.target.reset();
        setStatus(null);
      }, 3000);
    }
  }
  useEffect(() => {
    AnimateEnvelope({ status, toggleClasses, PlaySound });
  }, [status]);

  return (
    <div className="size-full flex justify-center items-center overflow-hidden">
      <div className="success absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-500">
        {status && (
          <p
            className={status === "success" ? "text-green-600" : "text-red-600"}
          >
            {status === "success"
              ? "Success!"
              : "Something went wrong, please try again."}
          </p>
        )}
      </div>
      <div className="envelope-container w-11/12 sm:w-2/3 md:w-2/4  lg:w-2/6 translate-x-0 h-1/2 mt-3 flex opacity-100 justify-center items-center  transition-all duration-500">
        <div
          className={`envelope size-full flex   justify-center items-center transition-all duration-500 translate-y-3/4 `}
        >
          <div className="size-full bg-zinc-500 shadow-inner  shadow-black transition-all duration-500">
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className={`paper left-1/2 -translate-x-1/2 -translate-y-[105%]  absolute h-[95%]  mt-2 w-[95%] bg-zinc-100 text-black shadow-md shadow-black border border-dashed border-red-900 rounded transition-all duration-500 ${bokor.className}`}
            >
              <div className="w-full h-[90%]  flex flex-col relative p-5 tracking-wider">
                {/* Message input */}
                <div className="size-full  flex justify-between items-center relative">
                  <textarea
                    ref={textareaRef}
                    id="message"
                    name="message"
                    required
                    className="w-full h-full p-1 resize-none text-lg bg-transparent border-none outline-none"
                    autoCorrect="off"
                    spellCheck="false"
                    autoComplete="off"
                    inputMode="text"
                    aria-required="true"
                    aria-label="Message"
                    placeholder="..."
                  ></textarea>
                </div>
                {/* Email and Name inputs  */}
                <div className="h-1/3 flex gap-5 md:gap-10 text-sm  justify-between items-center">
                  <div className="w-1/2">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border-dashed border-2 p-1 bg-transparent outline-none text-center border-red-900"
                      autoCorrect="off"
                      spellCheck="false"
                      autoComplete="off"
                      autoCapitalize="off"
                      autoSave="off"
                      inputMode="text"
                      aria-required="true"
                      aria-label="Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="email">Email:</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-dashed border-2 p-1 bg-transparent outline-none text-center border-red-900"
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="off"
                      autoSave="off"
                      inputMode="email"
                      aria-required="true"
                      aria-label="Email"
                    />
                  </div>
                </div>
              </div>
              <span className="absolute top-1 right-2 text-red-900">
                <DateComponent />
              </span>
            </form>
            <div
              className={`top-triangle w-full h-full absolute open -z-50 -top-full bg-zinc-700 clip-triangle3 origin-bottom ease-in-out preserve3d transition-all duration-500
              `}
            ></div>
            <div className="w-1/2 h-full absolute bg-zinc-700  clip-triangle "></div>
            <div className="w-1/2 h-full absolute translate-x-full rotate-180 bg-zinc-700  clip-triangle "></div>
            <div className="w-full h-full  absolute bg-zinc-800 clip-triangle2"></div>
            <div className=" size-max absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <button
                type="submit"
                onClick={() => formRef.current.requestSubmit()}
                disabled={status === "success"}
                className={`hover:scale-[70%] scale-[65%] w-32 h-32 rounded-full border-none outline-none
                  shadow-none hover:shadow-[0_0_20px_rgba(0,0,0,1)]
                     transition-all duration-200 ${
                       status === "sending"
                         ? "spin shadow-none"
                         : " shadow-[0_0_20px_rgba(0,0,0,1)]"
                     }`}
              >
                <SealIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
