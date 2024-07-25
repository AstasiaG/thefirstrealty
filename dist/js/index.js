"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
$(function () {
  //sliders

  var serviceSwiper = new Swiper(".apart-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: 'true',
    navigation: {
      nextEl: '.apart-swiper__btn-prev',
      prevEl: '.apart-swiper__btn-next'
    },
    speed: 500,
    on: {
      slideChange: function slideChange(swiper) {
        if ($(window).width() > 768) {
          var activeId = swiper.activeIndex;
          var pseudoActive = swiper.slides[activeId + 2];
          $('.apart-swiper__slide').removeClass('active');
          pseudoActive.classList.add('active');
        }
      }
    },
    breakpoints: {
      320: {
        navigation: {
          nextEl: '.apart-swiper__btn-next',
          prevEl: '.apart-swiper__btn-prev'
        }
      }
    }
  });
  var benefitsSwiper = new Swiper(".benefits-swiper", {
    slidesPerView: 1,
    direction: 'vertical',
    spaceBetween: 20,
    loop: 'true',
    navigation: {
      nextEl: '.benefits-swiper__btn-prev',
      prevEl: '.benefits-swiper__btn-next'
    },
    speed: 1000
  });
  var aboutSwiper = new Swiper(".about-swiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: 'true',
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.about-swiper__pagination',
      type: 'bullets',
      clickable: 'true'
    },
    speed: 1000
  });
  var teamSwiper = new Swiper(".team-swiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: 'true',
    navigation: {
      nextEl: '.team-swiper__btn-next',
      prevEl: '.team-swiper__btn-prev'
    },
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var initCakeSwiper = function initCakeSwiper(swiperContainer) {
    return new Swiper(swiperContainer.find(".swiper")[0], {
      navigation: {
        nextEl: swiperContainer.find(".swiper-button-next")[0],
        prevEl: swiperContainer.find(".swiper-button-prev")[0]
      },
      pagination: {
        el: swiperContainer.find(".swiper-pagination")[0],
        clickable: true
      },
      slidesPerView: 1,
      loop: "true",
      spaceBetween: 1,
      speed: 1000
    });
  };
  $(".projects__card").each(function () {
    initCakeSwiper($(this));
  });

  //cards

  if ($(window).width() > 768) {
    $('.projects__card:nth-child(n + 10)').addClass('hidden');
    $('.projects__card:nth-child(n + 10)').hide();
  } else {
    $('.projects__card:nth-child(n + 7)').addClass('hidden');
    $('.projects__card:nth-child(n + 7)').hide();
  }
  $('.projects__button').on('click', function () {
    var hiddenCards = $(".projects__card.hidden");
    if ($(".projects__card.hidden").length !== 0) {
      for (var i = 0; i < 3; i++) {
        if (hiddenCards[i]) {
          $(hiddenCards[i]).slideDown();
          $(hiddenCards[i]).removeClass("hidden").css("display", "block");
        }
      }
    } else {
      if ($(window).width() > 768) {
        $('.projects__card:nth-child(n + 10)').addClass('hidden');
        $('.projects__card:nth-child(n + 10)').slideUp();
      } else {
        $('.projects__card:nth-child(n + 7)').addClass('hidden');
        $('.projects__card:nth-child(n + 7)').hide();
      }
      $(this).html('Показать еще');
    }
    if ($(".projects__card.hidden").length === 0) {
      $(this).html('Скрыть');
    }
  });

  //validation

  if ($('.form').length != 0) {
    var form = document.querySelector('.form');
    var name = document.querySelector('.form__input--name');
    var phone = document.querySelector('.form__input--tel');
    var contactType = document.querySelector('.form__input--type');
    var nameError = document.querySelector(".form__input--name + span.error__text");
    var phoneError = document.querySelector(".form__input--tel + span.error__text");
    var typeError = document.querySelector(".form__input--type + span.error__text");
    name.addEventListener("input", function (event) {
      if (name.validity.valid) {
        nameError.innerText = "";
        nameError.className = "error__text";
        name.classList.remove("invalid");
      } else {
        if (name.validity.valueMissing) {
          nameError.className = "error__text active";
          name.classList.add("invalid");
        }
        nameError.className = "error__text active";
        typeError.textContent = "Некорректные данные";
        name.classList.add("invalid");
      }
    });
    contactType.addEventListener("input", function (event) {
      if (contactType.validity.valid) {
        typeError.textContent = "";
        typeError.className = "error__text";
        contactType.classList.remove("invalid");
      } else {
        if (contactType.validity.valueMissing) {
          typeError.className = "error__text active";
          contactType.classList.add("invalid");
        }
        typeError.className = "error__text active";
        contactType.classList.add("invalid");
      }
    });
    $('.form__input--tel').inputmask('+7 (999) 999-99-99', {
      "onincomplete": function onincomplete() {
        phoneError.className = "error__text active";
        phone.classList.add("invalid");
      },
      "oncomplete": function oncomplete() {
        phoneError.className = "error__text";
        phone.classList.remove("invalid");
      }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (name.value == "" && phone.value == "" && contactType.value == "" || contactType.value == "" || phone.value == "" || name.value == "") {
        if (name.value === "") {
          name.classList.add("invalid");
          nameError.textContent = "Заполните поле";
          nameError.className = "error__text active";
        }
        if (phone.value === "") {
          phone.classList.add("invalid");
          phoneError.textContent = "Заполните поле";
          phoneError.className = "error__text active";
        }
        if (contactType.value === "") {
          contactType.classList.add("invalid");
          typeError.textContent = "Заполните поле";
          typeError.className = "error__text active";
        }
        return;
      } else {
        $.ajax();
        name.value = "";
        phone.value = "";
        contactType.value = "";
        $(".modal.modal-success").addClass("active");
        openModal();
      }
    });
  }

  //map

  initMap();
  function initMap() {
    return _initMap.apply(this, arguments);
  } //modal
  function _initMap() {
    _initMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ymaps, YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer, markerElement, marker, map;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ymaps3.ready;
          case 2:
            _ymaps = ymaps3, YMap = _ymaps.YMap, YMapDefaultSchemeLayer = _ymaps.YMapDefaultSchemeLayer, YMapMarker = _ymaps.YMapMarker, YMapDefaultFeaturesLayer = _ymaps.YMapDefaultFeaturesLayer;
            markerElement = document.createElement('div');
            markerElement.className = 'marker';
            markerElement.innerHTML = "<img src='./assets/svg/marker.svg'>";
            marker = new YMapMarker({
              coordinates: [44.756951, 41.725037],
              draggable: true,
              mapFollowsOnDrag: true
            }, markerElement);
            map = new YMap(document.getElementById('map'), {
              location: {
                center: [44.756951, 41.725037],
                zoom: 14
              }
            });
            map.addChild(new YMapDefaultSchemeLayer());
            map.addChild(new YMapDefaultFeaturesLayer());
            map.addChild(marker);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _initMap.apply(this, arguments);
  }
  var scrollY = 0;
  function openModal() {
    scrollY = window.scrollY;
    var body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    if (window.innerWidth > 768) {
      body.style.paddingRight = "15px";
    }
  }
  function closeModal() {
    var body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.height = "";
    body.style.overflowY = "";
    body.style.paddingRight = "";
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
    window.scrollTo(0, scrollY);
  }
  $('.projects__card-more').on("click", function () {
    $(".modal.modal-more").addClass('active');
    openModal();
  });
  $('.modal__content-btn').on('click', function () {
    $(".modal.modal-more").removeClass('active');
    closeModal();
  });
  if ($(".modal__close-btn").length) {
    $(".modal__close-btn").on("click", function () {
      if ($(this).closest(".modal").hasClass("active")) {
        $(this).closest(".modal").removeClass('active');
        closeModal();
      }
    });
  }
  document.addEventListener("click", function (el) {
    if ($(".modal").hasClass("active")) {
      console.log('eeee');
      var md = $('.modal.active')[0];
      var wrap = $('.modal.active').find(".modal__inner")[0];
      var notWrap = el.composedPath().includes(wrap);
      var _window = el.composedPath().includes(md);
      console.log(md, _window, wrap, notWrap);
      if (_window && !notWrap) {
        console.log('eyyyyy');
        $(".modal").removeClass("active");
        closeModal();
      }
    }
  });
  $('.header__lang').on('click', function () {
    var text = $(this).text();
    if (text === "RU") {
      $(this).text("EN");
    } else {
      $(this).text("RU");
    }
  });
  if ($(window).width() < 768) {
    $('.header__menu-item').on('click', function () {
      $('.header__burger').removeClass('active');
      $('.header__mob-wrapper').removeClass('active');
      closeModal();
    });
    $('.header__burger').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.header__mob-wrapper').removeClass('active');
        closeModal();
      } else {
        $(this).addClass('active');
        $('.header__mob-wrapper').addClass('active');
        openModal();
      }
    });
  }

  //btn-top

  $('.btn-top').on('click', function () {
    $(window).scrollTop(0);
  });
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 60) {
      if (st > lastScrollTop) {
        // Прокрутка вниз
        $(".btn-top").css('opacity', '0');
      } else {
        // Прокрутка вверх
        $(".btn-top").css('opacity', '1');
      }
    } else if (st <= 20) {
      $(".btn-top").css('opacity', '0');
    }
    lastScrollTop = st;
  });
});