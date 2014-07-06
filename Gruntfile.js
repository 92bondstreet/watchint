module.exports = function(grunt) {

  // Stylish error and co
  var chalk = require('chalk');
  var error = chalk.bold.red;

  // Properties
  var MODE_BOTH = 'both';
  var MODE_JSHINT = 'jshint';
  var MODE_ESLINT = 'eslint';


  // Get arguments: js files path and .jshintrc path
  var jsPath = grunt.option('js') || null;
  var jsconfig = grunt.option('jsconfig') || null;
  var esconfig = grunt.option('esconfig') || null;
  var mode = grunt.option('mode') || MODE_JSHINT;

  // Define tasks for watch
  var watchTasks = [MODE_JSHINT];
  if(mode === MODE_BOTH){
    watchTasks = [MODE_JSHINT,MODE_ESLINT];
  }
  else if(mode === MODE_ESLINT){
    watchTasks = [MODE_ESLINT];
  }

  console.log(watchTasks);

  // Wording and missing parameters errors
  var missingJsPath = error('Please use grunt --js {path} where {path} is the path of .*js files to watch and jshint');

  if (jsPath === null) {
    console.log(missingJsPath);
    return false;
  }

  // Task definition
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: jsconfig
        ,reporter: require('jshint-stylish')
      }
      ,all: {
        src: jsPath
      }
    }
    ,eslint: {                               
        target: ['/Users/92bondstreet/Web Development/2014/demographics/js/AgeRange.js']              
    }
  });

  // Watch task
  grunt.config('watch', {
      scripts: {
        files: jsPath
        ,tasks: ['eslint','jshint']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['watch']);

};