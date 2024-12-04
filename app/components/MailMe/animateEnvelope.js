export default function AnimateEnvelope({ status, toggleClasses, PlaySound }) {
  if (status === "success") {
    toggleClasses(".envelope", ["translate-y-3/4"], ["translate-y-0"]);
    toggleClasses(".paper", ["-translate-y-[105%]"], ["translate-y-0"]);
    toggleClasses(".top-triangle", ["-z-50"], ["z-40"], 500);
    toggleClasses(".top-triangle", ["open"], ["close"], 600);

    setTimeout(() => {
      PlaySound({ url: "/sounds/paperslide3.mp3" });
    }, 900);
    toggleClasses(
      ".envelope-container",
      ["translate-x-0", "opacity-100"],
      ["translate-x-[300%]", "opacity-0"],
      1000
    );

    toggleClasses(".success", ["opacity-0"], ["opacity-100"], 1250);

    toggleClasses(
      ".envelope-container",
      ["translate-x-[300%]"],
      ["translate-x-0"],
      2250
    );

    toggleClasses(".envelope-container", ["opacity-0"], ["opacity-100"], 3000);

    toggleClasses(".success", ["opacity-100"], ["opacity-0"], 2500);
    toggleClasses(".top-triangle", ["close"], ["open"], 3500);
    toggleClasses(".top-triangle", ["z-40"], ["-z-50"], 4000);
    toggleClasses(".envelope", ["translate-y-0"], ["translate-y-3/4"], 4100);
    toggleClasses(".paper", ["translate-y-0"], ["-translate-y-[105%]"], 4100);
  }
}
