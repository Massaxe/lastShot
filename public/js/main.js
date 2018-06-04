$(document).ready(() => {
  setTimeout(() => {
    $(".curtain").velocity({
      opacity: 0
    }, 700, function () {
      $(".curtain").css("display", "none")
    });
  }, 500);
})
