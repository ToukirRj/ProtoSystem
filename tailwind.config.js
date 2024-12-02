
/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
];

export const theme = {
  extend: {
    backdropBlur: {
      'extra': '150px', // Define your custom blur intensity
    },
  }
};

export const darkMode = 'class'; // Enable dark mode based on a class

export const plugins = [];

