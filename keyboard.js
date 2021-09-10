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



var cClass = [];
var cRace = [];
var cName = [];
var cLevel = [];
var cBackground = [];
var cMaxHp = [];
var cCurrentHp = [];
var cAlignment = [];
var pName = [];
var cXP = [];


function keyDownHandler(e){
	if(e.keyCode == 16)
	{
		shiftKey = true;
	}
	if(e.keyCode == 48)
	{
		button0 = true;
		word.push("0");
	}
	else if(e.keyCode == 49)
	{
		button1 = true;
		word.push("1");
	}
	else if(e.keyCode == 50)
	{
		button2 = true;
		word.push("2");
	}
	else if(e.keyCode == 51)
	{
		button3 = true;
		word.push("3");
	}
	else if(e.keyCode == 52)
	{
		button4 = true;
		word.push("4");
	}
	else if(e.keyCode == 53)
	{
		button5 = true;
		word.push("5");
	}
	else if(e.keyCode == 54)
	{
		button6 = true;
		word.push("6");
	}
	else if(e.keyCode == 55)
	{
		button7 = true;
		word.push("7");
	}
	else if(e.keyCode == 56)
	{
		button8 = true;
		word.push("8");
	}
	else if(e.keyCode == 57)
	{
		button9 = true;
		word.push("9");
	}
	
	
	
	else if(shiftKey == false && e.keyCode == 65)
	{
		aButton = true;
		word.push("a");
	}
	else if(shiftKey == false && e.keyCode == 66)
	{
		bButton = true;
		word.push("b");
	}
	else if(shiftKey == false && e.keyCode == 67)
	{
		cButton = true;
		word.push("c");
	}
	else if(shiftKey == false && e.keyCode == 68)
	{
		dButton = true;
		word.push("d");
	}
	else if(shiftKey == false && e.keyCode == 69)
	{
		eButton = true;
		word.push("e");
	}
	else if(shiftKey == false && e.keyCode == 70)
	{
		fButton = true;
		word.push("f");
	}
	else if(shiftKey == false && e.keyCode == 71)
	{
	gButton = true;
	word.push("g");
	
	}
	else if(shiftKey == false && e.keyCode == 72)
	{
	hButton = true;
	word.push("h");
	
	}
	else if(shiftKey == false && e.keyCode == 73)
	{
	iButton = true;
	word.push("i");
	
	}
	else if(shiftKey == false && e.keyCode == 74)
	{
	jButton = true;
	word.push("j");
	
	}
else if(shiftKey == false && e.keyCode == 75)
	{
	kButton = true;
	word.push("k");
	
	}
	else if(shiftKey == false && e.keyCode == 76)
	{
	lButton = true;
	word.push("l");
	
	}
	else if(shiftKey == false && e.keyCode == 77)
	{
	mButton = true;
	word.push("m");
	
	}
	else if(shiftKey == false && e.keyCode == 78)
	{
	nButton = true;
	word.push("n");
	
	}	
else if(shiftKey == false && e.keyCode == 79)
	{
	oButton = true;
	word.push("o");
	
	}
	else if(shiftKey == false && e.keyCode == 80)
	{
	pButton = true;
	word.push("p");
	
	}
	else if(shiftKey == false && e.keyCode == 81)
	{
	qButton = true;
	word.push("q");
	
	}
	else if(shiftKey == false && e.keyCode == 82)
	{
	rButton = true;
	word.push("r");
	
	}	
else if(shiftKey == false && e.keyCode == 83)
	{
	sButton = true;
	word.push("s");
	
	}
	else if(shiftKey == false && e.keyCode == 84)
	{
	tButton = true;
	word.push("t");
	
	}
	else if(shiftKey == false && e.keyCode == 85)
	{
	uButton = true;
	word.push("u");
	
	}
	else if(shiftKey == false && e.keyCode == 86)
	{
	vButton = true;
	word.push("v");
	
	}	
else if(shiftKey == false && e.keyCode == 87)
	{
	wButton = true;
	word.push("w");
	
	}
	else if(shiftKey == false && e.keyCode == 88)
	{
	xButton = true;
	word.push("x");
	
	}
	else if(shiftKey == false && e.keyCode == 89)
	{
	yButton = true;
	word.push("y");
	
	}
	else if(shiftKey == false && e.keyCode == 90)
	{
	zButton = true;
	word.push("z");
	
	}
	
	else if(shiftKey == true && e.keyCode == 65)
	{
	AButton = true;
	word.push("A");
	
	}
	else if(shiftKey == true && e.keyCode == 66)
	{
	BButton = true;
	word.push("B");
	
	}
	else if(shiftKey == true && e.keyCode == 67)
	{
	CButton = true;
	word.push("C");
	
	}
	else if(shiftKey == true && e.keyCode == 68)
	{
	DButton = true;
	word.push("D");
	
	}
	else if(shiftKey == true && e.keyCode == 69)
	{
	EButton = true;
	word.push("E");
	
	}
	else if(shiftKey == true && e.keyCode == 70)
	{
	FButton = true;
	word.push("F");
	
	}
	else if(shiftKey == true && e.keyCode == 71)
	{
	GButton = true;
	word.push("G");
	
	}
	else if(shiftKey == true && e.keyCode == 72)
	{
	HButton = true;
	word.push("H");
	
	}
	else if(shiftKey == true && e.keyCode == 73)
	{
	IButton = true;
	word.push("I");
	
	}
	else if(shiftKey == true && e.keyCode == 74)
	{
	JButton = true;
	word.push("J");
	
	}
else if(shiftKey == true && e.keyCode == 75)
	{
	KButton = true;
	word.push("K");
	
	}
	else if(shiftKey == true && e.keyCode == 76)
	{
	LButton = true;
	word.push("L");
	
	}
	else if(shiftKey == true && e.keyCode == 77)
	{
	MButton = true;
	word.push("M");
	
	}
	else if(shiftKey == true && e.keyCode == 78)
	{
	NButton = true;
	word.push("N");
	
	}	
else if(shiftKey == true && e.keyCode == 79)
	{
	OButton = true;
	word.push("O");
	
	}
	else if(shiftKey == true && e.keyCode == 80)
	{
	PButton = true;
	word.push("P");
	
	}
	else if(shiftKey == true && e.keyCode == 81)
	{
	QButton = true;
	word.push("Q");
	
	}
	else if(shiftKey == true && e.keyCode == 82)
	{
	RButton = true;
	word.push("R");
	
	}	
else if(shiftKey == true && e.keyCode == 83)
	{
	SButton = true;
	word.push("S");
	
	}
	else if(shiftKey == true && e.keyCode == 84)
	{
	TButton = true;
	word.push("T");
	
	}
	else if(shiftKey == true && e.keyCode == 85)
	{
	UButton = true;
	word.push("U");
	
	}
	else if(shiftKey == true && e.keyCode == 86)
	{
	VButton = true;
	word.push("V");
	
	}	
else if(shiftKey == true && e.keyCode == 87)
	{
	WButton = true;
	word.push("W");
	
	}
	else if(shiftKey == true && e.keyCode == 88)
	{
	XButton = true;
	word.push("X");
	
	}
	else if(shiftKey == true && e.keyCode == 89)
	{
	YButton = true;
	word.push("Y");
	
	}
	else if(shiftKey == true && e.keyCode == 90)
	{
	ZButton = true;
	word.push("Z");
	
	}
	
	else if(e.keyCode == 32)
	{
		spaceBar = true;
		word.push(" ");
		
	}
	else if(e.keyCode == 13)
	{
	///enter
	enterButton = true;
	
	}
	else if(e.keyCode == 8)
	{
	///backspace
	backButton = true;
	word.pop();
	
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
		
	}
	if(e.keycode == 49)
	{
		button1 = false;
		
	}
	if(e.keycode == 50)
	{
		button2 = false;
		
	}
	if(e.keycode == 51)
	{
		button3 = false;
		
	}
	if(e.keycode == 52)
	{
		button4 = false;
		
	}
	if(e.keycode == 53)
	{
		button5 = false;
		
	}
	if(e.keycode == 54)
	{
		button6 = false;
		
	}
	if(e.keycode == 55)
	{
		button7 = false;
		
	}
	if(e.keycode == 56)
	{
		button8 = false;
		
	}
	if(e.keycode == 57)
	{
		button9 = false;
		
	}
	
	
	if(e.keyCode == 65)
	{
	aButton = false;
	
	}
	else if(e.keyCode == 66)
	{
	bButton = false;
	
	}
	else if(e.keyCode == 67)
	{
	cButton = false;
	
	}
	else if(e.keyCode == 68)
	{
	dButton = false;
	
	}
	else if(e.keyCode == 69)
	{
	eButton = false;
	
	}
	else if(e.keyCode == 70)
	{
	fButton = false;
	
	}
	else if(e.keyCode == 71)
	{
	gButton = false;
	
	}
	else if(e.keyCode == 72)
	{
	hButton = false;
	
	}
	else if(e.keyCode == 73)
	{
	iButton = false;
	
	}
	else if(e.keyCode == 74)
	{
	jButton = false;
	
	}
else if(e.keyCode == 75)
	{
	kButton = false;
	
	}
	else if(e.keyCode == 76)
	{
	lButton = false;
	
	}
	else if(e.keyCode == 77)
	{
	mButton = false;
	
	}
	else if(e.keyCode == 78)
	{
	nButton = false;
	
	}	
else if(e.keyCode == 79)
	{
	oButton = false;
	
	}
	else if(e.keyCode == 80)
	{
	pButton = false;
	
	}
	else if(e.keyCode == 81)
	{
	qButton = false;
	
	}
	else if(e.keyCode == 82)
	{
	rButton = false;
	
	}	
else if(e.keyCode == 83)
	{
	sButton = false;
	
	}
	else if(e.keyCode == 84)
	{
	tButton = false;
	
	}
	else if(e.keyCode == 85)
	{
	uButton = false;
	
	}
	else if(e.keyCode == 86)
	{
	vButton = false;
	
	}	
else if(e.keyCode == 87)
	{
	wButton = false;
	
	}
	else if(e.keyCode == 88)
	{
	xButton = false;
	
	}
	else if(e.keyCode == 89)
	{
	yButton = false;
	
	}
	else if(e.keyCode == 90)
	{
	zButton = false;
	
	}
	
	if(e.keyCode == 65 && e.keyCode == 16)
	{
	AButton = false;
	
	}
	else if(e.keyCode == 66 && e.keyCode == 16)
	{
	BButton = false;
	
	}
	else if(e.keyCode == 67 && e.keyCode == 16)
	{
	CButton = false;
	
	}
	else if(e.keyCode == 68 && e.keyCode == 16)
	{
	DButton = false;
	
	}
	else if(e.keyCode == 69 && e.keyCode == 16)
	{
	EButton = false;
	
	}
	else if(e.keyCode == 70 && e.keyCode == 16)
	{
	FButton = false;
	
	}
	else if(e.keyCode == 71 && e.keyCode == 16)
	{
	GButton = false;
	
	}
	else if(e.keyCode == 72 && e.keyCode == 16)
	{
	HButton = false;
	
	}
	else if(e.keyCode == 73 && e.keyCode == 16)
	{
	IButton = false;
	
	}
	else if(e.keyCode == 74 && e.keyCode == 16)
	{
	JButton = false;
	
	}
else if(e.keyCode == 75 && e.keyCode == 16)
	{
	KButton = false;
	
	}
	else if(e.keyCode == 76 && e.keyCode == 16)
	{
	LButton = false;
	
	}
	else if(e.keyCode == 77 && e.keyCode == 16)
	{
	MButton = false;
	
	}
	else if(e.keyCode == 78 && e.keyCode == 16)
	{
	NButton = false;
	
	}	
else if(e.keyCode == 79 && e.keyCode == 16)
	{
	OButton = false;
	
	}
	else if(e.keyCode == 80 && e.keyCode == 16)
	{
	PButton = false;
	
	}
	else if(e.keyCode == 81 && e.keyCode == 16)
	{
	QButton = false;
	
	}
	else if(e.keyCode == 82 && e.keyCode == 16)
	{
	RButton = false;
	
	}	
else if(e.keyCode == 83 && e.keyCode == 16)
	{
	SButton = false;
	
	}
	else if(e.keyCode == 84 && e.keyCode == 16)
	{
	TButton = false;
	
	}
	else if(e.keyCode == 85 && e.keyCode == 16)
	{
	UButton = false;
	
	}
	else if(e.keyCode == 86 && e.keyCode == 16)
	{
	VButton = false;
	
	}	
else if(e.keyCode == 87 && e.keyCode == 16)
	{
	WButton = false;
	
	}
	else if(e.keyCode == 88 && e.keyCode == 16)
	{
	XButton = false;
	
	}
	else if(e.keyCode == 89 && e.keyCode == 16)
	{
	YButton = false;
	
	}
	else if(e.keyCode == 90 && e.keyCode == 16)
	{
	ZButton = false;
	
	}
	
	else if(e.keyCode == 32)
	{
		spaceBar = false;
		
	}
	else if(e.keyCode == 13)
	{
	///enter
	enterButton = false;
	
	}
	else if(e.keyCode == 8)
	{
	///backspace
	backButton = false;
	
	}
}