var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
var watch = require('gulp-watch');

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

  // gulp.task('browser-sync', function(){

	 // browserSync({
		// server: {
		// 	baseDir: "."

  // 		}
  // 	});
  // });

gulp.task('watch', function () {
    gulp.watch('./styles/*.styl', ['stylus']);
    gulp.watch('./javascripts/*.js', ['javascripts']);   
});

 // gulp.task('default', ['javascripts', 'stylus', 'browser-sync', 'watch']);


