let step = 0;
let classBox = false;
let subclassBox = false;
let raceBox = false;
let subraceBox = false;
let alignmentBox = false;
let makeBoxSame = false;
let makeListSame = "";
let drawDice = false;
let openFeature = -1;
let openFeatureS = -1;
let goldRoll = 0;
let choiceBox = false;
let raceChosen = [[],[],[],[]];
let raceChosen2 = [[],[],[],[]];
let subRaceChosen = [[],[],[],[]];
let subRaceChosen2 = [[],[],[],[]];
let classChosen = [[],[],[],[]];
let classChosen2 = [[],[],[],[]];
let subClassChosen = [[],[],[],[]];
let subClassChosen2 = [[],[],[],[]];
let choiceAmount = 0;
let temp1 = [];
let temp2 = [];

//character creator
function characterCreator(slot)
{
	ctx.textAlign = "start";
	ctx.fillStyle = "rgb(240,240,240)";
	ctx.fillRect(0, 0, wW, wH);
	//exit
	if(mouseX >= 0 && mouseX <= 30 && mouseY >= 0 && mouseY <= 30)
	{
		ctx.fillStyle = "rgb(255,0,0)";
		ctx.fillRect(0, 0, 30, 30);
		if(mouseIsDown)
		{
			char1Create = false;
			char2Create = false;
			char3Create = false;
			char4Create = false;
			windowOn = true;
			mouseIsDown = false;
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
	//swap parts
	ctx.fillStyle = "rgb(200,200,200)";
	ctx.fillRect((wW / 2) - 90, wH - 50, 80, 40);
	ctx.fillRect((wW / 2) + 10, wH - 50, 80, 40);
	if(step == 1)
	{
		ctx.fillStyle = "rgb(220,220,220)";
		ctx.fillRect((wW / 2) - 90, wH - 50, 80, 40);
	}
	if(step == 5)
	{
		ctx.fillStyle = "rgb(220,220,220)";
		ctx.fillRect((wW / 2) + 10, wH - 50, 80, 40);
	}
	if(mouseX >= (wW / 2) - 90 && mouseX <= (wW / 2) - 10 && mouseY >= wH - 50 && mouseY <= wH - 10 && step > 1)
	{
		ctx.fillStyle = "rgb(180,180,180)";
		ctx.fillRect((wW / 2) - 90, wH - 50, 80, 40);
		if(mouseIsDown)
		{
			mouseIsDown = false;
			step--;
		}
	}
	if(mouseX >= (wW / 2) + 10 && mouseX <= (wW / 2) + 90 && mouseY >= wH - 50 && mouseY <= wH - 10 && step < 5)
	{
		ctx.fillStyle = "rgb(180,180,180)";
		ctx.fillRect((wW / 2) + 10, wH - 50, 80, 40);
		if(mouseIsDown)
		{
			mouseIsDown = false;
			step++;
		}
	}
	ctx.textAlign = "center";
	ctx.font = "25px Arial";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("Prev.", (wW / 2) - 50, wH - 20);
	ctx.fillText("Next", (wW / 2) + 50, wH - 20);
	if(step == 1) //race
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.textAlign = "center";
		ctx.fillText("1. Choose Race", wW / 2, 50);

		//choose race
		ctx.fillStyle = "rgb(200,200,200)";
		ctx.fillRect(wW / 2 - 150, 75, 300, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(characters[slot].race, wW / 2, 120);
		ctx.strokeRect(wW / 2 - 150, 75, 300, 75);
		if(mouseX >= wW / 2 - 150 && mouseX <= wW / 2 + 150 && mouseY >= 75 && mouseY <= 150 && openFeature == -1 && openFeatureS == -1)
		{
			ctx.fillStyle = "rgb(180,180,180)";
			ctx.fillRect(wW / 2 - 150, 75, 300, 75);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(characters[slot].race, wW / 2, 120);
			ctx.strokeRect(wW / 2 - 150, 75, 300, 75);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				raceBox = true;
			}
		}
		if(raceBox)
		{
			dropDownBox(200, 200, 200, wW / 2 + 155, 75, 250, 400, 9, races, false, true);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.strokeRect(wW / 2 + 155, 75, 250, 400);
			raceBox = makeBoxSame;
			characters[slot].race = makeListSame;
			characters[slot].subrace = "";
			localStorage.setItem(JSON.stringify("race" + slot), characters[slot].race);
			localStorage.setItem(JSON.stringify("subrace" + slot), characters[slot].subrace);
		}

		//choose subrace
		for(let i = 0; i < races.length; i++)
		{
			if(races[i].name == characters[slot].race && races[i].sub.length != 0)
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(wW / 2 - 150, 175, 300, 75);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(characters[slot].subrace, wW / 2, 220);
				ctx.strokeRect(wW / 2 - 150, 175, 300, 75);
				if(mouseX >= wW / 2 - 150 && mouseX <= wW / 2 + 150 && mouseY >= 175 && mouseY <= 250 && openFeature == -1 && openFeatureS == -1)
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(wW / 2 - 150, 175, 300, 75);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillText(characters[slot].subrace, wW / 2, 220);
					ctx.strokeRect(wW / 2 - 150, 175, 300, 75);
					if(mouseIsDown)
					{
						mouseIsDown = false;
						subraceBox = true;
					}
				}
				if(subraceBox)
				{
					if(races[i].name == characters[slot].race)
					{
						loc = i;
					}
					dropDownBox(200, 200, 200, wW / 2 + 155, 75, 250, races[loc].sub.length * 50, races[loc].sub.length, races[loc].sub, true, true);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.strokeRect(wW / 2 + 155, 75, 250, races[loc].sub.length * 50);
					subraceBox = makeBoxSame;
					characters[slot].subrace = makeListSame;
					localStorage.setItem(JSON.stringify("subrace" + slot), characters[slot].subrace);
				}
			}
		}
		//display race features
		for(let i = 0; i < races.length; i++)
		{
			if(characters[slot].race == races[i].name)
			{
				for(let j = 0; j < races[i].featureNames.length; j++)
				{
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.font = "25px Arial";
					ctx.textAlign = "start";
					let text = races[i].featureNames[j];
					let textWidth = ctx.measureText(text);
					ctx.fillText(races[i].featureNames[j],50,150 + (j*50));;
					ctx.fillRect(50, 155 + (j*50),textWidth.width,2);
					if(raceChosen[slot][j] == "" && races[i].choiceNums[j] != "")
					{
						ctx.fillStyle = "rgb(200,0,0)";
						ctx.fillText("!", 35, 150 + (j*50));
					}
					if(mouseX >= 50 && mouseX <= textWidth.width + 50 && mouseY >= (130 + (j*50)) && mouseY <= (155 + (j*50)))
					{
						ctx.fillStyle = "rgb(150,150,150)";
						if(openFeature == -1)
						{
							ctx.fillText(races[i].featureNames[j],50,150 + (j*50));;
							ctx.fillRect(50, 155 + (j*50),textWidth.width,2);
						}
						if(mouseIsDown)
						{
							mouseIsDown = false;
							openFeature = j;
							openFeatureS = -1;
						}
					}
					if(openFeature != -1 && (mouseX < 50 || mouseX > textWidth.width || mouseY < (130 + (openFeature*50)) || mouseY > (155 + (openFeature*50))))
					{
						if(openFeature < 6 && mouseIsDown && (mouseX < 450 || mouseX > 650 || mouseY < 40 + (openFeature*50) || mouseY > 140 + (openFeature*50)) &&
						(mouseX < 240 || mouseX > 440 || mouseY < 40 + (openFeature*50) || mouseY > 140 + (openFeature*50)))
						{
							if(choiceBox && (mouseX < 670 || mouseX > 950 || mouseY < 30 + (openFeature*50) || mouseY > 30 + (openFeature*50) + races[i].options[openFeature].length * 26))
							{
								mouseIsDown = false;
								openFeature = -1;
								choiceBox = false;
							}
							else if(!choiceBox)
							{
								mouseIsDown = false;
								openFeature = -1;
							}
						}
						if(openFeature >= 6 && mouseIsDown && (mouseX < 650 || mouseX > 850 || mouseY < (-105) + (openFeature*50) || mouseY > (-5) + (openFeature*50)) &&
						(mouseX < 440 || mouseX > 640 || mouseY < (-105) + (openFeature*50) || mouseY > (-5) + (openFeature*50)))
						{
							if(choiceBox && (mouseX < 870 || mouseX > 1150 || mouseY < (-115) + (openFeature*50) || mouseY > (-115) + (openFeature*50) + races[i].options[openFeature].length * 26))
							{
								mouseIsDown = false;
								openFeature = -1;
								choiceBox = false;
							}
							else if(!choiceBox)
							{
								mouseIsDown = false;
								openFeature = -1;
							}
						}
					}
					if(raceChosen[slot][j] == null)
					{
						raceChosen[slot][j] = "";
					}
				}
				if(openFeature < 6 && openFeature != -1)
				{
					let height = wrapTextCount(ctx,races[i].features[openFeature],70,195 + (openFeature*50),560,28);
					ctx.fillStyle = "rgb(200,200,200)";
					ctx.fillRect(50, 160 + (openFeature*50),600,35 + height*(28));
					ctx.fillStyle = "rgb(0,0,0)";
					wrapText(ctx,races[i].features[openFeature],70,195 + (openFeature*50),560,28);
					ctx.strokeRect(50, 160 + (openFeature*50),600,35 + height*(28));
					if(races[i].choiceNums[openFeature] != "")
					{
						choiceAmount = races[i].options[openFeature].length;
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(450, 40 + (openFeature*50),200,100);
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.strokeRect(450, 40 + (openFeature*50),200,100);
						ctx.textAlign = "center"
						ctx.fillText(raceChosen[slot][openFeature], 550, 100 + (openFeature*50));
						if(mouseX >= 450 && mouseX <= 650 && mouseY >= 40 + (openFeature*50) && mouseY <= 140 + (openFeature*50))
						{
							ctx.fillStyle = "rgb(180,180,180)";
							ctx.fillRect(450, 40 + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(450, 40 + (openFeature*50),200,100);
							ctx.fillText(raceChosen[slot][openFeature], 550, 100 + (openFeature*50));
							if(mouseIsDown)
							{
								mouseIsDown = false;
								choiceBox = true;
							}
						}
						if(choiceBox == true && races[i].choiceNums[openFeature] == 1)
						{
							dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, choiceAmount, races[i].options[openFeature], "choose", true);
							ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
							choiceBox = makeBoxSame;
							raceChosen[slot][openFeature] = makeListSame;
						}
						if(races[i].choiceNums[openFeature] > 1)
						{
							let temp = races[i].options[openFeature];
							temp1 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(raceChosen2[slot][openFeature] != temp[k])
								{
									temp1.push(temp[k])
								}
							}
							temp2 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(raceChosen[slot][openFeature] != temp[k])
								{
									temp2.push(temp[k])
								}
							}
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(240, 40 + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(240, 40 + (openFeature*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(raceChosen2[slot][openFeature], 340, 100 + (openFeature*50));
							if(mouseX >= 240 && mouseX <= 440 && mouseY >= 40 + (openFeature*50) && mouseY <= 140 + (openFeature*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(240, 40 + (openFeature*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(240, 40 + (openFeature*50),200,100);
								ctx.fillText(raceChosen2[slot][openFeature], 340, 100 + (openFeature*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = 2;
								}
							}
							if(choiceBox == 2)
							{
								dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
								ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								raceChosen2[slot][openFeature] = makeListSame;
							}
							if(choiceBox == true)
							{
								dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
								ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								raceChosen[slot][openFeature] = makeListSame;
							}
						}
					}
				}
				else if(openFeature != -1)
				{
					let height = wrapTextCount(ctx,races[i].features[openFeature],270,50 + (openFeature*50),560,28);
					ctx.fillStyle = "rgb(200,200,200)";
					ctx.fillRect(250, 15 + (openFeature*50),600,35 + height*(28));
					ctx.fillStyle = "rgb(0,0,0)";
					wrapText(ctx,races[i].features[openFeature],270,50 + (openFeature*50),560,28);
					ctx.strokeRect(250, 15 + (openFeature*50),600,35 + height*(28));
					if(races[i].choiceNums[openFeature] != "")
					{
						choiceAmount = races[i].options[openFeature].length;
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(650, (-105) + (openFeature*50),200,100);
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.strokeRect(650, (-105) + (openFeature*50),200,100);
						ctx.textAlign = "center"
						ctx.fillText(raceChosen[slot][openFeature], 750, (-45) + (openFeature*50));
						if(mouseX >= 650 && mouseX <= 850 && mouseY >= (-105) + (openFeature*50) && mouseY <= (-5) + (openFeature*50))
						{
							ctx.fillStyle = "rgb(180,180,180)";
							ctx.fillRect(650, (-105) + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(650, (-105) + (openFeature*50),200,100);
							ctx.fillText(raceChosen[slot][openFeature], 750, (-45) + (openFeature*50));
							if(mouseIsDown)
							{
								mouseIsDown = false;
								choiceBox = true;
							}
						}
						if(choiceBox == true && races[i].choiceNums[openFeature] == 1)
						{
							dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, choiceAmount, races[i].options[openFeature], "choose", true);
							ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
							choiceBox = makeBoxSame;
							raceChosen[slot][openFeature] = makeListSame;
						}
						if(races[i].choiceNums[openFeature] > 1)
						{
							let temp = races[i].options[openFeature];
							temp1 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(raceChosen2[slot][openFeature] != temp[k])
								{
									temp1.push(temp[k])
								}
							}
							temp2 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(raceChosen[slot][openFeature] != temp[k])
								{
									temp2.push(temp[k])
								}
							}
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(440, (-105) + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(440, (-105) + (openFeature*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(raceChosen2[slot][openFeature], 340, 100 + (openFeature*50));
							if(mouseX >= 440 && mouseX <= 640 && mouseY >= (-105) + (openFeature*50) && mouseY <= (-5) + (openFeature*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(440, (-105) + (openFeature*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(440, (-105) + (openFeature*50),200,100);
								ctx.fillText(raceChosen2[slot][openFeature], 540, (-45) + (openFeature*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = 2;
								}
							}
							if(choiceBox == 2)
							{
								dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
								ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								raceChosen2[slot][openFeature] = makeListSame;
							}
							if(choiceBox == true)
							{
								dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
								ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								raceChosen[slot][openFeature] = makeListSame;
							}
						}
					}
				}
			}
		}
		
		//display subrace features
		for(let i = 0; i < races.length; i++)
		{
			for(let j = 0; j < races[i].sub.length; j++)
			{
				if(characters[slot].race == races[i].name && characters[slot].subrace == races[i].sub[j].name)
				{
					for(let k = 0; k < races[i].sub[j].featureNames.length; k++)
					{
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.font = "25px Arial";
						ctx.textAlign = "end";
						let text = races[i].sub[j].featureNames[k];
						let textWidth = ctx.measureText(text);
						ctx.fillText(races[i].sub[j].featureNames[k],wW - 50,150 + (k*50));
						ctx.fillRect(wW - 50 - textWidth.width, 155 + (k*50),textWidth.width,2);
						if(subRaceChosen[slot][k] == "" && races[i].sub[j].choiceNums[k] != "")
						{
							ctx.fillStyle = "rgb(200,0,0)";
							ctx.fillText("!", wW - 35, 150 + (k*50));
						}
						if(mouseX >= wW - 50 - textWidth.width && mouseX <= wW - 50 && mouseY >= (130 + (k*50)) && mouseY <= (155 + (k*50)))
						{
							ctx.fillStyle = "rgb(150,150,150)";
							if(openFeatureS == -1)
							{
								ctx.fillText(races[i].sub[j].featureNames[k],wW - 50,150 + (k*50));
								ctx.fillRect(wW - 50 - textWidth.width, 155 + (k*50),textWidth.width,2);
							}
							if(mouseIsDown)
							{
								mouseIsDown = false;
								openFeatureS = k;
								openFeature = -1;
							}
						}
						if(openFeatureS != -1 && (mouseX < wW - 50 - textWidth.width || mouseX > wW - 50 || mouseY < (130 + (openFeatureS*50)) || mouseY > (155 + (openFeatureS*50))))
						{
							if(openFeatureS < 6 && mouseIsDown && (mouseX < wW - 650 || mouseX > wW - 450 || mouseY < 40 + (openFeatureS*50) || mouseY > 140 + (openFeatureS*50)) &&
							(mouseX < wW - 440 || mouseX > wW - 240 || mouseY < 40 + (openFeatureS*50) || mouseY > 140 + (openFeatureS*50)))
							{
								if(choiceBox && (mouseX < wW - 950 || mouseX > wW - 670 || mouseY < 30 + (openFeatureS*50) || mouseY > 30 + (openFeatureS*50) + choiceAmount * 26))
								{
									mouseIsDown = false;
									openFeatureS = -1;
									choiceBox = false;
								}
								else if(!choiceBox)
								{
									mouseIsDown = false;
									openFeatureS = -1;
								}
							}
							if(openFeatureS >= 6 && mouseIsDown && (mouseX < wW - 650 || mouseX > wW - 450 || mouseY < 40 + (openFeatureS*50) || mouseY > 140 + (openFeatureS*50)) &&
							(mouseX < wW - 640 || mouseX > wW - 440 || mouseY < (-105) + (openFeatureS*50) || mouseY > (-5) + (openFeatureS*50)))
							{
								if(choiceBox && (mouseX < wW - 950 || mouseX > wW - 670 || mouseY < 30 + (openFeatureS*50) || mouseY > 30 + (openFeatureS*50) + choiceAmount * 26))
								{
									mouseIsDown = false;
									openFeatureS = -1;
									choiceBox = false;
								}
								else if(!choiceBox)
								{
									mouseIsDown = false;
									openFeatureS = -1;
								}
							}
						}
						ctx.textAlign = "start";
						if(subRaceChosen[slot][k] == null)
						{
							subRaceChosen[slot][k] = "";
						}
						if(subRaceChosen2[slot][k] == null)
						{
							subRaceChosen2[slot][k] = "";
						}
						if(openFeatureS < 6 && openFeatureS != -1)
						{
							let height = wrapTextCount(ctx,races[i].sub[j].features[openFeatureS],wW - 630,195 + (openFeatureS*50),560,28);
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(wW - 650, 160 + (openFeatureS*50),600,35 + height*(28));
							ctx.fillStyle = "rgb(0,0,0)";
							wrapText(ctx,races[i].sub[j].features[openFeatureS],wW - 630,195 + (openFeatureS*50),560,28);
							ctx.strokeRect(wW - 650, 160 + (openFeatureS*50),600,35 + height*(28));
							if(races[i].sub[j].choiceNums[openFeatureS] != "")
							{
								choiceAmount = races[i].sub[j].options[openFeatureS].length
								ctx.fillStyle = "rgb(200,200,200)";
								ctx.fillRect(wW - 650, 40 + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 650, 40 + (openFeatureS*50),200,100);
								ctx.textAlign = "center"
								ctx.fillText(subRaceChosen[slot][openFeatureS], wW - 550, 100 + (openFeatureS*50));
								if(mouseX >= wW - 650 && mouseX <= wW - 450 && mouseY >= 40 + (openFeatureS*50) && mouseY <= 140 + (openFeatureS*50))
								{
									ctx.fillStyle = "rgb(180,180,180)";
									ctx.fillRect(wW - 650, 40 + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 650, 40 + (openFeatureS*50),200,100);
									ctx.fillText(subRaceChosen[slot][openFeatureS], wW - 550, 100 + (openFeatureS*50));
									if(mouseIsDown)
									{
										mouseIsDown = false;
										choiceBox = true;
									}
								}
								if(choiceBox == true && races[i].sub[j].choiceNums[openFeatureS] == 1)
								{
									dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, choiceAmount, races[i].sub[j].options[openFeatureS], "choose", true);
									ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subRaceChosen[slot][openFeatureS] = makeListSame;
								}
								if(races[i].sub[j].choiceNums[openFeatureS] > 1)
								{
									let temp = races[i].sub[j].options[openFeatureS];
									temp1 = [];
									for(let k = 0; k < choiceAmount; k++)
									{
										if(subRaceChosen2[slot][openFeatureS] != temp[k])
										{
											temp1.push(temp[k])
										}
									}
									temp2 = [];
									for(let k = 0; k < choiceAmount; k++)
									{
										if(subRaceChosen[slot][openFeatureS] != temp[k])
										{
											temp2.push(temp[k])
										}
									}
									ctx.fillStyle = "rgb(200,200,200)";
									ctx.fillRect(wW - 440, 40 + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 440, 40 + (openFeatureS*50),200,100);
									ctx.textAlign = "center"
									ctx.fillText(subRaceChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
									if(mouseX >= wW - 440 && mouseX <= wW - 240 && mouseY >= 40 + (openFeatureS*50) && mouseY <= 140 + (openFeatureS*50))
									{
										ctx.fillStyle = "rgb(180,180,180)";
										ctx.fillRect(wW - 440, 40 + (openFeatureS*50),200,100);
										ctx.fillStyle = "rgb(0,0,0)";
										ctx.strokeRect(wW - 440, 40 + (openFeatureS*50),200,100);
										ctx.fillText(subRaceChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
										if(mouseIsDown)
										{
											mouseIsDown = false;
											choiceBox = 2;
										}
									}
									if(choiceBox == 2)
									{
										dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
										ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
										choiceBox = makeBoxSame;
										subRaceChosen2[slot][openFeatureS] = makeListSame;
									}
									if(choiceBox == true)
									{
										dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
										ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
										choiceBox = makeBoxSame;
										subRaceChosen[slot][openFeatureS] = makeListSame;
									}
								}
							}
						}
						else if(openFeatureS != -1)
						{
							let height = wrapTextCount(ctx,races[i].sub[j].features[openFeatureS],wW - 830,50 + (openFeatureS*50),560,28);
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(wW - 850, 15 + (openFeatureS*50),600,35 + height*(28));
							ctx.fillStyle = "rgb(0,0,0)";
							wrapText(ctx,races[i].sub[j].features[openFeatureS],wW - 830,50 + (openFeatureS*50),560,28);
							ctx.strokeRect(wW - 850, 15 + (openFeatureS*50),600,35 + height*(28));
							if(races[i].sub[j].choiceNums[openFeatureS] != "")
							{
								choiceAmount = races[i].sub[j].options[openFeatureS].length
								ctx.fillStyle = "rgb(200,200,200)";
								ctx.fillRect(wW - 850, (-105) + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 850, (-105) + (openFeatureS*50),200,100);
								ctx.textAlign = "center"
								ctx.fillText(subRaceChosen[slot][openFeatureS], wW - 750, (-45) + (openFeatureS*50));
								if(mouseX >= wW - 850 && mouseX <= wW - 650 && mouseY >= (-105) + (openFeatureS*50) && mouseY <= (-5) + (openFeatureS*50))
								{
									ctx.fillStyle = "rgb(180,180,180)";
									ctx.fillRect(wW - 850, (-105) + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 850, (-195) + (openFeatureS*50),200,100);
									ctx.fillText(subRaceChosen[slot][openFeatureS], wW - 750, (-45) + (openFeatureS*50));
									if(mouseIsDown)
									{
										mouseIsDown = false;
										choiceBox = true;
									}
								}
								if(choiceBox == true && races[i].sub[j].choiceNums[openFeatureS] == 1)
								{
									dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, choiceAmount, races[i].sub[j].options[openFeatureS], "choose", true);
									ctx.strokeRect(wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subRaceChosen[slot][openFeatureS] = makeListSame;
								}
								if(races[i].sub[j].choiceNums[openFeatureS] > 1)
								{
									let temp = races[i].sub[j].options[openFeatureS];
									temp1 = [];
									for(let k = 0; k < choiceAmount; k++)
									{
										if(subRaceChosen2[slot][openFeatureS] != temp[k])
										{
											temp1.push(temp[k])
										}
									}
									temp2 = [];
									for(let k = 0; k < choiceAmount; k++)
									{
										if(subRaceChosen[slot][openFeatureS] != temp[k])
										{
											temp2.push(temp[k])
										}
									}
									ctx.fillStyle = "rgb(200,200,200)";
									ctx.fillRect(wW - 640, (-105) + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 640, (-105) + (openFeatureS*50),200,100);
									ctx.textAlign = "center"
									ctx.fillText(subRaceChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
									if(mouseX >= wW - 640 && mouseX <= wW - 440 && mouseY >= (-105) + (openFeatureS*50) && mouseY <= (-5) + (openFeatureS*50))
									{
										ctx.fillStyle = "rgb(180,180,180)";
										ctx.fillRect(wW - 640, (-105) + (openFeatureS*50),200,100);
										ctx.fillStyle = "rgb(0,0,0)";
										ctx.strokeRect(wW - 640, (-105) + (openFeatureS*50),200,100);
										ctx.fillText(subRaceChosen2[slot][openFeatureS], wW - 540, (-45) + (openFeatureS*50));
										if(mouseIsDown)
										{
											mouseIsDown = false;
											choiceBox = 2;
										}
									}
									if(choiceBox == 2)
									{
										dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
										ctx.strokeRect(wW - 950, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
										choiceBox = makeBoxSame;
										subRaceChosen2[slot][openFeatureS] = makeListSame;
									}
									if(choiceBox == true)
									{
										dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
										ctx.strokeRect(wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
										choiceBox = makeBoxSame;
										subRaceChosen[slot][openFeatureS] = makeListSame;
									}
								}
							}
						}
					}
				}
			}
		}
	}

	if(step == 2) //class
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.textAlign = "center";
		ctx.fillText("2. Choose Class", wW / 2, 50);

		//choose class
		ctx.fillStyle = "rgb(200,200,200)";
		ctx.fillRect(wW / 2 - 150, 75, 300, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(characters[slot].cClass, wW / 2, 120);
		ctx.strokeRect(wW / 2 - 150, 75, 300, 75);
		if(mouseX >= wW / 2 - 150 && mouseX <= wW / 2 + 150 && mouseY >= 75 && mouseY <= 150 && openFeature == -1 && openFeatureS == -1)
		{
			ctx.fillStyle = "rgb(180,180,180)";
			ctx.fillRect(wW / 2 - 150, 75, 300, 75);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(characters[slot].cClass, wW / 2, 120);
			ctx.strokeRect(wW / 2 - 150, 75, 300, 75);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				classBox = true;
			}
		}
		if(classBox)
		{
			dropDownBox(200, 200, 200, wW / 2 + 155, 75, 250, 525, 13, classes, false, true);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.strokeRect(wW / 2 + 155, 75, 250, 525);
			classBox = makeBoxSame;
			characters[slot].cClass = makeListSame;
			characters[slot].sClass = "";
			localStorage.setItem(JSON.stringify("cClass" + slot), characters[slot].cClass);
			localStorage.setItem(JSON.stringify("sClass" + slot), characters[slot].sClass);
		}

		//choose subclass
		for(let i = 0; i < classes.length; i++)
		{
			if(classes[i].name == characters[slot].cClass && classes[i].sub.length != 0)
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(wW / 2 - 150, 175, 300, 75);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(characters[slot].sClass, wW / 2, 220);
				ctx.strokeRect(wW / 2 - 150, 175, 300, 75);
				if(mouseX >= wW / 2 - 150 && mouseX <= wW / 2 + 150 && mouseY >= 175 && mouseY <= 250 && openFeature == -1 && openFeatureS == -1)
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(wW / 2 - 150, 175, 300, 75);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillText(characters[slot].sClass, wW / 2, 220);
					ctx.strokeRect(wW / 2 - 150, 175, 300, 75);
					if(mouseIsDown)
					{
						mouseIsDown = false;
						subclassBox = true;
					}
				}
				if(subclassBox)
				{
					if(classes[i].name == characters[slot].cClass)
					{
						loc = i;
					}
					dropDownBox(200, 200, 200, wW / 2 + 155, 75, 250, classes[loc].sub.length * 50, classes[loc].sub.length, classes[loc].sub, true, true);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.strokeRect(wW / 2 + 155, 75, 250, classes[loc].sub.length * 50);
					subclassBox = makeBoxSame;
					characters[slot].sClass = makeListSame;
					localStorage.setItem(JSON.stringify("sClass" + slot), characters[slot].sClass);
				}
			}
		}

		//display class features
		for(let i = 0; i < classes.length; i++)
		{
			if(characters[slot].cClass == classes[i].name)
			{
				for(let j = 0; j < classes[i].featureNames.length; j++)
				{
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.font = "25px Arial";
					ctx.textAlign = "start";
					let text = classes[i].featureNames[j];
					let textWidth = ctx.measureText(text);
					ctx.fillText(classes[i].featureNames[j],50,150 + (j*50));;
					ctx.fillRect(50, 155 + (j*50),textWidth.width,2);
					if(classChosen[slot][j] == "" && classes[i].choiceNums[j] != "")
					{
						ctx.fillStyle = "rgb(200,0,0)";
						ctx.fillText("!", 35, 150 + (j*50));
					}
					if(mouseX >= 50 && mouseX <= textWidth.width + 50 && mouseY >= (130 + (j*50)) && mouseY <= (155 + (j*50)))
					{
						if(openFeature == -1)
						{
							ctx.fillStyle = "rgb(150,150,150)";
							ctx.fillText(classes[i].featureNames[j],50,150 + (j*50));
							ctx.fillRect(50, 155 + (j*50),textWidth.width,2);
						}
						if(mouseIsDown)
						{
							mouseIsDown = false;
							openFeature = j;
							openFeatureS = -1;
						}
					}
					if(openFeature != -1 && (mouseX < 50 || mouseX > textWidth.width || mouseY < (130 + (openFeature*50)) || mouseY > (155 + (openFeature*50))))
					{
						if(openFeature < 6 && mouseIsDown && (mouseX < 450 || mouseX > 650 || mouseY < 40 + (openFeature*50) || mouseY > 140 + (openFeature*50)) &&
						(mouseX < 240 || mouseX > 440 || mouseY < 40 + (openFeature*50) || mouseY > 140 + (openFeature*50)))
						{
							if(choiceBox && (mouseX < 670 || mouseX > 950 || mouseY < 30 + (openFeature*50) || mouseY > 30 + (openFeature*50) + classes[i].options[openFeature].length * 26))
							{
								mouseIsDown = false;
								openFeature = -1;
								choiceBox = false;
							}
							else if(!choiceBox)
							{
								mouseIsDown = false;
								openFeature = -1;
							}
						}
						if(openFeature >= 6 && mouseIsDown && (mouseX < 650 || mouseX > 850 || mouseY < (-105) + (openFeature*50) || mouseY > (-5) + (openFeature*50)) &&
						(mouseX < 440 || mouseX > 640 || mouseY < (-105) + (openFeature*50) || mouseY > (-5) + (openFeature*50)))
						{
							if(choiceBox && (mouseX < 870 || mouseX > 1150 || mouseY < (-115) + (openFeature*50) || mouseY > (-115) + (openFeature*50) + classes[i].options[openFeature].length * 26))
							{
								mouseIsDown = false;
								openFeature = -1;
								choiceBox = false;
							}
							else if(!choiceBox)
							{
								mouseIsDown = false;
								openFeature = -1;
							}
						}
					}
					if(classChosen[slot][j] == null)
					{
						classChosen[slot][j] = "";
					}
					if(classChosen2[slot][j] == null)
					{
						classChosen2[slot][j] = "";
					}
				}
				if(openFeature < 6 && openFeature != -1)
				{
					let height = wrapTextCount(ctx,classes[i].features[openFeature],70,50 + (openFeature*50),560,28);
					ctx.fillStyle = "rgb(200,200,200)";
					ctx.fillRect(50, 160 + (openFeature*50),600,35 + height*(28));
					ctx.fillStyle = "rgb(0,0,0)";
					wrapText(ctx,classes[i].features[openFeature],70,195 + (openFeature*50),560,28);
					ctx.strokeRect(50, 160 + (openFeature*50),600,35 + height*(28));
					if(classes[i].choiceNums[openFeature] != "")
					{
						choiceAmount = classes[i].options[openFeature].length;
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(450, 40 + (openFeature*50),200,100);
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.strokeRect(450, 40 + (openFeature*50),200,100);
						ctx.textAlign = "center"
						ctx.fillText(classChosen[slot][openFeature], 550, 100 + (openFeature*50));
						if(mouseX >= 450 && mouseX <= 650 && mouseY >= 40 + (openFeature*50) && mouseY <= 140 + (openFeature*50))
						{
							ctx.fillStyle = "rgb(180,180,180)";
							ctx.fillRect(450, 40 + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(450, 40 + (openFeature*50),200,100);
							ctx.fillText(classChosen[slot][openFeature], 550, 100 + (openFeature*50));
							if(mouseIsDown)
							{
								mouseIsDown = false;
								choiceBox = true;
							}
						}
						if(choiceBox == true && classes[i].choiceNums[openFeature] == 1)
						{
							dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, choiceAmount, classes[i].options[openFeature], "choose", true);
							ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
							choiceBox = makeBoxSame;
							classChosen[slot][openFeature] = makeListSame;
						}
						if(classes[i].choiceNums[openFeature] > 1)
						{
							let temp = classes[i].options[openFeature];
							temp1 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(classChosen2[slot][openFeature] != temp[k])
								{
									temp1.push(temp[k])
								}
							}
							temp2 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(classChosen[slot][openFeature] != temp[k])
								{
									temp2.push(temp[k])
								}
							}
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(240, 40 + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(240, 40 + (openFeature*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(classChosen2[slot][openFeature], 340, 100 + (openFeature*50));
							if(mouseX >= 240 && mouseX <= 440 && mouseY >= 40 + (openFeature*50) && mouseY <= 140 + (openFeature*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(240, 40 + (openFeature*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(240, 40 + (openFeature*50),200,100);
								ctx.fillText(classChosen2[slot][openFeature], 340, 100 + (openFeature*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = 2;
								}
							}
							if(choiceBox == 2)
							{
								dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
								ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								classChosen2[slot][openFeature] = makeListSame;
							}
							if(choiceBox == true)
							{
								dropDownBox(200, 200, 200, 670, 30 + (openFeature*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
								ctx.strokeRect(670, 30 + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								classChosen[slot][openFeature] = makeListSame;
							}
						}
					}
				}
				else if(openFeature != -1)
				{
					let height = wrapTextCount(ctx,classes[i].features[openFeature],270,50 + (openFeature*50),560,28);
					ctx.fillStyle = "rgb(200,200,200)";
					ctx.fillRect(250, 15 + (openFeature*50),600,35 + height*(28));
					ctx.fillStyle = "rgb(0,0,0)";
					wrapText(ctx,classes[i].features[openFeature],270,50 + (openFeature*50),560,28);
					ctx.strokeRect(250, 15 + (openFeature*50),600,35 + height*(28));
					if(classes[i].choiceNums[openFeature] != "")
					{
						choiceAmount = classes[i].options[openFeature].length;
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(650, (-105) + (openFeature*50),200,100);
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.strokeRect(650, (-105) + (openFeature*50),200,100);
						ctx.textAlign = "center"
						ctx.fillText(classChosen[slot][openFeature], 750, (-45) + (openFeature*50));
						if(mouseX >= 650 && mouseX <= 850 && mouseY >= (-105) + (openFeature*50) && mouseY <= (-5) + (openFeature*50))
						{
							ctx.fillStyle = "rgb(180,180,180)";
							ctx.fillRect(650, (-105) + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(650, (-105) + (openFeature*50),200,100);
							ctx.fillText(classChosen[slot][openFeature], 750, (-45) + (openFeature*50));
							if(mouseIsDown)
							{
								mouseIsDown = false;
								choiceBox = true;
							}
						}
						if(choiceBox == true && classes[i].choiceNums[openFeature] == 1)
						{
							dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, choiceAmount, classes[i].options[openFeature], "choose", true);
							ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
							choiceBox = makeBoxSame;
							classChosen[slot][openFeature] = makeListSame;
						}
						if(classes[i].choiceNums[openFeature] > 1)
						{
							let temp = classes[i].options[openFeature];
							temp1 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(classChosen2[slot][openFeature] != temp[k])
								{
									temp1.push(temp[k])
								}
							}
							temp2 = [];
							for(let k = 0; k < choiceAmount; k++)
							{
								if(classChosen[slot][openFeature] != temp[k])
								{
									temp2.push(temp[k])
								}
							}
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(440, (-105) + (openFeature*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(440, (-105) + (openFeature*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(classChosen2[slot][openFeature], 540, (-45) + (openFeature*50));
							if(mouseX >= 440 && mouseX <= 640 && mouseY >= (-105) + (openFeature*50) && mouseY <= (-5) + (openFeature*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(440, (-105) + (openFeature*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(440, (-105) + (openFeature*50),200,100);
								ctx.fillText(classChosen2[slot][openFeature], 540, (-45) + (openFeature*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = 2;
								}
							}
							if(choiceBox == 2)
							{
								dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
								ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								classChosen2[slot][openFeature] = makeListSame;
							}
							if(choiceBox == true)
							{
								dropDownBox(200, 200, 200, 870, (-115) + (openFeature*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
								ctx.strokeRect(870, (-115) + (openFeature*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								classChosen[slot][openFeature] = makeListSame;
							}
						}
					}
				}
			}
		}
		
		//display subclass features
		for(let i = 0; i < classes.length; i++)
		{
			for(let j = 0; j < classes[i].sub.length; j++)
			{
				if(characters[slot].cClass == classes[i].name && characters[slot].sClass == classes[i].sub[j].name)
				{
					for(let k = 0; k < classes[i].sub[j].featureNames.length; k++)
					{
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.font = "25px Arial";
						ctx.textAlign = "end";
						let text = classes[i].sub[j].featureNames[k];
						let textWidth = ctx.measureText(text);
						ctx.fillText(classes[i].sub[j].featureNames[k],wW - 50,150 + (k*50));
						ctx.fillRect(wW - 50 - textWidth.width, 155 + (k*50),textWidth.width,2);
						if(subClassChosen[slot][k] == "" && classes[i].sub[j].choiceNums[k] != "")
						{
							ctx.fillStyle = "rgb(200,0,0)";
							ctx.fillText("!", wW - 35, 150 + (k*50));
						}
						if(mouseX >= wW - 50 - textWidth.width && mouseX <= wW - 50 && mouseY >= (130 + (k*50)) && mouseY <= (155 + (k*50)))
						{
							ctx.fillStyle = "rgb(150,150,150)";
							if(openFeatureS == -1)
							{
								ctx.fillText(classes[i].sub[j].featureNames[k],wW - 50,150 + (k*50));
								ctx.fillRect(wW - 50 - textWidth.width, 155 + (k*50),textWidth.width,2);
							}
							if(mouseIsDown)
							{
								mouseIsDown = false;
								openFeatureS = k;
								openFeature = -1;
							}
						}
						if(openFeatureS != -1 && (mouseX < wW - 50 - textWidth.width || mouseX > wW - 50 || mouseY < (130 + (openFeatureS*50)) || mouseY > (155 + (openFeatureS*50))))
						{
							if(openFeatureS < 7 && mouseIsDown && (mouseX < wW - 650 || mouseX > wW - 450 || mouseY < 40 + (openFeatureS*50) || mouseY > 140 + (openFeatureS*50)))
							{
								if(choiceBox && (mouseX < wW - 950 || mouseX > wW - 670 || mouseY < 30 + (openFeatureS*50) || mouseY > 30 + (openFeatureS*50) + choiceAmount * 26))
								{
									mouseIsDown = false;
									openFeatureS = -1;
									choiceBox = false;
								}
								else if(!choiceBox)
								{
									mouseIsDown = false;
									openFeatureS = -1;
								}
							}
							if(openFeatureS >= 7 && mouseIsDown && (mouseX < wW - 650 || mouseX > wW - 450 || mouseY < 40 + (openFeatureS*50) || mouseY > 140 + (openFeatureS*50)))
							{
								if(choiceBox && (mouseX < wW - 950 || mouseX > wW - 670 || mouseY < 30 + (openFeatureS*50) || mouseY > 30 + (openFeatureS*50) + choiceAmount * 26))
								{
									mouseIsDown = false;
									openFeatureS = -1;
									choiceBox = false;
								}
								else if(!choiceBox)
								{
									mouseIsDown = false;
									openFeatureS = -1;
								}
							}
						}
						if(subClassChosen[slot][k] == null)
						{
							subClassChosen[slot][k] = "";
						}
					}
					ctx.textAlign = "start";
					if(openFeatureS < 7 && openFeatureS != -1)
					{
						let height = wrapTextCount(ctx,classes[i].sub[j].features[openFeatureS],wW - 630,50 + (openFeatureS*50),560,28);
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(wW - 650, 160 + (openFeatureS*50),600,35 + height*(28));
						ctx.fillStyle = "rgb(0,0,0)";
						wrapText(ctx,classes[i].sub[j].features[openFeatureS],wW - 630,195 + (openFeatureS*50),560,28);
						ctx.strokeRect(wW - 650, 160 + (openFeatureS*50),600,35 + height*(28));
						if(classes[i].sub[j].choiceNums[openFeatureS] != "")
						{
							choiceAmount = classes[i].sub[j].options[openFeatureS].length;
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(wW - 650, 40 + (openFeatureS*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(wW - 650, 40 + (openFeatureS*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(subClassChosen[slot][openFeatureS], wW - 550, 100 + (openFeatureS*50));
							if(mouseX >= wW - 650 && mouseX <= wW - 450 && mouseY >= 40 + (openFeatureS*50) && mouseY <= 140 + (openFeatureS*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(wW - 650, 40 + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 650, 40 + (openFeatureS*50),200,100);
								ctx.fillText(subClassChosen[slot][openFeatureS], wW - 550, 100 + (openFeatureS*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = true;
								}
							}
							if(choiceBox == true && classes[i].sub[j].choiceNums[openFeatureS] == 1)
							{
								dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, choiceAmount, classes[i].sub[j].options[openFeatureS], "choose", true);
								ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								subClassChosen[slot][openFeatureS] = makeListSame;
							}
							if(classes[i].sub[j].choiceNums[openFeatureS] > 1)
							{
								let temp = classes[i].sub[j].options[openFeatureS];
								temp1 = [];
								for(let k = 0; k < choiceAmount; k++)
								{
									if(subClassChosen2[slot][openFeatureS] != temp[k])
									{
										temp1.push(temp[k])
									}
								}
								temp2 = [];
								for(let k = 0; k < choiceAmount; k++)
								{
									if(subClassChosen[slot][openFeatureS] != temp[k])
									{
										temp2.push(temp[k])
									}
								}
								ctx.fillStyle = "rgb(200,200,200)";
								ctx.fillRect(wW - 440, 40 + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 440, 40 + (openFeatureS*50),200,100);
								ctx.textAlign = "center"
								ctx.fillText(subClassChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
								if(mouseX >= wW - 440 && mouseX <= wW - 240 && mouseY >= 40 + (openFeatureS*50) && mouseY <= 140 + (openFeatureS*50))
								{
									ctx.fillStyle = "rgb(180,180,180)";
									ctx.fillRect(wW - 440, 40 + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 440, 40 + (openFeatureS*50),200,100);
									ctx.fillText(subClassChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
									if(mouseIsDown)
									{
										mouseIsDown = false;
										choiceBox = 2;
									}
								}
								if(choiceBox == 2)
								{
									dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
									ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subClassChosen2[slot][openFeatureS] = makeListSame;
								}
								if(choiceBox == true)
								{
									dropDownBox(200, 200, 200, wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
									ctx.strokeRect(wW - 950, 30 + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subClassChosen[slot][openFeatureS] = makeListSame;
								}
							}
						}
					}
					else if(openFeatureS != -1)
					{
						let height = wrapTextCount(ctx,classes[i].sub[j].features[openFeatureS],wW - 830,50 + (openFeatureS*50),560,28);
						ctx.fillStyle = "rgb(200,200,200)";
						ctx.fillRect(wW - 850, 15 + (openFeatureS*50),600,35 + height*(28));
						ctx.fillStyle = "rgb(0,0,0)";
						wrapText(ctx,classes[i].sub[j].features[openFeatureS],wW - 830,50 + (openFeatureS*50),560,28);
						ctx.strokeRect(wW - 850, 15 + (openFeatureS*50),600,35 + height*(28));
						if(classes[i].sub[j].choiceNums[openFeatureS] != "")
						{
							choiceAmount = classes[i].sub[j].options[openFeatureS].length
							ctx.fillStyle = "rgb(200,200,200)";
							ctx.fillRect(wW - 850, (-105) + (openFeatureS*50),200,100);
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.strokeRect(wW - 850, (-105) + (openFeatureS*50),200,100);
							ctx.textAlign = "center"
							ctx.fillText(subClassChosen[slot][openFeatureS], wW - 750, (-45) + (openFeatureS*50));
							if(mouseX >= wW - 850 && mouseX <= wW - 650 && mouseY >= (-105) + (openFeatureS*50) && mouseY <= (-5) + (openFeatureS*50))
							{
								ctx.fillStyle = "rgb(180,180,180)";
								ctx.fillRect(wW - 850, (-105) + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 850, (-195) + (openFeatureS*50),200,100);
								ctx.fillText(subClassChosen[slot][openFeatureS], wW - 750, (-45) + (openFeatureS*50));
								if(mouseIsDown)
								{
									mouseIsDown = false;
									choiceBox = true;
								}
							}
							if(choiceBox == true && classes[i].sub[j].choiceNums[openFeatureS] == 1)
							{
								dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, choiceAmount, classes[i].sub[j].options[openFeatureS], "choose", true);
								ctx.strokeRect(wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
								choiceBox = makeBoxSame;
								subClassChosen[slot][openFeatureS] = makeListSame;
							}
							if(classes[i].sub[j].choiceNums[openFeatureS] > 1)
							{
								let temp = classes[i].sub[j].options[openFeatureS];
								temp1 = [];
								for(let k = 0; k < choiceAmount; k++)
								{
									if(subClassChosen2[slot][openFeatureS] != temp[k])
									{
										temp1.push(temp[k])
									}
								}
								temp2 = [];
								for(let k = 0; k < choiceAmount; k++)
								{
									if(subClassChosen[slot][openFeatureS] != temp[k])
									{
										temp2.push(temp[k])
									}
								}
								ctx.fillStyle = "rgb(200,200,200)";
								ctx.fillRect(wW - 640, (-105) + (openFeatureS*50),200,100);
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.strokeRect(wW - 640, (-105) + (openFeatureS*50),200,100);
								ctx.textAlign = "center"
								ctx.fillText(subClassChosen2[slot][openFeatureS], wW - 340, 100 + (openFeatureS*50));
								if(mouseX >= wW - 640 && mouseX <= wW - 440 && mouseY >= (-105) + (openFeatureS*50) && mouseY <= (-5) + (openFeatureS*50))
								{
									ctx.fillStyle = "rgb(180,180,180)";
									ctx.fillRect(wW - 640, (-105) + (openFeatureS*50),200,100);
									ctx.fillStyle = "rgb(0,0,0)";
									ctx.strokeRect(wW - 640, (-105) + (openFeatureS*50),200,100);
									ctx.fillText(subClassChosen2[slot][openFeatureS], wW - 540, (-45) + (openFeatureS*50));
									if(mouseIsDown)
									{
										mouseIsDown = false;
										choiceBox = 2;
									}
								}
								if(choiceBox == 2)
								{
									dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, temp2.length, temp2, "choose", 2);
									ctx.strokeRect(wW - 950, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subClassChosen2[slot][openFeatureS] = makeListSame;
								}
								if(choiceBox == true)
								{
									dropDownBox(200, 200, 200, wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26, temp1.length, temp1, "choose", true);
									ctx.strokeRect(wW - 1150, (-115) + (openFeatureS*50), 280, choiceAmount * 26);
									choiceBox = makeBoxSame;
									subClassChosen[slot][openFeatureS] = makeListSame;
								}
							}
						}
					}
				}
			}
		}
	}

	if(step == 3) //abilities
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.textAlign = "center";
		ctx.fillText("3. Choose Ability Scores", wW / 2, 50);

		function abilityScore(type, x1, y1, opacity, name)
		{
			let xw = 75;
			let yw = 75;
			let x2 = x1 + xw;
			let y2 = y1 + yw;
			ctx.fillText(name, xw / 2 + x1, y2 + 20);
			if(oldMouseX >= x1 && oldMouseX <= x2 && oldMouseY >= y1 && oldMouseY <= y2)
			{
				if(mouseIsDown)
				{
					word = type.split("");
				}
				else
				{
					type = word.join("");
					ctx.fillStyle = "rgba(220,220,220," + opacity + ")";
					ctx.fillRect(x1, y1, xw, yw);
				}
			}
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2)
			{
				ctx.fillStyle = "rgba(220,220,220," + opacity + ")";
				ctx.fillRect(x1, y1, xw, yw);
			}
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.textAlign = "center";
			ctx.fillText(type, x1 + (xw / 2), y1 + (yw / 2) + 8);
			ctx.rect(x1, y1, xw, yw);
			ctx.stroke();
			return type;
		}

		characters[slot].str = abilityScore(characters[slot].str, (wW / 2) - 412, 75, .6, "Strength");
		localStorage.setItem(JSON.stringify("str" + slot), characters[slot].str);
		characters[slot].dex = abilityScore(characters[slot].dex, (wW / 2) - 262, 75, .6, "Dexterity");
		localStorage.setItem(JSON.stringify("dex" + slot), characters[slot].dex);
		characters[slot].con = abilityScore(characters[slot].con, (wW / 2) - 112, 75, .6, "Constitution");
		localStorage.setItem(JSON.stringify("con" + slot), characters[slot].con);
		characters[slot].intelligence = abilityScore(characters[slot].intelligence, (wW / 2) + 38, 75, .6, "Intelligence");
		localStorage.setItem(JSON.stringify("intelligence" + slot), characters[slot].intelligence);
		characters[slot].wis = abilityScore(characters[slot].wis, (wW / 2) + 188, 75, .6, "Wisdom");
		localStorage.setItem(JSON.stringify("wis" + slot), characters[slot].wis);
		characters[slot].cha = abilityScore(characters[slot].cha, (wW / 2) + 338, 75, .6, "Charisma");
		localStorage.setItem(JSON.stringify("cha" + slot), characters[slot].cha);

		let dice = 4;
		ctx.font = "30px Arial";
		ctx.fillText("Roll numbers?", wW / 2, 225);
		if(mouseX >= (wW / 2 - 50) && mouseX <= (wW / 2 + 50) && mouseY >= 250 && mouseY <= 310)
		{
			ctx.fillStyle = "rgb(220,40,40)";
			ctx.fillRect(wW / 2 - 50, 250, 100, 60);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				drawDice = true;
				for(let i = 0; i < 6; i++)
				{
					let d6 = [];
					let result = [];
					for(let j = 0; j < dice; j++)
					{
						d6.push(Math.floor(Math.random() * 6) + 1);
					}
					d6.sort((a, b) => b - a);
					console.log("d6: " + d6);
					if(i == 0)
					{
						res1 = d6[0] + d6[1] + d6[2];
					}
					if(i == 1)
					{
						res2 = d6[0] + d6[1] + d6[2];
					}
					if(i == 2)
					{
						res3 = d6[0] + d6[1] + d6[2];
					}
					if(i == 3)
					{
						res4 = d6[0] + d6[1] + d6[2];
					}
					if(i == 4)
					{
						res5 = d6[0] + d6[1] + d6[2];
					}
					if(i == 5)
					{
						res6 = d6[0] + d6[1] + d6[2];
					}
				}
			}
		}
		else
		{
			ctx.fillStyle = "rgb(255,40,40)";
			ctx.fillRect(wW / 2 - 50, 250, 100, 60);
		}
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText("Roll", wW / 2, 290);
		if(drawDice)
		{
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.font = "25px Arial";
			ctx.fillText(res1, wW / 2 - 125, 375);
			ctx.fillText(res2, wW / 2 - 75, 375);
			ctx.fillText(res3, wW / 2 - 25, 375);
			ctx.fillText(res4, wW / 2 + 25, 375);
			ctx.fillText(res5, wW / 2 + 75, 375);
			ctx.fillText(res6, wW / 2 + 125, 375);
		}
	}
	else
	{
		drawDice = false;
	}

	if(step == 4) //equipment
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.textAlign = "center";
		ctx.fillText("4. Choose Equipment", wW / 2, 50);
		for(let i = 0; i < classes.length; i++)
		{
			if(characters[slot].cClass == classes[i].name)
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(94, 15, 92, 40);
				ctx.fillRect(194, 15, 92, 40);
				if(mouseX >= 94 && mouseX <= 186 && mouseY >= 15 && mouseY <= 55)
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(94, 15, 92, 40);
					if(mouseIsDown)
					{
						mouseIsDown = false;
						characters[slot].bc = "choose";
						localStorage.setItem(JSON.stringify("bc" + slot), characters[slot].bc);
					}
				}
				if(mouseX >= 194 && mouseX <= 286 && mouseY >= 15 && mouseY <= 55)
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(194, 15, 92, 40);
					if(mouseIsDown)
					{
						mouseIsDown = false;
						characters[slot].bc = "buy";
						localStorage.setItem(JSON.stringify("bc" + slot), characters[slot].bc);
					}
				}
				ctx.textAlign = "center";
				ctx.font = "25px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText("Choose", 140, 43);
				ctx.fillText("Buy", 240, 43);
				if(characters[slot].bc == "choose")
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(94, 15, 92, 40);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillText("Choose", 140, 43);
					for(let j = 0; j < 4; j++)
					{
						if(j == 0)
						{
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.font = "25px Arial";
							ctx.textAlign = "end";
							let textWidth = ctx.measureText(classes[i].e1[0]);
							if(characters[slot].ec1 != 1)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e1[0],wW/2 - 25,150);
								ctx.fillRect(wW/2 - 25 - textWidth.width,155,textWidth.width,2);
							}
							if(characters[slot].ec1 == 1)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e1[0],wW/2 - 25,150);
								ctx.fillRect(wW/2 - 25 - textWidth.width,155,textWidth.width,2);
							}
							if(mouseX >= wW/2 - 25 - textWidth.width && mouseX <= wW/2 - 25 && mouseY >= 125 && mouseY <= 150)
							{
								if(characters[slot].ec1 != 1)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e1[0],wW/2 - 25,150);
									ctx.fillRect(wW/2 - 25 - textWidth.width,155,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec1 = 1;
									localStorage.setItem(JSON.stringify("ec1" + slot), JSON.stringify(characters[slot].ec1));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e1[1])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e1[0]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.textAlign = "center";
							ctx.fillText("or",wW/2,150);
							ctx.textAlign = "start";
							textWidth = ctx.measureText(classes[i].e1[1]);
							if(characters[slot].ec1 != 2)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e1[1],wW/2 + 25,150);
								ctx.fillRect(wW/2 + 25,155,textWidth.width,2);
							}
							if(characters[slot].ec1 == 2)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e1[1],wW/2 + 25,150);
								ctx.fillRect(wW/2 + 25,155,textWidth.width,2);
							}
							if(mouseX >= wW/2 + 25 && mouseX <= wW/2 + 25 + textWidth.width && mouseY >= 125 && mouseY <= 150)
							{
								if(characters[slot].ec1 != 2)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e1[1],wW/2 + 25,150);
									ctx.fillRect(wW/2 + 25,155,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec1 = 2;
									localStorage.setItem(JSON.stringify("ec1" + slot), JSON.stringify(characters[slot].ec1));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e1[0])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e1[1]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
						}
						if(j == 1)
						{
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.font = "25px Arial";
							ctx.textAlign = "end";
							let textWidth = ctx.measureText(classes[i].e2[0]);
							if(characters[slot].ec2 != 1)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e2[0],wW/2 - 25,200);
								ctx.fillRect(wW/2 - 25 - textWidth.width,205,textWidth.width,2);
							}
							if(characters[slot].ec2 == 1)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e2[0],wW/2 - 25,200);
								ctx.fillRect(wW/2 - 25 - textWidth.width,205,textWidth.width,2);
							}
							if(mouseX >= wW/2 - 25 - textWidth.width && mouseX <= wW/2 - 25 && mouseY >= 175 && mouseY <= 200)
							{
								if(characters[slot].ec2 != 1)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e2[0],wW/2 - 25,200);
									ctx.fillRect(wW/2 - 25 - textWidth.width,205,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec2 = 1;
									localStorage.setItem(JSON.stringify("ec2" + slot), JSON.stringify(characters[slot].ec2));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e2[1])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e2[0]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.textAlign = "center";
							ctx.fillText("or",wW/2,200);
							ctx.textAlign = "start";
							textWidth = ctx.measureText(classes[i].e2[1]);
							if(characters[slot].ec2 != 2)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e2[1],wW/2 + 25,200);
								ctx.fillRect(wW/2 + 25,205,textWidth.width,2);
							}
							if(characters[slot].ec2 == 2)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e2[1],wW/2 + 25,200);
								ctx.fillRect(wW/2 + 25,205,textWidth.width,2);
							}
							if(mouseX >= wW/2 + 25 && mouseX <= wW/2 + 25 + textWidth.width && mouseY >= 175 && mouseY <= 200)
							{
								if(characters[slot].ec2 != 2)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e2[1],wW/2 + 25,200);
									ctx.fillRect(wW/2 + 25,205,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec2 = 2;
									localStorage.setItem(JSON.stringify("ec2" + slot), JSON.stringify(characters[slot].ec2));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e2[0])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e2[1]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
						}
						if(j == 2)
						{
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.font = "25px Arial";
							ctx.textAlign = "end";
							let textWidth = ctx.measureText(classes[i].e3[0]);
							if(characters[slot].ec3 != 1)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e3[0],wW/2 - 25,250);
								ctx.fillRect(wW/2 - 25 - textWidth.width,255,textWidth.width,2);
							}
							if(characters[slot].ec3 == 1)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e3[0],wW/2 - 25,250);
								ctx.fillRect(wW/2 - 25 - textWidth.width,255,textWidth.width,2);
							}
							if(mouseX >= wW/2 - 25 - textWidth.width && mouseX <= wW/2 - 25 && mouseY >= 225 && mouseY <= 250)
							{
								if(characters[slot].ec3 != 1)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e3[0],wW/2 - 25,250);
									ctx.fillRect(wW/2 - 25 - textWidth.width,255,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec3 = 1;
									localStorage.setItem(JSON.stringify("ec3" + slot), JSON.stringify(characters[slot].ec3));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e3[1])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e3[0]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.textAlign = "center";
							ctx.fillText("or",wW/2,250);
							ctx.textAlign = "start";
							textWidth = ctx.measureText(classes[i].e3[1]);
							if(characters[slot].ec3 != 2)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e3[1],wW/2 + 25,250);
								ctx.fillRect(wW/2 + 25,255,textWidth.width,2);
							}
							if(characters[slot].ec3 == 2)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e3[1],wW/2 + 25,250);
								ctx.fillRect(wW/2 + 25,255,textWidth.width,2);
							}
							if(mouseX >= wW/2 + 25 && mouseX <= wW/2 + 25 + textWidth.width && mouseY >= 225 && mouseY <= 250)
							{
								if(characters[slot].ec3 != 2)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e3[1],wW/2 + 25,250);
									ctx.fillRect(wW/2 + 25,255,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec3 = 2;
									localStorage.setItem(JSON.stringify("ec3" + slot), JSON.stringify(characters[slot].ec3));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e3[0])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e3[1]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
						}
						if(j == 3)
						{
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.font = "25px Arial";
							ctx.textAlign = "end";
							let textWidth = ctx.measureText(classes[i].e4[0]);
							if(characters[slot].ec4 != 1)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e4[0],wW/2 - 25,300);
								ctx.fillRect(wW/2 - 25 - textWidth.width,305,textWidth.width,2);
							}
							if(characters[slot].ec4 == 1)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e4[0],wW/2 - 25,300);
								ctx.fillRect(wW/2 - 25 - textWidth.width,305,textWidth.width,2);
							}
							if(mouseX >= wW/2 - 25 - textWidth.width && mouseX <= wW/2 - 25 && mouseY >= 275 && mouseY <= 300)
							{
								if(characters[slot].ec4 != 1)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e4[0],wW/2 - 25,300);
									ctx.fillRect(wW/2 - 25 - textWidth.width,305,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec4 = 1;
									localStorage.setItem(JSON.stringify("ec4" + slot), JSON.stringify(characters[slot].ec4));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e4[1])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e4[0]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
							ctx.fillStyle = "rgb(0,0,0)";
							ctx.textAlign = "center";
							ctx.fillText("or",wW/2,300);
							ctx.textAlign = "start";
							textWidth = ctx.measureText(classes[i].e4[1]);
							if(characters[slot].ec4 != 2)
							{
								ctx.fillStyle = "rgb(0,0,0)";
								ctx.fillText(classes[i].e4[1],wW/2 + 25,300);
								ctx.fillRect(wW/2 + 25,305,textWidth.width,2);
							}
							if(characters[slot].ec4 == 2)
							{
								ctx.fillStyle = "rgb(50,125,50)";
								ctx.fillText(classes[i].e4[1],wW/2 + 25,300);
								ctx.fillRect(wW/2 + 25,305,textWidth.width,2);
							}
							if(mouseX >= wW/2 + 25 && mouseX <= wW/2 + 25 + textWidth.width && mouseY >= 275 && mouseY <= 300)
							{
								if(characters[slot].ec4 != 2)
								{
									ctx.fillStyle = "rgb(150,150,150)";
									ctx.fillText(classes[i].e4[1],wW/2 + 25,300);
									ctx.fillRect(wW/2 + 25,305,textWidth.width,2);
								}
								if(mouseIsDown)
								{
									mouseIsDown = false;
									characters[slot].ec4 = 2;
									localStorage.setItem(JSON.stringify("ec4" + slot), JSON.stringify(characters[slot].ec4));
									for(let k = 0; k < characters[slot].equipment.length; k++)
									{
										if(characters[slot].equipment[k] == classes[i].e4[0])
										{
											characters[slot].equipment.splice(k,1);
										}
									}
									characters[slot].equipment.push(classes[i].e4[1]);
									localStorage.setItem(JSON.stringify("equipment" + slot), JSON.stringify(characters[slot].equipment));
								}
							}
						}
					}
				}
				if(characters[slot].bc == "buy")
				{
					ctx.fillStyle = "rgb(180,180,180)";
					ctx.fillRect(194, 15, 92, 40);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillText("Buy", 240, 43);
					localStorage.setItem(JSON.stringify("ec1" + slot), "-1");
					localStorage.setItem(JSON.stringify("ec2" + slot), "-1");
					localStorage.setItem(JSON.stringify("ec3" + slot), "-1");
					localStorage.setItem(JSON.stringify("ec4" + slot), "-1");
		 			localStorage.setItem(JSON.stringify("equipment" + slot), "[]");

					ctx.fillStyle = "rgb(250,0,0)";
					ctx.fillRect(wW/2 - 50, 150, 100, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.textAlign = "center";
					ctx.fillText("Class gold: " + classes[i].g, wW/2, 125);
					ctx.fillText("Roll?", wW/2, 190);
					if(mouseX >= wW/2 - 50 && mouseX <= wW/2 + 50 && mouseY >= 150 && mouseY <= 210)
					{
						ctx.fillStyle = "rgb(200,0,0)";
						ctx.fillRect(wW/2 - 50, 150, 100, 60);
						ctx.fillStyle = "rgb(0,0,0)";
						ctx.fillText("Roll?", wW/2, 190);
						if(mouseIsDown)
						{
							mouseIsDown = false;
							goldRoll = 0;
							for(let j = 0; j < parseInt(classes[i].g.charAt(0)); j++)
							{
								goldRoll += (Math.floor(Math.random() * 4) + 1) * 10;
							}
						}
					}
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillText("Gold: " + goldRoll, wW/2, 250);
				}
			}
		}
	}

	if(step == 5) //description
	{
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.textAlign = "center";
		ctx.fillText("5. Describe Character", wW / 2, 50);

		//choose alignment
		ctx.fillStyle = "rgb(200,200,200)";
		ctx.fillRect(wW / 2 - 150, 75, 300, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(characters[slot].alignment, wW / 2, 120);
		if(mouseX >= wW / 2 - 150 && mouseX <= wW / 2 + 150 && mouseY >= 75 && mouseY <= 150)
		{
			ctx.fillStyle = "rgb(180,180,180)";
			ctx.fillRect(wW / 2 - 150, 75, 300, 75);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(characters[slot].alignment, wW / 2, 120);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				alignmentBox = true;
			}
		}
		if(alignmentBox)
		{
			dropDownBox(200, 200, 200, wW / 2 + 155, 75, 250, 400, 9, alignments, false, true);
			alignmentBox = makeBoxSame;
			characters[slot].alignment = makeListSame;
			localStorage.setItem(JSON.stringify("alignment" + slot), characters[slot].alignment);
			//(cR,cG,cB,rectX,rectY,rectL,rectH,listAmount,text)
		}

		//select character and player names
		ctx.fillStyle = "rgb(200,200,200)";
		ctx.fillRect(wW / 2 - 450, 75, 250, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(characters[slot].name, wW / 2 - 325, 120);
		let word1 = word.slice();
		let makeSame = "";
		if(mouseX >= wW / 2 - 450 && mouseX <= wW / 2 - 200 && mouseY >= 75 && mouseY <= 150)
		{
			ctx.fillStyle = "rgb(180,180,180)";
			ctx.fillRect(wW / 2 - 450, 75, 250, 75);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(characters[slot].name, wW / 2 - 325, 120);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				oldMouseX = mouseX;
				oldMouseY = mouseY;
			}
		}
		if(oldMouseX >= wW / 2 - 450 && oldMouseX <= wW / 2 - 200 && oldMouseY >= 75 && oldMouseY <= 150)
		{
			if(mouseIsDown)
			{
				word = characters[slot].name.split("");
			}
			else
			{
				characters[slot].name = word1.join("");
				ctx.fillStyle = "rgb(175,175,175)";
				ctx.fillRect(wW / 2 - 450, 75, 250, 75);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(characters[slot].name, wW / 2 - 325, 120);
			}
		}
		localStorage.setItem(JSON.stringify("name" + slot), characters[slot].name);
		ctx.fillStyle = "rgb(200,200,200)";
		ctx.fillRect(wW / 2 - 450, 200, 250, 75);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(characters[slot].pName, wW / 2 - 325, 245);
		if(mouseX >= wW / 2 - 450 && mouseX <= wW / 2 - 200 && mouseY >= 200 && mouseY <= 275)
		{
			ctx.fillStyle = "rgb(180,180,180)";
			ctx.fillRect(wW / 2 - 450, 200, 250, 75);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(characters[slot].pName, wW / 2 - 325, 245);
			if(mouseIsDown)
			{
				mouseIsDown = false;
				oldMouseX = mouseX;
				oldMouseY = mouseY;
			}
		}
		if(oldMouseX >= wW / 2 - 450 && oldMouseX <= wW / 2 - 200 && oldMouseY >= 200 && oldMouseY <= 275)
		{
			if(mouseIsDown)
			{
				word = characters[slot].pName.split("");
			}
			else
			{
				characters[slot].pName = word1.join("");
				ctx.fillStyle = "rgb(175,175,175)";
				ctx.fillRect(wW / 2 - 450, 200, 250, 75);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(characters[slot].pName, wW / 2 - 325, 245);
			}
		}
		localStorage.setItem(JSON.stringify("pName" + slot), characters[slot].pName);
		/* function characterInfo(type,x1,x2,y1,y2,xw,yw,opacity)
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
					ctx.fillStyle = "rgba(220,220,220,"+opacity+")";
					ctx.fillRect(x1,y1,xw,yw);
				}
			}
			if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2)
			{
				ctx.fillStyle = "rgba(220,220,220,"+opacity+")";
				ctx.fillRect(x1,y1,xw,yw);
			}
			makeSame = type;
		}
		//name
		characterInfo(characters[slot].name,60,250,50,80,190,30,.6);
		characters[slot].name = makeSame;
		localStorage.setItem(JSON.stringify("name"+slot), characters[slot].name); */
	}

	ctx.textAlign = "start";
}
