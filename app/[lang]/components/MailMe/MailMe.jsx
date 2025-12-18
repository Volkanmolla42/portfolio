"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/app/[lang]/context/AppContext";
import SealIcon from "@/app/[lang]/components/MailMe/SealIcon";
import PlaySound from "@/app/[lang]/components/utils/PlaySound";
import AnimateEnvelope from "@/app/[lang]/components/MailMe/animateEnvelope";
import { sendEmail } from "@/app/[lang]/components/utils/sendMail";
import DateComponent from "./DateComponent";
import "./style.css";

export default function MailMe({ data }) {
  const { toggleClasses } = useAppContext(); // Get context values
  const textareaRef = useRef(null); // Reference to the textarea element
  const formRef = useRef(null); // Reference to the form element
  const [status, setStatus] = useState(null); // Track the status of the form submission

  // Handle form submission
  async function handleSubmit(event) {
    const audio = new Audio("/sounds/paper-slide.mp3");

    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target); // Collect form data

    try {
      const result = await sendEmail(formData); // Send email

      if (result.success) {
        setStatus("success"); // Update status on successful email sending
        setTimeout(() => {
          event.target.reset(); // Reset form after a delay
          setStatus(null); // Clear status
        }, 3000);
      } else {
        setStatus("error"); // Set error status if sending failed
      }
    } catch (error) {
      setStatus("error"); // Set error status if an exception occurs
      console.error(error); // Log the error for debugging
    }
  }

  // Trigger animations when the status changes
  useEffect(() => {
    AnimateEnvelope({ status, toggleClasses, PlaySound });
  }, [status]);

  return (
    <div className="size-full flex flex-col items-center justify-center overflow-hidden px-4 py-4">
      {/* Section Header */}
      <div className="text-center mb-6 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {data.title}
        </h2>
        <p className="text-zinc-400 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{data.subtitle}</span>
        </p>
      </div>

      {/* Envelope Section - Original Structure */}
      <div className="flex-1 flex justify-center items-center w-full">
        {/* Success/Error message display */}
        <div className="success absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-500">
          {status && (
            <p
              className={status === "success" ? "text-green-600" : "text-red-600"}
            >
              {status === "success"
                ? `${data.mailSuccessText}`
                : `${data.mailErrorText}`}
            </p>
          )}
        </div>

        {/* Envelope Container */}
        <div className="envelope-container w-11/12 sm:w-2/3 md:w-2/4 lg:w-2/6 translate-x-0 h-1/2 mt-3 flex opacity-100 justify-center items-center transition-all duration-500">
          <div
            className={`envelope size-full flex justify-center items-center transition-all duration-500 translate-y-3/4`}
          >
            {/* Envelope Design */}
            <div className="size-full bg-zinc-500 shadow-inner shadow-black transition-all duration-500 ">
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className={`paper left-1/2 -translate-x-1/2 -translate-y-[105%] absolute h-[95%] mt-2 w-[95%] bg-zinc-100 text-black shadow-md shadow-black border-[3px] border-dashed border-red-900 rounded transition-all duration-500`}
              >
                {/* Form Inputs */}
                <div className="w-full h-[90%] flex flex-col relative p-5 tracking-wide">
                  {/* Message input */}
                  <div className="size-full flex justify-between items-center relative">
                    <textarea
                      ref={textareaRef}
                      id="message"
                      name="message"
                      required
                      className="w-full h-full p-1 resize-none text-lg bg-transparent border-none outline-hidden"
                      autoCorrect="off"
                      spellCheck="false"
                      autoComplete="off"
                      inputMode="text"
                      aria-required="true"
                      aria-label="Message"
                      placeholder="..."
                    ></textarea>
                  </div>

                  {/* Email and Name inputs */}
                  <div className="h-1/3 flex gap-5 md:gap-10 text-sm justify-between items-center">
                    <div className="w-1/2">
                      <label htmlFor="name">{data.nameText}: </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border-dashed border-2 p-1 bg-transparent outline-hidden text-center border-red-900"
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
                      <label htmlFor="email">{data.emailText}:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border-dashed border-2 p-1 bg-transparent outline-hidden text-center border-red-900"
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

                {/* Date Component */}
                <span className="absolute top-1 right-2 text-red-900">
                  <DateComponent />
                </span>
              </form>

              {/* Envelope Animation */}
              <div
                className={`top-triangle w-full h-full absolute open -z-50 -top-full bg-zinc-700 clip-triangle3 origin-bottom ease-in-out preserve3d transition-all duration-500`}
              ></div>
              <div className="w-1/2 h-full absolute bg-zinc-700 clip-triangle "></div>
              <div className="w-1/2 h-full absolute translate-x-full rotate-180 bg-zinc-700 clip-triangle "></div>
              <div className="w-full h-full absolute bg-zinc-800 clip-triangle2"></div>

              {/* Submit Button */}
              <div className="size-max absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <button
                  type="submit"
                  onClick={() => formRef.current.requestSubmit()}
                  disabled={status === "success"}
                  aria-description="seal button"
                  className={`hover:scale-[70%] scale-[65%] w-32 h-32 rounded-full border-none outline-hidden shadow-none hover:shadow-[0_0_20px_rgba(0,0,0,1)] transition-all duration-200 ${
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
    </div>
  );
}
