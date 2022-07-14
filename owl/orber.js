$(".owl-carousel").owlCarousel({
  autoplay: false,
  autopalyhoverpause: false,
  //autoplaytimeout: 100,
  items:4,
  nav:false,
  loop:false,
  lazyLoad:true,
  margin:5,
  padding:5,
  stagePadding:5,
  responsive:{
      0 : {
          items:1,
          dots: true
      },
      485:{
          items:2,
          dots: true
      },
      728:{
          items:3,
          dots:true
      },
      960:{
          items:4,
          dots:true
      },
      1200:{
          items:4,
          dots:true
      }
  }
});