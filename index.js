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
  hypnosis: {name: "Hypnosis", desc: "Gaze into another character's eyes, then show them this card:  they must reveal to you all of their Secrets."},
  gossip: {name: "Gossip", desc: "After talking with any person, show them this card and they must truthfully tell you everything they know about another person of your choice."},
  oops: {name: "Oops", desc: "Show this card during any Rock-Paper-Scissors challenge and the person you choose will automatically lose."},
  sensePower: {name: "Sense Power", desc: "See Calvin when holding an artifact to study it for to see if it has magical powers."}
};




// setup character data here
let williamSaville = {
  name: "Sir William Saville",
  gender: "M",
  desc: "renowned archaeologist and leader of the dig.",
  seenAs: "very British, dynamic, and brilliant",
  background: "<p>As the leader of the dig, the opening of this tomb should set the seal on your long and distinguished archaeological career, which has seen you rise to the very peak of your profession.  How very serendipitous that you had organised dinner for this evening – just when you have a truly remarkable find, the Jade Scarab, to celebrate.</p><p>As well as the other expedition members, you’ve invited three guests.  Shahfeez Merouf, as curator of the Luxor Museum, just had to be invited.  You need Shahfeez to renew your dig licence.  You've also heard that Alvy Spanheim, a German Embassador, has an interest in archaeology.  As for Eva de Chalons, that was a shot in the dark.  You’ve only heard of her reputation as a glamorous socialite, so it was a pleasant surprise when she accepted.  It should have been a good night, except that one of the diggers has been killed.  Still, you’re not going to let something like that upset your dinner party.</p><p>At least you didn’t have to steal the Jade Scarab – unlike the discovery that made your name, the Eye of Horus.  Harry Flinders really discovered the Eye of Horus: you were both young and daring, but it was he who translated the ancient map, he who identified the correct patch of sand to start digging, and he who should have got the credit for the discovery – had he not unfortunately died of scorpionbite the very same day.</p><p>You mourned publicly, dedicating the find to his memory, and were so convincing that you successfully won the heart (temporarily) of Harry’s fiancée Ariadne Price-Evans.  Ever since, however, your guilty secret has gnawed at you – it was you, consumed with envy and bitterness, who put the fatal scorpion into Harry’s boot.</p>",
  invitationInfo: "It was your discovery of the tomb that led you to have a celebratory dinner.  This is your party, so of course you're invited!",
  motives: "<p>Maybe even now it’s not too late to rekindle the flame with Ariadne – Harry’s death is far in the past, and you are still a fine figure of a man.  You are not entirely sure why she broke your liaison off in the first place: she just went away without warning one day, and you didn’t hear of her again for several years, by which time her own archaeological career was under way.</p><p>You have another guilty secret.  In recent years your finds have been tailing off (all the best tombs have already been found) and you have resorted to buying black-market artifacts and pretending that they are your own finds.  Fortunately there is an active artifact-smuggling ring operating around Luxor, run by a mysterious figure known only as ‘Mr Big’, and you have been a good customer to them.</p><p>You have no idea who Mr Big might be, but you have a sneaking suspicion that it may be one of your guests tonight – Merouf, de Chalons or Spanheim – which is partly why you invited them.  You are considerably in debt to the smugglers, and in fear of being exposed if you don’t pay up.  If you can learn ‘Mr Big’'s true identity that will give you a blackmail card to play in return.  No danger of you being exposed then!</p>",
  relations: [
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member and briefly your lover in youth.  Is it too late to reawaken her heart to your charms?" },
    {name: "Hugh Carlow", person: "", desc: "Dig team member.  A sound enough young fellow who has the makings of a decent archaeologist in him.  Reminds you a little of yourself, when you were younger." },
    {name: "Helen Mackinnon", person: "", desc: "Dig team member.  A pretty little thing, but she hasn’t got a proper mind and isn’t really suited to archaeology.  Will probably get married soon, and good luck to her." },
    {name: "Lindsay Wilde", person: "", desc: "Final dig team member.  A hard-working and bright student, from a poor background – an orphan – but rather sneaky, you feel." },
    {name: "Shahfeez Merouf", person: "", desc: "The dig site owner.  He's a fanatic about keeping Egyptian artifacts in the country – a real pain to the smuggling ring.  You have great professional respect for Shahfeez’s work as curator of the Luxor Museum, though." },
    {name: "Professor Regina Mathers", person: "", desc: "You are not sure whether to be pleased or annoyed to see the Cambridge archaeological team, led by Professor Regina Mathers, appear here unexpectedly tonight. In general you are keen to spend time with fellow-professionals, and they are a fine bunch of chaps.  But you fear that Mathers may have come here to tease you about how much more successful her group is than yours, which would be rather galling and bad for your team's morale." }
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
    {name: "Get the dig license renewed", desc: "You have to convince Merouf to allow you to continue digging here.  You only really need to prove that you are on the trail of decent finds – and with the discovery of the Jade Scarab you shouldn’t have any difficulty.  You’ve asked Helen, Lindsay and Ariadne to help you persuade Merouf, in case there’s a problem.  Merouf should have a blank licence form with him."},
    {name: "Don’t let anyone find out about your secrets", desc: "If it became known that you had killed Harry Flinders, or that some of your best ‘finds’ were bought from smugglers, your career would probably be over (not to mention possible charges of murder).  Fortunately nobody other than ‘Mr Big’ knows about the true source of your finds."},
    {name: "Identify ‘Mr Big’", desc: "You will be in a much stronger position if you can find out the true name of the mysterious figure behind the smuggling ring.  You think it’s one of your three guests, so tonight would be a good night to find out."}
  ],
  secrets: [
    "You killed Harry Flinders by putting a scorpion in his boot.",
    "You are buying antiquities from ‘Mr Big’."
  ],
  clue: "Earlier today your team opened the tomb and removed the Jade Scarab from it."
};




let alvySpanheim = {
  name: "Alvy Spanheim",
  gender: "M",
  desc: "Ambassador of the German Consulate.",
  seenAs: "German, hearty, and a bit sinister",
  background: "<p>You are the ambassador of German affairs in Cairo.  As a proud German, you are keen to promote instability in areas of German enemies, including here in Egypt, which is currently under British rule.  It shouldn't take too much to rouse the native population against the foolish British – even something small like this dig could be the trigger if the archaeologists were to do something that was really unpopular with the local people</p><p>You also have a secret – you are a leading member of a secret society called The Crimson Sash, a group harking back to when a great king known as the Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.  The Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity. She has her own followers – the cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash.</p>",
  invitationInfo: "You were invited to the party by Sir William Saville personally.",
  motives: "<p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash’s ancient writings declare the Crimson Pharaoh’s secret resting-place to be.  It might be good to check out the possibility that your dead lord’s body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him</p><p>That's why you were delighted when Sir William invited you to celebrate the opening of an ancient tomb.  It saved you the trouble of finding some excuse to visit.  And it should have been a good night, except that one of the diggers has been killed and may rather spoil the atmosphere.</p><p>To aid to your Crimson Sash activities, you set up a smuggling ring in the Luxor area.  You were originally buying artifacts in case they belonged to the Crimson Pharaoh.  However, you soon found it profitable selling them to wealthy collectors.  To your surprise, Sir William Saville has been a big customer of yours.  It seems that his recent digs have not been turning up decent finds, so he has been buying artifacts from your people to make his results look more impressive.  Lately he has not been paying his bills, though, and your agents have threatened to expose him as a fraud unless he pays up.  He has no idea of your identity as ‘Mr Big’ (nor does anyone else, as far as you know), and it’s better if it stays that way.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "His archaeological group is the reason for the party.  They've made a big discovery.  That Sir William buys artifacts from you suggests that his great reputation as an archaeologist may be a little hollow." },
    {name: "Eva de Chalons", person: "", desc: "You know her of old as a dilettante with an amateur interest in Egyptology. She may be a French secret agent." },
    {name: "Shafeez Merouf", person: "", desc: "Be wary – Shahfeez is a great enemy of artifact smugglers." },
    {name: "Marie-Claire Guiscard", person: "", desc: "The young French archaeologist, is a supplier of artifacts to ‘Mr Big’.  She is very reliable, and supplies items of excellent quality, for which you are happy to pay handsomely.  Of course, she has no idea that you are ‘Mr Big’." },
    {name: "Fatima al-Mansoor", person: "", desc: "One of your best customers as ‘Mr Big’ – although she does not know that it's you, and you have never met before tonight.  You don't think that her husband knows that she buys smuggled artifacts.  He is a very upright sort of man: for some reason you feel rather uneasy in his presence.." }
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
  clue: "Sir William Saville has been buying smuggled artifacts to make his own diggings seem more successful."
};


