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

$(document).ready(function(){


  
  function checkMobile() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      $(".breadcrumb .item").hide();
      $(".breadcrumb-m .item").show();

    } else {
      $(".breadcrumb .item").show();
      $(".breadcrumb-m .item").hide();
      $(".breadcrumb-m").hide();
    }
  }

  checkMobile();
  $(window).resize(checkMobile);

    $(".breadcrumb-m").hide();


  $(".breadcrumb-stripe, .breadcrumb-stripe-r").click(function () {
    $(".breadcrumb-m").toggle();
  });

});





function matches(selection, rule) {

  for (let category in rule) {

    let selectedValue = selection[category];

    // ignore if user picked no preference
    if (selectedValue === "NO PREFERENCE") continue;

    let ruleValue = rule[category];

    // must match exactly
    if (!ruleValue.includes(selectedValue)) {
      return false;
    }
  }

  return true;
}



  $(".item").click(function () {

    $(".step").hide();

    const itemID = $(this).attr("id");   // "b-weight"
    const target = itemID.replace("b-", ""); // "weight"

    $("#" + target).show();

  });


$("#me").click(function () {
    window.location.reload(true);
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
};

/*
$(".option").click(function(){

  let option =  $(this).text().trim()
  let stepID = $(this).closest(".step").attr("id")

  selections[stepID] = option;

$(this).closest(".step").hide().next(".step").show();

  console.log(selections)

*/
const pens = [
  {
    pentitle: "MUJI GEL PEN 0.3",
    desc: "Very smooth, uses water based ink. Dries very fast due to small size.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MICRO", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "MUJI GEL PEN 0.5",
    desc: "Very smooth, uses water based ink. Inky pen but dries very fast.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["INKIER", "FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "MUJI GEL PEN 0.8",
    desc: "Very smooth, uses water based ink. Inky pen but dries very fast.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["BOLD", "NO PREFERENCE"],
      ink: ["INKIER", "FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "BIC BALLBOINT",
    desc: "Classic. Oil-based ink, dries instantly. Reliable.",
    match: {
      surface: ["RECEIPT PAPER", "WOOD", "SKIN", "PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["NO PREFERENCE"]
    }
  },

  {
    pentitle: "ZEBRA SARASA CLIP 0.5",
    desc: "Smooth gel pen that comes in many colours. Can skip when not regularly used. Spring-loaded pen clip.",
    match: {
      surface: ["PAPER PRODUCTS", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["INKIER", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "ZEBRA SARASA CLIP 0.5 (VINTAGE)",
    desc: "Smooth gel pen that comes in darker colours. Particularly inkier and smoother than original Zebra clip. Spring-loaded pen clip.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["INKIER", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "GELLY ROLL 08",
    desc: "Very inky gel pen that comes in many colours. Almost opaque. Ideal for illustration.",
    match: {
      surface: ["PAPER PRODUCTS", "FABRIC", "SKIN", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["BOLD", "NO PREFERENCE"],
      ink: ["INKIER", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "PIGMA MICRON 005, 01, 02",
    desc: "Technically a fineliner. As thin as you can get. Waterproof.",
    match: {
      surface: ["PAPER PRODUCTS", "WOOD", "RECEIPT PAPER", "FABRIC", "NO PREFERENCE"],
      weight: ["MICRO", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "UNIBALL GEL IMPACT 1.0",
    desc: "Very inky gel pen that comes in many colours. Almost opaque. Ideal for illustration.",
    match: {
      surface: ["PAPER PRODUCTS", "FABRIC", "SKIN", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["BOLD", "NO PREFERENCE"],
      ink: ["INKIER", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "PILOT HI-TECHPOINT V5 GRIP",
    desc: "Smooth rollerball that dries instantly. Unique tip allows for high stroke contrast.",
    match: {
      surface: ["PAPER PRODUCTS", "SKIN", "WOOD", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "UNIBALL SIGNO GEL 0.38",
    desc: "Smooth gel pen that is less inky than others. Waterproof.",
    match: {
      surface: ["PAPER PRODUCTS", "SKIN", "NO PREFERENCE"],
      weight: ["FINE", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "UNI JETSTREAM BALLPOINT, ALPHA GEL",
    desc: "Comfortable pen for long-periods but can skip. Waterproof and forgery-resistant. Very large and squishy grip",
    match: {
      surface: ["PAPER PRODUCTS", "WOOD", "SKIN", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["CHUNKY", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["NO PREFERENCE"]
    }
  },

  {
    pentitle: "UNIBALL SIGNO GEL",
    desc: "Less varied colour selection, but very smooth and very opaque. Ideal for illustration.",
    match: {
      surface: ["PAPER PRODUCTS", "WOOD", "SKIN", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["BOLD", "NO PREFERENCE"],
      ink: ["INKIER", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "PENTEL ENERGEL NEEDLE-POINT 0.35",
    desc: "Smooth gel pen that dries very fast. Needle-point tip is ideal for use with a ruler.",
    match: {
      surface: ["PAPER PRODUCTS", "WOOD", "SKIN", "GLOSSY SURFACE", "NO PREFERENCE"],
      weight: ["MICRO", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "PILOT FRIXON BALL 05",
    desc: "Erasable gel pen due to its thermo-sensitive ink. Can feel scratchy at times.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "KAWECO STEEL SPORT 08",
    desc: "Stubby, stainless-steel pen that glides along the page despite its weight.",
    match: {
      surface: ["PAPER PRODUCTS","NO PREFERENCE"],
      weight: ["BOLD", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["DURABLE", "NO PREFERENCE"],
      body: ["CHUNKY", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

  {
    pentitle: "ZEBRA F-701",
    desc: "A sleek metal ballpoint. Uses oil-based ink to prevent smear, a little scratchy.",
    match: {
      surface: ["PAPER PRODUCTS", "SKIN", "RECEIPT PAPER", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["DURABLE", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["NO PREFERENCE"]
    }
  },

  {
    pentitle: "ZEBRA F-301",
    desc: "A sleek metal ballpoint but with a plastic grip. Uses oil-based ink to prevent smear, a little scratchy.",
    match: {
      surface: ["PAPER PRODUCTS", "SKIN", "RECEIPT PAPER", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["FAST-DRYING", "NO PREFERENCE"],
      feel: ["DURABLE", "NO PREFERENCE"],
      body: ["SLIM", "NO PREFERENCE"],
      grip: ["A GRIP", "NO PREFERENCE"],
      closure: ["CLICKER", "NO PREFERENCE"],
      colour: ["NO PREFERENCE"]
    }
  },

  {
    pentitle: "MUJI COMPACT GEL PEN 0.5",
    desc: "Short and stubby. Very smooth, uses water based ink. Inky pen but dries very fast.",
    match: {
      surface: ["PAPER PRODUCTS", "NO PREFERENCE"],
      weight: ["MEDIUM", "NO PREFERENCE"],
      ink: ["INKIER", "FAST-DRYING", "NO PREFERENCE"],
      feel: ["LIGHTWEIGHT", "NO PREFERENCE"],
      body: ["CHUNKY", "NO PREFERENCE"],
      grip: ["NO GRIP", "NO PREFERENCE"],
      closure: ["CAPPED", "NO PREFERENCE"],
      colour: ["COLOUR OPTIONS", "NO PREFERENCE"]
    }
  },

];

$(".option").click(function(){

  let option = $(this).text().trim();
  let stepID = $(this).closest(".step").attr("id");

  selections[stepID] = option;
  console.log(selections);


  // if NOT last step, just go forward
  if (stepID !== "colour") {
    $(this).closest(".step").hide().next(".step").show();
    return;
  }

  // LAST STEP, run your code
  let result = null;

  for (let pen of pens) {
    if (matches(selections, pen.match)) {
      result = pen;
      break;
    }
  }

  $(".step").hide();

  if (result) {
    $("#res").show();
    $("#pentitle").text(result.pentitle);
    $("#desc").text(result.desc);

    let qualities = [];

    for (let category in selections) {
      let value = selections[category];

      if (value !== "NO PREFERENCE") {
        qualities.push(value);
      }
    }

    $("#qual").text("FOR " + qualities.join(", "));
  }

  if (result === null) {
    $(".error").show();
  }

//});

/*
let result = null;

// 1. Find matching pen (no index variable)
for (let pen of pens) {
  if (matches(selections, pen.match)) {
    result = pen;
    break;
  }
}

// 2. If we found a match, update the page
if (result) {
  $("#pentitle").text(result.pentitle);
  $("#desc").text(result.desc);

// 3. Build qualification text
  let qualities = [];

  for (let category in selections) {
    let value = selections[category];

    if (value !== "NO PREFERENCE") {
      qualities.push(value);
    }
  }

  $("#qual").text("FOR " + qualities.join(", "));
}
if (result === null) {
  $(".step").hide();
  $(".error").show();
}
*/


/*
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
*/
});