/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'light-50': '#ffffff',
        'light-100': '#e7e7e7',
        'light-200': '#a8a8a8',
        'light-300': '#808080',

        'primary-50': '#34efff',
        'primary-100': '#33c2ff',
        'primary-200': '#206ad2',
      }
    },
  },
  plugins: [],
}

