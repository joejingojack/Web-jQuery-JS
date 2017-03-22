 /*Task puzzle game*/
 
$(document).ready(function(){
$('#game').hide();
$('#btn-game1').click(function(){
  $('#table1').slideToggle();
  $('#game').hide().show();
  });
$('#btn-game2').click(function(){
  $('#game').toggle(400);
  $('#table1').hide().show();
  });
});

$(function(){
    var nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];        
    nums.sort(function(){
       return (Math.round(Math.random())-0.5);
    });
    var $cells=$('#table1 td').empty();

    $.each(nums, function(i,num){         
           $cells.eq(i).html( num < 16 ? cellHtml( num) :'' ) ;
    });
});

function cellHtml( num){
    var html='<div id="div_content'+num+'" draggable="true" ondragstart="drag(event)">'+
                '<p id="p1">'+num+'</p>'+
            '</div>';    
    return html;    
}

function allowDrop(ev)
{
ev.preventDefault();
}
function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
var divdrag = ev.target;
var tableContent = ev.target.nodeName;
if(tableContent=='TD'){
	divdrag.appendChild(document.getElementById(data));
}else
{
	return false;	
}}


 /*Advanced game of 15*/
var boardRef =
    [ ["box0","box1","box2","box3"],
      ["box4","box5","box6","box7"],
      ["box8","box9","box10","box11"],
      ["box12","box13","box14","box15"] ];

window.buildBoard = function() {
  var count = 1;
  for (i = 0; i < 15; i++) {
    document.getElementById("box" + i).innerHTML = count;
    count ++;
  }
}

window.getAdjacent = function(a,b) {
  var arr = [];
  var output;
  
  if (a === 0) {
    arr.push(boardRef[a+1][b]);
  } else if (a === 3) {
    arr.push(boardRef[a-1][b]);
  } else {
    arr.push(boardRef[a+1][b]);
    arr.push(boardRef[a-1][b]);
  }
  
  if (b === 0) {
    arr.push(boardRef[a][b+1]);
  } else if (b === 3) {
    arr.push(boardRef[a][b-1]);
  } else {
    arr.push(boardRef[a][b+1]);
    arr.push(boardRef[a][b-1]);
  }
  return arr;
}

window.randomAdjacent = function(a,b) {
  var adjacent = getAdjacent(a,b);
  var adjacentLength = adjacent.length;
  var rand = Math.floor(Math.random()*adjacentLength);
  
  return adjacent[rand];
}

window.scramble = function() {
  var rand;
  for (i = 0; i < boardRef.length; i++) {
    for (j = 0; j < boardRef[i].length; j++) {
      if (document.getElementById(boardRef[i][j]).innerHTML === "") {
        rand = randomAdjacent(i,j);
        document.getElementById(boardRef[i][j]).innerHTML = document.getElementById(rand).innerHTML;
        document.getElementById(rand).innerHTML = "";
        break;
      }
    }
  }
}

window.checkBoard = function(a,b) {
  var arr = getAdjacent(a,b);
  for (i = 0; i < arr.length; i++) {
      if (document.getElementById(arr[i]).innerHTML === "") {
        document.getElementById(arr[i]).innerHTML = document.getElementById(boardRef[a][b]).innerHTML;
        document.getElementById(boardRef[a][b]).innerHTML = "";
      } 
    }
  check();
}

window.check = function() {
  var n = 1;
  document.getElementById("debugg").innerHTML = "";
  for (i = 0; i < 15; i++) {
    document.getElementById("debugg").innerHTML += "<br>" + document.getElementById("box" + i).innerHTML + ", " + String(n) + " ";
    if (document.getElementById("box" + i).innerHTML !== String(n)) {
      document.getElementById("debugg").innerHTML += "bad";
      return false;
    }
    n++;
  }
  document.getElementById("debugg").innerHTML = "You Win!";
}  

var count = 1;
window.scrambleAll = function() {
  setTimeout(function() { 
    scramble();
    document.getElementById("debugg").innerHTML = "Scrambled " + count + " times!" + "<br>" + "Please wait a few seconds";
    count++;
    if (count <= 300) {
      scrambleAll();
    } else {
      document.getElementById("scramble").className = "hide";
    }
  }, 25);
}

window.onload = buildBoard();