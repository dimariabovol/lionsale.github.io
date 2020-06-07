$(document).ready(function(){
   response();
});

function response() {
   $('.feedback-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,               
      dots: false,
      arrows: false,
      asNavFor: '.person-slider'
   });
   $('.person-slider').slick({
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,               
      dots: false,
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      variableWidth: true,
      prevArrow: '<div class="prev arrow"></div>',
      nextArrow: '<div class="next arrow"></div>',
      asNavFor: '.feedback-slider',
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 425,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
};