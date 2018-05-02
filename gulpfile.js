var gulp = require('gulp');
var sass = require('gulp-sass');
var devServer = require('gulp-devserver');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var babel = require("gulp-babel");
var es2015 = require("babel-preset-es2015");
//dist为未压缩资源文件目录
//build为压缩资源目录

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './'
		}
	})
})

gulp.task('js', function() {
	return gulp.src('app/js/*.js')
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({
		stream: true
    }));
});

gulp.task('scss', function() {
	return gulp.src('./app/sass/main.scss')
    .pipe(sass({
    	outputStyle: 'expanded'
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
		stream: true
    }));
});

gulp.task('img', ['cleanImg'], function() {
	return gulp.src('./app/img/*.+(jpg|png|gif)')
	.pipe(gulp.dest('dist/img/'));
});

gulp.task('cleanDist', function() {
	return del.sync('dist/**/*');
});

gulp.task('cleanImg', function() {
	return del.sync('dist/img/*');
});

gulp.task('cleanBuild', function() {
	return del.sync('build/**/*');
});

gulp.task('watch', function() {
	gulp.watch('app/sass/*.scss', ['scss']);
	gulp.watch('app/js/main.js', ['js']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('app/img/*.+(jpg|png|gif)', ['img']);
});

gulp.task('default', function() {
	runSequence(['cleanDist', 'browserSync', 'img', 'scss', 'js', 'watch']);
});


gulp.task('uglifyJs', function() {
	return gulp.src('dist/js/main.js')
	.pipe(uglify())
	.pipe(rename(function(path) {
		path.basename = 'main.min';
		path.extname = '.js'
	}))
	.pipe(gulp.dest('./build/js/'));
});

gulp.task('minifyCss', function() {
	return gulp.src('dist/css/main.css')
	.pipe(minifyCss())
	.pipe(rename(function(path) {
		path.basename = 'main.min';
		path.extname = '.css';
	}))
	.pipe(gulp.dest('./build/css/'));
});

gulp.task('imgToBuild', function() {
	return gulp.src('./app/img/*.+(jpg|png|gif)')
	.pipe(gulp.dest('./build/img/'));
});

gulp.task('build', function() {
	runSequence(['cleanBuild', 'uglifyJs', 'minifyCss', 'imgToBuild']);
});

gulp.task('helloWorld', function() {
	console.log('hello World!');
});