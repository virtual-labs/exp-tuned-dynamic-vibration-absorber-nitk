let F0,w,k1,k2,m1,m2;

function varinit() {
  varchange();
  $("#FoSlider").slider("value", 15);
  $("#FoSpinner").spinner("value", 15);

  $("#wSlider").slider("value", 2.8);
  $("#wSpinner").spinner("value", 2.8);

  $("#k1Slider").slider("value", 100);
  $("#k1Spinner").spinner("value", 100);

  $("#m1Slider").slider("value", 200);
  $("#m1Spinner").spinner("value", 200);

  $("#k2Slider").slider("value", 20000);
  $("#k2Spinner").spinner("value", 20000);

  $("#m2Slider").slider("value", 100);
  $("#m2Spinner").spinner("value", 100);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Variable stiffness slider and number input types
  $("#FoSlider").slider({ max: 15, min: 10, step: 1 }); // slider initialisation : jQuery widget
  $("#FoSpinner").spinner({max: 15, min: 10, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#FoSlider").on("slide", function (e, ui) {
    $("#FoSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#FoSpinner").on("spin", function (e, ui) {
    $("#FoSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#FoSpinner").on("change", function () {
    varchange();
  });

  //Variable mass slider and number input types
  $("#wSlider").slider({ max: 8.5, min: 1, step: 0.01 }); // slider initialisation : jQuery widget
  $("#wSpinner").spinner({ max: 8.5, min: 1, step: 0.01 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#wSlider").on("slide", function (e, ui) {
    $("#wSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#wSpinner").on("spin", function (e, ui) {
    $("#wSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#wSpinner").on("change", function () {
    varchange();
  });

  //Variable damping slider and number input types
  $("#k1Slider").slider({ max: 1000, min: 100, step: 100}); // slider initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 1000, min: 100, step: 100}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (e, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (e, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  //Variable magnitude slider and number input types
  $("#m1Slider").slider({ max: 800, min: 200, step: 10 }); // slider initialisation : jQuery widget
  $("#m1Spinner").spinner({ max: 800, min: 200, step: 10}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#m1Slider").on("slide", function (e, ui) {
    $("#m1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Slider").on("spin", function (e, ui) {
    $("#m1Spinner").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("change", function () {
    varchange();
  });

  //Variable frequency slider and number input types
  $("#k2Slider").slider({ max: 20000, min: 100, step: 100 }); // slider initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 20000, min: 100, step: 100 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (e, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin touchstart", function (e, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#k2Spinner").on("change", function () {
    varchange();
  });
 
  //Variable frequency slider and number input types
  $("#m2Slider").slider({ max: 500, min: 10, step: 10}); // slider initialisation : jQuery widget
  $("#m2Spinner").spinner({max: 500, min: 10, step: 10}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#m2Slider").on("slide", function (e, ui) {
    $("#m2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("spin touchstart", function (e, ui) {
    $("#m2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#m2Spinner").on("change", function () {
    varchange();
  });
 

  // $("#frequencySpinner").on("touchstart", function (e) {
  //   // Your touch event logic here
  //   varchange();
  // });
  varupdate();
}

function varupdate() {
  $("#FoSlider").slider(
    "value",
    $("#FoSpinner").spinner("value")
  );
  $("#wSlider").slider("value", $("#wSpinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#m1Slider").slider(
    "value",
    $("#m1Spinner").spinner("value")
  );
  $("#k2Slider").slider(
    "value",
    $("#k2Spinner").spinner("value")
  );

  $("#m2Slider").slider(
    "value",
    $("#m2Spinner").spinner("value")
  );
  
  F0 = $("#FoSpinner").spinner("value");
  w = $("#wSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1= $("#m1Spinner").spinner("value");
  k2= $("#k2Spinner").spinner("value");
  m2= $("#m2Spinner").spinner("value");




  // width = document.querySelector("#canvas-container").width;
  // height = document.querySelector("#canvas-container").height;
  // document.querySelector("#mass").innerHTML =  .toFixed(4) + " rad/s"; //Displaying values
  // document.querySelector("#k").innerHTML = η.toFixed(4);
  // document.querySelector("#c").innerHTML = z.toFixed(4);
}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}