let ariadnePriceEvans = {
  name: "Ariadne Price-Evans",
  gender: "F",
  desc: "veteran translator of Egyptian inscriptions.",
  seenAs: "intellectual, severe, and a bit frumpy",
  background: "<p>Your young life was ruined by the death of your fiancé, Harry Flinders, was stung by a scorpion at what should have been the moment of triumph, the discovery of the Eye of Horus.  Distraught and emotional, you immediately had a passionate fling with his research partner William Saville, but broke the liaison off in horror when you realized you were pregnant.  (And more distressing still, you have never been sure of whether it was by beloved Harry or not-so-beloved William.)  Fleeing secretly to a country retreat, you put the child up for adoption.</p><p>Some years later, once your archaeological career was established, you encountered Sir William again.  You forged a good working relationship with him and he invited you on this expedition.  Harry still looms large in your mind, though: you still have no clear idea of what happened that terrible day, and William has always been too moved by the recollection to go into details.</p><p>Your team has just uncovered the tomb of a unknown Pharaoh, and the Jade Scarab.  Sir William is having a party to celebrate tonight and he’s invited several guests.  It should have been a good night, except that the killing may rather spoil the atmosphere.</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Just before the party you saw young Hugh near the dig’s item table in just his underwear.  Puzzled, you watched as he took up a sacrificial dagger from the table and stalked back into the inner compound.  You do not think he had spotted you, and there didn’t seem to be anyone else about – the others were probably napping.  You went back to your town tent thinking little of it, but now it seems that Abu Nazir has been murdered with this same dagger!  You were disturbed to think that Hugh’s extremes of poverty (or anything other reason, come to that) would lead him to murder.  But he has not yet confessed to the crime and it looks like he does not intend to.</p><p>You are not sure how to broach the subject with Hugh.  He is poor and hard-working, and clearly in love with Helen, but why would he slay an innocent digger?  Being found guilty of killing even a native must carry a hefty prison sentence, not to mention the end of his promising career.  Why did he do it?</p><p>On another note, you have been deeply concerned by the artifact smuggling around Luxor.  It seems like half the items that are dug up then get stolen or sold and smuggled back to private collectors.  Harry would have deplored such activities and you know William has spoken out against the practice too.  Although you have never been approached by any would-be smuggler wishing to buy artifacts (you would have turned them straight over to the authorities), you are beginning to think maybe you should be more active in the fight.  You have in your pocket a small basalt cat statue from the dig, and plan to offer it for sale to anyone you suspect of being a smuggler – if they agree, they are definitely dodgy.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "The leader of your dig team.  You would like to feel closer to William, especially given that he might have been the father of your child, but somehow the spirit of Harry has always stood between you.  Perhaps if one day you could get him to talk about those tragic events, the barrier of ice might be broken." },
    {name: "Hugh Carlow", person: "", desc: "A charming young fellow on your dig team, who reminds you slightly of your lost love Harry – you feel sorry for him that his background is so poor." },
    {name: "Helen Mackinnon", person: "", desc: "Another member of your dig team.  A flightly young madam with no proper appreciation of the subject of archaeology.  You find her very tiresome and have no patience for her gigglish ways." },
    {name: "Lindsay Wilde", person: "", desc: "A hard-working and bright student on the dig team.  She is from a poor background – an orphan – and rather sneaky, you feel." },
    {name: "Shahfeez Merouf", person: "", desc: "Dig site owner.  He is dedicated to keeping Egyptian artifacts in the country, a cause of which you thoroughly approve.  You have great professional respect for Shahfeez’s work as curator of the Luxor Museum." },
    {name: "Lady Jane Fortescue", person: "", desc: "You are pleased to see the Cambridge archaeological team, led by Professor Regina Mathers, especially because included in her team is Lady Jane.  You knew Lady Jane Fortescue way back in your schooldays.  You were friends then, and suspect that she is the real brains on the Cambridge team." }
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
    {name: "Help Hugh", desc: "Find out what’s up with Hugh, and what could have driven him to such an act. He may be in need of your sympathy.  Unless he really is a brutal murderer, of course."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince Merouf to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Harry's death", desc: "What really happened that day? You’ve burned to know for decades, but William is so coy about it. Maybe there is some way he could be opened up."},
    {name: "Artifact Smugglers", desc: "You are keen to identify and expose the villains who are robbing Egypt of its precious heritage, by trying to sell them your cat statue.  You would aim to report them to Shahfeez Merouf (unless Shahfeez is one of them, of course)."}
  ],
  secrets: [
    "You gave birth to a child with a strawberry birthmark 23 years ago.",
    "You had a brief affair with Sir William Saville, 24 years ago."
  ],
  clue: "The carvings on the tomb warn that a Pharaoh of great evil is buried within."
};




let evaDeChalons = {
  name: "Eva de Chalons",
  gender: "F",
  desc: "dilettante and art connoisseur.",
  seenAs: "French, sophisticated, and a little seductive",
  background: "<p>You are here posing as an art-loving dilettante, a role you live up to the full – you have a reputation as a fun-seeking vamp who tours the best parties of Europe.  While this is all true (and very enjoyable), there is much more to you than this flimsy stereotype.</p><p>First, you are a secret agent in the pay of the French Department of Foreign Affairs, with a brief to use any and all means at your disposal to destabilize enemies of France and convert useful neutrals into friends.  It would surely not take much to rouse the native population against the foolish British – even something small like this dig could be the trigger, if the archaeologists were to do something that was really unpopular with the local people.</p><p>You also have another secret – you are a member of a secret society called The Crimson Sash, a subversive group subtly active in Egypt, harking back to when a great king known as the Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.</p>",
  invitationInfo: "You aren't sure why Sir William invited you to the dig party, but it should certainly be interesting to see what his team have found.",
  motives: "<p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash’s ancient writings declare the Crimson Pharaoh’s secret resting-place to be. You are here therefore to check out the possibility that your dread lord’s body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him.  You also have with you some poison (and the antidote), although this should only be used as a last resort!</p><p>The You know that Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity.  She has her own followers – the cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash, and you think some of them might be at the party.</p><p>That's why you were delighted when Sir William invited you to celebrate the opening of an ancient tomb; that saved you the trouble of finding some excuse to visit.  It should have been a good night, except that one of the diggers has been killed and may rather spoil the atmosphere.</p>",
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
  background: "<p>You were drawn to Egyptology by a series of dreams that have been with you since childhood.  In them, an Ancient Egyptian Queen appears and acts out a ritual. Her husband is a cruel and mighty Pharaoh who wears a crimson sash around his chest and a fearsome scarab made of jade.  The Queen kneels before him, clearly begging for something.  He shakes his head in refusal. Her face contorted with fury, she pulls from her robe a golden eye from which a brilliant pale-green light bursts forth, searing the Pharaoh where he sits.  And that’s when you wake up.</p><p>You feel a strong sense of identity with the long-suffering Queen, who had clearly been provoked into this violent act.  Try as you might, though, you have been unable to identify either – they must come from one of those poorly-understood dark ages of Egyptian history.</p><p>To celebrate the opening of the tomb you and the rest of the team have found, Sir William is holding a dinner to celebrate.  It should have been a good night, except that one of the diggers has been killed, which may spoil the atmosphere.</p>",
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
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince Shahfeez Merouf, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Find an Investor", desc: "Any cash you can raise will be helpful to put your business ideas into action.  With a lots of foreign guests here, there are bound to be some opportunities."}
  ],
  secrets: [
    "You have strange vivid dreams about Ancient Egypt.",
    "You suspect the Jade Scarab of being a horrid artifact of ancient evil"
  ],
  clue: "You saw Ariadne Price-Evans standing outside her tent, gazing over the direction of the items table, fifteen minutes before dinner started."
};




