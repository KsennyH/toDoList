import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import newer from "gulp-newer";

export const images = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(app.plugins.plumber())
    .pipe(newer(app.path.build.img))
    .pipe(app.plugins.if(
        app.isBuild, webp()
        )
    )
    .pipe(app.plugins.if(
        app.isBuild, app.gulp.dest(app.path.build.img)
        )
    )
    .pipe(app.plugins.if(
        app.isBuild, app.gulp.src(app.path.src.img)
        )
    )
    .pipe(app.plugins.if(
        app.isBuild, newer(app.path.build.img)
        )
    )
    .pipe(app.plugins.if(
        app.isBuild, imagemin()
        )
    )
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
}