const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');


app.use(express.static(path.join(__dirname, 'app')));

// serve these pages
app.get('/mm', (req, res) => {
  //res.send("Hello World!"));
  res.status(200).sendFile(path.resolve(__dirname, '', 'app/mm', 'mm.html'));
});

app.get('/mm/api', (req, res) => {
  if (req.query.code in people) {
    res.json(people[req.query.code]);
  } else {
    res.json({error: "no person with that code."});
  }
});

// start listening for requests
app.listen(port, () => { console.log(`Listening on port ${port}`); });









let abilities = {
  pickpocket: {name: "Pick-Pocket", desc: "steal money blah blah blah"},
  letsGossip: {name: "Let's Gossip", desc: "steal money blah blah blah"},
  aMomentOfPassion: {name: "A Moment of Passion", desc: "steal money blah blah blah"}
};


// setup character data here
let blaiseSadler = {
  name: "Blaise Sadler",
  gender: "F",
  desc: "an aging saloon madame who is known to be selfish and unscrupulous.",
  scenarioInfo: "",
  relations: [
    {name: "Kalamata Kate", desc: "You are her boss." }
  ],
  items: [
    "Half of a map to Zeke Calhoun's mine, including Dead Man's Bluff",
    "3 marked playing cards",
    "$21"
  ],
  abilities: [
    abilities.pickpocket,
    abilities.letsGossip,
    abilities.aMomentOfPassion
  ],
  goals: [
    "Get $2000 so you can retire OR Get a share in Zeke Calhoun's mine",
    "Decide what to do with the marked cards",
    "Decide what to do with your half of the map"
  ],
  secrets: [
    "You saw <b>Doc Fairaday</b> cheat against Zeke Calhoun, and you have the cards to prove it",
    "Zeke Calhoun gave you part of the map to his silver mine before he died"
  ],
  clue: "There is something sinister about Elijah Entwhistle"
};




let people = {
  "DUCK": {person: "Carolyn", character: blaiseSadler}
};















// TO RUN
// node --inspect index.js
