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
        for (let i = 2; i < names.length; i++) {
            let distanceToRightBorder = longest - names[i].length + 1;
            let space = " "; 
            console.log(drawTopBorder(longest));
            console.log("\u2503 " + names[i] + space.repeat(distanceToRightBorder) + "\u2503");
            console.log(drawBottomBorder(longest));
        }
    }

console.log(drawBox());