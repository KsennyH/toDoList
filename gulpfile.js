import gulp from "gulp";
import browserSync from "browser-sync";

import { path } from "./settings/config/path.js";
import { plugins } from "./settings/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: app.path.root
        }
    });
}

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.pug, pug);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, images);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.svgIcons, sprite);
    gulp.watch(path.watch.scripts, scripts);
}


import { scripts } from "./settings/tasks/scripts.js";
import { reset } from "./settings/tasks/reset.js";
import { html } from "./settings/tasks/html.js";
import { pug } from "./settings/tasks/pug.js";
import { scss } from "./settings/tasks/scss.js";
import { js } from "./settings/tasks/js.js";
import { images } from "./settings/tasks/images.js";
import { fonts } from "./settings/tasks/fonts.js";
import { sprite } from "./settings/tasks/sprite.js";

const myTasks = gulp.parallel(pug, scss, js, images, fonts, sprite, scripts);
const myWatcher = gulp.parallel(watcher, server);

const dev = gulp.series(reset, myTasks, myWatcher);
const build = gulp.series(reset, myTasks);

export { dev };
export { build };

gulp.task('default', dev);

