/*eslint-env node */

var gulp = require('gulp');
var gutil = require('gulp-util');

/* *************
    CSS
************* */
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var postcssProcessors = [
    autoprefixer({
        browsers: [
            'Explorer >= 11',
            'last 2 Explorer versions',
            'last 2 ExplorerMobile versions',
            'last 2 Edge versions',

            'last 2 Firefox versions',
            'last 2 FirefoxAndroid versions',

            'last 2 Chrome versions',
            'last 2 ChromeAndroid versions',

            'last 3 Safari versions',
            'last 3 iOS versions',

            'last 2 Opera versions',
            'last 2 OperaMini versions',
            'last 2 OperaMobile versions',

            'last 2 Android versions',
            'last 2 BlackBerry versions'
        ]
    })
];

var sassMainFile = 'styles/main.scss';
var sassFiles = 'styles/**/*.scss';

gulp.task('css', function() {
    gulp.src(sassMainFile)
        .pipe(sourcemaps.init())
        .pipe(
            sass({ outputStyle: 'compressed' })
            .on('error', gutil.log)
        )
        .pipe(
            postcss(postcssProcessors, { syntax: scss })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/'))
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, ['css']);
});

/* *************
    DEFAULT
************* */
gulp.task('default', ['css', 'watch']);
