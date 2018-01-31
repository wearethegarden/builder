# builder
builder is the Gulp starting point for all projects. It provides all the relevant tasks, and is fully customisable.

# Set up and installation
1. Add `builder` to your project:
```
yarn install @wearethegarden/builder
```
2. Create a `config.json` file within the `tasks` folder (in the root of your project) to define all the task-specific configuration.

# Tasks and configuration
You can specify the source (`src`) and destination (`dest`—where applicable) of all tasks. You can also define the paths to watch when the `watch` task is running.

The following tasks and configuration are available via `builder`:

## Clean

### Intro
The clean task deletes a given folder (usually the source folder).

### Config
+ `src`: The folder to be deleted.

## Copy

### Intro
The copy task will copy static assets to a given folder (usually the destination folder).

### Config
+ `src`: The file(s)/folder(s) to copy—either a single file/folder, or an array of files/folders.
+ `watch`: The file(s)/folder(s) to watch.
+ `dest`: The destination folder to copy the static assets to.

### Options
An array of options passed to `gulp-changed`.

## CSS

### Intro
The CSS task will take an SCSS file, run it through the PostCSS plugins (`autoprefixer`, `cssnano`, `css-mqpacker`), rename the file, generate sourcemaps, and output the file to the destination folder.

You can pass through either one SCSS file, or an array of files.

### Config
+ `src`: The file(s) to compile.
+ `watch`: The file(s) to watch (Optional - If omitted, the `src` path will be used).
+ `dest`: The destination folder to write the CSS file to.

### Options
An array of options to be passed to 	`autoprefixer`, `mqpacker`, `gulp-rename`, and `gulp-sass`.

## Images

### Intro
The images task will run the images through the relevant `imagemin` plugin (`jpegtran`, `optipng`, `svgo`), and output the files to the destination folder.

### Config
+ `src`: The file(s) to compress.
+ `watch`: The file(s) to watch (Optional - If omitted, the `src` path will be used).
+ `dest`: The destination folder to write the compressed images to.

### Options

An array of options to be passed to the `imagemin` plugins (`jpegtran`, `optipng`, `svgo`).

## JS

### Intro
The JS task will run the JS files through Webpack and output the file(s) to the destination folder. This task will search for a Webpack config (`webpack.config.js`) file in the root directory.

### Config
+ `src`: The file(s) to run through Webpack.
+ `watch`: The file(s) to watch (Optional - If omitted, the `src` path will be used).
+ `dest`: The destination folder to write the JS file(s) to.

## Lint

### Intro
Linting tasks can be defined within the `lint` folder. 

### Config (foreach linting task)
+ `src`: The file(s) to lint.

### Options
An array of options to be passed to the linter.

## Serve

### Intro
The serve task will start up Browsersync.

### Options
An array of options to be passed to Browsersync.

## Watch

### Intro
The watch task will watch for any file changes and run the relevant task.

Each watch task will use the configured `watch` path for that task. If the `watch` path is the same as the `src`, then you don't need to define it as the `src` path will be used.
