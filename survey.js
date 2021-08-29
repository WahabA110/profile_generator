const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello, what is your name? ', (answer) => {
  console.log(`Nice to meet you ${answer}.`);

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Oh, I like ${answer} too.`);

    rl.question("Who do you listen to while doing that? ", (answer) => {
      console.log(`I think ${answer} is a great artist.`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`That's a great choice.`);

        rl.close();
      
      });
    
    });
  
  });

});

