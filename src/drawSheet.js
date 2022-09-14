//sheet paper images
let sheet1 = new Image();
sheet1.src = "images/sheet1.png";
let sheet2 = new Image();
sheet2.src = "images/sheet2.png";
let sheet3 = new Image();
sheet3.src = "images/sheet3.png";
let sheet4 = new Image();
sheet4.src = "images/sheet4.png";
let sheet5 = new Image();
sheet5.src = "images/sheet5.png";
let sheet6 = new Image();
sheet6.src = "images/sheet6.png";
let sheet7 = new Image();
sheet7.src = "images/sheet7.png";
let sheet8 = new Image();
sheet8.src = "images/sheet8.png";
let sheet9 = new Image();
sheet9.src = "images/sheet9.png";

//dice roller
let d20 = false;
let d12 = false;
let d10 = false;
let d8 = false;
let d6 = false;
let d4 = false;
let num = 1;
let diceNum = "1";
let result = 0;
let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
let res5 = 0;
let res6 = 0;

//draws character sheets
function drawSheet(slot)
{
	//draws the background
	ctx.canvas.height = 690;
	ctx.canvas.width = 1230;
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(0, -10, 1230, 700);
	ctx.drawImage(sheet1, 0, 75 - 85, 700, 140);
	ctx.drawImage(sheet2, 700, 75 - 85, 275, 675);
	ctx.drawImage(sheet3, 0, 215 - 85, 250, 335);
	ctx.drawImage(sheet4, 250, 215 - 85, 240, 300);
	ctx.drawImage(sheet5, 975, 625, 250, 49);
	ctx.drawImage(sheet6, 0, 550 - 85, 250, 225);
	ctx.drawImage(sheet8, 485, 200 - 85, 220, 325);
	ctx.drawImage(sheet7, 250, 515 - 85, 240, 260);
	ctx.drawImage(sheet9, 975, 0, 250, 630);

	//exit
	if(mouseX >= 0 && mouseX <= 30 && mouseY >= 0 && mouseY <= 30)
	{
		ctx.fillStyle = "rgb(255,0,0)";
		ctx.fillRect(0, 0, 30, 30);
		if(mouseIsDown)
		{
			mouseIsDown = false;
			character1On = false;
			character2On = false;
			character3On = false;
			character4On = false;
			windowOn = true;
			ctx.canvas.height = wH;
			ctx.canvas.width = wW;
		}
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.font = "32px Arial";
		ctx.fillText("X", 3, 26);
	}
	else
	{
		ctx.fillStyle = "rgb(210,210,210)";
		ctx.fillRect(0, 0, 30, 30);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.font = "32px Arial";
		ctx.fillText("X", 3, 26);
	}

	//character info
	let word1 = word.slice();
	let makeSame = "";
	function characterInfo(type, x1, x2, y1, y2, xw, yw, opacity)
	{
		if(oldMouseX >= x1 && oldMouseX <= x2 && oldMouseY >= y1 && oldMouseY <= y2)
		{
			if(mouseIsDown)
			{
				word = type.split("");
			}
			else
			{
				type = word1.join("");
				ctx.fillStyle = "rgba(220,220,220," + opacity + ")";
				ctx.fillRect(x1, y1, xw, yw);
			}
		}
		if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2)
		{
			ctx.fillStyle = "rgba(220,220,220," + opacity + ")";
			ctx.fillRect(x1, y1, xw, yw);
		}
		makeSame = type;
	}
	//class
	// characterInfo(characters[slot].cClass, 315, 375, 40, 55, 60, 15, .6);
	// characters[slot].cClass = makeSame;
	// localStorage.setItem(JSON.stringify("cClass" + slot), characters[slot].cClass);
	//race
	// characterInfo(characters[slot].race, 314, 374, 70, 85, 60, 15, .6);
	// characters[slot].race = makeSame;
	// localStorage.setItem(JSON.stringify("race" + slot), characters[slot].race);
	//background
	characterInfo(characters[slot].background, 450, 510, 40, 55, 60, 15, .6);
	characters[slot].background = makeSame;
	localStorage.setItem(JSON.stringify("background" + slot), characters[slot].background);
	//alignment
	// characterInfo(characters[slot].alignment, 450, 510, 70, 85, 60, 15, .6);
	// characters[slot].alignment = makeSame;
	// localStorage.setItem(JSON.stringify("alignment" + slot), characters[slot].alignment);
	//player name
	characterInfo(characters[slot].pName, 560, 620, 40, 55, 60, 15, .6);
	characters[slot].pName = makeSame;
	localStorage.setItem(JSON.stringify("pName" + slot), characters[slot].pName);
	//experience
	characterInfo(characters[slot].xp, 560, 620, 70, 85, 60, 15, .6);
	characters[slot].xp = makeSame;
	localStorage.setItem(JSON.stringify("XP" + slot), characters[slot].xp);
	//name
	characterInfo(characters[slot].name, 60, 250, 50, 80, 190, 30, .6);
	characters[slot].name = makeSame;
	localStorage.setItem(JSON.stringify("name" + slot), characters[slot].name);
	//max health
	characterInfo(characters[slot].maxHp, 115, 190, 228, 243, 75, 15, .6);
	characters[slot].maxHp = makeSame;
	localStorage.setItem(JSON.stringify("maxHP" + slot), characters[slot].maxHp);
	//current health
	characterInfo(characters[slot].currentHp, 40, 210, 250, 290, 170, 40, .6);
	characters[slot].currentHp = makeSame;
	localStorage.setItem(JSON.stringify("currentHP" + slot), characters[slot].currentHp);
	//temporary health
	characterInfo(characters[slot].tHP, 40, 210, 315, 355, 170, 40, .6);
	characters[slot].tHP = makeSame;
	localStorage.setItem(JSON.stringify("tHP" + slot), characters[slot].tHP);
	//armor class
	characterInfo(characters[slot].ac, 35, 60, 160, 185, 25, 25, .6);
	characters[slot].ac = makeSame;
	localStorage.setItem(JSON.stringify("ac" + slot), characters[slot].ac);

	//strength
	characterInfo(characters[slot].str, 742, 761, 92, 110, 20, 20, .6);
	characters[slot].str = makeSame;
	localStorage.setItem(JSON.stringify("str" + slot), characters[slot].str);
	//dexterity
	characterInfo(characters[slot].dex, 742, 761, 196, 216, 20, 20, .6);
	characters[slot].dex = makeSame;
	localStorage.setItem(JSON.stringify("dex" + slot), characters[slot].dex);
	//constitution
	characterInfo(characters[slot].con, 742, 761, 298, 318, 20, 20, .6);
	characters[slot].con = makeSame;
	localStorage.setItem(JSON.stringify("con" + slot), characters[slot].con);
	//intelligence
	characterInfo(characters[slot].intelligence, 742, 761, 402, 422, 20, 20, .6);
	characters[slot].intelligence = makeSame;
	localStorage.setItem(JSON.stringify("intelligence" + slot), characters[slot].intelligence);
	//wisdom
	characterInfo(characters[slot].wis, 742, 761, 505, 525, 20, 20, .6);
	characters[slot].wis = makeSame;
	localStorage.setItem(JSON.stringify("wis" + slot), characters[slot].wis);
	//charisma
	characterInfo(characters[slot].cha, 742, 761, 609, 629, 20, 20, .6);
	characters[slot].cha = makeSame;
	localStorage.setItem(JSON.stringify("cha" + slot), characters[slot].cha);
	//proficiency bonus
	characterInfo(characters[slot].prof, 812, 842, 65, 95, 30, 30, .6);
	characters[slot].prof = makeSame;
	localStorage.setItem(JSON.stringify("prof" + slot), characters[slot].prof);

	//personality traits
	characterInfo(characters[slot].pTraits, 506, 681, 142, 200, 181, 60, .3);
	characters[slot].pTraits = makeSame;
	localStorage.setItem(JSON.stringify("pTraits" + slot), characters[slot].pTraits);
	//ideals
	characterInfo(characters[slot].ideals, 506, 681, 228, 272, 181, 44, .3);
	characters[slot].ideals = makeSame;
	localStorage.setItem(JSON.stringify("ideals" + slot), characters[slot].ideals);
	//bonds
	characterInfo(characters[slot].bonds, 506, 681, 298, 344, 181, 44, .3);
	characters[slot].bonds = makeSame;
	localStorage.setItem(JSON.stringify("bonds" + slot), characters[slot].bonds);
	//flaws
	characterInfo(characters[slot].flaws, 506, 681, 367, 411, 181, 44, .3);
	characters[slot].flaws = makeSame;
	localStorage.setItem(JSON.stringify("flaws" + slot), characters[slot].flaws);
	//Features and Traits
	characterInfo(characters[slot].traits, 987, 1214, 10, 594, 227, 594, .3);
	characters[slot].traits = makeSame;
	localStorage.setItem(JSON.stringify("traits" + slot), characters[slot].traits);

	//speed
	characterInfo(characters[slot].speed, 176, 226, 152, 200, 50, 48, .6);
	characters[slot].speed = makeSame;
	localStorage.setItem(JSON.stringify("speed" + slot), characters[slot].speed);
	//total hit dice
	characterInfo(characters[slot].tHitDice, 49, 109, 387, 400, 60, 13, .6);
	characters[slot].tHitDice = makeSame;
	localStorage.setItem(JSON.stringify("tHitDice" + slot), characters[slot].tHitDice);
	//current hit dice
	characterInfo(characters[slot].cHitDice, 25, 113, 404, 434, 87, 30, .6);
	characters[slot].cHitDice = makeSame;
	localStorage.setItem(JSON.stringify("cHitDice" + slot), characters[slot].cHitDice);

	//death saving throws
	function deathSave(type, x1, x2, y1, y2, arcX, arcY)
	{
		if(type == "true")
		{
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.beginPath();
			ctx.arc(arcX, arcY, 5, 0, 2 * Math.PI, true);
			ctx.fill();
			ctx.closePath();
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2)
			{
				if(mouseIsDown)
				{
					type = "false";
					mouseIsDown = false;
				}
			}
		}
		else
		{
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2)
			{
				if(mouseIsDown)
				{
					type = "true";
					mouseIsDown = false;
				}
			}
		}
		makeSame = type;
	}
	deathSave(characters[slot].deathSaveS1, 180, 190, 394, 404, 185, 399);
	characters[slot].deathSaveS1 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveS1" + slot), characters[slot].deathSaveS1);

	deathSave(characters[slot].deathSaveS2, 198, 208, 394, 404, 203, 399);
	characters[slot].deathSaveS2 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveS2" + slot), characters[slot].deathSaveS2);

	deathSave(characters[slot].deathSaveS3, 215, 225, 394, 404, 220, 399);
	characters[slot].deathSaveS3 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveS3" + slot), characters[slot].deathSaveS3);

	deathSave(characters[slot].deathSaveF1, 180, 190, 414, 424, 185, 419);
	characters[slot].deathSaveF1 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveF1" + slot), characters[slot].deathSaveF1);

	deathSave(characters[slot].deathSaveF2, 198, 208, 414, 424, 203, 419);
	characters[slot].deathSaveF2 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveF2" + slot), characters[slot].deathSaveF2);

	deathSave(characters[slot].deathSaveF3, 215, 225, 414, 424, 220, 419);
	characters[slot].deathSaveF3 = makeSame;
	localStorage.setItem(JSON.stringify("deathSaveF3" + slot), characters[slot].deathSaveF3);

	//inspiration
	if(characters[slot].inspiration == "true")
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.beginPath();
		ctx.arc(825, 25, 10, 0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fill();
		if(mouseX >= 807 && mouseX <= 842 && mouseY >= 7 && mouseY <= 43)
		{
			if(mouseIsDown)
			{
				characters[slot].inspiration = "false";
				mouseIsDown = false;
			}
		}
	}
	else
	{
		if(mouseX >= 807 && mouseX <= 842 && mouseY >= 7 && mouseY <= 43)
		{
			if(mouseIsDown)
			{
				characters[slot].inspiration = "true";
				mouseIsDown = false;
			}
		}
	}
	localStorage.setItem(JSON.stringify("inspiration" + slot), characters[slot].inspiration);

	//draw text for some of the character attributes
	ctx.font = "20px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText(characters[slot].name, 60, 155 - 85);
	ctx.textAlign = "center";
	ctx.fillText(characters[slot].cHitDice, 68, 424);
	ctx.fillText(Math.floor((characters[slot].wis - 10) / 2) + 10, 1000, 655);
	ctx.textAlign = "start";

	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText(characters[slot].cClass + " " + characters[slot].level, 320, 140 - 85);
	wrapText(ctx, characters[slot].pTraits, 508, 151, 180, 16);
	wrapText(ctx, characters[slot].ideals, 508, 238, 180, 16);
	wrapText(ctx, characters[slot].bonds, 508, 308, 180, 16);
	wrapText(ctx, characters[slot].flaws, 508, 378, 180, 16);
	wrapText(ctx, characters[slot].traits, 992, 22, 227, 17.5);
	ctx.fillText(characters[slot].maxHp, 121, 325 - 85);
	ctx.fillText(characters[slot].race, 319, 85);
	ctx.fillText(characters[slot].background, 450, 55);
	ctx.fillText(characters[slot].alignment, 450, 85);
	ctx.fillText(characters[slot].pName, 563, 55);
	ctx.fillText(characters[slot].xp, 563, 85);
	ctx.fillText(characters[slot].tHitDice, 50, 398);
	ctx.textAlign = "center";
	ctx.fillText(characters[slot].str, 751, 107);
	ctx.fillText(characters[slot].dex, 751, 210);
	ctx.fillText(characters[slot].con, 751, 314);
	ctx.fillText(characters[slot].intelligence, 751, 417);
	ctx.fillText(characters[slot].wis, 751, 520);
	ctx.fillText(characters[slot].cha, 751, 622);

	ctx.font = "25px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText(characters[slot].currentHp, 125, 280);
	ctx.fillText(characters[slot].tHP, 125, 345);
	ctx.fillText(characters[slot].ac, 47, 180);
	ctx.textAlign = "center";
	ctx.fillText("+" + characters[slot].prof, 825, 87);
	ctx.fillText(characters[slot].speed, 201, 185);

	//draw ability scores
	function drawAbilityScores(type, x, y)
	{
		if(type >= 10)
		{
			ctx.fillText("+" + Math.floor((type - 10) / 2), x, y);
		}
		else
		{
			ctx.fillText(Math.floor((type - 10) / 2), x, y);
		}
	}
	drawAbilityScores(characters[slot].str, 751, 75);
	drawAbilityScores(characters[slot].dex, 751, 179);
	drawAbilityScores(characters[slot].dex, 120, 184);
	drawAbilityScores(characters[slot].con, 751, 282);
	drawAbilityScores(characters[slot].intelligence, 751, 385);
	drawAbilityScores(characters[slot].wis, 751, 488);
	drawAbilityScores(characters[slot].cha, 751, 592);

	ctx.beginPath();
	//proficiencies
	ctx.font = "15px Arial";
	function drawProficiencies(statType, profBonus, profType, x1, x2, y1, y2, arcX, arcY, textX, textY)
	{
		if(profType == "true")
		{
			ctx.arc(arcX, arcY, 4, 0, 2 * Math.PI, true);
			ctx.fill();
			if((Math.floor((statType - 10) / 2) + parseInt(profBonus)) >= 0)
			{
				ctx.fillText("+" + (Math.floor((statType - 10) / 2) + parseInt(profBonus)), textX, textY);
			}
			else
			{
				ctx.fillText((Math.floor((statType - 10) / 2) + parseInt(profBonus)), textX, textY);
			}
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2 && mouseIsDown)
			{
				profType = "false";
				mouseIsDown = false;
			}
		}
		else
		{
			if(statType >= 10 || Math.floor((statType - 10) / 2) >= 0)
			{
				ctx.fillText("+" + Math.floor((statType - 10) / 2), textX, textY);
			}
			else
			{
				ctx.fillText(Math.floor((statType - 10) / 2), textX, textY);
			}
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2 && mouseIsDown)
			{
				profType = "true";
				mouseIsDown = false;
			}
		}
		makeSame = profType;
	}
	//strength saving throw
	drawProficiencies(characters[slot].str, characters[slot].prof, proficiencies[slot].strProf, 816, 824, 125, 133, 820, 129, 843, 133);
	proficiencies[slot].strProf = makeSame;
	localStorage.setItem(JSON.stringify("strProf" + slot), proficiencies[slot].strProf);
	//dexterity saving throw
	drawProficiencies(characters[slot].dex, characters[slot].prof, proficiencies[slot].dexProf, 816, 824, 144, 152, 820, 148, 843, 152);
	proficiencies[slot].dexProf = makeSame;
	localStorage.setItem(JSON.stringify("dexProf" + slot), proficiencies[slot].dexProf);
	//constitution saving throw
	drawProficiencies(characters[slot].con, characters[slot].prof, proficiencies[slot].conProf, 816, 824, 163, 171, 820, 167, 843, 171);
	proficiencies[slot].conProf = makeSame;
	localStorage.setItem(JSON.stringify("conProf" + slot), proficiencies[slot].conProf);
	//constitution saving throw
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].intProf, 816, 824, 182, 190, 820, 186, 843, 190);
	proficiencies[slot].intProf = makeSame;
	localStorage.setItem(JSON.stringify("intProf" + slot), proficiencies[slot].intProf);
	//wisdom saving throw
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].wisProf, 816, 824, 202, 210, 820, 206, 843, 210);
	proficiencies[slot].wisProf = makeSame;
	localStorage.setItem(JSON.stringify("wisProf" + slot), proficiencies[slot].wisProf);
	//charisma saving throw
	drawProficiencies(characters[slot].cha, characters[slot].prof, proficiencies[slot].chaProf, 816, 824, 221, 229, 820, 225, 843, 229);
	proficiencies[slot].chaProf = makeSame;
	localStorage.setItem(JSON.stringify("chaProf" + slot), proficiencies[slot].chaProf);

	//skills
	//athletics
	drawProficiencies(characters[slot].str, characters[slot].prof, proficiencies[slot].athleticsProf, 816, 824, 349, 357, 820, 353, 843, 357);
	proficiencies[slot].athleticsProf = makeSame;
	localStorage.setItem(JSON.stringify("athleticsProf" + slot), proficiencies[slot].athleticsProf);

	//acrobatics
	drawProficiencies(characters[slot].dex, characters[slot].prof, proficiencies[slot].acrobaticsProf, 816, 824, 290, 298, 820, 294, 843, 298);
	proficiencies[slot].acrobaticsProf = makeSame;
	localStorage.setItem(JSON.stringify("acrobaticsProf" + slot), proficiencies[slot].acrobaticsProf);
	//sleight of hand
	drawProficiencies(characters[slot].dex, characters[slot].prof, proficiencies[slot].sleightProf, 816, 824, 583, 591, 820, 587, 843, 591);
	proficiencies[slot].sleightProf = makeSame;
	localStorage.setItem(JSON.stringify("sleightProf" + slot), proficiencies[slot].sleightProf);
	//stealth
	drawProficiencies(characters[slot].dex, characters[slot].prof, proficiencies[slot].stealthProf, 816, 824, 603, 611, 820, 607, 843, 611);
	proficiencies[slot].stealthProf = makeSame;
	localStorage.setItem(JSON.stringify("stealthProf" + slot), proficiencies[slot].stealthProf);

	//arcana
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].arcanaProf, 816, 824, 329, 337, 820, 333, 843, 337);
	proficiencies[slot].arcanaProf = makeSame;
	localStorage.setItem(JSON.stringify("arcanaProf" + slot), proficiencies[slot].arcanaProf);
	//history
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].historyProf, 816, 824, 388, 396, 820, 392, 843, 396);
	proficiencies[slot].historyProf = makeSame;
	localStorage.setItem(JSON.stringify("historyProf" + slot), proficiencies[slot].historyProf);
	//investigation
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].investigationProf, 816, 824, 447, 455, 820, 451, 843, 455);
	proficiencies[slot].investigationProf = makeSame;
	localStorage.setItem(JSON.stringify("investigationProf" + slot), proficiencies[slot].investigationProf);
	//nature
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].natureProf, 816, 824, 486, 494, 820, 490, 843, 494);
	proficiencies[slot].natureProf = makeSame;
	localStorage.setItem(JSON.stringify("natureProf" + slot), proficiencies[slot].natureProf);
	//religion
	drawProficiencies(characters[slot].intelligence, characters[slot].prof, proficiencies[slot].religionProf, 816, 824, 564, 572, 820, 568, 843, 572);
	proficiencies[slot].religionProf = makeSame;
	localStorage.setItem(JSON.stringify("religionProf" + slot), proficiencies[slot].religionProf);

	//animal handling
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].animalProf, 816, 824, 310, 318, 820, 314, 843, 318);
	proficiencies[slot].animalProf = makeSame;
	localStorage.setItem(JSON.stringify("animalProf" + slot), proficiencies[slot].animalProf);
	//insight
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].insightProf, 816, 824, 408, 416, 820, 412, 843, 416);
	proficiencies[slot].insightProf = makeSame;
	localStorage.setItem(JSON.stringify("insightProf" + slot), proficiencies[slot].insightProf);
	//medicine
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].medicineProf, 816, 824, 466, 474, 820, 470, 843, 474);
	proficiencies[slot].medicineProf = makeSame;
	localStorage.setItem(JSON.stringify("medicineProf" + slot), proficiencies[slot].medicineProf);
	//perception
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].perceptionProf, 816, 824, 505, 513, 820, 509, 843, 513);
	proficiencies[slot].perceptionProf = makeSame;
	localStorage.setItem(JSON.stringify("perceptionProf" + slot), proficiencies[slot].perceptionProf);
	//survival
	drawProficiencies(characters[slot].wis, characters[slot].prof, proficiencies[slot].survivalProf, 816, 824, 622, 630, 820, 626, 843, 630);
	proficiencies[slot].survivalProf = makeSame;
	localStorage.setItem(JSON.stringify("survivalProf" + slot), proficiencies[slot].survivalProf);

	//deception
	drawProficiencies(characters[slot].cha, characters[slot].prof, proficiencies[slot].deceptionProf, 816, 824, 369, 377, 820, 373, 843, 377);
	proficiencies[slot].deceptionProf = makeSame;
	localStorage.setItem(JSON.stringify("deceptionProf" + slot), proficiencies[slot].deceptionProf);
	//intimidation
	drawProficiencies(characters[slot].cha, characters[slot].prof, proficiencies[slot].intimidationProf, 816, 824, 427, 435, 820, 431, 843, 435);
	proficiencies[slot].intimidationProf = makeSame;
	localStorage.setItem(JSON.stringify("intimidationProf" + slot), proficiencies[slot].intimidationProf);
	//performance
	drawProficiencies(characters[slot].cha, characters[slot].prof, proficiencies[slot].performanceProf, 816, 824, 524, 532, 820, 528, 843, 532);
	proficiencies[slot].performanceProf = makeSame;
	localStorage.setItem(JSON.stringify("performanceProf" + slot), proficiencies[slot].performanceProf);
	//persuasion
	drawProficiencies(characters[slot].cha, characters[slot].prof, proficiencies[slot].persuasionProf, 816, 824, 544, 552, 820, 548, 843, 552);
	proficiencies[slot].persuasionProf = makeSame;
	localStorage.setItem(JSON.stringify("persuasionProf" + slot), proficiencies[slot].persuasionProf);

	//other
	// characterInfo(proficiencies[slot].other, 10, 237, 475, 668, 227, 193, .3);
	// proficiencies[slot].other = makeSame;
	// localStorage.setItem(JSON.stringify("otherProf" + slot), proficiencies[slot].other);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.textAlign = "start";
	wrapText(ctx, proficiencies[slot].other, 15, 487, 225, 16);

	ctx.closePath();

	//equipment
	// characterInfo(characters[slot].equipment, 323, 478, 440, 670, 155, 230, .3);
	// characters[slot].equipment = makeSame;
	// localStorage.setItem(JSON.stringify("equipment" + slot), characters[slot].equipment);
	//copper pieces
	characterInfo(characters[slot].cp, 275, 310, 450, 475, 35, 25, .3);
	characters[slot].cp = makeSame;
	localStorage.setItem(JSON.stringify("cp" + slot), characters[slot].cp);
	//silver pieces
	characterInfo(characters[slot].sp, 275, 310, 486, 511, 35, 25, .3);
	characters[slot].sp = makeSame;
	localStorage.setItem(JSON.stringify("sp" + slot), characters[slot].sp);
	//electrum pieces
	characterInfo(characters[slot].ep, 275, 310, 522, 547, 35, 25, .3);
	characters[slot].ep = makeSame;
	localStorage.setItem(JSON.stringify("ep" + slot), characters[slot].ep);
	//gold pieces
	characterInfo(characters[slot].gp, 275, 310, 557, 582, 35, 25, .3);
	characters[slot].gp = makeSame;
	localStorage.setItem(JSON.stringify("gp" + slot), characters[slot].gp);
	//platinum pieces
	characterInfo(characters[slot].pp, 275, 310, 592, 617, 35, 25, .3);
	characters[slot].pp = makeSame;
	localStorage.setItem(JSON.stringify("pp" + slot), characters[slot].pp);
	//weapon 1 name
	characterInfo(equipment[slot].n1, 265, 345, 153, 173, 80, 20, .8);
	equipment[slot].n1 = makeSame;
	localStorage.setItem(JSON.stringify("n1" + slot), equipment[slot].n1);
	//weapon 2 name
	characterInfo(equipment[slot].n2, 265, 345, 182, 202, 80, 20, .8);
	equipment[slot].n2 = makeSame;
	localStorage.setItem(JSON.stringify("n2" + slot), equipment[slot].n2);
	//weapon 3 name
	characterInfo(equipment[slot].n3, 265, 345, 211, 231, 80, 20, .8);
	equipment[slot].n3 = makeSame;
	localStorage.setItem(JSON.stringify("n3" + slot), equipment[slot].n3);
	//weapon 1 attack bonus
	characterInfo(equipment[slot].b1, 351, 390, 153, 173, 39, 20, .8);
	equipment[slot].b1 = makeSame;
	localStorage.setItem(JSON.stringify("b1" + slot), equipment[slot].b1);
	//weapon 2 attack bonus
	characterInfo(equipment[slot].b2, 351, 390, 182, 202, 39, 20, .8);
	equipment[slot].b2 = makeSame;
	localStorage.setItem(JSON.stringify("b2" + slot), equipment[slot].b2);
	//weapon 3 attack bonus
	characterInfo(equipment[slot].b3, 351, 390, 211, 231, 39, 20, .8);
	equipment[slot].b3 = makeSame;
	localStorage.setItem(JSON.stringify("b3" + slot), equipment[slot].b3);
	//weapon 1 damage
	characterInfo(equipment[slot].d1, 397, 475, 153, 173, 78, 20, .8);
	equipment[slot].d1 = makeSame;
	localStorage.setItem(JSON.stringify("d1" + slot), equipment[slot].d1);
	//weapon 2 damage
	characterInfo(equipment[slot].d2, 397, 475, 182, 202, 78, 20, .8);
	equipment[slot].d2 = makeSame;
	localStorage.setItem(JSON.stringify("d2" + slot), equipment[slot].d2);
	//weapon 3 damage
	characterInfo(equipment[slot].d3, 397, 475, 211, 231, 78, 20, .8);
	equipment[slot].d3 = makeSame;
	localStorage.setItem(JSON.stringify("d3" + slot), equipment[slot].d3);
	//weapon 3 details
	characterInfo(equipment[slot].details, 261, 478, 235, 405, 217, 170, .3);
	equipment[slot].details = makeSame;
	localStorage.setItem(JSON.stringify("details" + slot), equipment[slot].details);


	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	wrapText(ctx, characters[slot].equipment.join(", "), 325, 452, 160, 15.2);
	ctx.textAlign = "center";
	ctx.fillText(characters[slot].cp, 292, 467);
	ctx.fillText(characters[slot].sp, 292, 503);
	ctx.fillText(characters[slot].ep, 292, 539);
	ctx.fillText(characters[slot].gp, 292, 575);
	ctx.fillText(characters[slot].pp, 292, 610);
	ctx.textAlign = "start";
	ctx.fillText(equipment[slot].n1, 268, 168);
	ctx.fillText(equipment[slot].n2, 268, 197);
	ctx.fillText(equipment[slot].n3, 268, 226);
	ctx.fillText(equipment[slot].b1, 354, 168);
	ctx.fillText(equipment[slot].b2, 354, 197);
	ctx.fillText(equipment[slot].b3, 354, 226);
	ctx.fillText(equipment[slot].d1, 400, 168);
	ctx.fillText(equipment[slot].d2, 400, 197);
	ctx.fillText(equipment[slot].d3, 400, 226);
	wrapText(ctx, equipment[slot].details, 265, 245, 214, 15.7);

	dice();
}

