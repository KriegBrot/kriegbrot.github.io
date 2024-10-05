var panels = document.getElementsByClassName("tinput");
const aminoOut = document.getElementById("amino");
var activePanel;
var kdnaString = "";
var mdnaString = "";
var mrnaString = "";
var aminoString = "";
var stringLength;

// 0 - A
// 1 - C
// 2 - U
// 3 - G
const codon = [
	[
		["lizyna", "asparagina", "asparagina", "lizyna"],
		["treonina", "treonina", "treonina", "treonina"],
		["izoleucyna", "izoleucyna", "izoleucyna", "metionina"],
		["arginina", "seryna", "seryna", "arginina"]
	],
	[
		["glutamina", "histydyna", "histydyna", "glutamina"],
		["prolina", "prolina", "prolina", "prolina"],
		["leucyna", "leucyna", "leucyna", "leucyna"],
		["arginina", "arginina", "arginina", "arginina"]
	],
	[
		["STOP", "tyrozyna", "tyrozyna", "STOP"],
		["seryna", "seryna", "seryna", "seryna"],
		["leucyna", "fenyloalanina", "fenyloalanina", "leucyna"],
		["STOP", "cysteina", "cysteina", "tryptofan"]
	],
	[
		["kwas glutaminowy", "kwas asparaginowy", "kwas asparaginowy", "kwas glutaminowy"],
		["alanina", "alanina", "alanina", "alanina"],
		["walina", "walina", "walina", "walina"],
		["glicyna", "glicyna", "glicyna", "glicyna"]
	]
];

setInterval(function() { 
	if (activePanel != null) {
		if (panels[activePanel].value=="") {
			ClearAll();
		}
	}
	else {
		ClearAll();
	}
}, 10);

function Disable(active) {
	activePanel = active;
	var q = panels.length;
	for (let i = 0; i < q; i++) {
		if (i!=active) {
			panels[i].setAttribute("disabled", "true");
		}
	}
}

function DisableAll() {
	var q = panels.length;
	for (let i = 0; i < q; i++) {
		panels[i].setAttribute("disabled", "true");
	}
}

function ClearAll() {
	var q = panels.length;
	for (let i = 0; i < q; i++) {
		panels[i].removeAttribute("disabled")
		panels[i].value = "";
		panels[i].classList.remove("showanim");
	}
	aminoOut.innerHTML = "";
	aminoOut.classList.remove("showanim");
	mdnaString = "";
	mrnaString = "";
	kdnaString = "";
	aminoString = "";
}

function Generate() {
	mdnaString = "";
	mrnaString = "";
	kdnaString = "";
	aminoString = "";
	DisableAll();
	if (activePanel == 0) {
		stringLength = panels[0].value.length;
		for (let x = 0; x < stringLength; x++) {
			if (panels[0].value.charAt(x)=="a" || panels[0].value.charAt(x)=="A") {
				mdnaString += "T";
				panels[1].value = mdnaString;
			}
			else if (panels[0].value.charAt(x)=="t" || panels[0].value.charAt(x)=="T") {
				mdnaString += "A";
				panels[1].value = mdnaString;
			}
			else if (panels[0].value.charAt(x)=="c" || panels[0].value.charAt(x)=="C") {
				mdnaString += "G";
				panels[1].value = mdnaString;
			}
			else if (panels[0].value.charAt(x)=="g" || panels[0].value.charAt(x)=="G") {
				mdnaString += "c";
				panels[1].value = mdnaString;
			}
		}
		GenerateMRNA();
	}
	if (activePanel == 1) {
		stringLength = panels[1].value.length;
		let stage;
		for (let x = 0; x < stringLength; x++) {
			stage = x;
			if (panels[1].value.charAt(x)=="a" || panels[1].value.charAt(x)=="A") {
				kdnaString += "T";
				panels[0].value = kdnaString;
			}
			else if (panels[1].value.charAt(x)=="t" || panels[1].value.charAt(x)=="T") {
				kdnaString += "A";
				panels[0].value = kdnaString;
			}
			else if (panels[1].value.charAt(x)=="c" || panels[1].value.charAt(x)=="C") {
				kdnaString += "G";
				panels[0].value = kdnaString;
			}
			else if (panels[1].value.charAt(x)=="g" || panels[1].value.charAt(x)=="G") {
				kdnaString += "c";
				panels[0].value = kdnaString;
			}
		}
		if (stage==(stringLength-1)) {
			GenerateMRNA();
		}
	}
	if (activePanel == 2) {
		stringLength = panels[2].value.length;
		for (let x = 0; x < stringLength; x++) {
			if (panels[2].value.charAt(x)=="a" || panels[2].value.charAt(x)=="A") {
				mdnaString += "T";
				panels[1].value = mdnaString;
			}
			else if (panels[2].value.charAt(x)=="u" || panels[2].value.charAt(x)=="U") {
				mdnaString += "A";
				panels[1].value = mdnaString;
			}
			else if (panels[2].value.charAt(x)=="c" || panels[2].value.charAt(x)=="C") {
				mdnaString += "G";
				panels[1].value = mdnaString;
			}
			else if (panels[2].value.charAt(x)=="g" || panels[2].value.charAt(x)=="G") {
				mdnaString += "c";
				panels[1].value = mdnaString;
			}
		}
		for (let y = 0; y < stringLength; y++) {
			if (panels[2].value.charAt(y)=="u" || panels[2].value.charAt(y)=="U") {
				kdnaString += "T";
				panels[0].value = kdnaString;
			}
			else {
				kdnaString += panels[2].value.charAt(y);
				panels[0].value = kdnaString;
			}
		}
		GenerateAmino()
		FadeAnim();
	}
}

