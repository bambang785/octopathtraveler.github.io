/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Orbitron",
      roboto: "Roboto",
    },
    extend: {
      backgroundImage: {
        octopath1: "url('/src/assets/octopath1.jpg')",
        octopath2: "url('/src/assets/octopath2.jpg')",
        Header1: "url('/src/assets/Header1.jpg')",
        octopath3: "url('/src/assets/octopath3.jpg')",
        map1: "url('/src/assets/map1.jpg')",
        map11: "url('/src/assets/Map1.1.jpeg')",
        temenos1: "url('/src/assets/TemenosCH.jpg')",
        partitio1: "url('/src/assets/partitioCH.jpg')",
        throne1: "url('/src/assets/Throne.jpg')",
        castti: "url('/src/assets/Castti.jpg')",
        hikari: "url('/src/assets/Hikari.jpg')",
        osvald: "url('/src/assets/Osvald.jpg')",
        Ochette: "url('/src/assets/Ochette.jpg')",
        agnea: "url('/src/assets/Agnea.jpg')",
        hinouema: "url('/src/assets/hinouema.jpg')",
        galaxy: "url('/src/assets/galaxy.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
