$(".dropdown-toggle").toggle(
function() {
    $(".dropdown-content").slideDown("fast").show();
}, 
function() {
    $(".dropdown-content").hide();
});
