import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import groupCssMediaQueries from "gulp-group-css-media-queries";
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from "gulp-clean-css";
import rename from 'gulp-rename';
import webpCss from "gulp-webp-css";

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber())
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass())
        .pipe(app.plugins.if(
            app.isBuild, webpCss()
            )
        )
        .pipe(app.plugins.if(
            app.isBuild, groupCssMediaQueries()
            )
        )
        .pipe(app.plugins.if(
            app.isBuild, 
            autoPrefixer({
                grid: true,
                overrideBrowsersList: ['last 3 versions'],
                cascade: true
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
}