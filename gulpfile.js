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

gulp.task('clean-build', () => {
    del('./compile');
});

//gulp.task('clean', ['clean-build'], () => {});

gulp.task('compile-js', () => {
    gulp.src([...files.js, ...files.jsx])
        .pipe(babel())
        .pipe(gulp.dest('./compile'));
});

gulp.task('compile-less', () => {
    gulp.src([...files.less])
        .pipe(less())
        .pipe(cssAutoprefixer({
            browsers: ['last 2 versions', 'last 2 ie versions'],
        }))
        .pipe(gulp.dest('./compile'));
});

gulp.task('default', gulp.series('compile-less'), () => {});
