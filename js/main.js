/* 전역변수 리스트 -------------------- */
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

let swiper = new Swiper("#wrap", {
  direction: "horizontal",
  
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
    depth: 200,
    slideShadows: true,
  },

  //반응형에 따른 swiper 조절
  breakpoints : {
    539: {
      spaceBetween: -100,
      coverflowEffect: {
        rotate: 60,
        depth: 300,
      },
    },
    1180: {
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 50,
        depth: 200,
      },
    }
  }
});


/* 이벤트 연결 ----------------------- */
swiper.autoplay.stop();

//play 버튼
btnPlay.addEventListener("click", e => {
  e.preventDefault();

  play();
});

//pause 버튼
btnPause.addEventListener("click", e => {
  e.preventDefault();
  
  pause();
});

//햄버거메뉴 버튼
btnCall.addEventListener("click", e => {
  e.preventDefault();

  activeBtn();
});

//창 너비에 따른 햄버거 메뉴 이벤트
window.addEventListener("resize", () => {
  let wid = window.innerWidth;

  if(wid >= 1180) menuMo.classList.remove("on");
});

/* 함수 선언 ------------------------- */
//swiper play
function play() {
  swiper.autoplay.start();
  btnPause.classList.remove("on");
  btnPlay.classList.add("on");
}

//swiper pause
function pause() {
  swiper.autoplay.stop();
  btnPlay.classList.remove("on");
  btnPause.classList.add("on");
}

//햄버거메뉴 함수
function activeBtn() {
  menuMo.classList.toggle("on");
}