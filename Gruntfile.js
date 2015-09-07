module.exports = function(grunt) {
	grunt.initConfig({
		clean:{
			pc:{
				src:'dest/pc/**/*'
			},
			mb:{
				src:'dest/mb/**/*'
			}
		},
		'string-replace':{
			pc:{
				files:[{
					expand:true,
					cwd: 'component/pc/',
					src: '**/*',
					dest: 'dest/pc/'
				}],
				options:{
					replacements:[{
						pattern:/([\s\S]+)/ig,
						replacement:'<%= grunt.file.read("template/pc-start.html")%>$1<%= grunt.file.read("template/pc-end.html")%>'
					}]
				}
			},
			mb:{
				files:[{
					expand:true,
					cwd: 'component/mb/',
					src: '**/*',
					dest: 'dest/mb/'
				}],
				options:{
					replacements:[{
						pattern:/([\s\S]+)/ig,
						replacement:'<%= grunt.file.read("template/mb-start.html")%>$1<%= grunt.file.read("template/mb-end.html")%>'
					}]
				}
			}
		},
		watch:{
			pc:{
				files:'component/pc/**/*',
				tasks:['clean:pc']
			},
			mb:{
				files:'component/mb/**/*',
				tasks:['clean:mb']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['clean','string-replace','watch']);
	grunt.registerTask('dev-pc', ['clean:pc','string-replace:pc','watch:pc']);
	grunt.registerTask('dev-mb', ['clean:mb','string-replace:mb','watch:mb']);
};