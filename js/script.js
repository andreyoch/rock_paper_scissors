/* 
1)Create a function computer play
2)create a varibale and put Generatateda random number and round it
3)Assign each random number to each word(3)
4)return word
*/

function computerPlay() {
  let number = Math.floor(Math.random(1, 3) * 3);
  let word;
  switch (number) {
    case 0:
      word = 'Rock';
      break;
    case 1:
      word = 'Paper';
      break;
    case 2:
      word = 'Scissors';
      break;
    default:
      console.error('Error in ComputerPlay function!');
  }

  return word;
}

/* 
1)Make playerSelection to Lower Case 
2)if playerSelecion === rock & computer selection ===scissors,player win
3)if playerSelection === paper & computer selection === rock.player win
4)if playerSelection === scisors & computer selection === paper,player win
5)if playerSelection === computerSelection,tie
6)Else computer win 
7)write result in variable result
8)return result
*/
function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = `You win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = `You win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = `You win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (playerSelection === computerSelection) {
    result = `Tie your input is "${capitalizeFirstLetter(
      playerSelection
    )}" and computer input is "${capitalizeFirstLetter(computerSelection)}"`;
  } else {
    result = `You loose! ${capitalizeFirstLetter(
      playerSelection
    )} dont beat ${capitalizeFirstLetter(computerSelection)}`;
  }
  return result;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* 
Game function
1)Play round (call single round function)
2)create a varibale userScore
3)create a variable computerScore
4)if singleRound contains win,add 1 score to user, else if singleRound contains tie do nothing,else add 1 score to computer
5)Show result of this round(callFunction) and score of the game(User score: computer score)
6)repeat 5 times
*/

function game() {
  let userScore = 0;
  let computerScore = 0;
  let showScore = () =>
    console.log(`You: ${userScore} - Computer: ${computerScore}`);

  for (let i = 0; i < 5; i++) {
     let userInput = prompt('Please enter word');
     while (true) {
        if (userInput === null || userInput === '') {
           userInput = prompt('Please enter word');
        } else {
           break;
        }
     }
    let roundResult = singleRound(userInput, computerPlay());

    if (roundResult.includes('win')) {
      console.log(roundResult);
      userScore++;
      showScore();
    } else if (roundResult.includes('loose')) {
      console.log(roundResult);
      computerScore++;
      showScore();
    } else if (roundResult.includes('Tie')) {
      console.log(roundResult);
      showScore();
    } else {
      console.roundResult;
      computerScore++;
      showScore();
    }

    console.log('\n');
  }
}

 game();
