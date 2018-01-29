/**
 * Clean the build folder.
 */

import del from 'del';

export default config => {
    return () => del(config.src, { dot: true });
};
