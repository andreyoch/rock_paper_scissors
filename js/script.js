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
computerSelection = computerSelection.toLowerCase()
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

