import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch('src/**', () => {
    brouserSync.reload();
  });
});
