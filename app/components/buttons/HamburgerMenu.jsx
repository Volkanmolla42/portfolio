"use client";

import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <button
      className=" absolute top-6 right-6 p-2 "
      onClick={() => {
        document.querySelector(".perspective")?.classList.toggle("active");
      }}
    >
      <Image
        src="/icons/menu-icons/bars-solid.svg"
        alt="menu"
        width={24}
        height={24}
      />
    </button>
  );
};

export default HamburgerMenu;
