$(function() {
    var showingNav = false;


  $('.dropdown-title').click(function () {
    $(".dropdown-content").toggle("slow");
  });
    $(".feedme").click(function () {
        $(".dropdown-content").hide("slow");
    });
    $(".taco").click(function() {
        $('html,body').animate({
            scrollTop: $(".red-container").offset().top},
            {
                complete: scrollFunction(),
                duration: 'slow'
            });

    });

    function scrollFunction() {
        var sPos = document.body.scrollTop;
        var nav = $(".nav");
        var bbHeight = $(".billboard").height();

        if(!showingNav && sPos >= (bbHeight)) {
            showingNav = true;
            nav.addClass("show");
        }
        else if(showingNav && !(sPos > (bbHeight))) {
            showingNav = false;
            nav.removeClass("show")
        }
    }

    window.onscroll = scrollFunction;
});
