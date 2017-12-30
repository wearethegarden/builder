/**
 * Copy static assets.
 */

import changed from 'gulp-changed';
import preservetime from 'gulp-preservetime';

export default (config, gulp) => {

    const options = config.options || {
        hasChanged: changed.compareContents
    };

    return () => gulp.src(config.src)

        .pipe(changed(config.dest, options))
        .pipe(gulp.dest(config.dest))
        .pipe(preservetime());
}
