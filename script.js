let quizData = [
    {
        question : "Most popular programing language?",
        a : "C++",
        b : "Python",
        c : "Javascript",
        d : "java",
        answer : "b"
    }, 
];

let question = document.getElementById("question");
let answer1 = quizData[0].answer;
// console.log(answer1)



let a_label = document.querySelector(".label-a");
let b_label = document.querySelector(".label-b");
let c_label = document.querySelector(".label-c");
let d_label = document.querySelector(".label-d");

let submitBtn = document.getElementById('submit');

let answers = document.querySelectorAll(".answer");
let quizNumber = 0;
let mark = 0;

function displayQuestionAnswers(){
    question.innerHTML = quizData[0].question;
    a_label.innerHTML = quizData[0].a;
    b_label.innerHTML = quizData[0].b;
    c_label.innerHTML = quizData[0].c;
    d_label.innerHTML = quizData[0].d;
};

// task 2
// check submited answer

function submitAnswer(){
    submitBtn.addEventListener("click",(event)=>{
        // event.preventDefault();
        // check user answer here

        let usersAnswer = getUserAnswer();
        console.log("User has selected this as answer",usersAnswer)
        if (usersAnswer === answer1){
            alert("You are right! Congratulations.")
        }
        else{
            alert(`Ooops!!! You are selected wrong answer.\nanswer : ${quizData[0].answer1}`)
        }
    })
}
//get the user answer
function getUserAnswer(){
    let userchoice;
    
    answers.forEach((userAnswer)=>{
        if (userAnswer.checked === true){
            userchoice = userAnswer.id;
        }
    })
    return userchoice;
}

displayQuestionAnswers();
submitAnswer();