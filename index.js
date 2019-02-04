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
  name: {name: "", desc: ""},
  evaluation: {name: "Evaluation", desc: "You are able to judge the exact price that you could sell an object (jewellery or goods) for.  Show Calvin an item and he will tell you it's worth.  Permanant ability."},
  interrogation: {name: "Interrogation", desc: "Spend two minutes talking forcefully to another character who must then show you a Secret.  Two uses."},
  suddenInsight: {name: "Sudden Insight", desc: "After talking for two minutes with any person, you realize that they revealed more than they intended.  They must show you everything on their “Clue” card.  Two uses."},
  flattery: {name: "Flattery", desc: "Spend at least two minutes flattering a member of the opposite sex.  Then show this card to your target, who must show you their top goal.  One use."},
  callSnake: {name: "Call Snake", desc: "Spend thirty seconds chanting in a low voice. Your wooden snake-stick will transform into a deadly poisonous snake which you can then command.  One use."},
  summonCrimsonPharaoh: {name: "Summon the Crimson Pharaoh", desc: "Certain magical objects will allow you to call the Crimson Pharaoh into being if you chant for one minute uninterupted.  He will appear from the sky."},
  thoroughAppraisal: {name: "Thorough Appraisal", desc: "After talking for two minutes with any person, they must show you all their item cards and money.  Two uses."},
  aMomentOfPassion: {name: "A Moment of Passion", desc: "Spend two minutes alone with a member of the opposite sex.  They must show you a Secret.  One use."},
  pickpocket: {name: "Pickpocket", desc: "Give this card to Calvin when you wish to pick someone's pocket in order to steal a single item or money card.  You may specify what you are stealing, but if you do not (or the victim does not have it) Calvin will take something at random.  One use"}
};




// setup character data here
let alvySpanheim = {
  name: "Alvy Spanheim",
  gender: "M",
  desc: "Ambassador of the German Consulate.",
  seenAs: "German, hearty, and a bit sinister",
  scenarioInfo: "<p>You are the ambassador of German affairs in Cairo.  As a proud German, you are keen to promote instability in areas of German enemies, including here in Egypt, which is currently under British rule.  It shouldn't take too much to rouse the native population against the foolish British – even something small like this dig could be the trigger if the archaeologists were to do something that was really unpopular with the local people</p><p>You also have a secret – you are a leading member of a secret society called The Crimson Sash, a group harking back to when a great king known as the Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.  The Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity. She has her own followers – the cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash.</p><p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash’s ancient writings declare the Crimson Pharaoh’s secret resting-place to be.  It might be good to check out the possibility that your dead lord’s body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him</p><p>That's why you were delighted when <b>Sir William</b> invited you to celebrate the opening of an ancient tomb.  It saved you the trouble of finding some excuse to visit.  And it should have been a good night, except that one of the diggers has been killed and may rather spoil the atmosphere.</p><p>To aid to your Crimson Sash activities, you set up a smuggling ring in the Luxor area.  You were originally buying artifacts in case they belonged to the Crimson Pharaoh.  However, you soon found it profitable selling them to wealthy collectors.  To your surprise, <b>Sir William Saville</b> has been a big customer of yours.  It seems that his recent digs have not been turning up decent finds, so he has been buying artifacts from your people to make his results look more impressive.  Lately he has not been paying his bills, though, and your agents have threatened to expose him as a fraud unless he pays up.  He has no idea of your identity as ‘Mr Big’ (nor does anyone else, as far as you know), and it’s better if it stays that way.</p>",
  relations: [
    {name: "Sir William Saville", person: "Wes", desc: "His archaeological group is the reason for the party.  They've made a big discovery.  That Sir William buys artifacts from you suggests that his great reputation as an archaeologist may be a little hollow." },
    {name: "Eva de Chalons", person: "Rosie", desc: "You know her of old as a dilettante with an amateur interest in Egyptology. She may be a French secret agent." },
    {name: "Shafeez Merouf", person: "Andy", desc: "Be wary – Shahfeez is a great enemy of artifact smugglers." }
  ],
  items: [
    "A small wooden stick, delicately carved into the likeness of a snake",
    "A Poisonous Scorpion.  Place this scorpion in someone's pocket and tell Calivin.  If the scorpion stings your victim, they lose their abilities until they recieve the antidote.",
    "Poison Antidote",
    "$170"
  ],
  magic: true,
  abilities: [
    abilities.evaluation,
    abilities.interrogation,
    abilities.suddenInsight,
    abilities.flattery,
    abilities.summonCrimsonPharaoh,
    abilities.callSnake
  ],
  goals: [
    {name: "The Crimson Pharaoh", desc: "Do what you can to aid his cause and hasten his return.  If you think this is his tomb and you find one of his sacred artifacts you could actually summon him tonight!"},
    {name: "Germany", desc: "Second only to your loyalty to the Crimson Sash is your love of your nation. You should seek any advantage for Germany."},
    {name: "Artifact Smuggling", desc: "Although you need to keep your identity as ‘Mr Big’ secret, you are always keen to pick up artefacts – one of the young archaeologists here might perhaps be a good source.  Young people always need money!"},
    {name: "Sir William", desc: "You do not want him to know you are ‘Mr Big’, but you are keen to find out if he can pay his debt.  If not, it may be time for his glorious career to come to an end…"}
  ],
  secrets: [
    "You are a member of the Crimson Sash, devoted to revering an ancient ruler known as The Crimson Pharaoh.",
    "You are secretly ‘Mr Big’, leader of a gang of artifact smugglers."
  ],
  clue: "<b>Sir William Saville</b> has been buying smuggled artifacts to make his own diggings seem more successful."
};



