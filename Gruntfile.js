/**
 * 
 */
module.exports = function(grunt) {
  grunt.initConfig({
		concat : {
		  options : {
			sourceMap :true
		  },
		  dist : {
			src  : ['node_modules/jquery/dist/jquery.min.js', 
					'node_modules/materialize-css/dist/js/materialize.min.js', 
					'node_modules/angular/angular.min.js',
					'node_modules/angular-route/angular-route.min.js',
					'src/fenix.js',
					'src/controllers/oficina-cadastro.controller.js',
					'src/controllers/endereco-cadastro.controller.js'],
			dest : 'src/dist/core.js'
		  }
		},
		uglify : {
		  //options : {
			//sourceMap : true,
			//sourceMapIncludeSources : true
		  //}
		  //,
		  dist : {
			src  : '<%= concat.dist.dest %>',
			dest : 'src/dist/core.min.js'
		  }
		},				
		cssmin: {
		  options: {
			mergeIntoShorthands: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'src/dist/core.css': ['node_modules/materialize-css/dist/css/materialize.min.css']
			}
		  }
		},
		watch: {
			scripts: {
				files: ['**/*.js'],
				tasks: ['build'],
				options: {
					spawn: false,
				},
			},
		}
  }); 
 
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};