const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elme = document.querySelectorAll(".elem");
elme.forEach((value, i) => {
  value.addEventListener("mouseenter", () => {
    var image = value.getAttribute("data-img");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

var slider = document.querySelector(".swiper");
// var pointer = document.querySelector(".pointer");

// slider.addEventListener("mousemove", function (e) {
//   gsap.to(pointer, {
//     duration: 0.3,
//     opacity: 1,
//     left: e.clientX,
//     top: e.clientY,
//     ease: "power2.out",
//     display: "flex",
//   });
// });

// slider.addEventListener("mouseleave", function (e) {
//   gsap.fromTo(
//     pointer,
//     { opacity: 1 },
//     {
//       opacity: 0,
//       duration: 0.3,
//       scale: -1,
//       onComplete: () => (pointer.style.display = "none"),
//     }
//   );
// });

var menu = document.querySelector(".mobile_menu");
var full = document.querySelector("#full-src");
var navImg = document.querySelector('nav img')
var click = false;

var icon = document.querySelector('.fa-solid')

menu.addEventListener("click", () => {
  if (!click) {
    click = true;
    full.style.top = 0;
    navImg.style.opacity = 0
    
    icon.classList.add('fa-xmark');
    icon.classList.remove('fa-bars');
    

  } else {
    click = false;
    full.style.top = -100 + "%";
    navImg.style.opacity = 1
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
    
  }

});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
