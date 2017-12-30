/**
 * CSS.
 */

import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import mqpacker from 'css-mqpacker';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

export default (config, gulp) => {

    const options = config.options || {
        autoprefixer: {
            remove: true
        },
        mqpacker: {
            sort: true
        },
        sass: {
            style: 'compressed'
        }
    };

    return () => gulp.src(config.src)

        .pipe(sourcemaps.init())

        .pipe(sass(options.sass).on('error', sass.logError))

        .pipe(postcss([
            autoprefixer(options.autoprefixer),
            cssnano(),
            mqpacker(options.mqpacker)
        ]))

        .pipe(rename({
            extname: '.min.css'
        }))

        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.stream({ match: '**/*.css' }));
};
