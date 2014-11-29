var gulp = require('gulp');
var rejs = require('gulp-rejs');

gulp.task('rejs', function () {
  return gulp.src('src/*.js')
    .pipe(rejs('XmasPresent.js'))
    .pipe(gulp.dest('dist'));
});
