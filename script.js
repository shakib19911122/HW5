
// $(".saveBtn").on("click", function () {
//   var timeOfday = $(this).parent().attr("id");
//   var textContent = $("input").val().trim();

//   localStorage.setItem(timeOfday, textContent);
//   console.log(timeOfday, textContent);
// });
$("#sB9").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#9").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB10").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#10").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB11").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#11").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB12").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#12").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB13").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#13").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB14").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#14").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB15").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#15").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB16").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#16").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

$("#sB17").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("#17").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});


$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("13pm"));
$("#2pm").children("input").val(localStorage.getItem("14pm"));
$("#3pm").children("input").val(localStorage.getItem("15pm"));
$("#3pm").children("input").val(localStorage.getItem("16pm"));
$("#5pm").children("input").val(localStorage.getItem("17pm"));






