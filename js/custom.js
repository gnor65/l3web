$(document).ready(function(){
'use strict'
    //change header height
//$(function(){
//$('.header').height($(window).height());


// }); 
//scroll features
    
$(function(){
$('.header .arrow i').click(function(){
    $('html ,body').animate({
        scrollTop:$('.featurs').offset().top
        
    },2000);
    
   }); 
//show hidden item from work
    $(function(){
$('#showbt').click(function(){
    $(".item ").fadeIn(2000);
  $("#showbt").hide();
  $(".our-work").css('margin-bottom','700px');
  
    
    });
        // <!--change Testimonials-->
        var leftarrow = $('.testim .fa-chevron-left'),
            rightarrow = $('.testim .fa-chevron-right');
        function checkClints(){
            if($('.clints:first').hasClass('active')){
                leftarrow.fadeOut();
            }else{
                leftarrow.fadeIn();
            }
                if($('.clints:last').hasClass('active')){
                rightarrow.fadeOut();
            }else{
                rightarrow.fadeIn();
            } 
            
     
         } 
        
    
      
        checkClints();
            
      $(".testim i").click(function(){
           
          if($(this).hasClass('fa-chevron-left')){
          $('.testim .active').fadeOut(100,function(){
              
             $(this).removeClass('active').next('.clints').addClass('active').fadeIn();
              checkClints();
          });
              
       } else{
           
          $('.testim .active').fadeOut(100,function(){
              
     $(this).removeClass('active').addClass('hidden').prev('.clints').removeClass('hidden').addClass('active').fadeIn();
              checkClints();
          });
       }       
});
 });
   

});

});

  // $(".testim .active").fadeOut(100,function(){
           //  $(this).removeClass('active').next('.clints').addClass('active').fadeIn();
            //  checkClints();
       // $('.clints:last').hasClass('active') ? rightarrow.fadeOut() : rightarrow.fadeIn(); 

