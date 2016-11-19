'use strict'

var gulp = require('gulp');

module.exports = gulp.task('watch', function(){
	gulp.watch(config.src.styles, ['styles']);
	gulp.watch(config.src.js, ['browserify']);
})