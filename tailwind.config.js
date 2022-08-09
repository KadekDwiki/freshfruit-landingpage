/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["Poppins"],
            montserrat: ["Montserrat"],
         },
      },
   },
   plugins: [require("@tailwindcss/line-clamp")],
};
