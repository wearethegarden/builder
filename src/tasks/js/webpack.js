/**
 * JavaScript (client-side).
 */

import browserSync from 'browser-sync';
import fs from 'fs';
import named from 'vinyl-named';
import path from 'path';
import stream from 'webpack-stream';
import webpack from 'webpack';

let options = {};
const optionsPath = path.resolve(process.cwd(), 'webpack.config.js');

if (fs.existsSync(optionsPath)) {
	options = require(optionsPath).default;
}

export default (config, gulp) => {

    return () => gulp.src(config.src)
        .pipe(named())
        .pipe(stream(options, webpack))

        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream({ match: '**/*.js' }));
};
