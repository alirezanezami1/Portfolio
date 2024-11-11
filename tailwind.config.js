/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
          customFont : ['"Estedad"' ]
      }
    },
    colors: {
      //// text color
      'txt1' : '#050D05',
      'txt2' : '#828682',
      'txt3' : '#B4B6B4',

      //// background 
      'Bg/1' : '#FFFFFF',
      'Bg/3' : '#F8F8F8',
      'test' : 'red'
    }
  },
  plugins: [],
}

