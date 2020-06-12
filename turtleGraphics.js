// start position (x, y)
let track = [];
let direction = "right";

class Turtle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        track.push([this.x, this.y]);
    }

    forward (step) {
     switch (direction) {
         case "right": this.x = this.x + step; break;
         case "left": this.x = this.x - step ; break;
         case "up": this.y = this.y + step ; break;
         case "down": this.y = this.y + step ; break;
     }
        track.push([this.x, this.y]);
    }

    right () {
        switch (direction) {
            case "right": direction = "down" ; break;
            case "left": direction = "up" ; break;
            case "up": direction = "right" ; break;
            case "down": direction = "left" ; break;
        }
    }

    left () {
        switch (direction) {
            case "right": direction = "up" ; break;
            case "left": direction = "down" ; break;
            case "up": direction = "left" ; break;
            case "down": direction = "right" ; break;
        }
    }

    allPoints () {
        console.log(track);
    }

    print () {
        for (let i = 0; i < track.length; i++) {
            console.log(track[i]);
        }

    }
}

let Turtle2 = new Turtle(0,3);
    Turtle2.forward(3);
    Turtle2.left();
    Turtle2.forward(2);
    Turtle2.right();
    Turtle2.forward(1);
    Turtle2.allPoints();
    Turtle2.print();


// print method that draws the path that the turtle walked over as a string and logs it into the console
// should use the array of coordinates returned by .allPoints() as your starting point




