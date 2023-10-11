let burger = document.querySelector('.header-burger')
let menu = document.querySelector('.header__nav')
let menuLinks = menu.querySelectorAll('.nav__link')
let headerSearch = document.querySelector('.header-search__button')
let headerSearchOpen = document.querySelector('.search-open')
let headerSearchClose = document.querySelector('.header-search__button_close')

burger.addEventListener('click',

function() {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header-nav_active');
  document.body.classList.toggle('stop-scroll');


  menuLinks.forEach(function(el) {
  el.addEventListener('click' , function() {
    burger.classList.remove('burger-active');
    menu.classList.remove('header-nav_active');
    document.body.classList.remove('stop-scroll');
  })
})
})



const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  });


  document.querySelectorAll('.tabs-nav__button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__button').forEach(function(btn){
    btn.classList.remove('tabs-nav__button_active')});
    e.currentTarget.classList.add('tabs-nav__button_active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active');

    });
    });

    $("#accordion").accordion({
      heightStyle: "content",
      header: '.accordion-header',
      collapsible: true,
      active: false,
    });

    headerSearch.addEventListener('click',

function() {
  headerSearchOpen.classList.toggle('search-open__on');
  })


  headerSearchClose.addEventListener('click',

function() {
  headerSearchOpen.classList.toggle('search-open__on');
  })

