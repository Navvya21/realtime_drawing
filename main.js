function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX + "noseY" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX- rightWristX);
    }
}

function draw(){
    background("#CEA1DF");
    document.getElementById("square_side").innerHTML = "Width and height will be-" + difference + "px";
    fill("#81e3ee");
    stroke("#b09ce5");
    square(noseX, noseY, difference);
}