class QuestionView {
    constructor(questionsContainer, quiz) {
        this.questionsContainer = questionsContainer;
        this.quiz = quiz;
    }

    render() {
        this.questionsContainer.innerHTML = '';
        this.quiz.questions.forEach((question, index) => {
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
            this.questionsContainer.appendChild(card);
        });
    }
}

export { QuestionView };
