/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'white-gray': '#FCFBFB'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'gray': '#DADADA'
      }),
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-desktop': "url('https://raw.githubusercontent.com/TheDiego350z1/Tailwind-CSS/master/public/images/sanFranciscoDesktop.jpg')",
        'hero-mobile': "url('https://raw.githubusercontent.com/TheDiego350z1/Tailwind-CSS/master/public/images/sanFrancisco.jpg')",
        'chicago-back': "url('https://github.com/TheDiego350z1/Imagenes-Tailwind/blob/master/chicago.jpg?raw=true')",
        'LA-back': "url('https://github.com/TheDiego350z1/Imagenes-Tailwind/blob/master/LA.jpg?raw=true')",
        'miami-back': "url('https://github.com/TheDiego350z1/Imagenes-Tailwind/blob/master/miami.jpg?raw=true')",
        'bali-back': "url('https://github.com/TheDiego350z1/Imagenes-Tailwind/blob/master/bali.jpg?raw=true')",
      },
      fill: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
      }),
      stroke: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
      })
    },
  },
  plugins: [],
}
