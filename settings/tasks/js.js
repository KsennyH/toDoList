import babel from "gulp-babel";
import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber())
        .pipe(babel())
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'main.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}