let userScore = 0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");
const msgparadiv = document.querySelector(".message");
const yourscore = document.querySelector("#your-score");
const opponentscore = document.querySelector("#computer-score");
const compChoice= ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const gamedraw = ()=>{
    console.log("Game was draw.");
    msgpara.innerHTML="Game Draw. Play again ";
    msgparadiv.style.backgroundColor = "#081b31";
}

const showWinner= (userwin, userChoice , deviceChoice)=>{
    if(userwin){
        userScore++;
        yourscore.innerHTML = userScore;
        console.log(`You Won. Your ${userChoice} beats ${deviceChoice}`);
        msgpara.innerHTML=`You Won. Your ${userChoice} beats ${deviceChoice}`;
        msgparadiv.style.backgroundColor = "green";
        
    }else{
        computerScore++;
        opponentscore.innerHTML = computerScore;
        msgpara.innerHTML=`Computer  Won. ${deviceChoice} beats Your ${userChoice}`;
        msgparadiv.style.backgroundColor = "red";
        console.log("computer Won");
    }

}


const playGame = (userChoice)=>{
    const deviceChoice = compChoice();
    if(userChoice === deviceChoice){
        gamedraw();
    } else{
        let userwin = true;
        if(userChoice==="rock"){
            userwin = (deviceChoice==="paper")? false : true;
        } else if(userChoice==="paper"){
            userwin = (deviceChoice==="scissors")? false : true;
        } else{
            userwin = (deviceChoice==="rock")? false : true;
        }
        showWinner(userwin, userChoice,deviceChoice);
    }

}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    });

});