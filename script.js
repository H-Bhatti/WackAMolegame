var x;
var boxEl = document.querySelectorAll(".box")
var timeLeft = document.querySelector("#time-left")
console.log(boxEl)
var score = 0;
var moleCount = 0;
var totalTime = 24;
var time;
var gameTimeInterval=800;
//add event listner to all of the input elements
for (i=0;i<9;i++)
{
    boxEl[i].addEventListener("click" , checkMole);   
}
document.getElementById("button").onclick =() => gameRestart();

//set interval to start game and load oleafter set time to reandom location
var gameTime= setInterval(molePlacement, gameTimeInterval);
//for random placementof mole, set mole removal after set time(maybe works in background after calling function)
//increase molecount for total score checks if game moves over -- time 
function molePlacement ()
{
    x=Math.floor(Math.random()*9);
    console.log(x)
    document.getElementById(x).classList.add("mole")
    time = setInterval(moleRemoval, 600 )
    moleCount++;
    if (moleCount>24)
    {
        clearInterval(gameTime)
        document.getElementById("score").innerHTML=`Your score is ${score}/${moleCount}`
    }
    timeLeft.innerHTML=`Time Left is: ${totalTime} sec`
    totalTime--;
    return;
}
//mole removal clear mole 
function moleRemoval ()
{
    document.getElementById(x).classList.remove("mole")   
    clearInterval(time)     //clears the time interval of mole removal, for next turn 
    return;
}
// check if click on the mole and saves the score
function checkMole()
{
    console.log(this.id)
    if (this.id == x)
    {
        console.log("win")   
        score++;
    }
    console.log(`Mole count ${moleCount}`)
    console.log(`Score ${score}`)

} //for reseting both timers n stuff
function gameRestart() {
     score = 0;
     moleCount = 0;
     totalTime = 24;
     gameTime= setInterval(molePlacement, gameTimeInterval);
}