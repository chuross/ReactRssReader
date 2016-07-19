import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import config from '../config'

const bootstrapDir = `${config.bower.dir}/bootstrap-sass`;

gulp.task('compile:bootstrap', () => {
  gulp.src(`${config.common.srcDir}/styles/*.scss`)
      .pipe(sass({
        includePaths: [`${bootstrapDir}/assets/stylesheets`]
      }))
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.common.cssBuildDir));
});
