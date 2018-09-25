var gulp         = require("gulp"),
 	watch        = require("gulp-watch"),
 	postcss      = require("gulp-postcss"),
 	cssvars      = require("postcss-simple-vars"),
 	nested       = require("postcss-nested"),
 	cssImport    = require("postcss-import"),
	autoprefixer = require("autoprefixer");

gulp.task('default', function(){
	console.log("gulp task");
});

gulp.task('html', function(){
	console.log("useful html change");
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport,cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});

