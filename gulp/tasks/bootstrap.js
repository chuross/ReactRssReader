import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import config from '../config'

const bootstrapPath = `${config.bower.dirPath}/bootstrap-sass`;

gulp.task('compile:bootstrap', () => {
  gulp.src(`${config.common.srcDirPath}/styles/app.scss`)
      .pipe(sass({
        includePaths: [`${bootstrapPath}/assets/stylesheets`]
      }))
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.bower.buildPath));
});
