var rv1 = Math.floor(Math.random()*6)+1;
var rv2 = Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+rv1+".png";
var randomdiceimage2="dice"+rv2+".png";
var randomeimagesource="./images/"+randomdiceimage;
var randomeimagesource2="./images/"+randomdiceimage2;
$(".img1").attr("src",randomeimagesource);
$(".img2").attr("src",randomeimagesource2);
if(rv1>rv2){
    $("h1").html("player 1 wins");

}
else if(rv1<rv2){
    $("h1").html("player 2 wins");

}
else{
    $("h1").html("draw");

}
