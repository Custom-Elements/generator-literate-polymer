'use strict';
var yeoman = require('yeoman-generator');
var _ = require('underscore.string');


var ElementGenerator = yeoman.generators.NamedBase.extend({
  create: function () {
    var name = _.slugify(this.name);
    this.mkdir('src');
    this.copy('_element.html', './src/' + name + '.html');
    this.copy('_element.litcoffee','./src/' + name + '.litcoffee');
    this.copy('_element.less','./src/' + name + '.less');
  }
});

module.exports = ElementGenerator;
