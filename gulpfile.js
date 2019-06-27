"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var run = require("run-sequence");
var del = require("del");
var uglify = require("gulp-uglify");

gulp.task("images", function (done) {
  gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
    done();
});

gulp.task("html", function (done) {
  gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
    done();
});

gulp.task("copy", function (done) {
   gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/pic/**",
      "source/js/**",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
    done();
});


gulp.task("clean", function (done) {
  del("build");
  done();
});

gulp.task("style", function(done) {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
    done();
});

gulp.task("compress", function(done) {
  gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"));
    done();
});

gulp.task("server", function(done) {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    done
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("style"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("clean", "copy", "style", "images", "html", "compress", "server"));
