'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk')
var _ = require('underscore.string');


var LiteratePolymerGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous LiteratePolymer generator!'));

    var prompts = [{
      name: 'elementName',
      message: 'What are you calling your element?',
      default: path.basename(path.resolve('.')),
      validate: function(input){
          var valid = input && input.length && input.indexOf('-');
          if (valid)
            return true;
          else
            return 'Remember to have a - in the name! Polymer rules.'
      }
    }];

    this.prompt(prompts, function (props) {
      this.elementName = props.elementName;
      done();
    }.bind(this));
  },

  app: function () {
    var name = _.slugify(this.elementName);
    this.mkdir('src');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_demo.html', 'demo.html');
    this.copy('_element.html', './src/' + name + '.html');
    this.copy('_element.litcoffee','./src/' + name + '.litcoffee');
    this.copy('_element.less','./src/' + name + '.less');
  },

  projectfiles: function () {
    this.copy('_gulpfile.litcoffee', 'gulpfile.litcoffee');
    this.copy('_.gitignore', '.gitignore');
  }
});

module.exports = LiteratePolymerGenerator;
