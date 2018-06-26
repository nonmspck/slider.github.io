var gulp = require("gulp"),
    sass = require("gulp-sass"),
    plumber = require("gulp-plumber"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    mqpack = require("css-mqpacker"),
    min = require("gulp-csso"),
    rename = require("gulp-rename"),
    imgmin = require("gulp-imagemin"),
    run = require("run-sequence"),
    del = require("del");

gulp.task("style", function() {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
            ]}),
            mqpack({
                sort: true
            })
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(min())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
});

gulp.task("html", function() {
    gulp.src("index.html")
        
        .pipe(gulp.dest("build"));
});

gulp.task("js", function() {
    gulp.src("js/*.js")

        .pipe(gulp.dest("build/js"));
});

gulp.task("css", function() {
    gulp.src("css/*.css")

        .pipe(gulp.dest("build/css"));
});

gulp.task("font", function() {
    gulp.src("fonts/*.{woff, woff2}")

        .pipe(gulp.dest("build/fonts"));
});

gulp.task("images", function() {
    return gulp.src("img/**/*.{png,jpg,gif}")
                .pipe(imgmin([
                    imgmin.optipng({optimizationLevel: 3}),
                    imgmin.jpegtran({progressive: true})
                ]))
                .pipe(gulp.dest("build/img"));
});

gulp.task("svg", function() {
    gulp.src("img/**/*.svg")

                .pipe(gulp.dest("build/img"));
});

gulp.task("del", function() {
    return del("build");
});

gulp.task("build", function(fn) {
    run("del", "style", "html", "css", "font", "js", "images", "svg", fn);
});

gulp.task("watch", function() {
    gulp.watch("index.html", ["build"]);
    gulp.watch("sass/**/*.scss", ["build"]);
    gulp.watch("js/**/*.js", ["build"]);
});