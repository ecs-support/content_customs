$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".markdown table").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
