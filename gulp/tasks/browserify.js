import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import path from 'path'
import config from '../config'

const jsRoot = path.resolve(config.common.src, './js');

gulp.task('bundle:js', () => {
  browserify(config.browserify.root, { paths: ['./node_modules', jsRoot] })
    .transform(babelify, {
       presets: ['es2015', 'react']
     })
    .bundle()
    .on('error', notify.onError((error) => `${error.message}`))
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.common.js));
});
