const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");

let swiper = new Swiper("#wrap", {
  direction: "horizontal",
  spaceBetween: 50,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  mousewheel: true,
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 30,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }
});

swiper.autoplay.stop();

btnPlay.addEventListener("click", e => {
  e.preventDefault();
  swiper.autoplay.start();
  btnPause.classList.remove("on");
  btnPlay.classList.add("on");
});

btnPause.addEventListener("click", e => {
  e.preventDefault();
  swiper.autoplay.stop();
  btnPlay.classList.remove("on");
  btnPause.classList.add("on");
});