$('.carousel-test').owlCarousel({
    loop:true,
    autoplay: true,
    margin: 21,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:3
        },
        1300:{
            items:3
      }
    }
})