/* $(function() {
  $(".next").click(function() {
    $(this).closest(".step").hide().next(".step").show();
  });

  $(".prev").click(function() {
    $(this).closest(".step").hide().prev(".step").show();
  });
});
*/

// $(function() {
//   $(".step").click(function() {
//     $(this).closest(".step").hide().next(".step").show();
//   });
// });


let selections = {
  surface: null,
  weight: null,
  ink: null,
  feel: null,
  body: null,
  grip: null,
  closure: null,
  colour: null
};




$(".option").click(function(){

  option =  $(this).text().trim()
  stepID = $(this).closest(".step").attr("id")

  selections[stepID] = option;

$(this).closest(".step").hide().next(".step").show();

  console.log(selections)


  if ((selections.weight == "THICKER") && (selections.surface=="RECEIPT PAPER")) {
  
  alert("you've selected thicker weight on receipt paper") 
  } else {
  alert("you've selected something different");
  }

})


  $(".item").click(function () {

    $(".step").hide();

    const itemID = $(this).attr("id");   // "b-weight"
    const target = itemID.replace("b-", ""); // "weight"

    $("#" + target).show();

  });