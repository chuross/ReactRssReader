import gulp from 'gulp'
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
import config from '../config'

requireDir('./');

gulp.task('build', (callback) => {
  return runSequence(
    'bundle:js',
    callback
  );
});
