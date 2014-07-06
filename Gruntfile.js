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
  var notify = grunt.option('notify') || false;

  // Define tasks for watch
  // By default, use JSHINT linter
  var watchTasks = [MODE_JSHINT];

  if(mode === MODE_BOTH){
    // force other tasks to continue after failures
    watchTasks = ['continueOn',MODE_JSHINT,MODE_ESLINT,'continueOff'];
  }
  else if(mode === MODE_ESLINT){
    watchTasks = [MODE_ESLINT];
  }

  // Wording and missing parameters errors
  var missingJsPath = error('Please use grunt --js {path} where {path} is the path of .*js files to watch and jshint');

  if (jsPath === null) {
    console.log(missingJsPath);
    return false;
  }

  // Linter Tasks definition
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
        target: [jsPath]              
    }
  });

  // Watch task
  grunt.config('watch', {
      scripts: {
        files: jsPath
        ,tasks: watchTasks
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-continue');
  if(notify === true){
    grunt.loadNpmTasks('grunt-notify');
  }

  grunt.registerTask('default', ['watch']);

};