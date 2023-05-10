const gulp = require('gulp')
const mjml = require('gulp-mjml')
const mjmlEngine = require('mjml')


function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

function buildMjml() {
    return gulp.src('./src/*.mjml')
        .pipe(mjml(mjmlEngine, {}))
        .on('error', handleError)
        .pipe(gulp.dest('./dist'))
}

function dev() {
    gulp.watch(['./src/**/*.mjml'], buildMjml)
}

exports.dev = dev
exports.build = gulp.series(buildMjml)
