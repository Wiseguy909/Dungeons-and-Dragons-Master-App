let characters = [];
let proficiencies = [];
let equipment = [];
let classes = [];
let races = [];
let alignments = [];

function character(slot)
{
	this.slot = slot;
	this.name = "Name";
	this.cClass = "Class";
	this.sClass = "Subclass";
	this.level = 1;
	this.maxHp = 0;
	this.currentHp = 0;
	this.race = "Race";
	this.background = "Background";
	this.alignment = "Alignment";
	this.pName = "Player Name";
	this.xp = "0";
	this.ac = "10";
	this.str = "10";
	this.dex = "10";
	this.con = "10";
	this.wis = "10";
	this.intelligence = "10";
	this.cha = "10";
	this.prof = "2";
	this.equipment = [];
	this.cp = "0";
	this.sp = "0";
	this.gp = "0";
	this.ep = "0";
	this.pp = "0";
	this.pTraits = "personality traits";
	this.ideals = "Ideals";
	this.flaws = "Flaws";
	this.bonds = "Bonds";
	this.traits = "Traits";
	this.inspiration = false;
	this.deathSaveS1 = false;
	this.deathSaveS2 = false;
	this.deathSaveS3 = false;
	this.deathSaveF1 = false;
	this.deathSaveF2 = false;
	this.deathSaveF3 = false;
	this.tHP = "0";
	this.speed = "30 Ft";
	this.subrace = "Subrace";
	this.ec1 = -1;
	this.ec2 = -1;
	this.ec3 = -1;
	this.ec4 = -1;
	this.bc = "";
}

function proficiency()
{
	this.strProf = false;
	this.dexProf = false;
	this.conProf = false;
	this.intProf = false;
	this.wisProf = false;
	this.chaProf = false;
	this.acrobaticsProf = false;
	this.animalProf = false;
	this.arcanaProf = false;
	this.athleticsProf = false;
	this.deceptionProf = false;
	this.historyProf = false;
	this.insightProf = false;
	this.intimidationProf = false;
	this.investigationProf = false;
	this.natureProf = false;
	this.perceptionProf = false;
	this.performanceProf = false;
	this.persuasionProf = false;
	this.religionProf = false;
	this.sleightProf = false;
	this.stealthProf = false;
	this.survivalProf = false;
	this.other = [];
}

function weapon()
{
	this.n1 = "";
	this.n2 = "";
	this.n3 = "";
	this.b1 = "";
	this.b2 = "";
	this.b3 = "";
	this.d1 = "";
	this.d2 = "";
	this.d3 = "";
	this.details = "";
}

function race(races, subraces)
{
	this.name = races;
	this.sub = subraces;
}

function Class(classes, subclasses)
{
	this.name = classes;
	this.sub = subclasses;
}

function alignment(alignments)
{
	this.name = alignments;
}



//Create classes

function Fighter(subclasses)
{
	this.name = "Fighter";
	this.lvl = 1;
	this.sub = subclasses;
	this.featureNames = ["Fighting Style","Second Wind","Action Surge","Martial Archetype","Extra Attack","Indomitable","Ability Score Improvement","Proficiencies","Hit Points"];
	this.features = ["You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a fighting style option more than once, even if you later get to choose again.",
					"You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can choose a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
					"Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a long or short rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
					"At 3rd level, you can choose an archetype that you strive to emulate in your combat styles and techniques. Choose a subclass. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.",
					"Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
					"Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
					"When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feature of your choice instead.",
					"Armor: All armor, shields      Weapons: Simple weapons, martial weapons      Tools: None      Saving throws: Strength, Constitution      Skills: Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
					"Hit Dice: 1d10 per fighter level      Hit Points at 1st Level: 10 + your constitution Modifier      Hit Points at Higher Levels: 1d10 (or 6) + your constitution modifier per fighter level after 1st"];
	this.options = [["Archery","Blind Fighting","Defense","Dueling","Great Weapon Fighting","Interception","Protection","Superior Technique","Thrown Weapon Fighting","Two Weapon Fighting","Unarmed Fighting"],
					[],[],["Subclasses"],[],[],["Ability","Score","Improvement"],["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],[]];
	this.choiceNums = ["1","","","1","","","2","2",""];
	this.saveTo = ["","","","","","","","",""];
	this.hd = "d10";
	this.profI = ["All Armor","Shields","Simple Weapons","Martial Weapons"];
	this.skA = ["Strength Saving Throws","Constitution Saving Throws"];
	this.skC = ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"];
	this.skCNum = 2;
	this.e1 = ["Chain Mail","Leather Armor"];
	this.e2 = ["A martial weapon and a shield","Two martial weapons"];
	this.e3 = ["A light crossbow and 20 bolts","Two handaxes"];
	this.e4 = ["A dungeoneer's pack","An adventurer's Pack"];
	this.g = "5d4 x 10";
	this.sp = //I'll figure this out later
	this.spSlots //I'll figure this out later
}

function ArcaneArcher()
{
	this.name = "Arcane Archer";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function Battlemaster()
{
	this.name = "Battlemaster";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function Cavalier()
{
	this.name = "Cavalier";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function Champion()
{
	this.name = "Champion";
	this.featureNames = ["Improved Critical","Remarkable Athlete","Additional Fighting Style","Superior Critical","Survivor"];
	this.features = ["Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.",
					"Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your strength modifier.",
					"At 10th level, you can choose a second option from the fighting style class feature.",
					"Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.",
					"At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benifit if you have 0 hit points left."];
	this.options = [[],[],["Archery","Blind Fighting","Defense","Dueling","Great Weapon Fighting","Interception","Protection","Superior Technique","Thrown Weapon Fighting","Two Weapon Fighting","Unarmed Fighting"],[],[]];
	this.choiceNums = ["","","1","",""];
	this.saveTo = ["","","features","",""];
}

function EldritchKnight()
{
	this.name = "Eldritch Knight";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function Gunslinger()
{
	this.name = "Gunslinger";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function PsiWarrier()
{
	this.name = "Psi Warrier";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

function RuneKnight()
{
	this.name = "Rune Knight";
	this.featureNames = ["Test 1","Test 2"];
	this.features = ["Subclass features go here","another feature"];
}

let fighterSub = [];
fighterSub.push(new ArcaneArcher());
fighterSub.push(new Battlemaster());
fighterSub.push(new Cavalier());
fighterSub.push(new Champion());
fighterSub.push(new EldritchKnight());
fighterSub.push(new Gunslinger());
fighterSub.push(new PsiWarrier());
fighterSub.push(new RuneKnight());
classes.push(new Fighter(fighterSub));



//create races

function Human(subRaces)
{
	this.name = "Human";
	this.sub = subRaces;
	this.featureNames = ["Age","Size","Speed","Languages"];
	this.features = ["Humans reach adulthood in their late teens and live less than a century.",
					"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is medium.",
					"Your base walking speed is 30 feet.",
					"You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."];
	this.options = [[],[],[],["Dwarvish","Elvish","Giant","Gnomish","Goblin","Halfling","Orc","Abyssal","Celestial","Draconic","Deep Speech","Infernal","Primordial","Sylvan","Undercommon"]];
	this.choiceNums = ["", "", "", "1"];
	this.saveTo = ["","","","proficiencies"];
}

function NormalHuman()
{
	this.name = "Normal Human";
	this.featureNames = ["Ability Score Increase"];
	this.features = ["Your ability scores each increase by 1."];
	this.options = [[]];
	this.choiceNums = [""];
	this.saveTo = [""];
}

function VariantHuman()
{
	this.name = "Variant Human";
	this.featureNames = ["Ability Score Increase","Skills","Feat"];
	this.features = ["Two different ablility scores of your choice increase by 1.",
					"You gain proficiency in one skill of your choice.",
					"You gain one feat of your choice."];
	this.options = [["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"],
					["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigatiom","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"],
					["Feats","Are","Not","Done","Yet"]];
	this.choiceNums = ["2", "1", "1"];
	this.saveTo = ["scores","skills","features"];
}

let humanSub = [];
humanSub.push(new NormalHuman());
humanSub.push(new VariantHuman());
races.push(new Human(humanSub));



races.push(new race("Dragonborn", ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]));
races.push(new race("Dwarf", ["Hill", "Mountain"]));
races.push(new race("Elf", ["High", "Wood", "Drow"]));
races.push(new race("Gnome", ["Deep", "Rock"]));
races.push(new race("Half-Elf", []));
races.push(new race("Halfling", ["Lightfoot", "Stout"]));
races.push(new race("Half-Orc", []));
//races.push(new race("Human", []));
races.push(new race("Tiefling", []));

classes.push(new Class("Artificer", []));
classes.push(new Class("Barbarian", []));
classes.push(new Class("Bard", []));
classes.push(new Class("Cleric", []));
classes.push(new Class("Druid", []));
//classes.push(new Class("Fighter", []));
classes.push(new Class("Monk", []));
classes.push(new Class("Paladin", []));
classes.push(new Class("Ranger", []));
classes.push(new Class("Rogue", []));
classes.push(new Class("Sorcerer", []));
classes.push(new Class("Warlock", []));
classes.push(new Class("Wizard", []));

alignments.push(new alignment("Lawful Good"));
alignments.push(new alignment("Neutral Good"));
alignments.push(new alignment("Chaotic Good"));
alignments.push(new alignment("Lawful Neutral"));
alignments.push(new alignment("True Neutral"));
alignments.push(new alignment("Chaotic Neutral"));
alignments.push(new alignment("Lawful Evil"));
alignments.push(new alignment("Neutral Evil"));
alignments.push(new alignment("Chaotic Evil"));

for(let i = 1; i <= 4; i++)
{
	equipment.push(new weapon());
	proficiencies.push(new proficiency());
	characters.push(new character(i));
}
