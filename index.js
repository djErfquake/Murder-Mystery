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
  interrogation: {name: "Interrogation", desc: "Spend two minutes talking forcefully to another character who must then show you a Secret they haven't shown you before."},
  suddenInsight: {name: "Sudden Insight", desc: "After talking for two minutes with any person, you realize that they revealed more than they intended.  They must show you everything on their “Clue”."},
  flattery: {name: "Flattery", desc: "Spend at least two minutes flattering a member of the opposite sex.  Then show this card to your target, who must show you their top goal."},
  callSnake: {name: "Call Snake", desc: "Spend thirty seconds chanting in a low voice. Your wooden snake-stick will transform into a deadly poisonous snake which you can then command."},
  summonCrimsonPharaoh: {name: "Summon the Crimson Pharaoh", desc: "Certain magical objects will allow you to call the Crimson Pharaoh into being if you chant for one minute uninterupted.  He will appear from the sky."},
  thoroughAppraisal: {name: "Thorough Appraisal", desc: "After talking for two minutes with any person, they must show you all their item cards and money."},
  aMomentOfPassion: {name: "A Moment of Passion", desc: "Spend two minutes alone with a member of the opposite sex.  They must show you a Secret they haven't shown you before."},
  pickpocket: {name: "Pickpocket", desc: "Give this card to Calvin when you wish to pick someone's pocket in order to steal a single item or money card.  You may specify what you are stealing, but if you do not (or the victim does not have it) Calvin will take something at random."},
  success: {name: "Success!", desc: "If you’re asked to do a Rock-Paper-Scissors challenge, you can choose to automatically succeed at it."},
  gainTrust: {name: "Gain Trust", desc: "Spend at least two minutes talking to somebody.  Then show them this card: they must show you a Secret they haven't shown you before."}
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


