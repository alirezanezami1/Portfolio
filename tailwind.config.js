/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
          customFont : ['"Estedad"' ]
      }
    },
    colors: {

      //// white / black
      'white': "#FFFFFF",
      'black': "#000000",

      //// text color
      'txt1' : '#050D05',
      'txt2' : '#828682',
      'txt3' : '#B4B6B4',
      'txt4' : '#13144E',
      'txt5' : '#CDCFCD',
      'txt6' : '#505650',
      'txt7' : '#1E251E',

      //// background 
      'Bg/1' : '#FFFFFF',
      'Bg/2' : '#13144E',
      'Bg/3' : '#F8F8F8',
      'Bg/4' : '#CDCFCD' ,
      'Bg/5' : '#424371' ,
      'Bg/6' : '#F7F8F9' ,

      //// button
      'btn1' : '#13144E',
      'btn2' : 'rgba(19,20,78,.14)'
    }
  }
}

