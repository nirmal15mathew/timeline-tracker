
const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production,
    options: {
      safelist: ["dark"]
    } // disable purge in dev
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
