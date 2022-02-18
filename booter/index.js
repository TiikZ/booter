process.title = `Tikz Boter V.1`;
var readline = require('readline');
const colors = require('colors');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Fake booter by Tikz#8822'.bgBrightBlue);

rl.question("Please enter the url/ip to down ", function(answer) {
  setInterval(() => {
    process.title = `⡿ Stressing ${answer}`;
    setTimeout(function(){ 
      process.title = `⣟ Stressing ${answer}`;
    }, 50);
    setTimeout(function(){ 
      process.title = `⣯ Stressing ${answer}`;
    }, 100);
    setTimeout(function(){ 
      process.title = `⣷ Stressing ${answer}`;
    }, 150);
    setTimeout(function(){ 
      process.title = `⣾ Stressing ${answer}`;
    }, 200);
    setTimeout(function(){ 
      process.title = `⣽ Stressing ${answer}`;
    }, 250);
    setTimeout(function(){ 
      process.title = `⣻ Stressing ${answer}`;
    }, 300);
    setTimeout(function(){ 
      process.title = `⢿ Stressing ${answer}`;
    }, 350);
  }, 400);

  setInterval(function() {
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    console.log("Used ".yellow +ip.white+ " to DDoS ".yellow +answer.white)
  }, 5);
});