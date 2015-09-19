var gulp = require('gulp');
var umd = require('gulp-umd');
var rename = require('gulp-rename');
var clone = require('gulp-clone');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

var pkg = require('./package.json');

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var uglifyParams = {
  preserveComments: 'license'
};

gulp.task('default', function () {
  var script = gulp.src('strongdate.js');

  script
    .pipe(clone())
    .pipe(header(banner, { pkg: pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify(uglifyParams))
    .pipe(rename('strongdate.min.js'))
    .pipe(gulp.dest('dist'));

  script
    .pipe(clone())
    .pipe(umd({
      exports: function(file) {
        return 'SD';
      }
    }))
    .pipe(header(banner, { pkg: pkg } ))
    .pipe(rename('strongdate-amd.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify(uglifyParams))
    .pipe(rename('strongdate-amd.min.js'))
    .pipe(gulp.dest('dist'));
});
