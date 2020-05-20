"use strict";
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");

var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
    return gulp.src("source/*.html")
      .pipe(gulp.dest("build"))
})

gulp.task("server", function () {
    server.init({
      server: "build/",
      notify: false,
      open: true,
      cors: true,
      ui: false
  });
    
  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html").on("change", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.ico"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});
  
gulp.task("clean", function () {
  return del("build");
})  

gulp.task("build", gulp.series("copy", "css", "html"))
gulp.task("start", gulp.series("build", "server"));


