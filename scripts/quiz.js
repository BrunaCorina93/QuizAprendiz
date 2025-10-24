// QUIZ MANAGER - VERSÃO INTEGRADA COM SEU SISTEMA
console.log('🎯 Inicializando QuizManager Integrado...');

class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = [];
        
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
            },
            {
                text: "Qual a diferença principal entre juros simples e compostos?",
                options: [
                    { text: "Juros simples: base constante; compostos: base crescente" },
                    { text: "Juros simples: cálculo diário; compostos: cálculo mensal" },
                    { text: "Juros simples: para poupança; compostos: para investimentos" },
                    { text: "Juros simples: taxa fixa; compostos: taxa variável" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! Nos juros simples a base é sempre o capital inicial, nos compostos a base aumenta a cada período."
            },
            {
                text: "Se você investir R$ 500 a 1% ao mês por 12 meses, quanto terá?",
                options: [
                    { text: "R$ 560,00" },
                    { text: "R$ 563,41" },
                    { text: "R$ 566,00" },
                    { text: "R$ 570,00" }
                ],
                correctAnswer: 1,
                explanation: "✅ CORRETO! Cálculo: 500 × (1,01)¹² = 563,41. O poder dos juros compostos!"
            },
            {
                text: "O que significa 'capitalização' em juros compostos?",
                options: [
                    { text: "Acúmulo de juros sobre o montante anterior" },
                    { text: "Aumento do capital inicial" },
                    { text: "Pagamento de juros mensais" },
                    { text: "Conversão para outra moeda" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! Capitalização é incorporar os juros ao capital, formando nova base de cálculo."
            },
            {
                text: "Qual destes é um exemplo de juros compostos?",
                options: [
                    { text: "Poupança bancária" },
                    { text: "Empréstimo com juros simples" },
                    { text: "Financiamento de veículo" },
                    { text: "Cartão de crédito" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! A poupança rende com juros compostos - seus rendimentos geram novos rendimentos."
            },
            {
                text: "Quanto tempo leva para um capital dobrar a 2% ao mês?",
                options: [
                    { text: "36 meses" },
                    { text: "24 meses" },
                    { text: "48 meses" },
                    { text: "18 meses" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! Regra do 72: 72 ÷ 2 = 36 meses. Fórmula prática para estimar tempo de duplicação."
            },
            {
                text: "Qual fator mais impacta nos juros compostos?",
                options: [
                    { text: "Tempo de aplicação" },
                    { text: "Valor inicial" },
                    { text: "Taxa de juros" },
                    { text: "Frequência de capitalização" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! O tempo é o fator mais poderoso devido ao crescimento exponencial."
            },
            {
                text: "Se a inflação é 5% ao ano, quanto vale R$ 1000 daqui a 2 anos?",
                options: [
                    { text: "R$ 902,50" },
                    { text: "R$ 950,00" },
                    { text: "R$ 907,03" },
                    { text: "R$ 925,00" }
                ],
                correctAnswer: 2,
                explanation: "✅ CORRETO! Cálculo: 1000 ÷ (1,05)² = 907,03. Inflação corrói o poder de compra."
            },
            {
                text: "O que é taxa de juros real?",
                options: [
                    { text: "Taxa nominal menos inflação" },
                    { text: "Taxa cobrada pelos bancos" },
                    { text: "Taxa máxima permitida" },
                    { text: "Taxa sem correção monetária" }
                ],
                correctAnswer: 0,
                explanation: "✅ CORRETO! Taxa real = taxa nominal - inflação. Mostra o ganho real descontada a inflação."
            }
        ]
    },
            // Educação Financeira (ID 2)
            // Educação Financeira (ID 2) - 10 QUESTÕES COMPLETAS
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
            explanation: "✅ CORRETO! Orçamento é o controle sistemático de receitas e despesas."
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
            explanation: "✅ CORRETO! 50% necessidades básicas, 30% desejos pessoais, 20% poupança e investimentos."
        },
        {
            text: "Para que serve uma reserva de emergência?",
            options: [
                { text: "Cobrir gastos inesperados" },
                { text: "Investir em ações" },
                { text: "Pagar festas" },
                { text: "Comprar roupas" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Reserva de emergência é para desemprego, problemas de saúde, reparos urgentes."
        },
        {
            text: "O que são gastos supérfluos?",
            options: [
                { text: "Gastos não essenciais" },
                { text: "Contas básicas" },
                { text: "Investimentos" },
                { text: "Impostos" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Gastos supérfluos são aqueles que podem ser reduzidos sem afetar necessidades básicas."
        },
        {
            text: "Qual a vantagem do cartão de crédito usado com responsabilidade?",
            options: [
                { text: "Controle de gastos e benefícios" },
                { text: "Compras sem limite" },
                { text: "Não precisa pagar integral" },
                { text: "Substitui poupança" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Cartão responsável oferece controle, programa de pontos e construção de score."
        },
        {
            text: "O que é diversificação de investimentos?",
            options: [
                { text: "Distribuir em diferentes aplicações" },
                { text: "Investir tudo no melhor" },
                { text: "Aplicar só em poupança" },
                { text: "Manter na conta corrente" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Diversificação reduz riscos - não coloque todos os ovos na mesma cesta!"
        },
        {
            text: "Qual o primeiro passo para sair das dívidas?",
            options: [
                { text: "Diagnóstico completo das dívidas" },
                { text: "Pegar mais empréstimos" },
                { text: "Parar de pagar contas" },
                { text: "Usar cartão para pagar dívidas" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Primeiro conheça todas as dívidas: valores, taxas e prazos."
        },
        {
            text: "O que é inflação?",
            options: [
                { text: "Aumento geral dos preços" },
                { text: "Queda do dólar" },
                { text: "Aumento do salário" },
                { text: "Crescimento do PIB" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Inflação é o aumento contínuo dos preços, reduzindo poder de compra."
        },
        {
            text: "Qual destes é um hábito financeiro saudável?",
            options: [
                { text: "Estabelecer metas financeiras" },
                { text: "Usar 13º para compras por impulso" },
                { text: "Manter várias dívidas" },
                { text: "Não ver extratos" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Metas claras (curto, médio e longo prazo) são fundamentais para o sucesso financeiro."
        },
        {
            text: "O que significa 'juros sobre juros'?",
            options: [
                { text: "Juros compostos" },
                { text: "Juros simples" },
                { text: "Taxa de juros" },
                { text: "Juros moratórios" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! 'Juros sobre juros' é a definição popular dos juros compostos, onde os rendimentos geram novos rendimentos."
        }
    ]
},
            
            // Mercado de Trabalho (ID 3)
            // Mercado de Trabalho (ID 3) - 10 QUESTÕES COMPLETAS
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
            explanation: "✅ CORRETO! Currículo objetivo destaca o que é mais relevante para a vaga."
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
            explanation: "✅ CORRETO! Conhecer a empresa mostra interesse genuíno e preparação."
        },
        {
            text: "O que é networking profissional?",
            options: [
                { text: "Rede de contatos profissionais" },
                { text: "Trabalho em home office" },
                { text: "Uso de redes sociais" },
                { text: "Currículo online" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Networking é construir relacionamentos que podem gerar oportunidades profissionais."
        },
        {
            text: "Qual a importância do LinkedIn?",
            options: [
                { text: "Rede social profissional" },
                { text: "Site de empregos" },
                { text: "Blog corporativo" },
                { text: "Plataforma de cursos" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! LinkedIn é a principal rede social profissional para conexões e oportunidades."
        },
        {
            text: "O que significa CLT?",
            options: [
                { text: "Consolidação das Leis do Trabalho" },
                { text: "Contrato Legal Trabalhista" },
                { text: "Código Laboral Trabalhista" },
                { text: "Certificado de Licença Trabalhista" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! CLT reúne as normas que regulam as relações individuais de trabalho."
        },
        {
            text: "Qual atitude é positiva no ambiente de trabalho?",
            options: [
                { text: "Proatividade" },
                { text: "Fofoca" },
                { text: "Competição excessiva" },
                { text: "Isolamento" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Proatividade é antecipar necessidades e tomar iniciativa."
        },
        {
            text: "O que é feedback construtivo?",
            options: [
                { text: "Crítica que ajuda a melhorar" },
                { text: "Elogio sem fundamento" },
                { text: "Reclamação geral" },
                { text: "Silêncio sobre erros" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Feedback construtivo aponta melhorias de forma objetiva e respeitosa."
        },
        {
            text: "Qual a importância do trabalho em equipe?",
            options: [
                { text: "Soma diferentes habilidades" },
                { text: "Divide responsabilidades" },
                { text: "Aumenta competitividade" },
                { text: "Reduz trabalho individual" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Trabalho em equipe combina diferentes talentos para melhores resultados."
        },
        {
            text: "O que é plano de carreira?",
            options: [
                { text: "Roteiro de desenvolvimento profissional" },
                { text: "Lista de empregos" },
                { text: "Currículo atualizado" },
                { text: "Carta de recomendação" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Plano de carreira traça objetivos e etapas para crescimento profissional."
        },
        {
            text: "Qual habilidade é mais valorizada hoje?",
            options: [
                { text: "Adaptabilidade" },
                { text: "Especialização extrema" },
                { text: "Experiência longa" },
                { text: "Formação acadêmica" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Adaptabilidade - capacidade de se ajustar a mudanças - é crucial no mercado atual."
        }
    ]
},
            
            // Comunicação Eficaz (ID 4) - 10 QUESTÕES COMPLETAS
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
            explanation: "✅ CORRETO! Comunicação não-verbal inclui gestos, expressões faciais e linguagem corporal."
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
            explanation: "✅ CORRETO! Escuta ativa é ouvir com atenção total para entender o significado completo."
        },
        {
            text: "O que é feedback na comunicação?",
            options: [
                { text: "Resposta que completa o ciclo comunicativo" },
                { text: "Crítica negativa" },
                { text: "Avaliação de desempenho" },
                { text: "Relatório formal" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Feedback é a resposta que fecha o ciclo da comunicação, confirmando o entendimento."
        },
        {
            text: "Qual a importância da clareza na comunicação?",
            options: [
                { text: "Evita mal-entendidos" },
                { text: "Torna mais formal" },
                { text: "Aumenta o volume" },
                { text: "Diminui o tempo" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Clareza elimina ambiguidades e garante que a mensagem seja compreendida corretamente."
        },
        {
            text: "O que é comunicação assertiva?",
            options: [
                { text: "Expressar ideias com confiança e respeito" },
                { text: "Falar alto e rápido" },
                { text: "Concordar com tudo" },
                { text: "Ser agressivo" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Assertividade é defender seus direitos sem violar os direitos dos outros."
        },
        {
            text: "Qual barreira é comum na comunicação?",
            options: [
                { text: "Ruídos e distrações" },
                { text: "Falar muito" },
                { text: "Ouvir atentamente" },
                { text: "Fazer perguntas" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Ruídos ambientais e distrações são barreiras físicas que atrapalham a comunicação."
        },
        {
            text: "O que é empatia na comunicação?",
            options: [
                { text: "Colocar-se no lugar do outro" },
                { text: "Concordar sempre" },
                { text: "Ter pena" },
                { text: "Ser emocional" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Empatia é a capacidade de entender e compartilhar os sentimentos do outro."
        },
        {
            text: "Qual a vantagem da comunicação face a face?",
            options: [
                { text: "Permite ver linguagem corporal" },
                { text: "É mais rápida" },
                { text: "Não precisa preparo" },
                { text: "Evita conflitos" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Comunicação presencial permite observar sinais não-verbais importantes."
        },
        {
            text: "O que é comunicação intercultural?",
            options: [
                { text: "Comunicação entre diferentes culturas" },
                { text: "Falar várias línguas" },
                { text: "Comunicação online" },
                { text: "Linguagem universal" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Comunicação intercultural considera diferenças culturais para evitar mal-entendidos."
        },
        {
            text: "Qual habilidade melhora a comunicação em equipe?",
            options: [
                { text: "Saber ouvir diferentes opiniões" },
                { text: "Falar sempre primeiro" },
                { text: "Criticar ideias rapidamente" },
                { text: "Evitar discordâncias" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Ouvir diferentes perspectivas enriquece a discussão e fortalece o time."
        }
    ]
},
            
            // Excel Básico (ID 5)
           // Excel Básico (ID 5) - 10 QUESTÕES COMPLETAS
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
            explanation: "✅ CORRETO! A função =SOMA() adiciona valores de um intervalo de células."
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
            explanation: "✅ CORRETO! Ctrl+C copia as células selecionadas para a área de transferência."
        },
        {
            text: "Qual função calcula a média?",
            options: [
                { text: "=MEDIA()" },
                { text: "=MEDIANA()" },
                { text: "=PROMEDIO()" },
                { text: "=AVERAGE()" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! =MEDIA() calcula a média aritmética dos valores em um intervalo."
        },
        {
            text: "O que é uma célula no Excel?",
            options: [
                { text: "Interseção de linha e coluna" },
                { text: "Um gráfico" },
                { text: "Uma planilha" },
                { text: "Uma fórmula" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Célula é a unidade básica onde linhas e colunas se encontram."
        },
        {
            text: "Qual atalho salva o arquivo?",
            options: [
                { text: "Ctrl+S" },
                { text: "Ctrl+B" },
                { text: "Ctrl+P" },
                { text: "Ctrl+N" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Ctrl+S salva o arquivo atual rapidamente."
        },
        {
            text: "O que a função =CONTAR() faz?",
            options: [
                { text: "Conta células com números" },
                { text: "Soma valores" },
                { text: "Calcula média" },
                { text: "Encontra máximo" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! =CONTAR() conta quantas células no intervalo contêm números."
        },
        {
            text: "Como referenciar uma célula fixa?",
            options: [
                { text: "Usar $ antes da letra e número" },
                { text: "Colocar entre aspas" },
                { text: "Usar ! no final" },
                { text: "Escrever em maiúsculas" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! $A$1 mantém a referência fixa ao copiar a fórmula."
        },
        {
            text: "Qual função encontra o maior valor?",
            options: [
                { text: "=MÁXIMO()" },
                { text: "=MAIOR()" },
                { text: "=MAX()" },
                { text: "=TOPO()" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! =MÁXIMO() retorna o maior valor em um intervalo."
        },
        {
            text: "O que é uma planilha?",
            options: [
                { text: "Conjunto de células organizadas" },
                { text: "Um gráfico" },
                { text: "Uma fórmula" },
                { text: "Um banco de dados" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Planilha é a grade onde trabalhamos com linhas, colunas e células."
        },
        {
            text: "Como criar um gráfico rápido?",
            options: [
                { text: "Selecionar dados e pressionar F11" },
                { text: "Clicar em Inserir > Gráfico" },
                { text: "Digitar =GRAFICO()" },
                { text: "Usar Ctrl+G" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! F11 cria instantaneamente um gráfico com os dados selecionados."
        }
    ]
},
            // Ética Profissional (ID 6)
           // Ética Profissional (ID 6) - 10 QUESTÕES COMPLETAS
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
            explanation: "✅ CORRETO! Confidencialidade é proteger informações sensíveis da empresa e clientes."
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
            explanation: "✅ CORRETO! Assédio moral ou sexual é completamente antiético e ilegal."
        },
        {
            text: "O que é conflito de interesses?",
            options: [
                { text: "Interesse pessoal vs. profissional" },
                { text: "Discussão entre colegas" },
                { text: "Competição saudável" },
                { text: "Diferença de opinião" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Conflito de interesses ocorre quando interesses pessoais interferem nas decisões profissionais."
        },
        {
            text: "Qual comportamento mostra integridade?",
            options: [
                { text: "Assumir erros e corrigi-los" },
                { text: "Culpar outros" },
                { text: "Esconder problemas" },
                { text: "Fazer o mínimo" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Integridade é agir com honestidade mesmo quando ninguém está vendo."
        },
        {
            text: "O que é assédio moral?",
            options: [
                { text: "Humilhação constante no trabalho" },
                { text: "Critica construtiva" },
                { text: "Feedback negativo" },
                { text: "Competição profissional" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Assédio moral é expor alguém a situações humilhantes repetidamente."
        },
        {
            text: "Qual atitude é ética com colegas?",
            options: [
                { text: "Respeitar diferenças" },
                { text: "Fazer fofoca" },
                { text: "Roubar ideias" },
                { text: "Isolar pessoas" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Respeitar diversidade e tratar todos com dignidade é fundamental."
        },
        {
            text: "O que significa transparência?",
            options: [
                { text: "Agir de forma aberta e clara" },
                { text: "Esconder informações" },
                { text: "Manter segredos" },
                { text: "Ser misterioso" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Transparência é comunicar de forma honesta e acessível."
        },
        {
            text: "Qual é dever com a empresa?",
            options: [
                { text: "Proteger patrimônio e imagem" },
                { text: "Usar recursos pessoalmente" },
                { text: "Vazar informações" },
                { text: "Criticar publicamente" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Todo funcionário deve zelar pelos recursos e reputação da organização."
        },
        {
            text: "O que é competição desleal?",
            options: [
                { text: "Usar informações privilegiadas" },
                { text: "Ser produtivo" },
                { text: "Buscar promoção" },
                { text: "Ter ambição" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Competição desleal envolve vantagens injustas como informações confidenciais."
        },
        {
            text: "Qual o papel da ética no sucesso?",
            options: [
                { text: "Construir confiança duradoura" },
                { text: "Ganhar rápido" },
                { text: "Passar por cima de outros" },
                { text: "Ser o mais esperto" }
            ],
            correctAnswer: 0,
            explanation: "✅ CORRETO! Ética constrói reputação sólida e relacionamentos de confiança que sustentam o sucesso real."
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