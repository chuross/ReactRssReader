import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence'

requireDir('./gulp/tasks');

gulp.task('default', () => {
  return runSequence(
    'compile:bootstrap'
  );
});
