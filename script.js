var bluecar=document.querySelector("#bluecar");
var racecar=document.querySelector("#racecar");
var result=document.querySelector("#result");
var score=document.querySelector("#score");
var game=document.querySelector("#game");
var leftbtn=document.querySelector("#butt1");
var rightbtn=document.querySelector("#butt2")
var sound=document.querySelector("#sound");

var counter=0;

var width = parseInt(window.getComputedStyle(game).getPropertyValue("width"));
console.log(width);
var widthby=width/3;
    bluecar.style.width=widthby+"px"
    racecar.style.width=widthby+"px"
    racecar.style.left=widthby+"px"
var width= parseInt(window.getComputedStyle(game).getPropertyValue("width"));
var widthby=width/3

bluecar.addEventListener("animationiteration",()=>{
             var random=((Math.floor(Math.random()*3))*widthby)
             bluecar.style.left=random+"px"
             counter++;
})

window.addEventListener("keydown",function(e){
   if(e.keyCode=="39"){
    var racecarLeft=parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
    if(racecarLeft<widthby*2){racecar.style.left=(racecarLeft+widthby)+"px"}
    sound.play();
   }
   if(e.keyCode=="37"){
    var racecarLeft=parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
    if(racecarLeft>0){racecar.style.left=(racecarLeft-widthby)+"px"}
    sound.play();


   }
})
//ksdjfkljsfdskjfdsflddklsfj
rightbtn.addEventListener("click",()=>{
    var racecarLeft=parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
    if(racecarLeft<widthby*2){racecar.style.left=(racecarLeft+widthby)+"px"}
    sound.play();

})
leftbtn.addEventListener("click",()=>{
    var racecarLeft=parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
    if(racecarLeft>0){racecar.style.left=(racecarLeft-widthby)+"px"}
    sound.play();

})




//kldjfljdsfjkdskfjkdsjfkldsjkf
// game over
setInterval(function Gameover() {
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    if ((bluecarLeft === racecarLeft) && (bluecarTop > 250) && (bluecarTop < 450)) {

        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `Score: ${counter}`;
        counter = 0;
    }
}, 10);