var gulp         = require("gulp"),
	postcss      = require("gulp-postcss"),
	cssImport    = require("postcss-import"),
	cssvars      = require("postcss-simple-vars"),
	nested       = require("postcss-nested"),
	plumber      = require("gulp-plumber"),
	autoprefixer = require("autoprefixer"),
	mixins       = require("postcss-mixins");

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(plumber())
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});