let hughCarlow = {
  name: "Hugh Carlow",
  gender: "M",
  desc: "enthusiastic young student.",
  seenAs: "enthusiastic, modest, and rather shy with women",
  background: "<p>While you are still in the process of undertaking your bachelor’s degree at the University of Oxford, you decided to joint the archaeology team and their dig in Egypt.   You have been looking forward with excitement to working under the renowned Professors Saville and Price-Evans, and the reality has more than matched up to the expectation.</p><p>You hope that the fame of your discoveries will bring you something in the way of riches – you are from a rather impoverished background (your father was a country clergyman of reduced means) and you know that to make a buck in Egyptological circles you need a fair wad of banknotes to get started.  That's why you were excited when your team uncovered this previously unknown tomb, and the Jade Scarab.  The Scarab's quality of workmanship surely means it will be a prized museum exhibit, with which your name will be forever associated – the guarantee of a successful career.  It is therefore absolutely vital that the Scarab not be damaged.</p><p>To celebrate the opening of the tomb you and the rest of the team have found, Sir William is holding a dinner to celebrate.  It should have been a good night, except that one of the diggers has been killed, which may spoil the atmosphere.</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Just before dinner, a very curious and disturbing thing happened to you.  You were walking back to your tent when found a rather nice blue pen laying on the ground outside of it.  You picked it up, but it isn't yours.  Maybe it belongs to Sir William or Ariadne.  After that, you decided to have a quick nap, but were horrified and shocked to wake up, dressed just in your underpants, slumped on the floor just inside your tent doorway, your hands covered in blood.  You have no idea how you got there, and you assume you must have sleep-walked.  Your only memory is of a strange dream in which a sinister female voice muttered to you in a language you did not understand.  Panicking, you quickly washed your hands.</p><p>Shortly after, the body of Abu Nazir was discovered – stabbed to death.  Yet surely it cannot have been you who attacked him?  You have no memory of any such event, and you are generally an upright and moral person who would never dream of doing such violence to a stranger.  You are determined not to be arrested for a crime for which you were not responsible, and are very glad that no-one else saw your bloodied hands.  And of course you are keen to find the real killer – if there is wickedness going on here, you want to thwart it.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "A legend in archaeological circles.  Working for him is an inestimable privilege, although you sometimes wish he was a little less impatient.  Even with his great reputation, he still seems desperate to prove himself." },
    {name: "Ariadne Price-Evans", person: "", desc: "Dig team member.  She has been very kind to you.  Even though you would not describe yourself as very perceptive, you can tell she is hiding an inner sadness of some kind." },
    {name: "Helen Mackinnon", person: "", desc: "Dig team member.  You like her a lot and dream of asking for her hand in marriage some day." },
    {name: "Lindsay Wilde", person: "", desc: "Dig team member.  You have never paid Lindsay much attention: a competent enough archaeologist, but with a sneaky air to match that ill-bred background, not unlike yourself." }
  ],
  items: [
    "a blue pen."
  ],
  abilities: [
    abilities.flattery,
    abilities.suddenInsight,
    abilities.gainTrust
  ],
  goals: [
    {name: "Find out what happened to you", desc: "You are worried it might happen again, and even more worried that you might be in the frame for Abu Nazir’s murder, so you must find out what was going on.  But you are nervous of telling anyone about your episode, in case they think you’re guilty, or just unfit to continue working in Egypt."},
    {name: "Find out who really killed Abu Nazir", desc: "If not you, then who?  You want them brought to justice."},
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince Shahfeez Merouf, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
    {name: "Make some money", desc: "You want to ask Helen to marry you, but you are wary of doing so before you can demonstrate that you are able to support her in the manner to which she is accustomed.  So you therefore need to make some money somehow – or, at least, get the guarantee of a successful career."}
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
  background: "<p>You were raised in an orphanage in Worcestershire with no idea who your parents were.  As a child you nourished a grudge against fate in general, and specifically against your parents for abandoning you.  You decided that you would let nothing stand in the way of achieving happiness, and you channelled your fury into a fierce analytical intelligence and an astonishing capacity for hard work. Thanks to these qualities, you overcame your disadvantages of birth and won a scholarship to Oxford University, where you are studying Archaeology under Sir William Saville.</p><p>You are not really happy, though.  You know you are a good archaeologist, but you are sure that the others despise you for your common roots.  Why, you’re not even mentioned in the newspaper report!</p>",
  invitationInfo: "As a member of Sir William’s dig team, of course you’re invited!",
  motives: "<p>Given that your background makes you unlikely to ever achieve great success in an archaeological career, you feel you may as well make what profit you can.  And so occasionally you have been known to sell artifacts to collectors.  While digging earlier today, your team uncovered the Jade Scarab, an artifact that only you and your fellow archaeologists know about.  The Jade Scarab, a fantastic piece of workmanship, would fetch a wonderful price if you could get hold of it.  While everyone is distracted by the murder, it may be the perfect time to steal the Scarab.  You would have to make it look like one of the others had taken it (or the natives), but you are confident that if you can get it into your possession you can do as needed.</p><p>This would not be the first artifact you have stolen – you have in your possession one called the Eye of Horus, a small inscribed malachite plaque, which you lifted from the Ashmolean Museum in Oxford.  Security there is far too lax!  Maybe one of these foreigners here for dinner might be interested in buying it.  You should be careful though, as it was initially dug up by Sir William and he would probably recognize it.</p><p>You know that there is a ring of artifact smugglers operating out of Luxor, controlled by a shadowy figure known only as ‘Mr Big’.  You are very keen to join this group, as it would make your life a lot easier and less risky if you could pass items you steal onto an intermediary and share the profits, rather than having to find buyers yourself.  It maybe that someone here tonight is involved in the smuggling ring, and if so you would be keen to join up.  To prove that you can be trusted and are not a spy for the authorities, you might offer them the Eye of Horus as a token of your sincerity.</p>",
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
    {name: "Help Sir William get the dig license renewed", desc: "He has to convince Shahfeez Merouf, the dig site owner, to allow you to continue digging here.  You only have to prove that you are on the trail of decent finds, so it should be straightforward."},
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
  background: "<p>As a detective in the Colonial Police Force, your main duty is tracking down the miscreants responsible for petty crimes in and around Luxor – thefts mostly, and the occasional drunken brawl.  Luxor is not really a crime hotspot, so a possible murder is a very unusual and serious occurrence!</p><p>You have been despatched from the Luxor police station to this dig to investigate a killing.  Apparently one of the expedition diggers, a local named Abu Nazir, has been stabbed to death. As the game starts you have just arrived: it looks like the archaeologists are about to start some sort of dinner party.  No doubt your arrival will rather spoil the mood of celebration, but you are used to that.</p><p>Your assistant, Detective Sergeant Alex McQueen, has been assigned to assist you in this investigation. Alex is a keen young officer, but a bit of a hothead, likely to accuse first and ask questions later.</p><p>[You will arrive at the dig site about ten minutes after the start of the game.  Most of the other characters are not expecting you – it was Sir William who sent word to the police.]</p>",
  invitationInfo: "You haven't been invited, but rather have been assigned to investiage the murder of a local digger on an archaeology site.",
  motives: "<p>Even though Abu Nazir was only a local, your station is taking this killing seriously and will be expecting you to do a good job.  Tensions between the English colonials and the locals have been growing lately. If it turns out that Abu Nazir was killed by an Englishman, this incident could turn into a flashpoint.  Your first task will be to find out who everyone is, and what they’re doing there.  Then establish that holy trinity of means, motive and opportunity.  It will look good for you if you can identify a suspect by the end of the evening.</p><p>There are some other issues on your mind, which may become relevant.  One particularly brutal band of nationalist thugs has been causing a lot of trouble lately – mostly lower-class Egyptians calling themselves the Brotherhood of the Crimson Sash (members always wear a sash of red silk).  They are a growing menace, and you would dearly love to know who or what is behind them.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "He called the station about the murder of one of the diggers on his archaeology site.  You know him to be a well-respected archaeologist who has been leading digs in this area for over twenty years.  His digs have never caused any significant trouble before now, although there was a rather sad incident back in 1870 when his digging partner Harry Flinders was bitten to death by a scorpion." },
    {name: "Alex McQueen", person: "", desc: "She has been assigned to assist you in this investigation.  Alex is a keen young officer, but a bit of a hothead, likely to accuse first and ask questions later." }
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
  background: "<p>You are the Curator of the Luxor Museum, a post of great prestige and responsibility – but it is not your most important role.  You are secretly the High Priest of the ancient cult of Re-Harakhty.  Your cult has survived to the modern era with its purpose intact – to prevent the return of the abominable Crimson Pharaoh and to frustrate the efforts of his worshippers, a vile cult known as The Crimson Sash.</p><p>You granted permission to the Oxford dig in what seemed a safe enough area, but some of the initial diggings worry you.  They suggest that the tomb is older than was at first thought, maybe of the era of the Crimson Pharaoh himself.  If artifacts are recovered that turn out to be linked to the Crimson Pharaoh, his repulsive worshippers will get their hands on them and evil will march upon the world!  Fortunately, Sir William’s dig permit has now run out and it is up to you to decide whether or not to renew it: hence your invitation here today.</p><p>You have known, Sir William since 1870, when he was plain Mr Saville. You were a digger working for him and Harry Flinders, and it was thanks to Harry’s friendly interest that you surmounted the obstacles and rose to your present status in the Egyptological world.  What a tragedy that Harry died, and what a contrast there was between the two men then – one generous and good-hearted, the other mean-spirited and shifty.  You saw William fiddling with his partner’s boots shortly before Harry’s death from scorpion bite, and have often wondered whether the two events could have been connected.</p>",
  invitationInfo: "Sir William Saville invited you to the celebration of his archaeology team's newest find.",
  motives: "<p>It is possible that Sir William is linked to the Crimson Sash.  Back in that 1870 dig, he recovered the Eye of Horus, a golden artifact which you have since learnt was used by the Crimson Pharaoh’s wife, Queen Bity, to slay him in the first place.  This item would be most useful in countering the Crimson Pharaoh’s new-rising power.  But it was taken by Sir William to the Ashmolean Museum in Oxford, and stolen from there just a couple of months ago!  Prophecies say that Queen Bity will return to help people of good will against the Crimson Pharaoh’s return, and although you can’t quite see how that’s going to work, you are all in favour.  She sounds like a rather redoubtable woman.  You have been looking out for signs of her, and you wonder if it is just your imagination that makes the young archaeologist Miss Helen Mackinnon appear almost Egyptian in profile in certain lights.  If she is a reincarnation of Queen Bity, though, she must surely not realize it.</p><p>You have another concern which has brought you here today – artifact smuggling.  Someone, known only as ‘Mr Big’, is stealing and shifting large quantities of priceless relics from the Luxor area, and selling them on to private collectors.  You have the strong suspicion that it is Sir William Saville: he certainly is the most active digger hereabouts.  If you can get any evidence, you can call in a police investigation.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "A skilful and cunning adversary, if he is indeed ‘Mr Big’.  You must be very careful around him, and prepared for any tricks he might pull.  He does not know that you once worked for him as a digger, and would probably be very surprised." },
    {name: "Tariq al-Mansoor", person: "", desc: "You are certain that he is a customer of ‘Mr Big’.  He has in his collection several artifacts that you are sure were illegally smuggled.  However, whenever you have investigated him, the documentation is always convincing, and you have never yet had the evidence to convict him.  But you are sure you will get him in the end!  Maybe he might even be ‘Mr Big’..." }
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
    {name: "Learn more about the murder", desc: "A local man mysteriously dying at one of Sir William's sites seems awfully fishy."},
    {name: "The Work of Re-Harakhty", desc: "You must oppose the Crimson Sash and its evil doings, at all costs.  Don't let the Crimson Sash get any powerful artifacts, under any circumstances."},
    {name: "Artifact smugglers", desc: "Second only to your loyalty to Re-Harakhty is your love for your job.  You are desperately keen to break up the artifact-smuggling ring and expose and arrest ‘Mr Big’."},
    {name: "Decide whether or not to renew the dig licence", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir."}
  ],
  secrets: [
    "You are the High Priest of Re-Harakhty, sworn to oppose an evil organization known as The Crimson Sash.",
    "You worked as a digger for Sir William Saville and Harry Flinders, near here, back in 1870."
  ],
  clue: "Harry Flinders was killed in 1870, while he was working with Sir William Saville, by a poisonous scorpion someone had placed in his boot."
};







