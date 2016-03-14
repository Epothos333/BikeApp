var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('stylus', function(){
	return gulp.src('./styles/style.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./styles'));
});

gulp.task('javascripts', function(){
	return gulp.src('./javascripts/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./'))
});	

gulp.task