//draws dice roller on character sheets
function dice()
{
	//number of dice
	let word2 = word.slice();
	if(mouseX >= 615 && mouseX <= 665 && mouseY >= 580 && mouseY <= 605)
	{
		ctx.fillStyle = "rgba(220,220,220,.6)";
		ctx.fillRect(615, 580, 50, 25);
	}
	if(oldMouseX >= 615 && oldMouseX <= 665 && oldMouseY >= 580 && oldMouseY <= 605)
	{
		if(mouseIsDown)
		{
			word = [];
		}
		else
		{
			diceNum = word2.join("");
			ctx.fillStyle = "rgba(220,220,220,.6)";
			ctx.fillRect(615, 580, 50, 25);
		}
	}
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.font = "20px Arial";
	ctx.fillText("How many?", 515, 600)
	ctx.textAlign = "center";
	ctx.fillText(diceNum, 640, 600);
	num = parseInt(diceNum);
	ctx.textAlign = "start";

	//roll button
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(515, 555 - 85, 155, 75);
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("Roll Dice", 535, 600 - 85);
	if(mouseX >= 515 && mouseX <= 670 && mouseY >= 555 - 85 && mouseY <= 630 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(515, 555 - 85, 155, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.font = "30px Arial";
		ctx.fillText("Roll Dice", 535, 600 - 85);
		if(mouseIsDown)
		{
			mouseIsDown = false;
			result = 0;
			for(let i = 0; i < num; i++)
			{
				if(d20)
				{
					result += Math.floor(Math.random() * 20) + 1;
				}
				if(d12)
				{
					result += Math.floor(Math.random() * 12) + 1;
				}
				if(d10)
				{
					result += Math.floor(Math.random() * 10) + 1;
				}
				if(d8)
				{
					result += Math.floor(Math.random() * 8) + 1;
				}
				if(d6)
				{
					result += Math.floor(Math.random() * 6) + 1;
				}
				if(d4)
				{
					result += Math.floor(Math.random() * 4) + 1;
				}
			}
		}
	}
	//d20
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(515, 530 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d20", 525, 545 - 85);
	if(mouseX >= 515 && mouseX <= 560 && mouseY >= 530 - 85 && mouseY <= 550 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(515, 530 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d20", 525, 545 - 85);
		if(mouseIsDown)
		{
			d20 = true;
			d12 = false;
			d10 = false;
			d8 = false;
			d6 = false;
			d4 = false;
		}
	}
	if(d20)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(515, 530 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d20", 525, 545 - 85);
	}
	//d12
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(570, 530 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d12", 580, 545 - 85);
	if(mouseX >= 570 && mouseX <= 615 && mouseY >= 530 - 85 && mouseY <= 550 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(570, 530 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d12", 580, 545 - 85);
		if(mouseIsDown)
		{
			d20 = false;
			d12 = true;
			d10 = false;
			d8 = false;
			d6 = false;
			d4 = false;
		}
	}
	if(d12)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(570, 530 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d12", 580, 545 - 85);
	}
	//d10
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(625, 530 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d10", 635, 545 - 85);
	if(mouseX >= 625 && mouseX <= 670 && mouseY >= 530 - 85 && mouseY <= 550 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(625, 530 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d10", 635, 545 - 85);
		if(mouseIsDown)
		{
			d20 = false;
			d12 = false;
			d10 = true;
			d8 = false;
			d6 = false;
			d4 = false;
		}
	}
	if(d10)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(625, 530 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d10", 635, 545 - 85);
	}
	//d8
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(515, 635 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d8", 530, 650 - 85);
	if(mouseX >= 515 && mouseX <= 560 && mouseY >= 635 - 85 && mouseY <= 655 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(515, 635 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d8", 530, 650 - 85);
		if(mouseIsDown)
		{
			d20 = false;
			d12 = false;
			d10 = false;
			d8 = true;
			d6 = false;
			d4 = false;
		}
	}
	if(d8)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(515, 635 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d8", 530, 650 - 85);
	}
	//d6
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(570, 635 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d6", 585, 650 - 85);
	if(mouseX >= 570 && mouseX <= 615 && mouseY >= 635 - 85 && mouseY <= 655 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(570, 635 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d6", 585, 650 - 85);
		if(mouseIsDown)
		{
			d20 = false;
			d12 = false;
			d10 = false;
			d8 = false;
			d6 = true;
			d4 = false;
		}
	}
	if(d6)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(570, 635 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d6", 585, 650 - 85);
	}
	//d4
	ctx.fillStyle = "rgb(175,175,175)";
	ctx.fillRect(625, 635 - 85, 45, 20);
	ctx.font = "15px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("d4", 640, 650 - 85);
	if(mouseX >= 625 && mouseX <= 670 && mouseY >= 635 - 85 && mouseY <= 655 - 85)
	{
		ctx.fillStyle = "rgb(140,140,140)";
		ctx.fillRect(625, 635 - 85, 45, 20);
		ctx.font = "15px Arial";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d4", 640, 650 - 85);
		if(mouseIsDown)
		{
			d20 = false;
			d12 = false;
			d10 = false;
			d8 = false;
			d6 = false;
			d4 = true;
		}
	}
	if(d4)
	{
		ctx.fillStyle = "rgb(175,175,175)";
		ctx.fillRect(625, 635 - 85, 45, 20);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("d4", 640, 650 - 85);
	}
	
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeRect(550, 620, 100, 50);
	ctx.font = "25px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.textAlign = "center";
	ctx.fillText(result, 600, 655);
	ctx.textAlign = "start";
}
