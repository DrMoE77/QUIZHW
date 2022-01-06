//document.getElementsByClassName("option").style.visibility = "hidden";

var questions = [
    "What is the square of 2?",
    "Is 4 greater than 8?",
    "What is 5 minus 2",
    "Which planet do we live on?"
    
]

var answers = [
    [
        "3",
        "4",
        "2",
        "1"
    ],
    [
        "Yes",
        "No",
        "Maybe",
        "Don't know!"
    ],
    [
        "6",
        "7",
        "3",
        "1"
    ],
    [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
    ]

]
var correctanswers = ["4","No", "3", "Earth"];

var questionElement = document.getElementById ("questionElement");
var answer0 = document.getElementById ("answer0");
var answer1 = document.getElementById ("answer1");
var answer2 = document.getElementById ("answer2");
var answer3 = document.getElementById ("answer3");

// 1. timer starts 

var seconds = 1000 * 30; //1000 = 1 second in JS
var timer;

function myTimer() {
    if(seconds == 30000){
        timer = setInterval(myTimer, 1000)
    }
    seconds -= 1000;
    if(seconds > 59000){
        newSec = seconds - 60000
        document.getElementById("timer").innerHTML= "1:" + newSec/1000;
    }
    else{
    document.getElementById("timer").innerHTML= "0:" + seconds/1000;
    }
    if (seconds <= 0) {
        clearInterval(timer);
        document.getElementById("main").style.display = "none"
        document.getElementById("quizOver").innerHTML = "Times up! Thankyou for playing!"
    } 
} 

if(seconds > 59000){
    newSec = seconds - 60000
    document.getElementById("timer").innerHTML= "1:" + newSec/1000;
}
else{
    document.getElementById("timer").innerHTML= "0:" + seconds/1000;
}

//console.log(seconds);


// when the start quiz button is clicked
function quiz(currentQuestion){

    // 2. 1st question is displayed with options & see which option has been clicked 

        questionElement.innerText =  currentQuestion+1 + '. ' + questions [currentQuestion];
        answer0.innerText = answers [currentQuestion][0];
        answer1.innerText = answers [currentQuestion][1];
        answer2.innerText = answers [currentQuestion][2];
        answer3.innerText = answers [currentQuestion][3];

        checkAnswer(currentQuestion)
    }

function checkAnswer(currentQuestion){

    document.getElementById("message").innerHTML = "Good luck!"

    //if correct: add 5 secs to the timer
    //if incorrect: subtract 5 secs from the timer 

    var option0 = answers [currentQuestion][0];
    var option1 = answers [currentQuestion][1];
    var option2 = answers [currentQuestion][2];
    var option3 = answers [currentQuestion][3];

    updateSec = 0

    answer0.addEventListener("click", () => {
        if(correctanswers[currentQuestion] == option0){
            
            updateSec = seconds + 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }
            //document.getElementById("timer").innerHTML = seconds;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
        else{

            updateSec = seconds - 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }          
            if (currentQuestion < 3) {
                
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:";
                clearInterval(timer)
            }
        }
    });

    answer1.addEventListener("click", () => {
        if(correctanswers[currentQuestion] == option1){

            updateSec = seconds + 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
        else{
            updateSec = seconds - 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }          
            //document.getElementById("timer").innerHTML -= 5;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
    });

    answer2.addEventListener("click", () => {
        if(correctanswers[currentQuestion] == option2){
            updateSec = seconds + 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }
            //document.getElementById("timer").innerHTML += 5;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
        else{
            updateSec = seconds - 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }          
            //document.getElementById("timer").innerHTML -= 5;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
    });

    answer3.addEventListener("click", () => {
        if(correctanswers[currentQuestion] == option3){
            updateSec = seconds + 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }
            //document.getElementById("timer").innerHTML += 5;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
        else{
            updateSec = seconds - 5000;
            if(updateSec > 59000){
                newSec = updateSec - 60000
                document.getElementById("timer").innerHTML= "1:" + newSec/1000;
            }
            else{
            document.getElementById("timer").innerHTML= "0:" + updateSec/1000;
            }          
            //document.getElementById("timer").innerHTML -= 5;
            if (currentQuestion < 3) {
                currentQuestion++;
                quiz(currentQuestion);
            }
            else{
                document.getElementById("main").style.display = "none"
                document.getElementById("quizOver").innerHTML = "Thankyou for playing!"
                document.getElementById("message").innerHTML = "Your score:"
                clearInterval(timer)
            }
        }
    });
  
}

currentQuestion = 0;

start = document.getElementById("startButton");

start.addEventListener("click", () => {
    myTimer();
    document.getElementById("startButton").style.display = "none";
    //document.getElementsByClassName("option").style.visibility = "visible";
    quiz(0);
});






  