let icons = [];
let windows = [];
let menu = true;
let windowOn = false;
let loc = 0;
//opened subwindows
let character1On = false;
let character2On = false;
let character3On = false;
let character4On = false;
let char1Create = false;
let char2Create = false;
let char3Create = false;
let char4Create = false;
let spells1On = false;
let spells2On = false;
let spells3On = false;
let spells4On = false;

function Icon(x1, y1, type, address, width, height, name)
{
	this.x = x1;
	this.y = y1;
	this.type = type;
	this.address = address;
	this.w = width;
	this.h = height;
	this.name = name;
	this.isActive = false;
}

function Window(x1, y1, type, address, width, height, name)
{
	this.x = x1;
	this.y = y1;
	this.type = type;
	this.address = address;
	this.w = width;
	this.h = height;
	this.name = name;
}

icons.push(new Icon(100, 100, 1, "images/img2.png", 100, 100, "Character Sheets"));
icons.push(new Icon(300, 100, 2, "images/img1.png", 100, 100, "Spells"));

//draws icons to open different applications
function drawIcons()
{
	for(let i = 0; i < icons.length; i++)
	{
		let img = new Image();
		img.src = icons[i].address;
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.font = "15px Arial";
		ctx.drawImage(img, icons[i].x, icons[i].y, icons[i].w, icons[i].h * (5 / 6));
		ctx.textAlign = "center";
		ctx.fillText(icons[i].name, icons[i].x + (icons[i].w / 2), icons[i].y + (icons[i].h * (5 / 6)) + 15);
		ctx.textAlign = "start";
		ctx.fillStyle = "rgb(0,0,0)";
		if(mouseX >= icons[i].x && mouseX <= icons[i].x + icons[i].w && mouseY >= icons[i].y && mouseY <= icons[i].y + icons[i].h &&
			menu == true)
		{
			ctx.fillStyle = "rgb(210,210,210)";
			ctx.fillRect(icons[i].x, icons[i].y - 2, icons[i].w, icons[i].h + 2);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.drawImage(img, icons[i].x, icons[i].y, icons[i].w, icons[i].h * (5 / 6));
			ctx.textAlign = "center";
			ctx.fillText(icons[i].name, icons[i].x + (icons[i].w / 2), icons[i].y + (icons[i].h * (5 / 6)) + 15);
			ctx.textAlign = "start";
			if(mouseIsDown)
			{
				mouseIsDown = false;
				mouseTimer = 0;
				let winX = 0 + (10 * windows.length);
				let winY = 30 + (10 * windows.length);
				windows.push(new Window(winX, winY, icons[i].type,
					icons[i].address, wW, wH, icons[i].name));
				windowOn = true;
			}
		}
	}
}

