const questionsContainer = document.getElementById('questions-container');

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
    const buttonLabel = index < quiz.questions.length - 1 ? 'Next Question' : 'Submit';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary');
    button.textContent = buttonLabel;

    button.addEventListener('click', () => {
        if (buttonLabel === 'Next Question') {
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
