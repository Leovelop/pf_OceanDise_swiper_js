/* 전역변수 리스트 -------------------- */
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");

let swiper = new Swiper("#wrap", {
  direction: "horizontal",
  spaceBetween: 30,
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
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }
});

/* 이벤트 연결 ----------------------- */
swiper.autoplay.stop();

btnPlay.addEventListener("click", e => {
  e.preventDefault();
  play();
});

btnPause.addEventListener("click", e => {
  e.preventDefault();
  swiper.autoplay.stop();
  btnPlay.classList.remove("on");
  btnPause.classList.add("on");
});

/* 함수 선언 ------------------------- */
function play() {
  swiper.autoplay.start();
  btnPause.classList.remove("on");
  btnPlay.classList.add("on");
}