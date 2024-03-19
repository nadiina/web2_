class Question {
    constructor(text, options) {
        this.text = text;
        this.options = options;
    }
}

class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
    }

    addQuestion(text, options) {
        this.questions.push(new Question(text, options));
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questions.length) {
            this.currentQuestionIndex = this.questions.length - 1;
        }
    }

    previousQuestion() {
        this.currentQuestionIndex--;
        if (this.currentQuestionIndex < 0) {
            this.currentQuestionIndex = 0;
        }
    }
}

const quiz = new Quiz();

const questionsData = [
    {
        question: "What are your main stress factors in everyday life?",
        options: ["Workload", "Family conflicts", "Financial problems", "Health"]
    },
    {
        question: "What is your primary source of positive emotions?",
        options: ["Interaction with close people", "Accomplishing tasks and achieving goals", "Creative activities", "Traveling and new experiences"]
    },
    {
        question: "How do you influence the emotional state of your close ones and surroundings?",
        options: ["Foster positive emotions and support", "Resolve conflicts and improve others' mood", "Induce negative emotions through your actions or words", "Empathize but do not influence"]
    },
    {
        question: "What is your favorite strategy for stress relief?",
        options: ["Hanging out with friends", "Meditation or yoga", "Sports or physical activity", "Culinary experiments in the kitchen"]
    },
    {
        question: "How do you react to your own mistakes or failures?",
        options: ["Accept them as part of the learning process and an opportunity for growth", "Begin to feel sad and experience significant stress", "Quickly move on to finding solutions and correcting mistakes", "Feel a loss of confidence and have a negative attitude towards yourself"]
    }
];

questionsData.forEach(data => quiz.addQuestion(data.question, data.options));

// Displaying questions
function displayQuestion(index) {
    const question = quiz.questions[index];
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.innerHTML = `
        <div class="card-header">${question.text}</div>
        <div class="card-body">
            <form id="questionForm${index}">
                ${question.options.map((option, optionIndex) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" id="option${index}-${optionIndex}" value="${option}">
                        <label class="form-check-label" for="option${index}-${optionIndex}">${option}</label>
                    </div>
                `).join('')}
            </form>
        </div>
    `;
    questionsContainer.innerHTML = ''; // Clear previous question
    questionsContainer.appendChild(card);

    // Add button based on whether current question is last or not
    const buttonLabel = index < quiz.questions.length - 1 ? 'Наступне питання' : 'Відправити';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary');
    button.textContent = buttonLabel;

    button.addEventListener('click', () => {
        if (buttonLabel === 'Наступне питання') {
            displayQuestion(index + 1);
        } else {
            submitQuiz();
        }
    });

    questionsContainer.appendChild(button);
    updateProgressBar(index);
}
function updateProgressBar(index) {
    const progressBar = document.querySelector('.progress-bar');
    const progress = ((index + 1) / quiz.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function submitQuiz() {
    // Handle quiz submission here
    console.log('Quiz submitted');
    alert('Тест завершено');
}

let currentQuestionIndex = 0;
displayQuestion(currentQuestionIndex);