//draws windows that are opened from icons
function drawWindows()
{
	for(let i = 0; i < windows.length; i++)
	{
		menu = false;
		let img = new Image();
		img.src = windows[i].address;
		//closing the window
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.font = "32px Arial";
		ctx.fillStyle = "rgb(200,50,50)";
		ctx.fillRect(windows[i].x, windows[i].y, windows[i].w, windows[i].h);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(windows[i].name, windows[i].x + 15, windows[i].y - 6);
		//this line is for drawing an image, probably as a background
		//ctx.drawImage(img, windows[i].x, windows[i].y, windows[i].w, windows[i].h);
		if(mouseX >= windows[i].x + windows[i].w - 28 && mouseX <= windows[i].x + windows[i].w + 3 &&
			mouseY >= windows[i].y - 30 && mouseY <= windows[i].y)
		{
			ctx.fillStyle = "rgb(255,0,0)";
			ctx.fillRect(windows[i].x + windows[i].w - 28,
				windows[i].y - 30, 30, 30);
			if(mouseIsDown)
			{
				windows.splice(i, 1);
				mouseIsDown = false;
				doubleClick = false;
				menu = true;
			}
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.font = "32px Arial";
			ctx.fillText("X", windows[i].x + windows[i].w - 25,
				windows[i].y - 4);
		}
		else
		{
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.font = "32px Arial";
			ctx.fillText("X", windows[i].x + windows[i].w - 25,
				windows[i].y - 4);
		}

		//if window is for character sheets
		if(windows[i].type == 1)
		{
			//fill in character select screen
			if(characters[0].name == "Name")
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect(windows[i].x + 25, windows[i].y + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 1", windows[i].x + 75, windows[i].y + 75);
				ctx.fillText("Create", windows[i].x + 75, windows[i].y + 120);
			}
			else
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect(windows[i].x + 25, windows[i].y + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.font = "40px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText("Character 1", windows[i].x + 75, windows[i].y + 75);
				ctx.font = "30px Arial";
				ctx.fillText(characters[0].name, windows[i].x + 75, windows[i].y + 100);
				ctx.fillText(characters[0].currentHp + "/" + characters[0].maxHp + " HP", windows[i].x + 75, windows[i].y + 150);
				ctx.fillText("Level " + characters[0].level + " " + characters[0].race + " " + characters[0].cClass, windows[i].x + 75, windows[i].y + 125);
			}
			if(characters[1].name == "Name")
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect((windows[i].w / 2) + 25, windows[i].y + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 2", (windows[i].w / 2) + 75, windows[i].y + 75);
				ctx.fillText("Create", (windows[i].w / 2) + 75, windows[i].y + 120);
			}
			else
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect((windows[i].w / 2) + 25, windows[i].y + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.font = "40px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText("Character 2", (windows[i].w / 2) + 75, windows[i].y + 75);
				ctx.font = "30px Arial";
				ctx.fillText(characters[1].name, windows[i].w / 2 + 75, windows[i].y + 100);
				ctx.fillText(characters[1].currentHp + "/" + characters[1].maxHp + " HP", windows[i].w / 2 + 75, windows[i].y + 150);
				ctx.fillText("Level " + characters[1].level + " " + characters[1].race + " " + characters[1].cClass, windows[i].w / 2 + 75, windows[i].y + 125);
			}
			if(characters[2].name == "Name")
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect(windows[i].x + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 3", windows[i].x + 75, (windows[i].h / 2) + 75);
				ctx.fillText("Create", windows[i].x + 75, (windows[i].h / 2) + 120);
			}
			else
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect(windows[i].x + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.font = "40px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText("Character 3", windows[i].x + 75, (windows[i].h / 2) + 75);
				ctx.font = "30px Arial";
				ctx.fillText(characters[2].name, windows[i].x + 75, windows[i].h / 2 + 100);
				ctx.fillText(characters[2].currentHp + "/" + characters[2].maxHp + " HP", windows[i].x + 75, windows[i].h / 2 + 150);
				ctx.fillText("Level " + characters[2].level + " " + characters[2].race + " " + characters[2].cClass, windows[i].x + 75, windows[i].h / 2 + 125);
			}
			if(characters[3].name == "Name")
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect((windows[i].w / 2) + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 4", (windows[i].w / 2) + 75, (windows[i].h / 2) + 75);
				ctx.fillText("Create", (windows[i].w / 2) + 75, (windows[i].h / 2) + 120);
			}
			else
			{
				ctx.fillStyle = "rgb(220,220,220)";
				ctx.fillRect((windows[i].w / 2) + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.font = "40px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText("Character 4", (windows[i].w / 2) + 75, (windows[i].h / 2) + 75);
				ctx.font = "30px Arial";
				ctx.fillText(characters[3].name, windows[i].w / 2 + 75, windows[i].h / 2 + 100);
				ctx.fillText(characters[3].currentHp + "/" + characters[3].maxHp + " HP", windows[i].w / 2 + 75, windows[i].h / 2 + 150);
				ctx.fillText("Level " + characters[3].level + " " + characters[3].race + " " + characters[3].cClass, windows[i].w / 2 + 75, windows[i].h / 2 + 125);
			}
			//open character sheets
			if(mouseX >= windows[i].x + 25 && mouseX <= (windows[i].w / 2) && mouseY >= windows[i].y + 25 && mouseY <= (windows[i].h / 2) + 5) //1
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(windows[i].x + 25, windows[i].y + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 1", windows[i].x + 75, windows[i].y + 75);
				if(characters[0].name == "Name")
				{
					ctx.font = "40px Arial";
					ctx.fillText("Create", windows[i].x + 75, windows[i].y + 120);
				}
				else
				{
					ctx.font = "30px Arial";
					ctx.fillText(characters[0].name, windows[i].x + 75, windows[i].y + 100);
					ctx.fillText("Level " + characters[0].level + " " + characters[0].race + " " + characters[0].cClass, windows[i].x + 75, windows[i].y + 125);
					ctx.fillText(characters[0].currentHp + "/" + characters[0].maxHp + " HP", windows[i].x + 75, windows[i].y + 150);
				}
				if(mouseIsDown && windowOn == true)
				{
					if(characters[0].name == "Name")
					{
						char1Create = true;
						step = 1;
						windowOn = false;
						mouseIsDown = false;
					}
					else
					{
						character1On = true;
						windowOn = false;
						mouseIsDown = false;
					}
				}
			}
			if(mouseX >= (windows[i].w / 2) + 25 && mouseX <= windows[i].w - 25 && mouseY >= windows[i].y + 25 && mouseY <= (windows[i].h / 2) + 5) //2
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect((windows[i].w / 2) + 25, windows[i].y + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 2", (windows[i].w / 2) + 75, windows[i].y + 75);
				if(characters[1].name == "Name")
				{
					ctx.font = "40px Arial";
					ctx.fillText("Create", (windows[i].w / 2) + 75, windows[i].y + 120);
				}
				else
				{
					ctx.font = "30px Arial";
					ctx.fillText(characters[1].name, windows[i].w / 2 + 75, windows[i].y + 100);
					ctx.fillText("Level " + characters[1].level + " " + characters[1].race + " " + characters[1].cClass, windows[i].w / 2 + 75, windows[i].y + 125);
					ctx.fillText(characters[1].currentHp + "/" + characters[1].maxHp + " HP", windows[i].w / 2 + 75, windows[i].y + 150);
				}
				if(mouseIsDown && windowOn == true)
				{
					if(characters[1].name == "Name")
					{
						char2Create = true;
						step = 1;
						windowOn = false;
						mouseIsDown = false;
					}
					else
					{
						character2On = true;
						windowOn = false;
						mouseIsDown = false;
					}
				}
			}
			if(mouseX >= windows[i].x + 25 && mouseX <= (windows[i].w / 2) && mouseY >= (windows[i].h / 2) + 25 && mouseY <= windows[i].h - 25) //3
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(windows[i].x + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 3", windows[i].x + 75, (windows[i].h / 2) + 75);
				if(characters[2].name == "Name")
				{
					ctx.font = "40px Arial";
					ctx.fillText("Create", windows[i].x + 75, (windows[i].h / 2) + 120);
				}
				else
				{
					ctx.font = "30px Arial";
					ctx.fillText(characters[2].name, windows[i].x + 75, windows[i].h / 2 + 100);
					ctx.fillText("Level " + characters[2].level + " " + characters[2].race + " " + characters[2].cClass, windows[i].x + 75, windows[i].h / 2 + 125);
					ctx.fillText(characters[2].currentHp + "/" + characters[2].maxHp + " HP", windows[i].x + 75, windows[i].h / 2 + 150);
				}
				if(mouseIsDown && windowOn == true)
				{
					if(characters[2].name == "Name")
					{
						char3Create = true;
						step = 1;
						windowOn = false;
						mouseIsDown = false;
					}
					else
					{
						character3On = true;
						windowOn = false;
						mouseIsDown = false;
					}
				}
			}
			if(mouseX >= (windows[i].w / 2) + 25 && mouseX <= windows[i].w - 25 && mouseY >= (windows[i].h / 2) + 25 && mouseY <= windows[i].h - 25) //4
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect((windows[i].w / 2) + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Character 4", (windows[i].w / 2) + 75, (windows[i].h / 2) + 75);
				if(characters[3].name == "Name")
				{
					ctx.font = "40px Arial";
					ctx.fillText("Create", (windows[i].w / 2) + 75, (windows[i].h / 2) + 120);
				}
				else
				{
					ctx.font = "30px Arial";
					ctx.fillText(characters[3].name, windows[i].w / 2 + 75, windows[i].h / 2 + 100);
					ctx.fillText("Level " + characters[3].level + " " + characters[3].race + " " + characters[3].cClass, windows[i].w / 2 + 75, windows[i].h / 2 + 125);
					ctx.fillText(characters[3].currentHp + "/" + characters[3].maxHp + " HP", windows[i].w / 2 + 75, windows[i].h / 2 + 150);
				}
				if(mouseIsDown && windowOn == true)
				{
					if(characters[3].name == "Name")
					{
						char4Create = true;
						step = 1;
						windowOn = false;
						mouseIsDown = false;
					}
					else
					{
						character4On = true;
						windowOn = false;
						mouseIsDown = false;
					}
				}
			}
		}
		if(windows[i].type == 2)//spells
		{
			//fill in preset select screen
			ctx.fillStyle = "rgb(220,220,220)";
			ctx.fillRect(windows[i].x + 25, windows[i].y + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50); //1
			ctx.fillRect((windows[i].w / 2) + 25, windows[i].y + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50); //2
			ctx.fillRect(windows[i].x + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50); //3
			ctx.fillRect((windows[i].w / 2) + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50); //4
			ctx.fillStyle = "rgb(0,0,0)";

			ctx.font = "40px Arial";
			ctx.fillText("Preset 1", windows[i].x + 75, windows[i].y + 75);
			ctx.fillText("Preset 2", (windows[i].w / 2) + 75, windows[i].y + 75);
			ctx.fillText("Preset 3", windows[i].x + 75, (windows[i].h / 2) + 75);
			ctx.fillText("Preset 4", (windows[i].w / 2) + 75, (windows[i].h / 2) + 75);
			if(mouseX >= windows[i].x + 25 && mouseX <= (windows[i].w / 2) && mouseY >= windows[i].y + 25 && mouseY <= (windows[i].h / 2) + 5) //1
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(windows[i].x + 25, windows[i].y + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Preset 1", windows[i].x + 75, windows[i].y + 75);
				if(mouseIsDown && windowOn == true)
				{
					spells1On = true;
					windowOn = false;
				}
			}
			if(mouseX >= (windows[i].w / 2) + 25 && mouseX <= windows[i].w - 25 && mouseY >= windows[i].y + 25 && mouseY <= (windows[i].h / 2) + 5) //2
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect((windows[i].w / 2) + 25, windows[i].y + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Preset 2", (windows[i].w / 2) + 75, windows[i].y + 75);
				if(mouseIsDown && windowOn == true)
				{
					spells2On = true;
					windowOn = false;
				}
			}
			if(mouseX >= windows[i].x + 25 && mouseX <= (windows[i].w / 2) && mouseY >= (windows[i].h / 2) + 25 && mouseY <= windows[i].h - 25) //3
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(windows[i].x + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 25, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Preset 3", windows[i].x + 75, (windows[i].h / 2) + 75);
				if(mouseIsDown && windowOn == true)
				{
					spells3On = true;
					windowOn = false;
				}
			}
			if(mouseX >= (windows[i].w / 2) + 25 && mouseX <= windows[i].w - 25 && mouseY >= (windows[i].h / 2) + 25 && mouseY <= windows[i].h - 25) //4
			{
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect((windows[i].w / 2) + 25, (windows[i].h / 2) + 25, (windows[i].w / 2) - 50, (windows[i].h / 2) - 50);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.font = "40px Arial";
				ctx.fillText("Preset 4", (windows[i].w / 2) + 75, (windows[i].h / 2) + 75);
				if(mouseIsDown && windowOn == true)
				{
					spells4On = true;
					windowOn = false;
				}
			}
		}
	}
}

//opens character sheets when clicked on in the window
function openWindows()
{
	if(character1On)
	{
		drawSheet(0);
	}
	if(character2On)
	{
		drawSheet(1);
	}
	if(character3On)
	{
		drawSheet(2);
	}
	if(character4On)
	{
		drawSheet(3);
	}
	if(char1Create)
	{
		characterCreator(0);
	}
	if(char2Create)
	{
		characterCreator(1);
	}
	if(char3Create)
	{
		characterCreator(2);
	}
	if(char4Create)
	{
		characterCreator(3);
	}
	if(spells1On)
	{
		drawSpells(0);
	}
	if(spells2On)
	{
		drawSpells(1);
	}
	if(spells3On)
	{
		drawSpells(2);
	}
	if(spells4On)
	{
		drawSpells(3);
	}
}

//creates drop down boxes when called
function dropDownBox(cR, cG, cB, rectX, rectY, rectL, rectH, listAmount, text, sub, equals)
{
	makeBoxSame = equals;
	ctx.fillStyle = "rgb(" + cR + "," + cG + "," + cB + ")";
	ctx.fillRect(rectX, rectY, rectL, rectH);
	let listPart = 0;
	let tabSize = (rectH / listAmount);
	for(let i = 0; i < listAmount; i++)
	{
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "rgb(0,0,0)";
		if(sub == false)
		{
			ctx.fillText(text[i].name, rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
			if(mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY + listPart && mouseY <= rectY + listPart + tabSize)
			{
				ctx.fillStyle = "rgb(" + (cR - 20) + "," + (cG - 20) + "," + (cB - 20) + ")";
				ctx.fillRect(rectX, rectY + listPart, rectL, tabSize);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(text[i].name, rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
				if(mouseIsDown)
				{
					mouseIsDown = false;
					makeListSame = text[i].name;
					makeBoxSame = false;
				}
			}
		}
		if(sub == true)
		{
			ctx.fillText(text[i].name, rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
			if(mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY + listPart && mouseY <= rectY + listPart + tabSize)
			{
				ctx.fillStyle = "rgb(" + (cR - 20) + "," + (cG - 20) + "," + (cB - 20) + ")";
				ctx.fillRect(rectX, rectY + listPart, rectL, tabSize);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(text[i].name, rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
				if(mouseIsDown)
				{
					mouseIsDown = false;
					makeListSame = text[i].name;
					makeBoxSame = false;
				}
			}
		}
		if(sub == "choose")
		{
			ctx.fillText(text[i], rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
			if(mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY + listPart && mouseY <= rectY + listPart + tabSize)
			{
				ctx.fillStyle = "rgb(" + (cR - 20) + "," + (cG - 20) + "," + (cB - 20) + ")";
				ctx.fillRect(rectX, rectY + listPart, rectL, tabSize);
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillText(text[i], rectX + (rectL / 2), rectY + listPart + (tabSize / 2));
				if(mouseIsDown)
				{
					mouseIsDown = false;
					makeListSame = text[i];
					makeBoxSame = false;
				}
			}
		}
		ctx.textBaseline = "alphabetic";
		listPart += tabSize;
	}
	if(mouseX <= rectX || mouseX >= rectX + rectL || mouseY <= rectY || mouseY >= rectY + rectH)
	{
		makeListSame = "";
		if(mouseIsDown)
		{
			mouseIsDown = false;
			makeBoxSame = false;
		}
	}
}

//saves everything to local storage and sets presets to any null values
function useLocalStorage()
{
	for(let i = 0; i <= 3; i++)
	{
		characters[i].name = localStorage.getItem(JSON.stringify("name" + i));
		if(characters[i].name == null)
		{
			characters[i].name = "Name";
		}
		characters[i].cClass = localStorage.getItem(JSON.stringify("cClass" + i));
		if(characters[i].cClass == null)
		{
			characters[i].cClass = "Class";
		}
		characters[i].race = localStorage.getItem(JSON.stringify("race" + i));
		if(characters[i].race == null)
		{
			characters[i].race = "Race";
		}
		characters[i].background = localStorage.getItem(JSON.stringify("background" + i));
		if(characters[i].background == null)
		{
			characters[i].background = "Background";
		}
		characters[i].alignment = localStorage.getItem(JSON.stringify("alignment" + i));
		if(characters[i].alignment == null)
		{
			characters[i].alignment = "Alignment";
		}
		characters[i].pName = localStorage.getItem(JSON.stringify("pName" + i));
		if(characters[i].pName == null)
		{
			characters[i].pName = "Player Name";
		}
		characters[i].xp = localStorage.getItem(JSON.stringify("XP" + i));
		if(characters[i].xp == null)
		{
			characters[i].xp = "0";
		}
		characters[i].maxHp = localStorage.getItem(JSON.stringify("maxHP" + i));
		if(characters[i].maxHp == null)
		{
			characters[i].maxHp = "0";
		}
		characters[i].currentHp = localStorage.getItem(JSON.stringify("currentHP" + i));
		if(characters[i].currentHp == null)
		{
			characters[i].currentHp = "0";
		}
		characters[i].ac = localStorage.getItem(JSON.stringify("ac" + i));
		if(characters[i].ac == null)
		{
			characters[i].ac = "10";
		}
		characters[i].str = localStorage.getItem(JSON.stringify("str" + i));
		if(characters[i].str == null)
		{
			characters[i].str = "10";
		}
		characters[i].dex = localStorage.getItem(JSON.stringify("dex" + i));
		if(characters[i].dex == null)
		{
			characters[i].dex = "10";
		}
		characters[i].con = localStorage.getItem(JSON.stringify("con" + i));
		if(characters[i].con == null)
		{
			characters[i].con = "10";
		}
		characters[i].intelligence = localStorage.getItem(JSON.stringify("intelligence" + i));
		if(characters[i].intelligence == null)
		{
			characters[i].intelligence = "10";
		}
		characters[i].wis = localStorage.getItem(JSON.stringify("wis" + i));
		if(characters[i].wis == null)
		{
			characters[i].wis = "10";
		}
		characters[i].cha = localStorage.getItem(JSON.stringify("cha" + i));
		if(characters[i].cha == null)
		{
			characters[i].cha = "10";
		}
		characters[i].prof = localStorage.getItem(JSON.stringify("prof" + i));
		if(characters[i].prof == null)
		{
			characters[i].prof = "2";
		}
		characters[i].inspiration = localStorage.getItem(JSON.stringify("inspiration" + i));
		characters[i].deathSaveS1 = localStorage.getItem(JSON.stringify("deathSaveS1" + i));
		characters[i].deathSaveS2 = localStorage.getItem(JSON.stringify("deathSaveS2" + i));
		characters[i].deathSaveS3 = localStorage.getItem(JSON.stringify("deathSaveS3" + i));
		characters[i].deathSaveF1 = localStorage.getItem(JSON.stringify("deathSaveF1" + i));
		characters[i].deathSaveF2 = localStorage.getItem(JSON.stringify("deathSaveF2" + i));
		characters[i].deathSaveF3 = localStorage.getItem(JSON.stringify("deathSaveF3" + i));
		proficiencies[i].strProf = localStorage.getItem(JSON.stringify("strProf" + i));
		proficiencies[i].dexProf = localStorage.getItem(JSON.stringify("dexProf" + i));
		proficiencies[i].conProf = localStorage.getItem(JSON.stringify("conProf" + i));
		proficiencies[i].intProf = localStorage.getItem(JSON.stringify("intProf" + i));
		proficiencies[i].wisProf = localStorage.getItem(JSON.stringify("wisProf" + i));
		proficiencies[i].chaProf = localStorage.getItem(JSON.stringify("chaProf" + i));
		proficiencies[i].acrobaticsProf = localStorage.getItem(JSON.stringify("acrobaticsProf" + i));
		proficiencies[i].animalProf = localStorage.getItem(JSON.stringify("animalProf" + i));
		proficiencies[i].arcanaProf = localStorage.getItem(JSON.stringify("arcanaProf" + i));
		proficiencies[i].athleticsProf = localStorage.getItem(JSON.stringify("athleticsProf" + i));
		proficiencies[i].deceptionProf = localStorage.getItem(JSON.stringify("deceptionProf" + i));
		proficiencies[i].historyProf = localStorage.getItem(JSON.stringify("historyProf" + i));
		proficiencies[i].insightProf = localStorage.getItem(JSON.stringify("insightProf" + i));
		proficiencies[i].intimidationProf = localStorage.getItem(JSON.stringify("intimidationProf" + i));
		proficiencies[i].investigationProf = localStorage.getItem(JSON.stringify("investigationProf" + i));
		proficiencies[i].medicineProf = localStorage.getItem(JSON.stringify("medicineProf" + i));
		proficiencies[i].natureProf = localStorage.getItem(JSON.stringify("natureProf" + i));
		proficiencies[i].perceptionProf = localStorage.getItem(JSON.stringify("perceptionProf" + i));
		proficiencies[i].performanceProf = localStorage.getItem(JSON.stringify("performanceProf" + i));
		proficiencies[i].persuasionProf = localStorage.getItem(JSON.stringify("persuasionProf" + i));
		proficiencies[i].religionProf = localStorage.getItem(JSON.stringify("religionProf" + i));
		proficiencies[i].sleightProf = localStorage.getItem(JSON.stringify("sleightProf" + i));
		proficiencies[i].stealthProf = localStorage.getItem(JSON.stringify("stealthProf" + i));
		proficiencies[i].survivalProf = localStorage.getItem(JSON.stringify("survivalProf" + i));
		proficiencies[i].other = localStorage.getItem(JSON.stringify("otherProf" + i));
		if(characters[i].other == null)
		{
			characters[i].other = "";
		}
		characters[i].equipment = JSON.parse(localStorage.getItem(JSON.stringify("equipment" + i)));
		if(characters[i].equipment == null)
		{
			characters[i].equipment = [];
		}
		characters[i].cp = localStorage.getItem(JSON.stringify("cp" + i));
		if(characters[i].cp == null)
		{
			characters[i].cp = "0";
		}
		characters[i].sp = localStorage.getItem(JSON.stringify("sp" + i));
		if(characters[i].sp == null)
		{
			characters[i].sp = "0";
		}
		characters[i].gp = localStorage.getItem(JSON.stringify("gp" + i));
		if(characters[i].gp == null)
		{
			characters[i].gp = "0";
		}
		characters[i].ep = localStorage.getItem(JSON.stringify("ep" + i));
		if(characters[i].ep == null)
		{
			characters[i].ep = "0";
		}
		characters[i].pp = localStorage.getItem(JSON.stringify("pp" + i));
		if(characters[i].pp == null)
		{
			characters[i].pp = "0";
		}
		characters[i].pTraits = localStorage.getItem(JSON.stringify("pTraits" + i));
		if(characters[i].pTraits == null)
		{
			characters[i].pTraits = "";
		}
		characters[i].ideals = localStorage.getItem(JSON.stringify("ideals" + i));
		if(characters[i].ideals == null)
		{
			characters[i].ideals = "";
		}
		characters[i].bonds = localStorage.getItem(JSON.stringify("bonds" + i));
		if(characters[i].bonds == null)
		{
			characters[i].bonds = "";
		}
		characters[i].flaws = localStorage.getItem(JSON.stringify("flaws" + i));
		if(characters[i].flaws == null)
		{
			characters[i].flaws = "";
		}
		characters[i].traits = localStorage.getItem(JSON.stringify("traits" + i));
		if(characters[i].traits == null)
		{
			characters[i].traits = "";
		}
		characters[i].tHP = localStorage.getItem(JSON.stringify("tHP" + i));
		if(characters[i].tHP == null)
		{
			characters[i].tHP = "0";
		}
		characters[i].speed = localStorage.getItem(JSON.stringify("speed" + i));
		if(characters[i].speed == null)
		{
			characters[i].speed = "30 ft";
		}
		equipment[i].n1 = localStorage.getItem(JSON.stringify("n1" + i));
		if(equipment[i].n1 == null)
		{
			equipment[i].n1 = "";
		}
		equipment[i].n2 = localStorage.getItem(JSON.stringify("n2" + i));
		if(equipment[i].n2 == null)
		{
			equipment[i].n2 = "";
		}
		equipment[i].n3 = localStorage.getItem(JSON.stringify("n3" + i));
		if(equipment[i].n3 == null)
		{
			equipment[i].n3 = "";
		}
		equipment[i].b1 = localStorage.getItem(JSON.stringify("b1" + i));
		if(equipment[i].b1 == null)
		{
			equipment[i].b1 = "";
		}
		equipment[i].b2 = localStorage.getItem(JSON.stringify("b2" + i));
		if(equipment[i].b2 == null)
		{
			equipment[i].b2 = "";
		}
		equipment[i].b3 = localStorage.getItem(JSON.stringify("b3" + i));
		if(equipment[i].b3 == null)
		{
			equipment[i].b3 = "";
		}
		equipment[i].d1 = localStorage.getItem(JSON.stringify("d1" + i));
		if(equipment[i].d1 == null)
		{
			equipment[i].d1 = "";
		}
		equipment[i].d2 = localStorage.getItem(JSON.stringify("d2" + i));
		if(equipment[i].d2 == null)
		{
			equipment[i].d2 = "";
		}
		equipment[i].d3 = localStorage.getItem(JSON.stringify("d3" + i));
		if(equipment[i].d3 == null)
		{
			equipment[i].d3 = "";
		}
		equipment[i].details = localStorage.getItem(JSON.stringify("details" + i));
		if(equipment[i].details == null)
		{
			equipment[i].details = "";
		}
		characters[i].tHitDice = localStorage.getItem(JSON.stringify("tHitDice" + i));
		if(characters[i].tHitDice == null)
		{
			characters[i].tHitDice = "";
		}
		characters[i].cHitDice = localStorage.getItem(JSON.stringify("cHitDice" + i));
		if(characters[i].cHitDice == null)
		{
			characters[i].cHitDice = "";
		}
		characters[i].subrace = localStorage.getItem(JSON.stringify("subrace" + i));
		if(characters[i].subrace == null)
		{
			characters[i].subrace = "Subrace";
		}
		characters[i].sClass = localStorage.getItem(JSON.stringify("sClass" + i));
		if(characters[i].sClass == null)
		{
			characters[i].sClass = "Subclass";
		}
		characters[i].ec1 = localStorage.getItem(JSON.stringify("ec1" + i));
		if(characters[i].ec1 == null)
		{
			characters[i].ec1 = -1;
		}
		characters[i].ec2 = localStorage.getItem(JSON.stringify("ec2" + i));
		if(characters[i].ec2 == null)
		{
			characters[i].ec2 = -1;
		}
		characters[i].ec3 = localStorage.getItem(JSON.stringify("ec3" + i));
		if(characters[i].ec3 == null)
		{
			characters[i].ec3 = -1;
		}
		characters[i].ec4 = localStorage.getItem(JSON.stringify("ec4" + i));
		if(characters[i].ec4 == null)
		{
			characters[i].ec4 = -1;
		}
		characters[i].bc = localStorage.getItem(JSON.stringify("bc" + i));
		if(characters[i].bc == null)
		{
			characters[i].bc = "";
		}
	}
}