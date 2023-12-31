import React from "react";
import Case from "../components/Case";

export default function Home() {
  return (
    <Case>
      <div class="relative bg-cover bg-center bg-no-repeat"></div>
      <div class="flex-1 space-y-4 sm:text-center lg:text-left">
        <div class="relative  bg-octopath1 bg-cover bg-center bg-no-repeat">
          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 class=" block w-full max-w-lg rounded bg-black font-primary text-3xl font-extrabold text-white opacity-70 sm:text-5xl">
                Octopath Traveler
              </h1>

              <p class="mt-4 block w-full max-w-lg rounded bg-black font-primary text-white opacity-70 sm:text-xl/relaxed">
                Eight travelers. Eight adventures. Eight roles to play. Embark
                on an epic journey across the vast and wondrous world of
                Orsterra and discover the captivating stories of each of the
                eight travelers.
              </p>

              <button class="group relative mt-8 px-12 py-3  text-center opacity-75">
                <a href="#/Octopath">
                  <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
                  <span class="relative font-bold text-black group-hover:text-white">
                    Enter
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="  container items-center  lg:flex-wrap"></section>
      <div class="relative  bg-octopath2 bg-cover bg-center bg-no-repeat">
        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class=" block w-full max-w-lg rounded bg-black font-primary text-3xl font-extrabold text-white opacity-70 sm:text-5xl">
              Octopath Traveler II
            </h1>

            <p class="mt-4 block w-full max-w-lg rounded bg-black font-primary text-white opacity-70 sm:text-xl/relaxed">
              The story takes place in Solistia, a land comprising an eastern
              and western continent divided by the sea. It is a bustling era,
              wherein large vessels navigate busy sea routes and the power of
              steam gives birth to new technologies. Some people thrill to
              glamorous stars of the stage and industry, while others are
              brought to tears by war, plague, and poverty. In this faraway
              realm, eight travelers hailing from different regions venture
              forth for their own reasons. Step into their shoes and explore the
              land as you see fit, using their unique talents to aid you along
              your journey. Embark on an adventure all your own.
            </p>

            <button class="group relative mt-8 px-12 py-3  text-center opacity-75">
              <a href="#/Octopath2">
                <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
                <span class="relative font-bold text-black group-hover:text-white">
                  Enter
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Case>
  );
}