let alexMcQueen = {
  name: "Alex McQueen",
  gender: "F",
  desc: "Detective Constable in the Colonial Police.",
  seenAs: "idealistic, slightly rebellious, and impatient",
  background: "<p>You are an ambitious young detective in Her Majesty's Colonial Police Force.  Your main duty is tracking down the miscreants responsible for petty crimes in and around Luxor – thefts mostly, and the occasional drunken brawl.  Luxor is not really a crime hotspot, so a possible murder is a very unusual and serious occurrence.</p><p>You have been despatched from the Luxor police station to this dig to investigate a killing.  Apparently one of the expedition diggers, a local named Abu Nazir, has been stabbed to death.  As the game starts you have just arrived: it looks like the archaeologists are about to start some sort of dinner party.  No doubt your arrival will rather spoil the mood of celebration, but you are used to that.</p><p>You are here to assist your boss, Robert Tregarne. He is a dedicated officer but something of a slowcoach, even a stick-in-the-mud – he believes in detailed questioning and evidence-gathering before jumping to any conclusions.  You are impatient with all of this – nine times out of ten, it's screamingly obvious who the guilty party is, and speed might be of the essence in apprehending them.  So you are not always all that good at following Robert's orders...</p><p>[You will arrive at the dig site, with Robert, about ten minutes after the start of the game. Most of the other characters are not expecting you – it was Sir William who sent word to the police.]</p>",
  invitationInfo: "You haven't been invited, but rather have been assigned to investiage the murder of a local digger on an archaeology site.",
  motives: "<p>Even though Abu Nazir was only a local, your station is taking this killing seriously and will be expecting you to do a good job.  Tensions between the English colonials and the locals have been growing lately. If it turns out that Abu Nazir was killed by an Englishman, this incident could turn into a flashpoint.  Your first task will be to find out who everyone is, and what they’re doing there.  Then establish that holy trinity of means, motive and opportunity.  It will look good for you if you can identify a suspect by the end of the evening.</p><p>There are some other issues on your mind, which may become relevant.  One other local crime problem is artifact smuggling.  Selling items recovered from Egyptian tombs is strictly illegal – all items are supposed to pass through the Egyptian government.  However, private collectors are keen to pay large sums of money for these precious artifacts, and there are always a few who will risk smuggling them out for sale.  Here in Luxor there is an organized ring of smugglers who steal many of the artifacts that are dug up.  They are led by a shadowy figure known as ‘Mr Big’, whose true identity is unknown.  If you could find some clues to his identity, that would be a real feather in your cap.  And to arrest him would be even better!</p>",
  relations: [
    {name: "Robert Tregarne", person: "", desc: "Your boss, with patient methods very different from your own.  You obey his orders, but you don't have as much respect for him as you probably should.  You would dearly love to beat him to the solution of this crime." },
    {name: "Sir William Saville", person: "", desc: "He called the station about the murder of one of the diggers on his archaeology site.  You know him to be a well-respected archaeologist who has been leading digs in this area for over twenty years.  His digs have never caused any significant trouble before now, although there was a rather sad incident back in 1870 when his digging partner Harry Flinders was bitten to death by a scorpion." }
  ],
  items: [
    "$20"
  ],
  abilities: [
    abilities.interrogation,
    abilities.suddenInsight,
    abilities.flattery
  ],
  goals: [
    {name: "Investigate the murder", desc: "See the body, interview everyone who might be involved, identify your suspects.  Work with Robert, but if you can solve the case before he does, you may be looking a big promotion."},
    {name: "Identify ‘Mr Big’", desc: "This should be an excellent place to gather clues to the smuggler boss’s identity:  one of these people might even be working for him!"},
    {name: "Be politically sensitive", desc: "Your superiors have impressed upon you the need to prevent this incident becoming a flashpoint."}
  ],
  secrets: [
    "You have no secrets."
  ],
  clue: "There is an artifact smuggling ring around Luxor, led by someone known as ‘Mr Big’."
};



let armandLenoir = {
  name: "Armand Lenoir",
  gender: "M",
  desc: "leader of a French excavation on a nearby dig site.",
  seenAs: "sophisticated and charming, but rather distant",
  background: "<p>You are an experienced and highly respected French archaeologist, based at the University of the Sorbonne in Paris.  With the help of your assistant Marie-Claire Guiscard, you are investigating the interesting tomb of the pharaoh Amenhotep III, up at the other end of the Valley of the Kings</p><p>While digging in Amenhotep's tomb, you and Marie-Claire discovered a curious item, a staff carved out of black basalt, the top in the form of a snake's head.  It is very finely carved, but not inscribed with any writing.  It was concealed in a sealed chamber, with a number of papyrus scrolls of prayers to various demons to guard it safe for future generations.  The whole package was tied up with a scarlet ribbon.  You're hoping that Sir William or Ariadne will know more.</p>",
  invitationInfo: "You weren't invited to Sir William Saville's party but have dropped in unannounced to ask them some questions.",
  motives: "<p>Your dig is going well, although you are concerned that there may be thieves among the locals who are helping out with the manual labour.  Several items that you have recovered have just disappeared.  Marie-Claire is particularly distraught about this: she is rather soft-hearted and cannot believe that the diggers would steal such valuable items.  You are debating whether or not to just fire the lot of them and recruit some new ones – although that would certainly break her heart.  It would be good to know if Sir William and Ariadne have had any trouble with theirs.  You are also thinking about asking the local police to investigate the thefts, although that would be bound to be an annoying and interfering distraction</p><p>You know that Sir William has been working out in Egypt for upwards of twenty years, originally in partnership with a brilliant young archaeologist named Harry Flinders.  Flinders died unexpectedly young, which was a great loss to the profession.  You have never known exactly what happened to him, and would like to find out.</p>",
  relations: [
    {name: "Marie-Claire Guiscard", person: "", desc: "Your assistant for several years now.  She is diligent and enthusiastic, and rather brilliant.  You know next to nothing about her personal life: she is very private." },
    {name: "Sir William Saville", person: "", desc: "A well-reputed English archaeologist.  You have never met him personally but you know his work." },
    {name: "Ariadne Price-Evans", person: "", desc: "Sir William's partner.  She knows just as much, if not more about ancient Egypt" }
  ],
  items: [
    "$70"
  ],
  abilities: [
    abilities.gainTrust,
    abilities.flattery
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, it is worth seeing if Abu Nazir's death is a threat to your own excavation."},
    {name: "Investigate the Black Staff", desc: "You want to find out what Sir William and Ariadne can tell you about the curious Black Staff and associated items.  No doubt they will expect a favor from you in return..."},
    {name: "Find out what happened to Harry Flinders", desc: "You expect that Sir William himself was too affected by his partner's death to want to talk about it, but one of the others of his team would probably be able to tell you the full story."},
    {name: "Decide what to do about the thefts", desc: "Fire your diggers, or get the police to investigate?"}
  ],
  secrets: [
    "You have no secrets."
  ],
  clue: "Somebody has been stealing artifacts from your excavations."
};


