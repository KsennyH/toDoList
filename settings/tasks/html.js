import gulpFileInclude from "gulp-file-include";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber())
        .pipe(gulpFileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild, webpHtmlNoSvg()
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}