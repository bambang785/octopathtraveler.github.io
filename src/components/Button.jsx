import React from "react";

export default function Button() {
  return (
    <button class="group static mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
      <span class="relative rounded-md bg-white bg-night bg-center px-[20px] py-[18px] transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"></span>
    </button>
  );
}
