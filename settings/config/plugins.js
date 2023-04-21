import gulpPlumber from "gulp-plumber";
import browserSync from "browser-sync";
import replace from "gulp-replace";
import gulpIf from "gulp-if";

export const plugins = {
    plumber: gulpPlumber,
    browserSync: browserSync,
    replace: replace,
    if: gulpIf
}