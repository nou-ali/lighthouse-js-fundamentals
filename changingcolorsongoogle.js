const htmlBody = document.querySelector('body');
const randomClickFunction = function () {
    const colors = ["green","blue","black","purple","yellow"] 
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log ('The user clicked and set the color to' + randomColor)
  }


// run function

randomClickFunction ()

//when user clicks, I want to execute this function. 

htmlBody.onclick = randomClickFunction;