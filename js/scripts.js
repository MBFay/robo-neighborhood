// Business Logic

// User Interface Logic

$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#input-number").val());

    if ($(".results-display").is(":hidden")) {
      $("#results-display-span").text(inputNumber);
      $(".results-display").slideToggle();
    } else {
      $("#results-display-span").slideUp("fast", function() {
        $("#results-display-span").text(inputNumber);
      });
      $("#results-display-span").slideDown();
    }
    
  });
});