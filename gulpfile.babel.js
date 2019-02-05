import gulp from 'gulp';
import gclean from 'gulp-clean';
import props2json from 'gulp-props2json';

const paths = {
  src: 'src/**/*.properties',
  dist: 'dist/',
};

const clean = async () => gulp
  .src(`${paths.dist}*`)
  .pipe(gclean());

const transform = () => gulp
  .src(paths.src)
  .pipe(props2json({
    nestedProps: true,
  }))
  .pipe(gulp.dest(paths.dist));

export const watch = gulp.watch(paths.src, transform);

export default gulp.parallel(clean, transform);
