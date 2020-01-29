const $start = $("#start");
const $highScore = $("#highScore");
const $homeScreen = $("#homeScreen");
const $questionScreen = $("#questionScreen");
const $endScreen = $("#endScreen");
const $scoreScreen = $("#scoreScreen");
const $question = $("#question");
const $answer1 = $("#answer1");
const $answer2 = $("#answer2");
const $answer3 = $("#answer3");
const $answer4 = $("#answer4");
const $time = $("#time");
const $subBtn = $("#submitScore");
const $scoreList = $("#scoreList");

let qCount;
let score;

$start.on('click', function(){
    $homeScreen.addClass('hide');
    qCount = 0;
    nextQuestion();
    countdown();
})

$highScore.on('click', function(){
    $homeScreen.addClass('hide');
    console.log("hi");
    showScores();
})

function nextQuestion(){
    $questionScreen.removeClass('hide');
    if(questions[qCount] === undefined){
        endGame();
        return
    }
    $question.text(questions[qCount].title);
    $answer1.text(questions[qCount].choices[0]);
    $answer2.text(questions[qCount].choices[1]);
    $answer3.text(questions[qCount].choices[2]);
    $answer4.text(questions[qCount].choices[3]);
    qCount++;
}

function checkAnswer(choice){
    choice.on('click', function(){
        if(choice.text() === questions[qCount - 1].answer){
            nextQuestion();
        }
        else{
            console.log('wrong');
        }
    })
}
checkAnswer($answer1);
checkAnswer($answer2);
checkAnswer($answer3);
checkAnswer($answer4);

function endGame(){
    stopTimer();
    $questionScreen.addClass('hide');
    $endScreen.removeClass('hide');
    $('.scoreDisplay').text(`Your score is ${secondsLeft}`);

}

var timerInterval;
let secondsLeft;
function countdown(){
    secondsLeft = 30;
    $time.text(secondsLeft);
    timerInterval = setInterval(function() {
        secondsLeft--;
        $time.text(secondsLeft);
    
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          endGame();
        }
      }, 1000);
}

function stopTimer(){
    clearInterval(timerInterval);
}

// Save scores to local storage and be able to access name, score and number of users who have played
// Have a master object that has nested objects(one for each user) or arrays 
// let userScore = `${user} - ${secondsLeft}`
let userScore = [];
// localStorage.setItem("users", userScore);

$subBtn.on('click', function(e){
    e.preventDefault();
    let $user = $("#initials").val();
    if (localStorage.getItem("users") != undefined){
        userScore = JSON.parse(localStorage.getItem("users"));
    }
    userScore.push({name: $user,score:secondsLeft});
    userScore = JSON.stringify(userScore);
    localStorage.setItem("users", userScore);
    $endScreen.addClass('hide');
    showScores();
})

function showScores(){
    $scoreScreen.removeClass('hide');
    userScore = JSON.parse(localStorage.getItem("users"));
    userScore.sort(function(a, b){return b.score - a.score});
    for (let i in userScore){
        const $userLi = $("<li>")
        $userLi.text(userScore[i].name +"-"+ userScore[i].score);
        $scoreList.append($userLi);
    }
    
}