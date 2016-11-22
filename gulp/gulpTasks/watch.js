'use strict'

var gulp = require('gulp');

module.exports = gulp.task('watch', function(){
	gulp.watch(config.src.styles, ['styles']);
	gulp.watch(config.src.js, ['browserify']);
	gulp.watch(config.src.templates, ['templates']);
	gulp.watch(config.src.templatesCompiled+'/**', ['browserify']);
	gulp.watch(config.src.files, ['assetsFiles']);
})