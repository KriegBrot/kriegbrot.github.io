var number = 0;
var itemID = 0;
var itemName = "List Item";

function NameChange() {
	itemName = document.getElementById("dtext").value;
}

function CreateOL() {
	document.getElementById("newlist").innerHTML += "<ol id=\"col"+number+"\"><input type=\"submit\" value=\"Add\" onclick=\"AddItem("+number+")\"/></ol>";
	document.getElementById("plainlist").innerHTML += "<ol id=\"pol"+number+"\"></ol>";
	document.getElementById("script").innerHTML += "<span id=\"sol"+number+"\">&lt;ol&gt;<br/></span>&lt;/ol&gt;<br/>";
	number++;
}

function CreateUL() {
	document.getElementById("newlist").innerHTML += "<ul id=\"cul"+number+"\"><input type=\"submit\" value=\"Add\" onclick=\"AddULItem("+number+")\"/></ul>";
	document.getElementById("plainlist").innerHTML += "<ul id=\"pul"+number+"\"></ul>";
	document.getElementById("script").innerHTML += "<span id=\"sul"+number+"\">&lt;ul&gt;<br/></span>&lt;/ul&gt;<br/>";
	number++;
}

function AddItem(x) {
	document.getElementById("col"+x).innerHTML += "<li id=\"cli"+itemID+"\">"+itemName+" "+"<input type=\"submit\" value=\"Create OL\" onclick=\"CreateNOL("+itemID+")\"/><input type=\"submit\" value=\"Create UL\" onclick=\"CreateNUL("+itemID+")\"/></li>";
	document.getElementById("pol"+x).innerHTML += "<li id=\"pli"+itemID+"\">"+itemName+"</li>";
	document.getElementById("sol"+x).innerHTML += "<span id=\"sli"+itemID+"\">&lt;li&gt;"+itemName+"</span>&lt;/li&gt;<br/>";
	itemID++;
}

function AddULItem(z) {
	document.getElementById("cul"+z).innerHTML += "<li id=\"cli"+itemID+"\">"+itemName+" "+"<input type=\"submit\" value=\"Create OL\" onclick=\"CreateNOL("+itemID+")\"/><input type=\"submit\" value=\"Create UL\" onclick=\"CreateNUL("+itemID+")\"/></li>";
	document.getElementById("pul"+z).innerHTML += "<li id=\"pli"+itemID+"\">"+itemName+"</li>";
	document.getElementById("sul"+z).innerHTML += "<span id=\"sli"+itemID+"\">&lt;li&gt;"+itemName+"</span>&lt;/li&gt;<br/>";
	itemID++;
}

function CreateNOL(y) {
	document.getElementById("cli"+y).innerHTML += "<ol id=\"col"+number+"\"><input type=\"submit\" value=\"Add\" onclick=\"AddItem("+number+")\"/></ol>";
	document.getElementById("pli"+y).innerHTML += "<ol id=\"pol"+number+"\"></ol>";
	document.getElementById("sli"+y).innerHTML += "<span id=\"sol"+number+"\">&lt;ol&gt;<br/></span>&lt;/ol&gt;<br/>";
	number++;
}

function CreateNUL(w) {
	document.getElementById("cli"+w).innerHTML += "<ul id=\"cul"+number+"\"><input type=\"submit\" value=\"Add\" onclick=\"AddULItem("+number+")\"/></ul>";
	document.getElementById("pli"+w).innerHTML += "<ul id=\"pul"+number+"\"></ul>";
	document.getElementById("sli"+w).innerHTML += "<span id=\"sul"+number+"\">&lt;ul&gt;<br/></span>&lt;/ul&gt;<br/>";
	number++;
}

function CopyText() {
	var codeToCopy = document.getElementById("script").innerText;
	navigator.clipboard.writeText(codeToCopy);
}