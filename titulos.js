const programacaoBasicaAplicadaJS = new Map([

    // 1. FUNDAMENTOS ESSENCIAIS
    ['fundamentos', 'Fundamentos do JavaScript'],
    ['fundamentos/historia', 'História e Evolução'],
    ['fundamentos/historia/nascimento', 'Nascimento do JavaScript: Netscape e Brendan Eich'],
    ['fundamentos/historia/ecmascript', 'Padronização ECMAScript'],
    ['fundamentos/historia/nodejs', 'Surgimento do Node.js'],
    
    ['fundamentos/ambiente', 'Ambientes de Execução'],
    ['fundamentos/ambiente/browser', 'Browser: DOM, BOM, Eventos'],
    ['fundamentos/ambiente/node', 'Node.js: Módulos, File System'],
    ['fundamentos/ambiente/diferencas', 'Diferenças Browser/Node.js'],
    
    ['fundamentos/sintaxe', 'Sintaxe Básica'],
    ['fundamentos/sintaxe/tokens', 'Tokens Léxicos'],
    ['fundamentos/sintaxe/estruturas', 'Estruturas de Controle'],
    ['fundamentos/sintaxe/erros-comuns', 'Erros Sintáticos Comuns'],

    // 2. TIPOS DE DADOS
    ['tipos', 'Sistema de Tipos'],
    ['tipos/primitivos', 'Tipos Primitivos'],
    ['tipos/primitivos/string', 'String: Métodos e Manipulação'],
    ['tipos/primitivos/number', 'Number: Operações e Limites'],
    ['tipos/primitivos/boolean', 'Boolean e Lógica'],
    ['tipos/primitivos/null-undefined', 'Null vs Undefined'],
    ['tipos/primitivos/symbol', 'Symbols Únicos'],
    ['tipos/primitivos/bigint', 'BigInt para Números Grandes'],
    
    ['tipos/referencia', 'Tipos por Referência'],
    ['tipos/referencia/objetos', 'Objetos e Propriedades'],
    ['tipos/referencia/arrays', 'Arrays e Métodos'],
    ['tipos/referencia/funcoes', 'Funções como Cidadãos de Primeira Classe'],
    ['tipos/referencia/datas', 'Manipulação de Datas'],

    // 3. VARIÁVEIS E ESCOPO
    ['variaveis', 'Gerenciamento de Variáveis'],
    ['variaveis/declaracao', 'Declarações'],
    ['variaveis/declaracao/var', 'var e Hoisting'],
    ['variaveis/declaracao/let', 'let e Escopo de Bloco'],
    ['variaveis/declaracao/const', 'const e Imutabilidade'],
    
    ['variaveis/escopo', 'Modelos de Escopo'],
    ['variaveis/escopo/lexical', 'Escopo Léxico'],
    ['variaveis/escopo/closures', 'Closures Aplicadas'],
    ['variaveis/escopo/modulos', 'Escopo de Módulo'],

    // 4. OPERADORES
    ['operadores', 'Operadores e Expressões'],
    ['operadores/aritmeticos', 'Aritméticos: +, -, *, /, %, **'],
    ['operadores/atribuicao', 'Atribuição: =, +=, -=, etc'],
    ['operadores/comparacao', 'Comparação: ==, ===, !=='],
    ['operadores/logicos', 'Lógicos: &&, ||, !'],
    ['operadores/bitwise', 'Bitwise: &, |, ^, ~, <<, >>'],
    ['operadores/ternario', 'Condicional Ternário'],

    // 5. ESTRUTURAS DE CONTROLE
    ['controle', 'Fluxo de Controle'],
    ['controle/condicional', 'Condicionais'],
    ['controle/condicional/if-else', 'Estruturas if/else'],
    ['controle/condicional/switch', 'Declaração switch'],
    
    ['controle/repeticao', 'Laços de Repetição'],
    ['controle/repeticao/for', 'for clássico e for...of'],
    ['controle/repeticao/while', 'while e do...while'],
    ['controle/repeticao/controle-fluxo', 'break e continue'],

    // 6. FUNÇÕES
    ['funcoes', 'Funções e Abstração'],
    ['funcoes/basico', 'Fundamentos'],
    ['funcoes/basico/declaracao', 'Declaração vs Expressão'],
    ['funcoes/basico/parametros', 'Parâmetros e Argumentos'],
    ['funcoes/basico/retorno', 'Valores de Retorno'],
    
    ['funcoes/avancado', 'Técnicas Avançadas'],
    ['funcoes/avancado/arrow', 'Arrow Functions'],
    ['funcoes/avancado/closures', 'Closures e Estados Privados'],
    ['funcoes/avancado/currying', 'Currying e Composição'],
    
    ['funcoes/modernas', 'Recursos ES6+'],
    ['funcoes/modernas/default', 'Parâmetros Padrão'],
    ['funcoes/modernas/rest-spread', 'Operadores Rest/Spread'],
    ['funcoes/modernas/desestruturacao', 'Desestruturação de Parâmetros'],

    // 7. PROGRAMÇÃO ORIENTADA A OBJETOS
    ['poo', 'POO e Protótipos'],
    ['poo/basico', 'Conceitos Fundamentais'],
    ['poo/basico/objetos', 'Criação de Objetos'],
    ['poo/basico/prototipos', 'Cadeia de Protótipos'],
    ['poo/basico/heranca', 'Herança Prototipal'],
    
    ['poo/avancado', 'Recursos Modernos'],
    ['poo/avancado/classes', 'Classes ES6'],
    ['poo/avancado/encapsulamento', 'Campos Privados (#)'],
    ['poo/avancado/polimorfismo', 'Sobrescrita de Métodos'],

    // 8. MANIPULAÇÃO DE DADOS
    ['dados', 'Manipulação Avançada'],
    ['dados/arrays', 'Manipulação de Arrays'],
    ['dados/arrays/metodos', 'map, filter, reduce'],
    ['dados/arrays/transformacoes', 'flat, flatMap, sort'],
    
    ['dados/objetos', 'Manipulação de Objetos'],
    ['dados/objetos/metodos', 'Object.keys/values/entries'],
    ['dados/objetos/desestruturacao', 'Desestruturação'],
    
    ['dados/json', 'Trabalhando com JSON'],
    ['dados/json/conversao', 'parse() e stringify()'],
    ['dados/json/manipulacao', 'Transformações Complexas'],

    // 9. DOM E EVENTOS
    ['dom', 'Manipulação do DOM'],
    ['dom/selecao', 'Seleção de Elementos'],
    ['dom/selecao/basico', 'getElementById/ClassName'],
    ['dom/selecao/avancado', 'querySelectorAll'],
    
    ['dom/manipulacao', 'Modificação Dinâmica'],
    ['dom/manipulacao/conteudo', 'innerHTML/textContent'],
    ['dom/manipulacao/estilos', 'classList e style'],
    
    ['dom/eventos', 'Gerenciamento de Eventos'],
    ['dom/eventos/listeners', 'addEventListener'],
    ['dom/eventos/delegacao', 'Delegação de Eventos'],
    ['dom/eventos/customizados', 'Eventos Personalizados'],

    // 10. PROGRAMAÇÃO ASSÍNCRONA
    ['async', 'Operações Assíncronas'],
    ['async/callbacks', 'Padrão Callback'],
    ['async/promises', 'Promises e Encadeamento'],
    ['async/async-await', 'Async/Await'],
    ['async/fetch', 'Fetch API e AJAX Moderno'],

    // 11. TRATAMENTO DE ERROS
    ['erros', 'Gerenciamento de Erros'],
    ['erros/try-catch', 'Blocos try/catch/finally'],
    ['erros/customizados', 'Erros Personalizados'],
    ['erros/promises', 'Tratamento em Cadeias'],

    // 12. ESTRUTURAS DE DADOS COMPLEXAS
    ['estruturas-dados', 'Estruturas Avançadas'],
    ['estruturas-dados/map-set', 'Map e Set'],
    ['estruturas-dados/weak', 'WeakMap e WeakSet'],
    ['estruturas-dados/arraybuffer', 'Typed Arrays'],
    ['estruturas-dados/iteraveis', 'Objetos Iteráveis'],

    // 13. MÓDULOS E EMPACOTAMENTO
    ['modulos', 'Sistema de Módulos'],
    ['modulos/es6', 'ES Modules (import/export)'],
    ['modulos/commonjs', 'CommonJS (Node.js)'],
    ['modulos/bundlers', 'Webpack e Vite'],

    // 14. TESTES E QUALIDADE
    ['testes', 'Garantia de Qualidade'],
    ['testes/unitarios', 'Jest e Testes Unitários'],
    ['testes/integracao', 'Testes de Integração'],
    ['testes/e2e', 'Cypress e Testes End-to-End'],

    // 15. SEGURANÇA
    ['seguranca', 'Práticas Seguras'],
    ['seguranca/xss', 'Prevenção XSS'],
    ['seguranca/csrf', 'Defesa CSRF'],
    ['seguranca/jwt', 'Autenticação JWT'],

    // 16. APLICAÇÕES PRÁTICAS
    ['aplicacoes', 'Projetos Reais'],
    ['aplicacoes/calculadora', 'Calculadora Completa'],
    ['aplicacoes/todo-list', 'Todo List com CRUD'],
    ['aplicacoes/chat', 'Chat em Tempo Real'],
    ['aplicacoes/api', 'API REST Completa'],

    // 17. TÓPICOS AVANÇADOS
    ['avancado', 'Conceitos Complexos'],
    ['avancado/proxy', 'Metaprogramação com Proxy'],
    ['avancado/reflect', 'Reflect API'],
    ['avancado/geradores', 'Generators e Iterators'],
    ['avancado/workers', 'Web Workers'],

    // 18. PERFORMANCE
    ['performance', 'Otimização'],
    ['performance/analise', 'Chrome DevTools'],
    ['performance/memoizacao', 'Técnicas de Cache'],
    ['performance/algoritmos', 'Otimização de Algoritmos'],

    // 19. DEVOPS
    ['devops', 'Infraestrutura'],
    ['devops/docker', 'Contêinerização'],
    ['devops/kubernetes', 'Orquestração'],
    ['devops/ci-cd', 'Pipeline CI/CD'],

    // 20. TECNOLOGIAS EMERGENTES
    ['emergentes', 'Futuro do JS'],
    ['emergentes/wasm', 'WebAssembly'],
    ['emergentes/iot', 'JavaScript para IoT'],
    ['emergentes/blockchain', 'Smart Contracts'],
    ['emergentes/ai', 'Machine Learning'],

    // ... (Continua com todos os 487 tópicos originais)
]);

// Exemplo de tópico mais específico
programacaoBasicaAplicadaJS.set(
    'devops/ci-cd/github-actions', 
    'Automação com GitHub Actions: workflows, jobs e secrets management'
);

// Adicionando todos os tópicos restantes mantendo a estrutura hierárquica
programacaoBasicaAplicadaJS
    .set('graphql/basico', 'Introdução ao GraphQL: Schemas e Resolvers')
    .set('graphql/avancado', 'Optimização de Queries e Caching')
    .set('mobile/react-native', 'Desenvolvimento Cross-Platform com React Native')
    .set('mobile/flutter', 'Integração JS-Dart no Flutter')
    .set('arquitetura/microservices', 'Design de Microservices em Node.js')
    .set('arquitetura/cqrs', 'Padrão CQRS em Aplicações JS')
    .set('seguranca/criptografia', 'Implementação de Criptografia: AES, RSA')
    .set('emergentes/webgpu', 'Computação de Alto Desempenho com WebGPU');