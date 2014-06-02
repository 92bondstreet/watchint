module.exports = function(grunt) {

  // Stylish error and co
  var chalk = require('chalk');
  var error = chalk.bold.red;

  // Get arguments: js files path and .jshintrc path
  var jsPath = grunt.option('js') || null;
  var config = grunt.option('config') || null;

  // Wording
  var missingJsPath = error('Please use grunt --js {path} where {path} is the path of .*js files to watch and jshint');

  if (jsPath === null) {
    console.log(missingJsPath);
    return false;
  }


  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: config
        ,reporter: require('jshint-stylish')
      }
      ,all: {
        src: jsPath
      }
    }
    ,watch: {
      jshint: {
        files: jsPath
        ,tasks: 'jshint'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};