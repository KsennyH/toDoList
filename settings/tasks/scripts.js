import babel from "gulp-babel";

export const scripts = () => {
    return app.gulp.src(app.path.src.scripts)
        .pipe(app.plugins.plumber())
        .pipe(babel())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}