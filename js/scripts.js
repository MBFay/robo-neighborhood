// Business Logic

function convertToNeighborhood(number) {
  let returnArray = [];
  for (let i = 0; i <= number; i++) {
    const numberString = i.toString();

    if (numberString.includes("3")) {
      returnArray[i] = "Won't you be my neighbor?";
    } else if (numberString.includes("2")) {
      returnArray[i] = "Boop!";
    } else if (numberString.includes("1")) {
      returnArray[i] = "Beep!";
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
    const resultArray = convertToNeighborhood(inputNumber);

    if ($(".results-display").is(":hidden")) {
      $("#results-display-span").text(resultArray);
      $(".results-display").slideToggle();
    } else {
      $("#results-display-span").slideUp("fast", function() {
        $("#results-display-span").text(resultArray);
      });
      $("#results-display-span").slideDown();
    }
  });
});