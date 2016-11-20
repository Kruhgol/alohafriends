'use strict'

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = gulp.task('images', function(){
	console.log('images');

	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.build.images))
})