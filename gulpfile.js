var gulp = require("gulp");
var browsersync = require("browser-sync");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var inject = require("gulp-inject");
var sourcemaps = require("gulp-sourcemaps");

Files = {
	scss:
	['./scss/main.scss', './scss/modules/_var.scss', './scss/modules/_mixin.scss', './scss/partials/_head.scss', './scss/partials/_content.scss','./scss/partials/_slider.scss'  './scss/partials/_footer.scss'],
	html: './index.html',
	js : './js/app.js', './js/jquery-3.1.0.min.js'
};

gulp.task('inject', ['sass'], function (){
	var target = gulp.src('./index.html');
  	var sources = gulp.src(['./js/app.js', './css/style.css'], 
  		{read: false});

	return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));


});


gulp.task('sass', function(){
	
	return gulp.src('./scss/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(rename('style.css'))
	.pipe(gulp.dest('./css'));

});
gulp.task('default', ['inject'], function(){

browsersync.init({
	server:{
		baseDir: "./"
	}});
	gulp.watch(Files.html).on("change", browsersync.reload);
	gulp.watch(Files.scss, ['inject']);
	gulp.watch(Files.js, ['inject']);
});
