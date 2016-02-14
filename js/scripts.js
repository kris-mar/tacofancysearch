$(function() {
  $('.dropdown-title').click(function () {
    $(".dropdown-content").toggle("slow");
  });
    $(".feedme").click(function () {
        $(".dropdown-content").hide("slow");
    });
    $(".taco").click(function() {
        $('html,body').animate({
                scrollTop: $(".red-container").offset().top},
            'slow');
    });

    function scrollFunction() {
        var sPos = document.body.scrollTop;

        if(sPos > (window.innerHeight - ($(".nav").height()/2))) {
            $(".nav").show("slow")
            $(".nav").css('top', $(".nav").height()/2);
        }
        else {
            $(".nav").hide("slow")
            $(".nav").css('display', 'none');
        }
    }

    window.onscroll = scrollFunction;
});
