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
classes.push(new Class("Fighter", []));
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

for(let i = 0; i < 4; i++)
{
	equipment.push(new weapon());
	proficiencies.push(new proficiency());
}
characters.push(new character(1));
characters.push(new character(2));
characters.push(new character(3));
characters.push(new character(4));