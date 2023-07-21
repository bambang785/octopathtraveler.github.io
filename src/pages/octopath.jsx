import React from "react";
export default function octopath() {
  return (
    <section>
      <div class=" grid grid-cols-6 flex-col gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {/* Page 1 */}
        <div
          class=" max-w-screen-2xl col-start-1 col-end-7 mx-auto h-full w-full flex-shrink-0 bg-octopath3 bg-cover bg-center bg-no-repeat"
          dir="ltr"
        >
          <div class="text-= max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <div class="flex-1 space-y-4  sm:text-center lg:text-left">
              <div class=" my-[150px] h-full  w-full max-w-screen-xl bg-cover bg-center bg-no-repeat sm:px-6 lg:flex lg:h-screen lg:items-center lg:space-y-64 lg:px-8">
                <div class="text-center rtl:custom:text-right sm:min-h-screen ltr:sm:text-left  ">
                  <h1 class="block w-full max-w-lg rounded bg-black text-center font-primary text-3xl font-extrabold text-white opacity-70  sm:text-5xl ">
                    Octopath Traveler
                  </h1>

                  <p class=" mt-4 block w-full max-w-lg rounded bg-black text-center font-primary text-white opacity-70 sm:text-xl/relaxed">
                    Eight travelers. Eight adventures. Eight roles to play.
                    Embark on an epic journey across the vast and wondrous world
                    of Orsterra and discover the captivating stories of each of
                    the eight travelers.
                  </p>

                  <button class="group relative mt-8 px-12 py-3  text-center opacity-75  sm:mx-[200px]">
                    <a href="Octopath">
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
        </div>
        {/* Page 2 */}

        <div class=" max-w-screen-2xl col-start-1 col-end-7 mx-auto -mt-6 mb-10 h-full w-full flex-shrink-0 border-b-2 border-[#ECCA87] bg-map1  bg-cover bg-center bg-no-repeat">
          <h1 class=" relative my-5 flex items-center text-center">
            <span class=" mx-auto text-2xl font-bold uppercase text-[#ECCA87] md:text-3xl ">
              TRAVELERS
            </span>
          </h1>
          {/* Character Section page 2 */}
          <li class="flex justify-center">
            <ul class="mx-auto  grid max-w-[350px] grid-cols-2 grid-rows-2 gap-y-10 sm:max-w-[500px] sm:grid-cols-3 md:max-w-[800px] md:grid-cols-4 lg:my-0 lg:max-w-none">
              {/* Alfyn */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-alfyn bg-cover bg-center "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Alfyn Greengrass
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Primrose */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-primrose bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Primrose Azelhart
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Cyrus */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-cyrus bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Cyrus Albright
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Ophillia */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-ophillia bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Ophillia Clement
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Olberic */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-olberic bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Olberic Eisenberg
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Haanit */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-haanit bg-cover bg-center "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    H'aanit
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Therion */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-therion bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Therion
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
              {/* Tressa */}
              <div class="relative">
                <span class="absolute -top-0.5 left-2.5 right-1 border-t border-stone-500"></span>
                <span class="absolute -top-0.5 right-1 h-[13px] border-r border-stone-500"></span>
                <span class="absolute -left-0.5 bottom-1 right-1 top-2.5 border-x border-b border-stone-500"></span>
                <span class="absolute -right-0.5 bottom-2.5 left-1 top-1 border-x border-t border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 right-2.5 border-b border-stone-500"></span>
                <span class="absolute -bottom-0.5 left-1 h-[13px] border-l border-stone-500"></span>
                <a
                  class=" relative flex h-full border-[5px] border-transparent hover:border-[#ECCA87]"
                  href="Octopath"
                >
                  <img class="h-[247px] w-[110px] bg-transparent bg-tressa bg-cover bg-center  "></img>
                  <span class="absolute inset-x-0 bottom-0 flex min-h-[60px] items-center justify-center bg-black/60 px-1.5 text-center font-bold capitalize leading-5 text-[#ECCA87]">
                    Tressa Colzione
                  </span>
                </a>
                <span class="absolute -left-0.5 -top-0.5 block h-[13px] w-[13px] border-b border-r border-stone-500"></span>
                <span class="absolute -bottom-0.5 -right-0.5 block h-[13px] w-[13px] border-l border-t border-stone-500"></span>
              </div>
            </ul>
          </li>
        </div>
        {/* Article Section */}
        <div
          class=" max-w-screen-2xl col-start-1 col-end-7 mx-auto -mt-12  w-full flex-shrink-0 bg-dungeon  bg-cover bg-center bg-no-repeat"
          dir="ltr"
        >
          <div class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-10 sm:px-6">
            {/* Article Section 1 */}

            <div class="-mx-4 flex flex-wrap">
              <div class="mb-8 flex w-full max-w-full flex-col px-4 sm:w-1/2 lg:w-1/3">
                <img class="h-48 w-full bg-map11 bg-cover bg-center object-cover object-center" />
                <div class="flex flex-grow">
                  <div class="triangle"></div>
                  <div class="text flex flex-col justify-between border border-gray-400 bg-white px-4 py-6">
                    <div>
                      <a
                        href="#"
                        class="mb-4 block text-2xl font-black leading-tight hover:text-blue-600 hover:underline"
                      >
                        Map Terbaik di Octopath Traveler II
                      </a>
                      <p class="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nulla delectus corporis commodi aperiam, amet
                        cupiditate?
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="mt-2 inline-block border-b border-transparent pb-1 text-base font-black uppercase text-blue-600 hover:border-blue-600"
                      >
                        Read More{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Section 2 */}
              <div class="mb-8 flex w-full max-w-full flex-col px-4 sm:w-1/2 lg:w-1/3">
                <img class="h-48 w-full bg-octopath2 bg-cover bg-center object-cover object-center" />
                <div class="flex flex-grow">
                  <div class="triangle"></div>
                  <div class="flex flex-col justify-between border border-gray-400 bg-white px-4 py-6">
                    <div>
                      <a
                        href="#"
                        class="mb-4 block text-2xl font-black leading-tight hover:text-blue-600 hover:underline"
                      >
                        Karakter Terbaik di Octopath Traveler II Untuk Pemula
                      </a>
                      <p class="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nulla delectus.
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="mt-2 inline-block border-b border-transparent pb-1 text-base font-black uppercase text-blue-600 hover:border-blue-600"
                      >
                        Read More -
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Section 3 */}

              <div class="mb-8 flex w-full max-w-full flex-col px-4 sm:w-1/2 lg:w-1/3">
                <img class="h-48 w-full bg-temenos2 bg-cover bg-center object-cover object-center" />
                <div class="flex flex-grow">
                  <div class="triangle"></div>
                  <div class="flex flex-col justify-between border border-gray-400 bg-white px-4 py-6">
                    <div>
                      <a
                        href="#"
                        class="mb-4 block text-2xl font-black leading-tight hover:text-blue-600 hover:underline"
                      >
                        Review Karakter Temenos Mistral - Traveler Paling
                        Nyentrik di Octopath Traveler II
                      </a>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione, neque. Eius, ea possimus.
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="mt-2 inline-block border-b border-transparent pb-1 text-base font-black uppercase text-blue-600 hover:border-blue-600"
                      >
                        Read More{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Section 4 */}

              <div class="mb-8 flex w-full max-w-full flex-col px-4 sm:w-1/2 lg:w-1/3">
                <img class="h-48 w-full bg-hinouema bg-cover bg-center object-cover object-center" />
                <div class="flex flex-grow">
                  <div class="triangle"></div>
                  <div class="flex flex-col justify-between border border-gray-400 bg-white px-4 py-6">
                    <div>
                      <a
                        href="#"
                        class="mb-4 block text-2xl font-black leading-tight hover:text-blue-600 hover:underline"
                      >
                        Hal-hal yang Harus dilakukan oleh Pemula di Octopath
                        Traveler II
                      </a>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione, neque. Eius, ea possimus.
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="mt-2 inline-block border-b border-transparent pb-1 text-base font-black uppercase text-blue-600 hover:border-blue-600"
                      >
                        Read More{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      Footer Section
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
