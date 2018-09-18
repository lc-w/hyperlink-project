function setup() {
  var canvas = createCanvas(600, 500);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder-right');

  background(255);
}
function draw() 
    { 
        if (mouseIsPressed) 
            { 
                fill(0); 
                noStroke(); 
                ellipse(mouseX, mouseY, 5, 5); 
    } 
}

function download(){
        var download = document.getElementById("download");
        var image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);

    }