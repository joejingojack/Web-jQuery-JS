window.onload = aDate();
window.onload = aTime();
window.onload = genderCheck();

function aDate() {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Set your output to a variable
    var output = weekday[d.getDay()] + " " + d.getDate() + ". " + monthname[d.getMonth()] + " " + d.getFullYear();

    // Target the ID of the span and update the HTML
    document.getElementById('spanDate').innerHTML = output;
};

function aTime(){
  var e = new Date();
  var output = e.getHours() + "." + e.getMinutes() + "." + e.getSeconds();
document.getElementById('spanTime').innerHTML = output;
} 
  
function ageFunction()
{
var age,voteable;
age=document.getElementById("age").value;
voteable=(age<18)?"Too young":"Old enough";
document.getElementById("btnp").innerHTML=voteable;
}

function validateTextForm()
{
var x=document.forms["textForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
}

function validateMailForm()
{
var z=document.forms["mailForm"]["email"].value;
var atpos=z.indexOf("@");
var dotpos=z.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}

var check = document.getElementById("male").defaultChecked;

function genderCheck(){
    var checkMale = document.getElementById("male"),
        checkFemale = document.getElementById("female"),
        iban = document.getElementById("spanIban"),
        bust = document.getElementById("spanBust");
    
    iban.style.visibility = (checkMale.checked ? "visible" : "hidden");
    bust.style.visibility = (checkFemale.checked ? "visible" : "hidden");
}

function ibanCheck(){
  try{ 
    var x=document.getElementById("iban").value;  if(x=="")    throw "enter your iban";  
    if(x.length<22)     throw "invalid iban";}
  
  catch(err){
    var y=document.getElementById("mess");
    y.innerHTML="Error: " + err + ".";  }
}
function ibanAlert(){this.confirm("Please note: Only bulgarian IBANs are allowed!");}

function bustCheck(){
  try{ 
    var x=document.getElementById("bust").value; 
    if(x=="") return false;
    if(isNaN(x)) throw "not a number";
    if(x>200)     throw "bust is too large";
    if(x<50)      throw "bust is too tiny"; }
  
  catch(err){
    var y=document.getElementById("mess2");
    y.innerHTML="Error: " + err + ".";  }
}

function heightCheck(){
  try{ 
    var x=document.getElementById("height").value;  if(x=="")    throw "enter your height";  
    if(isNaN(x)) throw "not a number";
    if(x>250)     throw "height is too high";
    if(x<80)      throw "height is too low"; }
  
  catch(err){
    var y=document.getElementById("mess3");
    y.innerHTML="Error: " + err + ".";  }
}

function processValidate(e){ //e - the event handler, it is autoadded to nearly each event in js
    e.preventDefault(); //Prevent the formaction attribute load since there are errors
    e.stopPropagation();
    ibanCheck();
    bustCheck();
    heightCheck();
    validateTextForm();
    validateMailForm();
    ageFunction();
}