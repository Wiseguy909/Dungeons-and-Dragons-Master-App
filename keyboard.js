var button0 = false;
var button1 = false;
var button2 = false;
var button3 = false;
var button4 = false;
var button5 = false;
var button6 = false;
var button7 = false;
var button8 = false;
var button9 = false;
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

var QButton = false;
var WButton = false;
var EButton = false;
var RButton = false;
var TButton = false;
var YButton = false;
var UButton = false;
var IButton = false;
var OButton = false;
var PButton = false;
var AButton = false;
var SButton = false;
var DButton = false;
var FButton = false;
var GButton = false;
var HButton = false;
var JButton = false;
var KButton = false;
var LButton = false;
var ZButton = false;
var XButton = false;
var CButton = false;
var VButton = false;
var BButton = false;
var NButton = false;
var MButton = false;

var shiftKey = false;
var spaceBar = false;
var enterButton = false;
var backButton = false;
var canPressAgain = true;

let word = [];

function keyDownHandler(e){
	if(e.keyCode == 16)
	{
		shiftKey = true;
	}
	if(e.keyCode == 48 && canPressAgain)
	{
		button0 = true;
		word.push("0");
		canPressAgain = false;
	}
	else if(e.keyCode == 49 && canPressAgain)
	{
		button1 = true;
		word.push("1");
		canPressAgain = false;
	}
	else if(e.keyCode == 50 && canPressAgain)
	{
		button2 = true;
		word.push("2");
		canPressAgain = false;
	}
	else if(e.keyCode == 51 && canPressAgain)
	{
		button3 = true;
		word.push("3");
		canPressAgain = false;
	}
	else if(e.keyCode == 52 && canPressAgain)
	{
		button4 = true;
		word.push("4");
		canPressAgain = false;
	}
	else if(e.keyCode == 53 && canPressAgain)
	{
		button5 = true;
		word.push("5");
		canPressAgain = false;
	}
	else if(e.keyCode == 54 && canPressAgain)
	{
		button6 = true;
		word.push("6");
		canPressAgain = false;
	}
	else if(e.keyCode == 55 && canPressAgain)
	{
		button7 = true;
		word.push("7");
		canPressAgain = false;
	}
	else if(e.keyCode == 56 && canPressAgain)
	{
		button8 = true;
		word.push("8");
		canPressAgain = false;
	}
	else if(e.keyCode == 57 && canPressAgain)
	{
		button9 = true;
		word.push("9");
		canPressAgain = false;
	}
	
	
	
	else if(shiftKey == false && e.keyCode == 65 && canPressAgain)
	{
	aButton = true;
	word.push("a");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 66 && canPressAgain)
	{
	bButton = true;
	word.push("b");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 67 && canPressAgain)
	{
	cButton = true;
	word.push("c");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 68 && canPressAgain)
	{
	dButton = true;
	word.push("d");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 69 && canPressAgain)
	{
	eButton = true;
	word.push("e");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 70 && canPressAgain)
	{
	fButton = true;
	word.push("f");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 71 && canPressAgain)
	{
	gButton = true;
	word.push("g");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 72 && canPressAgain)
	{
	hButton = true;
	word.push("h");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 73 && canPressAgain)
	{
	iButton = true;
	word.push("i");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 74 && canPressAgain)
	{
	jButton = true;
	word.push("j");
	canPressAgain = false;
	}
else if(shiftKey == false && e.keyCode == 75 && canPressAgain)
	{
	kButton = true;
	word.push("k");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 76 && canPressAgain)
	{
	lButton = true;
	word.push("l");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 77 && canPressAgain)
	{
	mButton = true;
	word.push("m");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 78 && canPressAgain)
	{
	nButton = true;
	word.push("n");
	canPressAgain = false;
	}	
else if(shiftKey == false && e.keyCode == 79 && canPressAgain)
	{
	oButton = true;
	word.push("o");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 80 && canPressAgain)
	{
	pButton = true;
	word.push("p");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 81 && canPressAgain)
	{
	qButton = true;
	word.push("q");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 82 && canPressAgain)
	{
	rButton = true;
	word.push("r");
	canPressAgain = false;
	}	
else if(shiftKey == false && e.keyCode == 83 && canPressAgain)
	{
	sButton = true;
	word.push("s");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 84 && canPressAgain)
	{
	tButton = true;
	word.push("t");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 85 && canPressAgain)
	{
	uButton = true;
	word.push("u");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 86 && canPressAgain)
	{
	vButton = true;
	word.push("v");
	canPressAgain = false;
	}	
else if(shiftKey == false && e.keyCode == 87 && canPressAgain)
	{
	wButton = true;
	word.push("w");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 88 && canPressAgain)
	{
	xButton = true;
	word.push("x");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 89 && canPressAgain)
	{
	yButton = true;
	word.push("y");
	canPressAgain = false;
	}
	else if(shiftKey == false && e.keyCode == 90 && canPressAgain)
	{
	zButton = true;
	word.push("z");
	canPressAgain = false;
	}
	
	else if(shiftKey == true && e.keyCode == 65 && canPressAgain)
	{
	AButton = true;
	word.push("A");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 66 && canPressAgain)
	{
	BButton = true;
	word.push("B");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 67 && canPressAgain)
	{
	CButton = true;
	word.push("C");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 68 && canPressAgain)
	{
	DButton = true;
	word.push("D");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 69 && canPressAgain)
	{
	EButton = true;
	word.push("E");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 70 && canPressAgain)
	{
	FButton = true;
	word.push("F");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 71 && canPressAgain)
	{
	GButton = true;
	word.push("G");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 72 && canPressAgain)
	{
	HButton = true;
	word.push("H");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 73 && canPressAgain)
	{
	IButton = true;
	word.push("I");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 74 && canPressAgain)
	{
	JButton = true;
	word.push("J");
	canPressAgain = false;
	}
else if(shiftKey == true && e.keyCode == 75 && canPressAgain)
	{
	KButton = true;
	word.push("K");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 76 && canPressAgain)
	{
	LButton = true;
	word.push("L");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 77 && canPressAgain)
	{
	MButton = true;
	word.push("M");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 78 && canPressAgain)
	{
	NButton = true;
	word.push("N");
	canPressAgain = false;
	}	
else if(shiftKey == true && e.keyCode == 79 && canPressAgain)
	{
	OButton = true;
	word.push("O");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 80 && canPressAgain)
	{
	PButton = true;
	word.push("P");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 81 && canPressAgain)
	{
	QButton = true;
	word.push("Q");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 82 && canPressAgain)
	{
	RButton = true;
	word.push("R");
	canPressAgain = false;
	}	
else if(shiftKey == true && e.keyCode == 83 && canPressAgain)
	{
	SButton = true;
	word.push("S");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 84 && canPressAgain)
	{
	TButton = true;
	word.push("T");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 85 && canPressAgain)
	{
	UButton = true;
	word.push("U");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 86 && canPressAgain)
	{
	VButton = true;
	word.push("V");
	canPressAgain = false;
	}	
else if(shiftKey == true && e.keyCode == 87 && canPressAgain)
	{
	WButton = true;
	word.push("W");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 88 && canPressAgain)
	{
	XButton = true;
	word.push("X");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 89 && canPressAgain)
	{
	YButton = true;
	word.push("Y");
	canPressAgain = false;
	}
	else if(shiftKey == true && e.keyCode == 90 && canPressAgain)
	{
	ZButton = true;
	word.push("Z");
	canPressAgain = false;
	}
	
	else if(e.keyCode == 32 && canPressAgain)
	{
		spaceBar = true;
		word.push(" ");
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
	if(e.keyCode == 16)
	{
		shiftKey = false;
	}
	if(e.keycode == 48)
	{
		button0 = false;
		canPressAgain = false;
	}
	if(e.keycode == 49)
	{
		button1 = false;
		canPressAgain = false;
	}
	if(e.keycode == 50)
	{
		button2 = false;
		canPressAgain = false;
	}
	if(e.keycode == 51)
	{
		button3 = false;
		canPressAgain = false;
	}
	if(e.keycode == 52)
	{
		button4 = false;
		canPressAgain = false;
	}
	if(e.keycode == 53)
	{
		button5 = false;
		canPressAgain = false;
	}
	if(e.keycode == 54)
	{
		button6 = false;
		canPressAgain = false;
	}
	if(e.keycode == 55)
	{
		button7 = false;
		canPressAgain = false;
	}
	if(e.keycode == 56)
	{
		button8 = false;
		canPressAgain = false;
	}
	if(e.keycode == 57)
	{
		button9 = false;
		canPressAgain = false;
	}
	
	
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
	
	if(e.keyCode == 65 && e.keyCode == 16)
	{
	AButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 66 && e.keyCode == 16)
	{
	BButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 67 && e.keyCode == 16)
	{
	CButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 68 && e.keyCode == 16)
	{
	DButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 69 && e.keyCode == 16)
	{
	EButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 70 && e.keyCode == 16)
	{
	FButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 71 && e.keyCode == 16)
	{
	GButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 72 && e.keyCode == 16)
	{
	HButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 73 && e.keyCode == 16)
	{
	IButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 74 && e.keyCode == 16)
	{
	JButton = false;
	canPressAgain = true;
	}
else if(e.keyCode == 75 && e.keyCode == 16)
	{
	KButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 76 && e.keyCode == 16)
	{
	LButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 77 && e.keyCode == 16)
	{
	MButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 78 && e.keyCode == 16)
	{
	NButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 79 && e.keyCode == 16)
	{
	OButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 80 && e.keyCode == 16)
	{
	PButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 81 && e.keyCode == 16)
	{
	QButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 82 && e.keyCode == 16)
	{
	RButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 83 && e.keyCode == 16)
	{
	SButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 84 && e.keyCode == 16)
	{
	TButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 85 && e.keyCode == 16)
	{
	UButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 86 && e.keyCode == 16)
	{
	VButton = false;
	canPressAgain = true;
	}	
else if(e.keyCode == 87 && e.keyCode == 16)
	{
	WButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 88 && e.keyCode == 16)
	{
	XButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 89 && e.keyCode == 16)
	{
	YButton = false;
	canPressAgain = true;
	}
	else if(e.keyCode == 90 && e.keyCode == 16)
	{
	ZButton = false;
	canPressAgain = true;
	}
	
	else if(e.keyCode == 32)
	{
		spaceBar = false;
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