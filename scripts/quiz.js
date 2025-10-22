// Gerenciador de Quizzes - VERSÃO CORRIGIDA
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer = null;
        this.timeLeft = 0;
        this.userAnswers = [];
        this.quizStartTime = null;
        this.questions = [];
        this.quizData = {
            1: this.getJurosCompostosQuiz()
        };
        
        console.log('QuizManager inicializado');
    }

    startQuiz(quiz) {
        console.log('QuizManager.startQuiz chamado:', quiz);
        
        this.currentQuiz = quiz;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizStartTime = new Date();
        
        // Carregar dados do quiz
        const quizData = this.quizData[quiz.id];
        if (!quizData) {
            console.error('Quiz data não encontrado para ID:', quiz.id);
            alert('Quiz não encontrado!');
            return;
        }

        this.questions = quizData.questions || [];
        console.log('Questões carregadas:', this.questions.length);
        
        if (this.questions.length === 0) {
            alert('Este quiz não possui questões!');
            return;
        }

        this.setupQuizScreen();
        window.quizApp.showScreen('quiz-screen');
        this.showQuestion();
        this.startTimer(quiz.duration * 60);
    }

    setupQuizScreen() {
        console.log('Configurando tela do quiz...');
        
        // Atualizar informações do quiz
        const quizTitle = document.getElementById('quiz-title');
        const quizCategory = document.getElementById('quiz-category');
        const quizDifficulty = document.getElementById('quiz-difficulty');
        
        if (quizTitle) quizTitle.textContent = this.currentQuiz.title;
        if (quizCategory) quizCategory.textContent = this.currentQuiz.category;
        if (quizDifficulty) {
            quizDifficulty.textContent = window.quizApp.getDifficultyText(this.currentQuiz.difficulty);
        }
        
        // Resetar controles
        const nextButton = document.getElementById('next-question');
        const prevButton = document.getElementById('prev-question');
        
        if (nextButton) {
            nextButton.textContent = 'Próxima →';
            nextButton.disabled = true;
        }
        
        if (prevButton) {
            prevButton.disabled = true;
        }
        
        // Esconder feedback
        const feedbackContainer = document.getElementById('feedback-container');
        if (feedbackContainer) {
            feedbackContainer.style.display = 'none';
        }
    }

    showQuestion() {
        console.log('Mostrando questão:', this.currentQuestionIndex);
        
        if (!this.questions || this.currentQuestionIndex >= this.questions.length) {
            console.log('Fim do quiz, finalizando...');
            this.finishQuiz();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        
        // Atualizar progresso
        this.updateProgress();
        
        // Atualizar número da questão
        const currentQuestionElement = document.getElementById('current-question');
        if (currentQuestionElement) {
            currentQuestionElement.textContent = 
                `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        }
        
        // Atualizar pontuação
        const currentScoreElement = document.getElementById('current-score');
        if (currentScoreElement) {
            currentScoreElement.textContent = this.score;
        }
        
        // Mostrar questão
        const questionTextElement = document.getElementById('question-text');
        if (questionTextElement) {
            questionTextElement.textContent = question.text;
        } else {
            console.error('Elemento question-text não encontrado!');
        }
        
        // Mostrar opções
        this.renderOptions(question.options);
        
        // Configurar navegação
        this.setupNavigation();
        
        // Esconder feedback
        const feedbackContainer = document.getElementById('feedback-container');
        if (feedbackContainer) {
            feedbackContainer.style.display = 'none';
        }
    }

    renderOptions(options) {
        console.log('Renderizando opções...');
        const container = document.getElementById('options-container');
        if (!container) {
            console.error('Container de opções não encontrado!');
            return;
        }

        container.innerHTML = '';

        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <div class="option-number">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option.text}</div>
            `;

            optionElement.addEventListener('click', () => {
                if (!optionElement.classList.contains('disabled')) {
                    this.selectOption(index);
                }
            });

            container.appendChild(optionElement);
        });
    }

    selectOption(optionIndex) {
        console.log('Opção selecionada:', optionIndex);
        const question = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        const selectedOption = options[optionIndex];
        
        // Desabilitar todas as opções
        options.forEach(opt => {
            opt.classList.add('disabled');
            opt.style.cursor = 'not-allowed';
        });
        
        // Marcar opção selecionada
        selectedOption.classList.add('selected');
        
        // Verificar resposta
        const isCorrect = optionIndex === question.correctAnswer;
        console.log('Resposta correta?', isCorrect);
        
        // Mostrar feedback
        this.showFeedback(isCorrect, question, optionIndex);
        
        // Salvar resposta do usuário
        this.userAnswers[this.currentQuestionIndex] = {
            selected: optionIndex,
            correct: isCorrect,
            time: new Date()
        };
        
        // Atualizar pontuação
        if (isCorrect) {
            const points = this.calculateQuestionScore();
            this.score += points;
            console.log('Pontos ganhos:', points, 'Total:', this.score);
        }
        
        // Atualizar navegação
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
            nextButton.disabled = false;
        }
        
        // Atualizar pontuação na tela
        const currentScoreElement = document.getElementById('current-score');
        if (currentScoreElement) {
            currentScoreElement.textContent = this.score;
        }
    }

    calculateQuestionScore() {
        const baseScore = 100;
        const timeBonus = Math.max(0, Math.floor(this.timeLeft / 10));
        const streakBonus = this.getStreakBonus();
        
        return baseScore + timeBonus + streakBonus;
    }

    getStreakBonus() {
        let streak = 0;
        for (let i = this.currentQuestionIndex - 1; i >= 0; i--) {
            if (this.userAnswers[i] && this.userAnswers[i].correct) {
                streak++;
            } else {
                break;
            }
        }
        return streak * 25;
    }

    showFeedback(isCorrect, question, selectedIndex) {
        console.log('Mostrando feedback...');
        const feedbackContainer = document.getElementById('feedback-container');
        if (!feedbackContainer) {
            console.error('Container de feedback não encontrado!');
            return;
        }

        const correctOption = question.options[question.correctAnswer];
        
        feedbackContainer.innerHTML = `
            <h3 class="${isCorrect ? 'correct-icon' : 'incorrect-icon'}">
                ${isCorrect ? '✓ Resposta Correta!' : '✗ Resposta Incorreta'}
            </h3>
            ${!isCorrect ? `
                <p><strong>Sua resposta:</strong> ${question.options[selectedIndex].text}</p>
                <p><strong>Resposta correta:</strong> ${correctOption.text}</p>
            ` : ''}
            <p><strong>Explicação:</strong> ${question.explanation}</p>
            ${question.tip ? `<p class="highlight">💡 Dica: ${question.tip}</p>` : ''}
        `;
        
        feedbackContainer.style.display = 'block';
        feedbackContainer.classList.add('show');
        
        // Destacar opções corretas/incorretas
        const options = document.querySelectorAll('.option');
        options.forEach((opt, index) => {
            if (index === question.correctAnswer) {
                opt.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    }

    setupNavigation() {
        console.log('Configurando navegação...');
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
            prevBtn.onclick = () => {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.showQuestion();
                    this.showPreviousAnswer();
                }
            };
        }
        
        if (nextBtn) {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                nextBtn.textContent = 'Próxima →';
            } else {
                nextBtn.textContent = 'Finalizar Quiz';
            }
            
            nextBtn.onclick = () => {
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.currentQuestionIndex++;
                    this.showQuestion();
                } else {
                    this.finishQuiz();
                }
            };
        }
    }

    showPreviousAnswer() {
        const previousAnswer = this.userAnswers[this.currentQuestionIndex];
        if (previousAnswer) {
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.add('disabled'));
            
            const selectedOption = options[previousAnswer.selected];
            const correctOption = options[this.questions[this.currentQuestionIndex].correctAnswer];
            
            selectedOption.classList.add('selected');
            if (previousAnswer.correct) {
                selectedOption.classList.add('correct');
            } else {
                selectedOption.classList.add('incorrect');
                correctOption.classList.add('correct');
            }
            
            const nextButton = document.getElementById('next-question');
            if (nextButton) {
                nextButton.disabled = false;
            }
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        const progressBar = document.getElementById('quiz-progress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    startTimer(totalSeconds) {
        console.log('Iniciando timer:', totalSeconds, 'segundos');
        this.timeLeft = totalSeconds;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                console.log('Tempo esgotado!');
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('quiz-timer');
        if (!timerElement) return;

        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Adicionar classes de warning
        timerElement.classList.remove('timer-warning', 'timer-critical');
        if (this.timeLeft <= 30) {
            timerElement.classList.add('timer-critical');
        } else if (this.timeLeft <= 60) {
            timerElement.classList.add('timer-warning');
        }
    }

    finishQuiz() {
        console.log('Finalizando quiz...');
        clearInterval(this.timer);
        
        const timeSpent = new Date() - this.quizStartTime;
        const correctAnswers = this.userAnswers.filter(answer => answer && answer.correct).length;
        
        console.log('Quiz finalizado - Corretas:', correctAnswers, 'Tempo:', timeSpent);
        
        // Atualizar dados do usuário
        this.updateUserStats(correctAnswers);
        
        // Mostrar tela de resultados
        this.showResults(correctAnswers, timeSpent);
    }

    updateUserStats(correctAnswers) {
        const userData = window.quizApp.userData;
        userData.totalScore += this.score;
        userData.quizzesCompleted++;
        userData.currentStreak = correctAnswers === this.questions.length ? 
            userData.currentStreak + 1 : 0;
        
        window.quizApp.saveUserData();
    }

    showResults(correctAnswers, timeSpent) {
        console.log('Mostrando resultados...');
        window.quizApp.showScreen('results-screen');
        
        // Atualizar resultados
        const finalScoreElement = document.getElementById('final-score');
        const correctAnswersElement = document.getElementById('correct-answers');
        const incorrectAnswersElement = document.getElementById('incorrect-answers');
        const timeSpentElement = document.getElementById('time-spent');
        
        if (finalScoreElement) finalScoreElement.textContent = this.score;
        if (correctAnswersElement) correctAnswersElement.textContent = correctAnswers;
        if (incorrectAnswersElement) incorrectAnswersElement.textContent = this.questions.length - correctAnswers;
        if (timeSpentElement) timeSpentElement.textContent = `${Math.floor(timeSpent / 1000)}s`;
        
        // Atualizar ranking do quiz
        this.updateQuizLeaderboard();
    }

    updateQuizLeaderboard() {
        const leaderboard = document.getElementById('quiz-leaderboard');
        if (!leaderboard) return;

        const topScores = this.getTopScores();
        
        leaderboard.innerHTML = '';
        topScores.forEach((score, index) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item';
            item.innerHTML = `
                <div class="leaderboard-rank rank-${index + 1}">${index + 1}</div>
                <div class="leaderboard-name">${score.name}</div>
                <div class="leaderboard-score">${score.score}</div>
            `;
            leaderboard.appendChild(item);
        });
    }

    getTopScores() {
        return [
            { name: 'Ana Silva', score: 1250 },
            { name: 'Pedro Santos', score: 1180 },
            { name: 'Você', score: this.score },
            { name: 'Marina Oliveira', score: 980 },
            { name: 'Rafael Costa', score: 920 }
        ].sort((a, b) => b.score - a.score)
         .slice(0, 5);
    }

    // Quiz específico de Juros Compostos
    getJurosCompostosQuiz() {
        return {
            title: "Juros Compostos",
            category: "Matemática Financeira",
            difficulty: "medium",
            questions: [
                {
                    text: "Os juros compostos são caracterizados por:",
                    options: [
                        { text: "Incidência periódica sobre o capital inicial" },
                        { text: "Base de cálculo constante ao longo do tempo" },
                        { text: "Capitalização exponencial com base variável" },
                        { text: "Linearidade no crescimento do montante" }
                    ],
                    correctAnswer: 2,
                    explanation: "Capitalização exponencial com base variável é a definição mais precisa. Diferente dos juros simples, onde a base de cálculo permanece constante, nos juros compostos a base se modifica a cada período, resultando em crescimento exponencial.",
                    tip: "Lembre-se: nos juros compostos, os juros de cada período são calculados sobre o montante do período anterior."
                },
                {
                    text: "A expressão algébrica que define os juros compostos é:",
                    options: [
                        { text: "M = C · (1 + i · n)" },
                        { text: "M = C · (1 + i)ⁿ" },
                        { text: "M = C + C · i · n" },
                        { text: "M = C · e^(i · n)" }
                    ],
                    correctAnswer: 1,
                    explanation: "A fórmula M = C · (1 + i)ⁿ é a representação canônica para capitalização discreta. A alternativa D representa capitalização contínua, um conceito avançado válido em contextos específicos.",
                    tip: "O expoente 'n' representa o número de períodos de capitalização."
                },
                {
                    text: "R$ 1.000,00 aplicados a 2% ao mês por 3 meses resultam em:",
                    options: [
                        { text: "R$ 1.060,00" },
                        { text: "R$ 1.061,21" },
                        { text: "R$ 1.061,208" },
                        { text: "R$ 1.061,20" }
                    ],
                    correctAnswer: 1,
                    explanation: "Cálculo: 1000 × (1,02)³ = 1061,208. Em contexto financeiro, arredondamos para R$ 1.061,21 (2 casas decimais).",
                    tip: "Use a fórmula M = C × (1 + i)ⁿ para calcular o montante final."
                },
                {
                    text: "A distinção essencial entre regimes simples e compostos reside na:",
                    options: [
                        { text: "Magnitude da taxa de juros" },
                        { text: "Periodicidade da capitalização" },
                        { text: "Base de cálculo dos juros periódicos" },
                        { text: "Duração da operação" }
                    ],
                    correctAnswer: 2,
                    explanation: "A base de cálculo dos juros periódicos é a variável fundamental que diferencia os regimes. Nos juros simples, a base permanece constante (capital inicial). Nos compostos, a base se modifica a cada período (montante do período anterior).",
                    tip: "Pense na base de cálculo como o 'ponto de partida' para calcular os juros de cada período."
                },
                {
                    text: "Valor Presente representa:",
                    options: [
                        { text: "O montante futuro expresso em moeda corrente" },
                        { text: "O capital inicial de uma operação" },
                        { text: "O valor atual de um fluxo futuro descontado" },
                        { text: "A soma dos juros acumulados" }
                    ],
                    correctAnswer: 2,
                    explanation: "Valor atual de um fluxo futuro descontado é a definição canônica. Esta definição enfatiza o aspecto temporal do dinheiro e a técnica de desconto utilizada para trazer valores futuros ao momento presente.",
                    tip: "VP é quanto vale HOJE um valor que você receberá no FUTURO."
                }
            ]
        };
    }
}

// Inicializar o gerenciador de quizzes
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, inicializando QuizManager...');
    window.quizManager = new QuizManager();
});