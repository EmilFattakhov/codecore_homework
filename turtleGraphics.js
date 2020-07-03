// start position (x, y)
let track = [];
let direction = "right";
let line0 = [];let line1 = [];let line2 = [];let line3 = []; let line4 = [];
let line5 = []; let line6 = [];let line7 = [];let line8 = [];let line9 = [];
const space = "-";
const footprint = "#";
let finalLine0 = [];let finalLine1 = [];let finalLine2 = [];let finalLine3 = [];let finalLine4 = [];let finalLine5 = [];let finalLine6 = [];
let finalLine7 = [];let finalLine8 = []; let finalLine9 = [];

 
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
         case "up": this.y = this.y - step ; break;
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
       let maxX = 0;
       let maxY = 0;
       
       for (let tracks = 0; tracks < track.length; tracks++) {
                if (track[tracks][0] > maxX) {
                 maxX =  track[tracks][0];
                }
                if (track[tracks][1] > maxY) {
                maxY = track[tracks][1];
                }
        }

        let mapPoints = [];

        for (let coordinateY = 0; coordinateY < maxY; coordinateY++) {
            for (let coordinateX =0 ; coordinateX < maxX; coordinateX++) {
                mapPoints.push([coordinateY,coordinateX]);
            }
        }
        let finalString = "";
        let currentRow = 0;
        
        for (let i = 0; i < mapPoints.length ; i++ ) {
            let pointXMap = mapPoints[i][0],
            pointYMap = mapPoints[i][1];
            if (pointYMap !== currentRow) {
                finalString += "\n"
                currentRow++;
            }
            for (let y = 0; y < track.length ; y++) {
                let pointXTrack = track[y][0],
                pointYTrack = track[y][1];
                if (pointXMap === pointXTrack & pointYMap === pointYTrack)  {
                    finalString += "#"
                }

                else {
                    finalString += "-"
                }
              
            }
        }
        console.log(finalString) ;
}
}

let Turtle2 = new Turtle(0,0);
    Turtle2.forward(3);
    Turtle2.right();
    // Turtle2.forward(1);
    // Turtle2.left();
    // Turtle2.forward(4);
    // Turtle2.right();
    // Turtle2.forward(5);
    // Turtle2.right();
    // Turtle2.forward(1);
    Turtle2.allPoints();
    Turtle2.print();

