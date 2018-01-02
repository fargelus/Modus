// ********** Instances **********
const gulp = require('gulp');

const pug = require('gulp-pug');

const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const del = require('del');
const fs = require('fs');

const paths = {
  dest: './build',

  pug: {
    src: 'src/pug/index.pug',
    all: 'src/pug/**/*.pug'
  },

  styles: {
    src: 'src/scss/**/*.scss'
  }
};

// ***************************


// ********* Tasks ***********
gulp.task('clean', () => {
  if (fs.existsSync(paths.dest)) {
    del([paths.dest]);
  }
});

gulp.task('pug', () => {
  return gulp.src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({stream:true}));
});

gulp.task('scss', () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(scss().on('error', scss.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'app',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({stream:true}));
});

// Static server
gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: paths.dest
        }
    });
});

gulp.task('watch', () => {
  gulp.watch(paths.pug.all, ['pug']);
  gulp.watch(paths.styles.src, ['scss']);
});

gulp.task('start', ['clean', 'pug', 'scss']);

gulp.task('default', ['start', 'browserSync', 'watch']);

// ***********************************
