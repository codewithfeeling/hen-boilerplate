const mix = require('laravel-mix');
require('laravel-mix-eslint');

mix

  // JS
  .js('./src/js/app.js', './dist/').eslint()

  // CSS
  .postCss('./src/css/style.css', './dist/style.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
  ])

  // Options
  .options({
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    }
  })

  // Copy HTML files
  .copy('src/*.html', 'dist')

  // Copy Image directory
  .copyDirectory('src/img', 'dist/')
  .copyDirectory('src/fonts', 'dist/')

  // BrowserSync
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}',
    ]
  })
