var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var rev = require('gulp-rev')

var public_folder = function (path) {
  return path
}

var css = function (arr, dest) {
  arr.forEach(function (item) {
    gulp.src(item)
      .pipe(cleanCSS())
      .pipe(gulp.dest(dest))
  })
}

gulp.task('production', function () {
  css(['bower_components/sb-admin-2/css/sb-admin-2.css'], 'public/css/')
  css(['bower_components/sb-admin-2/css/plugins/timeline.css',
    'bower_components/sb-admin-2/css/plugins/morris.css',
    'bower_components/sb-admin-2/css/plugins/dataTables.bootstrap.css',
    'bower_components/sb-admin-2/css/plugins/metisMenu/metisMenu.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css'], 'public/css/')
  
  // Fonts
    gulp.src([
      'bower_components/font-awesome/fonts/fontawesome-webfont.*'])
      .pipe(gulp.dest('public/fonts/'))
})

// gulp.task('default', [{'production' : productioncss}])
