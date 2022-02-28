const Eris = require("eris");

const SimulationWords = 
  ["simulation", 
   "simulacra", 
   "signs", 
   "misinformation", 
   "fake news"]
// I check for terms in this category as the input text in order to stimulate my response.
const BarthesWords = ["item1", "item2", "item3", "item4", "item5"];
const BaudWords = ["item1", "item2", "item3", "item4", "item5"];
// here's the list of possible things I can say.
const theorywords = BarthesWords.concat(BaudWords);
// concatenates two response category arrays... I hope.
const random = Math.floor(Math.random() * theorywords.length)
// chooses a random concatenation... I hope.

const bot = new Eris("[replace with key from Discord Bot]", {
    intents: [
        "guildMessages"
    ]
});
// My token should be hidden in an .env file, but I can't figure out how to do that here. This is a security risk, were this in the wild.

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
    if(msg.content === "SimulationWords"){ 
      // If the message content is ...
        bot.createMessage(msg.channel.id, "random");
        // Send a message in the same channel with ...
    } else if(msg.content === "Bauthrillard") { 
      // Otherwise, if the message is my name...
        bot.createMessage(msg.channel.id, "Delighted to make your acquaintance, you agent of metamodernism!");
        // ...respond thusly.
      //the else if portion runs fine. But the if portion doesn't. I can't seem to call up the array. Basically - I want the script to look for a member of the first array, and respond with a member of the second. I've tried .some and .includes but can't get the syntax correct. Fracking code.
    }
});

bot.connect(); 
  // Get the bot to connect to Discord
// preliminary code from https://github.com/abalabahaha/eris
// procedure from https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs