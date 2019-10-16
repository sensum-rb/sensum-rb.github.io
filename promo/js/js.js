$(".media__main__img").click(() => {
  $(".modal1").css("display", "block");
});
$(".10years").click(() => {
  $(".modal2").css("display", "block");
});
$(".bst").click(() => {
  $(".modal3").css("display", "block");
});
$(".modal__exit").click(() => {
  $("video")[0].pause();
  $("video")[1].pause();
  $("video")[2].pause();
  $(".modal").hide();
});
