
function clear_text() {
	document.forms[0].cyrillic_text.value = "";
	document.forms[0].latin_text.value = "";
}

function jsvucko() {
	// do all procssing in this variable -> results show in another window
	var entered_text;

	entered_text = document.forms[0].latin_text.value;

	entered_text = entered_text.replace(/lj/g,'љ');
	entered_text = entered_text.replace(/Lj/g,'Љ');
	entered_text = entered_text.replace(/LJ/g,'Љ');

	entered_text = entered_text.replace(/nj/g,'њ');
	entered_text = entered_text.replace(/Nj/g,'Њ');
	entered_text = entered_text.replace(/NJ/g,'Њ');

	entered_text = entered_text.replace(/dž/g,'џ');
	entered_text = entered_text.replace(/Dž/g,'Џ');
	entered_text = entered_text.replace(/DŽ/g,'Џ');

	entered_text = entered_text.replace(/a/g,'а');
	entered_text = entered_text.replace(/b/g,'б');
	entered_text = entered_text.replace(/c/g,'ц');
	entered_text = entered_text.replace(/č/g,'ч');
	entered_text = entered_text.replace(/ć/g,'ћ');
	entered_text = entered_text.replace(/d/g,'д');
	entered_text = entered_text.replace(/đ/g,'ђ');
	entered_text = entered_text.replace(/e/g,'е');
	entered_text = entered_text.replace(/f/g,'ф');
	entered_text = entered_text.replace(/g/g,'г');
	entered_text = entered_text.replace(/h/g,'х');
	entered_text = entered_text.replace(/i/g,'и');
	entered_text = entered_text.replace(/j/g,'ј');
	entered_text = entered_text.replace(/k/g,'к');
	entered_text = entered_text.replace(/l/g,'л');
	entered_text = entered_text.replace(/m/g,'м');
	entered_text = entered_text.replace(/n/g,'н');
	entered_text = entered_text.replace(/o/g,'о');
	entered_text = entered_text.replace(/p/g,'п');
	entered_text = entered_text.replace(/r/g,'р');
	entered_text = entered_text.replace(/s/g,'с');
	entered_text = entered_text.replace(/š/g,'ш');
	entered_text = entered_text.replace(/t/g,'т');
	entered_text = entered_text.replace(/u/g,'у');
	entered_text = entered_text.replace(/v/g,'в');
	entered_text = entered_text.replace(/z/g,'з');
	entered_text = entered_text.replace(/ž/g,'ж');

	entered_text = entered_text.replace(/A/g,'А');
	entered_text = entered_text.replace(/B/g,'Б');
	entered_text = entered_text.replace(/C/g,'Ц');
	entered_text = entered_text.replace(/Č/g,'Ч');
	entered_text = entered_text.replace(/Ć/g,'Ћ');
	entered_text = entered_text.replace(/D/g,'Д');
	entered_text = entered_text.replace(/Đ/g,'Ђ');
	entered_text = entered_text.replace(/E/g,'Е');
	entered_text = entered_text.replace(/F/g,'Ф');
	entered_text = entered_text.replace(/G/g,'Г');
	entered_text = entered_text.replace(/H/g,'Х');
	entered_text = entered_text.replace(/I/g,'И');
	entered_text = entered_text.replace(/J/g,'Ј');
	entered_text = entered_text.replace(/K/g,'К');
	entered_text = entered_text.replace(/L/g,'Л');
	entered_text = entered_text.replace(/M/g,'М');
	entered_text = entered_text.replace(/N/g,'Н');
	entered_text = entered_text.replace(/O/g,'О');
	entered_text = entered_text.replace(/P/g,'П');
	entered_text = entered_text.replace(/R/g,'Р');
	entered_text = entered_text.replace(/S/g,'С');
	entered_text = entered_text.replace(/Š/g,'Ш');
	entered_text = entered_text.replace(/T/g,'Т');
	entered_text = entered_text.replace(/U/g,'У');
	entered_text = entered_text.replace(/V/g,'В');
	entered_text = entered_text.replace(/Z/g,'З');
	entered_text = entered_text.replace(/Ž/g,'Ж');

	document.forms[0].cyrillic_text.value = entered_text;
}

