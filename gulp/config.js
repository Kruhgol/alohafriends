global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'alohafriends';

global.config = {
	src:{
		index: SRC_FOLDER + '/*.html',
		styles: SRC_FOLDER + '/styles/*.scss',
		styleLib: SRC_FOLDER + '/lib/*.css',
		modules: SRC_FOLDER + '/js/index.js',
		js: SRC_FOLDER + ['/js/**/*.js','/tmp/**/*.js'],
		images: SRC_FOLDER + '/styles/*.{gpeg,png,gif,svg,jpg}',
		fonts: SRC_FOLDER + '/**/*.otf',
		templates: SRC_FOLDER + '/js/app/foo/**/*.html',
		templatesCompiled: SRC_FOLDER + '/tmp',
		files: SRC_FOLDER + '/files/**'
	},
	build: {
		styles: BUILD_FOLDER + '/static/css',
		modules: BUILD_FOLDER + '/static/js',
		images: BUILD_FOLDER + '/static/img',
		index: BUILD_FOLDER + '/templates',
		fonts: BUILD_FOLDER + '/static'
		// files: BUILD_FOLDER + '/files'
	}
} 

