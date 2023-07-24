//banner slider
const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

//movie slider
const swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  slidesPerView:4,
  spaceBetween:10,
  breakpoints: {
    // 뷰포터의 넓이가 >= 0px
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    // 뷰포터의 넓이가 >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // 뷰포터의 넓이가 >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    //뷰포터의 넓이가 >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }

});

//movie tab menu
let moviebtn = $('.movie_title ul li');
let movieCont = $('.movie_chart>div');

movieCont.hide().eq(0).show();
moviebtn.click(function (e) {
  e.preventDefault();
  let target = $(this); //클릭한 li
  let index = target.index(); //클릭한 li의 index번호 추출
  console.log(index)
  movieCont.hide().eq(index).show(); //모두지우고 해당 index번호의 슬라이드 보이기
  moviebtn.removeClass('active') // 모든 li에 active지우기
  target.addClass('active') //클릭한 li의 active추가

});

// notice
let tabmenu = $('.notice');

tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

tabmenu.find('ul>li>a').click(function(e){
    e.preventDefault();
    let target=$(this);
    //.next() --> 
    //.nextAll() --> 
    tabmenu.find('ul>li>a').next().hide();
    target.next().show();

    tabmenu.find('ul>li').removeClass('active')
    //.parent() 
    //.parents() 
    target.parent().addClass('active')
})