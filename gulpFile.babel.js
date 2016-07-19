import gulp from 'gulp'
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
import config from './gulp/config'

requireDir('./gulp/tasks');

gulp.task('default', () => {
  return runSequence(
    'build'
  );
});