let ariadnePriceEvans = {
  name: "Ariadne Price-Evans",
  gender: "F",
  desc: "veteran translator of Egyptian inscriptions.",
  seenAs: "intellectual, severe, and a bit frumpy",
  background: "<p>You were raised in an orphanage in Worcestershire with no idea who your parents were. As a child you nourished a grudge against fate in general, and specifically against your parents for abandoning you. You decided that you would let nothing stand in the way of achieving happiness, and you channelled your fury into a fierce analytical intelligence and an astonishing capacity for hard work. Thanks to these qualities, you overcame your disadvantages of birth and won a scholarship to Oxford University, where you are studying Archaeology <b>under Sir William Saville</b>.</p>",
  relations: [
    {name: "Sir William Saville", person: "Wes", desc: "The leader of your dig team.  You would like to feel closer to William, especially given that he might have been the father of your child, but somehow the spirit of Harry has always stood between you.  Perhaps if one day you could get him to talk about those tragic events, the barrier of ice might be broken." },
    {name: "Hugh Carlaw", person: "", desc: "A charming young fellow on your dig team, who reminds you slightly of your lost love Harry – you feel sorry for him that his background is so poor." },
    {name: "Helen Mackinnon", person: "", desc: "Another member of your dig team.  A flightly young madam with no proper appreciation of the subject of archaeology.  You find her very tiresome and have no patience for her gigglish ways." },
    {name: "Lindsay Wilde", person: "", desc: "A hard-working and bright student on the dig team.  She is from a poor background – an orphan – and rather sneaky, you feel." },
    {name: "Shahfeez Merouf", person: "", desc: "Dig site owner.  He is dedicated to keeping Egyptian artifacts in the country, a cause of which you thoroughly approve.  You have great professional respect for Shahfeez’s work as curator of the Luxor Museum." }
  ],
  items: [
    "Cat Statuette Artifact",
    "First Aid Kit",
    "$40"
  ],
  abilities: [
    abilities.suddenInsight,
    abilities.success,
    abilities.gainTrust
  ],
  goals: [
    {name: "Help Hugh", desc: "Find out what’s up with <b>Hugh</b>, and what could have driven him to such an act. He may be in need of your sympathy.  Unless he really is a brutal murderer, of course."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince <b>Merouf</b> to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Harry's death", desc: "What really happened that day? You’ve burned to know for decades, but <b>William</b> is so coy about it. Maybe there is some way he could be opened up."},
    {name: "Artifact Smugglers", desc: "You are keen to identify and expose the villains who are robbing Egypt of its precious heritage, by trying to sell them your cat statue.  You would aim to report them to <b>Shahfeez Merouf</b> (unless <b>Shahfeez</b> is one of them, of course)."}
  ],
  secrets: [
    "You gave birth to a child with a strawberry birthmark 23 years ago.",
    "You had a brief affair with <b>Sir William Saville</b>, 24 years ago."
  ],
  clue: "The carvings on the tomb warn that a Pharaoh of great evil is buried within."
};






let lindsayWild = {
  name: "Linsday Wild",
  gender: "F",
  desc: "a wild by nature, brooding misfit on the archaeological scene.",
  seenAs: "moody, ambitious, and a bit sly",
  background: "<p>You were raised in an orphanage in Worcestershire with no idea who your parents were.  As a child you nourished a grudge against fate in general, and specifically against your parents for abandoning you.  You decided that you would let nothing stand in the way of achieving happiness, and you channelled your fury into a fierce analytical intelligence and an astonishing capacity for hard work. Thanks to these qualities, you overcame your disadvantages of birth and won a scholarship to Oxford University, where you are studying Archaeology under <b>Sir William Saville</b>.</p><p>You are not really happy, though.  You know you are a good archaeologist, but you are sure that the others despise you for your common roots.  Why, you’re not even mentioned in the newspaper report!</p>",
  motives: "<p>Given that your background makes you unlikely to ever achieve great success in an archaeological career, you feel you may as well make what profit you can.  And so occasionally you have been known to sell artifacts to collectors.  While digging earlier today, your team uncovered the Jade Scarab, an artifact that only you and your fellow archaeologists know about.  The Jade Scarab, a fantastic piece of workmanship, would fetch a wonderful price if you could get hold of it.  While everyone is distracted by the murder, it may be the perfect time to steal the Scarab.  You would have to make it look like one of the others had taken it (or the natives), but you are confident that if you can get it into your possession you can do as needed.</p><p>This would not be the first artifact you have stolen – you have in your possession one called the Eye of Horus, a small inscribed malachite plaque, which you lifted from the Ashmolean Museum in Oxford.  Security there is far too lax!  Maybe one of these foreigners here for dinner might be interested in buying it.  You should be careful though, as it was initially dug up by <b>Sir William</b> and he would probably recognize it.</p><p>You know that there is a ring of artifact smugglers operating out of Luxor, controlled by a shadowy figure known only as ‘Mr Big’.  You are very keen to join this group, as it would make your life a lot easier and less risky if you could pass items you steal onto an intermediary and share the profits, rather than having to find buyers yourself.  It maybe that someone here tonight is involved in the smuggling ring, and if so you would be keen to join up.  To prove that you can be trusted and are not a spy for the authorities, you might offer them the Eye of Horus as a token of your sincerity.</p>",
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
  abilities: [
    abilities.evaluation,
    abilities.thoroughAppraisal,
    abilities.aMomentOfPassion,
    abilities.pickpocket
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazier."},
    {name: "Get money", desc: "Selling the Eye of Horus to ‘Mr Big’ will be the easiest way, if you can identify him.  Or stealing the Jade Scarab, but that would be pretty dangerous."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince <b>Merouf</b> to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Gain recognition", desc: "You will probably never know who your parents were, but in the absence of their approval, that of the world in general will have to do.  You are determined to boost your reputation as a fine young archaeologist."}
  ],
  secrets: [
    "You stole the Eye of Horus from the Ashmolean Museum, and you have it with you.",
    "You have a birthmark the shape and color of a strawberry."
  ],
  clue: "You grew up in an orphanage and do not know who your parents are."
};




let williamSaville = {
  name: "Sir William Saville",
  gender: "M",
  desc: "renowned archaeologist and leader of the dig.",
  seenAs: "very British, dynamic, and brilliant",
  scenarioInfo: "<p>The opening of this tomb and the finding of the Jade Scarab should set the seal on your long and distinguished archaeological career, which has seen you rise to the very peak of your profession.  The Jade Scarab is a magnificent specimen and you've never seen a carved scarab like this with a diamond on it's back.  How very serendipitous that you had organised dinner for this evening – just when you have a truly remarkable find, the Jade Scarab, to celebrate.</p><p>As well as the other expedition members, you’ve invited three guests.  <b>Shahfeez Merouf</b>, as curator of the Luxor Museum, just had to be invited.  You need <b>Shahfeez</b> to renew your dig licence.  <b>Alvy Spanheim</b> is the German Embassador and you’ve heard that he has an interest in archaeology.  As for <b>Eva de Chalons</b>, that was a shot in the dark.  You’ve only heard of her reputation as a glamorous socialite, so it was a pleasant surprise when she accepted.  It should have been a good night, except that one of the diggers has been killed.  Still, you’re not going to let something like that upset your dinner party.</p><p>At least you didn’t have to steal the Jade Scarab – unlike the discovery that made your name, the Eye of Horus.  Harry Flinders really discovered the Eye of Horus: you were both young and daring, but it was he who translated the ancient map, he who identified the correct patch of sand to start digging, and he who should have got the credit for the discovery – had he not unfortunately died of scorpionbite the very same day.</p><p>You mourned publicly, dedicating the find to his memory, and were so convincing that you successfully won the heart (temporarily) of Harry’s fiancée <b>Ariadne Price-Evans</b>.  Ever since, however, your guilty secret has gnawed at you – it was you, consumed with envy and bitterness, who put the fatal scorpion into Harry’s boot.</p><p>Maybe even now it’s not too late to rekindle the flame with <b>Ariadne</b> – Harry’s death is far in the past, and you are still a fine figure of a man.  You are not entirely sure why she broke your liaison off in the first place: she just went away without warning one day, and you didn’t hear of her again for several years, by which time her own archaeological career was under way.</p><p>You have another guilty secret.  In recent years your finds have been tailing off (all the best tombs have already been found) and you have resorted to buying black-market artefacts and pretending that they are your own finds.  Fortunately there is an active artefact-smuggling ring operating around Luxor, run by a mysterious figure known only as ‘Mr Big’, and you have been a good customer to them.</p><p>You have no idea who Mr Big might be, but you have a sneaking suspicion that it may be one of your guests tonight – <b>Merouf</b>, <b>de Chalons</b> or <b>Spanheim</b> – which is partly why you invited them.  You are considerably in debt to the smugglers, and in fear of being exposed if you don’t pay up.  If you can learn Mr Big’s true identity that will give you a blackmail card to play in return.  No danger of you being exposed then!</p>",
  relations: [
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member and briefly your lover in youth.  Is it too late to reawaken her heart to your charms?" },
    {name: "Hugh Carlaw", person: "", desc: "Dig team member.  A sound enough young fellow who has the makings of a decent archaeologist in him.  Reminds you a little of yourself, when you were younger." },
    {name: "Helen Mackinnon", person: "", desc: "Dig team member.  A pretty little thing, but she hasn’t got a proper mind and isn’t really suited to archaeology.  Will probably get married soon, and good luck to her." },
    {name: "Lindsay Wilde", person: "", desc: "Final dig team member.  A hard-working and bright student, from a poor background – an orphan – but rather sneaky, you feel." },
    {name: "Shahfeez Merouf", person: "", desc: "The dig site owner.  He's a fanatic about keeping Egyptian artefacts in the country – a real pain to the smuggling ring.  You have great professional respect for Shahfeez’s work as curator of the Luxor Museum, though." },
    {name: "Alvy Spanheim", person: "", desc: "You have met Alvy a few times at social and diplomatic occasions.  You know of the (slightly sinister) Embassador’s reputation as an interested amateur in matters Egyptological." },
    {name: "Eva de Chalons", person: "", desc: "You have never met Eva before, but she is famed as a glittering socialite.  Perhaps the attractions of your great brain might work on her, if you have no luck with <b>Ariadne</b>." }
  ],
  items: [
    "$70",
  ],
  magic: false,
  abilities: [
    abilities.suddenInsight,
    abilities.aMomentOfPassion,
    abilities.success
  ],
  goals: [
    {name: "Ariadne", desc: "Try to win her heart, or at least friendship, again, and find out why she broke off your liaison and has been so distant all these years."},
    {name: "Get the dig license renewed", desc: "You have to convince <b>Merouf</b> to allow you to continue digging here.  You only really need to prove that you are on the trail of decent finds – and with the discovery of the Jade Scarab you shouldn’t have any difficulty.  You’ve asked <b>Helen</b>, <b>Lindsay</b> and <b>Ariadne</b> to help you persuade <b>Merouf</b>, in case there’s a problem.  <b>Merouf</b> should have a blank licence form with him."},
    {name: "Don’t let anyone find out about your secrets", desc: "If it became known that you had killed Harry Flinders, or that some of your best ‘finds’ were bought from smugglers, your career would probably be over (not to mention possible charges of murder).  Fortunately nobody other than ‘Mr Big’ knows about the true source of your finds."},
    {name: "Identify ‘Mr Big’", desc: "You will be in a much stronger position if you can find out the true name of the mysterious figure behind the smuggling ring.  You think it’s one of your three guests, so tonight would be a good night to find out."}
  ],
  secrets: [
    "You killed Harry Flinders by putting a scorpion in his boot.",
    "You are buying antiquities from ‘Mr Big’."
  ],
  clue: "Earlier today your team opened the tomb and removed the Jade Scarab from it."
};









let people = {
  "LION": {person: "Wes", character: williamSaville },
  "CAKE": {person: "Abby", character: ariadnePriceEvans },
  "DRUM": {person: "Snuggz", character: alvySpanheim },
  "DUCK": {person: "Carolyn", character: lindsayWild }
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
