var rp = document.querySelector ('.test')
function myFunction(x) {
  if (x.matches) {
      rp.classList.add('ctnr')
  } else {
      rp.classList.remove('ctnr')
  }
}

const mmObj = window.matchMedia("(max-width: 1200px)")
myFunction(mmObj);
mmObj.addListener(myFunction)

const nav = document.querySelector('.header__icon--menu');
const menu = document.querySelector('.menu__header');
console.log(nav)
let isMenuOpen = false;
nav.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  // nav.setAttribute('aria-expanded', String(isMenuOpen));
  // menu.hidden = !isMenuOpen;
  if (isMenuOpen) {
      menu.classList.add('menu-show');
      nav.classList.add('open-menu');
    } else {
      menu.classList.remove('menu-show');
      nav.classList.remove('open-menu');
    }
})

var tabLinks = document.querySelectorAll(".tab__btn");
var tabContent =document.querySelectorAll(".tabcontent");
tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});
function openTabs(el) {
  var btn = el.currentTarget; 
  var electronic = btn.dataset.electronic;

  tabContent.forEach(function(el) {
    el.classList.remove("active");
  }); 
  tabLinks.forEach(function(el) {
    el.classList.remove("active");
  }); 

  document.querySelector("#" + electronic).classList.add("active");
  btn.classList.add("active");
}

var fqa = document.querySelectorAll(".tabcontent .box");
var fq2 = document.querySelectorAll(".tabcontent__icon");
fqa.forEach((test, index) => { 
  test.addEventListener('click', ()=>{
    fqa[index].classList.toggle ('show-click')
    fq2[index].classList.toggle ('show-icon')
  })
})

const smallImages = document.querySelectorAll('.product-detail__image-small');
smallImages.forEach(smallImage => {
  smallImage.addEventListener('click', () => {
      const expandedImg = document.querySelector('.expandedImg');
      expandedImg.src = smallImage.src;
      console.log('aaaa');
  });
});