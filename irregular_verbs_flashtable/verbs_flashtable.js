
$("span.verbform").hide();

$("button.hide").click(function() {
  $("span.verbform").hide("slow");
});

$("button.show").click(function() {
  $("span.verbform").show("slow");
});

$("td").click(function() {
  $("span.verbform", this).toggle("slow");
});
