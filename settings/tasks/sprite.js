import svgSprite from "gulp-svg-sprite";

export const sprite = () => {
    return app.gulp.src(app.path.src.svgIcons)
        .pipe(app.plugins.plumber())
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                }
            },
        }))
        .pipe(app.gulp.dest(app.path.build.img))
}