import gulp from 'gulp';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csscomb from "gulp-csscomb";
import cleanCSS from 'gulp-clean-css';

const {
  src,
  dest,
} = gulp;
const sass = gulpSass( dartSass );
const isProd = process.env.NODE_ENV === 'production';

const compileCSS = () => {
  return src( './src/style/**/*.scss', {
      sourcemaps: !isProd
    } )
    .pipe( sass().on( 'error', notify.onError() ) )
    .pipe( postcss( [
      autoprefixer( {
        cascade: false,
      } )
    ] ) )
    .pipe( gulpIf( isProd, csscomb() ) )
    .pipe( gulpIf( isProd, cleanCSS( {
      level: 2
    } ) ) )
    .pipe( dest( './build/style/', {
      sourcemaps: '.'
    } ) )
};

export default compileCSS;