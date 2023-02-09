[![Build Status](https://travis-ci.org/p2pu/p2pu-css-framework.svg?branch=master)](https://travis-ci.org/p2pu/p2pu-css-framework)

# P2PU CSS Framework

> a.k.a. "P2PUstrap"

We use this framework to make sure all our web properties follow the same consistent brand. You can use it too if you want a website that looks like ours!

## Getting started

The theme is based on Bootstrap 5 and includes CSS and JavaScript. You can use just the CSS, but then some Bootstrap components may not work (like menu dropdowns or modals). 

### Include precompiled CSS and JS from our CDN

**TODO** CDN isn't being updated atm, need to migrate to github actions. You can copy the files in `dist/` of this repo to your site. Include the CSS `<head>` and the JavaScript at the end of `<body>` and add material icons and fontawesome somehow. See `demo/index.html` for details. It might not be 100% working right now.

In your `<head>` tag:
```	
<link rel="stylesheet" href="https://d3gh4aef1l5qvi.cloudfront.net/discourse.css">
```
At the end of your `<body>` tag:
```
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script src="https://d3gh4aef1l5qvi.cloudfront.net/base.js"></script>
```
As you can see, you'll need to include Bootstrap and its dependencies, jQuery and popper.js. 

### Install the package
NPM:
```
npm install p2pu-theme
```

Don't forget to install the peer dependencies: `jQuery`, `bootstrap` and `popper.js`. 

**TODO** Update these instructions for using it with Webpack 5. The TLDR is in a js file, include both the css file and the js, file, make sure you have your loaders set up to do what it needs to, basically the [instructions for using bootstrap 5 with webpack](https://getbootstrap.com/docs/5.3/getting-started/webpack/). You still need bootstrap, popper, material icons and fontawesome. I hope to shorten that list soon.

## Extending the framework

If you're using the `p2pu-theme` package, you can extend the library to suit your own needs. 

### Extending Styles

The CSS is built from [sass](http://sass-lang.com/). You'll find the partials in `p2pu-theme/src/scss`. The first place to start is the `_variables.scss` file, where you can change the variables that are used throughout bootstrap and the p2pu-theme. You can then create your own partials and add them to the end of `base.scss` or create your own base file and import only the partials you want. 

Run `npm run build` to compile the CSS files, which will be output to the `dist` folder.

### Extending JavaScript

Add your JavaScript files to the `js` folder and import them in the `index.js` file. 

Run `npm run build` to compile the package, which will be output to the `dist` folder.
