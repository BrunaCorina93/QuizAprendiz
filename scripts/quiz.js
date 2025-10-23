// QUIZ MANAGER - VERSÃO INTEGRADA COM SEU SISTEMA
console.log('🎯 Inicializando QuizManager Integrado...');

class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = [];
        
        // DADOS DOS QUIZZES - USANDO OS MESMOS IDs DO SEU SISTEMA
        this.quizData = {
            // Juros Compostos (ID 1)
            1: {
                title: "Juros Compostos",
                category: "Matemática Financeira",
                difficulty: "medium",
                questions: [
                    {
                        text: "Qual é a fórmula dos juros compostos?",
                        options: [
                            { text: "M = C * (1 + i)^t" },
                            { text: "M = C + J" },
                            { text: "J = C * i * t" },
                            { text: "M = C / (1 + i)^t" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! A fórmula é M = C * (1 + i)^t"
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
                        explanation: "✅ CORRETO! Cálculo: 1000 × (1,02)³ = 1061,208 → R$ 1.061,21"
                    }
                ]
            },
            
            // Educação Financeira (ID 2)
            2: {
                title: "Educação Financeira",
                category: "Finanças Pessoais",
                difficulty: "easy",
                questions: [
                    {
                        text: "O que é um orçamento pessoal?",
                        options: [
                            { text: "Controle de gastos e receitas" },
                            { text: "Tipo de investimento" },
                            { text: "Empréstimo bancário" },
                            { text: "Imposto de renda" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Orçamento é o controle de receitas e despesas."
                    },
                    {
                        text: "Qual a regra 50-30-20?",
                        options: [
                            { text: "50% necessidades, 30% desejos, 20% poupança" },
                            { text: "50% poupança, 30% investimentos, 20% gastos" },
                            { text: "50% alimentação, 30% moradia, 20% transporte" },
                            { text: "50% salário, 30% bônus, 20% benefícios" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! 50% necessidades, 30% desejos, 20% poupança."
                    }
                ]
            },
            
            // Mercado de Trabalho (ID 3)
            3: {
                title: "Mercado de Trabalho",
                category: "Desenvolvimento Profissional",
                difficulty: "medium",
                questions: [
                    {
                        text: "O que é um currículo objetivo?",
                        options: [
                            { text: "Foca nas habilidades principais" },
                            { text: "Tem todas as experiências" },
                            { text: "Não tem foto" },
                            { text: "Está em inglês" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Currículo objetivo foca no que é relevante."
                    },
                    {
                        text: "Qual a principal dica para entrevista?",
                        options: [
                            { text: "Pesquisar sobre a empresa" },
                            { text: "Usar roupa formal sempre" },
                            { text: "Falar sobre salário" },
                            { text: "Chegar no horário exato" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Conhecer a empresa mostra preparação."
                    }
                ]
            },
            
            // Comunicação Eficaz (ID 4)
            4: {
                title: "Comunicação Eficaz",
                category: "Habilidades Interpessoais",
                difficulty: "easy",
                questions: [
                    {
                        text: "O que é comunicação não-verbal?",
                        options: [
                            { text: "Gestos, postura e expressões" },
                            { text: "Escrever e-mails" },
                            { text: "Falar em público" },
                            { text: "Linguagem técnica" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Comunicação não-verbal inclui gestos e expressões."
                    },
                    {
                        text: "Para que serve escuta ativa?",
                        options: [
                            { text: "Compreender realmente a mensagem" },
                            { text: "Interromper para concordar" },
                            { text: "Ficar em silêncio sempre" },
                            { text: "Anotar tudo" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Escuta ativa é entender a mensagem completamente."
                    }
                ]
            },
            
            // Excel Básico (ID 5)
            5: {
                title: "Excel Básico",
                category: "Informática",
                difficulty: "hard",
                questions: [
                    {
                        text: "Qual fórmula soma células?",
                        options: [
                            { text: "=SOMA()" },
                            { text: "=SOMAR()" },
                            { text: "=TOTAL()" },
                            { text: "=ADICIONAR()" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! A função =SOMA() adiciona valores."
                    },
                    {
                        text: "O que faz Ctrl+C no Excel?",
                        options: [
                            { text: "Copiar" },
                            { text: "Colar" },
                            { text: "Cortar" },
                            { text: "Salvar" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Ctrl+C copia células selecionadas."
                    }
                ]
            },
            
            // Ética Profissional (ID 6)
            6: {
                title: "Ética Profissional",
                category: "Comportamento Organizacional",
                difficulty: "medium",
                questions: [
                    {
                        text: "O que é confidencialidade?",
                        options: [
                            { text: "Manter segredos profissionais" },
                            { text: "Compartilhar informações" },
                            { text: "Falar sobre colegas" },
                            { text: "Ignorar regras" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Confidencialidade é guardar informações secretas."
                    },
                    {
                        text: "Qual atitude é antiética?",
                        options: [
                            { text: "Assédio no trabalho" },
                            { text: "Chegar no horário" },
                            { text: "Ajudar colegas" },
                            { text: "Seguir regras" }
                        ],
                        correctAnswer: 0,
                        explanation: "✅ CORRETO! Assédio é completamente antiético."
                    }
                ]
            }
        };
        
        console.log('✅ QuizManager carregado com', Object.keys(this.quizData).length, 'quizzes');
    }

    // MÉTODO startQuiz - COMPATÍVEL COM SEU SISTEMA
    startQuiz(quiz) {
        console.log('🚀 QuizManager.startQuiz chamado:', quiz);
        
        // Buscar dados do quiz pelo ID numérico
        const quizData = this.quizData[quiz.id];
        if (!quizData) {
            console.error('❌ Quiz data não encontrado para ID:', quiz.id);
            alert('Quiz não encontrado!');
            return;
        }

        // Configurar quiz atual
        this.currentQuiz = quiz;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = quizData.questions;

        console.log('📝 Questões carregadas:', this.questions.length);
        
        if (this.questions.length === 0) {
            alert('Este quiz não possui questões!');
            return;
        }

        // Configurar e mostrar tela do quiz
        this.setupQuizScreen();
        
        // Usar o sistema de telas existente
        if (window.quizApp && typeof window.quizApp.showScreen === 'function') {
            window.quizApp.showScreen('quiz-screen');
        } else {
            this.showQuizScreenFallback();
        }
        
        this.showQuestion();
        
        console.log('🎮 Quiz iniciado com sucesso:', quizData.title);
    }

    // CONFIGURAR TELA DO QUIZ
    setupQuizScreen() {
        console.log('🖥️ Configurando tela do quiz...');
        
        // Atualizar informações do quiz
        const quizTitle = document.getElementById('quiz-title');
        const quizCategory = document.getElementById('quiz-category');
        const quizDifficulty = document.getElementById('quiz-difficulty');
        
        if (quizTitle) quizTitle.textContent = this.currentQuiz.title;
        if (quizCategory) quizCategory.textContent = this.currentQuiz.category;
        if (quizDifficulty) {
            quizDifficulty.textContent = this.getDifficultyText(this.currentQuiz.difficulty);
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

    // FALLBACK PARA MOSTRAR TELA DO QUIZ
    showQuizScreenFallback() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        
        const quizScreen = document.getElementById('quiz-screen');
        if (quizScreen) {
            quizScreen.classList.add('active');
        }
    }

    // MOSTRAR QUESTÃO ATUAL
    showQuestion() {
        console.log('📝 Mostrando questão:', this.currentQuestionIndex);
        
        if (!this.questions || this.currentQuestionIndex >= this.questions.length) {
            console.log('🏁 Fim do quiz, finalizando...');
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
            console.error('❌ Elemento question-text não encontrado!');
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

    // RENDERIZAR OPÇÕES
    renderOptions(options) {
        console.log('🔄 Renderizando opções...');
        const container = document.getElementById('options-container');
        if (!container) {
            console.error('❌ Container de opções não encontrado!');
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

    // SELECIONAR OPÇÃO
    selectOption(optionIndex) {
        console.log('🎯 Opção selecionada:', optionIndex);
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
        console.log('✅ Resposta correta?', isCorrect);
        
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
            this.score += 100;
            console.log('🏆 Pontos ganhos: 100, Total:', this.score);
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

    // MOSTRAR FEEDBACK
    showFeedback(isCorrect, question, selectedIndex) {
        console.log('💬 Mostrando feedback...');
        const feedbackContainer = document.getElementById('feedback-container');
        if (!feedbackContainer) {
            console.error('❌ Container de feedback não encontrado!');
            return;
        }

        const correctOption = question.options[question.correctAnswer];
        
        feedbackContainer.innerHTML = `
            <h3 class="${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta'}
            </h3>
            ${!isCorrect ? `
                <p><strong>Sua resposta:</strong> ${question.options[selectedIndex].text}</p>
                <p><strong>Resposta correta:</strong> ${correctOption.text}</p>
            ` : ''}
            <p><strong>Explicação:</strong> ${question.explanation}</p>
        `;
        
        feedbackContainer.style.display = 'block';
        
        // Destacar opções corretas/incorretas
        const options = document.querySelectorAll('.option');
        options.forEach((opt, index) => {
            if (index === question.correctAnswer) {
                opt.classList.add('correct-option');
            } else if (index === selectedIndex && !isCorrect) {
                opt.classList.add('incorrect-option');
            }
        });
    }

    // CONFIGURAR NAVEGAÇÃO
    setupNavigation() {
        console.log('🧭 Configurando navegação...');
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
            prevBtn.onclick = () => {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.showQuestion();
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

    // ATUALIZAR PROGRESSO
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        const progressBar = document.getElementById('quiz-progress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    // FINALIZAR QUIZ
    finishQuiz() {
        console.log('🏁 Finalizando quiz...');
        
        const correctAnswers = this.userAnswers.filter(answer => answer && answer.correct).length;
        
        console.log('📊 Resultado:', {
            corretas: correctAnswers,
            total: this.questions.length,
            pontuacao: this.score
        });
        
        // Atualizar dados do usuário (se existir)
        if (window.quizApp && window.quizApp.userData) {
            window.quizApp.userData.totalScore += this.score;
            window.quizApp.userData.quizzesCompleted++;
        }
        
        // Mostrar tela de resultados
        this.showResults(correctAnswers);
    }

    // MOSTRAR RESULTADOS
    showResults(correctAnswers) {
        console.log('📈 Mostrando resultados...');
        
        // Atualizar resultados
        const finalScoreElement = document.getElementById('final-score');
        const correctAnswersElement = document.getElementById('correct-answers');
        const incorrectAnswersElement = document.getElementById('incorrect-answers');
        
        if (finalScoreElement) finalScoreElement.textContent = this.score;
        if (correctAnswersElement) correctAnswersElement.textContent = correctAnswers;
        if (incorrectAnswersElement) incorrectAnswersElement.textContent = this.questions.length - correctAnswers;
        
        // Usar sistema de telas existente
        if (window.quizApp && typeof window.quizApp.showScreen === 'function') {
            window.quizApp.showScreen('results-screen');
        }
    }

    // TEXTO DA DIFICULDADE
    getDifficultyText(difficulty) {
        const texts = {
            'easy': 'FÁCIL',
            'medium': 'MÉDIO',
            'hard': 'DIFÍCIL'
        };
        return texts[difficulty] || difficulty;
    }
}

// INICIALIZAÇÃO COMPATÍVEL
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM carregado, inicializando QuizManager...');
    window.quizManager = new QuizManager();
    console.log('✅ QuizManager pronto para uso!');
});