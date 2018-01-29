/**
 * JavaScript (server-side).
 */

import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

export default (config, gulp) => {

    return () => gulp.src(config.src, { dot: true })

        .pipe(sourcemaps.init())

        .pipe(babel(config.options || { presets: ['@babel/env'] }))

        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));
};
