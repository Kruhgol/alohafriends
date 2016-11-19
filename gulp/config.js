global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';

global.config = {
	src:{
		index: SRC_FOLDER,
		styles: SRC_FOLDER + '/**/*.scss',
		modules: SRC_FOLDER + '/js/index.js',
		js: SRC_FOLDER + '/js/**/*.js'
	},
	build: {
		styles: BUILD_FOLDER + '/styles',
		modules: BUILD_FOLDER + '/js'
	}
} 

