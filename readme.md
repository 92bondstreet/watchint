WATCHINT
=========

watchint is a basic script to monitor files with [watch](https://github.com/gruntjs/grunt-contrib-watch) and detect potential errors with [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) and [ESLint](https://github.com/eslint/eslint).


Installation
------------

Clone it in your local folder 

`git clone git@github.com:92bondstreet/watchint.git .` 

Or export it in your local folder

`git clone --depth=1 git@github.com:92bondstreet/watchint.git . && rm -rf .git`

(Notice the `.` after the github url in order to clone/export without the package name)


Getting Started
---------------

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install script dependencies with this command:


	npm install



## Watchint task
_Run this task with the `grunt --js {path} --jsconfig {path} --esconfig {path}` command._


### --js option

Type: `String`  
Default: `null`

Define javascript files to watch and to detect errors with JSHint.

### --jsconfig option

Type: `String`	
Default: `null`

Define path for `.jshintrc` file.

### --esconfig option

Type: `String` 	
Default: `null`

Define path for `eslint.json` file.

### --mode option

Type: `String` 	
Default: `jshint`	
Value: `jshint | eslint | both`

Define linter tasks: jshint only, eslint only or both.

### --notifiy option

Default: `false`	

Display notification.

Project status
--------------

watchint is currently maintained by Yassine Azzout.


Authors and contributors
------------------------

### Current
* [Yassine Azzout][] (Creator & Full-Stack Coder)

[Yassine Azzout]: http://yass.io


License
-------
[MIT license](http://www.opensource.org/licenses/Mit)