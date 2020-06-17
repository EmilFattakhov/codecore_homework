const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  let list = ["hello", "there"];


console.log ("Welcome to Todo CLI");
console.log("---------------------");

function showOptions () {
    console.log("(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit");
}

function addNewTodo(todo) {
    list.push(todo);
    rl.question(`(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n`, checkAnswer);
}

function viewList() {
    for (let i = 0; i < list.length; i++) {
        console.log(i + " [ ] " + list[i]);
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
    // return checkAnswer(answer);
    }
    else if (answer === "n") {
    rl.question(`What? \n`, addNewTodo)
    }

}

rl.question(`Enter your decision \n`, checkAnswer); 