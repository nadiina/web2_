class QuestionModel {
    constructor(text, options) {
        this.text = text;
        this.options = options;
    }
}

class QuizModel {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
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

export { QuestionModel, QuizModel };
