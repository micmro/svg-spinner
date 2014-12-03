/* Grunt file for grunt-simple-boilerplate*/


module.exports = function( grunt ) {
	"use strict";

	//load all tasks specified in package.json
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);



	grunt.initConfig({
		//task to run other tasks (like reload) on file changes
		watch: {
			loadFiles: {
				//refresh for html and all files in assets folder
				files: ['*.html','assets/**']
			},
			options: {
				livereload: 35729,
			}
		},

		// grunt-contrib-connect will serve the files of the project
		// on specified port and hostname and injects the live reload script
		connect: {
			dev: {
				options:{
					port: 8000,
					hostname: "localhost",
					base: "./",
					middleware: function(connect, options) {
						return [
							require('connect-livereload')({
								port: grunt.config.get("watch.options.livereload")
							})
							// Serve the project folder
							,connect.static(Array.isArray(options.base) ? options.base[0] : options.base)
							,connect.directory(options.base)
						];
					}
				}			
			}
		},

		//opens local sever in browser (currently not working in Linux)
		open: {
			dev: {
				path: 'http://<%= connect.dev.options.hostname%>:<%= connect.dev.options.port%>'
			}
		}
	});

	//dev server / auto reload
	//remove open task in linux
	grunt.registerTask('dev', ['connect:dev', 'open:dev', 'watch']);
	grunt.registerTask('default', 'dev');
};