import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import newer from "gulp-newer";

export const fonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.plugins.plumber())
        .pipe(newer(app.path.build.fonts))
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts))   
}