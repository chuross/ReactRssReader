import gulp from 'gulp'
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
import config from '../config'

requireDir('./');

gulp.task('watch', ['default', 'browserSync'], () => {
  gulp.watch(`${config.common.src}/**/*.js`, [
    'bundle:js'
  ]);
  gulp.watch(`${config.common.src}/**`, [
    'browserSync-reload'
  ]);
});
