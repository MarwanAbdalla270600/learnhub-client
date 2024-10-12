/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF971D',
        background: '#0e1111',
      },
    },
    container: {
      center: true
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF971D',  // Replace with your custom primary color
        },
      },
    ],
  },
}

