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
