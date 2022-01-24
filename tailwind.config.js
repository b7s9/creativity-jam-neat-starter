module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sand: {
          100: '#F0EEE0',
          200: '#E7E4CA',
          300: '#DBD5B1',
          400: '#D2CC9D',
          500: '#C9C291',
          600: '#B8B075',
          700: '#9C945B',
          800: '#7D753C',
          900: '#5F5A38',
        },
        brick: {
          100: '#F1BF98',
          200: '#E6A06A',
          300: '#E28B48',
          400: '#D8701F',
          500: '#C56216',
          600: '#B6580F',
          700: '#A84F0A',
          800: '#98470A',
          900: '#863F08',
        },
        dirt: {
          700: '#763F2C',
          800: '#55291A',
          900: '#372417'
        }
      },
      fontFamily: {
        title: ['Basteleur', 'serif'],
        wranjerTitle: ['Savate', 'serif'],
        faetherwatchTitle: ['Fengardo Neue', 'serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
