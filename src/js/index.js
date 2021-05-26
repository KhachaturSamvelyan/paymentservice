var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.next',
      prevEl: '.left',
    },
    loop: true,
    autoplay: false,
    shortSwipes	: false,
  });


$(".mobile").hide()
  $(".burger").click(function(){
    $('.mobile').animate({width:'toggle'},350,function (){
    if($('.mobile').is(":visible")){
      $('body').addClass("open_body");
    }
    else{
      $('body').removeClass("open_body");
    }
  })
})



$("#dd span").change(function(e) {
  console.log("dropdown change event is fire : "+$(this).text());
});
$("#de span").change(function(e) {
  console.log("dropdown change event is fire : "+$(this).text());
});
(function ( $ ) {
    $.fn.dropdown = function()
                  {
        var el = $(this);
        el.addClass("dropdown");
                var holder = $("span.holder",el);
               var opts_con = $("ul",el);                                 
        var opts   = $("ul li",el);
        var val    = "";
opts_con.prepend("<span class='arrow_up'></span>");
      
          el.on("click",function()
          {
            opts_con.toggleClass("active")
                    
          });
          
            opts.on("click",function()
            {
          holder.text($(this).text());
          holder.change();
            }); 
     }
          
}( jQuery ));	
$("#dd").dropdown();

$('.tabs-stage section').hide();
$('.tabs-stage section:first').show();
$('.tabs-nav li:first').addClass('tab-active');

$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage section').hide();
  $($(this).attr('href')).show();
});


  $(".user_info_blok h2").click(function(){
    $('.settings').slideToggle('slow',function (){

    });
    })
    $(".user_info_blok img").click(function(){
      $('.settings').slideToggle('slow',function (){
  
      });
      })
  
    $(".circle svg").click(function(){
      $('.notification').slideToggle('slow',function (){
        
      });
      })
      $('.owl-carousel').owlCarousel({
        loop: false,
        items: 4,
        nav: true,
        navRewind: false,
        navText: ["<img src='img/prev.svg'>","<img src='img/next1.svg'>"],
        responsive : {
          0 : {
            items : 1,
           
        },
          576 : {
              items : 2,
             
          },
          767 : {
              items : 3,
              
          },
          992 : {
              items : 3,

          },
          1161 : {
            items : 4,
            
        }
      }

    })
    $(".filter p").click(function(){
      $('.filter_blok').slideToggle('slow',function (){
        
      });
      })




      $(".selector").flatpickr(
        {
        mode: "range"
        }
    );


    $(".mobile ul li a").click(function(){
      $(".mobile").hide()
      $('body').removeClass("open_body");

      })




      $('.event').on('click', function(event){
        window.location.href = 'dashboard.html';
        
      });





      $('.tabs-stage2 section').hide();
      $('.tabs-stage2 section:first').show();
      $('.tabs-nav_2 li:first').addClass('tab-active_2');
      $('.tabs-nav_2 a').on('click', function(event){
        event.preventDefault();
        $('.tabs-nav_2 li').removeClass('tab-active_2');
        $(this).parent().addClass('tab-active_2');
        $('.tabs-stage2 section').hide();
        $($(this).attr('href')).show();
      });




$('.pay_content a').click(function(){
      $("#modal_pay").css("display", "flex");
      $('body').css("overflow-y", "hidden");

  })

  $('.payment_close').click(function(){
    $("#modal_pay").css("display", "none");
    $('body').css("overflow-y", "scroll");

})


$('tr a').click(function(){
  $("#modal_pay1").css("display", "flex");
  $('body').css("overflow-y", "hidden");

})

$('.payment_close').click(function(){
$("#modal_pay1").css("display", "none");
$('body').css("overflow-y", "scroll");

})



$('.add_method a').click(function(){
  $("#modal_new").css("display", "flex");
  $('body').css("overflow-y", "hidden");

})

$('.payment_close').click(function(){
$("#modal_new").css("display", "none");
$('body').css("overflow-y", "scroll");

})




$('.pay_now').click(function(){
  $("#modal_pay").css("display", "flex");
  $('body').css("overflow-y", "hidden");

})

$('.payment_close').click(function(){
$("#modal_pay").css("display", "none");
$('body').css("overflow-y", "scroll");

})






$('.tabs-stage3 section').hide();
$('.tabs-stage3 section:first').show();
$('.tabs-nav_3 li:first').addClass('tab-active_3');
$('.tabs-nav_3 a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav_3 li').removeClass('tab-active_3');
  $(this).parent().addClass('tab-active_3');
  $('.tabs-stage3 section').hide();
  $($(this).attr('href')).show();
});
