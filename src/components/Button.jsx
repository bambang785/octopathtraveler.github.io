import React from "react";

export default function Button() {
  return (
    <button class="group absolute mt-8 px-12 py-3  text-center opacity-75  sm:mx-[200px]">
      <a href="#">
        <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0  w-full border-2 border-black bg-day bg-auto bg-center"></span>
        <span class="relative font-bold text-white group-hover:text-black">
          Explore
        </span>
      </a>
    </button>
  );
}
