const gulp = require('gulp')
const mjml = require('gulp-mjml')
const mjmlEngine = require('mjml')


function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

function buildTxt() {
    return gulp.src("./src/*.txt").pipe(gulp.dest("./dist"))
}

function buildMjml() {
    return gulp.src('./src/*.mjml')
        .pipe(mjml(mjmlEngine, {}))
        .on('error', handleError)
        .pipe(gulp.dest('./dist'))
}

function dev() {
    gulp.watch(['./src/**/*.mjml'], buildMjml)
    gulp.watch(['./src/**/*.txt'], buildTxt)
}

exports.dev = dev
exports.build = gulp.series(buildMjml, buildTxt)
