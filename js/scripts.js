// Business Logic

function convertToNeighborhood(number) {
  let returnArray = [];
  for (let i = 0; i <= number; i++) {
    if (i == 1) {
      returnArray[i] = "Beep!";
    } else if (i == 2) {
      returnArray[i] = "Boop!";
    } else if (i == 3) {
      returnArray[i] = "Won't you be my neighbor?";
    } else {
      returnArray[i] = i;
    }
  }
  return returnArray;
}

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