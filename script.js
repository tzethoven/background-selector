var _ = require("lodash");

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn-random");

var array = [1,2,3,4,5,6,7,8];
console.log("answer: ", _.without(array, 3));

/**
 * Resets gradient background based on colorpicker values
 */
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

/**
 * Returns random color string
 * @return {String}
 */
function randomColor() {
	col = "#";
	while (col.length < 7) {
		col += String([0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"][Math.floor(Math.random()*16)]);
	}
	return col;
}


/**
 * Picks two random colors and sets the background
 * @return {None}
 */
function randomize() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomize);
randomize();