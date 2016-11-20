global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';

global.config = {
	src:{
		index: SRC_FOLDER + '/*.html',
		styles: SRC_FOLDER + '/**/*.scss',
		styleLib: SRC_FOLDER + '/lib/*.css',
		modules: SRC_FOLDER + '/js/index.js',
		js: SRC_FOLDER + ['/js/**/*.js','/tmp/**/*.js'],
		images: SRC_FOLDER + '/**/*.{gpeg,png,gif,svg,jpg}',
		fonts: SRC_FOLDER + '/**/*.otf',
		templates: SRC_FOLDER + '/js/app/foo/**/*.html',
		templatesCompiled: SRC_FOLDER + '/tmp'
	},
	build: {
		styles: BUILD_FOLDER + '/styles',
		modules: BUILD_FOLDER + '/js',
		images: BUILD_FOLDER,
		index: BUILD_FOLDER,
		fonts: BUILD_FOLDER,
		templates: BUILD_FOLDER
	}
} 

