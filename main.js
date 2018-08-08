$(document).ready(function() {
  // Variables
  var name;
  var myp5; 
  var canvasContainerId = "sketchContainer";
  var $submitButton = $("#submitButton");
  var $nameInput = $("#nameInput");

  function init() {
    $submitButton.on('click', drawName); 
  }

  function drawName() {
    name = $nameInput.val();
    if(myp5) { //remove the old one first
      // FIXME: is this the kosher p5 way of doing this?
      myp5.remove()
    }
    if(name) {
      // Initialize our p5 instance, drawing into the 'sketchContainer' div 
      myp5 = new p5(s, canvasContainerId); 
      console.log(myp5);
    }
    return;
  }

  // p5 instructions:
  var s = function( p ) {
    p.setup = function() {
      p.createCanvas(640, 480); 
    };

    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(0);
      } else {
        p.fill(255);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
      p.fill(0, 102, 153);
      p.text(`Hello ${name}!`, 50, 100) // FIXME: should this use the global? pass it in
    };
  }; 

  init();
});
