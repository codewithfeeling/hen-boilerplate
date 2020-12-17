/**
 * Docs
 * https://tailwindcss.com/docs/configuration
 *
 * Default configuration
 * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.php',
      './src/**/*.liquid',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
}
