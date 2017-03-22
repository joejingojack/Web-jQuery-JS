window.onload = function() {
  var canvas = document.getElementById('myCanvas'), 
      draw = document.getElementById('draw'),
      clr = document.getElementById('clear'), 
      context = canvas.getContext('2d');
  var grad = context.createLinearGradient(100,0,200,0);

// Start current shape at 0
  var currentShape = 0;
  var shapes = [shapeOne, shapeTwo, shapeThree];
   
function shapeOne(){
    context.beginPath(); // circle
    context.fillStyle = 'blue';
    context.arc(200, 100, 100, 0 , 2 * Math.PI, false);
    context.fill();
    context.lineWidth = '1';
    context.stroke();
    context.closePath(); 
  }

  
function shapeTwo(){
    context.beginPath(); // rectangle
    grad.addColorStop(0,"#0033cc");
    grad.addColorStop(1,"#0066ff");
    context.fillStyle=grad;
    context.fillRect(120,40,160,120);
    context.strokeStyle="black";
    context.strokeRect(120,40,160,120);
    context.closePath();
  }

function shapeThree(){
    context.beginPath(); // line
    context.moveTo(280, 40);
    context.lineTo(120, 160);
    context.stroke();
    context.closePath();
  }

draw.addEventListener('click', function(){
    // Check if there is a function available for the current shape.
    if(shapes[currentShape]) {
        // If so, call that function and add one to the current shape.
        shapes[currentShape]();
        currentShape += 1;
    } else { // If the function isn't available, then lets assume we have already drawn all the shapes and need to start again.
         currentShape = 0;
         shapes[currentShape]();
    }
}, false); 

  clr.addEventListener('click', function(){
    canvas.width = canvas.width;
  }, false);  

};