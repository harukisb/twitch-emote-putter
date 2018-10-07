var PUT_TEXT = "honmaniyoFace < ";

$(document).on("click", "textarea", function(e) {
  var $ta = $("textarea");
  if ($ta.val() === "") {
    $ta.val(PUT_TEXT);
  }
});

$(document).on("keydown", "textarea", function(e) {
  if (e.keyCode == 13) { // Enterが押された
    if (e.shiftKey) { // Shiftキーも押された
      $.noop();
    } else {
      setTimeout(function() {
        var $ta = $("textarea");
        $ta.val(PUT_TEXT);
      }, 10);
    }
  } else {
    $.noop();
  }
});
