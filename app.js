const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector('#elem1');
// var image = a.getAttribute('data-img')

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector('#fixed-image')
elemC.addEventListener('mouseenter',function(){
     fixed.style.display = "block"
})
elemC.addEventListener('mouseleave',function(){
    fixed.style.display = "none"
});

var elme = document.querySelectorAll('.elem');
  elme.forEach((value,i)=>{
    value.addEventListener('mouseenter',()=>{
        var image = value.getAttribute("data-img");
         fixed.style.backgroundImage = `url(${image})`
      })
  })
  
  var slider = document.querySelector('.swiper');
  var pointer = document.querySelector('.pointer');


slider.addEventListener('mousemove',function(e){
  pointer.style.display = 'block'
  pointer.style.top = e.clientY +'px';
  pointer.style.left = e.clientX +'px';
  
  console.log(e)
})



slider.addEventListener('mouseleave',function(e){
  pointer.style.display = 'none'
})



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
