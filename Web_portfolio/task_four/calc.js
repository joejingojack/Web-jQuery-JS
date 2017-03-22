 
	function calc() {
    var addOne = parseInt(document.form.addta1.value);
    var addTwo = parseInt(document.form.addta2.value);
    var subOne = parseInt(document.form.subta1.value);
    var subTwo = parseInt(document.form.subta2.value);
    var mulOne = parseInt(document.form.multa1.value);
    var mulTwo = parseInt(document.form.multa2.value);
    var divOne = parseInt(document.form.divta1.value);
    var divTwo = parseInt(document.form.divta2.value);
    
    var addResult = addOne + addTwo
    var subResult = subOne - subTwo
    var mulResult = mulOne * mulTwo
    var divResult = divOne / divTwo
    document.getElementById('addresult').innerHTML = addResult;
    document.getElementById('subresult').innerHTML = subResult;
    document.getElementById('mulresult').innerHTML = mulResult;
    document.getElementById('divresult').innerHTML = divResult;
    }
	
function mDown() {
    this.children[0].value = "Submitted!";
}

function mUp() {
    this.children[0].value = "Thank you!"
	this.children[0].style.color = "#fff";
}

function mOver() {
    this.children[0].style.backgroundColor = "#cc3333";
}

function mOut() {
    this.children[0].style.backgroundColor = "rgba(229,50,50,0.9)";
	this.children[0].style.color = "#fafafa";
}

function eListeners() {
    var elOne = document.getElementsByClassName('eventlisten1')[0];
    var elTwo = document.getElementsByClassName('eventlisten2')[0];
    elOne.addEventListener('mousedown', mDown);
    elOne.addEventListener('mouseup', mUp);
    elTwo.addEventListener('mouseover', mOver);
    elTwo.addEventListener('mouseout', mOut);
}

window.onload = eListeners;