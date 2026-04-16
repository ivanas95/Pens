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





  $(".item").click(function () {

    $(".step").hide();

    const itemID = $(this).attr("id");   // "b-weight"
    const target = itemID.replace("b-", ""); // "weight"

    $("#" + target).show();

  });





  let selections = {
  surface: null,
  weight: null,
  ink: null,
  feel: null,
  body: null,
  grip: null,
  closure: null,
  colour: null,
  submission: null
};


$(".option").click(function(){

  option =  $(this).text().trim()
  stepID = $(this).closest(".step").attr("id")

  selections[stepID] = option;

$(this).closest(".step").hide().next(".step").show();

  console.log(selections)


  if ((selections.surface == "WOOD") 
    && (selections.weight=="BOLD")
    && (selections.ink=="NO PREFERENCE")
    && (selections.feel=="NO PREFERENCE")
    && (selections.body=="CHUNKY")
    && (selections.grip=="NO PREFERENCE")
    && (selections.closure=="CAPPED")
    && (selections.submission=="SUBMIT")
  ) 
  {
  $("#pentitle").text("Hello world!");
  $("#desc").text("Hello world!");
    $("#qual").text(
    `FOR ${selections.surface}, ${selections.weight}, ${selections.ink}, ${selections.feel}, ${selections.body}, HAS ${selections.grip}, ${selections.closure}, HAS ${selections.colour},`
    );
  } 
  // else {
  //alert("you've selected something different");
  //}

})