

var a=Math.floor(Math.random()*6+1);
var b=Math.floor(Math.random()*6+1);
var randomDiceImg = "dice"+a+".png";
var randomImageSource = "images/" +randomDiceImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomDiceImg2 = "dice"+b+".png";
var randomImageSource2 = "images/" +randomDiceImg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(a>b)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}