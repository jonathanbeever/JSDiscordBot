const Eris = require("eris");

const SimulationWords = 
  ["simulation", 
   "simulacra", 
   "signs", 
   "misinformation", 
   "fake news"]
// Checks for terms in this category as the input text in order to stimulate bot response.
const BarthesWords = ["item1", "item2", "item3", "item4", "item5"];
const BaudWords = ["Baud1", "Baud2", "Baud3", "Baud4", "Baud5"];
// these two lists define the items with which the bot can respond

  const bot = new Eris(process.env.Discord_token);
// calls the .env file secret, to protect the Discord token. Replace "Discord_token" with the name (key) of your token.


bot.on("ready", () => { 
  // When the bot is ready
    console.log("Ready!"); 
  // Log "Ready!"
});

bot.on("error", (err) => {
  console.error(err); 
  // response if there is an error
});

  bot.on("messageCreate", (msg) => { 
    // When a message is created...
    if(SimulationWords.includes(msg.content)){  
      const BarthesRandomArrayLocation = Math.floor(Math.random()*(BarthesWords.length-1));
      //Get a random location from the Barthes phrase array (-1 due to zero based index), then
      const BaudRandomArrayLocation = Math.floor(Math.random()*(BaudWords.length-1)); 
      //Get a random location from the Baud phrase array (-1 due to zero based index), then
      const message = BarthesWords[BarthesRandomArrayLocation].valueOf() + " " + BaudWords[BaudRandomArrayLocation].valueOf();
      //Concatenate the two phrases together, with a space between them.
      bot.createMessage(msg.channel.id, message);
      //Send the message.
    } else if(msg.content === "Bauthrillard") { 
      // Otherwise, if the message is the bot name...
        bot.createMessage(msg.channel.id, "Delighted to make your acquaintance, you agent of metamodernism!");
        // ...respond thusly.
    }
});

bot.connect(); 
  // Get the bot to connect to Discord
// preliminary code from https://github.com/abalabahaha/eris
// procedure from https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs
// Code assist by Peter Forney - https://www.linkedin.com/in/peterforney