let marieclairGuiscard = {
  name: "Marie-Claire Guiscard",
  gender: "F",
  desc: "hard-working assistant in a local excavation.",
  seenAs: "tender-hearted, amiable and brilliant",
  background: "<p>You are an up-and-coming French archaeologist, based at the University of the Sorbonne in Paris.  You are here in Egypt with your boss Armand Lenoir investigating the interesting tomb of the pharaoh Amenhotep III, up at the other end of the Valley of the Kings</p><p>While digging in Amenhotep's tomb, you and Marie-Claire discovered a curious item, a staff carved out of black basalt, the top in the form of a snake's head.  It is very finely carved, but not inscribed with any writing.  It was concealed in a sealed chamber, with a number of papyrus scrolls of prayers to various demons to guard it safe for future generations.  The whole package was tied up with a scarlet ribbon.  You're hoping that Sir William or Ariadne will know more.</p>",
  invitationInfo: "You weren't invited to Sir William Saville's party but have dropped in unannounced to ask them some questions.",
  motives: "<p>Your dig is going well, and it has provided you with good opportunities to indulge in your spare-time profession – stealing and selling ancient artifacts.  You have passed on several valuable items to a shadowy smuggler, based in Luxor, known only as ‘Mr Big’, in exchange for appreciable sums of money.  You need the money because you have to maintain your elderly parents, back in France: your salary as an assistant Egyptologist is not large enough to manage, so you have forced yourself to overcome the pangs of guilt at disposing of items that should be going to museums</p><p>Armand knows nothing of this, and suspects that there are thieves among the locals who are helping out with the manual labour.  You are playing along with this, and pretend that you can scarcely believe that the diggers would steal such valuable items.  You are hoping that he will not fire them all, which would put a crimp in your plan.  Even worse would be if he asked the police to investigate!</p><p>You know nothing of ‘Mr Big’ – you just leave items at an agreed location, and return later to collect money – and you are curious to find out who he is.  And whether you are the only person working for him!</p>",
  relations: [
    {name: "Armand Lenoir", person: "", desc: "Your boss for several years now. He is hard-working, kind and a fine man." },
    {name: "Sir William Saville", person: "", desc: "A well-reputed English archaeologist.  You have never met him personally but you know his work." },
    {name: "Ariadne Price-Evans", person: "", desc: "Sir William's partner.  She knows just as much, if not more about ancient Egypt" }
  ],
  items: [
    "$50"
  ],
  abilities: [
    abilities.thoroughAppraisal,
    abilities.pickpocket,
    abilities.flattery,
    abilities.gossip
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, it is worth seeing if Abu Nazir's death is a threat to your own excavation."},
    {name: "Investigate the Black Staff", desc: "You want to find out what Sir William and Ariadne can tell you about the curious Black Staff and associated items.  No doubt they will expect a favor from you in return..."},
    {name: "Don't get found out", desc: "Ensure Armand doesn't get the police to investigate the thefts."},
    {name: "Inquire about Mr Big", desc: "Someone here will probably know more about the mysterious smuggler boss.  Someone here might even be him!"}
  ],
  secrets: [
    "The Black Staff that you and Armand found was tied up with a scarlet ribbon."
  ],
  clue: "You have been stealing artifacts from your dig and selling them to someone known as ‘Mr Big’."
};



let tariqAlMansoor = {
  name: "Tariq al-Mansoor",
  gender: "M",
  desc: "wealthy collector of Egyptian artiquities.",
  seenAs: "wealthy, amiable, and like a cuddly uncle",
  background: "<p>You are a wealthy antiquarian and collector, delighting in accumulating the beautiful treasures of Ancient Egypt.  This trade is very heavily regulated, and there is a big illegal business in smuggling ancient artifacts from digs and from museums into the hands of collectors like yourself.  Despite your honesty, you have frequently been accused of buying smuggled artifacts.  Shahfeez Merouf, the curator of the Luxor Museum, has the duty of investigating such events, and you are greatly resentful that you seem to get picked on so often – far too often, considering that you have never been found guilty of anything.</p>",
  invitationInfo: "You were invited by Sir William Saville because he wants to show off his newest find.",
  motives: "<p>In general you are a very upright, moral person, and this affects every area of your life.  You are a member of a secret organization called The Sons of Horus, which is devoted to stamping out evil wherever it raises its ugly head.  Egypt is a troubled land, and there are malevolent old influences that still infect it.</p><p>For example, there is another secret organization called The Brotherhood of the Crimson Sash, which is devoted to the memory of an ancient ruler called The Crimson Pharaoh.  They are unutterably wicked and seek only chaos and destruction.  You make it your duty to oppose them whenever you see them – they can usually be identified by their habit of wearing a red silk sash, but not always.  There may even be members at the party, although they are likely too smart to wear their sashes.</p>",
  relations: [
    {name: "Fatima al-Mansoor", person: "", desc: "Your wife since a young age, you think the world of her and thank Allah daily for providing you with such a companion." },
    {name: "Shahfeez Merouf", person: "", desc: "You are on poor terms, because of the grudge the curator seems to have against you – continually investigating you for purchasing smuggled artifacts, when no evidence against you has ever been put forward." }
  ],
  items: [
    "$180"
  ],
  abilities: [
    abilities.evaluation,
    abilities.gainTrust,
    abilities.hypnosis
  ],
  goals: [
    {name: "Learn more about the murder", desc: "The murder of a local man, Abu Nazir, has you interested.  Who would do such a thing?"},
    {name: "Fight the Crimson Sash", desc: "Ensure the Brotherhood of the Crimson Sash doesn't get a chance to somehow take advantage of this dig.  If they are present, oppose them with every means at your disposal."},
    {name: "Recruit for the Sons of Horus", desc: "If you see any likely candidates for membership of the Sons of Horus – they must be thoroughly good and upright, as well as brave and true – you can recruit them to your side.  Apart from recruitment purposes though, in general you should try and keep your membership of the Sons of Horus a secret."}
  ],
  secrets: [
    "You are a member of the Sons of Horus, a secret society dedicated to defending Egypt from evil."
  ],
  clue: "There is an evil organization, called the Brotherhood of the Crimson Sash, whose members are known to wear a red sash."
};



