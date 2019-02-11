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
  gainTrust: {name: "Gain Trust", desc: "Spend at least two minutes talking to somebody.  Then show them this card: they must show you a Secret they haven't shown you before."},
  intimidation: {name: "Intimidation", desc: "Spend at least two minutes talking forcefully to another character.  Then show them this card:  they must show you all of their Goals."},
  hypnosis: {name: "Hypnosis", desc: "Gaze into another character's eyes, then show them this card:  they must reveal to you all of their Secrets."}
};




// setup character data here
let alvySpanheim = {
  name: "Alvy Spanheim",
  gender: "M",
  desc: "Ambassador of the German Consulate.",
  seenAs: "German, hearty, and a bit sinister",
  background: "<p>You are the ambassador of German affairs in Cairo.  As a proud German, you are keen to promote instability in areas of German enemies, including here in Egypt, which is currently under British rule.  It shouldn't take too much to rouse the native population against the foolish British – even something small like this dig could be the trigger if the archaeologists were to do something that was really unpopular with the local people</p><p>You also have a secret – you are a leading member of a secret society called The Crimson Sash, a group harking back to when a great king known as the Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.  The Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity. She has her own followers – the cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash.</p>",
  invitationInfo: "You were invited to the party by <b>Sir William Saville</b> personally.",
  motives: "<p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash’s ancient writings declare the Crimson Pharaoh’s secret resting-place to be.  It might be good to check out the possibility that your dead lord’s body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him</p><p>That's why you were delighted when <b>Sir William</b> invited you to celebrate the opening of an ancient tomb.  It saved you the trouble of finding some excuse to visit.  And it should have been a good night, except that one of the diggers has been killed and may rather spoil the atmosphere.</p><p>To aid to your Crimson Sash activities, you set up a smuggling ring in the Luxor area.  You were originally buying artifacts in case they belonged to the Crimson Pharaoh.  However, you soon found it profitable selling them to wealthy collectors.  To your surprise, <b>Sir William Saville</b> has been a big customer of yours.  It seems that his recent digs have not been turning up decent finds, so he has been buying artifacts from your people to make his results look more impressive.  Lately he has not been paying his bills, though, and your agents have threatened to expose him as a fraud unless he pays up.  He has no idea of your identity as ‘Mr Big’ (nor does anyone else, as far as you know), and it’s better if it stays that way.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "His archaeological group is the reason for the party.  They've made a big discovery.  That Sir William buys artifacts from you suggests that his great reputation as an archaeologist may be a little hollow." },
    {name: "Eva de Chalons", person: "", desc: "You know her of old as a dilettante with an amateur interest in Egyptology. She may be a French secret agent." },
    {name: "Shafeez Merouf", person: "", desc: "Be wary – Shahfeez is a great enemy of artifact smugglers." }
  ],
  items: [
    "A small wooden stick, delicately carved into the likeness of a snake",
    "A Poisonous Scorpion.  Place this scorpion in someone's pocket and tell Calivin.  If the scorpion stings your victim, they lose their abilities until they recieve the antidote.",
    "Poison Antidote",
    "$170"
  ],
  abilities: [
    abilities.evaluation,
    abilities.interrogation,
    abilities.suddenInsight,
    abilities.flattery,
    abilities.summonCrimsonPharaoh,
    abilities.callSnake
  ],
  goals: [
    {name: "Learn more about the murder of Abu Nazir", desc: "Although Abu Nazir doesn't matter to you, you are still curious as to what happened.  You don't need anything getting in the way of black market operations."},
    {name: "The Crimson Pharaoh", desc: "Do what you can to aid his cause and hasten his return.  If you think this is his tomb and you find one of his sacred artifacts you could actually summon him tonight!"},
    {name: "Germany", desc: "Second only to your loyalty to the Crimson Sash is your love of your nation. You should seek any advantage for Germany."},
    {name: "Artifact Smuggling", desc: "Although you need to keep your identity as ‘Mr Big’ secret, you are always keen to pick up artifacts – one of the young archaeologists here might perhaps be a good source.  Young people always need money!"},
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
  background: "<p>Your young life was ruined by the death of your fiancé, <b>Harry Flinders</b>, was stung by a scorpion at what should have been the moment of triumph, the discovery of the Eye of Horus.  Distraught and emotional, you immediately had a passionate fling with his research partner <b>William Saville</b>, but broke the liaison off in horror when you realized you were pregnant.  (And more distressing still, you have never been sure of whether it was by beloved <b>Harry</b> or not-so-beloved <b>William</b>.)  Fleeing secretly to a country retreat, you put the child up for adoption.</p><p>Some years later, once your archaeological career was established, you encountered <b>Sir William</b> again.  You forged a good working relationship with him and he invited you on this expedition.  <b>Harry</b> still looms large in your mind, though: you still have no clear idea of what happened that terrible day, and <b>William</b> has always been too moved by the recollection to go into details.</p><p>Your team has just uncovered the tomb of a unknown Pharaoh, and the Jade Scarab.  <b>Sir William</b> is having a party to celebrate tonight and he’s invited several guests.  It should have been a good night, except that the killing may rather spoil the atmosphere.</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Just before the party you saw young <b>Hugh</b> near the dig’s item table in just his underwear.  Puzzled, you watched as he took up a sacrificial dagger from the table and stalked back into the inner compound.  You do not think he had spotted you, and there didn’t seem to be anyone else about – the others were probably napping.  You went back to your town tent thinking little of it, but now it seems that Abu Nazir has been murdered with this same dagger!  You were disturbed to think that Hugh’s extremes of poverty (or anything other reason, come to that) would lead him to murder.  But he has not yet confessed to the crime and it looks like he does not intend to.</p><p>You are not sure how to broach the subject with <b>Hugh</b>.  He is poor and hard-working, and clearly in love with <b>Helen</b>, but why would he slay an innocent digger?  Being found guilty of killing even a native must carry a hefty prison sentence, not to mention the end of his promising career.  Why did he do it?</p><p>On another note, you have been deeply concerned by the artifact smuggling around Luxor.  It seems like half the items that are dug up then get stolen or sold and smuggled back to private collectors.  <b>Harry</b> would have deplored such activities and you know <b>William</b> has spoken out against the practice too.  Although you have never been approached by any would-be smuggler wishing to buy artifacts (you would have turned them straight over to the authorities), you are beginning to think maybe you should be more active in the fight.  You have in your pocket a small basalt cat statue from the dig, and plan to offer it for sale to anyone you suspect of being a smuggler – if they agree, they are definitely dodgy.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "The leader of your dig team.  You would like to feel closer to William, especially given that he might have been the father of your child, but somehow the spirit of Harry has always stood between you.  Perhaps if one day you could get him to talk about those tragic events, the barrier of ice might be broken." },
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
    {name: "Learn more about the murder of Abu Nazir", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened."},
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




let evaDeChalons = {
  name: "Eva de Chalons",
  gender: "F",
  desc: "dilettante and art connoisseur.",
  seenAs: "French, sophisticated, and a little seductive",
  background: "<p>You are here posing as an art-loving dilettante, a role you live up to the full – you have a reputation as a fun-seeking vamp who tours the best parties of Europe.  While this is all true (and very enjoyable), there is much more to you than this flimsy stereotype.</p><p>First, you are a secret agent in the pay of the French Department of Foreign Affairs, with a brief to use any and all means at your disposal to destabilize enemies of France and convert useful neutrals into friends.  It would surely not take much to rouse the native population against the foolish British – even something small like this dig could be the trigger, if the archaeologists were to do something that was really unpopular with the local people.</p><p>You also have another secret – you are a member of a secret society called The Crimson Sash, a subversive group subtly active in Egypt, harking back to when a great king known as the Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.</p>",
  invitationInfo: "You aren't sure why <b>Sir William</b> invited you to the dig party, but it should certainly be interesting to see what his team have found.",
  motives: "<p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash’s ancient writings declare the Crimson Pharaoh’s secret resting-place to be. You are here therefore to check out the possibility that your dread lord’s body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him.  You also have with you some poison (and the antidote), although this should only be used as a last resort!</p><p>The You know that Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity.  She has her own followers – the cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash, and you think some of them might be at the party.</p><p>That's why you were delighted when <b>Sir William</b> invited you to celebrate the opening of an ancient tomb; that saved you the trouble of finding some excuse to visit.  It should have been a good night, except that one of the diggers has been killed and may rather spoil the atmosphere.</p>",
  relations: [
    { name: "Shahfeez Merouf", person: "", desc: "The dig site owner.  He has a good reputation in Egyptian circles, and is definitely keen to keep ancient artifacts in the country." },
    { name: "Alvy Spanheim", person: "", desc: "You have met Alvy a few times at diplomatic occasions.  You know of the (slightly sinister) Embassador’s reputation as an interested amateur in matters Egyptological.  No doubt working for Germany’s advantage and therefore probably not to be trusted." }
  ],
  items: [
    "Poison Pills",
    "Poison Antidote",
    "$100"
  ],
  abilities: [
    abilities.aMomentOfPassion,
    abilities.success,
    abilities.thoroughAppraisal
  ],
  goals: [
    {name: "Learn more about the murder of Abu Nazir", desc: "Although it probably doesn't matter much to you, you are still curious why there was a murder on the dig site."},
    {name: "The Crimson Pharaoh", desc: "Do what you can to aid his cause and hasten his return.  If you think this is his tomb and you find one of his sacred artifacts you could actually summon him tonight!"},
    {name: "France", desc: "Second only to your loyalty to the Crimson Sash is your love of your nation. You should seek any advantage for France."},
    {name: "Keep your cover", desc: "You are widely believed to be a fivolous seductress, a very useful guise for your real interests, so it is desirable to maintain that cover by acting up to it."}
  ],
  secrets: [
    "You are a member of the Crimson Sash, devoted to revering an acient ruler known as The Crimson Pharaoh.",
    "You are a secret agent working for the French Government."
  ],
  clue: "The dig is very close to where an ancient ruler known as The Crimson Pharaoh is thought to be buried."
};





let helenMackinnon = {
  name: "Helen Mackinnon",
  gender: "F",
  desc: "the belle of Oxford College.",
  seenAs: "spirited, frivolous, gorgeous",
  background: "<p>You were drawn to Egyptology by a series of dreams that have been with you since childhood.  In them, an Ancient Egyptian Queen appears and acts out a ritual. Her husband is a cruel and mighty Pharaoh who wears a crimson sash around his chest and a fearsome scarab made of jade.  The Queen kneels before him, clearly begging for something.  He shakes his head in refusal. Her face contorted with fury, she pulls from her robe a golden eye from which a brilliant pale-green light bursts forth, searing the Pharaoh where he sits.  And that’s when you wake up.</p><p>You feel a strong sense of identity with the long-suffering Queen, who had clearly been provoked into this violent act.  Try as you might, though, you have been unable to identify either – they must come from one of those poorly-understood dark ages of Egyptian history.</p><p>To celebrate the opening of the tomb you and the rest of the team have found, <b>Sir William</b> is holding a dinner to celebrate.  It should have been a good night, except that one of the diggers has been killed, which may spoil the atmosphere.</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>When you give up archaeology, you hope to run a business – a small boutique, a fashion importing business, or a model agency – something glamorous, it doesn’t really matter what.  The trouble is that you will need money to set it up.  A rich husband would be good, but even better would be if you could persuade someone to invest in your ideas.</p><p>Tonight, though, you must focus on your team's new findings.  Just before the party, your team also uncovered the Jade Scarab.  It looks a little like what you've seen in your dreams, so you were relectant to touch it.  You needed to clean the artifact though, but when you touched the Jade Scarab, you collapsed and fainted.  You woke up just before the party started.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "Leader of your dig team.  A legend in archaeological circles, but he's a little showy.  He seems rather nervous too, forever talking to himself and glancing over his shoulder." },
    {name: "Hugh Carlow", person: "", desc: "Dig team member and a charming chap who might make a suitable husband one day, if he has the money." },
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member and good at her job, but stuffy and old." },
    {name: "Lindsay Wilde", person: "", desc: "Dig team member.  Lindsay can be charming, but there’s clearly some sort of big chip on that shoulder." }
  ],
  items: [
    "$10"
  ],
  abilities: [
    abilities.aMomentOfPassion,
    abilities.success,
    abilities.thoroughAppraisal
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are a little scared about the murder of the digger, Abu Nazir."},
    {name: "Your Dream", desc: "Maybe there is someone around all of these smart people who could explain it to you.  Although you wouldn't want to make yourself look like a crackpot."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince <b>Shahfeez Merouf</b>, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Find an Investor", desc: "Any cash you can raise will be helpful to put your business ideas into action.  With a lots of foreign guests here, there are bound to be some opportunities."}
  ],
  secrets: [
    "You have strange vivid dreams about Ancient Egypt.",
    "You suspect the Jade Scarab of being a horrid artifact of ancient evil"
  ],
  clue: "You saw <b>Ariadne Price-Evans</b> standing outside her tent, gazing over the direction of the items table, fifteen minutes before dinner started."
};




let hughCarlow = {
  name: "Hugh Carlow",
  gender: "M",
  desc: "enthusiastic young student.",
  seenAs: "enthusiastic, modest, and rather shy with women",
  background: "<p>While you are still in the process of undertaking your bachelor’s degree at the University of Oxford, you decided to joint the archaeology team and their dig in Egypt.   You have been looking forward with excitement to working under the renowned Professors <b>Saville</b> and <b>Price-Evans</b>, and the reality has more than matched up to the expectation.</p><p>You hope that the fame of your discoveries will bring you something in the way of riches – you are from a rather impoverished background (your father was a country clergyman of reduced means) and you know that to make a buck in Egyptological circles you need a fair wad of banknotes to get started.  That's why you were excited when your team uncovered this previously unknown tomb, and the Jade Scarab.  The Scarab's quality of workmanship surely means it will be a prized museum exhibit, with which your name will be forever associated – the guarantee of a successful career.  It is therefore absolutely vital that the Scarab not be damaged.</p><p>To celebrate the opening of the tomb you and the rest of the team have found, <b>Sir William</b> is holding a dinner to celebrate.  It should have been a good night, except that one of the diggers has been killed, which may spoil the atmosphere.</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Just before dinner, a very curious and disturbing thing happened to you.  You decided to have a quick nap, but were horrified and shocked to wake up, dressed just in your underpants, slumped on the floor just inside your tent doorway, your hands covered in blood.  You have no idea how you got there, and you assume you must have sleep-walked.  Your only memory is of a strange dream in which a sinister female voice muttered to you in a language you did not understand.  Panicking, you quickly washed your hands.</p><p>Shortly after, the body of Abu Nazir was discovered – stabbed to death.  Yet surely it cannot have been you who attacked him?  You have no memory of any such event, and you are generally an upright and moral person who would never dream of doing such violence to a stranger.  You are determined not to be arrested for a crime for which you were not responsible, and are very glad that no-one else saw your bloodied hands.  And of course you are keen to find the real killer – if there is wickedness going on here, you want to thwart it.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "A legend in archaeological circles.  Working for him is an inestimable privilege, although you sometimes wish he was a little less impatient.  Even with his great reputation, he still seems desperate to prove himself." },
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member.  She has been very kind to you.  Even though you would not describe yourself as very perceptive, you can tell she is hiding an inner sadness of some kind." },
    {name: "Helen Mackinnon", person: "", desc: "Dig team member.  You like her a lot and dream of asking for her hand in marriage some day." },
    {name: "Lindsay Wilde", person: "", desc: "Dig team member.  You have never paid Lindsay much attention: a competent enough archaeologist, but with a sneaky air to match that ill-bred background, not unlike yourself." }
  ],
  items: [
    "You have nothing of value here."
  ],
  abilities: [
    abilities.flattery,
    abilities.suddenInsight,
    abilities.gainTrust
  ],
  goals: [
    {name: "Find out what happened to you", desc: "You are worried it might happen again, and even more worried that you might be in the frame for Abu Nazir’s murder, so you must find out what was going on.  But you are nervous of telling anyone about your episode, in case they think you’re guilty, or just unfit to continue working in Egypt."},
    {name: "Find out who really killed Abu Nazir", desc: "If not you, then who?  You want them brought to justice."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince <b>Shahfeez Merouf</b>, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Make some money", desc: "You want to ask <b>Helen</b> to marry you, but you are wary of doing so before you can demonstrate that you are able to support her in the manner to which she is accustomed.  So you therefore need to make some money somehow – or, at least, get the guarantee of a successful career."}
  ],
  secrets: [
    "You woke up with blood on your hands just before dinner.",
    "You are very poor."
  ],
  clue: "You have no useful information."
};




let lindsayWilde = {
  name: "Lindsay Wilde",
  gender: "F",
  desc: "a wild by nature, brooding misfit on the archaeological scene.",
  seenAs: "moody, ambitious, and a bit sly",
  background: "<p>You were raised in an orphanage in Worcestershire with no idea who your parents were.  As a child you nourished a grudge against fate in general, and specifically against your parents for abandoning you.  You decided that you would let nothing stand in the way of achieving happiness, and you channelled your fury into a fierce analytical intelligence and an astonishing capacity for hard work. Thanks to these qualities, you overcame your disadvantages of birth and won a scholarship to Oxford University, where you are studying Archaeology under <b>Sir William Saville</b>.</p><p>You are not really happy, though.  You know you are a good archaeologist, but you are sure that the others despise you for your common roots.  Why, you’re not even mentioned in the newspaper report!</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Given that your background makes you unlikely to ever achieve great success in an archaeological career, you feel you may as well make what profit you can.  And so occasionally you have been known to sell artifacts to collectors.  While digging earlier today, your team uncovered the Jade Scarab, an artifact that only you and your fellow archaeologists know about.  The Jade Scarab, a fantastic piece of workmanship, would fetch a wonderful price if you could get hold of it.  While everyone is distracted by the murder, it may be the perfect time to steal the Scarab.  You would have to make it look like one of the others had taken it (or the natives), but you are confident that if you can get it into your possession you can do as needed.</p><p>This would not be the first artifact you have stolen – you have in your possession one called the Eye of Horus, a small inscribed malachite plaque, which you lifted from the Ashmolean Museum in Oxford.  Security there is far too lax!  Maybe one of these foreigners here for dinner might be interested in buying it.  You should be careful though, as it was initially dug up by <b>Sir William</b> and he would probably recognize it.</p><p>You know that there is a ring of artifact smugglers operating out of Luxor, controlled by a shadowy figure known only as ‘Mr Big’.  You are very keen to join this group, as it would make your life a lot easier and less risky if you could pass items you steal onto an intermediary and share the profits, rather than having to find buyers yourself.  It maybe that someone here tonight is involved in the smuggling ring, and if so you would be keen to join up.  To prove that you can be trusted and are not a spy for the authorities, you might offer them the Eye of Horus as a token of your sincerity.</p>",
  relations: [
    {name: "Sir William Saville", person: "Wes", desc: "A miserable old git who seems as determined as everyone else to ‘keep you in your place’, despite your obvious talents. Nonetheless you are always polite and fawning to his face, after all he could destroy your career utterly." },
    {name: "Hugh Carlow", person: "", desc: "A fellow archaeologist in your group and a shallow stuck-up idiot." },
    {name: "Helen Mackinnon", person: "", desc: "A fellow archaeologist in your group and an example of everything that’s worst about Oxford – arrogant, dim and spoilt." },
    {name: "Ariadne Price-Evans", person: "", desc: "The only one of the archaeological team who is ever even slightly nice to you, you rather despise her for it (in a twisted sort of way).  But nonetheless you do feel somewhat drawn to her." },
    {name: "Shahfeez Merouf", person: "", desc: "Shahfeez is supposed to be a great enemy of artifact smugglers, so it’s important to keep your activities secret." }
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
    {name: "Learn more about the murder of Abu Nazir", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened."},
    {name: "Get money", desc: "Selling the Eye of Horus to ‘Mr Big’ will be the easiest way, if you can identify him.  Or stealing the Jade Scarab, but that would be pretty dangerous."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince <b>Shahfeez Merouf</b>, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Gain recognition", desc: "You will probably never know who your parents were, but in the absence of their approval, that of the world in general will have to do.  You are determined to boost your reputation as a fine young archaeologist."}
  ],
  secrets: [
    "You stole the Eye of Horus from the Ashmolean Museum, and you have it with you.",
    "You have a birthmark the shape and color of a strawberry."
  ],
  clue: "You grew up in an orphanage and do not know who your parents are."
};




let robertTregarne = {
  name: "Robert Tregarne",
  gender: "M",
  desc: "Detective Sergeant in the Colonial Police.",
  seenAs: "dedicated, thoughtful, and perceptive",
  background: "<p>As a detective in the Colonial Police Force, your main duty is tracking down the miscreants responsible for petty crimes in and around Luxor – thefts mostly, and the occasional drunken brawl.  Luxor is not really a crime hotspot, so a possible murder is a very unusual and serious occurrence!</p><p>You have been despatched from the Luxor police station to this dig to investigate a killing.  Apparently one of the expedition diggers, a local named Abu Nazir, has been stabbed to death. As the game starts you have just arrived: it looks like the archaeologists are about to start some sort of dinner party.  No doubt your arrival will rather spoil the mood of celebration, but you are used to that.</p><p>[You will arrive at the dig site about ten minutes after the start of the game.  Most of the other characters are not expecting you – it was <b>Sir William</b> who sent word to the police.]</p>",
  invitationInfo: "You haven't been invited, but rather have been assigned to investiage the murder of a local digger on an archaeology site.",
  motives: "<p>Even though Abu Nazir was only a local, your station is taking this killing seriously and will be expecting you to do a good job.  Tensions between the English colonials and the locals have been growing lately. If it turns out that Abu Nazir was killed by an Englishman, this incident could turn into a flashpoint.  Your first task will be to find out who everyone is, and what they’re doing there.  Then establish that holy trinity of means, motive and opportunity.  It will look good for you if you can identify a suspect by the end of the evening.</p><p>There are some other issues on your mind, which may become relevant.  One particularly brutal band of nationalist thugs has been causing a lot of trouble lately – mostly lower-class Egyptians calling themselves the Brotherhood of the Crimson Sash (members always wear a sash of red silk).  They are a growing menace, and you would dearly love to know who or what is behind them.</p><p>The other local crime problem is artefact smuggling.  Selling items recovered from Egyptian tombs is strictly illegal – all items are supposed to pass through the Egyptian government.  However, private collectors are keen to pay large sums of money for these precious artefacts, and there are always a few who will risk smuggling them out for sale.  Here in Luxor there is an organized ring of smugglers who steal many of the artefacts that are dug up.  They are led by a shadowy figure known as ‘Mr Big’, whose true identity is unknown.  If you could find some clues to his identity, that would be a real feather in your cap.  And to arrest him would be even better!</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "He called the station about the murder of one of the diggers on his archaeology site.  You know him to be a well-respected archaeologist who has been leading digs in this area for over twenty years.  His digs have never caused any significant trouble before now, although there was a rather sad incident back in 1870 when his digging partner Harry Flinders was bitten to death by a scorpion." }
  ],
  items: [
    "$20"
  ],
  abilities: [
    abilities.thoroughAppraisal,
    abilities.success,
    abilities.interrogation,
    abilities.suddenInsight
  ],
  goals: [
    {name: "Investigate the murder", desc: "See the body, interview everyone who might be involved, identify your suspects."},
    {name: "Arrest the killer", desc: "Find out who killed Abu Nazir, and arrest them.  Preferably find out why as well, in case there is a bigger plot behind this death."},
    {name: "Identify ‘Mr Big’", desc: "This should be an excellent place to gather clues to the smuggler boss’s identity:  one of these people might even be working for him!"},
    {name: "Learn more about the Crimson Sash", desc: "Anything you can find out about this sinister and dangerous organization will be useful."},
    {name: "Be politically sensitive", desc: "Your superiors have impressed upon you the need to prevent this incident becoming a flashpoint."}
  ],
  secrets: [
    "You have no secrets."
  ],
  clue: "The Brotherhood of the Crimson Sash is a gang of nationalist thugs with terrorist leanings."
};




let shahfeezMerouf = {
  name: "Shahfeez Merouf",
  gender: "M",
  desc: "mysterious Egyptian, and the Curator of the Luxor Museum.",
  seenAs: "solumn and determined",
  background: "<p>You are the Curator of the Luxor Museum, a post of great prestige and responsibility – but it is not your most important role.  You are secretly the High Priest of the ancient cult of Re-Harakhty.  Your cult has survived to the modern era with its purpose intact – to prevent the return of the abominable Crimson Pharaoh and to frustrate the efforts of his worshippers, a vile cult known as The Crimson Sash.</p><p>You granted permission to the Oxford dig in what seemed a safe enough area, but some of the initial diggings worry you.  They suggest that the tomb is older than was at first thought, maybe of the era of the Crimson Pharaoh himself.  If artifacts are recovered that turn out to be linked to the Crimson Pharaoh, his repulsive worshippers will get their hands on them and evil will march upon the world!  Fortunately, <b>Sir William’s</b> dig permit has now run out and it is up to you to decide whether or not to renew it: hence your invitation here today.</p><p>You have known, <b>Sir William</b> since 1870, when he was plain Mr Saville. You were a digger working for him and Harry Flinders, and it was thanks to Harry’s friendly interest that you surmounted the obstacles and rose to your present status in the Egyptological world.  What a tragedy that Harry died, and what a contrast there was between the two men then – one generous and good-hearted, the other mean-spirited and shifty.  You saw <b>William</b> fiddling with his partner’s boots shortly before Harry’s death from scorpion bite, and have often wondered whether the two events could have been connected.</p>",
  invitationInfo: "<b>Sir William Saville</b> invited you to the celebration of his archaeology team's newest find.",
  motives: "<p>It is possible that <b>Sir William</b> is linked to the Crimson Sash.  Back in that 1870 dig, he recovered the Eye of Horus, a golden artifact which you have since learnt was used by the Crimson Pharaoh’s wife, Queen Bity, to slay him in the first place.  This item would be most useful in countering the Crimson Pharaoh’s new-rising power.  But it was taken by <b>Sir William</b> to the Ashmolean Museum in Oxford, and stolen from there just a couple of months ago!  Prophecies say that Queen Bity will return to help people of good will against the Crimson Pharaoh’s return, and although you can’t quite see how that’s going to work, you are all in favour.  She sounds like a rather redoubtable woman.  You have been looking out for signs of her, and you wonder if it is just your imagination that makes the young archaeologist <b>Miss Helen Mackinnon</b> appear almost Egyptian in profile in certain lights.  If she is a reincarnation of Queen Bity, though, she must surely not realize it.</p><p>You have another concern which has brought you here today – artifact smuggling.  Someone, known only as ‘Mr Big’, is stealing and shifting large quantities of priceless relics from the Luxor area, and selling them on to private collectors.  You have the strong suspicion that it is <b>Sir William Saville</b>: he certainly is the most active digger hereabouts.  If you can get any evidence, you can call in a police investigation.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "A skilful and cunning adversary, if he is indeed ‘Mr Big’.  You must be very careful around him, and prepared for any tricks he might pull.  He does not know that you once worked for him as a digger, and would probably be very surprised." }
  ],
  items: [
    "The Truth Powder of Imhotep",
    "$20"
  ],
  abilities: [
    abilities.evaluation,
    abilities.intimidation,
    abilities.hypnosis
  ],
  goals: [
    {name: "Learn more about the murder", desc: "A local man mysteriously dying at one of <b>Sir William's</b> sites seems awfully fishy."},
    {name: "The Work of Re-Harakhty", desc: "You must oppose the Crimson Sash and its evil doings, at all costs.  Don't let the Crimson Sash get any powerful artifacts, under any circumstances."},
    {name: "Artifact smugglers", desc: "Second only to your loyalty to Re-Harakhty is your love for your job.  You are desperately keen to break up the artifact-smuggling ring and expose and arrest ‘Mr Big’."},
    {name: "Decide whether or not to renew the dig licence", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir."}
  ],
  secrets: [
    "You are the High Priest of Re-Harakhty, sworn to oppose an evil organization known as The Crimson Sash.",
    "You worked as a digger for <b>Sir William Saville</b> and Harry Flinders, near here, back in 1870."
  ],
  clue: "Harry Flinders was killed in 1870, while he was working with <b>Sir William Saville</b>, by a poisonous scorpion someone had placed in his boot."
};


let williamSaville = {
  name: "Sir William Saville",
  gender: "M",
  desc: "renowned archaeologist and leader of the dig.",
  seenAs: "very British, dynamic, and brilliant",
  background: "<p>As the leader of the dig, the opening of this tomb should set the seal on your long and distinguished archaeological career, which has seen you rise to the very peak of your profession.  How very serendipitous that you had organised dinner for this evening – just when you have a truly remarkable find, the Jade Scarab, to celebrate.</p><p>As well as the other expedition members, you’ve invited three guests.  <b>Shahfeez Merouf</b>, as curator of the Luxor Museum, just had to be invited.  You need <b>Shahfeez</b> to renew your dig licence.  You've also heard that <b>Alvy Spanheim</b>, a German Embassador, has an interest in archaeology.  As for <b>Eva de Chalons</b>, that was a shot in the dark.  You’ve only heard of her reputation as a glamorous socialite, so it was a pleasant surprise when she accepted.  It should have been a good night, except that one of the diggers has been killed.  Still, you’re not going to let something like that upset your dinner party.</p><p>At least you didn’t have to steal the Jade Scarab – unlike the discovery that made your name, the Eye of Horus.  Harry Flinders really discovered the Eye of Horus: you were both young and daring, but it was he who translated the ancient map, he who identified the correct patch of sand to start digging, and he who should have got the credit for the discovery – had he not unfortunately died of scorpionbite the very same day.</p><p>You mourned publicly, dedicating the find to his memory, and were so convincing that you successfully won the heart (temporarily) of Harry’s fiancée <b>Ariadne Price-Evans</b>.  Ever since, however, your guilty secret has gnawed at you – it was you, consumed with envy and bitterness, who put the fatal scorpion into Harry’s boot.</p>",
  invitationInfo: "It was your discovery of the tomb that led you to have a celebratory dinner.  This is your party, so of course you're invited!",
  motives: "<p>Maybe even now it’s not too late to rekindle the flame with <b>Ariadne</b> – Harry’s death is far in the past, and you are still a fine figure of a man.  You are not entirely sure why she broke your liaison off in the first place: she just went away without warning one day, and you didn’t hear of her again for several years, by which time her own archaeological career was under way.</p><p>You have another guilty secret.  In recent years your finds have been tailing off (all the best tombs have already been found) and you have resorted to buying black-market artifacts and pretending that they are your own finds.  Fortunately there is an active artifact-smuggling ring operating around Luxor, run by a mysterious figure known only as ‘Mr Big’, and you have been a good customer to them.</p><p>You have no idea who Mr Big might be, but you have a sneaking suspicion that it may be one of your guests tonight – <b>Merouf</b>, <b>de Chalons</b> or <b>Spanheim</b> – which is partly why you invited them.  You are considerably in debt to the smugglers, and in fear of being exposed if you don’t pay up.  If you can learn Mr Big’s true identity that will give you a blackmail card to play in return.  No danger of you being exposed then!</p>",
  relations: [
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member and briefly your lover in youth.  Is it too late to reawaken her heart to your charms?" },
    {name: "Hugh Carlaw", person: "", desc: "Dig team member.  A sound enough young fellow who has the makings of a decent archaeologist in him.  Reminds you a little of yourself, when you were younger." },
    {name: "Helen Mackinnon", person: "", desc: "Dig team member.  A pretty little thing, but she hasn’t got a proper mind and isn’t really suited to archaeology.  Will probably get married soon, and good luck to her." },
    {name: "Lindsay Wilde", person: "", desc: "Final dig team member.  A hard-working and bright student, from a poor background – an orphan – but rather sneaky, you feel." },
    {name: "Shahfeez Merouf", person: "", desc: "The dig site owner.  He's a fanatic about keeping Egyptian artifacts in the country – a real pain to the smuggling ring.  You have great professional respect for Shahfeez’s work as curator of the Luxor Museum, though." },
    {name: "Alvy Spanheim", person: "", desc: "You have met Alvy a few times at social and diplomatic occasions.  You know of the (slightly sinister) Embassador’s reputation as an interested amateur in matters Egyptological." },
    {name: "Eva de Chalons", person: "", desc: "You have never met Eva before, but she is famed as a glittering socialite.  Perhaps the attractions of your great brain might work on her, if you have no luck with <b>Ariadne</b>." }
  ],
  items: [
    "$70",
  ],
  abilities: [
    abilities.suddenInsight,
    abilities.aMomentOfPassion,
    abilities.success
  ],
  goals: [
    {name: "Learn more about the murder of Abu Nazir", desc: "Although Abu Nazir doesn't matter much to you, you can't have anything theatening this dig."},
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








// player info
let people = {
  "DRUM": {person: "Jeremy Solomon", character: alvySpanheim },
  "JANGLES": {person: "Rachel Pioch", character: ariadnePriceEvans },
  "SHREK": {person:"Rose LeVally", character: evaDeChalons },
  "HAND": {person:"Mandy Gross", character: helenMackinnon },
  "FOOT": {person:"Kevin Stuntz", character: hughCarlow },
  "DUCK": {person: "Carolyn LeVally", character: lindsayWilde },
  "SOIL": {person: "Eric Zimmerman", character: robertTregarne },
  "FISH": {person: "Andy Schenkel", character: shahfeezMerouf },
  "BLIMP": {person: "Jonny Leigh", character: williamSaville }
  //"CAKE": {person: "Abby Clark", character:  },
  //"LION": {person: "Wesley Clark", character:  },
  //"CARROT": {person: "Cait Zimmerman", character:  },
  //"WAND": {person: "Brittany Solomon", character:  },
  //"JOBIN": {person: "Jordan Rowsey", character:  },
  //"YELLOW": {person: "Sam Jones", character:  },
  //"ZEBRA": {person: "Jenny Jones", character:  },
  //"BANJO": {person: "Dom Gray", character:  },
  //"DONKEY": {person: "Gracie Gray", character:  },
};




// add player names to relationships
Object.keys(people).forEach(function(character) {
  let relationships = people[character].character.relations;
  for (let i = 0; i < relationships.length; i++) {
    //for (let j = 0; j < this.people.length; j++) {
    //for (const player in Object.keys(people)) {
    Object.keys(people).forEach(function(player) {
      if (relationships[i].name == people[player].character.name) {
        relationships[i].person = people[player].person;
      }
    });
  }
});













let blank = {
  name: "",
  gender: "F",
  desc: ".",
  seenAs: "",
  background: "<p></p>",
  invitationInfo: "",
  motives: "<p></p>",
  relations: [
    {name: "", person: "", desc: "" }
  ],
  items: [
    "$10"
  ],
  abilities: [
    abilities.evaluation,
    abilities.thoroughAppraisal,
    abilities.aMomentOfPassion,
    abilities.pickpocket
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir."}
  ],
  secrets: [
    "."
  ],
  clue: "."
};









// TO RUN
// node --inspect index.js
