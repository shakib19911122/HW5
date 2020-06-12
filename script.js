

//--onclick event to save user input to local storage---//
$("#sB9").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB10").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("input").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB11").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB12").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB13").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB14").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB15").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB16").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#sB17").on("click", function() {
  var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});


$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("9am"));
$("#11am").children("input").val(localStorage.getItem("9am"));
$("12pm").children("input").val(localStorage.getItem("9am"));
$("#1pm").children("input").val(localStorage.getItem("9am"));
$("#2pm").children("input").val(localStorage.getItem("9am"));
$("#3pm").children("input").val(localStorage.getItem("9am"));
$("#3pm").children("input").val(localStorage.getItem("9am"));
$("#5pm").children("input").val(localStorage.getItem("9am"));






