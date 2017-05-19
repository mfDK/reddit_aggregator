var gulp = require('gulp'),
    scss = require('gulp-scss');

gulp.task('default', function() {

});

gulp.task('scss', function() {
    gulp.src(
        "home/stylesheets/*.scss"
    ).pipe(scss(
        {"bundleExec": true}
    )).pipe(gulp.dest("home/css/maintwo.css"));
});
