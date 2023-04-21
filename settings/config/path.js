const pathSrc = "./src";
const pathDest = "./public";

export const path = {
    src: {
        html: pathSrc + '/html/*.html',
        pug: pathSrc + '/pug/*.pug',
        scss: pathSrc + '/scss/style.scss',
        js: pathSrc + '/js/main.js',
        scripts: pathSrc + '/scripts/*.js',
        img: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp}',
        svg: pathSrc + '/img/**/*.svg',
        svgIcons: pathSrc + '/svgIcons/*.svg',
        fonts: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    },

    build: {
        html: pathDest + '/',
        pug: pathDest  + '/',
        css: pathDest + '/css/',
        js: pathDest + '/js/',
        img: pathDest + '/img/',
        fonts: pathDest + '/fonts/',
    },

    watch: {
        html: pathSrc + '/**/*.html',
        pug: pathSrc + '/**/*.pug',
        scss: pathSrc + '/scss/**/*.scss',
        js: pathSrc + '/js/**/*.js',
        scripts: pathSrc + '/scripts/*.js',
        img: pathSrc + '/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}',
        fonts: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        svgIcons: pathSrc + '/svgIcons/*.svg',
    },

    clean: pathDest,

    root: pathDest,
}