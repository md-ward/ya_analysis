/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"
  ,
  "./public/assets/**/*.{woff,woff2,ttf}",
];
export const mode = 'jit';
export const theme = {
  extend: {
    fontFamily: {
      'custom': ['RemachineScript', 'cursive', 'normal', 'normal'],

    },
    colors: {
      'custom-blue':'#4B63A0',
      'dark-blue': '#2A2F4F',
      'dark-blue-2': '#917FB3',
      'dark-pink': '#E5BEEC',
      'lite-pink': '#FDE2F3'
    },
    clipPath: {
      polygon: 'polygon()',
    },
  },
};