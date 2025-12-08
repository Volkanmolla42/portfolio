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
  // We don't need toggleClasses anymore since we removed the perspective effect
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
    // We need to mock toggleClasses since the original animation might depend on it
    const mockToggleClasses = () => {};
    AnimateEnvelope({ status, toggleClasses: mockToggleClasses, PlaySound });
  }, [status]);

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground">Send me a message using the envelope below</p>
      </div>

      <div className="relative w-full max-w-2xl h-[400px] flex justify-center items-center">
        {/* Success/Error message display */}
        <div className="absolute top-0 w-full text-center z-20">
          {status && (
            <div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                status === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : status === "error"
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              }`}
            >
              {status === "success"
                ? `${data.mailSuccessText}`
                : status === "sending"
                  ? "Sending..."
                  : `${data.mailErrorText}`}
            </div>
          )}
        </div>

        {/* Envelope Container */}
        <div className="envelope-container relative w-full h-full flex justify-center items-center">
          <div className="envelope relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] bg-zinc-200 dark:bg-zinc-700 shadow-xl rounded-b-md z-10">

            {/* The Form Paper */}
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className={`paper absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-[95%] bg-white text-zinc-900 shadow-md border-2 border-dashed border-red-900/30 rounded transition-all duration-500 z-0 ${
                 status === 'sending' || status === 'success' ? 'translate-y-[100px] scale-50 opacity-0' : '-translate-y-[40%]'
              }`}
            >
              {/* Form Inputs */}
              <div className="w-full h-full flex flex-col p-4 gap-4">
                {/* Message input */}
                <div className="flex-1">
                  <textarea
                    ref={textareaRef}
                    id="message"
                    name="message"
                    required
                    className="w-full h-full p-2 resize-none bg-transparent border-none focus:outline-none text-sm sm:text-base font-handwriting"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {/* Email and Name inputs */}
                <div className="h-12 flex gap-4 text-xs sm:text-sm border-t border-dashed border-red-900/20 pt-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={data.nameText}
                      className="w-full h-full bg-transparent border-none focus:outline-none text-center"
                    />
                  </div>
                  <div className="w-px bg-red-900/20"></div>
                  <div className="flex-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={data.emailText}
                      className="w-full h-full bg-transparent border-none focus:outline-none text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Date Component */}
              <span className="absolute top-2 right-3 text-[10px] text-zinc-400">
                <DateComponent />
              </span>
            </form>

            {/* Envelope Flaps */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
              {/* Bottom flap */}
              <div className="absolute bottom-0 left-0 w-full h-0 border-l-[150px] sm:border-l-[200px] border-r-[150px] sm:border-r-[200px] border-b-[100px] sm:border-b-[130px] border-l-transparent border-r-transparent border-b-zinc-300 dark:border-b-zinc-600"></div>

              {/* Left flap */}
              <div className="absolute top-0 left-0 w-0 h-full border-t-[100px] sm:border-t-[130px] border-b-[100px] sm:border-b-[130px] border-l-[150px] sm:border-l-[200px] border-t-transparent border-b-transparent border-l-zinc-200 dark:border-l-zinc-500"></div>

              {/* Right flap */}
              <div className="absolute top-0 right-0 w-0 h-full border-t-[100px] sm:border-t-[130px] border-b-[100px] sm:border-b-[130px] border-r-[150px] sm:border-r-[200px] border-t-transparent border-b-transparent border-r-zinc-200 dark:border-r-zinc-500"></div>
            </div>

            {/* Top Flap (The lid) */}
            <div className={`absolute top-0 left-0 w-full z-30 transition-transform duration-700 origin-top ${
              status === 'sending' || status === 'success' ? 'rotate-x-0' : '-rotate-x-180'
            }`} style={{ transformStyle: 'preserve-3d' }}>
               <div className="w-full border-l-[150px] sm:border-l-[200px] border-r-[150px] sm:border-r-[200px] border-t-[100px] sm:border-t-[130px] border-l-transparent border-r-transparent border-t-zinc-300 dark:border-t-zinc-600 drop-shadow-md"></div>
            </div>

            {/* Submit Button (Seal) */}
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
               status === 'sending' || status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}>
               {/* This seal appears when envelope is closed */}
            </div>

            <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 z-10">
              <button
                type="button"
                onClick={() => formRef.current.requestSubmit()}
                disabled={status === "success" || status === "sending"}
                className={`group relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  status === "sending" ? "animate-spin" : "hover:scale-110"
                }`}
                title="Send Message"
              >
                <div className="absolute inset-0 bg-red-700 rounded-full shadow-lg shadow-red-900/40 group-hover:shadow-red-900/60 transition-shadow"></div>
                <div className="absolute inset-2 border-2 border-red-800 rounded-full border-dashed"></div>
                <span className="relative text-white font-bold text-xs tracking-wider uppercase">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
