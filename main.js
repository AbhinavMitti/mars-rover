canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
mars_images_of_nasa = ["mars.jpg","mars_image_2.jpg","mars_image_3.jpg","mars_image_4.jpg"];

random_background_image = Math.floor(Math.random()*4)
console.log(random_background_image)



rover_width = 100
rover_height = 90;

background_image = mars_images_of_nasa[random_background_image];
rover_image = "rover.png";

rover_Y = 10;
rover_X = 10;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgtag, rover_X, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_Y >= 0) {
        rover_Y = rover_Y - 10;

        console.log("When up arrow is pressed,x =" + rover_X + "y =" + rover_Y);
        uploadBackground()
        uploadRover()
    }

}

function down() {
    if (rover_Y <= 510) {
        rover_Y = rover_Y + 10;

        console.log("When down arrow is pressed,x =" + rover_X + "y =" + rover_Y);
        uploadBackground()
        uploadRover()
    }
}

function left() {
    if (rover_X >= 0) {
        rover_X = rover_X - 10;

        console.log("When left arrow is pressed,x =" + rover_X + "y =" + rover_Y);
        uploadBackground()
        uploadRover()
    }
}

function right() {
    if (rover_X <= 700) {
        rover_X = rover_X + 10;

        console.log("When right arrow is pressed,x =" + rover_X + "y =" + rover_Y);
        uploadBackground()
        uploadRover()
    }
}

