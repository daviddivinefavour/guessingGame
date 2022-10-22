const prompt = require("prompt-sync")({ sigint: true });

const sendPrompt = (message)=> prompt(`${message} --> `)
const showStats = (username,chances,level)=>console.log(`\nPlayer: ${username}\nLevel: ${level}\nChances Left: ${chances}\n`);
const onPass = ()=>console.log('Congratulations!!! You guessed it right.\n');
const onFail = ()=>console.log('Oops... not quite right\n');
const generateRandomNumber = (level)=> Math.floor((Math.random() * (level+1)) + 1)

module.exports = {generateRandomNumber,sendPrompt,showStats,onFail,onPass}