let fatimaAlMansoor = {
  name: "Fatima al-Mansoor",
  gender: "F",
  desc: "wealthy collector of Egyptian artiquities.",
  seenAs: "demure, shy, and very much in love with your husband",
  background: "<p>You are a wealthy antiquarian and collector, delighting in accumulating the beautiful treasures of Ancient Egypt.  This trade is very heavily regulated, and there is a big illegal business in smuggling ancient artifacts from digs and from museums into the hands of collectors like yourself.  Your husband Tariq, in whose name your collection is, is scrupulously above board in all his dealings, and has never had anything to do with the smugglers.  You on the other hand have been very happy to buy a number of fine artifacts from the local smuggling boss, known as ‘Mr Big’.  You don't know who ‘Mr Big’ really is, but he provides excellent documentation for the artifacts he sells – although you and your husband have repeatedly been investigated by the suspicious authorities, they have never been able to prove that any of your treasures were purchased illegally.</p><p>Shahfeez Merouf, the curator of the Luxor Museum, has had the duty of carrying out these investigations, and so getting away with it has been a double pleasure for you – because, although Shahfeez doesn't know it, you are deadly enemies.</p>",
  invitationInfo: "You were invited by Sir William Saville because he wants to show off his newest find.",
  motives: "<p>You are secretly a member of The Brotherhood of the Crimson Sash, a subversive group subtly active in Egypt, harking back to around 1600BCE, when a great king known as The Crimson Pharaoh ruled the land.  If his body can be found, you and your fellows hope to magically resurrect him and stand by his side as he leads his armies to cleanse Egypt of the unbelievers.</p><p>The Crimson Pharaoh was originally slain by his treacherous wife, Queen Bity. She has her own followers – the Cult of Re-Harakhty, who are fanatics opposed to the Crimson Sash.  Shahfeez is the current High Priest of this cult – this is supposed to be a secret, but you found it out some time ago.</p><p>Although these foolish Oxford archaeologists do not realize it, this dig is close to where the Sash's ancient writings declare the Crimson Pharaoh's secret resting-place to be.  You are here therefore to check out the possibility that your dread lord's body might be recovered, or that any artifacts found in the dig might be useful in resurrecting him.</p>",
  relations: [
    {name: "Fatima al-Mansoor", person: "", desc: "Your husband since a young age, you love him, but he does not know of your side dealings." },
    {name: "Shahfeez Merouf", person: "", desc: "You are wary of Shahfeez, who has investigated you and your husband many times on suspicion of owning smuggled artifacts. So far you have got away with it.  You also know him to be a leader of you enemy, the Cult of Re-Harakhty" }
  ],
  items: [
    "$100"
  ],
  abilities: [
    abilities.evaluation,
    abilities.gossip
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Abu Nazir, the murdered digger was also member of the Crimson Sash.  Find out how he died to see if your life is also in danger."},
    {name: "Look for Crimson artifacts", desc: "If anything relating to the Crimson Pharaoh has been found here or nearby, it might be usable to resurrect him.  Which you should do, if you get the chance!."},
    {name: "Recruit for the Brotherhood of the Crimson Sash", desc: "Although its a secret society, it can always use more members, particularly cannon-fodder. If you see any likely candidates for membership of the Brotherhood – they must be thoroughly wicked and corrupt – you can recruit them to your side.  Apart from recruitment purposes, in general you should try and keep your membership of the Brotherhood of the Crimson Sash a secret."},
    {name: "Keep your illegal activities secret", desc: "Ensure no-one finds out you have been buying artifacts from ‘Mr Big’." }
  ],
  secrets: [
    "You are a member of the Crimson Sash, devoted to revering an ancient ruler known as the Crimson Pharoh."
  ],
  clue: "This dig is around the site of the burial of the Crimson Pharaoh, an evil ruler of the XVIth Dynasty."
};



let reginaMathers = {
  name: "Professor Regina Mathers",
  gender: "F",
  desc: "respected archaeologist from Cambridge.",
  seenAs: "sharp and sarcastic",
  background: "<p>You are Professor of Archaeology at the University of Cambridge in England, a woman at the head of your profession, widely respected all round the world.  Sir William Saville, the Oxford team's leader, has been a rival of yours for many years, and you are delighted that your own team has had somewhat greater success.</p><p>Although you are a success, you have a slightly uneasy feeling about it.  The fact is that really you are very dependent on your team's talents – particularly Lady Jane.  Without her and the others, you would not be much of an archaeologist.</p><p>The rest of your team – the Foxes and young Chris Kovacs – are a pretty hopeless bunch really.  Kovacs has promise, and maybe after a few more years' apprenticeship (ie. fetching and carrying!) will have the makings of a decent archaeologist, but Godfrey and Angela Fox are typical dilettantes with no real dedication to the profession.  You constantly have the feeling that their attention is elsewhere, or that they are just filling in time waiting for something.  (Maybe this is just as well, or they might have caught on to your artifact forgery by now.)</p><p>That said, they are charming people and good company, and to be honest Lady Jane has enough archaeological skill to carry the lot of you. But if you could persuade any of the Oxford group to join yours, that would be an excellent coup – with or without Sir William's blessing. And you'd be happy to offer Kovacs or the Foxes in exchange!</p>",
  invitationInfo: "You have come to the party uninvited with the intention of teasing the Sir William Saville's team over their lack of significant findings.",
  motives: "<p>Sir William used to work with a good friend of yours, a man named Harry Flinders.  Harry died young, upwards of twenty years ago now, while out on a dig no far from this site.  He was stung by a scorpion: this surprised you, as generally he was very careful about such dangerous animals.  You have always wondered whether there was anything more to the story</p><p>Although most of your success can't be attributed to you, You do have one useful skill, though – that of forging fake ancient artifacts. You use this to make your digs seem more impressive than they actually are.  You have never yet been detected, or even suspected by your colleagues.  You have with you one of your forgeries, an excellent mask made of agate, typical of the XVIth Dynasty: you plan to show it off to Sir William and the others.</p><p>You told your colleagues that you found the Agate Mask while digging by yourself: this is quite a common practice of yours, and they are not at all suspicious.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "A highly skilled and capable archaeologist, but has not had the best of luck with his digs in recent years.  You are on terms of friendly rivalry." },
    {name: "Lady Jane Fortescue", person: "", desc: "Member of your dig team.  Your trusted right hand, brilliant and reliable – but she is the only person to whom you reveal how much you depend on her." },
    {name: "Reverend Godfrey Fox", person: "", desc: "Member of your dig team. A bit of a bumbler, but extremely keen.  Not much of a Bible-basher, considering his profession." },
    {name: "Angela Fox", person: "", desc: "Member of your dig team.  A brisk, efficient woman who makes herself useful to the team – although with no real archaeological skill, as far as you can see." },
    {name: "Chris Kovacs", person: "", desc: "Member of your dig team.  An obedient and helpful young student – a foreigner, but that can't be helped.  In time might make a decent scholar." }
  ],
  items: [
    "$80"
  ],
  abilities: [
    abilities.suddenInsight,
    abilities.oops
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir, and can't wait to rub it in to Sir William if it is his fault."},
    {name: "Show off the Agate Mask", desc: "And generally lord it over the Oxford team, as your excavation has been so much more successful than theirs.  But, ensure no-one finds out that you faked the Agate Mask, and a number of other previous artifacts."},
    {name: "LFind out what happened to Harry Flinders", desc: "You are curious about the way the brilliant young archaeologist died, all those years ago."},
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir, and can't wait to rub it in to Sir William if it is his fault."},
    {name: "Recruit Sir William's assistants", desc: "You are keen to persuade some decent archaeologists to join your team.  In exchange you would be happy to lose the Foxes, and even Chris Kovacs if need be."}
  ],
  secrets: [
    "The Agate Mask is not a genuine artifact, but a forgery you made yourself."
  ],
  clue: "Sir William's former partner, Harry Flinders, died while they were on a dig together twenty years ago, not far from here."
};



