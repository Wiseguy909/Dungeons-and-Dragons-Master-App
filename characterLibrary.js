let characters = [];
let proficiencies = [];
let equipment = [];
let classes = [];
let races = [];
let alignments = [];

function character(slot, subrace)
{
	this.slot = slot;
	this.name = "Name";
	this.cClass = "Class";
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
	this.equipment = "equipment";
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
	this.subrace = subrace;
}

function proficiency(other)
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
	this.other = other;
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

//create classes in space below

function template(subClasses)
{
	this.lvl = 1;
	this.subClasses = subClasses;
	this.features = ["Put features here","Multiple separated by commas"];
	this.hd = "d4";
	this.profI = ["Proficiencies for items, like tools, weapons, and vehicles. Languages go here, despite not being items."];
	this.skA = ["Skills granted to every person in the class","If not applicable, leave this as blank brackets, like []"];
	this.skC = ["Skills that you choose from","Number of skills goes on the line below"];
	this.skCNum = 2;
	this.e1 = ["Equipment you choose between.","The 'or' will be automatically placed in the creator"];
	this.e2 = ["Leather Armor","Plate Armor"];
	this.e3 = ["Adventurer's Pack","Dungeoneer's Pack"];
	this.e4 = ["More equipment","More equipment"];
	this.g = "Amount of gold present if you choose to buy equipment instead. Example: 12d8";
	this.sp = //I'll figure this out later
	this.spSlots //I'll figure this out later
}

function subclassTemplate()
{
	this.features = ["Subclass features go here", "More Features"];
}


//Push this as an actual class with the following line, replacing the word "template" with the name of the function for your class.
//classes.push(new template(["subclass names go here"]));

/*     EXAMPLE - CHICKEN CLASS - Should probably be a race, but oh well, I guess I made a class
function chicken(subClasses)
{
	this.lvl = 1;
	this.subClasses = subClasses;
	this.features = ["You have featherfalling at will", "You are short"];
	this.hd = "d4";
	this.profI = ["Land Vehicles", "Thief's tools"];
	this.skA = ["Stealth"];
	this.skC = ["Sleight of Hand","Acrobatics"];
	this.skCNum = 2;
	this.e1 = ["Longbow","Greatsword"];
	this.e2 = ["Leather Armor","Plate Armor"];
	this.e3 = ["Adventurer's Pack","Dungeoneer's Pack"];
	this.e4 = ["200 gp","3 sp"];
	this.g = "12d8";
	this.sp = "wizard";
	this.spSlots //I'll figure this out later
}

function badChicken()
{
	this.features = ["You have a movement speed of 2 ft", "Your ac is reduced by 5"]
}

function goodChicken()
{
	this.features = ["You have a flying speed of 200 ft", "You get 3 extra attacks"]
}

classes.push(new chicken(["badChicken","goodChicken"]);
*/

function Fighter(subClasses)
{
	this.lvl = 1;
	this.subClasses = subClasses;
	this.features = ["Put features here","Multiple separated by commas"];
	this.hd = "d4";
	this.profI = ["Proficiencies for items, like tools, weapons, and vehicles. Languages go here, despite not being items."];
	this.skA = ["Skills granted to every person in the class","If not applicable, leave this as blank brackets, like []"];
	this.skC = ["Skills that you choose from","Number of skills goes on the line below"];
	this.skCNum = 2;
	this.e1 = ["Equipment you choose between.","The 'or' will be automatically placed in the creator"];
	this.e2 = ["Leather Armor","Plate Armor"];
	this.e3 = ["Adventurer's Pack","Dungeoneer's Pack"];
	this.e4 = ["More equipment","More equipment"];
	this.g = "Amount of gold present if you choose to buy equipment instead. Example: 12d8";
	this.sp = //I'll figure this out later
	this.spSlots //I'll figure this out later
}

function Battlemaster()
{
	this.features = ["Subclass features go here","another feature"];
}

classes.push(new Fighter(["Arcane Archer","Battlemaster","Cavalier","Champion","Eldritch Knight","Gunslinger","Psi Warrier","Rune Knight",""]));







//create classes in space above

races.push(new race("Dragonborn", ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]));
races.push(new race("Dwarf", ["Hill", "Mountain"]));
races.push(new race("Elf", ["High", "Wood", "Drow"]));
races.push(new race("Gnome", ["Deep", "Rock"]));
races.push(new race("Half-Elf", []));
races.push(new race("Halfling", ["Lightfoot", "Stout"]));
races.push(new race("Half-Orc", []));
races.push(new race("Human", []));
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
