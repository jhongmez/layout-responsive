// variables
const { src, dest, watch, series } = require('gulp');
const sass                         = require('gulp-sass')(require('sass'));
const terser                       = require('gulp-terser');
const browserSync                  = require('browser-sync').create();

// Sass task
const scssTask = () => {
    return src('app/scss/styles.scss', { sourcemaps: true })
        .pipe( sass() )
        .pipe( dest('dist', { sourcemaps: '.'}));
};

// Js Task
const jsTask = () => {
    return src('app/js/main.js', { sourcemaps: true })
        .pipe( terser() )
        .pipe( dest('dist', { sourcemaps: '.'}) );
};

// BrowserSync Task
const browserSyncServe = (cb) => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
};

// BrowserReload Task
const browserSyncReload = (cb) => {
    browserSync.reload();
    cb();
}

// Watch Task
const watchTask = () => {
    watch('*.html', browserSyncReload);
    watch(['app/scss/styles.scss', 'app/js/main.js'], series(scssTask, jsTask, browserSyncReload));
}

// Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
);