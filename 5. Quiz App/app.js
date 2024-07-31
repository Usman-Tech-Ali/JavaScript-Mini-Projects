const questions = [
  {
    ques: "Which of following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JS",
    d: "PHP",
    correct: "a",
  },
  {
    ques: "When was JS launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of these",
    correct: "b",
  },
  {
    ques: "What does CSS stands for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "None of these",
    correct: "b",
  },
];

let index = 0;
let totalScore = questions.length;
let right = 0,
  wrong = 0;
let que = document.querySelector("h2");
let options = document.querySelectorAll(".options");
let question = questions[index];
const loadQuestion = () => {
  if (index === totalScore) {
    Quizend();
  }
  reset();
  question = questions[index];
  //   console.log(question);
  que.innerText = `${index + 1}) ${question.ques}`;
  options[0].nextElementSibling.innerText = question.a;
  options[1].nextElementSibling.innerText = question.b;
  options[2].nextElementSibling.innerText = question.c;
  options[3].nextElementSibling.innerText = question.d;
};

loadQuestion();

const submitQuiz = () => {
  const ans = getAnswer();

  if (ans === question.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
};

const getAnswer = () => {
  let ans;
  options.forEach((input) => {
    if (input.checked) {
      ans = input.value;
    }
  });
  return ans;
};
function reset() {
  options.forEach((input) => {
    input.checked = false;
  });
}

const Quizend = () => {
  document.getElementById("box").innerHTML = `
    <h3> Thank You for playing the quiz </h3>
    <h2> ${right}/${totalScore} are correct </h2>
    `;
};
