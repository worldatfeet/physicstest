let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

const questions = [
  {
    question: "Which of the following is a vector quantity?",
    answers: ["A.  Speed", "B.Distance ", "C.  Velocity"],
    correctAnswer: 2
  },
  {
    question: "What is the SI unit of force? ",
    answers: ["A. Joule ", "B.Newton ", "C. Watt "],
    correctAnswer: 1,
  },
  {
    question: "According to Newton's first law of motion, an object at rest tends to?",
    answers: ["A.Stay at rest ", "B.Slow down ", "C. Change its shape"],
    correctAnswer: 0,
  },
  {
    question: " What is the SI unit of electric current?",
    answers: ["A.Ohm ", "B. Ampere", "C. Volt "],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is NOT a type of electromagnetic wave?",
    answers: ["A. X-ray ", "B. Sound wave", "C.Radio wave "],
    correctAnswer: 1,
  },
  {
    question: " In which state of matter do particles have the least amount of energy and are closest together?",
    answers: ["A.  Solid", "B.  Gas", "C. Plasma"],
    correctAnswer: 0,
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: ["A. 9.8 meters per second ", "B.3 x 10^8 meters per second ", "C.1 x 10^6 meters per second "],
    correctAnswer: 1,
  },
  {
    question: "Which of these fundamental forces is responsible for holding the nucleus of an atom together?",
    answers: ["A. Weak nuclear force ", "B.Gravitational force ", "C.  Strong nuclear force"],
    correctAnswer: 2,
  },
  {
    question: " Which of the following colors of light has the shortest wavelength?",
    answers: ["A. Red ", "B. Blue ", "C. Yellow "],
    correctAnswer: 1,
  },
  {
    question: " What is the law that states that the total energy of an isolated system remains constant over time?",
    answers: ["A. Conservation of energy ", "B.Newton's second law ", "C.Hooke's law "],
    correctAnswer: 0,
  }
];

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const answersList = document.getElementById('answers');
  const nextButton = document.getElementById('next-button');

  if (quizCompleted) {
    questionElement.textContent = "Quiz Completed!";
    answersList.innerHTML =` Your score is: ${score}`;
    nextButton.textContent = 'Next'; 
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => {
      window.location.href = 'https://www.flipkart.com/';
    });
  } else if (currentQuestion < questions.length) {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    answersList.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => checkAnswer(index));
      listItem.appendChild(button);
      answersList.appendChild(listItem);
    });

    nextButton.style.display = 'none';
  } else {
    // Handle quiz completion
  }
}

function checkAnswer(userAnswer) {
  if (userAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    quizCompleted = true;
  }

  displayQuestion();
}

function nextQuestion() {
  currentQuestion = 0;
  quizCompleted = false;
  score = 0;
  displayQuestion();
}

displayQuestion();