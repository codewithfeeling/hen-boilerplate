# Minimal Boilerplate for building Hic Et Nunc HTML OBJKTs.

## 🚀 Laravel Mix 6, TailwindCSS 2, PostCSS 8, and ES6 Vanilla JS components.

### Requirements
Make sure all dependencies have been installed before moving on:

* [yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/download/) >= 10

### Quick start: Installation
Clone this repository and run
- `yarn` to install dependencies

### Tasks
| Task Name | Description
| :------------- | :------------- |
| `yarn development` | Run all Mix tasks
| `yarn watch` | Run all Mix tasks and watch all relevant files for changes (assets unminified)
| `yarn watch-production` | Run all Mix tasks and watch all relevant files for changes (NODE_ENV=production / assets minified)
| `yarn hot` | Hot module replacement
| `yarn production` | Run all Mix tasks and minify output

## HTML Template

All HTML content needs to be minted in a zip file. You can have multiple files inside your zip, however there are a few requirements you can't miss.

1. The HTML file can only be called index.html
2. The file should have a thumbnail image to be displayed until the user clicks to interact on your NFT. The image can be png, jpg or a gif. you just need to update the <metadata> reference inside the HTML file.
3. At the moment calls to external sites are being blocked, even if they seem to work locally when you are testing. So any dependency needs to be included locally in the zip.

Regardless of what content you want to display (three.js, pixi.js, canvas, p5.js, shaders etc), it should always be full width and full height (window.innerWidth and window.innerHeight) so please dont forget to include your own resize function.

## Copyright and license
Copyright 2020 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