function jsvucko_dual() {
	// do all procssing in this variable -> results show in another window
	var entered_text;

	entered_text = document.forms[0].latin_text.value;

	entered_text = entered_text.replace(/lj/g,'љ');
	entered_text = entered_text.replace(/Lj/g,'Љ');
	entered_text = entered_text.replace(/LJ/g,'Љ');

	entered_text = entered_text.replace(/ly/g,'љ');
	entered_text = entered_text.replace(/Ly/g,'Љ');
	entered_text = entered_text.replace(/LY/g,'Љ');

	entered_text = entered_text.replace(/nj/g,'њ');
	entered_text = entered_text.replace(/Nj/g,'Њ');
	entered_text = entered_text.replace(/NJ/g,'Њ');

	entered_text = entered_text.replace(/ny/g,'њ');
	entered_text = entered_text.replace(/Ny/g,'Њ');
	entered_text = entered_text.replace(/NY/g,'Њ');

	entered_text = entered_text.replace(/dx/g,'џ');
	entered_text = entered_text.replace(/dzx/g,'џ');
	entered_text = entered_text.replace(/Dzx/g,'Џ');
	entered_text = entered_text.replace(/DZx/g,'Џ');
	entered_text = entered_text.replace(/DZX/g,'Џ');
	entered_text = entered_text.replace(/Dx/g,'Џ');
	entered_text = entered_text.replace(/DX/g,'Џ');

	entered_text = entered_text.replace(/cx/g,'ч');
	entered_text = entered_text.replace(/Cx/g,'Ч');
	entered_text = entered_text.replace(/CX/g,'Ч');

	entered_text = entered_text.replace(/cy/g,'ћ');
	entered_text = entered_text.replace(/Cy/g,'Ћ');
	entered_text = entered_text.replace(/CY/g,'Ћ');

	entered_text = entered_text.replace(/dy/g,'ђ');
	entered_text = entered_text.replace(/Dy/g,'Ђ');
	entered_text = entered_text.replace(/DY/g,'Ђ');

	entered_text = entered_text.replace(/sx/g,'ш');
	entered_text = entered_text.replace(/Sx/g,'Ш');
	entered_text = entered_text.replace(/SX/g,'Ш');

	entered_text = entered_text.replace(/zx/g,'ж');
	entered_text = entered_text.replace(/Zx/g,'Ж');
	entered_text = entered_text.replace(/ZX/g,'Ж');

	entered_text = entered_text.replace(/a/g,'а');
	entered_text = entered_text.replace(/b/g,'б');
	entered_text = entered_text.replace(/c/g,'ц');
	entered_text = entered_text.replace(/d/g,'д');
	entered_text = entered_text.replace(/e/g,'е');
	entered_text = entered_text.replace(/f/g,'ф');
	entered_text = entered_text.replace(/g/g,'г');
	entered_text = entered_text.replace(/h/g,'х');
	entered_text = entered_text.replace(/i/g,'и');
	entered_text = entered_text.replace(/j/g,'ј');
	entered_text = entered_text.replace(/k/g,'к');
	entered_text = entered_text.replace(/l/g,'л');
	entered_text = entered_text.replace(/m/g,'м');
	entered_text = entered_text.replace(/n/g,'н');
	entered_text = entered_text.replace(/o/g,'о');
	entered_text = entered_text.replace(/p/g,'п');
	entered_text = entered_text.replace(/r/g,'р');
	entered_text = entered_text.replace(/s/g,'с');
	entered_text = entered_text.replace(/t/g,'т');
	entered_text = entered_text.replace(/u/g,'у');
	entered_text = entered_text.replace(/v/g,'в');
	entered_text = entered_text.replace(/z/g,'з');

	entered_text = entered_text.replace(/A/g,'А');
	entered_text = entered_text.replace(/B/g,'Б');
	entered_text = entered_text.replace(/C/g,'Ц');
	entered_text = entered_text.replace(/D/g,'Д');
	entered_text = entered_text.replace(/E/g,'Е');
	entered_text = entered_text.replace(/F/g,'Ф');
	entered_text = entered_text.replace(/G/g,'Г');
	entered_text = entered_text.replace(/H/g,'Х');
	entered_text = entered_text.replace(/I/g,'И');
	entered_text = entered_text.replace(/J/g,'Ј');
	entered_text = entered_text.replace(/K/g,'К');
	entered_text = entered_text.replace(/L/g,'Л');
	entered_text = entered_text.replace(/M/g,'М');
	entered_text = entered_text.replace(/N/g,'Н');
	entered_text = entered_text.replace(/O/g,'О');
	entered_text = entered_text.replace(/P/g,'П');
	entered_text = entered_text.replace(/R/g,'Р');
	entered_text = entered_text.replace(/S/g,'С');
	entered_text = entered_text.replace(/T/g,'Т');
	entered_text = entered_text.replace(/U/g,'У');
	entered_text = entered_text.replace(/V/g,'В');
	entered_text = entered_text.replace(/Z/g,'З');

	document.forms[0].cyrillic_text.value = entered_text;
}

