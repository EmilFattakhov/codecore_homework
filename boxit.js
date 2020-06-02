let names = process.argv; 
let longest = 0; 


// function to draw Top Border

    const drawTopBorder = function (longest) {
    let line = "";
    let topLine = "";
        for (let i = 1; i <= longest + 2; i++) {
        line += "\u2501";
        }
    topLine = "\u250F" + line + "\u2513"
    return topLine;
}

// function to draw Bottom Border

    const drawBottomBorder = function (longest) {
    let line = "";
    let bottomLine = "";
        for (let i = 1; i <= longest + 2; i++) {
        line += "\u2501";
        }
    bottomLine = "\u2517" + line + "\u251B"
    return bottomLine;
    }

// function to draw Middle Border 
    const drawMiddleBorder = function (longest) {
    let line = "";
    let middleLine = "";
        for (let i = 1; i <= longest + 2; i++) {
        line += "\u2501";
        }
    middleLine = "\u2523" + line + "\u252B ";
    return middleLine;
    }


// identify the longest name from process.argv to calculate the length of the box 
    const boxLength = function (names) {
        for (let i = 2; i < names.length ; i++) {
            if (names[i].length > longest) {
                longest = names[i].length;
            }  
        }
        return longest; 
    }


// function to draw box
    let drawBox = function () {
        boxLength(names); 
        // add topBorder
        console.log(drawTopBorder(longest));
        let space = " "; 
        for (let i = 2; i < names.length - 1; i++) {
            let distanceToRightBorder = longest - names[i].length + 2;    
            console.log("\u2503" + names[i] + space.repeat(distanceToRightBorder) + "\u2503");
            console.log(drawMiddleBorder(longest));
        }
        // add last string without drawing horizontal line under it
        console.log("\u2503" + names[names.length -1] + space.repeat(longest - names[names.length -1].length + 2) + "\u2503")
        // add bottomBorder
        console.log(drawBottomBorder(longest));
    }

console.log(drawBox());