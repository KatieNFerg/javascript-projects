let str = "abcd";
console.log(str.slice(0,1) + str.slice(str.length-1, str.length));

/*function getUserChoice(userInput) {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("User input error.");
    }
}
console.log(getUserChoice('rock'));
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper'
    } else {
        num === 2;
        return 'scissors'
    }
}
console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log("Game is a tie.")
    } else if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computer won'
        } else{
            return 'user won'
        } else if (userChoice === 'paper'){
            if(computerChoice === 'scissors'){
                return 'computer won'
            } else{
                return 'user won'
            } else {
                (userChoice === 'scissors')
                if(computerChoice === 'rock'){
                    return 'computer won'
                } else {
                    return 'user won.'
                }
            }
        }
    }
}
function playGame(determineWinner(userChoice, computerChoice)){

}
console.log(playGame);*/