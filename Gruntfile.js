module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			copymod: {
				files: ['cql/*'],
				tasks: ['copy'],
				options: {

				}	
			}
		},
		copy: {
		  main: {
		    files: [
		      {expand: true, cwd: 'cql/', src: ['**'], dest: "D:/Steam/SteamApps/common/Sid Meier's Civilization VI/DLC/cql", filter: 'isFile'},
		    ],
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default', ['watch']);

};