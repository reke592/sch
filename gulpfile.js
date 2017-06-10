const gulp = require("gulp")
const del = require("del")

var paths = {
  app: 'app/dist/**',
  build: 'public'
}

gulp.task('clean', function() {
  return del([ paths.build ])
})

gulp.task('static', ['clean'], function() {
  return gulp.src(paths.app)
    .pipe(gulp.dest(paths.build))
})

gulp.task('watch', function() {
  gulp.watch(paths.app, ['static'])
})

gulp.task('default', ['static'])