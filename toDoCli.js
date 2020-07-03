const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  let list = ["Make homework", "Do the dishes", "Feed a cat"];
  let isDone = ["no", "no", "no"];

console.log ("Welcome to Todo CLI");
console.log("---------------------");

function showOptions () {
    console.log("(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit");
}

function addNewTodo(todo) {
    list.push(todo);
    isDone.push("no");
    rl.question(`(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n`, checkAnswer);
}

function viewList() {
    for (let i = 0; i < list.length; i++) {
        if (isDone[i] === "no"){
         console.log(i + " [ ] " + list[i]);   
        }
        else {
        console.log(i + " ['\u2611'] " + list[i]);    
        }
    }
}
const checkAnswer = (answer) => {
    if (answer === "q") {
        console.log("See you soon!")
        rl.close();
    }
    else if (answer === "v") {
    viewList();
    rl.question(`Enter your decision \n`, checkAnswer); 
    showOptions();
    // return checkAnswer(answer);
    }
    else if (answer === "n") {
    rl.question(`What? \n`, addNewTodo)
    }
    else if (answer[0] ==="d") {
        let toDelete = parseInt(answer[1]);
        if (toDelete >= 1) {
            console.log("deleted " + list[toDelete]);
            list = list.slice(0, toDelete).concat(list.slice(toDelete +1 , list.length))
            isDone = isDone.slice(0, toDelete).concat(isDone.slice(toDelete +1 , isDone.length))
        }
        else {
            console.log(list[toDelete]);
            list = list.slice(1);
            isDone = isDone.slice(1);
        }
    showOptions();
    rl.question(`Enter your decision \n`, checkAnswer);
    }
    else if (answer[0] ==="c") {
        let toMarkDone = parseInt(answer[1]);
        console.log(list[toMarkDone] + " is marked done");
        isDone[toMarkDone] = "yes";
        showOptions();
        rl.question(`Enter your decision \n`, checkAnswer);
    }
    else {
        console.log("this is unknows answer, please choose from these options");
        showOptions();
        rl.question(`Enter your decision \n`, checkAnswer);
    }
}

rl.question(`(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n`, checkAnswer); 