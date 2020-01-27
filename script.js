const $start = $("#start");
const $homeScreen = $("#homeScreen");
const $questionScreen = $("#questionScreen");
const $endScreen = $("#endScreen");
const $question = $("#question");
const $answer1 = $("#answer1");
const $answer2 = $("#answer2");
const $answer3 = $("#answer3");
const $answer4 = $("#answer4");
const $time = $("#time");

let qCount = 0;

$start.on('click', function(){
    $homeScreen.addClass('hide');
    qCount = 0;
    nextQuestion();
    countdown();
})

function nextQuestion(){
    $questionScreen.removeClass('hide');
    if(questions[qCount] === undefined){
        $questionScreen.addClass('hide');
        $endScreen.removeClass('hide');
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
        console.log(questions[qCount - 1].answer)
        if(choice.text() === questions[qCount - 1].answer){
            nextQuestion();
        }
        else{
            console.log('wrong');
        }
    })
}

function countdown(){
    let secondsLeft = 30;
    $time.text(secondsLeft);
    var timerInterval = setInterval(function() {
        secondsLeft--;
        $time.text(secondsLeft);
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log('times up');
          $endScreen.removeClass('hide');
        }
      }, 1000);
}

checkAnswer($answer1);
checkAnswer($answer2);
checkAnswer($answer3);
checkAnswer($answer4);