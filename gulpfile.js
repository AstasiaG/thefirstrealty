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
// const server = require("browser-sync").create();
// const concat = require('gulp-concat');
// const babel = require('gulp-babel');
// const webp = require("gulp-webp");
// var plumber = require("gulp-plumber");
// var rename = require("gulp-rename");
// var sass = require("gulp-sass");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var csso = require("gulp-csso");
// var del = require("del");

const server = browserSync.create();
const sass = gulpSass(dartSass);

export const del = () => {
  return deleteAsync(['build']);
}

// function scripts() {
// 	return src([ // Берем файлы из источников
// 		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
// 		'src/js/**/*.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
// 		])
// 	.pipe(concat('index.js')) // Конкатенируем в один файл
// 	.pipe(babel({
//     presets: ['@babel/env']
//   })) // Сжимаем JavaScript
// 	.pipe(dest('build/js/')) // Выгружаем готовый файл в папку назначения
// 	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
// }


// function browserSync() {
// 	server.init({
// 		server: { baseDir: 'src/' },
// 		notify: false,
// 		online: true
// 	})
// }

gulp.task("html", function () {
  return gulp.src('src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./build/'));
});

gulp.task("del", function () {
  return del(["build"]);
});

gulp.task("css", function () {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp.src([ // Берем файлы из источников
    		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
    		'src/js/index.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
    		])
  .pipe(concat('index.js')) // Конкатенируем в один файл
	.pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest("build/js"))
        .pipe(server.stream());
});

gulp.task("img", function () {
  return gulp.src("src/assets/img/*.*")
    .pipe(imagemin())
    .pipe(webp())
      .pipe(gulp.dest("build/img"))
      .pipe(server.stream());
});


gulp.task("server", function () {
  server.init({
    server: "build/",
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
  .pipe(gulp.dest("build"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("del", "js", "copy", "img", "css", "html"));
gulp.task("start", gulp.series("build", "server"));