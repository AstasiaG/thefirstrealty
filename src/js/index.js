
$(function () {
  
  console.log('hello');

  //sliders

  const serviceSwiper = new Swiper(".apart-slider__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: 'true',
    navigation: {
      nextEl: '.apart-slider__btn-prev',
      prevEl: '.apart-slider__btn-next',
    },
    speed: 500,
    on: {
      slideChange: function (swiper) {
        let activeId = swiper.activeIndex;
        let pseudoActive = swiper.slides[activeId + 2];

        $('.apart-slider__slide').removeClass('active');
        pseudoActive.classList.add('active');
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
    slidesPerView: 3,
    spaceBetween: 20,
    loop: 'true',
    navigation: {
      nextEl: '.team-swiper__btn-next',
      prevEl: '.team-swiper__btn-prev',
    },
    speed: 1000,
  })

  //cards

  $('.projects__card:nth-child(n + 10)').addClass('hidden');
  $('.projects__card:nth-child(n + 10)').hide();

  $('.projects__button').on('click', function () {
    let hiddenCards = $(".projects__card.hidden");

    if ($(".projects__card.hidden").length !== 0) {

      for (let i = 0; i < 3; i++) {
        if (hiddenCards[i]) {
          $(hiddenCards[i]).slideDown();
          $(hiddenCards[i]).removeClass("hidden").css("display", "flex");
        }
      }
    } else {
      $('.projects__card:nth-child(n + 10)').addClass('hidden');
      $('.projects__card:nth-child(n + 10)').slideUp();
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

    phone.addEventListener("input", function (event) {
      if (phone.validity.valid) {
        phoneError.textContent = "";
        phoneError.className = "error__text";
        phone.classList.remove("invalid");
      } else {
        if (phone.validity.valueMissing) {
          phoneError.className = "error__text active";
          phone.classList.add("invalid");
        }
        phoneError.className = "error__text active";
        phone.classList.add("invalid");
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

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(name.value, phone.value, contactType.value)

      if (name.value == "" && phone.value == "" && contactType.value == "" || contactType.value == "" || phone.value == "" || name.value == "") {
        if (name.value == "") {
          name.classList.add("invalid");
          nameError.textContent = "Заполните поле";
          nameError.className = "error__text active";
        }
        // if (phone.value == "") {
        //   phone.classList.add("invalid");
        //   phoneError.textContent = "Заполните поле";
        //   phoneError.className = "error__text active";
        // }
        if (contactType.value == "") {
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
        if (form.closest('.modal')) {
          form.closest('.modal').classList.remove("active");
        }
        $(".modal.modal-success").addClass("active");
        openModal();
      }

    });
  
  $(".form__input--tel").mask("+7 (999) 999 99 99");
  

  //map


  initMap();

  async function initMap() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
      await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;
    
      const markerElement = document.createElement('div');
      // const markerHtml = "<img src='../assets/svg/marker.svg'>";
      markerElement.className = 'marker';
      markerElement.innerHTML = "<img src='../assets/svg/marker.svg'>";
      
      const marker = new YMapMarker(
        {
          // source: 'markerSource',
          coordinates: [44.756951, 41.725037],
          draggable: true,
          mapFollowsOnDrag: true
        },
        markerElement
      );

        // Иницилиазируем карту
      const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
          location: {
            // Координаты центра карты
            center: [44.756951, 41.725037],

            // Уровень масштабирования
            zoom: 14
          }
        }
      );

      // Добавляем слой для отображения схематической карты
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
      const md = document.querySelector(".modal");
      const wrap = document.querySelector(".modal__inner");
      const notWrap = el.composedPath().includes(wrap);
      const window = el.composedPath().includes(md);
      if (window && !notWrap) {
        $(".modal").removeClass("active");
        closeModal();
      }
    }
  });
  
  
})