function GenerateMRNA() {
	for (let y = 0; y < stringLength; y++) {
		if (panels[0].value.charAt(y)=="t" || panels[0].value.charAt(y)=="T") {
			mrnaString += "U";
			panels[2].value = mrnaString;
		}
		else {
			mrnaString += panels[0].value.charAt(y);
			panels[2].value = mrnaString;
		}
	}
	GenerateAmino();
	FadeAnim();

	if (activePanel == null) {
		ClearAll();
	}

	else if (panels[activePanel].value=="") {
		ClearAll();
	}
}

function FadeAnim() {
	var q = panels.length;
	for (let i = 0; i < q; i++) {
		if (i!=activePanel) {
			panels[i].classList.add("showanim");
		}
	}
}

function GenerateAmino() {
	aminoOut.classList.add("showanim");
	if (stringLength > 2)
	{
		for (let i = 0; i < stringLength; i=i+3) {
			let x = panels[2].value.charAt(i);
			let y = panels[2].value.charAt(i+1);
			let z = panels[2].value.charAt(i+2);
			switch (x) {
				case "a":
					x=0;
					break;
				case "A":
					x=0;
					break;
				case "c":
					x=1;
					break;
				case "C":
					x=1;
					break;
				case "u":
					x=2;
					break;
				case "U":
					x=2;
					break;
				case "g":
					x=3;
					break;
				case "G":
					x=3;
					break;
			}
			switch (y) {
				case "a":
					y=0;
					break;
				case "A":
					y=0;
					break;
				case "c":
					y=1;
					break;
				case "C":
					y=1;
					break;
				case "u":
					y=2;
					break;
				case "U":
					y=2;
					break;
				case "g":
					y=3;
					break;
				case "G":
					y=3;
					break;
				default:
					y=4;
					break;
			}
			switch (z) {
				case "a":
					z=0;
					break;
				case "A":
					z=0;
					break;
				case "c":
					z=1;
					break;
				case "C":
					z=1;
					break;
				case "u":
					z=2;
					break;
				case "U":
					z=2;
					break;
				case "g":
					z=3;
					break;
				case "G":
					z=3;
					break;
				default:
					z=4;
					break;
			}
			if (y != 4 && z !=4) {
				aminoString += codon[x][y][z].toString();
				if (i+3 < stringLength)
				{
					aminoString += " - ";
				}
			}
			else {
				aminoString += "niepełny kodon!"
			}
			aminoOut.innerHTML = aminoString;
		}
	}
	else {
		aminoString += "niepełny kodon!"
		aminoOut.innerHTML = aminoString;
	}
}