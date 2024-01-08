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