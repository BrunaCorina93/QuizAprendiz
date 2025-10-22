// Configuração global do QuizAprendiz
class QuizAprendiz {
    constructor() {
        this.currentScreen = 'home-screen';
        this.userData = this.loadUserData();
        this.quizzes = [];
        this.init();
    }

    init() {
        console.log('Inicializando QuizAprendiz...');
        this.hideLoading();
        this.loadQuizzes();
        this.setupEventListeners();
        this.showScreen('home-screen');
        this.updateRanking();
    }

    hideLoading() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 1000);
    }

    setupEventListeners() {
        console.log('Configurando event listeners...');
        
        // Navegação
        this.setupNavigation();
        
        // Botões de ação
        this.setupActionButtons();
    }

    setupNavigation() {
        const navButtons = {
            'home-btn': 'home-screen',
            'quizzes-btn': 'quizzes-screen', 
            'ranking-btn': 'ranking-screen',
            'admin-btn': 'admin-screen'
        };

        Object.entries(navButtons).forEach(([btnId, screenId]) => {
            const button = document.getElementById(btnId);
            if (button) {
                button.addEventListener('click', () => this.showScreen(screenId));
            }
        });
    }

    setupActionButtons() {
        const startLearningBtn = document.getElementById('start-learning');
        if (startLearningBtn) {
            startLearningBtn.addEventListener('click', () => this.showScreen('quizzes-screen'));
        }

        const newQuizBtn = document.getElementById('new-quiz');
        if (newQuizBtn) {
            newQuizBtn.addEventListener('click', () => this.showScreen('quizzes-screen'));
        }

        const reviewQuizBtn = document.getElementById('review-quiz');
        if (reviewQuizBtn) {
            reviewQuizBtn.addEventListener('click', () => this.reviewQuiz());
        }

        const shareResultBtn = document.getElementById('share-result');
        if (shareResultBtn) {
            shareResultBtn.addEventListener('click', () => this.shareResult());
        }

        // Admin
        const createQuizBtn = document.getElementById('create-quiz-btn');
        if (createQuizBtn) {
            createQuizBtn.addEventListener('click', () => this.createQuiz());
        }

        const viewStatsBtn = document.getElementById('view-stats-btn');
        if (viewStatsBtn) {
            viewStatsBtn.addEventListener('click', () => this.viewStats());
        }

        const manageQuizzesBtn = document.getElementById('manage-quizzes-btn');
        if (manageQuizzesBtn) {
            manageQuizzesBtn.addEventListener('click', () => this.manageQuizzes());
        }
    }

    showScreen(screenId) {
        console.log('Mostrando tela:', screenId);
        
        // Esconder todas as telas
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Mostrar tela atual
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        } else {
            console.error('Tela não encontrada:', screenId);
        }
        
        // Atualizar navegação
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Atualizar botão ativo
        const activeBtn = {
            'home-screen': 'home-btn',
            'quizzes-screen': 'quizzes-btn',
            'ranking-screen': 'ranking-btn',
            'admin-screen': 'admin-btn'
        }[screenId];
        
        if (activeBtn) {
            const btnElement = document.getElementById(activeBtn);
            if (btnElement) {
                btnElement.classList.add('active');
            }
        }
        
        this.currentScreen = screenId;
        
        // Executar ações específicas da tela
        this.onScreenShow(screenId);
    }

    onScreenShow(screenId) {
        switch(screenId) {
            case 'quizzes-screen':
                this.renderQuizzes();
                break;
            case 'ranking-screen':
                this.updateRanking();
                break;
            case 'admin-screen':
                this.loadAdminData();
                break;
        }
    }

    loadQuizzes() {
        console.log('Carregando quizzes...');
        this.quizzes = [
            {
                id: 1,
                title: "Juros Compostos",
                category: "Matemática Financeira",
                difficulty: "medium",
                icon: "📊",
                description: "Domine os juros compostos e seus cálculos",
                questions: 10,
                duration: 15,
                plays: 142
            },
            {
                id: 2,
                title: "Educação Financeira",
                category: "Finanças Pessoais",
                difficulty: "easy",
                icon: "💰",
                description: "Aprenda a organizar suas finanças",
                questions: 8,
                duration: 12,
                plays: 98
            },
            {
                id: 3,
                title: "Mercado de Trabalho",
                category: "Profissional",
                difficulty: "medium",
                icon: "💼",
                description: "Prepare-se para o mercado de trabalho",
                questions: 12,
                duration: 18,
                plays: 76
            },
            {
                id: 4,
                title: "Comunicação Eficaz",
                category: "Soft Skills",
                difficulty: "easy",
                icon: "🗣️",
                description: "Melhore sua comunicação no ambiente profissional",
                questions: 7,
                duration: 10,
                plays: 113
            },
            {
                id: 5,
                title: "Excel Básico",
                category: "Informática",
                difficulty: "hard",
                icon: "📈",
                description: "Domine as funções básicas do Excel",
                questions: 15,
                duration: 25,
                plays: 64
            },
            {
                id: 6,
                title: "Ética Profissional",
                category: "Comportamento",
                difficulty: "medium",
                icon: "⚖️",
                description: "Princípios éticos no ambiente de trabalho",
                questions: 9,
                duration: 14,
                plays: 87
            }
        ];
    }

    renderQuizzes() {
        console.log('Renderizando quizzes...');
        const grid = document.getElementById('quizzes-grid');
        if (!grid) {
            console.error('Elemento quizzes-grid não encontrado!');
            return;
        }

        grid.innerHTML = '';

        this.quizzes.forEach(quiz => {
            const quizCard = this.createQuizCard(quiz);
            grid.appendChild(quizCard);
        });
    }

    createQuizCard(quiz) {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <div class="quiz-card-header">
                <div class="quiz-icon">${quiz.icon}</div>
                <span class="quiz-difficulty difficulty-${quiz.difficulty}">
                    ${this.getDifficultyText(quiz.difficulty)}
                </span>
            </div>
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <div class="quiz-meta">
                <span>${quiz.questions} questões</span>
                <span>${quiz.duration} min</span>
            </div>
        `;

        card.addEventListener('click', () => {
            console.log('Quiz clicado:', quiz.title);
            this.startQuiz(quiz);
        });

        return card;
    }

    getDifficultyText(difficulty) {
        const texts = {
            'easy': 'Fácil',
            'medium': 'Médio',
            'hard': 'Difícil'
        };
        return texts[difficulty] || 'Médio';
    }

    startQuiz(quiz) {
        console.log('Iniciando quiz:', quiz.title);
        
        if (window.quizManager) {
            window.quizManager.startQuiz(quiz);
        } else {
            console.error('Quiz Manager não encontrado');
            alert('Erro ao carregar o quiz. Recarregue a página.');
        }
    }

    updateRanking() {
        const rankingList = document.getElementById('ranking-list');
        if (!rankingList) return;

        const ranking = this.getRankingData();
        rankingList.innerHTML = '';

        ranking.forEach((user, index) => {
            const rankItem = document.createElement('div');
            rankItem.className = 'ranking-item';
            rankItem.innerHTML = `
                <div class="ranking-position">${index + 1}</div>
                <div class="ranking-avatar">${user.name.charAt(0)}</div>
                <div class="ranking-info">
                    <div class="ranking-name">${user.name}</div>
                    <div class="ranking-quizzes">${user.quizzes} quizzes</div>
                </div>
                <div class="ranking-score">${user.score}</div>
            `;
            rankingList.appendChild(rankItem);
        });
    }

    getRankingData() {
        return [
            { name: 'Ana Silva', score: 2850, quizzes: 12 },
            { name: 'Pedro Santos', score: 2670, quizzes: 11 },
            { name: 'Marina Oliveira', score: 2540, quizzes: 10 },
            { name: 'Rafael Costa', score: 2380, quizzes: 9 },
            { name: 'Juliana Lima', score: 2210, quizzes: 8 },
            { name: 'Lucas Pereira', score: 2150, quizzes: 8 },
            { name: 'Camila Rodrigues', score: 1980, quizzes: 7 },
            { name: 'Bruno Almeida', score: 1870, quizzes: 7 },
            { name: 'Fernanda Souza', score: 1760, quizzes: 6 },
            { name: 'Diego Martins', score: 1620, quizzes: 6 }
        ];
    }

    loadUserData() {
        const saved = localStorage.getItem('quizAprendizUser');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return {
            name: 'Aprendiz',
            totalScore: 0,
            quizzesCompleted: 0,
            achievements: [],
            currentStreak: 0
        };
    }

    saveUserData() {
        localStorage.setItem('quizAprendizUser', JSON.stringify(this.userData));
    }

    // Métodos administrativos
    createQuiz() {
        alert('Funcionalidade de criar quiz será implementada em breve! 🎯');
    }

    viewStats() {
        alert('Estatísticas detalhadas em desenvolvimento! 📊');
    }

    manageQuizzes() {
        alert('Gerenciamento de quizzes chegando em breve! ⚙️');
    }

    reviewQuiz() {
        alert('Revisão de respostas em desenvolvimento! 📝');
    }

    shareResult() {
        if (navigator.share) {
            navigator.share({
                title: 'QuizAprendiz',
                text: `Acabei de completar um quiz no QuizAprendiz e fiz ${window.quizManager?.score || 0} pontos!`,
                url: window.location.href
            });
        } else {
            alert('Resultado copiado para a área de transferência! 📋');
        }
    }

    loadAdminData() {
        console.log('Carregando dados administrativos...');
    }
} 

// Inicializar a aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Iniciando QuizAprendiz');
    window.quizApp = new QuizAprendiz();
});

// Fallback - Se o DOMContentLoaded já aconteceu
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initApp() {
    console.log('Inicializando aplicação...');
    window.quizApp = new QuizAprendiz();
}