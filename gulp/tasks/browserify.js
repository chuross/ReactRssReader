import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import config from '../config'

gulp.task('bundle:js', () => {
  browserify(config.browserify.root)
    .transform(babelify, { presets: ['react'] })
    .bundle()
    .on('error', notify.onError((error) => `${error.message}`))
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.common.js));
});
