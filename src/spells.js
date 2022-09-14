//spells
function drawSpells(slot)
{
	ctx.fillStyle = "rgb(240,240,240)";
	ctx.fillRect(0, 0, wW, wH);
	//exit
	if(mouseX >= 0 && mouseX <= 30 && mouseY >= 0 && mouseY <= 30)
	{
		ctx.fillStyle = "rgb(255,0,0)";
		ctx.fillRect(0, 0, 30, 30);
		if(mouseIsDown)
		{
			spells1On = false;
			spells2On = false;
			spells3On = false;
			spells4On = false;
			windowOn = true;
			openTimer = 0;
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

	//character select

}
