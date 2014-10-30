
## Getting Started

This is a [Yeoman](http://yeoman.io) generator for Polymer elements

```
npm install -g yo
npm install -g custom-elements/generator-literate-polymer
mkdir your-element-name; cd your-element-name
yo literate-polymer
```

This will make a single element project, designed to be placed stand
alone in a git repository. You make an element `name`, which generates
a `.html`, `.less`,  and a `.litcoffee` file. This is all built
together with [Gulp](http://gulpjs.com),
[Browserify](http://browserify.org), [less](http://lesscss.org/),
[CoffeeScript](http://coffeescript.org/).

## Developing

Run `npm test` and a watcher and test web server will fire up, with
a `demo.html` page for you to execute and debug your new element. Lots
easier to work on these elements stand alone, since the cycle time for
build and reload is a lot faster!

You can also create new elements on the fly running this command.

```
yo literate-polymer:element my-new-element
```

Like the project generator, this will take `my-element-name` and generate
the `.html`, `.less`,  and `.litcoffee` files in your src directory.


## Using

You can `npm install` any element generated with this system, and
it will run its build creating `name.html`, the fully vulcanized
and optimized element.  You are also welcome to include elements by
`src/name.html`, and then vulcanize your final application.
