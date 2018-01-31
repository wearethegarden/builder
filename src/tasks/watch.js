/**
 * Watch files.
 */

import batch from 'gulp-batch';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

export default (config, gulp) => {

    const sequence = runSequence.use(gulp);

    return () => {

        if (config.copy && gulp.hasTask('copy')) {
            watch(config.copy.watch, batch((events, done) => {
                return sequence('copy', done);
            }));
        }

        if (config.css && gulp.hasTask('css')) {
            watch(config.css.watch, batch((events, done) => {
                return sequence('css', done);
            }));
        }

        if (config.img && gulp.hasTask('img')) {
            watch(config.img.watch, batch((events, done) => {
                return sequence('img', done);
            }));
        }

        if (config.js && config.js.webpack && gulp.hasTask('js:webpack')) {
            watch(config.js.webpack.watch, batch((events, done) => {
                return sequence('js:webpack', done);
            }));
        }

        if (config.lint && config.lint.php && gulp.hasTask('lint:php')) {
            watch(config.lint.php.watch, batch((events, done) => {
                return sequence('lint:php', done);
            }));
        }
    };
};
