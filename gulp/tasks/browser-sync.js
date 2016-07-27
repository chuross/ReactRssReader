import gulp from 'gulp'
import runSequence from 'run-sequence'
import requireDir from 'require-dir'
import browserSync from 'browser-sync'

requireDir('./');

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('browserSync-reload', () => {
  browserSync.reload();
});
