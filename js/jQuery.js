$(function(){

    // banner slider start
    $('.variable-width').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
                           
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              
            }
          }
          
        ]
      });

    // banner slider end
})