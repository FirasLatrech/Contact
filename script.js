$( ".email" ).keyup(function() {
  var emailText = $('.email').val();
 $(".field p").remove();
 $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
  Splitting();
});

$(function() {
    $('.email').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
});

$('.signup').submit(function(event){
 event.preventDefault();
  $(".email").blur();
  $("#wrap").addClass("run");
  setTimeout(function(){	
    $('.email').val('');
    $( ".field p" ).remove();
    $("#wrap").removeClass("run");
}, 7000);
});