status1 = "";
objects = [];
x1 = 0;
y1 = 0;
height1 = 0;
width1 = 0;
name1 = "";
times=0;
function preload() {
    pic = loadImage("Bedroom.png");
}
function draw() {
    image(pic, 0, 0, 700, 400);
    noFill();
    if (status1 == true) {
        console.log(objects);

        for(i=0; i<objects.length; i++){
            x1 = objects[i].x;
            y1 = objects[i].y;
            width1 = objects[i].width;
            height1 = objects[i].height;
            name1=objects[i].label;
            confidence=floor(objects[i].confidence*100);
            if(times == i){
                r=random(0,255);
                g=random(0,255);
                b=random(0,255);
                times=times+1;
            }
            stroke(r,g,b);
            rect(x1, y1, width1, height1);
            text(name1+" "+confidence+"% confident", x1+5,y1+15);
        }
       
    }
}
function setup() {
    canvas = createCanvas(700, 400);
    canvas.center();
    object_detection = ml5.objectDetector('cocossd', loaded)
    document.getElementById("status").innerHTML = "Detecting objects";
}
function loaded() {
    console.log("cocoSSD has loaded");
    status1 = true;
    object_detection.detect(pic, gotresults)
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
        document.getElementById("status").innerHTML = "Objects Detected";

    }
}