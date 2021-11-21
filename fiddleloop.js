// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result


var names = [];

var namesList = document.getElementsByClassName('name');
for (var i = 0; i < namesList.length; i++) {
	var result = namesList[i].innerHTML;
  names.push(result.trim());
}
var nameString = names.join(', ');
alert(nameString);


// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400
var image = document.getElementById('lhl-logo');
image.width = 200;

function imageBigger() {
image.width = 400;
}
setTimeout(imageBigger, 1000);

/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info` and set the variable `elm` with its value
    3. Change the contents of that elements to say `JavaScript Rocks!`
*/
var elm = [];
var elm = document.getElementById('info');
var change = document.createElement('info');
change.innerHTML = "JavaScript Rocks!";
elm.replaceWith(change);