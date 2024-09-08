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
      centerPadding: '25% 20%',
      slidesToShow: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        
        
        {
          breakpoint: 1199.98,      //maximum limit
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20% 20%',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991.98,       //maximum limit
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15% 20%',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767.98,      //maximum limit
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10% 20%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575.98,      //maximum limit
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5% 20%',
            slidesToShow: 1
          }
        }
        
      ]
    });
    // review slider end
})