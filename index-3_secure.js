const Eris = require("eris");
const SimulationWords = 
  ["simulacra", 
   "signs", 
   "misinformation", 
   "fake news",
   "simulacrum",
   "simulacra",
   "procession",
   "sign",
   "signification",
   "signifiance",
   "simulation",
   "simulations",
   "real",
   "reality",
   "hologram",
   "hyperreal",
   "hypereality",
   "hypercommodity",
   "hyperrealism",
   "precession",
   "Baudrillard",
   "Barthes",
   "appearances",
   "meaning",
   "seduction",
   "image",
   "images",
   "implosion",
   "postmodern",
   "postmodernity",
   "modern",
   "structural",
   "structuralism",
   "structuralist",
   "poststructuralism",
   "signified",
   "signifier",
   "text",
   "technology",
   "denotation",
   "connotation",
   "message"]
// Checks for terms in this category as the input text in order to stimulate bot response.
const BarthesWords =
  ["a function only has meaning insofar as it occupies a place in the general action of an actant, and this action is turn receives its final meaning from the fact that it is narrated, entrusted to a discourse which possesses its own code", 
   "refuse to fix meaning", 
   "unity lies not in its origin but in its destination", 
   "the text is experienced only in an activity of production", 
   "closes on a signified",
   "the tyranny of meaning",
   "structure is respected and yet nothing seduces",
   "the ‘grain’ is the body in the voice as it sings, the hand as it writes, the limb as it performs",
   "the methodological interest of trick effects is that they intervene without warning in the plan of denotation",
   "knowing that a system which takes over the signs of another system in order to make them its signifiers is a system of connotation, we may say immediately that the literal image is denoted and the symbolic image connoted",
   "the image, in its connotation, is thus constituted by an architecture of signs drawn from a variable depth of lexicons",
   "signifiance, a word which has the advantage of referring to the field of the signifier (and not of signification)"];
const BaudWords = 
  ["simulation is no longer that of a territory", 
   "a generation by models of a real without origin or reality", 
   "the precession of simulacra", 
   "the desert of the real itself this omnipotence of simulacra", 
   "Disneyland is a perfect model of all the entangled orders of simulacra",
   "all the sexual, psychic, somatic recycling institutes, which proliferate in California",
   "pleasure is the microscopic simulation that allows the real to pass into the hyperreal",
   "no more violence or surveillance: only ‘information,” secret virulence, chain reaction, slow implosion, and simulacra of spaces in which the effect of the real again comes into play",
   "that is where simulation begins",
   "this is what terrorism is occupied with as well: making real, palpable violence surface in opposition to the invisible violence of security",
   "either information produces meaning… or information has nothing to do with signification",
   "ever since Narcissus bent over his spring",
  "animals must be made to say that they are not animals",
  "one animals had a more sacred, more divine character than men",
  "all of the real is residual",
  "the university is in ruins",
  "I observe, I accept, I assume, I analyze the second revolution, that of the twentieth century, that of postmodernity which is the immense process of the destruction of meaning, equal to the earlier destruction of appearances",
  "He who strikes with meaning is killed by meaning"];
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
  if (msg.author.bot) return;
  //Prevents replying to BOT messages
  var messageToSend = "";
  //Variable to store message
  var foundIt = false;
  //Variable to track whether we found a simulation word
  SimulationWords.forEach((SimulationWord) => {
       if(msg.content.includes(SimulationWord) && foundIt == false){
         foundIt = true;
         //Found a word. Set variable to true
        const BarthesRandomArrayLocation = Math.floor(Math.random()*(BarthesWords.length-1));
        //Get a random location from the Barthes phrase array (-1 due to zero based index), then
        const BaudRandomArrayLocation = Math.floor(Math.random()*(BaudWords.length-1)); 
        //Get a random location from the Baud phrase array (-1 due to zero based index), then
        const message = BarthesWords[BarthesRandomArrayLocation].valueOf() + "  " + BaudWords[BaudRandomArrayLocation].valueOf() + ".";
        //Concatenate the two phrases together, with a space between them.
        messageToSend = message.charAt(0).toUpperCase() + message.slice(1)
        // Set variable to the generated message to be sent outside of the foreach loop
       }
  });
  
  if (messageToSend != "") {
      bot.createMessage(msg.channel.id, messageToSend);
      //Send the message.
  }  
       if(msg.content === "Bauthrillard") { 
        // Otherwise, if the message is the bot name...
          bot.createMessage(msg.channel.id, "Delighted to make your acquaintance, you agent of metamodernism!");
          // ...respond thusly.
       } else if(msg.content === "Beever") { 
        // Otherwise, if the message is my name...
          bot.createMessage(msg.channel.id, "Oh! Dr. Beever!!  He’s simply the best. Couldn’t ask for a better, more humble professor than he! Please do give him praise and stellar ratings!");
          // ...respond thusly.
      }
  });

       
bot.connect(); 
  // Get the bot to connect to Discord
// preliminary code from https://github.com/abalabahaha/eris
// procedure from https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs
// Code assist by Peter Forney - https://www.linkedin.com/in/peterforney
