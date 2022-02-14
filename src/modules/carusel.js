import Swiper, {
  Autoplay,
  Navigation
} from 'swiper';

Swiper.use([Autoplay, Navigation])

const carusel = () => {

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });
};

export default carusel;