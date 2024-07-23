$(function () {

  //sliders

  const serviceSwiper = new Swiper(".apart-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: 'true',
    navigation: {
      nextEl: '.apart-swiper__btn-prev',
      prevEl: '.apart-swiper__btn-next',
    },
    speed: 500,
    on: {
      slideChange: function (swiper) {
        if ($(window).width() > 768) {
          let activeId = swiper.activeIndex;
          let pseudoActive = swiper.slides[activeId + 2];
  
          $('.apart-swiper__slide').removeClass('active');
          pseudoActive.classList.add('active');
        }

      }
    },
    breakpoints: {
      320: {
        navigation: {
          nextEl: '.apart-swiper__btn-next',
          prevEl: '.apart-swiper__btn-prev',
        },
      }
    }
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
      type: 'bullets',
      clickable: 'true',
    },
    speed: 1000,
  })

  const teamSwiper = new Swiper(".team-swiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: 'true',
    navigation: {
      nextEl: '.team-swiper__btn-next',
      prevEl: '.team-swiper__btn-prev',
    },
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  })

  const initCakeSwiper = (swiperContainer) => {
    return new Swiper(swiperContainer.find(".swiper")[0], {
        navigation: {
            nextEl: swiperContainer.find(".swiper-button-next")[0],
            prevEl: swiperContainer.find(".swiper-button-prev")[0],
        },
        pagination: {
            el: swiperContainer.find(".swiper-pagination")[0],
            clickable: true,
      },
        slidesPerView: 1,
        loop: "true",
        spaceBetween: 1,
        speed: 1000,
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
    let hiddenCards = $(".projects__card.hidden");

    if ($(".projects__card.hidden").length !== 0) {

      for (let i = 0; i < 3; i++) {
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
  })


  //validation

    const form = document.querySelector('.form');
    const name = document.querySelector('.form__input--name');
    const phone = document.querySelector('.form__input--tel');
    const contactType = document.querySelector('.form__input--type');
    const nameError = document.querySelector(".form__input--name + span.error__text");
    const phoneError = document.querySelector(".form__input--tel + span.error__text");
    const typeError = document.querySelector(".form__input--type + span.error__text");
    
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
    "onincomplete": function () {
      phoneError.className = "error__text active";
      phone.classList.add("invalid");
    },
    "oncomplete": function () {
      phoneError.className = "error__text";
      phone.classList.remove("invalid");
    }
  });
  console.log($('.form .btn-primary'))

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (name.value == "" && phone.value == "" && contactType.value == "" || contactType.value == "" || phone.value == "" || name.value == "" ) {
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


  //map


  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;
    
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      markerElement.innerHTML = "<img src='./assets/svg/marker.svg'>";
      
      const marker = new YMapMarker(
        {
          coordinates: [44.756951, 41.725037],
          draggable: true,
          mapFollowsOnDrag: true
        },
        markerElement
      );

      const map = new YMap(
        document.getElementById('map'),
        {
          location: {
            center: [44.756951, 41.725037],
            zoom: 14
          }
        }
      );

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(marker);
  }


  //modal

  let scrollY = 0;

  function openModal() {
    scrollY = window.scrollY;
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    if (window.innerWidth > 768) {
      body.style.paddingRight = "15px";
    }
  }

  function closeModal() {
    const body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.height = "";
    body.style.overflowY = "";
    body.style.paddingRight = "";
    window.history.replaceState(
      null,
      null,
      window.location.pathname + window.location.search,
    );
    window.scrollTo(0, scrollY);
  }

  $('.projects__card-more').on("click", function () {
    $(".modal.modal-more").addClass('active');
    openModal();
  })

  $('.modal__content-btn').on('click', function () {
    $(".modal.modal-more").removeClass('active');
    closeModal();
  })

  if ($(".modal__close-btn").length) {
    $(".modal__close-btn").on("click", function () {
      if ($(this).closest(".modal").hasClass("active")) {
        $(this).closest(".modal").removeClass('active');
        closeModal();
      }
    });
  }

  document.addEventListener("click", (el) => {
    if ($(".modal").hasClass("active")) {
      console.log('eeee')
      const md = $('.modal.active')[0];
      const wrap = $('.modal.active').find(".modal__inner")[0];
      const notWrap = el.composedPath().includes(wrap);
      const window = el.composedPath().includes(md);

      console.log(md, window, wrap, notWrap)
      if (window && !notWrap) {
        console.log('eyyyyy')
        $(".modal").removeClass("active");
        closeModal();
      }
    }
  });
  
  $('.header__lang').on('click', function () {
    let text = $(this).text();

    if (text === "RU") {
      $(this).text("EN")
    } else {
      $(this).text("RU")
    }

  })

  if ($(window).width() < 768) {
    $('.header__menu-item').on('click', function () {
      $('.header__burger').removeClass('active');
      $('.header__mob-wrapper').removeClass('active');
      closeModal();
    })

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
    })
  }

})


