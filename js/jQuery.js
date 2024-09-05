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


    // review slider start
    $('.center').slick({
      centerMode: true,
      centerPadding: '300px 200px ',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    // review slider end
})