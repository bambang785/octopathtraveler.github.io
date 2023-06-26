import React from "react";
export default function octopath() {
  return (
    <section>
      <div class="  grid grid-cols-6 ">
        <div
          class=" col-start-1 col-end-7 mx-auto h-[800px] w-full max-w-screen-2xl flex-shrink-0 bg-octopath3 bg-cover bg-center bg-no-repeat"
          dir="ltr"
        >
          <h1 class=" ml-10 mt-60 block w-full max-w-lg rounded bg-black text-center font-primary text-3xl font-extrabold text-white opacity-70 sm:text-5xl">
            Octopath Traveler
          </h1>

          <p class="ml-10 mt-4 block w-full max-w-lg max-w-lg rounded bg-black text-center font-primary font-primary text-white opacity-70 sm:text-xl/relaxed">
            Eight travelers. Eight adventures. Eight roles to play. Embark on an
            epic journey across the vast and wondrous world of Orsterra and
            discover the captivating stories of each of the eight travelers.
          </p>

          <button class="group relative ml-56 mt-8 px-12 py-3  text-center opacity-75">
            <a href="Octopath">
              <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
              <span class="relative font-bold text-black group-hover:text-white">
                Explore
              </span>
            </a>
          </button>
        </div>
        <div
          class=" col-start-1 col-end-4 mx-auto h-[700px] w-full max-w-screen-2xl flex-shrink-0 bg-map1 bg-cover bg-center bg-no-repeat"
          dir="ltr"
        >
          <h1 class=" ml-10 mt-60 block w-full max-w-lg rounded bg-black text-center font-primary text-3xl font-extrabold text-white opacity-75 sm:text-5xl">
            TRAVELERS
          </h1>

          <button class="group relative ml-56 mt-8 px-12 py-3 text-center opacity-75">
            <a href="Octopath"></a>
          </button>
        </div>
        <div class="col-span-3 col-end-7 bg-map11 ">
          <button class=" group ml-8 mt-32 h-[200px] w-[100px] bg-temenos1 bg-cover bg-center text-center ">
            <div class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"></div>
            <a href="Octopath"></a>
          </button>
        </div>
        <div class="col-start-1 col-end-7 block w-full max-w-lg rounded bg-black font-primary text-3xl font-extrabold text-white opacity-70 sm:text-5xl">
          03
        </div>
      </div>
    </section>
  );
}
