'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('./docs/assets/stylesheets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./docs/assets/stylesheets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./docs/assets/stylesheets/scss/**/*.scss', ['sass']);
});

gulp.task('scripts', function() {
    return gulp.src('./docs/assets/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./docs/assets/js'));
});
