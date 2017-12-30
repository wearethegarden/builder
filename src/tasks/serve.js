/**
 * Serve.
 */

import browserSync from 'browser-sync';

export default config => {

    const options = config.options || {
        open: false,
        reloadDelay: 400,
        reloadOnRestart: true
    };

    return () => browserSync(options);
};