let lindsayWild = {
  name: "Linsday Wild",
  gender: "F",
  desc: "a wild by nature, brooding misfit on the archaeological scene.",
  seenAs: "moody, ambitious, and a bit sly",
  scenarioInfo: "You were raised in an orphanage in Worcestershire with no idea who your parents were.  As a child you nourished a grudge against fate in general, and specifically against your parents for abandoning you.  You decided that you would let nothing stand in the way of achieving happiness, and you channelled your fury into a fierce analytical intelligence and an astonishing capacity for hard work.  Thanks to these qualities, you overcame your disadvantages of birth and won a scholarship to Oxford University, where you are studying Archaeology under <b>Sir William Saville</b>.<p>You are not really happy, though.  You know you are a good archaeologist, but you are sure that the others despise you for your common roots.  Why, you’re not even mentioned in the newspaper report! You particularly despise that ghastly little madam <b>Helen Mackinnon</b>.  You would like nothing better than to steal away her adored <b>Hugh</b>.  Not that you have much use for <b>Hugh</b> yourself, unless closer acquaintance reveals surprising hidden depths: he is as stuck-up and arrogant as the rest of them.</p><p>Still, you’re quite enjoying the current dig success.  Your team has just uncovered the tomb of a unknown Pharaoh, and the Jade Scarab.  Both are very exciting, and you've never seen a carved scarab like this with a diamond on it's back.  It must be very rare.  <b>Sir William</b> is having a dinner to celebrate tonight and he’s invited several guests.  It should have been a good night, except that the killing may rather spoil the atmosphere.</p><p>Given that your background makes you unlikely to ever achieve great success in an archaeological career, you feel you may as well make what profit you can. And so occasionally you have been known to sell artifacts to collectors.  The Jade Scarab, a fantastic piece of workmanship, would fetch a wonderful price if you could get hold of it.  You would have to make it look like one of the others had taken it (or the natives), but you are confident that if you can get it into your possession you can do as needed.</p><p>This would not be the first artifact you have stolen – you have in your possession one called the Eye of Horus, a small inscribed malachite plaque, which you lifted from the Ashmolean Museum in Oxford.  Security there is far too lax!  Maybe one of these foreigners here for dinner might be interested in buying it.  You should be careful though, as it was initially dug up by <b>Sir William</b> and he would probably recognize it.</p><p>You know that there is a ring of artifact smugglers operating out of Luxor, controlled by a shadowy figure known only as ‘Mr Big’.  You are very keen to join this group, as it would make your life a lot easier and less risky if you could pass items you steal onto an intermediary and share the profits, rather than having to find buyers yourself.  It maybe that someone here tonight is involved in the smuggling ring, and if so you would be keen to join up.  To prove that you can be trusted and are not a spy for the authorities, you might offer them the Eye of Horus as a token of your sincerity.</p>",
  relations: [
    {name: "Sir William Saville", person: "Wes", desc: "A miserable old git who seems as determined as everyone else to ‘keep you in your place’, despite your obvious talents. Nonetheless you are always polite and fawning to his face, after all he could destroy your career utterly." },
    {name: "Hugh Carlow", person: "", desc: "A fellow archaeologist in your group and a shallow stuck-up idiot, but you will still hook him if you can, just to spite <b>Helen</b>." },
    {name: "Helen Mackinnon", person: "", desc: "A fellow archaeologist in your group and an example of everything that’s worst about Oxford – arrogant, dim and spoilt.  You detest her with a secret fury." },
    {name: "Ariadne Price-Evans", person: "", desc: "The only one of the archaeological team who is ever even slightly nice to you, you rather despise her for it (in a twisted sort of way).  But nonetheless you do feel somewhat drawn to her." },
    {name: "Shahfeez Merouf", person: "", desc: "Shahfeez is supposed to be a great enemy of artefact smugglers, so it’s important to keep your activities secret." }
  ],
  items: [
    "The Eye of Horus",
    "$10"
  ],
  magic: false,
  abilities: [
    abilities.evaluation,
    abilities.thoroughAppraisal,
    abilities.aMomentOfPassion,
    abilities.pickpocket
  ],
  goals: [
    {name: "Get money", desc: "Selling the Eye of Horus to ‘Mr Big’ will be the easiest way, if you can identify him.  Or stealing the Jade Scarab, but that would be pretty dangerous."},
    {name: "Help Sir William get the dig licence renewed", desc: "He has to convince <b>Merouf</b> to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Win Hugh Carlaw’s heart", desc: "… mostly to spite <b>Helen Mackinnon</b>, but you never know, he might be not too bad when you get to know him."},
    {name: "Gain recognition", desc: "You will probably never know who your parents were, but in the absence of their approval, that of the world in general will have to do.  You are determined to boost your reputation as a fine young archaeologist."}
  ],
  secrets: [
    "You stole the Eye of Horus from the Ashmolean Museum, and you have it with you.",
    "You have a birthmark the shape and color of a strawberry."
  ],
  clue: "You grew up in an orphanage and do not know who your parents are."
};









let people = {
  "DUCK": {person: "Carolyn", character: lindsayWild },
  "DRUM": {person: "Snuggz", character: alvySpanheim }
};










let blank = {
  name: "Blank",
  gender: "M",
  desc: "",
  seenAs: "",
  scenarioInfo: "",
  relations: [
    {name: "", person: "", desc: "" }
  ],
  items: [
    "",
  ],
  magic: false,
  abilities: [
    abilities.evaluation
  ],
  goals: [
    {name: "", desc: ""}
  ],
  secrets: [
    ""
  ],
  clue: ""
};









// TO RUN
// node --inspect index.js
