var randomNumber1 = Math.floor((Math.random()*6)+1);


var randomImageSource1 = "images/dice"+randomNumber1+".png";



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);