function cyr_to_lat(aText) {
	aText = aText.replace(/љ/g,'lj');
	aText = aText.replace(/Љ/g,'Lj');
                                                       
	aText = aText.replace(/њ/g,'nj');
	aText = aText.replace(/Њ/g,'Nj');
                                                       
	aText = aText.replace(/џ/g,'dž');
	aText = aText.replace(/Џ/g,'Dž');

	aText = aText.replace(/а/g,'a');
	aText = aText.replace(/б/g,'b');
	aText = aText.replace(/ц/g,'c');
	aText = aText.replace(/ч/g,'č');
	aText = aText.replace(/ћ/g,'ć');
	aText = aText.replace(/д/g,'d');
	aText = aText.replace(/ђ/g,'đ');
	aText = aText.replace(/е/g,'e');
	aText = aText.replace(/ф/g,'f');
	aText = aText.replace(/г/g,'g');
	aText = aText.replace(/х/g,'h');
	aText = aText.replace(/и/g,'i');
	aText = aText.replace(/ј/g,'j');
	aText = aText.replace(/к/g,'k');
	aText = aText.replace(/л/g,'l');
	aText = aText.replace(/м/g,'m');
	aText = aText.replace(/н/g,'n');
	aText = aText.replace(/о/g,'o');
	aText = aText.replace(/п/g,'p');
	aText = aText.replace(/р/g,'r');
	aText = aText.replace(/с/g,'s');
	aText = aText.replace(/ш/g,'š');
	aText = aText.replace(/т/g,'t');
	aText = aText.replace(/у/g,'u');
	aText = aText.replace(/в/g,'v');
	aText = aText.replace(/з/g,'z');
	aText = aText.replace(/ж/g,'ž');
                                                      
	aText = aText.replace(/А/g,'A');
	aText = aText.replace(/Б/g,'B');
	aText = aText.replace(/Ц/g,'C');
	aText = aText.replace(/Ч/g,'Č');
	aText = aText.replace(/Ћ/g,'Ć');
	aText = aText.replace(/Д/g,'D');
	aText = aText.replace(/Ђ/g,'Đ');
	aText = aText.replace(/Е/g,'E');
	aText = aText.replace(/Ф/g,'F');
	aText = aText.replace(/Г/g,'G');
	aText = aText.replace(/Х/g,'H');
	aText = aText.replace(/И/g,'I');
	aText = aText.replace(/Ј/g,'J');
	aText = aText.replace(/К/g,'K');
	aText = aText.replace(/Л/g,'L');
	aText = aText.replace(/М/g,'M');
	aText = aText.replace(/Н/g,'N');
	aText = aText.replace(/О/g,'O');
	aText = aText.replace(/П/g,'P');
	aText = aText.replace(/Р/g,'R');
	aText = aText.replace(/С/g,'S');
	aText = aText.replace(/Ш/g,'Š');
	aText = aText.replace(/Т/g,'T');
	aText = aText.replace(/У/g,'U');
	aText = aText.replace(/В/g,'V');
	aText = aText.replace(/З/g,'Z');
	aText = aText.replace(/Ж/g,'Ž');

	return aText;
}

function jscirulat() {
	// do all procssing in this variable -> results show in another window
	document.forms[0].latin_text.value = cyr_to_lat(document.forms[0].cyrillic_text.value);
}


