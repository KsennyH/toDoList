import gulpPug from "gulp-pug";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber())
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild, webpHtmlNoSvg()
            )
        )
        .pipe(app.gulp.dest(app.path.build.pug))
        .pipe(app.plugins.browserSync.stream());
}