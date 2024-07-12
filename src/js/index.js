// import $ from 'jquery';
// import Swiper from "swiper/bundle";
// import "swiper/css";
// // const $ = require("jquery");
// // const Swiper = require("swiper/bundle");

$(document).ready(() => {
  console.log('hello');

  const serviceSwiper = new Swiper(".apart-slider__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: 'true',
    navigation: {
      nextEl: '.apart-slider__btn-prev',
      prevEl: '.apart-slider__btn-next',
    },
    speed: 1000,
  })

  const benefitsSwiper = new Swiper(".benefits-swiper", {
    slidesPerView: 1,
    direction: 'vertical',
    spaceBetween: 20,
    loop: 'true',
    navigation: {
      nextEl: '.benefits-swiper__btn-prev',
      prevEl: '.benefits-swiper__btn-next',
    },
    speed: 1000,
  })

  const aboutSwiper = new Swiper(".about-swiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: 'true',
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.about-swiper__pagination',
      type: 'bullets'
    },
    speed: 1000,
  })
})
