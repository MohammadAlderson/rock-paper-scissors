const objects = {
  'rock': 1,
  'paper': 2,
  'scissors': 3
}

const rockBtn = document.getElementById('rock');

const paperBtn = document.getElementById('paper');

const scissorsBtn = document.getElementById('scissors');

const playBtn = document.getElementById('play');

const resultElement = document.getElementById('result')

let userChoiceBtn = '';

rockBtn.addEventListener('click', function(e) {
  rockBtn.className = 'btn btn-active';
  paperBtn.className = 'btn';
  scissors.className = 'btn';
  userChoiceBtn = 'rock';
  resultElement.innerHTML = '';
})

paperBtn.addEventListener('click', function(e) {
  rockBtn.className = 'btn';
  paperBtn.className = 'btn btn-active';
  scissors.className = 'btn';
  userChoiceBtn = 'paper';
  resultElement.innerHTML = '';
})

scissorsBtn.addEventListener('click', function(e) {
  rockBtn.className = 'btn';
  paperBtn.className = 'btn';
  scissors.className = 'btn btn-active';
  userChoiceBtn = 'scissors';
  resultElement.innerHTML = '';
})

playBtn.addEventListener('click', function(e) {
  play();
});

function randomIntegerGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkInputAvailablity(value) {
  return value !== undefined && value !== null && value !== '';
}

function getObjectKey(object, val) {
  return Object.keys(object).find(key => object[key] === val);
}

function gameProcessor(userChoice, opponentChoice) {
  switch (userChoice) {
    case 'rock':
      return opponentChoice === 'rock' ? 'draw' : opponentChoice === 'scissors' ? 'win' : 'lose';
    case 'scissors':
      return opponentChoice === 'rock' ? 'lose' : opponentChoice === 'scissors' ? 'draw' : 'win';
    case 'paper':
      return opponentChoice === 'rock' ? 'win' : opponentChoice === 'scissors' ? 'lose' : 'draw';
    default:
      return 'Error';
  }
}

function play() {
  const isAvailable = checkInputAvailablity(userChoiceBtn);
  if (!isAvailable) {
    alert('Please select one object');
  } else {
    let randomNumber = randomIntegerGenerator(1, 3);
    let botValue = getObjectKey(objects, randomNumber);
    let result = gameProcessor(userChoiceBtn, botValue);
    resultElement.className = result;
    resultElement.innerHTML = 'You ' + result + ' ! The bot choice was: ' + botValue;
  }
}