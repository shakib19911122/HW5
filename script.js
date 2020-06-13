var date = new Date();

$("#currentDay").append(date);


$(".btn").on("click",function(){
  var timeOfday = $(this).parent().attr("id");
  var textContent = $(this).siblings("input").val();
  console.log(textContent);

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);

})




//pleae ignor below code 
// $("#sB9").on("click", function () {
//   var timeOfday = $(this).parent().attr("id");
//   var textContent = $("#9").val().trim();

//   localStorage.setItem(timeOfday, textContent);
//   console.log(timeOfday, textContent);
// });



$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("#12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2pm"));
$("#3pm").children("input").val(localStorage.getItem("3pm"));
$("#3pm").children("input").val(localStorage.getItem("4pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));






