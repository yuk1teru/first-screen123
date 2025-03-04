// import utils from 'intl-tel-input/utils';
// import intlTelInput from 'intl-tel-input';
// import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    console.log(scrollTop < lastScrollTop);

    if (scrollTop < lastScrollTop) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }

    lastScrollTop = scrollTop;
  });
  const subMenuTitles = document.querySelectorAll('.sub-menu__title');
  subMenuTitles.forEach(subMenuTitle => {
    subMenuTitle.addEventListener('click', function (event) {
      document
        .querySelectorAll('.sub-menu__title')
        .forEach(title => title.classList.remove('active'));
      document
        .querySelectorAll('.sub-menu__link')
        .forEach(link => link.classList.remove('active'));

      subMenuTitle.classList.add('active');
      const subMenuLinks =
        subMenuTitle.parentElement.querySelectorAll('.sub-menu__link');
      subMenuLinks.forEach(link => link.classList.add('active'));

      event.preventDefault();
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  function updateSwitcherText() {
    const switcher = document.querySelector('.switcher-active');
    if (!switcher) return;

    const fullText = 'English'; // Оригінальний текст
    const shortText = fullText.slice(0, 2); // Обрізаний текст

    if (window.innerWidth < 1120) {
      switcher.textContent = shortText;
    } else {
      switcher.textContent = fullText;
    }
  }

  updateSwitcherText();

  window.addEventListener('resize', updateSwitcherText);

  // const input = document.querySelector('#phone');

  // if (input) {
  //   const iti = intlTelInput(input, {
  //     separateDialCode: true,
  //     utilsScript: utils,
  //   });

  //   const phoneMask = new Inputmask({
  //     mask: '99 999 99 99',
  //     showMaskOnHover: false,
  //     showMaskOnFocus: false,
  //   });

  //   phoneMask.mask(input);
  // }
});

// ГОЛОВНА СТОРІНКА

// ПЕРЕКЛЮЧЕННЯ ТАБІВ В СЕКЦІЇ services
function openService(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('services__tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('services__tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(cityName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}
// ЗМІНА КОЛЬОРІВ ПРИ ПЕРЕКЛЮЧЕННІ ТАБІВ
function changeColor(mainColor, secondColor) {
  const section = document.querySelector('.services');

  if (!secondColor) {
    secondColor = mainColor;
  }
  section.style.setProperty('--services-color', mainColor);
  section.style.setProperty('--services-second-color', secondColor);
}

// АКОРДЕОН НА МОБІЛЦІ
document.addEventListener('DOMContentLoaded', function () {
  function accordeonInit() {
    if (window.innerWidth > 768) {
      return;
    }
    const accordionButtons = document.querySelectorAll(
      '.services__accordion-btn',
    );

    accordionButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        this.classList.toggle('active');
        const parentTab = this.closest('.services__tabcontent');
        const menuBox = parentTab.querySelector('.services__menu-box');
        const imageSide = parentTab.querySelector('.services__image-side');
        const servicesDescr = parentTab.querySelector(
          '.services__content-wrap',
        );

        if (menuBox.style.height === '0px' || !menuBox.style.height) {
          let fullHeight = menuBox.scrollHeight + 'px';
          menuBox.style.height = fullHeight;
          menuBox.style.opacity = '1';
        } else {
          menuBox.style.height = '0px';
          menuBox.style.opacity = '0';
        }

        if (imageSide.style.height === '0px' || !imageSide.style.height) {
          let fullHeight = imageSide.scrollHeight + 'px';
          imageSide.style.height = fullHeight;
          imageSide.style.opacity = '1';
          imageSide.style.marginBottom = '57px';
        } else {
          imageSide.style.height = '0px';
          imageSide.style.opacity = '0';
          imageSide.style.marginBottom = '0';
        }

        if (
          servicesDescr.style.rowGap === '0px' ||
          !servicesDescr.style.rowGap
        ) {
          servicesDescr.style.rowGap = '25px';
        } else {
          servicesDescr.style.rowGap = '0';
        }
      });
    });
  }

  accordeonInit();
});

const caseSwiper = new Swiper('.case__swiper', {
  slidesPerView: 1,
  grabCursor: true,
  autoHeight: true,
  loop: true,
});
document.querySelectorAll('.case__swiper .swiper-slide').forEach(slide => {
  const prevBtn = slide.querySelector('.case__button-prev');
  const nextBtn = slide.querySelector('.case__button-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => caseSwiper.slidePrev());
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => caseSwiper.slideNext());
  }
});
const testimonialsSwiper = new Swiper('.testimonials__swiper', {
  spaceBetween: 30,
  autoHeight: true,
  // loop: true,
  freeMode: true,
  breakpoints: {
    1120: {
      slidesPerView: 3.2666,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    325: {
      slidesPerView: 1.33,
      spaceBetween: 8,
    },
  },
});
// const swiperWrapper = document.querySelector(
//   '.testimonials__swiper .swiper-wrapper',
// );
// const slides = document.querySelectorAll('.testimonials__swiper .swiper-slide');

// slides.forEach(slide => {
//   const clone = slide.cloneNode(true);
//   swiperWrapper.appendChild(clone);
// });
