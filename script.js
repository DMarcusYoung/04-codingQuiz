const $start = document.querySelector("#start");
const $homeScreen = document.querySelector("#homeScreen");
const $questionScreen = document.querySelector("#questionScreen");
const $question = document.querySelector("#question");
const $answer1 = document.querySelector("#answer1");
const $answer2 = document.querySelector("#answer2");
const $answer3 = document.querySelector("#answer3");
const $answer4 = document.querySelector("#answer4");

let questionCounter = 0;

$start.addEventListener('click', function(){
    $homeScreen.classList.add('hide');
    questionCounter = 0;
    nextQuestion();
})

function nextQuestion(){
    $questionScreen.classList.remove('hide');
    $question.textContent = questions[questionCounter].title;
    $answer1.textContent = questions[questionCounter].choices[0];
    $answer2.textContent = questions[questionCounter].choices[1];
    $answer3.textContent = questions[questionCounter].choices[2];
    $answer4.textContent = questions[questionCounter].choices[3];
    questionCounter++;
    
}

function checkAnswer(choice){
    choice.addEventListener('click', function(){
        console.log(questions[questionCounter - 1].answer)
        if(choice.textContent === questions[questionCounter - 1].answer){
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
