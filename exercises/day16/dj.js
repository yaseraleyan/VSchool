$(document).hover(function() {
  $(".yellow").css("background-color", "blue");
});
$(document).mousedown(function() {
  $(".yellow").css("background-color", "red");
});
$(document).mouseup(function() {
  $(".yellow").css("background-color", "yellow");
});
$(document).dblclick(function() {
  $(".yellow").css("background-color", "green");
});
$(window).scroll(function() {
  $(".yellow").css("background-color", "orange");
});

$(document).keypress(function() {
  $(".yellow").css("background-color", "black");
});
