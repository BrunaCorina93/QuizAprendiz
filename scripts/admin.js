// Painel Administrativo - VERSÃO CORRIGIDA
class AdminPanel {
    constructor() {
        this.quizzes = [];
        this.init();
    }

    init() {
        console.log('Inicializando AdminPanel...');
        this.loadQuizzes();
    }

    loadQuizzes() {
        const saved = localStorage.getItem('quizAprendizQuizzes');
        if (saved) {
            this.quizzes = JSON.parse(saved);
        } else {
            this.quizzes = window.quizApp ? window.quizApp.quizzes : [];
        }
        console.log('Quizzes carregados:', this.quizzes.length);
    }
}

// Inicializar painel administrativo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando AdminPanel...');
    window.adminPanel = new AdminPanel();
});