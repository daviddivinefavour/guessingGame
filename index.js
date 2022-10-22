const { sendPrompt, showStats, generateRandomNumber, onPass, onFail } = require("./utilities");

console.log('Welcome to Dee\'s guessing game');
console.log('\nRULES\nYou have 3 chances at the start and would get an additional chance after passing a level.\n\n');
const username = sendPrompt('Enter your username.')
let chances = 3;
let level = 1;

const start=()=>{
     console.log(`\n\nHello ${username}, welcome!!!`);
     while (chances >= 1) {
          showStats(username,chances,level)
          console.log(`\nObjective: Guess a number between 1 and ${level +1}\n`);
          const CPU = generateRandomNumber(level)
          const player = sendPrompt('Make a guess');
          if (player == CPU) {
               onPass();
               level ++
               chances ++
          }else{
               onFail()
               chances --
          }
     }
     console.log('Game over!!!');
}

start()