var qButton = false;
var wButton = false;
var eButton = false;
var rButton = false;
var tButton = false;
var yButton = false;
var uButton = false;
var iButton = false;
var oButton = false;
var pButton = false;
var aButton = false;
var sButton = false;
var dButton = false;
var fButton = false;
var gButton = false;
var hButton = false;
var jButton = false;
var kButton = false;
var lButton = false;
var zButton = false;
var xButton = false;
var cButton = false;
var vButton = false;
var bButton = false;
var nButton = false;
var mButton = false;
var enterButton = false;
var backButton = false;
var canPressAgain = true;

function keyDownHandler(e){
	if(e.keyCode == 65 && canPressAgain)
	{
	aButton = true;
	word.push("a");
	canPressAgain = false;
	}
	else if(e.keyCode == 66 && canPressAgain)
	{
	bButton = true;
	word.push("b");
	canPressAgain = false;
	}
	else if(e.keyCode == 67 && canPressAgain)
	{
	cButton = true;
	word.push("c");
	canPressAgain = false;
	}
	else if(e.keyCode == 68 && canPressAgain)
	{
	dButton = true;
	word.push("d");
	canPressAgain = false;
	}
	else if(e.keyCode == 69 && canPressAgain)
	{
	eButton = true;
	word.push("e");
	canPressAgain = false;
	}
	else if(e.keyCode == 70 && canPressAgain)
	{
	fButton = true;
	word.push("f");
	canPressAgain = false;
	}
	else if(e.keyCode == 71 && canPressAgain)
	{
	gButton = true;
	word.push("g");
	canPressAgain = false;
	}
	else if(e.keyCode == 72 && canPressAgain)
	{
	hButton = true;
	word.push("h");
	canPressAgain = false;
	}
	else if(e.keyCode == 73 && canPressAgain)
	{
	iButton = true;
	word.push("i");
	canPressAgain = false;
	}
	else if(e.keyCode == 74 && canPressAgain)
	{
	jButton = true;
	word.push("j");
	canPressAgain = false;
	}
else if(e.keyCode == 75 && canPressAgain)
	{
	kButton = true;
	word.push("k");
	canPressAgain = false;
	}
	else if(e.keyCode == 76 && canPressAgain)
	{
	lButton = true;
	word.push("l");
	canPressAgain = false;
	}
	else if(e.keyCode == 77 && canPressAgain)
	{
	mButton = true;
	word.push("m");
	canPressAgain = false;
	}
	else if(e.keyCode == 78 && canPressAgain)
	{
	nButton = true;
	word.push("n");
	canPressAgain = false;
	}	
else if(e.keyCode == 79 && canPressAgain)
	{
	oButton = true;
	word.push("o");
	canPressAgain = false;
	}
	else if(e.keyCode == 80 && canPressAgain)
	{
	pButton = true;
	word.push("p");
	canPressAgain = false;
	}
	else if(e.keyCode == 81 && canPressAgain)
	{
	qButton = true;
	word.push("q");
	canPressAgain = false;
	}
	else if(e.keyCode == 82 && canPressAgain)
	{
	rButton = true;
	word.push("r");
	canPressAgain = false;
	}	
else if(e.keyCode == 83 && canPressAgain)
	{
	sButton = true;
	word.push("s");
	canPressAgain = false;
	}
	else if(e.keyCode == 84 && canPressAgain)
	{
	tButton = true;
	word.push("t");
	canPressAgain = false;
	}
	else if(e.keyCode == 85 && canPressAgain)
	{
	uButton = true;
	word.push("u");
	canPressAgain = false;
	}
	else if(e.keyCode == 86 && canPressAgain)
	{
	vButton = true;
	word.push("v");
	canPressAgain = false;
	}	
else if(e.keyCode == 87 && canPressAgain)
	{
	wButton = true;
	word.push("w");
	canPressAgain = false;
	}
	else if(e.keyCode == 88 && canPressAgain)
	{
	xButton = true;
	word.push("x");
	canPressAgain = false;
	}
	else if(e.keyCode == 89 && canPressAgain)
	{
	yButton = true;
	word.push("y");
	canPressAgain = false;
	}
	else if(e.keyCode == 90 && canPressAgain)
	{
	zButton = true;
	word.push("z");
	canPressAgain = false;
	}
	else if(e.keyCode == 13 && canPressAgain)
	{
	///enter
	enterButton = true;
	canPressAgain = false;
	}
	else if(e.keyCode == 8)
	{
	///backspace
	backButton = true;
	word.pop();
	canPressAgain = false;
	}

}
function keyUpHandler(e){
	if(e.keyCode == 65)
	{
	aButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 66)
	{
	bButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 67)
	{
	cButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 68)
	{
	dButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 69)
	{
	eButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 70)
	{
	fButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 71)
	{
	gButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 72)
	{
	hButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 73)
	{
	iButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 74)
	{
	jButton = false;
	canPressAgain = true;
	}
else if(e.keyCode == 75)
	{
	kButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 76)
	{
	lButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 77)
	{
	mButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 78)
	{
	nButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 79)
	{
	oButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 80)
	{
	pButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 81)
	{
	qButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 82)
	{
	rButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 83)
	{
	sButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 84)
	{
	tButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 85)
	{
	uButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 86)
	{
	vButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 87)
	{
	wButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 88)
	{
	xButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 89)
	{
	yButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 90)
	{
	zButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 13)
	{
	///enter
	enterButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 8)
	{
	///backspace
	backButton = false;
	canPressAgain = true;
	}
}