function jscirulat_dual() {
	// do all procssing in this variable -> results show in another window
	var entered_text;

	entered_text = document.forms[0].cyrillic_text.value;

	entered_text = entered_text.replace(/љ/g,'ly');
	entered_text = entered_text.replace(/Љ/g,'Ly');
                                                       
	entered_text = entered_text.replace(/њ/g,'ny');
	entered_text = entered_text.replace(/Њ/g,'Ny');
                                                       
	entered_text = entered_text.replace(/џ/g,'dx');
	entered_text = entered_text.replace(/Џ/g,'Dx');

	entered_text = entered_text.replace(/а/g,'a');
	entered_text = entered_text.replace(/б/g,'b');
	entered_text = entered_text.replace(/ц/g,'c');
	entered_text = entered_text.replace(/ч/g,'cx');
	entered_text = entered_text.replace(/ћ/g,'cy');
	entered_text = entered_text.replace(/д/g,'d');
	entered_text = entered_text.replace(/ђ/g,'dy');
	entered_text = entered_text.replace(/е/g,'e');
	entered_text = entered_text.replace(/ф/g,'f');
	entered_text = entered_text.replace(/г/g,'g');
	entered_text = entered_text.replace(/х/g,'h');
	entered_text = entered_text.replace(/и/g,'i');
	entered_text = entered_text.replace(/ј/g,'j');
	entered_text = entered_text.replace(/к/g,'k');
	entered_text = entered_text.replace(/л/g,'l');
	entered_text = entered_text.replace(/м/g,'m');
	entered_text = entered_text.replace(/н/g,'n');
	entered_text = entered_text.replace(/о/g,'o');
	entered_text = entered_text.replace(/п/g,'p');
	entered_text = entered_text.replace(/р/g,'r');
	entered_text = entered_text.replace(/с/g,'s');
	entered_text = entered_text.replace(/ш/g,'sx');
	entered_text = entered_text.replace(/т/g,'t');
	entered_text = entered_text.replace(/у/g,'u');
	entered_text = entered_text.replace(/в/g,'v');
	entered_text = entered_text.replace(/з/g,'z');
	entered_text = entered_text.replace(/ж/g,'zx');
                                                      
	entered_text = entered_text.replace(/А/g,'A');
	entered_text = entered_text.replace(/Б/g,'B');
	entered_text = entered_text.replace(/Ц/g,'C');
	entered_text = entered_text.replace(/Ч/g,'Cx');
	entered_text = entered_text.replace(/Ћ/g,'Cy');
	entered_text = entered_text.replace(/Д/g,'D');
	entered_text = entered_text.replace(/Ђ/g,'Dy');
	entered_text = entered_text.replace(/Е/g,'E');
	entered_text = entered_text.replace(/Ф/g,'F');
	entered_text = entered_text.replace(/Г/g,'G');
	entered_text = entered_text.replace(/Х/g,'H');
	entered_text = entered_text.replace(/И/g,'I');
	entered_text = entered_text.replace(/Ј/g,'J');
	entered_text = entered_text.replace(/К/g,'K');
	entered_text = entered_text.replace(/Л/g,'L');
	entered_text = entered_text.replace(/М/g,'M');
	entered_text = entered_text.replace(/Н/g,'N');
	entered_text = entered_text.replace(/О/g,'O');
	entered_text = entered_text.replace(/П/g,'P');
	entered_text = entered_text.replace(/Р/g,'R');
	entered_text = entered_text.replace(/С/g,'S');
	entered_text = entered_text.replace(/Ш/g,'Sx');
	entered_text = entered_text.replace(/Т/g,'T');
	entered_text = entered_text.replace(/У/g,'U');
	entered_text = entered_text.replace(/В/g,'V');
	entered_text = entered_text.replace(/З/g,'Z');
	entered_text = entered_text.replace(/Ж/g,'Zx');

	document.forms[0].latin_text.value = entered_text;
}

function getSelectedText(e) { 
	var text = (document.all) ? document.selection.createRange().text : document.getSelection();
	var buffer_text = document.forms[0].cyrillic_text.value;
	var re = new RegExp(text,"g");	// search field
	text = cyr_to_lat(text);	// convert to latin script

	buffer_text = buffer_text.replace(re, text);
	document.forms[0].cyrillic_text.value = buffer_text;
	// document.selection.empty();

	return true;
}

function clearSelectedText(e) {
	document.selection.empty();
	return true;
}

document.onmousedown = clearSelectedText;
document.onmouseup = getSelectedText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
if (!document.all) document.captureEvents(Event.DBLCLICK);