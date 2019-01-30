const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const del = require('del');
const cssAutoprefixer = require('gulp-autoprefixer');

const files = {
    js: ['./src/**/*.js'],
    jsx: ['./src/**/*.jsx'],
    json: ['./src/**/*.json'],
    less: ['./src/**/*.less'],
};

function clean_build(done) {
    del('./compile');
    done();
}

function compile_js(done) {
    gulp.src([...files.js, ...files.jsx])
        .pipe(babel())
        .pipe(gulp.dest('./compile'));
    done();
};

function compile_less(done) {
    gulp.src([...files.less])
        .pipe(less())
        .pipe(cssAutoprefixer({
            browsers: ['last 2 versions', 'last 2 ie versions'],
        }))
        .pipe(gulp.dest('./compile'));
    done();
};

gulp.task('compile-less', compile_less);
gulp.task('compile-js', compile_js);
gulp.task('clean-build', clean_build);
gulp.task('default', gulp.series(clean_build, compile_js, compile_less));
