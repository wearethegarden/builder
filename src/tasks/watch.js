/**
 * Watch files.
 */

import batch from 'gulp-batch';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

export default (config, gulp) => {

    const sequence = runSequence.use(gulp);

    return () => {

        watch(config.copy.watch, batch((events, done) => {
            return sequence('copy', done);
        }));

        watch(config.css.watch, batch((events, done) => {
            return sequence('css', done);
        }));

        watch(config.img.watch, batch((events, done) => {
            return sequence('img', done);
        }));

        watch(config.js.webpack.watch, batch((events, done) => {
            return sequence('js:webpack', done);
        }));

        watch(config.php.watch, batch((events, done) => {
            return sequence('lint:php', done);
        }));
    };
};
