// menu
document.onclick = (e) => {
  let target = e.target;
  let menu = document.querySelector('.header__items-full-screen');
  if (target.closest('.header__items-small-screen')) {
    menu.classList.toggle('active');
  }
};

// switch actors/creators
document.querySelector('.people__titles').onclick = function (e) {
  let target = e.target;
  if (target.classList.contains('people__title')) {
    let activeTitle = document.querySelector('.people__title-active');
    let people__block = document.querySelectorAll('.people__block');
    if (!target.classList.contains('.people__title-active')) {
      activeTitle.classList.remove('people__title-active');
      target.classList.add('people__title-active');
      for (let i of people__block) {
        i.classList.toggle('active');
      }
    }
  }
};

// swiper
let mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.news__next',
  },
});
