$(document).ready(() => {
  setTimeout(() => {
    $(".curtain").velocity({
      opacity: 0
    }, 1000, function () {
      $(".curtain").css("display", "none")
    });
  }, 700);
})
