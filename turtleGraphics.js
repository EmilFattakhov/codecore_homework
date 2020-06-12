// start position (x, y)
let track = [];

class Turtle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        track.push([this.x, this.y]);
    }

    forward (step) {
    if (track.length >= 2) {
        let lastTrack = track.length - 1;
        let prevTrack = track.length - 2;
        // checks if y is the same, if yes means turtle was moving to the left or right
        if (track[lastTrack][1] === track[prevTrack][1]) {
            // checks if it was moning to the right
            if (track[lastTrack][0] >= track[prevTrack][0]) {
                this.x = this.x + step;
                track.push([this.x, this.y]);
            }
            // checks if it was moning to the left
            else if (track[lastTrack][0] < track[prevTrack][0]) {
                this.x = this.x - step;
                track.push([this.x, this.y]);
            }
        }
        // check if x is the same, is yes means turtle was moving to the up or down
        if (track[lastTrack][0] === track[prevTrack][0]) {
            // checks if it was moning up
            if (track[lastTrack][1] < track[prevTrack][1]) {
                this.y = this.y - step;
                track.push([this.x, this.y]);
            }
            // checks if it was moning down
            else if (track[lastTrack][1] > track[prevTrack][1]) {
                this.y = this.y + step;
                track.push([this.x, this.y]);
            }
        }
        }
    else {
        this.x = this.x + step;
        track.push([this.x, this.y]);
        return [this.x, this.y];
    }
    }

    // right () {

    // }

    // left () {

    // }

}

let Turtle2 = new Turtle(0,3);
Turtle2.forward(3);
console.log(Turtle2);
console.log(track);


Turtle2.forward(4);
console.log(Turtle2);
console.log(track);

Turtle2.forward(1);
console.log(Turtle2);
console.log(track);

// forward function Turtle(0, 0).forward(3); *****

// right function newTurtle(0, 0).forward(3).right().forward(2);
      // figire of the turtle movement on the grid
      // start or in-between locations
      // end location

// make the same left function

// allPoints method which return an array containing all coordinates the turtle has walked over
    // return [[0, 0], [1, 3], [2,5], [3, 5], [2, 4]] for example


// print method that draws the path that the turtle walked over as a string and logs it into the console
// should use the array of coordinates returned by .allPoints() as your starting point