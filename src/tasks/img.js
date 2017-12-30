/**
 * Image optimisation.
 */

import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';

export default (config, gulp) => {

    const options = config.options || [
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 5
        }),
        imagemin.svgo({
            plugins: [{
                removeViewBox: false
            }]
        })
    ];

    return () => gulp.src(config.src)
        .pipe(imagemin(options))
        .pipe(gulp.dest(config.dest));
};