let janeFortescue = {
  name: "Lady Jane Fortescue",
  gender: "F",
  desc: "noble widow and archaelogical dilettante.",
  seenAs: "feather-brained, posh, and twittering",
  background: "<p>You are a wealthy English widow, who indulges herself by playing at archaeology, and who has bought herself a position in Cambridge close to the renowned Professor Regina Mathers.  Actually, that's not quite true.  You are really a very fine archaeologist in your own right, and Regina is lucky to have you in her team, and she knows it.  You play along with the story that you are no more than a dilenttante, but Regina would be the first to ackowledge – in private! – that you are the brains of the outfit.</p><p>Although Regina is not as brilliant an archaeologist as she would like to think, she does have a knack for finding prize artifacts.  Just the other day, while digging by himself, she unearthed a gorgeous Agate Mask, dating from the XVIth Dynasty.  She is bound to want to show this off to the Oxford team, as it is from their specialist period.  You hope that she is not too patronizing about their lack of success so far</p>",
  invitationInfo: "You have come to the party uninvited with Mathers.  She has the intention of teasing the Sir William Saville's team over their lack of significant findings because of their friendly rivalry.",
  motives: "<p>You are pleased to see Ariadne Price-Evans here this evening – you have not seen her for many years.  You were at school together and were great friends.  Ariadne was on a scholarship, as she was from a rather poor background, but this didn't stop you treating her kindly.  Ariadne was engaged to be married not long after leaving school,  but the man died: you can't remember his name.  You dimly remember that there was some kind of scandal about it – she was expecting a child, or some such.  No doubt she would prefer not to be reminded about that! – but your curiosity is considerable.</p><p>You get on well with the team's junior members, the Foxes and young Chris Kovacs.  Kovacs has the potential to become a really talented archaeologist, showing a genuine feel for and understanding of the relics of the ancient civilizations you disturb.  Definitely to be encouraged to persist through this boring period of apprenticeship!  Promise.  Godfrey and Angela Fox on the other hand are no more than dilettantes, with no real gift for the profession.  Not that there's anything wrong with that, but you constantly have the feeling that their attention is elsewhere, or that they are just filling in time waiting for something.  The other odd thing is that they don't seem very attached to one another, for a fairly newly married couple.</p><p>That said, they are charming people and good company, and to be honest you, Regina and Chris have enough archaeological skill to carry the lot of you.  But it will be nice to socialize this evening with some more real archaeologists, even if Regina is not keen for you to reveal your own expertise fully!</p>",
  relations: [
    {name: "Professor Regina Mathers", person: "", desc: "Your boss in name only.  She would never admit to anyone else how much she depends on you.  But you are curiously fond of her, the grumpy old sweetie." },
    {name: "Reverend Godfrey Fox", person: "", desc: "A member of your dig team.  A bit of a bumbler, but extremely keen.  Not much of a Bible-basher, considering his profession." },
    {name: "Angela Fox", person: "", desc: "A member of your dig team.  A brisk, efficient woman who makes herself useful to the team, although with no real archaeological skill, as far as you can see." },
    {name: "Chris Kovacs", person: "", desc: "A member of your dig team.  An obedient and helpful young student and a foreigner, but with a real talent for the trade.  Seems to have been rather depressed just lately." },
    {name: "Ariadne Price-Evans", person: "", desc: "An old friend with a troubled past." }
  ],
  items: [
    "$60"
  ],
  abilities: [
    abilities.suddenInsight,
    abilities.oops
  ],
  goals: [
    {name: "Learn more about the murder of Abu Nazir", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened this local digger.  Could this be trouble for your own dig site?"},
    {name: "Support your team", desc: "For better or for worse, you are Regina's assistant, and so you should support her in everything she does (as long as it's not illegal, of course.)  Also, Chris has something bothering him.  Maybe you can help."},
    {name: "Keep an eye on the Foxes", desc: "It's not that you suspect them of being up to anything, exactly.  But you definitely have the sense that they're not giving you the full story."},
    {name: "Find out what Ariadne's been up to", desc: "In particular, although maybe better not ask her directly, what happened with the man she was engaged to, the pregnancy, and so on."}
  ],
  secrets: [
    "You are secretly the brains of the Cambridge team.  Professor Regina Mathers would be nothing without you."
  ],
  clue: "Ariadne was engaged to be married in her youth, and you have an idea she might have fallen pregnant."
};




let chrisKovacs = {
  name: "Chris Kovacs",
  gender: "M",
  desc: "young Hungarian student.",
  seenAs: "intense, nervous, and hard-working",
  background: "<p>You are a young student working as an assistant to the renowned archaeologist Professor Regina Mathers.  This is a great opportunity for you, as you are from a very poor background: your job is to do as you're told, and not ask questions, and eventually you will gain in status and become accepted by the Cambridge academic community.  You seem to be doing well and have a knack for history.</p><p>Since moving to England, you have felt rather lonely.  The Cambridge people are not very welcoming to foreigners, particularly poor ones.  You are keen to find some sort of social group that will accept you as a member, and you think that Egypt might be the ideal place.  There are dozens of cults, secret societies and the like, and some of them probably aren't too fussy about whom they accept (which is just as well.)  You are also not too fussy about what sort of group you might join, even if it's one that some people might think of as slightly suspect.</p><p>Of your colleagues, only Lady Jane is ever very kind or friendly to you: the others pretty much ignore you.  You understand that this is part of being the junior member of the team, but even so it seems a bit harsh.  Professor Mathers is always off digging by herself, and the Foxes spend a lot of time wandering around by themselves too.  They seem to spend very little time together as a couple, which seems odd to you, although maybe that's normal for the English: you've heard that they are a very repressed race.</p>",
  invitationInfo: "You have come to the party uninvited with Mathers.  She has the intention of teasing the Sir William Saville's team over their lack of significant findings because of their friendly rivalry.",
  motives: "<p>You have become very worried recently about some of the items that your group has excavated.  They look quite normal, and are fully authentic as far as you can see – but they feel 'dead', lacking entirely in the power and 'specialness' that Egyptian historical artifacts should have.  You have not said anything to your colleagues about this yet, because you think that they would probably laugh at you or regard you strangely.  You think that they do not really have a sense of this power in the way that you do.  Professor Mathers has brought with her a beautiful piece she dug up recently, an Agate Mask dating from the XVIth dynasty, but to you it seems as dead and flat as if it had been carved yesterday.  You are not sure if this is important, or what to do about it, but it is definitely worrying you.  It would be good to talk to someone about it, but preferably not one of your team!</p><p>Your other problem is that you are chronically short of money.  You are paid a pittance, and your family's Hungarian wealth is worth virtually nothing in England.  Meeting up with all these wealthy people might present some good opportunities to earn some cash, running errands or helping someone out.  You should keep your eyes open for any such possibility.</p>",
  relations: [
    {name: "Professor Regina Mathers", person: "", desc: "Your boss in name only.  You are rather scared of her temper, and treat her with great respect, as she could fire you on a whim." },
    {name: "Lady Jane Fortescue", person: "", desc: "A member of your dig team.  She is kind and friendly to you, unlike the others. A very grand lady." },
    {name: "Reverend Godfrey Fox", person: "", desc: "A member of your dig team.  For a minister, he hardly ever talks about God or the Bible, and he doesn't seem very devout. But maybe that is the English way." },
    {name: "Angela Fox", person: "", desc: "A member of your dig team.  A brisk, efficient woman who makes herself useful to the team, although with no real archaeological skill, as far as you can see." }
  ],
  items: [
  ],
  abilities: [
    abilities.thoroughAppraisal,
    abilities.gossip,
    abilities.sensePower
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened."},
    {name: "Keep your job", desc: "You simply cannot afford to be fired, and that means keeping Professor Mathers happy however you can.."},
    {name: "Find a group to join", desc: "You're not too bothered what, but you desperately want to be involved with people who respect you as a co-member.  Maybe you could even get paid.  Someone here must want something doing they'll pay you money for."},
    {name: "Work out what to do about the 'dead' artifacts", desc: "But it had better not be anything that will annoy the Professor..."}
  ],
  secrets: [
    "You have no secrets."
  ],
  clue: "The Foxes do not act much like a married couple."
};




let godfreyFox = {
  name: "Reverend Godfrey Fox",
  gender: "M",
  desc: "Cambridge-based church minister.",
  seenAs: "easily ammused, exaggeratedly English, and not particularly devout",
  background: "<p>You are the minister in a quiet Cambridge parish, with plenty of time to indulge your hobby of excavating Egyptian tombs, helping Professor Mathers recover fine ancient artifacts and bring them back to civilization.</p><p>Actually, that's not true.  Your real name is Gottfried Fuchs, and you are a secret agent working for the government of Germany.  You are on a highly secret mission to gather valuable and powerful Egyptian artifacts, for Germany to use if there should be war amongst the European powers.  Even your wife Angela has no idea that you are secretly a German, so perfect is your imposture.  You pride yourself that your upper lip is stiffer, your chin more receding, and your shoes more shiny than even a real Englishman's.</p><p>You are not sure whether you are really in the best archaeological group for obtaining artifacts – Professor Mathers is rather too careful for your liking.  It would be worth checking out the alternatives and seeing if you might be better off transferring to a different dig – which you can do freely, as long as your wife agrees.</p><p>You are not quite happy about your wife.  You wooed and won her quickly and easily when you first came to England a few years ago, but she has been very incurious about your background – she has never asked to meet your family, for example.  Maybe this is just the famed English reserve, but it still seems odd to you.  Furthermore, she is forever travelling up to London by herself.  Is she keeping secrets from you?  Maybe another woman might be able to shed light on this odd behaviour.</p>",
  invitationInfo: "You have come to the party uninvited with Mathers.  She has the intention of teasing the Sir William Saville's team over their lack of significant findings because of their friendly rivalry.",
  motives: "<p>You are particularly interested in the Oxford group's dig, which you are visiting this evening, because they are excavating in what might be the area of the tomb of an ancient ruler known as the Crimson Pharaoh, dating from the XVIth Dynasty.  This pharaoh was a very powerful one who was, so the stories go, laid low by the use of an artifact called the Jade Scarab.  If this scarab is in the neighborhood, it is just the sort of thing that your bosses are keen for you to obtain.  And who would ever suspect a kindly clergyman of theft?</p><p>You are also eager to obtain an artifact recovered by your own digging group, a particularly fine Agate Mask. Professor Mathers dug it up while working by herself, and she has kept it close to herself since, but you are sure it must be powerful – or at least valuable – so you would like to steal it if you get the chance.  This would be more difficult, so it might be good to try and frame someone else for the crime...</p>",
  relations: [
    {name: "Professor Regina Mathers", person: "", desc: "Your archaeology team's boss.  Clearly a very clever woman, who has made many fine discoveries.  She has always been very amiable towards you, maybe because you provide quite a bit of funding for her excavations." },
    {name: "Lady Jane Fortescue", person: "", desc: "A member of your dig team.  A charming English widowed lady, but completely empty-headed." },
    {name: "Angela Fox", person: "", desc: "A member of your dig team.  In general things are good in your marriage, but you are concerned that your wife may be keeping secrets from you." },
    {name: "Chris Kovacs", person: "", desc: "A member of your dig team.  A hard-working young student, from Hungary but none the worse for that." }
  ],
  items: [
    "$40"
  ],
  abilities: [
    abilities.suddenInsight
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir."},
    {name: "Obtain artifacts", desc: "By hook or by crook, you want to obtain any ancient artifacts that could be useful for the German cause – particularly the Jade Scarab and the Agate Mask."},
    {name: "Maintain your cover", desc: "No-one must know that you are secretly a German agent (except other Germans, if there are any, and you think they can be trusted)"},
    {name: "Investigate moving to another archaeological group", desc: "If they're better than your current one! And only if your wife agrees."}
  ],
  secrets: [
    "You are a secret agent working for the German government."
  ],
  clue: "The Jade Scarab, Agate Mask, and other such artifacts could be useful to national governments."
};



let angelaFox = {
  name: "Angela Fox",
  gender: "F",
  desc: "administrative assitant to Professor Mathers' dig team.",
  seenAs: "brisk, efficient, and slightly haughty",
  background: "<p>You are the wife of a minister in a quiet Cambridge parish, with plenty of time to indulge your hobby of excavating Egyptian tombs, helping Professor Mathers recover fine ancient artifacts and bring them back to civilization.</p><p>Actually, that's not true.  You are a secret agent working for the British government.  You are on a highly secret mission to gather valuable and powerful Egyptian artifacts for Britain to use if there should be war amongst the European powers.  Even your husband Godfrey has no idea that you are secretly an agent, so perfect is your 'loving wife' act.</p><p>You are not quite happy about your husband. You were ordered to marry someone respectable to provide cover for your real job, and he certainly seemed keen at the time – but he has been very incurious about your background – he has never asked to meet your family, for example.  Maybe this is just the natural reserve of a clergyman, but it still seems odd to you.  Furthermore, he does not really seem at all religious, when he's not actually in the pulpit.  Is he keeping secrets from you?  Maybe another man might be able to shed light on this odd behaviour.</p>",
  invitationInfo: "You have come to the party uninvited with Mathers.  She has the intention of teasing the Sir William Saville's team over their lack of significant findings because of their friendly rivalry.",
  motives: "<p>You are particularly interested in the Oxford group's dig, which you are visiting this evening, because they are excavating in what might be the area of the tomb of an ancient ruler known as the Crimson Pharaoh, dating from the XVIth Dynasty.  This pharaoh was a very powerful one who was, so the stories go, laid low by the use of an artifact called the Jade Scarab.  If this scarab is in the neighborhood, it is just the sort of thing that your bosses are keen for you to obtain.  And who would ever suspect a kindly clergyman's wife of theft?</p><p>You are also eager to obtain an artifact recovered by your own digging group, a particularly fine Agate Mask. Professor Mathers dug it up while working by herself, and she has kept it close to herself since, but you are sure it must be powerful – or at least valuable – so you would like to steal it if you get the chance.  This would be more difficult, so it might be good to try and frame someone else for the crime...</p><p>You are rather suspicious of Chris Kovacs, the young student working for the team.  Chris has a very intense manner and is always sneaking around.  Being a very poor Hungarian, it wouldn't surprise you if there was some pilfering going on – you are always careful to keep an eye on your own possessions when Chris is nearby.</p>",
  relations: [
    {name: "Professor Regina Mathers", person: "", desc: "Your archaeology team's boss.  Clearly a very clever woman, who has made many fine discoveries.  She has always been very amiable towards you, probably because of your frequent efforts to be helpful." },
    {name: "Lady Jane Fortescue", person: "", desc: "A member of your dig team.  A charming English widowed lady, but completely empty-headed." },
    {name: "Reverend Godfrey Fox", person: "", desc: "A member of your dig team.  In general things are good in your marriage, but you are concerned that your husband may be keeping secrets from you." },
    {name: "Chris Kovacs", person: "", desc: "A member of your dig team and a suspiciously sneaky young student, from Hungary." }
  ],
  items: [
    "$30"
  ],
  abilities: [
    abilities.suddenInsight
  ],
  goals: [
    {name: "Learn more about the murder", desc: "Although it probably doesn't matter much to you, you are still curious as to how this could have happened to Abu Nazir."},
    {name: "Obtain artifacts", desc: "By hook or by crook, you want to obtain any ancient artifacts that could be useful for the British cause – particularly the Jade Scarab and the Agate Mask."},
    {name: "Maintain your cover", desc: "No-one must know that you are secretly a British agent (except, in extreme circumstances, other Britons, if you think they can be trusted)"},
    {name: "Keep an eye on Chris", desc: "Chris is certainly up to something sneaky, and mustn't be allowed to get away with it!"}
  ],
  secrets: [
    "You are a secret agent working for the British government."
  ],
  clue: "The Jade Scarab, Agate Mask, and other such artifacts could be useful to national governments."
};




let blakeRoberts = {
  name: "Blake Roberts",
  gender: "M",
  desc: "freelance reporter.",
  seenAs: "nosy",
  background: "<p>Quite often (you've not really known why) you are drawn to places.  Big news stories break and you are always there to cover it.  It's almost as if some higher being is guiding your hand.  The most recent tugging has brought you here, to Luxor.  You aren't sure why you've been drawn here, but your sixth sense has brought you here, which means there must be something going on, and you are going to find out what.</p><p>You have heard that Sir William Saville (the leader of the expedition, and this party's organizer) has discovered a new tomb.  You arrived earlier this afternoon and already there has been a murder!</p>",
  invitationInfo: "You weren't invited to the party, but you intend to report on the findings and the people surrounding this excavation anyway.",
  motives: "<p>While you are excited about pretty much any story, what you'd really like is a fat juicy story that you can sell around the world.  That would set you up for life and you could settle down, raise a family, and retire.  At the moment there's not much chance of that happening.  In fact, you're broke.  So you'd better find a story here as quickly as possible.</p><p>Another immediate problem is that you've lost your lucky pen soon after you've arrived.  It is a particularly fine blue pen, which was given to you by your mother on the first day you started working as a reporter.  Since you've lost it, you haven't been very lucky.  It might be that without it, the story might never present itself.</p>",
  relations: [
    {name: "Sir William Saville", person: "", desc: "Even though you've never met him, you've heard that this dig, like most of his digs, has produced something wonderful." }
  ],
  items: [
    "You have nothing of value here."
  ],
  abilities: [
    abilities.suddenInsight,
    abilities.Gossip,
    abilities.gainTrust
  ],
  goals: [
    {name: "Learn more about the murder", desc: "It could be a big story, the death of a digger on this excavation."},
    {name: "Find your lucky pen", desc: "You've just got to find your lucky blue pen!  You know you won't get the juiciest stories without it!"},
    {name: "Find some news", desc: "Find as many news stores as you can.  Interview people, stick your nose in other people's affairs."},
    {name: "Get some cash", desc: "You are very short of cash.  Maybe you can make some money by finding some secrets and bribing people not to report it."}
  ],
  secrets: [
    "You have no secrets."
  ],
  clue: "You have no clues."
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
  "BLIMP": {person: "Jonny Leigh", character: williamSaville },
  "CAKE": {person: "Abby Clark", character: marieclairGuiscard },
  "LION": {person: "Wesley Clark", character: armandLenoir },
  "DUNKAROO": {person: "Cait Zimmerman", character: alexMcQueen },
  "WAND": {person: "Brittany Solomon", character: janeFortescue },
  "JOBIN": {person: "Jordan Rowsey", character: chrisKovacs },
  "YELLOW": {person: "Sam Jones", character: blakeRoberts },
  "LEOPARD": {person: "Jenny Jones", character: reginaMathers },
  "HAWK": {person: "Shane Huntley", character: godfreyFox },
  "FART": {person: "Stephanie Huntley", character: angelaFox },
  "BANJO": {person: "Dominic Gray", character: tariqAlMansoor },
  "DONKEY": {person: "Gracie Gray", character: fatimaAlMansoor }
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



















// TODO:
/*
  - Change Mr. Big to Mr. E
  - bold:
    - Crimson Sash, Brotherhood of the Crimson Sash
    - Harry Flinders, Harry, Flinders
    - Abu Nazir, Nazir
    - Jade Scarab
    - Eye of Horus


*/





// TO RUN
// node --inspect index.js
