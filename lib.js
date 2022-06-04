var today = new Date();

document.write("방문 시각 : " + today.toLocaleString() + "<br>");

function nsum() {
	var n = prompt("0보다 큰 정수를 입력하세요", 0);
	n = parseInt(n);

	var i=0, sum=0;
	while(i<=n) {
		sum += i;
		i++;
	}
	alert("0에서 " + n + "까지의 합은 " + sum);
}

function oneton() {
	var n = prompt("1보다 큰 정수를 입력하세요", 1);
	var i=0, sum=0;
	while(true) {
		sum += i;
		if(sum > n)
			break;
		i++
	}
	alert(i + "까지 더하면 " + n + "을 넘음 : " + sum);
}

function createDIV() {
	var obj = document.getElementById("parent");
	var newDIV = document.createElement("div");
	var name = document.getElementById("name");
	var age = document.getElementById("age");
	newDIV.innerHTML = name.value + ", " + age.value;
	newDIV.setAttribute("id", "myDiv");
	newDIV.style.backgroundColor = "yellow";
	newDIV.addEventListener("mouseover", mover);
	newDIV.addEventListener("mouseout", mout);
	newDIV.onclick = function () {
		var p = this.parentElement;
		p.removeChild(this);
	};
	obj.appendChild(newDIV);
}

function mover() {
	this.style.backgroundColor="orchid";
}

function mout() {
	this.style.backgroundColor="white";
}

function load(URL) {
	window.open(URL, "myWin",
		"left=300, top=300, width=800, height=800");
}

var canvas, context;
function init() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");

	context.lineWidth = 2;
	context.strokeStyle = "blue";

	canvas.addEventListener("mousemove", function (e) { move(e) }, false);
	canvas.addEventListener("mousedown", function (e) { down(e) }, false);
	canvas.addEventListener("mouseup", function (e) { up(e) }, false);
	canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}
var startX=0, startY=0;
var drawing = false;

function draw(curX, curY) {
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(curX, curY);
	context.stroke();
}
function down(e) {
	startX = e.offsetX; startY = e.offsetY;
	drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
	if(!drawing) return;
	var curX = e.offsetX, curY = e.offsetY;
	draw(curX, curY);
	startX = curX; startY = curY;
}
function out(e) { drawing = false; }

function delcanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}