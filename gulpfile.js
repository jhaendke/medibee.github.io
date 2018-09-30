/*
# COMPONENTS

  Frameworks
    Spectre.css
    Bootstrap 4.1 (incl. jQuery, popper.js) - commented out!
    ! UIkit !not yet added!
    ! Miligram !not yet added!

  Tools
    Hamburgers-Menu (animated menu button)
    Flickity (advanced carousel library)
    animate.css (generic css-animations)

    holder.js (flexible placeholder images)
    typed.js (typewriter animation)

    !Fontawesome !not added!
    !Headroom !not added!

*/

/*
# VARIABLES
*/

// Path vars
var paths = {
  spsource: 'node_modules/spectre.css/src/*.scss',
  spdoc: 'node_modules/spectre.css/docs/src/*.scss',
  spcustom: 'scss/spectre-*.scss',
};

// Vars Spectre
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssPrefix = require('gulp-css-prefix');

// Vars Bootstrap
//var browserSync = require('browser-sync').create();

/*
// Vars Hamburgers
var cssnano      = require('gulp-cssnano');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');

  //if Hamburgers build errors occur
var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

var postCSSOptions = require('./node_modules/hamburgers/config.postcss.json');
  // autoprefixerOptions only applicable to Hamburgers!
var autoprefixerOptions = postCSSOptions.autoprefixer;



/*
# BUILD TASKS
*/

// Watch Spectre folders & execute render
/*
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sp-sass']);
  gulp.watch('scss/*.scss', ['sp-docs']);
  gulp.watch('scss/*.scss', ['sp-custom']);
});
*/

// Render Spectre main-sass & minify
gulp.task('sp-sass', function() {
  gulp.src(paths.spsource)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'));
});

// Render Spectre docs-sass & minify
gulp.task('sp-docs', function() {
  gulp.src(paths.spdoc)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('css/docs'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/docs'));
});

// Render Spectre custom-sass & minify & stream
gulp.task('sp-custom', function() {
  gulp.src(paths.spcustom)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'));
    //.pipe(browserSync.stream());
});

// Insert Spectre prefixes into all classes of spectre
gulp.task('sp-prefix', function() {
  gulp.src('css/spectre*.css')
      .pipe(cssPrefix('sp-'))
      .pipe(gulp.dest('css'))
});

/*
###
*/


// Render Bootstrap sass & minify
gulp.task('b4-sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap*.scss', 'scss/bootstrap-*.scss'])
      .pipe(sass())
      .pipe(gulp.dest("css"))
      .pipe(cleancss())
      .pipe(rename({
      suffix: '.min'
      }))
      .pipe(gulp.dest('css'));
      //.pipe(browserSync.stream());
});

// Copy Bootstrap javascript
gulp.task('b4-js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/js/bootstrap.js','node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/popper.js/dist/popper.js'])
      .pipe(gulp.dest("js"))
      //.pipe(browserSync.stream());
});

// Watch Bootstrap folders & execute render & start server
/*
gulp.task('display', ['b4-sass'], function() {

  browserSync.init({
      server: "./"  
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'], ['b4-sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});
*/

/*
###
*/

/*
// Render Hamburgers main-sass & minify
gulp.task('hb-sass', function() {
  return gulp.src('./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(csscomb('./node_modules/hamburgers/.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(rename('hamburgers.min.css'))
    .pipe(gulp.dest('css'));
});

// Render Hamburgers custom-sass & minify
gulp.task('hb-custom', function() {
  return gulp.src('./scss/hamburgers-*.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css'))
    .pipe(csscomb('./node_modules/hamburgers/.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(rename('hamburgers-custom.min.css'))
    .pipe(gulp.dest('css'));
});

// Watch Hamburgers folders & execute render
/*gulp.task('watch', function() {
  var browserSyncConfig = require('./node_modules/hamburgers/bs-config.js');

  browserSync.init(browserSyncConfig);
*/
//  gulp.watch('./node_modules/hamburgers/_sass/**/*.scss', ['hb-sass']);
/*
});
*/


/*
COPY TASKS
*/

// Copy animate.css
gulp.task('copy-animate', function() {
  return gulp.src(['node_modules/animate.css/animate.css', 'node_modules/animate.css/animate.min.css'])
      .pipe(gulp.dest("css"));
      //.pipe(browserSync.stream());
});

// Copy holder.js
gulp.task('copy-holder', function() {
  return gulp.src(['node_modules/holderjs/holder.js', 'node_modules/holderjs/holder.min.js'])
      .pipe(gulp.dest("js"));
      //.pipe(browserSync.stream());
});

// Copy typed.js
gulp.task('copy-typed', function() {
  return gulp.src(['node_modules/typed.js/lib/typed.js', 'node_modules/typed.js/lib/typed.min.js'])
      .pipe(gulp.dest("js"));
      //.pipe(browserSync.stream());
});

// Copy Flickity
gulp.task('copy-flickity', function() {
  gulp.src(['node_modules/flickity/dist/flickity.pkgd.js', 'node_modules/flickity/dist/flickity.pkgd.min.js'])
      .pipe(gulp.dest("js"))
  gulp.src(['node_modules/flickity/dist/flickity.css', 'node_modules/flickity/dist/flickity.min.css'])
      .pipe(gulp.dest("css"));
      //.pipe(browserSync.stream());
});

// Copy BOOTSTRAP GRID (copy-only)
/*
gulp.task('copy-bootstrap', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap-grid.min.css'])
      .pipe(gulp.dest("css"));
      //.pipe(browserSync.stream());
});
*/


/*
MERGE TASKS
*/

gulp.task('build-sp', ['sp-sass', 'sp-docs', 'sp-custom']);
gulp.task('build-b4', ['b4-sass', 'b4-js']);
//gulp.task('build-hb', ['hb-sass', 'hb-custom']);
gulp.task('copy-dists', ['copy-holder', 'copy-typed', 'copy-animate', 'copy-flickity']);

gulp.task('build-sp-prefix', ['sp-prefix']);

gulp.task('default', ['build-b4', 'build-sp', 'build-sp-prefix', 'copy-dists']);