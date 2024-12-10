export default function AnimateEnvelope({ status, toggleClasses, PlaySound }) {
  // If the status is 'success', start the animation sequence
  if (status === "success") {
    // Initial animation for envelope and paper
    toggleClasses(".envelope", ["translate-y-3/4"], ["translate-y-0"]);
    toggleClasses(".paper", ["-translate-y-[105%]"], ["translate-y-0"]);

    // Animate the top triangle (move and change z-index)
    toggleClasses(".top-triangle", ["-z-50"], ["z-40"], 500);
    toggleClasses(".top-triangle", ["open"], ["close"], 600);

    // Animate the envelope container to slide out and fade away
    toggleClasses(
      ".envelope-container",
      ["translate-x-0", "opacity-100"],
      ["translate-x-[300%]", "opacity-0"],
      1000
    );

    // Play sound after a slight delay
    setTimeout(() => {
      PlaySound({ url: "/sounds/paperslide3.mp3" });
    }, 1000);

    // Fade in the success message
    toggleClasses(".success", ["opacity-0"], ["opacity-100"], 1250);

    // Slide the envelope container back in
    toggleClasses(
      ".envelope-container",
      ["translate-x-[300%]"],
      ["translate-x-0"],
      2250
    );

    // Fade the envelope container back in
    toggleClasses(".envelope-container", ["opacity-0"], ["opacity-100"], 3000);

    // Fade out the success message
    toggleClasses(".success", ["opacity-100"], ["opacity-0"], 2500);

    // Animate the top triangle back to its open state
    toggleClasses(".top-triangle", ["close"], ["open"], 3500);
    toggleClasses(".top-triangle", ["z-40"], ["-z-50"], 4000);

    // Final movement for the envelope and paper
    toggleClasses(".envelope", ["translate-y-0"], ["translate-y-3/4"], 4100);
    toggleClasses(".paper", ["translate-y-0"], ["-translate-y-[105%]"], 4100);
  }
}
