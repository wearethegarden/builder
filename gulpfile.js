/**
 * Dependencies.
 */

require('@babel/register');

const task = require('./src/tasks');
const config = require('./src/config.json');
const gulp = require('gulp');
const sequence = require('run-sequence');

/**
 * Child tasks.
 */

gulp.task('clean', task.clean(config.clean));
gulp.task('js:babel', task.js.babel(config.js.babel, gulp));


/**
 * Parent tasks.
 */

gulp.task('build', () => {
    sequence('js:babel');
});

gulp.task('default', ['clean'], () => {
    sequence('build');
});
