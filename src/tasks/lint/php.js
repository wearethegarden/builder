/**
 * PHP.
 */

import gulp from 'gulp';
import phpcs from 'gulp-phpcs';

export default (config, gulp) => {
    const options = config.options || {
        bin: 'vendor/bin/phpcs',
        colors: true,
        standard: 'PSR2',
        warningSeverity: 0
    };

    return () => gulp.src(config.src, { dot: true })
        .pipe(phpcs(options))
        .pipe(phpcs.reporter('log'));
};
