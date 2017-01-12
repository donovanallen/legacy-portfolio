$(document).ready(function(){
  console.log("functioning");

  $('.arrowUp').click(function(){
    $.fn.fullpage.moveSectionUp();
  });

  $('.arrowDown').click(function(){
      $.fn.fullpage.moveSectionDown();
  });

  // $('#headshot').position(function() {
  //   if ($(this).position() < 50){
  //     $('#headImg').addClass("sticky");
  //   }
  //   else{
  //     $('#headImg').removeClass("sticky");
  //   }
  // });




  // $(window).scroll(function() {
  //   if ($('#headshot').scrollTop() > 30){
  //     // $('header').addClass("sticky");
  //     // $("h1").text("nda");
  //     // $("h3").hide();  // display: block/none
  //     console.log("scroll 30");
  //   }
  //   else{
  //     // $('header').removeClass("sticky");
  //     // $("h1").show("donovan allen")
  //     console.log("else");
  //   }
  // });





  //   var h1 = $("h1");
  //
  //   h1.on("hover", function(){
  //     $(this).append("web dev");
  //   })
  //
  //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 1){
  //     $('header').addClass("sticky");
  //   } else{
  //     $('header').removeClass("sticky");
  //   }
  // });
  //
});
