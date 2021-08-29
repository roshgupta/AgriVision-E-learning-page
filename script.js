const hamburger = document.querySelector(".hamburger-container");
const navLinks = document.querySelector(".navbar__links");
const body = document.querySelector("body");

//event-listener added for toogling hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-open");
  if (hamburger.classList.contains("hamburger-open")) {
    navLinks.classList.add("ham-links");
    navLinks.classList.remove("desktop-links");
    body.classList.add("noscroll");
  } else {
    navLinks.classList.add("desktop-links");
    navLinks.classList.remove("ham-links");
    body.classList.remove("noscroll");
  }
});

// script for sliders
// library used :  slick slider js
//to avoid writing multiple lines of same code, we will use array
let sliderContainers = [
  ".upcoming-exams-slider",
  ".popular-exams-slider",
  ".success-stories-slider",
  ".news-cards-slider",
];
let sliderLeftButton = [
  ".upcoming-header-button-left",
  ".popular-header-button-left",
  ".success-header-button-left",
  ".news-header-button-left",
];
let sliderRightButton = [
  ".upcoming-header-button-right",
  ".popular-header-button-right",
  ".success-header-button-right",
  ".news-header-button-right",
];
let slidestoShow1 = [5, 5, 1, 3, 3];
let slidestoShowB1 = [4, 4, 1, 3, 3];
let slidestoShowB2 = [3, 3, 1, 3, 3];
let slidestoShowB3 = [2, 2, 1, 1, 1];
let sliderSpeed = [400, 400, 1000, 1000];
let autoPlayInterval = [3000, 3000, 4000, 4000];
for (let i = 0; i < sliderContainers.length; i++) {
  $(sliderContainers[i]).slick({
    autoplay: true,
    dots: false,
    prevArrow: $(sliderLeftButton[i]),
    nextArrow: $(sliderRightButton[i]),
    infinite: true,
    speed: sliderSpeed[i],
    autoplaySpeed: autoPlayInterval[i],
    slidesToShow: slidestoShow1[i],
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidestoShowB1[i],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 832,
        settings: {
          slidesToShow: slidestoShowB2[i],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: slidestoShowB3[i],
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//slider for satisfied user section
// $(".satisfied-cards-slider").slick({
//   autoplay: true,
//   dots: false,
//   arrow: false,
//   infinite: true,
//   speed: 1000,
//   autoplaySpeed: 4000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 832,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });
