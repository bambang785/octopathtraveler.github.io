// for responsive
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5
// not tested for responsive

import React from "react";
export default function octopath2() {
  return (
    <section>
      <div class="container mx-auto">
        <div class=" grid grid-cols-6 flex-col gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {/* Page 1 */}
          <div
            class=" col-start-1 col-end-7 mx-auto w-full max-w-screen-2xl flex-shrink-0 bg-cover bg-center bg-no-repeat"
            dir="ltr"
          >
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <div class="flex-1 space-y-4 sm:text-center lg:text-left">
                <video
                  src="https://fyre.cdn.sewest.net/octopath-traveler-2/637dffda4dc880a0db62d0c1/hero_bg_desktop-yowoc2gpd-yTAedXc6c.mp4"
                  autoplay="{true}"
                  loop
                  muted
                  className="invisible left-0 h-full w-full border-b-2 border-[#ECCA87] object-cover lg:visible lg:absolute"
                ></video>

                <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                  <h1 class="ml-10 mt-[110px] block w-full max-w-lg rounded bg-black text-center font-primary text-3xl font-extrabold text-white opacity-70 sm:text-5xl">
                    Octopath Traveler
                  </h1>

                  <p class="ml-10 mt-4 block w-full max-w-lg rounded bg-black text-center font-primary text-white opacity-70 sm:text-xl/relaxed">
                    The story takes place in Solistia, a land comprising an
                    eastern and western continent divided by the sea. It is a
                    bustling era, wherein large vessels navigate busy sea routes
                    and the power of steam gives birth to new technologies. Some
                    people thrill to glamorous stars of the stage and industry,
                    while others are brought to tears by war, plague, and
                    poverty. In this faraway realm, eight travelers hailing from
                    different regions venture forth for their own reasons. Step
                    into their shoes and explore the land as you see fit, using
                    their unique talents to aid you along your journey. Embark
                    on an adventure all your own.
                  </p>

                  <button class="group relative ml-56 mt-8 px-12 py-3  text-center opacity-75">
                    <a href="Octopath2">
                      <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span class="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
                      <span class="relative font-bold text-black group-hover:text-white">
                        Explore
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Page 2 */}

          <div class=" col-start-1 col-end-7 mx-auto my-[110px] h-[800px] w-full max-w-screen-2xl flex-shrink-0 border-y-2 border-[#ECCA87]  bg-map11  bg-cover bg-center bg-no-repeat">
            <h1 class=" relative my-10 flex items-center text-center">
              <span class=" mx-auto text-2xl font-bold uppercase text-[#ECCA87] md:text-3xl ">
                TRAVELERS
              </span>
            </h1>
            {/* Character Section page 2 */}
            <li class="flex justify-center">
              <ul class="mx-auto mb-10 mt-10 grid max-w-[350px] grid-cols-2 grid-rows-2 gap-y-10 sm:max-w-[500px] sm:grid-cols-3 md:max-w-[800px] md:grid-cols-4 lg:my-0 lg:max-w-none lg:gap-6">
                {/* Temenos */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-temenos1  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Temenos Mistral
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Partitio */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-partitio1  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Partitio Yellowil
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Hikari */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-hikari  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Hikari Ku
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Castti */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-castti bg-cover bg-center  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Castti Florenz
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Throne */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-throne1  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Throne Anguis
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Ochette */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-Ochette bg-cover bg-center "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Ochette
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Agnea */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-agnea  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Agnea Bristani
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
                {/* Osvald */}
                <div class="relative">
                  <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                  <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                  <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                  <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                  <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                  <a
                    class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                    href="Octopath2"
                  >
                    <img class="h-[247px] w-[110px] bg-transparent bg-osvald  "></img>
                    <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                      Osvald V.Vanstein
                    </span>
                  </a>
                  <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                  <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
                </div>
              </ul>
            </li>
            <button class="group relative ml-[680px] mt-8 px-12 py-3 text-center opacity-75">
              <a href="Octopath2">
                <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 h-full w-full border-2 border-black bg-slate-50 group-hover:bg-black"></span>
                <span class="relative font-bold text-black group-hover:text-white">
                  Explore
                </span>
              </a>
            </button>
          </div>
          {/* Article Section */}
          <div
            class=" col-start-1 col-end-7 mx-auto -mt-[135px] h-[800px] w-full max-w-screen-2xl flex-shrink-0 bg-galaxy  bg-cover bg-center bg-no-repeat"
            dir="ltr"
          >
            <h1 class="  ml-[500px]  mt-10 block w-full max-w-lg rounded bg-black text-center font-primary text-3xl font-extrabold text-white opacity-75 sm:text-5xl">
              ARTICLE
            </h1>
            {/* Page 1 Article*/}
            <div class="mt-10 grid grid-flow-col grid-rows-3 gap-4">
              <div class="row-start-1 row-end-4 mx-auto max-w-lg">
                <div class="mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://gh.cdn.sewest.net/assets/ident/news/99013211/OCTOPATH_TRAVELERII-zgxqhaftr-rvtx3p7h6.jpg?quality=65"
                      alt=""
                    ></img>
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Review Karakter Terbaik di Octopath Traveler II
                      </h5>
                    </a>
                    <a
                      class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              {/* Page 2 Article*/}
              <div class="row-start-1 row-end-4 mx-auto max-w-lg">
                <div class="mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://pbs.twimg.com/media/Fc4dzaSX0AIb8Ka.jpg:large"
                      alt=""
                    ></img>
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Tempat paling bagus untuk grinding di Octopath Traveler
                        II
                      </h5>
                    </a>

                    <a
                      class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              {/* Page 3 Article*/}
              <div class="row-start-1 row-end-4 mx-auto max-w-lg">
                <div class="mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://venturebeat.com/wp-content/uploads/2023/03/Octopath-Traveler-2-Featured.jpg?fit=1920%2C1080&strip=all"
                      alt=""
                    ></img>
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Hal yang harus diperhatikan oleh pemula di Octopath
                        Traveler II
                      </h5>
                    </a>

                    <a
                      class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}

      <footer class=" bg-white shadow dark:bg-black">
        <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Octopath Traveler Indonesia
            </a>
            . All Rights Reserved.
          </span>
          <ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}