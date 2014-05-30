
## Getting Started

This is a [Yeoman](http://yeoman.io) generator for Polymer elements
with my current build and language preferences.

```
npm install -g yo
npm install -g generator-literate-polymer
mkdir your-element-name
yo literate-polymer
```

This will make a single element project, designed to be placed stand
alone in a git repository. You make an element `name`, which generates
a `.html`, `.less`,  and a `.litcoffee` file. This is all built
together with [Gulp](http://gulpjs.com) and
[Browserify](http://browserify.org).

## Developing

Run `npm test` and it a watcher and test web server will fire up, with
a `demo.html` page for you to exercise and debug your new element. Lots
easier to work on these elements stand alone, since the cycle time for
build and reload is a lot faster!

## Using

You can `npm install` any element generated with this system, and
will will run its build creating `name.html`, the fully vulcanized
and optimized element.  You are also welcome to include elements by
`src/name.html`, and then vulcanize your final application.
