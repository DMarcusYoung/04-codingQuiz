const $start = $("#start");
const $homeScreen = $("#homeScreen");
const $questionScreen = $("#questionScreen");
const $question = $("#question");
const $answer1 = $("#answer1");
const $answer2 = $("#answer2");
const $answer3 = $("#answer3");
const $answer4 = $("#answer4");

let qCounter = 0;

$start.on('click', function(){
    $homeScreen.addClass('hide');
    qCounter = 0;
    nextQuestion();
})

function nextQuestion(){
    $questionScreen.removeClass('hide');
    $question.text(questions[qCounter].title);
    $answer1.text(questions[qCounter].choices[0]);
    $answer2.text(questions[qCounter].choices[1]);
    $answer3.text(questions[qCounter].choices[2]);
    $answer4.text(questions[qCounter].choices[3]);
    qCounter++;
    
}

function checkAnswer(choice){
    choice.on('click', function(){
        console.log(questions[qCounter - 1].answer)
        if(choice.text() === questions[qCounter - 1].answer){
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
