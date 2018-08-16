$( document ).ready(function() {
    var offset = $("#shadow-container").offset();
    var topOffset = $("#shadow-container").offset();
    // var w = window.innerWidth;
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $("#shadow-container").css("left", st*0.95 + offset.left);
  $("#shadow-container").css("top", topOffset.top - st*0.85);
});
});


  //     var lastScrollTop = 0;
    // $('#shadow').scroll(function(){
    // var st = $(this).scrollTop();
    // if (st > lastScrollTop){
    //     $('img').animate({top: '-=2%', left: '-=2%'});
    //     console.log('is this working')
    // } else {
    //     $('img').animate({top: '+=2%', left: '+=2%'});
    //     console.log('is this working')
    // }
    // lastScrollTop = st;
    // });
