function  setup() {
    canvas = creatCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseRelesed(classifyCanvas);
    synth = window.speechSynthesis.synthesis;
}

function preload() {
      

    classifier = ml5.imageClassifier('DoodleNet');
}
  


function clearCanvas() {

    background('white');
}

function draw() {

    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function grotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document,getElementById('lable').innerHTML = 'Label: ' + results[0].label;
    
    document.getElementById('confidence').innerHTML = 'Confidence: ' =Maths.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}





