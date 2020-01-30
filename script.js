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
const $answerBtn = $(".answerBtn")
const $time = $("#time");
const $subBtn = $("#submitScore");
const $scoreList = $("#scoreList");
const $clearBtn = $("#clear");
const $backBtn = $('#back');
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

$answerBtn.on('click', function(){
    if($(this).text() === questions[qCount - 1].answer){
        nextQuestion();
    }
    else{
        console.log('wrong');
    }
})

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

let userScore = [];

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
    if(localStorage.getItem("users")){
        userScore = JSON.parse(localStorage.getItem("users"));
    }
    userScore.sort(function(a, b){return b.score - a.score});
    for (let i in userScore){
        const $userLi = $("<li>")
        $userLi.text(userScore[i].name +"-"+ userScore[i].score);
        $scoreList.append($userLi);
    }
    
}

$clearBtn.on('click', function(){
    localStorage.removeItem("users");
    $scoreList.empty();
})

$backBtn.on('click', function(){
    $scoreScreen.addClass('hide');    
    $homeScreen.removeClass('hide');
    userScore = [];
})