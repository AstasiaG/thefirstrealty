"use strict";

import gulp from 'gulp';
import browserSync from "browser-sync";
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import webp from 'gulp-webp';
import { deleteAsync } from 'del';
import fileinclude from 'gulp-file-include';
import imagemin from 'gulp-imagemin';

const server = browserSync.create();
const sass = gulpSass(dartSass);

export const del = () => {
  return deleteAsync(['dist']);
}

gulp.task("html", function () {
  return gulp.src('src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task("del", function () {
  return del(["dist"]);
});

gulp.task("css", function () {
  return gulp.src(["src/css/*.css",
    "src/sass/style.scss"])
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("dist/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp.src([ // Берем файлы из источников
    // 'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
    // 'node_modules/swiper/swiper-bundle.min.js',
    'src/js/index.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
    ])
    .pipe(concat('index.js')) // Конкатенируем в один файл
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest("dist/js"))
    .pipe(server.stream());
});

gulp.task("img", function () {
  return gulp.src("src/assets/img/*.*")
    .pipe(imagemin())
    .pipe(webp())
      .pipe(gulp.dest("dist/img"))
      .pipe(server.stream());
});


gulp.task("server", function () {
  server.init({
    server: "dist/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    tunnel: false
  });
  gulp.watch("src/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("src/assets/img/*", gulp.series("img", "refresh"));
  gulp.watch("src/js/**/*.js", gulp.series("js", "refresh"));
  gulp.watch("src/**/*.html", gulp.series("html", "refresh"));
});

gulp.task("copy", function () {
  return gulp.src([
    "src/assets/fonts/**/*",
    "src/assets/svg/**/*",
    "src/assets/img/**/*"
  ], {
    base: "src/assets"
  })
  .pipe(gulp.dest("dist"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("del", "js", "copy", "img", "css", "html"));
gulp.task("start", gulp.series("build", "server"));