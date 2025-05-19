const Textos = new Map([

    // fundamentos
    ['introducao', `JavaScript é uma das linguagens de programação mais amplamente utilizadas no desenvolvimento moderno. Inicialmente concebida para rodar no navegador e manipular elementos da página (DOM), evoluiu para um ecossistema robusto que cobre desde o frontend até o backend, automação, aplicações mobile e até mesmo IoT e machine learning.`],
    ['introducao_o_que_e_js', `JavaScript é uma linguagem de programação interpretada, de alto nível, dinâmica e multiparadigma. É executada primariamente por engines embutidas em navegadores, como V8 (Chrome), SpiderMonkey (Firefox) e JavaScriptCore (Safari). Suporta orientação a objetos, programação funcional e imperativa. Sua principal característica é a manipulação assíncrona de eventos e objetos do ambiente de execução.`],
    ['introducao_para_que_serve', `JavaScript é utilizado principalmente para:
    Manipulação da interface e interação com usuários no navegador (frontend);
    Construção de aplicações web completas com frameworks como React, Angular, Vue;
    Desenvolvimento backend com Node.js;
    Automação de processos (scripting);
    Criação de aplicações mobile (React Native, Ionic);
    Desenvolvimento de jogos e visualizações gráficas com WebGL e Canvas;
    Comunicação assíncrona com servidores via APIs REST ou GraphQL.`],
    ['introducao_client_server', `No cliente (frontend), JavaScript manipula DOM, lida com eventos e realiza requisições assíncronas (AJAX/fetch). Já no servidor (backend), com Node.js, gerencia conexões, I/O assíncrono, integra com bancos de dados e serve APIs. Ambos os ambientes compartilham a linguagem, mas possuem APIs distintas e responsabilidades completamente diferentes. No cliente, é limitado pelo sandbox do navegador; no servidor, possui acesso ao sistema de arquivos, rede e recursos nativos.`],
    ['introducao_diferencas_linguagens', `Comparado a linguagens como Java, C# ou Python:
    JavaScript é interpretado em tempo de execução, enquanto Java/C# são compilados para bytecode;
    É dinamicamente tipado, o que acelera prototipagem mas reduz segurança em tempo de compilação;
    Possui herança baseada em protótipos, não em classes tradicionais (apesar de "class" ter sido introduzido no ES6 como açúcar sintático);
    O modelo de concorrência é baseado em event loop e callbacks/promises/async-await, não em threads;
    A tipagem é fraca e permissiva (ex: "[]" + "{}" resulta em "[object Object]").`],
    ['introducao_caracteristicas', `JavaScript é:
    Dinâmica: tipos de variáveis podem mudar em tempo de execução;
    Interpretada: não há necessidade de compilação prévia, o código é executado diretamente pela engine;
    Prototype-based: objetos podem herdar diretamente de outros objetos via cadeia de protótipos, diferente da herança clássica;
    First-class functions: funções são objetos, podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções;
    Event-driven e assíncrona por natureza, com foco na não-bloqueante via "Promise" e "async/await";
    Closures e escopos léxicos são fundamentos de seu modelo de encapsulamento.`],
    ['introducao_mitos_realidade', `Mitos comuns:
        JavaScript é só para websites simples. — Falso: JS roda desde sistemas de produção em larga escala até aplicações embarcadas.
        Não é uma linguagem séria. — Errado: corporações como Netflix, PayPal, Uber e Google usam JS em produção crítica.
        É fraca porque não tem tipos. — A tipagem dinâmica é uma escolha de design que privilegia agilidade; pode ser mitigada com TypeScript.
        JS é igual a Java. — Apenas o nome é semelhante; o design, sintaxe e semântica são radicalmente diferentes.
    Realidade:
    JavaScript é uma linguagem moderna, extremamente flexível, com uma comunidade gigantesca e um ecossistema que dita o ritmo da inovação em desenvolvimento web.
`]

    // historia
    ['historia_js', `A história do JavaScript é marcada por uma evolução rápida e adaptativa. De um script simples de validação de formulários, tornou-se uma linguagem de propósito geral. Sua trajetória acompanha a própria evolução da Web, ganhando recursos, performance e papel estratégico tanto no frontend quanto no backend.`],
    ['historia_nascimento', `JavaScript foi criado em 1995 por Brendan Eich, em apenas 10 dias, enquanto trabalhava na Netscape. O nome original era "Mocha", depois "LiveScript", até ser renomeado para "JavaScript" numa jogada de marketing para aproveitar a popularidade do Java. Sua função inicial era permitir interatividade básica em páginas web.`],
    ['historia_padronizacao', `Com o crescimento da Web, surgiu a necessidade de padronizar o comportamento da linguagem. Em 1997, o JavaScript foi submetido à ECMA International, que criou o padrão ECMAScript (ES). A padronização visava garantir que diferentes implementações da linguagem (como nos navegadores) compartilhassem a mesma base sem divergências críticas.`],
    ['historia_versionamento', `O ECMAScript evoluiu através de versões:
        ES3 (1999): amplamente suportado, consolidou a linguagem;
        ES5 (2009): adicionou "strict mode", "JSON", métodos funcionais em arrays;
        ES6 / ES2015: revolução sintática com "let", "const", arrow functions, classes, modules, promises;
        ES2016+ (ES7, ES8, ...) até ES2025: evolução anual, com async/await, optional chaining, nullish coalescing, top-level await, temporal API, etc.
    Cada versão busca modernizar a linguagem sem quebrar compatibilidade retroativa.`],
    ['historia_browsers', `Durante os anos 2000, os navegadores implementavam JavaScript de forma inconsistente, causando dores de cabeça para desenvolvedores. Essa fragmentação levou ao surgimento de bibliotecas como jQuery, que abstraíam essas diferenças. A "guerra dos browsers" impulsionou a inovação, mas também destacou a importância da padronização e das engines mais eficientes, como a V8 da Google.`],
    ['historia_node', `Em 2009, Ryan Dahl criou o Node.js, que permitiu a execução de JavaScript fora do navegador, usando a engine V8 do Chrome. Com isso, JS deixou de ser uma linguagem exclusivamente de frontend e passou a dominar também o backend, permitindo aplicações fullstack com uma única linguagem. Node popularizou o modelo de I/O assíncrono, escalável e não-bloqueante.`],
    ['historia_modernizacao', `A partir do ES6 (2015), o JavaScript passou por uma modernização significativa. Introduziu-se uma sintaxe mais limpa, modularização nativa, classes como açúcar sintático, destructuring, template literals e recursos assíncronos modernos. Essa evolução continua até hoje, com novos recursos sendo adicionados anualmente, transformando o JS numa linguagem moderna, poderosa e altamente expressiva.`],
    // ambientes
    ['ambiente_execucao', `JavaScript pode ser executado em dois ambientes principais: navegadores (frontend) e servidores (Node.js). Ambos compartilham a linguagem base (ECMAScript), mas fornecem APIs e contextos de execução distintos. Compreender essas diferenças é crucial para escrever código portável, seguro e otimizado para cada cenário.`],
    ['ambiente_browser', `No navegador, o JavaScript opera em um ambiente controlado com acesso a:
    DOM (Document Object Model): manipulação da estrutura HTML;
    BOM (Browser Object Model): interação com o navegador (history, location, screen);
    Eventos: modelo assíncrono de manipulação de interações do usuário (clicks, scroll, teclado).
Esse ambiente é restrito por questões de segurança (sandboxing) e sujeito a políticas como Same-Origin e CORS.`],
    ['ambiente_node', `Node.js fornece um ambiente de execução no lado do servidor, sem acesso ao DOM, mas com APIs nativas como:
        Módulos (CommonJS e ESModules);
        Sistema de arquivos (fs);
        Gerenciamento de processos, streams, buffers;
        Rede: sockets, HTTP, WebSocket;
        Processo global ("process", "global", "__dirname").
    Ideal para aplicações de alta concorrência, APIs REST, CLI tools, servidores Web e microserviços.`],
    ['ambiente_diferencas_api', `Diferenças fundamentais entre os ambientes:
        "window" (browser) vs "global" (Node.js): escopos globais distintos;
        "document", "alert", "navigator": exclusivos do navegador;
        "require()" e "module.exports": CommonJS em Node.js;
        "import/export": ESModules, com suporte em ambos ambientes (com limitações e configuração);
        Timers e event loop são implementados diferentemente sob o capô.
    Essas APIs moldam o comportamento do JS e afetam portabilidade de código.`],
    ['ambiente_limitacoes', `No browser, as limitações envolvem:
        Sem acesso ao sistema de arquivos ou rede arbitrária (segurança);
        Restrições de CORS e políticas de sandbox;
        Sem acesso nativo a threads (até Web Workers);
        APIs assíncronas orientadas a eventos.

    No Node.js, as limitações são:
        Sem acesso ao DOM ou eventos de UI;
        Execução limitada ao terminal/servidor;
        Necessidade de gerenciamento explícito de dependências e modularização;
        Bloqueios podem afetar performance se não for usado corretamente o modelo assíncrono.`],
    ['ambiente_use_cases', `Casos típicos:
    Browser:
      SPAs (Single Page Applications);
      PWAs (Progressive Web Apps);
      Interações ricas com o usuário.

    Node.js:
      APIs REST/GraphQL;
      SSR (Server-Side Rendering) com frameworks como Next.js;
      Ferramentas de linha de comando (CLI);
      Microserviços, automação, WebSockets.

    Híbridos:
      SSR vs CSR: trade-offs entre renderização no servidor (melhor para SEO) e no cliente (melhor UX reativa).
      Isomorfismo com frameworks que compartilham código entre backend e frontend.`],

    // sintaxe

    ['sintaxe_basica', `A sintaxe do JavaScript é inspirada em C, mas com nuances específicas que impactam diretamente o comportamento do código. Entender sua base léxica, estrutura de blocos e regras implícitas como o ASI é fundamental para escrever código robusto e evitar bugs silenciosos.`],
    ['sintaxe_tokens', `Tokens são as menores unidades significativas na linguagem. Em JavaScript, os principais tipos incluem:
    Identificadores: nomes de variáveis, funções, classes (e.g., "myVar");
    Literals: valores constantes (e.g., "42", ""texto"", "true");
    Delimitadores: símbolos que estruturam o código ("{}", "[]", "()", ";", ",");
    Operadores: "+", "-", "==", "===", "=>", entre outros.
Esses elementos são definidos por regras do léxico da linguagem, ignorando espaços em branco e comentários.`],
    ['sintaxe_estrutura_codigo', `O código JavaScript é composto por:
    Instruções (statements): comandos que executam ações (e.g., "let x = 10;");
    Blocos (blocks): agrupamentos de instruções entre chaves "{ ... }";
    Declarações: instruções especiais que introduzem variáveis, funções ou classes ("var", "let", "const", "function", "class");
A separação em blocos é fundamental para escopo e controle de fluxo.`],
    ['sintaxe_terminador_linha', `JavaScript possui o mecanismo de ASI (Automatic Semicolon Insertion), que insere ";" automaticamente em pontos determinados do código. Isso evita erros em muitos casos, mas pode causar comportamento inesperado:
return
  42;
// retorna undefined, pois o ";" é inserido após o return
Portanto, embora opcional, o uso explícito de ponto e vírgula é considerado uma boa prática em ambientes de produção.`],
    ['sintaxe_case_sensitive', `JavaScript diferencia letras maiúsculas de minúsculas. "myVariable", "MyVariable" e "MYVARIABLE" são identificadores distintos. Isso se aplica a variáveis, funções, nomes de classes, propriedades e palavras-chave. A inconsistência de capitalização é uma das causas mais comuns de erros em tempo de execução.`],
    ['sintaxe_espacos', `Espaços em branco, tabulações e quebras de linha são, em geral, ignorados pelo interpretador, exceto em contextos como:
    Separação de tokens ("let x = 1" vs "letx=1");
    Formatação de strings literais (""linha\noutra linha"");
    Posição de operadores ou blocos condicionais.
A indentação não é obrigatória, mas é crítica para legibilidade e manutenção.`],
    ['sintaxe_expressao_instrucao', `    Expressões (Expressions): produzem um valor (e.g., "2 + 2", "x * y", ""abc".length");
    Instruções (Statements): executam uma ação (e.g., "if", "for", "return", "let x = 5");
Expressões podem estar dentro de instruções, mas o inverso não é verdadeiro. Compreender essa distinção é essencial para escrever código sintaticamente correto.`],
    ['sintaxe_erros_comuns', `Erros frequentes de sintaxe incluem:
    Esquecer "}" ou ")";
    Declarar variáveis sem "let", "const" ou "var" (modo strict lança erro);
    Confundir atribuição ("=") com comparação ("==", "===");
    Falta de ponto e vírgula em instruções sensíveis ao ASI;
    Uso de palavras reservadas como identificadores ("class", "await", "yield");
Esses erros são geralmente detectados em tempo de parsing pelo interpretador.`],
    //comentarios


    ['comentarios', `Comentários em JavaScript são usados para inserir anotações no código, facilitando a compreensão e a manutenção. Eles não são executados e servem para explicar o que o código faz ou registrar informações importantes para outros desenvolvedores (ou para você mesmo no futuro).`],
    ['comentarios_linha', `Comentários de linha são usados para anotar pequenas explicações ou desabilitar uma linha de código temporariamente. Eles são feitos com duas barras ("//"). Tudo após essas barras na linha é ignorado pelo interpretador.
Exemplo:
// Isso é um comentário de linha
let x = 10; // Definindo o valor de x`],
    ['comentarios_bloco', `Comentários de bloco permitem descrever partes maiores do código. Eles começam com "/ e terminam com /". São úteis quando se deseja comentar várias linhas de código ao mesmo tempo ou quando uma explicação extensa é necessária.
Exemplo:
/*
  Este é um comentário de bloco.
  Ele pode se estender por várias linhas.
  Ele é útil quando a explicação precisa de mais detalhes.
*/
let y = 20;`],
    ['comentarios_boas_praticas', `Boas práticas ao comentar código incluem:
    Evitar comentários óbvios. Comente o "porquê" do código, não o "como" (exemplo: "O loop percorre o array" não é necessário, mas "Este loop garante que o código só rode quando a condição X for verdadeira" é útil).
    Mantenha os comentários atualizados. Comentários desatualizados podem ser mais prejudiciais do que a ausência deles.
    Utilize comentários para explicar escolhas complexas ou não triviais, como otimizações ou abordagens não comuns.
    Evite comentários redundantes ou excessivos que apenas “decorem” o que o código já diz.`],
    ['comentarios_documentacao', `Padrões de documentação como o JSDoc são essenciais para garantir a clareza e a manutenção do código. O JSDoc é uma ferramenta para gerar automaticamente documentação a partir dos comentários do código.
Exemplo básico de uso:
/
 * Soma dois números.
 * @param {number} a     O primeiro número.
 * @param {number} b     O segundo número.
 * @returns {number} A soma dos dois números.
 */
function soma(a, b) {
  return a + b;
}
Esses comentários permitem gerar documentação automatizada que pode ser usada em qualquer linguagem que suporte JSDoc, além de melhorar a legibilidade do código.
`]
    // convencoes

    ['convencoes', `Convenções de código são práticas padronizadas que promovem legibilidade, consistência e manutenção facilitada. Em JavaScript, seguir convenções é especialmente importante devido à natureza dinâmica e flexível da linguagem. Equipes maduras adotam guias de estilo rígidos, suportados por ferramentas automáticas.`],
    ['convencoes_nomenclatura', `Padrões de nomenclatura em JavaScript:
    camelCase: usado para variáveis e funções (ex: "minhaVariavel", "executarTarefa()");
    PascalCase: usado para construtores e classes (ex: "MinhaClasse");
    snake_case: raramente usado em JS moderno; mais comum em dados ou APIs legadas;
    UPPER_CASE: reservado para constantes globais imutáveis (ex: "MAX_TENTATIVAS").

Consistência é essencial. Misturar estilos gera confusão e dificulta a manutenção.`],
    ['convencoes_espacos', `Espaçamento e indentação devem ser uniformes:
    Spaces vs Tabs: escolha um e mantenha em todo o projeto. A maioria das equipes modernas opta por 2 ou 4 espaços.
    Use indentação para indicar claramente blocos aninhados, como estruturas de controle, funções, callbacks, etc.

Exemplo:

function exemplo() {
  if (condicao) {
    executar();
  }
}


Use um formatador automático (como Prettier) para padronizar isso.`],
    ['convencoes_chaves', `Há dois estilos principais de posicionamento de chaves:
    Inline (K&R): mais comum em JavaScript, adota a chave na mesma linha do controle:
  
  if (condicao) {
    executar();
  }
  
    Nova Linha (Allman): menos usado, a chave abre numa nova linha:
  
  if (condicao)
  {
    executar();
  }
  

O estilo inline é padrão em praticamente todos os projetos JS modernos. Seja consistente.`],
    ['convencoes_semicolon', `O uso de ponto e vírgula ("; ") em JavaScript é opcional, mas recomendado.

Embora o mecanismo de ASI (Automatic Semicolon Insertion) adicione "; " onde necessário, ele pode falhar em cenários ambíguos:

return
  valor; // retorna undefined


Decida uma regra clara (usar sempre ou nunca) e aplique com ferramentas como ESLint/Prettier.`],
    ['convencoes_comentarios', `Comentários devem seguir um padrão claro:
    Use "//" para comentários curtos e "/ */" para documentação (ex: JSDoc);
    Alinhe visualmente com o código comentado;
    Evite comentários redundantes ou "autoexplicativos".

Exemplo válido:

// Verifica se o token expirou
if (isTokenExpired()) {
  renovarToken();
}
`],
    ['convencoes_lint', `Linters analisam o código estaticamente e impõem regras definidas. O mais usado é o ESLint, com suporte a plugins como:
    "eslint-plugin-import"
    "eslint-plugin-react"
    "@typescript-eslint"

Você pode definir regras personalizadas ou herdar de estilos populares:
    Airbnb
    StandardJS
    Google

Inclua o lint no pipeline de CI/CD.`],
    ['convencoes_formatadores', `Formatadores como Prettier automatizam o estilo do código (espaços, quebras de linha, aspas, etc.) e evitam discussões em PRs.

Diferente do ESLint (semântico), Prettier foca apenas no formato. Integre ambos:
    Use Prettier para estética;
    Use ESLint para qualidade e segurança.

Configure via ".prettierrc" e execute com hooks do Git ou em CI.`],
    ['convencoes_git', `Seguir padrões de commit melhora o histórico e permite automação (como changelogs e versionamento semântico). O mais adotado é o Conventional Commits:

Formato:
"<tipo>(escopo opcional): descrição"

Exemplos:
    "feat(api): adicionar suporte a filtros por data"
    "fix(auth): corrigir bug no token JWT"
    "chore(deps): atualizar dependências do projeto"

Use ferramentas como "commitlint" e "cz-cli" para reforçar isso via CLI.
`]

    // Variáveis e Constantes
    ['variaveis_introducao', `Variáveis são os blocos fundamentais de armazenamento de dados em qualquer linguagem de programação. Em JavaScript, variáveis são usadas para guardar valores que podem ser acessados e manipulados posteriormente, tornando o código dinâmico e reutilizável.`],
    ['variaveis_o_que_sao', `Variáveis são identificadores que apontam para valores armazenados na memória. Elas permitem que você nomeie dados para reutilização e manipulação ao longo do tempo de execução do seu programa.
Exemplo:

let nome = 'Alice';
let idade = 30;
`],
    ['variaveis_por_que_usar', `Usamos variáveis para:
    Evitar repetição de valores literais;
    Tornar o código mais legível e semântico;
    Armazenar resultados intermediários de operações;
    Permitir abstração, modularidade e reuso de lógica.

Elas são essenciais para controle de fluxo, funções, manipulação de dados e mais.`],
    ['variaveis_como_funcionam', `Quando uma variável é criada, o engine do JavaScript aloca um espaço na memória e associa um identificador a esse endereço. O tipo de dado e o modo como ele é armazenado (valor ou referência) influenciam o comportamento da variável em tempo de execução.`],
    ['variaveis_enderecamento', `Variáveis em JavaScript operam com dois modelos principais:
    Por valor: tipos primitivos (Number, String, Boolean, etc.) — o valor é copiado;
    Por referência: objetos, arrays e funções — a variável armazena um ponteiro para o local na memória onde o dado está.

Modificações em variáveis por referência afetam todas as variáveis que apontam para o mesmo objeto.`],
    ['variaveis_declaracao', `Declaração é o ato de criar uma variável (sem atribuir valor).  
Inicialização é quando se fornece um valor a ela.

Exemplo:

let a;       // Declaração
a = 10;      // Inicialização
let b = 20;  // Declaração + Inicialização


Em JavaScript, variáveis podem ser declaradas com "var", "let" ou "const", cada uma com escopo e comportamento distintos.`],
    ['variaveis_atribuicao', `Atribuição por valor copia o dado (tipos primitivos), enquanto por referência copia o ponteiro (objetos e arrays).

Exemplo por valor:

let x = 10;
let y = x;
y++; // x continua 10


Exemplo por referência:

let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 99; // obj1.a também será 99
`],
    ['variaveis_identificadores', `Identificadores são os nomes das variáveis e seguem regras:
    Devem começar com letra, "$" ou "_";
    Não podem começar com número;
    Não podem ser palavras reservadas (como "if", "while", "class", etc.);
    Case-sensitive: "valor" e "Valor" são diferentes.

Boas práticas:
    Use nomes semânticos e descritivos;
    Prefira inglês técnico padrão do ecossistema.`],
    ['variaveis_tipos', `Os tipos de dados em JavaScript influenciam diretamente o comportamento das variáveis:
    Primitivos: "string", "number", "boolean", "null", "undefined", "symbol", "bigint";
    Referência: "object", "array", "function", "map", "set", etc.

JavaScript é dinamicamente tipado, o que significa que o tipo é inferido e pode mudar em tempo de execução:

let valor = 42;      // number
valor = 'quarenta';  // agora é string
`],
    ['variaveis_constantes', `Constantes são declaradas com "const" e devem ser inicializadas na declaração. Elas não podem ser reatribuídas, mas referências mutáveis ainda podem ser modificadas.

Exemplo:

const PI = 3.14;
PI = 3.14159; // Erro

const config = { debug: true };
config.debug = false; // Válido, pois o objeto continua o mesmo


Use "const" como default e só use "let" se houver necessidade de reatribuição.
`]
    // closures
    ['escopo_de_closures', `Escopo é o contexto onde variáveis e funções são acessíveis. Em JavaScript, existem três níveis principais de escopo:
    Global: acessível de qualquer lugar do código;
    De função: acessível apenas dentro da função onde foi declarada;
    De bloco: válido dentro de blocos delimitados por chaves ("{}"), como em "if", "for", etc.

JavaScript usa escopo léxico (lexical scoping): funções acessam variáveis do escopo onde foram definidas, não onde são executadas.
Closures exploram esse comportamento.`],
    ['closures', `Closures são uma combinação de uma função com o escopo léxico em que ela foi criada. Isso significa que uma função interna "lembra" das variáveis do seu escopo externo, mesmo após esse escopo ter sido encerrado.

Closures são fundamentais para encapsulamento, funções fábrica, currying, memoização e programação funcional em geral.`],
    ['definicao_closures', `Formalmente, um closure é quando uma função interna mantém acesso ao escopo da função externa mesmo depois que essa função externa terminou de executar.

Esse comportamento ocorre porque o motor JavaScript mantém o ambiente léxico "vivo" se ainda houver referências à função interna.

Exemplo:

function criarContador() {
  let count = 0;
  return function () {
    return ++count;
  }
}

const contador = criarContador();
contador(); // 1
contador(); // 2

"count" permanece acessível graças ao closure.`],
    ['exemplo_closures', `Exemplo avançado de closure com encapsulamento de estado:

function criarUsuario(nome) {
  let senha = '123456'; // variável privada

  return {
    getNome: () => nome,
    autenticar: (s) => s === senha,
    alterarSenha: (nova) => senha = nova
  };
}

const usuario = criarUsuario('Bill');
usuario.getNome();           // 'Bill'
usuario.autenticar('123456'); // true
usuario.senha;               // undefined (não acessível diretamente)


Isso simula encapsulamento típico de orientação a objetos, usando closures.`],
    ['uso_closures', `Closures são frequentemente usados com funções anônimas e callbacks. São úteis para:
    Manter estado interno em funções reutilizáveis;
    Criar funções parcialmente aplicadas (currying);
    Adiar execução mantendo contexto;

Exemplo com função anônima:

function delayedLog(msg) {
  setTimeout(() => {
    console.log('Mensagem:', msg);
  }, 1000);
}

delayedLog('Olá Closure!');


A função anônima passada ao "setTimeout" captura a variável "msg", mantendo seu valor mesmo após o término da execução de "delayedLog".
`]
    // contexto

    ['contexto_this', `O valor de "this" em JavaScript depende de como uma função é chamada, não de onde ou como ela foi definida. Isso torna seu comportamento poderoso, mas também propenso a confusão.

"this" representa o contexto de execução atual — ou seja, o objeto "dono" da execução daquele código. Ele varia conforme o modo de chamada: global, método de objeto, função normal, arrow function, entre outros.

Importante: "this" não aponta para a função em si, nem para seu escopo léxico (exceto em arrow functions).`],
    ['this_global', `No escopo global:
    Em navegadores, "this" se refere ao objeto "window".
    Em Node.js, no topo de um módulo, "this" é "{}" (não "global").

Exemplo (navegador):

console.log(this); // window
function globalFunc() {
  console.log(this); // window (modo não estrito)
}
globalFunc();


No modo estrito ("'use strict'"), "this" será "undefined" em funções globais:

'use strict';
function strictFunc() {
  console.log(this); // undefined
}
strictFunc();
`],
    ['this_em_objetos', `Quando uma função é chamada como método de um objeto, "this" aponta para o objeto que faz a chamada.

Exemplo:

const usuario = {
  nome: 'Ana',
  saudacao() {
    return 'Olá, ' + this.nome;
  }
};

usuario.saudacao(); // "Olá, Ana"


Se a função for desacoplada do objeto, "this" se perde:

const f = usuario.saudacao;
f(); // undefined (ou erro em modo estrito)


Isso pode ser contornado com ".bind()", ".call()" ou ".apply()".`],
    ['this_em_funcoes', `Em funções normais, o valor de "this" depende de como a função é invocada:
    No contexto global: "this" é "window" (ou "global" no Node) — a menos que o modo estrito esteja ativo;
    Em métodos de objeto: "this" é o objeto chamador;
    Em eventos DOM: "this" é o elemento que disparou o evento.

Atenção: ao passar funções como callbacks, o contexto original de "this" pode ser perdido.

Exemplo:

function log() {
  console.log(this);
}
log(); // window (modo não estrito)

const obj = { id: 1, log };
obj.log(); // obj


Problemas comuns:

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this); // o botão
});

btn.addEventListener('click', () => {
  console.log(this); // escopo léxico, provavelmente window
});


Ou seja: arrow functions não possuem seu próprio this, elas herdam o valor do escopo onde foram definidas.
`]
    // escopo
    ['escopo', `Escopo define onde variáveis e funções estão visíveis e acessíveis. Em JavaScript, o escopo é léxico (determinado pela estrutura do código no momento da definição) e pode ser:
    Global
    De função
    De bloco

O controle de escopo é essencial para evitar conflitos de nomes, proteger variáveis e garantir modularidade e manutenção do código.`],
    ['escopo_conceito', `Escopo Léxico significa que o escopo de uma variável é resolvido com base em onde ela foi declarada no código, e não onde ela é usada.

Exemplo:

function externa() {
  const a = 1;
  function interna() {
    console.log(a); // acessa 'a' por escopo léxico
  }
  interna();
}


Escopo Dinâmico (não usado no JavaScript) resolveria "a" com base em quem chama a função, o que não é o caso aqui.`],
    ['escopo_local', `Variáveis declaradas dentro de funções ou blocos com "let" ou "const" possuem escopo local, ou seja, só são acessíveis dentro do bloco onde foram declaradas.

Exemplo:

function exemplo() {
  let x = 10;
  console.log(x); // OK
}
console.log(x); // ReferenceError
`],
    ['escopo_global', `Variáveis declaradas fora de qualquer função ou bloco pertencem ao escopo global.

    Em navegadores, isso significa que elas se tornam propriedades do objeto "window".
    Em Node.js, ficam no módulo atual, não no objeto global.

Evitar poluir o escopo global é uma boa prática fundamental.

Exemplo:

var x = 5;
console.log(window.x); // 5 (em navegador)
`],
    ['escopo_funcao', `Funções criam escopos isolados. Variáveis declaradas dentro de uma função não são acessíveis de fora dela. Esse isolamento é útil para evitar conflitos e para criar closures.

Exemplo:

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
console.log(resultado); // ReferenceError
`],
    ['escopo_de_execucao', `O escopo de execução é criado sempre que uma função é invocada. Ele define o ambiente onde variáveis são resolvidas, e é diferente da pilha de execução, que trata de ordem de chamadas.

Cada chamada cria um contexto de execução, com escopo próprio.`],
    ['contexto_de_execucao', `O contexto de execução representa o ambiente no qual o código JavaScript é avaliado e executado.

Existem três tipos principais:
    Contexto Global
    Contexto de Função
    Contexto de Avaliação (por "eval()")

Cada contexto tem uma variável especial: "this", além de seu escopo léxico.`],
    ['pilha_de_execucao', `A pilha de execução (call stack) é uma estrutura de dados que gerencia as funções em execução.

    A função global entra primeiro;
    Cada nova função chamada empilha um novo contexto;
    Ao retornar, o contexto é desempilhado.

Exemplo:

function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log('Executando C');
}
a();
// Pilha: global → a → b → c
`],
    ['empilhamento_de_execucao', `O empilhamento de funções define a ordem da execução de chamadas:

1. A função é invocada.
2. Um novo contexto de execução é criado e empilhado.
3. Após terminar, o contexto é removido da pilha.
4. A execução retorna ao ponto anterior.

Isso influencia diretamente o comportamento assíncrono, exceções e stack traces.
`]
    // escopo de variaveis
    ['escopo_variaveis', `O escopo de variáveis em JavaScript determina onde elas são visíveis e acessíveis no código.

Existem três formas principais de declaração de variáveis, cada uma com regras distintas de escopo:
    "var": escopo de função.
    "let" e "const": escopo de bloco.

Compreender essas diferenças é essencial para evitar bugs relacionados a visibilidade, shadowing e hoisting.`],
    ['escopo_bloco', `Com "let" e "const", variáveis respeitam escopo de bloco, ou seja, ficam visíveis apenas dentro de "if", "for", "while", etc.

Exemplo:

if (true) {
  let x = 42;
}
console.log(x); // ReferenceError


Por outro lado, "var" ignora o escopo de bloco e "vaza" para o escopo de função mais próximo:

if (true) {
  var y = 10;
}
console.log(y); // 10
`],
    ['escopo_aninhado', `Escopos podem ser aninhados. Um escopo interno tem acesso aos identificadores declarados em escopos externos, mas não o contrário.

Exemplo:

function externa() {
  const a = 1;
  function interna() {
    const b = 2;
    console.log(a); // 1 — acesso ao escopo externo
  }
  interna();
  console.log(b); // ReferenceError — escopo interno não acessível de fora
}


Isso forma uma cadeia de escopos léxicos (scope chain), usada na resolução de nomes.`],
    ['escopo_shadowing', `Shadowing ocorre quando uma variável em um escopo interno tem o mesmo nome de outra em um escopo externo. A variável interna "sombra" a externa.

Exemplo:

let valor = 10;
function exemplo() {
  let valor = 20; // shadowing
  console.log(valor); // 20
}
exemplo();


Evitar shadowing excessivo melhora a legibilidade e reduz ambiguidades. Linters como ESLint podem alertar para casos perigosos de shadowing.`],
    ['escopo_resolucao', `A resolução de identificadores segue a cadeia léxica de escopos: o JavaScript procura o identificador no escopo mais interno e, se não encontrar, sobe para escopos externos.

Ordem de resolução:
1. Escopo local (mais interno);
2. Escopos pai, até o escopo global;
3. Se não encontrado: "ReferenceError".

Exemplo:

let a = 1;
function teste() {
  let b = 2;
  function interna() {
    console.log(a, b); // 1, 2 — resolução via cadeia de escopos
  }
  interna();
}
teste();


Essa busca é estática e ocorre na hora da definição do código, não na execução.
`]
    // var
    ['var_declaracao', `A palavra-chave "var" é uma das formas mais antigas de declarar variáveis em JavaScript (anterior ao ES6). Apesar de ainda ser suportada, seu uso é desencorajado em código moderno por conta de comportamentos perigosos e imprevisíveis relacionados a escopo e hoisting.`],
    ['var_sintaxe', `A sintaxe básica do "var" é direta:

var nomeDaVariavel;
var outraVariavel = 10;

Uma variável pode ser declarada sem inicialização, sendo automaticamente atribuída como "undefined".`],
    ['var_inicializacao_opcional', `Com "var", a inicialização é opcional. Se não fornecida, a variável assume o valor "undefined".

Exemplo:

var contador;
console.log(contador); // undefined


Não declarar e tentar acessar antes do hoisting ainda leva a comportamento confuso.`],
    ['var_reatribuicao', `Variáveis declaradas com "var" podem ser reatribuídas livremente dentro do seu escopo:


var nome = 'Alice';
nome = 'Bob'; // OK

Esse comportamento é comum, mas pode mascarar erros se a variável for sobrescrita involuntariamente.`],
    ['var_redeclaracao', `Com "var", é permitido redeclarar a mesma variável dentro do mesmo escopo sem erro — o que pode gerar bugs sutis:


var x = 1;
var x = 2; // permitido
console.log(x); // 2


Com "let" e "const", isso dispara um erro.`],
    ['var_escopo_funcao', `O escopo de "var" é limitado à função em que é declarado. Se declarado fora de uma função, pertence ao escopo global.

Exemplo:

function exemplo() {
  var x = 10;
}
console.log(x); // ReferenceError


Esse comportamento contrasta com "let" e "const", que respeitam o escopo de bloco.`],
    ['var_sem_escopo_bloco', `"var" ignora escopos de bloco como "if", "for", e "while". Isso pode causar vazamento de variáveis para fora do bloco:


if (true) {
  var x = 5;
}
console.log(x); // 5


Com "let" ou "const", isso resultaria em erro.`],
    ['var_colisao_global', `Variáveis globais declaradas com "var" se tornam propriedades do objeto global ("window" no navegador). Isso cria alto risco de colisão com outras variáveis globais:


var alert = 'quebrado';
console.log(window.alert); // 'quebrado', sobrescreve a função nativa!


Evitar o uso global de "var" é uma regra fundamental de boas práticas.`],
    ['var_problemas_comuns', `Problemas típicos relacionados ao uso de "var" incluem:

    Hoisting com valor "undefined" inesperado
    Shadowing silencioso (sobrescrever variáveis)
    Vazamento de escopo de bloco
    Dificuldade de manutenção e refatoração
    Colisões com variáveis globais

Por esses motivos, o uso moderno recomenda preferencialmente "let" e "const".`],
    ['var_hoisting', `Declarações com "var" sofrem hoisting: são içadas para o topo do escopo de função. No entanto, apenas a declaração é içada, não a inicialização.

Exemplo:

console.log(a); // undefined
var a = 10;


O interpretador entende como:

var a;
console.log(a); // undefined
a = 10;


Isso é fonte comum de bugs e confusão, especialmente em funções longas ou em códigos com múltiplas declarações.
`]
    // let
    ['let_declaracao', `A palavra-chave "let" foi introduzida no ECMAScript 2015 (ES6) como uma alternativa moderna ao "var", com regras de escopo mais previsíveis e seguras. É atualmente a forma recomendada de declarar variáveis mutáveis em JavaScript.`],
    ['let_sintaxe', `A sintaxe é idêntica à do "var", com a vantagem de um comportamento mais seguro:


let idade;
let nome = 'João';


Pode ser usada para declarar variáveis em qualquer escopo, inclusive dentro de blocos.`],
    ['let_inicializacao_opcional', `Assim como "var", "let" permite declarar variáveis sem inicializá-las:


let contador;
console.log(contador); // undefined


Porém, diferentemente de "const", a inicialização não é obrigatória no momento da declaração.`],
    ['let_reatribuicao', `Variáveis declaradas com "let" podem ser reatribuídas livremente dentro do mesmo escopo:


let status = 'ativo';
status = 'inativo'; // válido


Esse comportamento é adequado para casos onde o valor precisa mudar, mas ainda dentro de um escopo bem definido.`],
    ['let_nao_redeclaravel', `Diferente de "var", "let" não permite redeclarar a mesma variável no mesmo escopo:


let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared


Isso evita colisões silenciosas e favorece a consistência do código.`],
    ['let_escopo_bloco', `"let" obedece escopo de bloco (qualquer par de chaves "{...}"), diferentemente de "var", que ignora blocos:


if (true) {
  let interno = 123;
}
console.log(interno); // ReferenceError


Isso evita vazamento de variáveis para escopos indesejados e melhora o isolamento lógico.`],
    ['let_temporal_dead_zone', `Com "let", as variáveis estão sujeitas à Temporal Dead Zone (TDZ) — o período entre o início do escopo e a declaração, no qual a variável existe mas não pode ser acessada:


console.log(x); // ReferenceError
let x = 5;


Isso é diferente de "var", onde ocorre hoisting com valor "undefined". O TDZ reforça práticas mais seguras e previsíveis.`],
    ['let_em_loops', `"let" resolve corretamente o comportamento de variáveis em loops, especialmente com closures. Cada iteração de um loop com "let" cria um novo escopo de bloco:


for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 0, 1, 2


Com "var", o resultado seria 3, 3, 3 devido ao escopo de função compartilhado.`],
    ['let_em_closures', `Closures que capturam variáveis declaradas com "let" obtêm o valor corretamente por escopo, não sendo afetadas por reatribuições subsequentes:


function criarFuncoes() {
  const funcoes = [];
  for (let i = 0; i < 3; i++) {
    funcoes.push(() => console.log(i));
  }
  return funcoes;
}
const resultado = criarFuncoes();
resultado[0](); // 0
resultado[1](); // 1
resultado[2](); // 2


Esse isolamento por iteração é essencial para evitar bugs sutis com funções assíncronas.
`]
    // const
    ['const_declaracao', `"const" foi introduzido no ES6 e é usada para declarar variáveis com valor imutável de referência. Uma vez atribuído, o identificador não pode ser reatribuído, embora objetos e arrays possam ser modificados internamente.`],
    ['const_sintaxe', `A sintaxe é semelhante a "let", mas exige inicialização no momento da declaração:


const PI = 3.14;


Não é possível declarar e inicializar depois.`],
    ['constantes_naming', `Por convenção, constantes que representam valores fixos e imutáveis são escritas em MAIÚSCULAS e com underscores:


const MAX_CONNECTIONS = 100;


Essa convenção facilita a leitura e diferencia essas constantes de outras variáveis mutáveis.`],
    ['const_requer_inicializacao', `Diferente de "let", "const" exige inicialização imediata:


const idade; // SyntaxError: Missing initializer in const declaration


Isso garante que o valor esteja definido desde o início de sua vida útil.`],
    ['const_nao_reatribuivel', `Uma variável declarada com "const" não pode ser reatribuída:


const nome = 'Alice';
nome = 'Bob'; // TypeError: Assignment to constant variable.


No entanto, isso não implica imutabilidade do valor referenciado.`],
    ['const_nao_redeclaravel', `Assim como "let", "const" não permite redeclaração no mesmo escopo:


const x = 10;
const x = 20; // SyntaxError: Identifier 'x' has already been declared
`],
    ['const_escopo_bloco', `"const" respeita o escopo de bloco. Não é visível fora do bloco onde foi declarada:


{
  const interno = 123;
}
console.log(interno); // ReferenceError
`],
    ['const_temporal_dead_zone', `Assim como "let", "const" está sujeita à Temporal Dead Zone (TDZ):


console.log(token); // ReferenceError
const token = 'abc123';


A TDZ reforça a necessidade de declarar variáveis antes de usá-las.`],
    ['const_objetos', `"const" em objetos não os torna imutáveis — apenas a referência é constante. É possível alterar as propriedades internas:


const usuario = { nome: 'Ana' };
usuario.nome = 'Carla'; // válido


Isso pode causar confusão em quem assume que "const" significa imutabilidade total.`],
    ['const_arrays', `Arrays declarados com "const" permitem mutações internas:


const numeros = [1, 2, 3];
numeros.push(4); // válido
numeros[0] = 99; // válido


A proibição é contra reatribuição da variável, não contra alterações do conteúdo.`],
    ['const_congelamento', `Para tornar objetos e arrays realmente imutáveis ao usar "const", deve-se utilizar "Object.freeze()":


const config = Object.freeze({
  modo: 'prod',
  debug: false
});
config.debug = true; // silenciosamente ignorado ou erro em modo estrito


Note que o congelamento é superficial; objetos aninhados permanecem mutáveis.`],
    ['const_em_closures', `Como "const" preserva o valor e impede reatribuição, é ideal para ser usado em closures:


function criarFuncoes() {
  const resultado = [];
  for (let i = 0; i < 3; i++) {
    const valor = i;
    resultado.push(() => console.log(valor));
  }
  return resultado;
}
const funcs = criarFuncoes();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2


Essa abordagem elimina riscos de interferência externa no valor capturado pela closure.`],
    //funcionalidades
    ['constantes_composicao', `A composição de constantes pode ser utilizada para criar enumerações simuladas em JavaScript, pois a linguagem não possui suporte nativo para enums como em outras linguagens (ex: TypeScript ou Java). Utiliza-se objetos congelados para representar valores fixos e simbólicos:


const CORES = Object.freeze({
  VERMELHO: '#FF0000',
  VERDE: '#00FF00',
  AZUL: '#0000FF'
});

console.log(CORES.VERMELHO); // '#FF0000'


Essa abordagem previne alterações acidentais e torna o código mais semântico e robusto em situações que exigem categorias fixas.`],
    ['constantes_modularizacao', `Em projetos de maior escala, é essencial modularizar constantes para garantir organização, legibilidade e reuso. Isso pode ser feito criando arquivos específicos que agrupam constantes relacionadas:


// arquivo: constantes/erros.js
export const ERROS = Object.freeze({
  TIMEOUT: 'TIMEOUT',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED'
});


Separar constantes por domínio (ex: "erros.js", "cores.js", "config.js") facilita manutenção e evita conflitos de nomenclatura.`],
    ['constantes_em_modulos', `A exportação/importação de constantes é feita usando os módulos ES6. Isso permite compartilhar definições entre arquivos mantendo acoplamento mínimo e alta coesão:


// arquivo: config.js
export const CONFIG = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000
});

// uso em outro arquivo
import { CONFIG } from './config.js';

fetch(CONFIG.API_URL, { timeout: CONFIG.TIMEOUT });


Ao combinar "const" com "Object.freeze" e módulos ES6, alcança-se um modelo sólido de gestão de constantes no projeto.
`]
    // tipos de dados


    ['tipos_dados', `Em JavaScript, os tipos de dados são classificados em dois grupos principais: primitivos e objetos. Os tipos primitivos representam valores imutáveis e básicos, enquanto os objetos são estruturas complexas e mutáveis. Conhecer os tipos de dados é essencial para compreender o comportamento do JavaScript, especialmente em atribuições, comparações e manipulações de valores.`],
    ['tipos_dados_primitivos', `Os tipos primitivos em JavaScript incluem: 
    String: texto
    Number: números inteiros ou decimais
    Boolean: verdadeiro ou falso
    Null: ausência intencional de valor
    Undefined: valor indefinido
    Symbol: identificadores únicos
    BigInt: inteiros de precisão arbitrária
Eles são imutáveis e armazenados por valor.`],

    // tipos primitivos

    ['variaveis_tipos_primitivos', `Os tipos primitivos são fundamentais para a linguagem. Eles não possuem métodos ou propriedades próprias, mas o JavaScript internamente os envolve com objetos temporários quando necessário. Essa abordagem permite chamadas como 'texto'.length, mesmo que 'texto' seja uma string primitiva.`],
    // string
    ['tipos_dados_string', `O tipo String representa sequências de caracteres Unicode. Strings são imutáveis, e quaisquer operações que pareçam alterá-las retornam uma nova string ao invés de modificar a original.`],
    ['string_criar', `Strings podem ser criadas usando:
    Aspas simples: 'texto'
    Aspas duplas: "texto"
    Template literals: "texto"
Os template literals permitem interpolação de variáveis: "Olá, ${nome}"`],
    ['string_escape', `Caracteres especiais podem ser representados com sequências de escape:
    \n: nova linha
    \t: tabulação
    \": aspas duplas
    \\uXXXX: caractere Unicode
Ex: "Linha 1\nLinha 2"`],
    // metodos da string

    ['string_metodos_basicos', `Métodos básicos de string incluem:
    ".length": tamanho da string
    ".toUpperCase()", ".toLowerCase()": transformações de capitalização`],
    ['string_metodos_busca', `Métodos de busca:
    ".indexOf()": retorna o índice da primeira ocorrência
    ".lastIndexOf()": última ocorrência
    ".includes()": verifica se contém um trecho`],
    ['string_metodos_extracao', `Extração de substrings:
    ".slice(início, fim)"
    ".substring(início, fim)"
    ".substr(início, tamanho)"`],
    ['string_metodos_modificacao', `Modificação de strings:
    ".replace(busca, novoValor)"
    ".trim()": remove espaços
    ".padStart()", ".padEnd()": preenchimento`],
    ['string_metodos_divisao', `    ".split(separador)": divide a string em um array com base no separador`],
    ['string_concat', `Concatenação pode ser feita com o operador "+" ou com ".concat()".`],
    ['string_interpolacao', `Template literals permitem interpolação:
"Olá, \${nome}!"
Permite expressões complexas e multilinha.`],
    ['string_comparacao', `Comparações de strings:
    "==" vs "==="
    ".localeCompare()" para ordenações com regras linguísticas`],
    ['string_tamanho', `Utilize ".length" para obter o número de caracteres da string.`],
    //number
    ['tipos_dados_number', `O tipo Number representa números com ou sem ponto decimal (IEEE 754 de 64 bits).`],
    ['number_criar', `Criação de números:
    Literais: 10, 3.14
    Notação científica: 1e3 (equivale a 1000)`],
    // number propriedades
    ['number_limites', `Propriedades especiais:
    Number.MAX_VALUE, Number.MIN_VALUE
    Infinity, -Infinity
    NaN: Not a Number`],
    // metodos de number
    ['number_metodos_formatacao', `    ".toFixed(n)": fixa casas decimais
    ".toPrecision(n)": precisão total
    ".toLocaleString()": formatação localizada`],
    ['number_operacoes_basicas', `Operações:
    Soma (+), Subtração (-), Multiplicação (*), Divisão (/)`],
    ['number_operacoes_avancadas', `    Math.pow(base, expoente)
    Math.sqrt(x): raiz quadrada
    Math.random(): número aleatório entre 0 e 1`],
    ['number_comparacao', `Comparações com operadores relacionais ou métodos como "Object.is(a, b)"`],
    // boolean
    ['tipos_dados_boolean', `O tipo Boolean representa valores lógicos: "true" ou "false"`],
    ['boolean_criar', `Pode ser criado com:
    Literais: true, false
    Construtor: new Boolean(valor) [não recomendado em geral]`],
    ['boolean_valores_falsy', `Valores Falsy: "false", "0", "NaN", """", "null", "undefined"
Tudo o mais é considerado truthy.`],
    ['boolean_comparacao', `    "==", "===" para comparação lógica
    "!", "!!" para coerção booleana explícita`],
    // null
    ['tipos_dados_null', `Null representa intencionalmente a ausência de valor. Tipo primitivo com valor único: "null"`],
    ['null_significado', `Utilizado quando se quer indicar "nenhum valor"`],
    ['null_comparacao', `"null == undefined" é true
"null === undefined" é false`],
    ['null_vs_undefined', `null: atribuído intencionalmente
undefined: ausência de atribuição`],
    // undefined
    ['tipos_dados_undefined', `Undefined é o valor padrão de variáveis não inicializadas.`],
    ['undefined_origem', `Variáveis não atribuídas, funções sem retorno explícito, parâmetros não passados.`],
    ['undefined_comparacao', `"undefined == null" → true
"undefined === null" → false`],
    // symbol
    ['tipos_dados_symbol', `Symbol é um tipo primitivo que representa identificadores únicos e imutáveis.`],
    ['symbol_criar', `    Symbol()
    Symbol.for(chave): símbolo global reutilizável`],
    // propriedades de symbol
    ['symbol_usos', `Usos comuns:
    Propriedades únicas de objetos
    Definição de iteradores personalizados`],
    ['symbol_descricao', `Symbols podem ter uma descrição associada:
Symbol('id')`],
    // bigint
    ['tipos_dados_bigint', `BigInt permite representar inteiros maiores que Number.MAX_SAFE_INTEGER.`],
    ['bigint_criar', `    Literal: 123456789012345678901234567890n
    Construtor: BigInt("12345678901234567890")`],
    ['bigint_operacoes', `Operações com BigInt são similares às de Number, mas não podem ser misturadas com Number sem conversão explícita.
`]

    // Tipos de referencia

    ['tipos_dados_referencia', `Em JavaScript, tipos de dados por referência incluem objetos, arrays e funções. Diferente dos tipos primitivos, esses valores não são armazenados diretamente na variável, mas sim em um endereço de memória, e a variável guarda uma referência a esse endereço. Modificações no valor referenciado afetam todas as referências a ele.`],
    ['tipos_dados_mutabilidade', `Primitivos (string, number, boolean, null, undefined, symbol, bigint) são imutáveis — uma vez criados, seu valor não pode ser alterado. Objetos, por outro lado, são mutáveis — suas propriedades podem ser alteradas ou removidas mesmo após a criação. Isso impacta diretamente na forma como as variáveis se comportam quando copiadas ou passadas como argumento.`],
    ['tipos_dados_tipo_dinamico', `JavaScript é dinamicamente tipado: o tipo de uma variável é determinado em tempo de execução. Isso permite flexibilidade, mas introduz riscos como operações inválidas silenciosas ("'5'     2 → 3", "'5' + 2 → '52'"). A falta de tipagem estática exige maior rigor do desenvolvedor, ou o uso de soluções como TypeScript.`],
    ['tipos_dados_tipo_coercao', `Coerção de tipos ocorre quando o JavaScript converte valores automaticamente (implícita) ou via funções como "String()", "Number()" (explícita). Implicações perigosas incluem expressões como "[] == false" (true) ou "null == undefined" (true), o que leva a armadilhas sutis. Conhecer a tabela de coerção do ECMAScript é essencial para evitar bugs.`],
    // Objeto

    ['objetos', `Objetos são coleções dinâmicas de pares chave/valor, fundamentais em JavaScript. Eles permitem modelar estruturas complexas, encapsular dados e comportamentos. São base da maioria dos elementos do ecossistema JS, incluindo arrays, funções e até mesmo classes. A herança em JS é implementada via protótipos, e todos os objetos têm uma cadeia de protótipos acessível via "__proto__" ou "Object.getPrototypeOf".`],
    // atribuir objeto

    ['objetos_criar', `Objetos podem ser criados de várias formas: usando notação literal, construtores embutidos ("new Object()"), funções construtoras customizadas, ou "Object.create()". Cada método tem implicações em performance, herança e legibilidade do código.`],
    ['objetos_literal', `A notação literal ("{}") é a forma mais comum e direta de criar objetos. Permite declaração inline e leitura clara. Exemplo:

const usuario = {
  nome: 'Ana',
  idade: 30
};

Suporta nesting, métodos, e computed properties.`],
    ['objetos_construtor', `Usar "new Object()" cria um objeto vazio com "Object.prototype" na cadeia de protótipos. Apesar de funcional, é menos usado que a notação literal por questões de clareza e verbosidade. Exemplo:

const obj = new Object();
obj.nome = 'Carlos';
`],
    // propriedade de objeto


    ['objetos_acessar', `As propriedades de objetos podem ser acessadas de duas formas: notação de ponto ("obj.prop") e notação de colchetes ("obj['prop']"). A escolha entre elas afeta o acesso dinâmico, validação de nomes inválidos como identificadores JS, e casos com propriedades computadas.`],
    ['acesso_dot', `A notação de ponto é usada quando o nome da propriedade é conhecido e é um identificador válido. Exemplo:

usuario.nome

Não permite acesso dinâmico baseado em strings ou nomes com espaços/caracteres especiais.`],
    ['acesso_colchetes', `A notação de colchetes permite acesso dinâmico:

usuario['nome']
usuario[chave]

É obrigatória quando o nome da propriedade contém espaços ou caracteres especiais ("obj['nome completo']").`],
    // metodos dos objetos

    ['objetos_metodos', `JavaScript fornece métodos utilitários para manipular objetos:
    "Object.keys(obj)" → retorna array com as chaves;
    "Object.values(obj)" → retorna array com os valores;
    "Object.entries(obj)" → retorna array de pares [chave, valor].
Esses métodos são essenciais para iteração e transformação de objetos.`],
    ['metodo_em_objeto', `Métodos podem ser definidos diretamente em objetos:

const pessoa = {
  falar() {
    console.log("Olá");
  }
};

Funções dentro de objetos mantêm o contexto com "this", e são fundamentais para encapsular lógica em estruturas orientadas a objetos.`],
    // atribuicao e modificacao


    ['objetos_acesso', `As duas formas de acesso — ponto e colchetes — têm diferentes finalidades:
    Use ponto para acesso direto e estático;
    Use colchetes para nomes dinâmicos ou inválidos como identificadores.
Conhecer quando usar cada uma evita erros sutis e melhora a clareza do código.`],
    ['objetos_modificacao', `Propriedades podem ser adicionadas ou modificadas diretamente:

obj.novaProp = 123;
obj['outra'] = true;

Remoção é feita com "delete obj.prop". Modificações não afetam o protótipo. Para objetos imutáveis, pode-se usar "Object.freeze()" ou spread/clonagem.`],
    // json


    ['json', `JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados. Usa uma sintaxe semelhante à de objetos JS, mas é estritamente tipado e exige aspas duplas. É amplamente utilizado em APIs REST, armazenamento local, e comunicação cliente-servidor.`],
    ['json_parse', `O método "JSON.parse()" converte uma string JSON em um objeto JavaScript. Exemplo:

const obj = JSON.parse('{"nome":"Ana"}');

Erro de parsing ocorre se a string estiver malformada — é essencial tratar com try/catch.`],
    ['parse_json', `Ao consumir uma resposta de API, geralmente se converte a string JSON com "JSON.parse()":

const jsonStr = '{"id":1}';
const obj = JSON.parse(jsonStr);

Isso permite manipular os dados como objetos JS normais.`],
    ['parse_erros', `Erros comuns ao usar "JSON.parse()":
    Aspas simples em vez de duplas;
    Vírgulas após o último item;
    Nomes de propriedade sem aspas.
Trate erros com:

try {
  JSON.parse(str);
} catch (e) {
  console.error("Erro de parsing:", e);
}
`],
    ['json_stringify', `"JSON.stringify()" converte objetos JS em strings JSON. Útil para persistência, logs, ou envio via rede.

const str = JSON.stringify({ nome: 'Ana' });

Não serializa funções, "undefined" ou símbolos.`],
    ['stringify_json', `Ao preparar dados para envio via "fetch" ou armazenamento:

const json = JSON.stringify(dados);
localStorage.setItem("user", json);

Permite interoperabilidade com sistemas externos que aceitam apenas texto.`],
    ['json_fetch', `O "fetch" é uma API moderna para requisições HTTP. Usado com JSON:

fetch('/api')
  .then(res => res.json())
  .then(data => console.log(data));

O método ".json()" executa internamente um "JSON.parse()" na resposta.`],
    // destruc

    ['desestruturacao', `Desestruturação permite extrair dados de arrays e objetos com sintaxe concisa:

const { nome } = usuario;
const [a, b] = numeros;

Facilita legibilidade, evita repetição e reduz boilerplate.`],
    ['desestruturacao_arrays', `Arrays podem ser desestruturados com base na posição:

const [primeiro, segundo] = [1, 2, 3];

Também permite ignorar elementos ou aplicar rest:

const [a, , b, ...resto] = array;
`],
    ['array_desestruturado', `Extração posicional:

const [x, y] = coords;

Usado em retorno de funções, iteradores, e para simplificar loops.`],
    ['desestruturacao_objetos', `Com objetos, a desestruturação é feita por nome:

const { idade, cidade } = pessoa;

Suporta renomeação e valores default:

const { nome: n = 'Anônimo' } = pessoa;
`],
    ['objeto_desestruturado', `Permite extrair propriedades específicas diretamente:

function exibe({ nome, idade }) {
  console.log(nome, idade);
}

Torna funções mais declarativas e compactas.`],
    // spread

    ['spread', `O operador spread ("...") expande elementos de arrays ou propriedades de objetos. Serve para clonagem rasa, composição de estruturas, e passagem de argumentos. Fundamental para programação funcional e imutabilidade.`],
    ['spread_arrays', `Permite copiar ou concatenar arrays:

const novo = [...arr1, ...arr2];

Evita mutações:

const copia = [...original];
`],
    ['spread_objetos', `Clona objetos e mescla propriedades:

const novo = { ...obj1, b: 2 };

A ordem importa: propriedades posteriores sobrescrevem anteriores. Spread não copia protótipos nem propriedades não enumeráveis.
`]
    // array

    ['arrays', `Arrays são estruturas de dados ordenadas e indexadas numericamente. Em JavaScript, arrays são objetos especializados que permitem armazenar múltiplos valores de forma sequencial. Possuem métodos e propriedades específicas para manipulação dinâmica de dados, como "push", "pop", "map", "filter", entre outros.`],
    ['arrays_criar', `Arrays podem ser criados utilizando notação literal ("[]"), o construtor "Array", ou métodos como "Array.from". A escolha do método influencia legibilidade, performance e comportamento do array resultante.`],
    ['array_literal', `A forma mais comum e recomendada de criar arrays:

const numeros = [1, 2, 3];

A notação literal é concisa, clara e evita armadilhas associadas ao construtor "Array".`],
    ['array_construtor', `O construtor "Array()" pode ser usado para criar arrays com ou sem valores:

const vazio = new Array(3); // [ <3 empty items> ]
const cheio = new Array(1, 2, 3);

Usar "Array(length)" pode causar confusão ao iterar, pois os elementos não são inicializados.`],
    ['array_inicializado', `Arrays podem ser inicializados diretamente com valores:

const letras = ['a', 'b', 'c'];

Ou dinamicamente:

const repetidos = Array(5).fill(0);

Inicialização clara melhora legibilidade e evita erros de lógica.`],
    // acessar array
    ['arrays_acessar', `Acesso é feito por índice numérico, com base zero:

const primeiro = arr[0];

Índices fora do intervalo retornam "undefined". Também possível usar ".at(-1)" para acessar o último elemento.`],
    ['acesso_elemento', `const valor = arr[2]; // acessa o terceiro item

Evite acessar índices inválidos ou mutar diretamente sem controle, pois arrays JS são dinamicamente expansíveis.`],
    ['acesso_com_for', `Laços "for" tradicionais permitem controle total de iteração:

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

Essencial em situações que requerem acesso ao índice ou controle manual da lógica de loop.`],
    ['acesso_com_forEach', `O método "forEach()" executa uma função para cada elemento:

arr.forEach((item, index) => {
  console.log(item, index);
});

Melhora legibilidade em iterações simples, mas não suporta "break" ou "return " para interrupção.`],
    // metodo map

    ['arrays_map', `O "map()" cria um novo array com base na transformação de cada elemento do original. Não altera o array original.`],
    ['map_basico', `const dobrado = arr.map(n => n * 2);

Ideal para aplicar uma função sobre todos os elementos.`],
    ['map_transformacao', `Transforma estruturas:

const nomes = pessoas.map(p => p.nome);

Mantém imutabilidade e melhora clareza declarativa.`],
    ['map_com_funcoes', `Funções externas aumentam reusabilidade:

function capitalizar(str) {
  return str.toUpperCase();
}
const nomes = ['ana', 'bob'].map(capitalizar);
`],
    // metodo filter
    ['arrays_filter', `"filter()" retorna um novo array com os elementos que satisfazem a condição fornecida.`],
    ['filter_basico', `const pares = numeros.filter(n => n % 2 === 0);

Filtragem funcional preserva original.`],
    ['filter_condicional', `Pode ser usada para múltiplas condições:

const adultos = pessoas.filter(p => p.idade >= 18 && p.ativo);

Excelente para segmentar dados.`],
    // metodo reduce
    ['arrays_reduce', `"reduce()" aplica uma função acumuladora sobre os elementos, resultando em um único valor.`],
    ['reduce_basico', `const soma = numeros.reduce((acc, val) => acc + val, 0);

Essencial para agregações, cálculos e transformações.`],
    ['reduce_acumulacao', `Pode acumular em tipos variados:

const produto = arr.reduce((acc, val) => acc * val, 1);
`],
    ['reduce_com_objetos', `Pode construir objetos:

const porCategoria = itens.reduce((acc, item) => {
  acc[item.categoria] = [...(acc[item.categoria] || []), item];
  return acc;
}, {});
`],
    // metodo push e pop

    ['arrays_push_pop', `"push()" adiciona no final, "pop()" remove do final. São métodos mutáveis.`],
    ['push', `arr.push(4);

Retorna o novo comprimento do array.`],
    ['pop', `const ultimo = arr.pop();

Remove e retorna o último elemento.`],
    // metodo shift e unshift

    ['arrays_shift_unshift', `"shift()" remove o primeiro elemento, "unshift()" adiciona no início.`],
    ['shift', `const primeiro = arr.shift();

Custo mais alto que "pop()", pois reindexa todos os elementos.`],
    ['unshift', `arr.unshift(0);

Adiciona no início, reindexando o array.`],
    // metodo splice

    ['arrays_splice', `"splice()" altera o conteúdo do array: pode adicionar, remover ou substituir elementos.`],
    ['splice_adicionar', `arr.splice(1, 0, 'novo');

Adiciona sem remover.`],
    ['splice_remover', `arr.splice(2, 1);

Remove um item a partir do índice 2.`],
    ['splice_substituir', `arr.splice(1, 2, 'x', 'y');

Remove dois e insere dois elementos no lugar.`],
    // metodo contat

    ['arrays_concat', `Concatena arrays sem mutação.

const total = arr1.concat(arr2);
`],
    ['concat_basico', `const unidos = [1, 2].concat([3, 4]);

Evita uso de loops manuais para fusão de arrays.`],
    ['concat_multiplos', `Aceita múltiplos argumentos:

const resultado = [].concat(arr1, arr2, arr3);
`],
    // metodo find

    ['arrays_find', `"find()" retorna o primeiro elemento que satisfaz a condição.`],
    ['find', `const encontrado = usuarios.find(u => u.id === 42);

Retorna "undefined" se não encontrar.`],
    // metodos de ordenação

    ['arrays_sort', `"sort()" ordena os elementos in-place, com ordenação lexicográfica por padrão.`],
    ['sort_ascendente', `arr.sort((a, b) => a     b);

Ordem numérica crescente.`],
    ['sort_descendente', `arr.sort((a, b) => b     a);

Ordem numérica decrescente.`],
    ['sort_com_funcoes', `Custom sorting:

usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
`],
    // metodos para percorrer

    ['arrays_forEach', `"forEach()" itera sobre todos os elementos, útil para efeitos colaterais.`],
    ['forEach_basico', `arr.forEach(v => console.log(v));

Não retorna novo array, diferente de "map()".`],
    ['forEach_com_funcoes', `Pode usar funções nomeadas para maior reutilização:

function logItem(item) {
  console.log(item);
}
arr.forEach(logItem);
`],
    // metodos para verificar condicao

    ['arrays_some', `"some()" retorna "true" se pelo menos um elemento satisfaz a condição.`],
    ['some', `const existe = arr.some(x => x > 10);

Curto-circuita ao encontrar o primeiro "true".`],
    ['arrays_every', `"every()" verifica se todos os elementos satisfazem a condição.`],
    ['every', `const todosValidos = arr.every(x => typeof x === 'number');

Retorna "false" na primeira falha.
`]
    // bonus
    // data
    ['data_time', `A API Date do JavaScript permite manipulação de datas e horas, sendo baseada no tempo em milissegundos desde a "Época Unix" (1 de janeiro de 1970 UTC). Apesar de não seguir o paradigma funcional e apresentar algumas inconsistências (como indexação de meses começando em 0), ainda é a principal ferramenta para lidar com datas nativamente.`],

    ['new_date', `O construtor "new Date()" pode ser utilizado de múltiplas formas:
"new Date()": cria um objeto com a data e hora atuais.
"new Date(milliseconds)": cria uma data baseada no timestamp em milissegundos.
"new Date(dateString)": interpreta uma string (formato ISO preferencial).
"new Date(year, monthIndex, day, hour, minute, second, millisecond)": cria uma data específica.`],

    ['data_atual', `"const agora = new Date();"  
Cria uma instância de Date com o timestamp exato do momento da execução. Importante lembrar que este objeto é mutável e representa a data no fuso horário local do sistema.`],

    ['data_especifica', `Você pode instanciar uma data com:
"new Date(2024, 4, 18)" — representa 18 de maio de 2024 (mês é zero-based).  
Essa forma é ideal quando há necessidade de precisão e controle explícito dos componentes da data.`],

    ['metodos_date', `A Date API fornece métodos para leitura e escrita de seus componentes:
Getters: "getDate(), getMonth(), getFullYear(), getHours(), getTime()", etc.
Setters: "setDate(), setMonth(), setFullYear(), setHours(), setTime()", etc.

Importante: esses métodos alteram o objeto original.`],

    ['get_data', `Getters de Date retornam partes específicas da data:
"getDate()": dia do mês (1–31)
"getMonth()": mês (0–11)
"getFullYear()": ano completo (ex: 2025)
"getDay()": dia da semana (0=domingo)
Esses métodos usam o fuso horário local.`],

    ['set_data', `Setters permitem alterar componentes:
"setDate(15)": define o dia do mês
"setMonth(3)": define abril
"setFullYear(2030)": define o ano
Se um valor exceder os limites (ex: mês 13), ele transborda automaticamente para o próximo componente.`],

    ['formatação_data', `Formatar datas corretamente exige considerar localização, fuso horário e padrão. A API padrão oferece "toLocaleDateString()", "toISOString()", entre outros, mas é limitada e pouco previsível para layouts customizados.`],

    ['formatacao_basica', `"toDateString()": "Sat May 18 2024"
"toISOString()": "2024-05-18T12:00:00.000Z"
"toLocaleDateString('pt-BR')": "18/05/2024"

Esses métodos são úteis para output rápido, mas não devem ser usados para formatação complexa.`],

    ['bibliotecas_formatacao', `Para formatação avançada e parsing robusto, utilize bibliotecas como:
**date-fns**: modular, tree-shakeable, sintaxe funcional.
**luxon**: orientado a objetos, baseado em "Intl".
**dayjs**: API similar ao Moment, mas com footprint menor.
Evite Moment.js em projetos novos por questões de performance e tamanho.`],

    // funcoes

    ['funcoes', `Funções são blocos de código reutilizáveis e a base para abstração, composição e controle de fluxo. Em JavaScript, funções são **first-class citizens**: podem ser passadas como argumentos, retornadas por outras funções e atribuídas a variáveis.`],

    ['definindo_funcoes', `Funções podem ser definidas de diversas formas:
Declarativas: "function nome() {}"
Expressões: "const fn = function() {}"
Arrow functions: "const fn = () => {}"
Cada forma possui particularidades quanto a "this", escopo e hoisting.`],

    ['definicao_basica', `Uma função básica possui:

function soma(a, b) {
  return a + b;
}

Retorna a soma de dois números. Funções com retorno são mais previsíveis e compostáveis.`],

    ['funcoes_nomeadas', `Funções nomeadas:
Facilitam o debugging.
Podem ser recursivas.
Sofrem hoisting (são carregadas antes da execução).

Exemplo:
"function calculaArea(raio) {}"
`],

    ['funcoes_sem_nome', `Funções anônimas são definidas sem nome:
"const fn = function(a) { return a * 2; }"

São úteis em callbacks, mas dificultam o stack trace em erros e debugging.`],

    ['funcoes_parametrizadas', `Parâmetros são declarados entre parênteses:
"function f(x, y = 10) {}"

O uso de parâmetros padrão, *rest* ("...args"), e *destructuring* permite alta flexibilidade e clareza nas assinaturas de função.`],
    // composicao
    ['composicao_funcoes', `Composição é a prática de combinar funções para formar uma nova. Promove reutilização e clareza. Exemplo:
"const composed = f(g(h(x)))"  
Funciona melhor quando funções são puras e com assinatura consistente.`],

    ['definicao_composicao', `Composição é a aplicação sequencial de funções:  
"compose(f, g)(x) === f(g(x))"  
É uma técnica fundamental em programação funcional, permitindo pipelines de transformação previsíveis.`],

    ['composicao_basica', `Composição simples pode ser feita manualmente:

const compose = (f, g) => x => f(g(x));

Ou usando utilitários de bibliotecas como "lodash.flow", "ramda.compose", ou "pipe" no RxJS.`],

    ['composicao_funcional', `Na programação funcional, composição é central. Garante:
Transparência referencial
Imutabilidade
Menor acoplamento

Ferramentas como "pipe" e "compose" promovem legibilidade e testes unitários mais simples. Idealmente, funções compostas devem ser puras e sem efeitos colaterais.`],
    // funcoes com parametros


    ['parametros', `Os parâmetros em funções permitem a passagem de valores para o corpo da função. Eles são definidos entre os parênteses da assinatura da função e são essenciais para garantir flexibilidade e reutilização do código.`],

    ['parametros_basicos', `Os parâmetros básicos são simples valores passados para a função. Exemplo:

function soma(a, b) { return a + b; }
soma(2, 3); // 5

Esses parâmetros são necessários para definir como a função processa os dados de entrada.`],

    ['parametros_multiplo', `Funções podem aceitar múltiplos parâmetros, passando mais de um valor de entrada. Eles são referenciados por ordem dentro da função. Exemplo:

function subtrai(a, b, c) { return a b c; }
subtrai(10, 5, 3); // 2

Esse tipo de abordagem é crucial para funções mais complexas.`],

    ['parametros_dinamicos', `Parâmetros dinâmicos são aqueles cujos valores podem ser variáveis ou até mesmo arrays. A utilização do operador "...rest" pode transformar parâmetros em uma lista flexível de entradas:

function soma(...numeros) { return numeros.reduce((a, b) => a + b, 0); }
soma(1, 2, 3, 4); // 10

`],

    ['parametros_com_nomes', `Em JavaScript, é possível usar parâmetros com nomes específicos. No entanto, é importante destacar que isso depende da implementação de funções que aceitam objetos ou parâmetros explícitos. Exemplo usando *destructuring*:

function pessoa({ nome, idade }) { return "\${nome} tem \${idade} anos."; }
pessoa({ nome: 'João', idade: 25 }); // "João tem 25 anos."

`],

    // parametros pre-definidos

    ['parametros_default', `Parâmetros default em JavaScript permitem atribuir valores padrão para parâmetros que não foram passados. Exemplo:

function saudacao(nome = 'Visitante') { return 'Olá, ' + nome; }
saudacao(); // "Olá, Visitante"

Esse recurso facilita a manipulação de valores não definidos e evita erros.`],

    ['uso_parametros_default', `Parâmetros default são ideais para funções que devem ter um comportamento previsível, mesmo quando certos valores não são fornecidos. Exemplo:

function multiplicar(a, b = 2) { return a * b; }
multiplicar(4); // 8

Aqui, "b" assume o valor default de 2 caso não seja fornecido.`],

    ['parametros_default_combinados', `Combinar parâmetros default com parâmetros *rest* pode ser extremamente útil para criar funções flexíveis. Exemplo:

function criarUsuario(nome = 'Anônimo', ...info) { 
    return { nome, info }; 
}
criarUsuario('Carlos', 30, 'Brasil'); // { nome: 'Carlos', info: [30, 'Brasil'] }

`],
    // rest parametros


    ['rest_parameters', `Os parâmetros *rest* permitem que uma função aceite um número variável de argumentos. Ele agrupa esses argumentos em um array. Exemplo:

function soma(...numeros) { 
    return numeros.reduce((total, num) => total + num, 0); 
}
soma(1, 2, 3); // 6

`],

    ['definicao_rest_parameters', `O operador "..." (rest) deve ser utilizado para coletar os parâmetros em um array. Ele deve ser o último parâmetro na assinatura da função. 
Exemplo:

function listarTodos(nomes, ...outros) { console.log(nomes, outros); }
listarTodos('João', 'Maria', 'Carlos'); 

`],

    ['uso_rest_parameters', `Rest parameters são úteis quando não se sabe exatamente quantos argumentos uma função vai receber. Exemplo:

function imprimirValores(...valores) { valores.forEach(val => console.log(val)); }
imprimirValores(1, 2, 3); 

`],

    ['rest_parameters_combinados', `Combinar parâmetros *rest* com parâmetros padrão é uma estratégia poderosa para funções de alta flexibilidade. Exemplo:

function somar(n1 = 0, n2 = 0, ...outros) {
    return n1 + n2 + outros.reduce((a, b) => a + b, 0);
}
somar(1, 2, 3, 4); // 10

`],

    ['rest_arrays', `Rest parameters podem ser usados para capturar elementos de um array, possibilitando que a função trabalhe com um número indefinido de elementos. Exemplo:

function maiorNumero(...numeros) { return Math.max(...numeros); }
maiorNumero(1, 4, 2, 9); // 9

`],

    ['rest_objetos', `Além de arrays, o operador *rest* também pode ser usado com objetos, agrupando propriedades que não são explicitamente declaradas. Exemplo:

function extrairInfo({ nome, idade, ...outros }) { 
    return { nome, idade, outros }; 
}
extrairInfo({ nome: 'Lucas', idade: 30, cidade: 'São Paulo' }); 
// { nome: 'Lucas', idade: 30, outros: { cidade: 'São Paulo' } }

`],
    // argumentos nas funcoes

    ['argumentos', `Os argumentos em funções são os valores efetivos passados para as funções. Eles são acessíveis dentro da função via o objeto especial "arguments", que pode ser útil para acessar os parâmetros passados de forma dinâmica, especialmente quando a quantidade de parâmetros não é fixa.`],

    ['argumentos_dinamicos', `Funções em JavaScript podem aceitar um número variável de argumentos e o objeto "arguments" pode ser utilizado para acessá-los, mesmo que não estejam definidos explicitamente. Exemplo:

function soma() { 
    return Array.from(arguments).reduce((a, b) => a + b, 0); 
}
soma(1, 2, 3, 4); // 10

`],

    ['argumentos_excesso', `Quando a função recebe mais argumentos do que os parâmetros definidos, o JavaScript os inclui no objeto "arguments". Exemplo:

function func(a, b) { 
    console.log(arguments); 
}
func(1, 2, 3, 4); // [1, 2, 3, 4]

`],

    ['argumentos_anonimos', `Argumentos anônimos são passados diretamente para funções sem a necessidade de variáveis nomeadas. Isso é frequentemente útil em funções de callback ou em casos onde a função não precisa ser reutilizada. Exemplo:

setTimeout(function() { console.log("Tempo esgotado!"); }, 1000);

`],
    // retorno das funcoes

    ['retorno', `O retorno em funções determina o valor que a função gera ao ser executada. Toda função pode ter um valor de retorno, que é passado para quem a chamou. A palavra-chave "return" é usada para definir esse valor.`],

    ['valor_retorno_simples', `Um retorno simples é aquele em que uma função retorna um único valor. Exemplo:

function dobro(x) { return x * 2; }
dobro(3); // 6

`],

    ['retorno_multiple', `JavaScript não possui suporte nativo para retornar múltiplos valores diretamente. Porém, isso pode ser feito retornando um array ou um objeto:

function calcular(a, b) { return [a + b, a b]; }
let [soma, diferenca] = calcular(5, 3);

`],

    ['retorno_early', `O retorno antecipado (early return) é uma prática onde a função retorna o valor antes de executar o restante do código, com o objetivo de evitar a execução desnecessária. Exemplo:

function verificaIdade(idade) {
    if (idade < 18) return 'Acesso negado';
    return 'Acesso permitido';
}

`],
    // funcoes anonimas

    ['funcoes_anonimas', `Funções anônimas são funções sem nome, geralmente passadas como argumentos para outras funções. São frequentemente utilizadas em callbacks e eventos. Exemplo:

setTimeout(function() { console.log('Tempo esgotado!'); }, 1000);

`],

    ['definicao_funcoes_anonimas', `Funções anônimas são definidas diretamente no momento da execução. Elas não possuem nome, mas podem ser atribuídas a variáveis ou passadas como argumentos. São úteis em funções de ordem superior e callbacks.`],

    ['uso_funcoes_anonimas', `Funções anônimas são comumente utilizadas em eventos assíncronos, como timers, promessas ou manipulação de DOM. Exemplo:

document.getElementById('botao').addEventListener('click', function() {
    alert('Clicou no botão!');
});

`],

    ['funcoes_anonimas_vantagens', `As funções anônimas evitam a poluição do escopo global e são ideais para usar em callbacks onde a reutilização não é necessária. Elas podem simplificar o código e torná-lo mais legível, embora possam prejudicar o stack trace em erros.`],


    // Arrow Functions
    ['arrow_functions', `
Arrow functions são uma forma simplificada de declarar funções em JavaScript. Elas são compactas e possuem uma sintaxe mais concisa, além de não vincular seu próprio contexto de "this", o que altera seu comportamento em comparação com funções tradicionais.
`],

    ['definicao_arrow_functions', `
As arrow functions são funções declaradas utilizando a sintaxe "=>" em vez da palavra-chave "function". Exemplo:

const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

Essa forma é muito útil quando você precisa de uma função curta ou quando não deseja vincular um novo escopo para "this".
`],

    ['caracteristicas_arrow_functions', `
As principais características das arrow functions incluem:
- Sintaxe concisa.
- Não vinculam seu próprio "this" (herdam o "this" do escopo em que foram criadas).
- Não possuem o objeto "arguments".
- Não podem ser usadas como construtores, ou seja, não podem ser invocadas com "new".

Exemplo:

const exemplo = () => console.log(this);

`],

    ['diferença_arrow_vs_funcoes', `
A principal diferença entre arrow functions e funções tradicionais é a vinculação de "this". Funções tradicionais criam um novo contexto de "this", enquanto arrow functions mantêm o "this" do escopo em que foram criadas.

Exemplo:

function Tradicional() { this.nome = "Tradicional"; }
const Arrow = () => { this.nome = "Arrow"; };

const t = new Tradicional();
const a = new Arrow();

console.log(t.nome); // "Tradicional"
console.log(a.nome); // undefined

As arrow functions também não possuem o objeto "arguments".
`],

    ['this_arrow_functions', `
Em arrow functions, "this" não é redefinido, ele é capturado lexicalmente do escopo onde a função foi criada. Isso elimina o comportamento inesperado comum em funções tradicionais quando chamadas de dentro de eventos ou funções assíncronas.

Exemplo:

const obj = {
    nome: "Objeto",
    mostrarNome: function() {
        setTimeout(() => {
            console.log(this.nome); // "Objeto"
        }, 1000);
    }
};
obj.mostrarNome();

`],

    // Funções Recursivas
    ['funcoes_recursivas', `
Funções recursivas são aquelas que se chamam dentro de si mesmas. Elas são usadas para resolver problemas que podem ser divididos em subproblemas menores semelhantes ao original. 
`],

    ['definicao_funcoes_recursivas', `
Funções recursivas são funções que se invocam dentro de seu próprio corpo. Elas são comumente utilizadas em problemas como busca em árvores, cálculo de fatoriais e Fibonacci.

Exemplo de cálculo de fatorial:

function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120

`],

    ['condicao_parada', `
Toda função recursiva precisa de uma condição de parada, que é o momento em que a função deixa de se chamar e retorna um valor. Sem uma condição de parada, a função pode entrar em um loop infinito, causando um estouro de pilha.

Exemplo de condição de parada:

function contagemRegressiva(n) {
    if (n <= 0) return;
    console.log(n);
    contagemRegressiva(n - 1);
}
contagemRegressiva(3); // 3, 2, 1

`],

    ['problemas_funcoes_recursivas', `
Funções recursivas podem gerar problemas como estouro de pilha (stack overflow) quando a profundidade de chamadas é muito grande. Além disso, podem ser ineficientes em termos de tempo e memória se não forem otimizadas (por exemplo, sem memoização em casos como Fibonacci).

Exemplo de problema de estouro de pilha:

function infinita() {
    infinita();
}
infinita(); // Estouro de pilha

`],

    // Utilização
    ['funcoes_first_class', `
Funções de primeira classe são funções tratadas como qualquer outro valor em JavaScript. Elas podem ser atribuídas a variáveis, passadas como argumentos e retornadas por outras funções.

Exemplo:

const saudacao = function() { return "Olá!"; };
const mostrarSaudacao = saudacao;
console.log(mostrarSaudacao()); // "Olá!"

`],

    ['funcoes_callbacks', `
Funções como callbacks são funções passadas como argumentos para outras funções. Elas são executadas dentro do contexto da função que as recebeu.

Exemplo:

function processarDados(callback) {
    const dados = [1, 2, 3];
    callback(dados);
}

processarDados(function(dados) {
    console.log(dados); // [1, 2, 3]
});

`],

    ['funcoes_closure', `
Closures são funções que lembram o contexto onde foram criadas, mesmo após a função externa ter terminado sua execução. Isso permite o acesso a variáveis do escopo externo.

Exemplo:

function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const contar = contador();
console.log(contar()); // 1
console.log(contar()); // 2

Closures são fundamentais para a criação de funções que mantêm o estado entre chamadas.
`],

    // Funções Avançadas

    // Call
    ['call_apply_bind', `
Os métodos "call", "apply" e "bind" são usados para controlar o contexto de execução de funções, ou seja, o valor de "this". Cada um deles tem uma funcionalidade ligeiramente diferente, mas todos servem para invocar funções com um contexto (objeto) específico.
`],

    ['call', `
O método "call" permite invocar uma função com um valor de "this" específico e passar parâmetros diretamente.

Exemplo:

function saudacao(nome) {
    console.log("Olá " + nome + ", " + this.titulo);
}

const pessoa = { titulo: "Sr." };
saudacao.call(pessoa, "João"); // Olá João, Sr.

`],

    ['call_basico', `
Uso básico de "call" permite que você defina explicitamente o valor de "this" e passe parâmetros diretamente para a função.

Exemplo:

function soma(a, b) {
    console.log(a + b);
}

soma.call(null, 2, 3); // 5

`],

    ['call_com_parametros', `
"call" pode ser usado para passar parâmetros diretamente para a função. Ele é particularmente útil quando você deseja aplicar os mesmos parâmetros em diferentes contextos.

Exemplo:

function produto(a, b) {
    console.log(a * b);
}

produto.call(null, 5, 3); // 15

`],

    ['call_com_this', `
O método "call" também permite controlar explicitamente o valor de "this", o que é útil quando queremos invocar uma função fora do seu contexto original.

Exemplo:

function exibirDetalhes() {
    console.log(this.nome + " " + this.sobrenome);
}

const pessoa = { nome: "Maria", sobrenome: "Silva" };
exibirDetalhes.call(pessoa); // Maria Silva

`],

    // Apply
    ['apply', `
O método "apply" é semelhante ao "call", mas em vez de passar os parâmetros individualmente, você os passa em forma de array.

Exemplo:

function soma(a, b) {
    console.log(a + b);
}

soma.apply(null, [4, 6]); // 10

`],

    ['apply_basico', `
O "apply" é especialmente útil quando os parâmetros são fornecidos em um array ou objeto de argumentos.

Exemplo:

function saudacao(nome) {
    console.log("Olá " + nome + ", seja bem-vindo!");
}

saudacao.apply(null, ["Carlos"]); // Olá Carlos, seja bem-vindo!

`],

    ['apply_com_parametros', `
Passando parâmetros para funções usando "apply". O uso de "apply" facilita o envio de múltiplos parâmetros de forma dinâmica.

Exemplo:

function subtrair(a, b) {
    console.log(a - b);
}

subtrair.apply(null, [10, 5]); // 5

`],

    ['apply_com_this', `
"apply" também permite a manipulação do valor de "this", controlando em qual objeto a função será executada.

Exemplo:

function saudacao() {
    console.log(this.nome + " está aqui!");
}

const pessoa = { nome: "José" };
saudacao.apply(pessoa); // José está aqui!

`],

    // Bind
    ['bind', `
O método "bind" é diferente de "call" e "apply" porque não invoca imediatamente a função. Em vez disso, ele retorna uma nova função com um valor de "this" específico.

Exemplo:

function exibirNome() {
    console.log(this.nome);
}

const pessoa = { nome: "Ana" };
const saudacaoAna = exibirNome.bind(pessoa);
saudacaoAna(); // Ana

`],

    ['bind_basico', `
O "bind" é usado quando queremos criar uma nova função com um "this" fixo.

Exemplo:

function somar(a, b) {
    console.log(a + b);
}

const somaComDois = somar.bind(null, 2);
somaComDois(3); // 5

`],

    ['bind_com_parametros', `
Usando "bind" para passar parâmetros ao criar uma nova função com "this" fixo.

Exemplo:

function dividir(a, b) {
    console.log(a / b);
}

const dividirPorDois = dividir.bind(null, 2);
dividirPorDois(4); // 0.5

`],

    ['bind_com_this', `
"bind" é útil para garantir que o valor de "this" seja o desejado em funções que serão chamadas posteriormente.

Exemplo:

function exibirDetalhes() {
    console.log(this.nome + " " + this.idade);
}

const pessoa = { nome: "Carlos", idade: 30 };
const detalhesCarlos = exibirDetalhes.bind(pessoa);
detalhesCarlos(); // Carlos 30

`],

    // Currying
    ['currying', `
Currying é uma técnica funcional onde uma função que aceita múltiplos parâmetros é transformada em uma sequência de funções que aceitam um único parâmetro. Cada chamada retorna uma nova função até que todos os parâmetros sejam recebidos.
`],

    ['definicao_currying', `
Currying é um padrão que permite a criação de funções que podem ser chamadas parcialmente, ou seja, você pode aplicar os parâmetros um de cada vez. Isso é útil para criar funções mais específicas a partir de uma função genérica.

Exemplo:

function soma(a) {
    return function(b) {
        return a + b;
    };
}

const somaCom5 = soma(5);
console.log(somaCom5(10)); // 15

`],

    ['currying_exemplo', `
Exemplo de currying para somar números:


function multiplicar(a) {
    return function(b) {
        return a * b;
    };
}

const multiplicarPor2 = multiplicar(2);
console.log(multiplicarPor2(4)); // 8

`],

    ['currying_com_parametros', `
O currying permite que você use parâmetros parcialmente e crie funções que aceitam apenas uma parte dos parâmetros, aguardando os outros.

Exemplo:

function fazerPedido(sabor) {
    return function(tamanho) {
        return function(bebida) {
            console.log("Pedido: \${sabor}, \${tamanho}, com \${bebida}");
        };
    };
}

const pedidoPizza = fazerPedido("Peperoni")("Grande");
pedidoPizza("Coca-Cola"); // Pedido: Peperoni, Grande, com Coca-Cola

`],

    // Hoisting
    ['hoisting', `
Hoisting é um comportamento do JavaScript onde variáveis e funções são elevadas ao topo do seu escopo antes da execução do código. No entanto, a inicialização de variáveis não é elevada, apenas suas declarações.
`],

    ['hoisting_conceito', `
Hoisting ocorre quando o JavaScript move a declaração de variáveis e funções para o topo de seu escopo durante a fase de compilação, antes de executar o código.

Exemplo:

console.log(a); // undefined
var a = 5;
console.log(a); // 5

`],

    ['hoisting_var', `
Quando você usa "var", a variável é elevada, mas seu valor não. O valor é atribuído na execução, mas a declaração é movida para o topo.

Exemplo:

console.log(a); // undefined
var a = 10;

`],

    ['hoisting_let', `
Com "let", a variável é elevada, mas não pode ser acessada até ser inicializada, gerando um erro de "Temporal Dead Zone" se for acessada antes da inicialização.

Exemplo:

console.log(a); // ReferenceError
let a = 10;

`],

    ['hoisting_const', `
Semelhante ao "let", "const" é elevada, mas não pode ser acessada antes de ser inicializada, resultando em erro.

Exemplo:

console.log(a); // ReferenceError
const a = 10;

`],

    ['hoisting_funcoes', `
Funções declarativas são totalmente elevadas, incluindo seu conteúdo, permitindo que sejam chamadas antes da sua declaração.

Exemplo:

minhaFuncao(); // "Oi"
function minhaFuncao() {
    console.log("Oi");
}

`],

    ['hoisting_ordem_execucao', `
O hoisting ocorre em duas fases: a primeira fase de compilação (onde as declarações são elevadas) e a segunda fase de execução (onde o código é executado). As declarações de funções são elevadas por completo, enquanto as variáveis têm sua declaração elevadas, mas não a atribuição.

Exemplo:

minhaFuncao(); // "Oi"
function minhaFuncao() {
    console.log("Oi");
}

`],

    ['hoisting_problemas', `
O hoisting pode causar problemas de confusão quando você não entende como ele funciona. Variáveis declaradas com "var" podem ser usadas antes de serem atribuídas, e o comportamento de "let" e "const" pode gerar erros se forem acessadas antes de sua inicialização.

Exemplo de confusão:

console.log(a); // undefined
var a = 5;

`],



    // Operadores Gerais
    ['operadores', 'Operadores em JavaScript'],

    // Operadores de Atribuição
    ['operadores_atribuicao', 'Operadores de Atribuição'],
    ['operadores_atribuicao_basico', `
O operador de atribuição básico ("=") é usado para atribuir valores a variáveis.

Exemplo:

let x = 5; // Atribui 5 a x

`],
    ['operadores_atribuicao_compostos', `
Os operadores de atribuição compostos combinam uma operação com a atribuição, simplificando o código.

Exemplo:

let x = 5;
x += 3; // x = x + 3 => 8
x *= 2; // x = x * 2 => 16

`],

    // Operadores Aritméticos
    ['operadores_aritmeticos', 'Operadores Aritméticos'],
    ['operadores_soma', `
O operador de soma ("+") é usado para somar valores numéricos ou concatenar strings.

Exemplo:

let x = 5 + 3; // 8
let str = "Olá, " + "Mundo!"; // "Olá, Mundo!"

`],
    ['operadores_subtracao', `
O operador de subtração ("-") é utilizado para subtrair valores numéricos.

Exemplo:

let x = 10 - 4; // 6

`],
    ['operadores_multiplicacao', `
O operador de multiplicação ("*") é usado para multiplicar valores numéricos.

Exemplo:

let x = 3 * 4; // 12

`],
    ['operadores_divisao', `
O operador de divisão ("/") é utilizado para dividir valores numéricos.

Exemplo:

let x = 10 / 2; // 5

`],
    ['operadores_modulo', `
O operador módulo ("%") retorna o resto da divisão entre dois números.

Exemplo:

let x = 10 % 3; // 1

`],
    ['operadores_exponenciacao', `
O operador de exponenciação ("**") é utilizado para elevar um número à potência de outro.

Exemplo:

let x = 2 ** 3; // 8

`],
    ['operadores_incremento', `
Os operadores de incremento ("++") e decremento ("--") são usados para aumentar ou diminuir o valor de uma variável em 1.

Exemplo:

let x = 5;
x++; // x = x + 1 => 6
x--; // x = x - 1 => 5

`],
    ['operadores_pre_pos', `
Os operadores de incremento e decremento podem ser usados de forma prefixada ou posfixada. No prefixo, o incremento ou decremento ocorre antes da operação. No sufixo, ocorre após.

Exemplo de pré-incremento:

let x = 5;
console.log(++x); // 6


Exemplo de pós-incremento:

let x = 5;
console.log(x++); // 5
console.log(x);   // 6

`],

    // Operadores de Comparação
    ['operadores_comparativos', 'Operadores Comparativos'],
    ['operadores_igualdade', `
Os operadores de igualdade ("==" e "===") são usados para comparar valores. O "==" verifica apenas a igualdade de valor, enquanto o "===" também verifica o tipo.

Exemplo:

let a = 5;
let b = '5';

console.log(a == b);  // true, pois apenas compara os valores
console.log(a === b); // false, porque um é número e o outro é string

`],
    ['operadores_diferente', `
Os operadores de diferença ("!=" e "!==") são usados para verificar se os valores não são iguais. O "!=" verifica apenas o valor, enquanto o "!==" verifica tanto o valor quanto o tipo.

Exemplo:

let a = 5;
let b = '5';

console.log(a != b);  // false, porque os valores são iguais (sem comparar tipos)
console.log(a !== b); // true, porque os tipos são diferentes

`],
    ['operadores_maior_menor', `
Os operadores de comparação maior/menor (">", "<", ">=", "<=") são usados para comparar se um valor é maior ou menor que outro.

Exemplo:

let a = 5;
let b = 10;

console.log(a > b);  // false
console.log(a < b);  // true
console.log(a >= b); // false
console.log(a <= b); // true

`],
    ['operadores_comparacao_objetos', `
Comparar objetos diretamente usando os operadores de comparação é uma comparação por referência, não por valor. Isso significa que dois objetos com o mesmo conteúdo não são considerados iguais.

Exemplo:

let obj1 = { nome: 'João' };
let obj2 = { nome: 'João' };

console.log(obj1 == obj2); // false, pois são referências diferentes
console.log(obj1 === obj2); // false, por ser comparação de referência

`],



    // Operadores Lógicos
    ['operadores_logicos', 'Operadores Lógicos'],
    ['operadores_e', `
O operador lógico AND ("&&") retorna verdadeiro se ambos os operandos forem verdadeiros.

Exemplo:

let a = true;
let b = false;
console.log(a && b); // false

`],
    ['operadores_ou', `
O operador lógico OR ("||") retorna verdadeiro se ao menos um dos operandos for verdadeiro.

Exemplo:

let a = true;
let b = false;
console.log(a || b); // true

`],
    ['operadores_nao', `
O operador lógico NOT ("!") inverte o valor lógico do operando.

Exemplo:

let a = true;
console.log(!a); // false

`],
    ['operadores_logicos_curto_circuito', `
Os operadores lógicos "&&" e "||" possuem curto-circuito. Ou seja, a avaliação dos operandos é interrompida assim que o resultado final é determinado.

Exemplo (curto-circuito com "&&"):

let a = true;
let b = false;
console.log(a && b); // b não será avaliado, pois o resultado depende do valor de b


Exemplo (curto-circuito com "||"):

let a = false;
let b = true;
console.log(a || b); // a não será avaliado, pois o resultado depende do valor de b

`],

    // Operadores Bitwise
    ['operadores_bitwise', 'Operadores Bitwise'],
    ['bitwise_and', `
O operador Bitwise AND ("&") realiza uma operação AND bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a & b); // 1, resultado da operação AND bit a bit

`],
    ['bitwise_or', `
O operador Bitwise OR ("|") realiza uma operação OR bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a | b); // 7, resultado da operação OR bit a bit

`],
    ['bitwise_xor', `
O operador Bitwise XOR ("^") realiza uma operação XOR bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a ^ b); // 6, resultado da operação XOR bit a bit

`],
    ['bitwise_not', `
O operador Bitwise NOT ("~") inverte todos os bits do número.

Exemplo:

let a = 5; // 0101 em binário
console.log(~a); // -6, resultado da inversão de todos os bits

`],
    ['bitwise_shift_esquerda', `
O operador de shift à esquerda ("<<") desloca todos os bits de um número para a esquerda, preenchendo com zeros.

Exemplo:

let a = 5; // 0101 em binário
console.log(a << 1); // 10, o bit de 5 foi deslocado para a esquerda

`],
    ['bitwise_shift_direita', `
O operador de shift à direita (">>") desloca todos os bits de um número para a direita.

Exemplo:

let a = 5; // 0101 em binário
console.log(a >> 1); // 2, o bit de 5 foi deslocado para a direita

`],
    ['bitwise_shift_direita_zero', `
O operador de shift à direita com zero fill (">>>") desloca os bits para a direita e preenche com zeros, independente do sinal do número.

Exemplo:

let a = -5; // 11111111111111111111111111111011 em binário (em 32 bits)
console.log(a >>> 1); // 2147483642, bits deslocados e preenchidos com 0

`],

    // Operadores Ternários
    ['operadores_ternario', `
O operador ternário ("condição ? valor1 : valor2") é uma forma compacta de expressar uma estrutura condicional.

Exemplo:

let idade = 18;
let resultado = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(resultado); // "Maior de idade"

`],
    ['operadores_ternario_aninhado', `
O operador ternário pode ser aninhado para verificar múltiplas condições.

Exemplo:

let idade = 18;
let resultado = idade < 18 ? 'Menor de idade' : (idade < 60 ? 'Adulto' : 'Idoso');
console.log(resultado); // "Adulto"

`],
    ['expressao_condicional', `
O operador ternário é uma expressão condicional compacta. Ele pode substituir estruturas if-else simples.

Exemplo:

let a = 10;
let b = 20;
let maior = a > b ? a : b;
console.log(maior); // 20

`],
    ['operador_ternario_comparacao', `
Comparando o operador ternário com o switch: o ternário é mais conciso e é ideal para condições simples, enquanto o switch é útil para múltiplas condições.

Exemplo de operador ternário:

let x = 1;
let resultado = x === 1 ? 'um' : 'não é um';
console.log(resultado); // "um"


Exemplo de switch:

let x = 1;
switch (x) {
  case 1:
    console.log('um');
    break;
  default:
    console.log('não é um');
}

`],

    // Prioridades
    ['operadores_agrupamento', 'Operadores de Agrupamento'],
    ['agrupamento_parenteses', `
Os parênteses ("()") são usados para agrupar expressões e controlar a ordem de execução.

Exemplo:

let x = 2 * (3 + 4); // A expressão 3 + 4 é avaliada primeiro
console.log(x); // 14

`],
    ['agrupamento_colchetes', `
Os colchetes ("[]") são usados para declarar arrays e acessar seus elementos.

Exemplo:

let arr = [1, 2, 3];
console.log(arr[0]); // 1

`],
    ['precedencia_operadores', `
A precedência de operadores determina a ordem em que as expressões são avaliadas. Operadores com maior precedência são avaliados primeiro.

Exemplo:

let x = 2 + 3 * 4; // A multiplicação é feita primeiro
console.log(x); // 14

`],
    ['precedencia_exemplos', `
Exemplos práticos de precedência de operadores.

Exemplo:

let x = 5 + 3 * 2; // 5 + (3 * 2) = 11
console.log(x); // 11

`],
    ['precedencia_tabela', `
A tabela de precedência de operadores define a ordem exata de avaliação das expressões. Operadores com maior precedência são avaliados antes.

Tabela (simplificada):
1. Parênteses ("()")
2. Exponenciação ("**")
3. Multiplicação, Divisão ("*", "/")
4. Adição, Subtração ("+", "-")
5. Comparação ("<", ">", "==", "===")
6. Lógicos ("&&", "||")
`],



    // Operadores Lógicos
    ['operadores_logicos', 'Operadores Lógicos'],
    ['operadores_e', `
O operador lógico AND ("&&") retorna verdadeiro se ambos os operandos forem verdadeiros.

Exemplo:

let a = true;
let b = false;
console.log(a && b); // false

`],
    ['operadores_ou', `
O operador lógico OR ("||") retorna verdadeiro se ao menos um dos operandos for verdadeiro.

Exemplo:

let a = true;
let b = false;
console.log(a || b); // true

`],
    ['operadores_nao', `
O operador lógico NOT ("!") inverte o valor lógico do operando.

Exemplo:

let a = true;
console.log(!a); // false

`],
    ['operadores_logicos_curto_circuito', `
Os operadores lógicos "&&" e "||" possuem curto-circuito. Ou seja, a avaliação dos operandos é interrompida assim que o resultado final é determinado.

Exemplo (curto-circuito com "&&"):

let a = true;
let b = false;
console.log(a && b); // b não será avaliado, pois o resultado depende do valor de b


Exemplo (curto-circuito com "||"):

let a = false;
let b = true;
console.log(a || b); // a não será avaliado, pois o resultado depende do valor de b

`],

    // Operadores Bitwise
    ['operadores_bitwise', 'Operadores Bitwise'],
    ['bitwise_and', `
O operador Bitwise AND ("&") realiza uma operação AND bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a & b); // 1, resultado da operação AND bit a bit

`],
    ['bitwise_or', `
O operador Bitwise OR ("|") realiza uma operação OR bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a | b); // 7, resultado da operação OR bit a bit

`],
    ['bitwise_xor', `
O operador Bitwise XOR ("^") realiza uma operação XOR bit a bit entre dois números.

Exemplo:

let a = 5; // 0101 em binário
let b = 3; // 0011 em binário
console.log(a ^ b); // 6, resultado da operação XOR bit a bit

`],
    ['bitwise_not', `
O operador Bitwise NOT ("~") inverte todos os bits do número.

Exemplo:

let a = 5; // 0101 em binário
console.log(~a); // -6, resultado da inversão de todos os bits

`],
    ['bitwise_shift_esquerda', `
O operador de shift à esquerda ("<<") desloca todos os bits de um número para a esquerda, preenchendo com zeros.

Exemplo:

let a = 5; // 0101 em binário
console.log(a << 1); // 10, o bit de 5 foi deslocado para a esquerda

`],
    ['bitwise_shift_direita', `
O operador de shift à direita (">>") desloca todos os bits de um número para a direita.

Exemplo:

let a = 5; // 0101 em binário
console.log(a >> 1); // 2, o bit de 5 foi deslocado para a direita

`],
    ['bitwise_shift_direita_zero', `
O operador de shift à direita com zero fill (">>>") desloca os bits para a direita e preenche com zeros, independente do sinal do número.

Exemplo:

let a = -5; // 11111111111111111111111111111011 em binário (em 32 bits)
console.log(a >>> 1); // 2147483642, bits deslocados e preenchidos com 0

`],

    // Operadores Ternários
    ['operadores_ternario', `
O operador ternário ("condição ? valor1 : valor2") é uma forma compacta de expressar uma estrutura condicional.

Exemplo:

let idade = 18;
let resultado = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(resultado); // "Maior de idade"

`],
    ['operadores_ternario_aninhado', `
O operador ternário pode ser aninhado para verificar múltiplas condições.

Exemplo:

let idade = 18;
let resultado = idade < 18 ? 'Menor de idade' : (idade < 60 ? 'Adulto' : 'Idoso');
console.log(resultado); // "Adulto"

`],
    ['expressao_condicional', `
O operador ternário é uma expressão condicional compacta. Ele pode substituir estruturas if-else simples.

Exemplo:

let a = 10;
let b = 20;
let maior = a > b ? a : b;
console.log(maior); // 20

`],
    ['operador_ternario_comparacao', `
Comparando o operador ternário com o switch: o ternário é mais conciso e é ideal para condições simples, enquanto o switch é útil para múltiplas condições.

Exemplo de operador ternário:

let x = 1;
let resultado = x === 1 ? 'um' : 'não é um';
console.log(resultado); // "um"


Exemplo de switch:

let x = 1;
switch (x) {
  case 1:
    console.log('um');
    break;
  default:
    console.log('não é um');
}

`],

    // Prioridades
    ['operadores_agrupamento', 'Operadores de Agrupamento'],
    ['agrupamento_parenteses', `
Os parênteses ("()") são usados para agrupar expressões e controlar a ordem de execução.

Exemplo:

let x = 2 * (3 + 4); // A expressão 3 + 4 é avaliada primeiro
console.log(x); // 14

`],
    ['agrupamento_colchetes', `
Os colchetes ("[]") são usados para declarar arrays e acessar seus elementos.

Exemplo:

let arr = [1, 2, 3];
console.log(arr[0]); // 1

`],
    ['precedencia_operadores', `
A precedência de operadores determina a ordem em que as expressões são avaliadas. Operadores com maior precedência são avaliados primeiro.

Exemplo:

let x = 2 + 3 * 4; // A multiplicação é feita primeiro
console.log(x); // 14

`],
    ['precedencia_exemplos', `
Exemplos práticos de precedência de operadores.

Exemplo:

let x = 5 + 3 * 2; // 5 + (3 * 2) = 11
console.log(x); // 11

`],
    ['precedencia_tabela', `
A tabela de precedência de operadores define a ordem exata de avaliação das expressões. Operadores com maior precedência são avaliados antes.

Tabela (simplificada):
1. Parênteses ("()")
2. Exponenciação ("**")
3. Multiplicação, Divisão ("*", "/")
4. Adição, Subtração ("+", "-")
5. Comparação ("<", ">", "==", "===")
6. Lógicos ("&&", "||")
`],


    // Assertivas
    ['assertions', 'Assertivas em JavaScript'],
    ['assertiva_basica', `
Assertivas são uma forma de verificar se uma condição é verdadeira durante a execução do programa. O método "console.assert" é utilizado para fazer essa verificação.

Exemplo:

console.assert(1 + 1 === 2, 'A condição é verdadeira');
console.assert(1 + 1 === 3, 'A condição é falsa'); // Vai imprimir o erro

`],
    ['assertiva_em_funcoes', `
O uso de assertivas dentro de funções pode ajudar a garantir que as funções se comportem corretamente durante a execução.

Exemplo:

function somar(a, b) {
    console.assert(typeof a === 'number' && typeof b === 'number', 'Os parâmetros devem ser números');
    return a + b;
}
console.log(somar(2, 3)); // 5
console.log(somar(2, 'a')); // Assertiva falha

`],
    ['assertiva_e_debugging', `
Assertivas são ferramentas poderosas para o processo de debugging. Elas ajudam a identificar rapidamente problemas de lógica ao verificar suposições do código.

Exemplo:

let x = 10;
console.assert(x > 0, 'x deve ser positivo');
console.assert(x < 0, 'x deve ser negativo'); // Isso causará um erro

`],
    ['assertiva_condicional', `
"console.assert" também pode ser usada em assertivas condicionais para verificar a execução correta de fluxos em programas com várias possibilidades.

Exemplo:

let userIsLoggedIn = true;
console.assert(userIsLoggedIn, 'O usuário deve estar logado para acessar esta página');

`],

    // Estruturas de Dados

    // Map, Set, WeakMap, WeakSet
    ['map_set', 'Map, Set, WeakMap, WeakSet'],

    // Map
    ['map', 'Map - Estrutura de Dados'],
    ['definicao_map', `
O "Map" é uma estrutura de dados que mapeia chaves para valores. A chave pode ser qualquer tipo de dado.

Exemplo:

let mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome')); // João

`],
    ['criar_map', `
Para criar um "Map", usa-se o construtor "new Map()". Você pode inicializá-lo com um array de pares chave-valor.

Exemplo:

let mapa = new Map([['nome', 'Maria'], ['idade', 25]]);
console.log(mapa.get('nome')); // Maria

`],
    ['acessar_map', `
Para acessar valores em um "Map", utilizamos o método "get()" passando a chave como argumento.

Exemplo:

let mapa = new Map();
mapa.set('cidade', 'São Paulo');
console.log(mapa.get('cidade')); // São Paulo

`],
    ['manipular_map', `
O "Map" permite várias operações, como "set()", "get()", "delete()" e "has()".

Exemplo de manipulação:

let mapa = new Map();
mapa.set('carro', 'Fusca');
console.log(mapa.has('carro')); // true
mapa.delete('carro');
console.log(mapa.has('carro')); // false

`],
    ['iterar_map', `
Podemos iterar sobre um "Map" usando "forEach()", "for...of", ou os métodos "keys()", "values()" e "entries()".

Exemplo:

let mapa = new Map([['nome', 'Carlos'], ['idade', 30]]);
mapa.forEach((valor, chave) => {
    console.log(chave, valor);
});

`],
    ['map_performance', `
Em termos de desempenho, "Map" tem uma complexidade de tempo constante (\(O(1)\)) para as operações de busca, inserção e remoção.

Comparado a objetos, "Map" tem desempenho superior quando há muitas operações dinâmicas de inserção e remoção.
`],

    // Set
    ['set', 'Set - Estrutura de Dados'],
    ['definicao_set', `
O "Set" é uma coleção de valores únicos, ou seja, não permite elementos duplicados.

Exemplo:

let conjunto = new Set([1, 2, 3]);
conjunto.add(4);
conjunto.add(3); // Não será adicionado, pois 3 já existe
console.log(conjunto); // Set { 1, 2, 3, 4 }

`],
    ['criar_set', `
A criação de um "Set" é feita com o construtor "new Set()". Você pode inicializá-lo com um array.

Exemplo:

let conjunto = new Set([1, 2, 3, 4, 4]);
console.log(conjunto); // Set { 1, 2, 3, 4 }

`],
    ['acessar_set', `
Para acessar os valores de um "Set", não utilizamos índice. A iteração é realizada usando "forEach()", ou "for...of".

Exemplo:

let conjunto = new Set([1, 2, 3]);
conjunto.forEach(valor => console.log(valor)); // 1, 2, 3

`],
    ['manipular_set', `
Você pode adicionar, remover ou verificar a existência de valores no "Set" usando os métodos "add()", "delete()" e "has()".

Exemplo:

let conjunto = new Set([1, 2, 3]);
conjunto.add(4);
conjunto.delete(2);
console.log(conjunto.has(2)); // false

`],
    ['iterar_set', `
A iteração em um "Set" pode ser feita usando o método "forEach()" ou o loop "for...of".

Exemplo:

let conjunto = new Set([1, 2, 3, 4]);
for (let valor of conjunto) {
    console.log(valor); // 1, 2, 3, 4
}

`],
    ['set_performance', `
O "Set" é eficiente em termos de desempenho, com complexidade de tempo constante (\(O(1)\)) para as operações de verificação de existência e inserção de novos elementos.
`],

    // WeakMap
    ['weakmap', 'WeakMap - Estrutura de Dados'],
    ['definicao_weakmap', `
Um "WeakMap" é semelhante a um "Map", mas suas chaves são referências fracas. Ou seja, se não houver mais nenhuma referência para a chave, ela pode ser coletada pela coleta de lixo.

Exemplo:

let wm = new WeakMap();
let obj = {};
wm.set(obj, 'valor');
console.log(wm.get(obj)); // valor

`],
    ['criar_weakmap', `
Um "WeakMap" é criado com "new WeakMap()". Não é possível inicializá-lo com um array de pares chave-valor como no "Map".

Exemplo:

let wm = new WeakMap();
let obj = {};
wm.set(obj, 'dados');

`],
    ['acessar_weakmap', `
Para acessar valores de um "WeakMap", usamos o método "get()", passando o objeto como chave.

Exemplo:

let wm = new WeakMap();
let obj = {};
wm.set(obj, 'valor');
console.log(wm.get(obj)); // valor

`],
    ['manipular_weakmap', `
As operações básicas de manipulação de um "WeakMap" são "set()", "get()", e "delete()".

Exemplo:

let wm = new WeakMap();
let obj = {};
wm.set(obj, 'valor');
wm.delete(obj);
console.log(wm.has(obj)); // false

`],
    ['weakmap_restricoes', `
As chaves de um "WeakMap" devem ser objetos, não podendo ser valores primitivos.

Além disso, os "WeakMap" não são iteráveis, e a coleta de lixo pode ocorrer quando não houver mais referências para as chaves.
`],

    // WeakSet
    ['weakset', 'WeakSet - Estrutura de Dados'],
    ['definicao_weakset', `
O "WeakSet" é similar ao "Set", mas suas chaves são referências fracas. As chaves de um "WeakSet" devem ser objetos.

Exemplo:

let ws = new WeakSet();
let obj = {};
ws.add(obj);
console.log(ws.has(obj)); // true

`],
    ['criar_weakset', `
Um "WeakSet" é criado com "new WeakSet()", e apenas objetos podem ser adicionados.

Exemplo:

let ws = new WeakSet();
let obj = {};
ws.add(obj);

`],
    ['acessar_weakset', `
Para acessar valores no "WeakSet", você pode usar "has()" para verificar a presença de um objeto.

Exemplo:

let ws = new WeakSet();
let obj = {};
ws.add(obj);
console.log(ws.has(obj)); // true

`],
    ['manipular_weakset', `
O "WeakSet" permite operações "add()", "has()" e "delete()\), mas não fornece uma forma de acessar diretamente os valores armazenados.

Exemplo:

let ws = new WeakSet();
let obj = {};
ws.add(obj);
ws.delete(obj);
console.log(ws.has(obj)); // false

`],
    ['weakset_restricoes', `
Assim como no "WeakMap", as chaves de um "WeakSet" devem ser objetos e ele não é iterável.

Além disso, a coleta de lixo pode ocorrer para objetos contidos em "WeakSet" quando não houver mais referências para eles.
`],



    // Estruturas Condicionais
    ['estruturas_condicionais', 'Estruturas Condicionais em JavaScript'],

    // if
    ['if', 'Estrutura Condicional if'],
    ['if_exemplo_simples', `
A estrutura "if" é usada para executar um bloco de código se uma condição for verdadeira.

Exemplo:

let x = 5;
if (x > 0) {
    console.log('x é positivo');
}

`],
    ['if_aninhado', `
A estrutura "if" pode ser aninhada dentro de outra estrutura "if", permitindo a verificação de múltiplas condições.

Exemplo:

let x = 5;
if (x > 0) {
    if (x < 10) {
        console.log('x está entre 0 e 10');
    }
}

`],
    ['if_versatilidade', `
O "if" é extremamente versátil, pois permite a verificação de qualquer tipo de expressão booleana.

Exemplo:

let x = 0;
if (!x) {
    console.log('x é falso');
}

`],

    // else
    ['if_else', 'Estrutura Condicional if/else'],
    ['if_else_exemplo', `
O "if/else" permite executar um bloco de código quando a condição for verdadeira e outro bloco quando for falsa.

Exemplo:

let x = 10;
if (x > 5) {
    console.log('x é maior que 5');
} else {
    console.log('x é 5 ou menor');
}

`],
    ['if_else_aninhado', `
Você pode aninhar estruturas "if/else\), o que permite uma verificação mais complexa de condições.

Exemplo:

let x = 10;
if (x > 5) {
    console.log('x é maior que 5');
} else if (x === 5) {
    console.log('x é igual a 5');
} else {
    console.log('x é menor que 5');
}

`],

    // else if
    ['else_if', 'Estrutura Condicional else if'],
    ['else_if_comparacao', `
O "else if" é útil para verificar várias condições alternativas, evitando muitos aninhamentos.

Exemplo:

let x = 10;
if (x > 5) {
    console.log('x é maior que 5');
} else if (x === 5) {
    console.log('x é igual a 5');
} else {
    console.log('x é menor que 5');
}

`],
    ['else_if_aninhado', `
O "else if" pode ser aninhado para criar condições mais complexas.

Exemplo:

let x = 10;
if (x > 5) {
    console.log('x é maior que 5');
} else if (x > 0) {
    console.log('x é positivo, mas menor que 5');
} else {
    console.log('x é negativo');
}

`],

    // switch
    ['switch', 'Estrutura Condicional switch'],
    ['switch_simples', `
O "switch" é uma estrutura condicional que permite testar várias condições com base no valor de uma expressão.

Exemplo:

let cor = 'verde';
switch (cor) {
    case 'vermelho':
        console.log('A cor é vermelha');
        break;
    case 'verde':
        console.log('A cor é verde');
        break;
    default:
        console.log('Cor desconhecida');
}

`],
    ['switch_com_escopo', `
O "switch" possui um escopo para cada "case". É importante notar que o código dentro de um "case" só será executado se houver uma correspondência com a expressão fornecida.

Exemplo:

let fruta = 'maçã';
switch (fruta) {
    case 'maçã':
        let mensagem = 'A fruta é maçã';
        console.log(mensagem);
        break;
    case 'banana':
        console.log('A fruta é banana');
        break;
}

`],
    ['switch_vs_if', `
O "switch" é útil quando há muitas condições baseadas no valor de uma única variável, enquanto o "if/else" pode ser mais flexível, permitindo condições complexas.

Exemplo de "if/else":

if (x > 5) {
    console.log('Maior que 5');
} else if (x < 5) {
    console.log('Menor que 5');
} else {
    console.log('Igual a 5');
}

Exemplo de "switch":

switch (x) {
    case 5:
        console.log('Igual a 5');
        break;
    default:
        console.log('Outro valor');
}

`],
    ['switch_fallthrough', 'Fallthrough em switch'],
    ['fallthrough_exemplo', `
Fallthrough ocorre quando um "case" não contém um "break" e o código continua a ser executado nos próximos "cases".

Exemplo de Fallthrough:

let x = 1;
switch (x) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');
        break;
}

O resultado será:
""
1
2
""
`],
    ['fallthrough_perigos', 'Perigos e Cuidados com Fallthrough'],
    ['fallthrough_controlado', `
Fallthrough pode ser perigoso, pois pode levar à execução de código indesejado. Use "break" ou "return" para evitar isso.

Exemplo de controle de Fallthrough:

let x = 1;
switch (x) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
}

`],

    // Laços de Repetição
    ['estruturas_repeticao', 'Laços de Repetição em JavaScript'],

    // for
    ['for', 'Laço for'],
    ['for_estrutura', `
O laço "for" é usado para repetir um bloco de código um número definido de vezes.

Exemplo:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

`],
    ['for_exemplo_simples', `
Um exemplo simples de uso do "for" para iterar sobre números.

Exemplo:

for (let i = 1; i <= 3; i++) {
    console.log(i); // 1, 2, 3
}

`],
    ['for_uso_com_arrays', `
O "for" é útil para iterar sobre arrays, acessando cada elemento pelo índice.

Exemplo:

let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

`],
    ['for_uso_com_objetos', `
O laço "for" também pode ser utilizado para iterar sobre as propriedades de um objeto.

Exemplo:

let obj = { nome: 'João', idade: 25 };
for (let prop in obj) {
    console.log(prop, obj[prop]);
}

`],
    ['for_eficiencia', `
O laço "for" é eficiente para iteração, principalmente em arrays grandes, quando comparado com outros tipos de laços.

`],

    // for com of
    ['for_of', 'Laço for...of'],
    ['for_of_exemplo', `
O "for...of" é usado para iterar diretamente sobre os valores de objetos iteráveis, como arrays e strings.

Exemplo:

let arr = [1, 2, 3];
for (let valor of arr) {
    console.log(valor); // 1, 2, 3
}

`],
    ['for_of_com_arrays', `
Usando "for...of" para iterar sobre arrays.

Exemplo:

let arr = ['maçã', 'banana', 'laranja'];
for (let fruta of arr) {
    console.log(fruta); // maçã, banana, laranja
}

`],
    ['for_of_com_strings', `
O "for...of" pode ser usado para iterar sobre caracteres de uma string.

Exemplo:

let palavra = 'JavaScript';
for (let char of palavra) {
    console.log(char); // J, a, v, a, S, c, r, i, p, t
}

`],
    ['for_of_com_objetos', `
Iterar sobre objetos com "for...of" não é possível diretamente. Apenas arrays e outros objetos iteráveis podem ser usados.

Exemplo:

let arr = [[1, 'a'], [2, 'b']];
for (let [num, letra] of arr) {
    console.log(num, letra); // 1 a, 2 b
}

`],

    // for com in
    ['for_in', 'Laço for...in'],
    ['for_in_exemplo', `
O "for...in" é usado para iterar sobre as propriedades de objetos.

Exemplo:

let obj = { nome: 'Carlos', idade: 30 };
for (let chave in obj) {
    console.log(chave, obj[chave]);
}

`],
    ['for_in_com_objetos', `
Utilizando "for...in" para acessar propriedades de objetos.

Exemplo:

let pessoa = { nome: 'Ana', idade: 28 };
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

`],
    ['for_in_com_arrays', `
Usar "for...in" em arrays não é recomendado, pois ele itera sobre os índices, e não sobre os valores. Prefira "for" ou "for...of".

Exemplo:

let arr = [10, 20, 30];
for (let index in arr) {
    console.log(index); // 0, 1, 2
}

`],
    ['for_in_limitações', `
O "for...in" tem limitações quando usado com arrays, como a iteração sobre índices e propriedades herdadas.

`],



    // Laços de Repetição

    // while
    ['while', 'Laço while'],
    ['while_exemplo', `
O \`while\` é usado para executar um bloco de código enquanto uma condição for verdadeira.

Exemplo:
\`\`\`js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
\`\`\`
`],
    ['while_uso_com_condicoes', `
O \`while\` pode ser utilizado com condições variáveis, permitindo uma execução contínua até que a condição seja alterada.

Exemplo:
\`\`\`js
let x = 0;
while (x < 10) {
    x += 2; 
    console.log(x); // 2, 4, 6, 8, 10
}
\`\`\`
`],
    ['while_condicional_infinita', `
Um laço \`while\` sem uma condição de parada adequada pode resultar em um laço infinito, o que deve ser evitado.

Exemplo de laço infinito:
\`\`\`js
let x = 0;
while (x < 5) {
    console.log(x); // x nunca é alterado, causando um loop infinito
}
\`\`\`
Sempre garanta que a condição de saída será eventualmente atendida.
`],

    // do...while
    ['do_while', 'Laço do...while'],
    ['do_while_exemplo', `
O \`do...while\` é semelhante ao \`while\`, mas a condição é verificada após a execução do código, garantindo ao menos uma execução.

Exemplo:
\`\`\`js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
\`\`\`
`],
    ['do_while_uso_com_condicoes', `
O laço \`do...while\` pode ser útil quando você deseja garantir que o código seja executado pelo menos uma vez, independentemente da condição.

Exemplo:
\`\`\`js
let x = 10;
do {
    console.log(x);
    x++;
} while (x < 10);
\`\`\`
A condição é verificada após a primeira execução, portanto o laço sempre executa ao menos uma vez.
`],
    ['do_while_vs_while', `
A diferença entre \`do...while\` e \`while\` é que no \`do...while\`, o código será executado pelo menos uma vez, pois a condição é verificada após a execução.

Exemplo de \`while\`:
\`\`\`js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
\`\`\`
Exemplo de \`do...while\`:
\`\`\`js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
\`\`\`
`],

    // break e continue
    ['break_continue', 'Instruções break e continue'],
    ['break_funcao', `
A instrução \`break\` interrompe a execução de um laço ou switch.

Exemplo:
\`\`\`js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Interrompe o laço quando i for 3
    }
    console.log(i); // 0, 1, 2
}
\`\`\`
`],
    ['continue_funcao', `
A instrução \`continue\` pula a iteração atual do laço e vai para a próxima.

Exemplo:
\`\`\`js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Pula quando i for 3
    }
    console.log(i); // 0, 1, 2, 4
}
\`\`\`
`],
    ['break_continue_em_for', 'Uso de break e continue no Laço for'],
    ['break_continue_em_while', 'Uso de break e continue no Laço while'],

    // loops infinitos
    ['loop_infinito', 'Laços Infinitos'],
    ['loop_infinito_prevenção', `
Laços infinitos podem ocorrer quando a condição de parada nunca é atingida, causando consumo de recursos e travamento do programa.

Exemplo de laço infinito:
\`\`\`js
while (true) {
    console.log('Este loop nunca termina');
}
\`\`\`
Evite a condição \`true\` em laços sem uma outra forma de controle.
`],
    ['loop_infinito_diagnostico', 'Diagnóstico de Laços Infinitos'],

    // Tratamento de Erros
    ['tratamento_erros', 'Tratamento de Erros'],

    // try/catch
    ['try_catch', 'Bloco try/catch'],
    ['uso_basico_try_catch', `
O bloco \`try/catch\` é utilizado para capturar e tratar exceções de forma controlada, evitando que o código quebre abruptamente.

Exemplo:
\`\`\`js
try {
    let x = 10 / 0;
    console.log(x);
} catch (error) {
    console.log('Erro:', error.message);
}
\`\`\`
`],
    ['tratamento_excecoes', `
Dentro do \`catch\`, você pode tratar exceções específicas de acordo com o tipo de erro que ocorrer.

Exemplo:
\`\`\`js
try {
    let y = undefined;
    console.log(y.toString());
} catch (error) {
    console.log('Erro:', error instanceof TypeError);
}
\`\`\`
`],
    ['encadeamento_try_catch', `
Você pode encadear blocos \`try/catch\` para tratar erros em diferentes níveis de profundidade ou em diferentes tipos de exceções.

Exemplo:
\`\`\`js
try {
    try {
        throw new Error('Erro interno');
    } catch (innerError) {
        console.log('Erro interno capturado:', innerError.message);
    }
} catch (outerError) {
    console.log('Erro externo capturado:', outerError.message);
}
\`\`\`
`],
    ['finally', 'Bloco finally em try/catch'],





    // throw
    ['throw', 'Instrução throw'],
    ['lançamento_excecao', `
A instrução \`throw\` permite lançar uma exceção explicitamente em JavaScript. Ela interrompe a execução do código e pode ser capturada posteriormente com \`try/catch\`.

Exemplo:
\`\`\`js
throw new Error('Algo deu errado!');
\`\`\`
`],
    ['throw_com_customizado', `
Você pode lançar erros customizados utilizando a instrução \`throw\`. Isso é útil para lançar erros com mensagens específicas ou tipos personalizados.

Exemplo:
\`\`\`js
function validaIdade(idade) {
    if (idade < 18) {
        throw new Error('Idade mínima é 18 anos');
    }
    return true;
}
\`\`\`
`],
    ['fluxo_erro_throw', `
Quando você utiliza \`throw\`, o fluxo de execução é interrompido e o controle é transferido para o \`catch\` mais próximo, ou para o manipulador global de erros.

Exemplo:
\`\`\`js
try {
    throw new Error('Erro de exemplo');
} catch (err) {
    console.log(err.message); // "Erro de exemplo"
}
\`\`\`
`],

    // tipos de erro
    ['error_handling', 'Gerenciamento de Erros'],
    ['captura_erros', `
A captura de erros é feita principalmente com os blocos \`try/catch\`. Você pode interceptar e tratar erros em partes específicas do código.

Exemplo:
\`\`\`js
try {
    let result = someFunction();
} catch (err) {
    console.error('Erro capturado:', err);
}
\`\`\`
`],
    ['propriedades_erro', `
Objetos de erro possuem algumas propriedades como \`message\`, \`name\`, e \`stack\`, que fornecem detalhes sobre o erro.

Exemplo:
\`\`\`js
try {
    throw new Error('Erro de exemplo');
} catch (err) {
    console.log(err.name);    // "Error"
    console.log(err.message); // "Erro de exemplo"
    console.log(err.stack);   // Stack trace
}
\`\`\`
`],
    ['gerenciamento_erro_global', `
Erros globais são erros não capturados por \`try/catch\`. JavaScript fornece a instrução \`window.onerror\` ou \`process.on('uncaughtException')\` para capturar erros não tratados em nível global.

Exemplo de erro global:
\`\`\`js
setTimeout(() => {
    throw new Error('Erro global!');
}, 1000);
\`\`\`
`],
    ['tratamento_erro_assincrono', `
Erros em funções assíncronas, como aquelas que utilizam \`async/await\`, devem ser tratados com \`try/catch\` dentro da função assíncrona ou com \`catch\` em promessas.

Exemplo com \`async/await\`:
\`\`\`js
async function fetchData() {
    try {
        let response = await fetch('url');
        let data = await response.json();
    } catch (error) {
        console.error('Erro:', error);
    }
}
\`\`\`
`],

    // erro customizados
    ['custom_error', 'Erros Personalizados'],
    ['definicao_erros_personalizados', `
Erros personalizados são úteis quando você deseja criar tipos específicos de erro, geralmente estendendo a classe \`Error\` do JavaScript.

Exemplo:
\`\`\`js
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}
\`\`\`
`],
    ['erro_personalizado_em_js', `
Você pode criar erros personalizados utilizando a classe \`Error\` e suas propriedades como \`message\` e \`name\`.

Exemplo de erro personalizado:
\`\`\`js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
\`\`\`
`],
    ['lançamento_erro_personalizado', `
Erros personalizados podem ser lançados com \`throw\`, proporcionando maior controle sobre os tipos de erro que ocorrem na aplicação.

Exemplo de lançamento de erro personalizado:
\`\`\`js
throw new ValidationError('Valor inválido');
\`\`\`
`],

    // pilhas
    ['call_stack', 'Call Stack em JavaScript'],
    ['call_stack_funcao', `
A \`call stack\` (pilha de chamadas) é uma estrutura que armazena a ordem das funções que são chamadas no código. Quando uma função é chamada, ela é empilhada; quando retorna, é desempilhada.

Exemplo:
\`\`\`js
function A() { B(); }
function B() { C(); }
function C() { console.log('Função C executada'); }
A();
\`\`\`
`],
    ['call_stack_pilha', `
Quando ocorre um erro, o JavaScript gera uma pilha de execução (stack trace) que mostra a sequência de chamadas de funções que levaram ao erro.

Exemplo de stack trace:
\`\`\`js
Uncaught Error: Something went wrong
    at C (app.js:10)
    at B (app.js:6)
    at A (app.js:2)
    at app.js:1
\`\`\`
`],
    ['pilhas_filas', 'Pilhas e Filas em JavaScript'],
    ['pilha', 'Pilha - Conceito e Implementação'],
    ['definicao_pilha', `
Pilha é uma estrutura de dados do tipo LIFO (Last In, First Out). O último elemento inserido é o primeiro a ser removido.

Exemplo:
\`\`\`js
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
\`\`\`
`],
    ['operacoes_pilha', 'Operações com Pilha (push, pop, peek)'],
    ['pilha_exemplo', 'Exemplo de Implementação de Pilha'],
    ['pilha_usos', 'Usos Comuns de Pilha'],

    // filas
    ['fila', 'Fila - Conceito e Implementação'],
    ['definicao_fila', `
Fila é uma estrutura de dados do tipo FIFO (First In, First Out). O primeiro elemento inserido é o primeiro a ser removido.

Exemplo:
\`\`\`js
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.shift()); // 1
\`\`\`
`],
    ['operacoes_fila', 'Operações com Fila (enqueue, dequeue, front)'],
    ['fila_exemplo', 'Exemplo de Implementação de Fila'],
    ['fila_usos', 'Usos Comuns de Fila'],

    // listas ligadas
    ['listas_ligadas', 'Listas Ligadas (Implementação Básica)'],



    // listas simples
    ['listas_ligadas_simples', 'Listas Ligadas Simples'],
    ['definicao_lista_simples', 'Uma lista ligada simples é uma estrutura de dados linear em que cada elemento aponta para o próximo. O último elemento aponta para null, indicando o fim da lista.'],
    ['operacoes_lista_simples', 'As operações básicas em listas ligadas simples incluem inserção (início, meio e fim), exclusão (início, meio e fim) e travessia (percorrendo todos os elementos).'],
    ['implementacao_lista_simples', 'A implementação de uma lista ligada simples exige uma estrutura de nó com referências ao próximo elemento e um ponteiro para o primeiro nó.'],

    // listas duplas
    ['listas_ligadas_duplas', 'Listas Ligadas Duplas'],
    ['definicao_lista_dupla', 'Listas ligadas duplas são semelhantes às listas simples, mas cada nó tem dois ponteiros: um para o próximo nó e outro para o nó anterior. Isso permite a travessia em ambas as direções.'],
    ['operacoes_lista_dupla', 'As operações incluem inserção (em qualquer ponto da lista), exclusão (em qualquer ponto) e travessia (tanto do início ao fim quanto do fim ao início).'],
    ['implementacao_lista_dupla', 'A implementação exige uma estrutura de nó com referências para o próximo e o anterior, além de um ponteiro para o primeiro e último nó da lista.'],

    // listas circulares
    ['listas_ligadas_circulares', 'Listas Ligadas Circulares'],
    ['definicao_lista_circular', 'Uma lista ligada circular é uma lista onde o último nó aponta de volta para o primeiro nó, criando um ciclo. Pode ser simples ou dupla.'],
    ['operacoes_lista_circular', 'As operações incluem inserção (em qualquer ponto da lista), exclusão (em qualquer ponto) e travessia (circularmente, sem fim).'],
    ['implementacao_lista_circular', 'Na implementação, o ponteiro do último nó aponta para o primeiro, ou o primeiro e último nó se referenciam mutuamente, para garantir o ciclo contínuo.'],

    // Introdução aos Paradigmas
    ['paradigmas_introducao', 'Introdução aos Paradigmas de Programação'],
    ['paradigmas_o_que_sao', 'Paradigmas de programação são abordagens fundamentais para a organização e execução de programas de computador, determinando como os problemas são resolvidos.'],
    ['paradigmas_por_que_importam', 'Estudar paradigmas de programação é essencial para compreender diferentes abordagens para resolver problemas, otimizar desempenho e promover legibilidade e manutenção do código.'],
    ['paradigmas_classificacao', 'Os paradigmas de programação são classificados, principalmente, como imperativos e declarativos, baseados na forma como o programador descreve a solução do problema.'],

    // Paradigma Imperativo
    ['imperativo_conceito', 'O paradigma imperativo foca na sequência de instruções que modificam o estado do sistema. O programador especifica como a solução será obtida, descrevendo os passos exatos.'],
    ['imperativo_memoria_estado', 'No paradigma imperativo, há controle explícito do estado e da memória. O programa interage diretamente com o estado do sistema e manipula variáveis de forma sequencial.'],
    ['imperativo_exemplos_js', 'Exemplos de código imperativo em JavaScript incluem o uso de loops (for, while), manipulação de variáveis e execução de comandos de forma sequencial.'],
    ['imperativo_comparacao', 'O paradigma imperativo é muitas vezes comparado ao declarativo pela sua ênfase em "como fazer" em vez de "o que fazer", resultando em código mais detalhado e dependente de estado.'],

    // Paradigma Declarativo
    ['declarativo_conceito', 'O paradigma declarativo foca no "o que" deve ser feito, sem detalhar como. O programador descreve a lógica do problema, deixando que o sistema decida como executá-lo.'],
    ['declarativo_estilo', 'No estilo declarativo, a ênfase está na descrição do problema, deixando que o sistema gerencie o controle de fluxo e a execução, muitas vezes através de abstrações de alto nível.'],
    ['declarativo_sql_html', 'SQL e HTML são exemplos de linguagens declarativas. SQL descreve as consultas desejadas sem especificar como os dados são recuperados, e HTML descreve a estrutura de uma página sem controlar a renderização.'],
    ['declarativo_exemplos_js', 'Em JavaScript, métodos como map(), filter(), e reduce() exemplificam a programação declarativa, onde o foco está em transformar dados sem se preocupar com o controle explícito do fluxo de execução.']


    // Paradigma Funcional
    ['funcional_conceito', 'O Paradigma Funcional foca em funções como os blocos principais de construção de programas. É baseado em funções puras, imutabilidade e uma abordagem declarativa para o cálculo.'],

    // funções puras
    ['pure_functions', 'Funções puras são funções que, para uma entrada dada, sempre retornam a mesma saída e não causam efeitos colaterais. Elas dependem apenas dos parâmetros passados e não alteram o estado externo.'],
    ['definicao_funcoes_puras', 'Funções puras são aquelas que têm as seguintes propriedades: não alteram o estado externo, não têm efeitos colaterais, e seu retorno depende unicamente dos parâmetros fornecidos.'],
    ['caracteristicas_funcoes_puras', 'As características das funções puras incluem: previsibilidade, reusabilidade, e facilidade de teste. Elas também promovem a imutabilidade, pois não alteram o estado global.'],
    ['beneficios_funcoes_puras', 'Os benefícios de usar funções puras incluem maior previsibilidade, menos erros por efeitos colaterais, e código mais fácil de entender e testar.'],
    ['impureza_funcoes', 'Funções impuras possuem efeitos colaterais, como alterar o estado global, manipular variáveis externas ou interagir com o sistema de entrada e saída, o que pode tornar o código difícil de depurar e testar.'],
    ['pure_functions_exemplo', 'Exemplo de função pura: function soma(a, b) { return a + b; } Essa função sempre retornará o mesmo resultado para os mesmos argumentos e não terá efeitos colaterais.'],

    // Funções de Alta Ordem e Programação Funcional
    ['higher_order', 'Funções de Alta Ordem são funções que podem receber outras funções como argumentos ou retornar outras funções como resultado. Elas permitem uma grande flexibilidade no design de programas.'],
    ['definicao_higher_order', 'Funções de alta ordem são aquelas que operam sobre outras funções. Elas podem ser usadas para modificar o comportamento de funções, por exemplo, aplicando funções em sequência ou criando funções combinadas.'],
    ['caracteristicas_higher_order', 'Características de funções de alta ordem incluem a possibilidade de manipular funções, passando-as como parâmetros e retornando novas funções, além de ajudar na composição de comportamentos.'],
    ['higher_order_exemplo', 'Exemplo de função de alta ordem: function aplicarOperacao(a, b, operacao) { return operacao(a, b); } Aqui, a função aplicarOperacao recebe outra função como argumento.'],

    ['funcional_closure', 'Closures são funções que capturam o escopo de variáveis de seu contexto externo, permitindo o acesso a essas variáveis mesmo após o término da execução da função que as declarou.'],
    ['funcional_currying', 'Currying é uma técnica funcional em que uma função que recebe múltiplos argumentos é transformada em uma sequência de funções, cada uma recebendo um argumento. Isso permite a criação de funções mais especializadas a partir de funções gerais.'],
    ['funcional_recursao', 'A recursão é uma estrutura de controle em programação funcional onde uma função chama a si mesma. É usada para resolver problemas que podem ser divididos em subproblemas semelhantes.'],
    ['funcional_lazy_eval', 'Lazy Evaluation é a técnica de avaliação adiada, onde as expressões são avaliadas apenas quando são necessárias. Isso pode otimizar o desempenho, evitando cálculos desnecessários.'],
    ['funcional_libs', 'Bibliotecas como Ramda, Lodash/fp e RxJS facilitam a programação funcional em JavaScript, oferecendo funções para manipulação imutável de dados e operações assíncronas.'],

    // Paradigma Orientado a Objetos
    ['oop_conceito', 'O paradigma de Orientação a Objetos (OOP) é baseado na organização do código em torno de objetos, que representam entidades com estado (propriedades) e comportamento (métodos).'],
    ['poo_basico', 'Em JavaScript, a programação orientada a objetos envolve a criação de objetos, definição de classes e uso de herança, encapsulamento e polimorfismo para organizar e estruturar o código.'],

    // Encapsulamento
    ['encapsulamento', 'Encapsulamento é o conceito de esconder o estado interno de um objeto e expor apenas o comportamento necessário. Isso é feito por meio de métodos públicos e privados.'],
    ['definicao_encapsulamento', 'O encapsulamento significa que os dados de um objeto são acessados e modificados somente através de seus métodos, protegendo o estado interno do objeto de alterações externas indesejadas.'],
    ['encapsulamento_objetos', 'Encapsular objetos significa proteger suas propriedades, fazendo com que elas não possam ser acessadas diretamente, mas somente por meio de métodos definidos.'],
    ['encapsulamento_metodos', 'Encapsular métodos envolve definir funções dentro de um objeto, controlando o acesso e a manipulação de dados internos através de métodos públicos e privados.'],
    ['encapsulamento_propriedades', 'Encapsulamento de propriedades significa que as propriedades de um objeto são inacessíveis diretamente de fora, sendo acessadas ou modificadas apenas através de getters e setters.'],
    ['encapsulamento_acesso', 'Getters e setters são métodos que permitem controlar o acesso e a modificação de propriedades encapsuladas, proporcionando um meio de validar ou alterar valores antes de alterá-los.'],

    // Herança
    ['heranca', 'Herança é um mecanismo de OOP onde uma classe pode herdar características (propriedades e métodos) de outra classe, facilitando o reuso de código e a criação de hierarquias.'],
    ['definicao_heranca', 'Herança permite que uma classe derive de outra, adquirindo seus atributos e comportamentos, e possibilitando a extensão e personalização dos mesmos.'],
    ['heranca_classe', 'Herança entre classes envolve a criação de uma classe filha que herda propriedades e métodos da classe pai, podendo sobrescrevê-los ou estendê-los.'],
    ['heranca_prototype', 'Em JavaScript, a herança pode ser implementada via prototype, permitindo que objetos herdem diretamente de outros objetos e compartilhem métodos e propriedades.'],
    ['heranca_estrutura', 'A estrutura de herança em JavaScript envolve a manipulação do prototype chain, onde objetos podem acessar propriedades e métodos de outros objetos através de uma cadeia de protótipos.'],
    ['overriding', 'Sobrescrita de métodos (Method Overriding) ocorre quando uma classe filha redefine um método herdado de uma classe pai, alterando seu comportamento.']


    // Polimorfismo
    ['polimorfismo', 'Polimorfismo em JavaScript'],
    ['definicao_polimorfismo', 'Polimorfismo é o conceito de permitir que objetos de diferentes classes sejam tratados de maneira uniforme, geralmente através de herança e interfaces, com base no comportamento que eles compartilham.'],
    ['polimorfismo_classes', 'Em JavaScript, o polimorfismo pode ser implementado por meio de herança e sobrescrita de métodos, permitindo que diferentes classes respondam a chamadas de métodos de maneira distinta.'],
    ['polimorfismo_metodos', 'Polimorfismo de métodos ocorre quando classes diferentes implementam métodos com o mesmo nome, mas com comportamentos distintos. Isso é essencial para aumentar a flexibilidade e reutilização de código.'],

    // Abstração
    ['abstracao', 'Abstração em POO'],
    ['definicao_abstracao', 'Abstração é o processo de ocultar detalhes de implementação e mostrar apenas a funcionalidade necessária. Em POO, isso é feito através da criação de classes e interfaces que representam o comportamento essencial dos objetos.'],
    ['abstracao_com_classes', 'Abstração com classes envolve a criação de modelos (ou templates) que ocultam detalhes de implementação e expõem apenas as operações e comportamentos relevantes para o usuário da classe.'],
    ['abstracao_interface', 'Abstração através de interfaces é um conceito que permite definir um contrato para as classes implementarem. Embora JavaScript não possua interfaces nativas, elas podem ser simuladas com classes abstratas ou utilizando o padrão de design.'],

    // Modularização
    ['modulos', 'Módulos ES6 (import/export)'],
    ['introducao_modulos', 'Os módulos ES6 permitem dividir o código em arquivos menores e reutilizáveis, facilitando a organização, manutenção e a modularização do código.'],
    ['modulos_import', 'Importando módulos permite que funções, objetos ou variáveis de um arquivo sejam acessados em outro, facilitando a reutilização do código e a organização de grandes aplicações.'],
    ['modulos_export', 'Exportar módulos permite que partes específicas do código sejam tornadas acessíveis a outros arquivos, utilizando `export` para expor funções ou variáveis.'],
    ['modulos_default', 'Exportação e Importação Default permitem que um único valor ou objeto seja exportado como o valor padrão de um módulo, facilitando a importação sem precisar especificar o nome.'],
    ['modulos_named', 'Exportação e Importação Nomeada permitem exportar múltiplos itens de um módulo, que depois podem ser importados de forma explícita por nome.'],
    ['modulos_arquivos', 'Organizando módulos em arquivos ajuda a manter o código limpo e modular, distribuindo funcionalidades entre diferentes arquivos e mantendo a estrutura do projeto mais escalável.'],

    ['oop_js_prototype', 'OOP em JavaScript: Prototipagem vs Classes'],
    ['oop_classe_vs_factory', 'Classe vs Factory Function: A diferença entre usar classes e funções fábricas em JavaScript, ambas fornecendo formas de criar objetos, mas com comportamentos e sintaxes distintas.'],
    ['oop_solid', 'Princípios SOLID Aplicados ao JS: Aplicação dos princípios SOLID (Responsabilidade Única, Aberto/Fechado, Substituição de Liskov, Segregação de Interfaces, Inversão de Dependência) no design de sistemas orientados a objetos em JavaScript.'],
    ['oop_padroes', 'Padrões de Projeto e OOP: Uso de padrões de design, como Singleton, Factory, Strategy, e Observer, para resolver problemas comuns de design de software dentro de OOP.'],
    ['poo_com_js', 'Aplicando POO em JavaScript: Como a programação orientada a objetos pode ser aplicada no JavaScript utilizando classes, herança, polimorfismo e encapsulamento.'],
    ['caracteristicas_poo', 'Características do POO incluem a organização do código em objetos e classes, encapsulamento, herança, polimorfismo e abstração, promovendo reutilização de código e modularidade.'],

    // Classes
    ['classes', 'Classes e Prototypes em JavaScript'],
    ['definicao_classes', 'Uma classe é um molde para criar objetos, definindo propriedades e métodos comuns a todos os objetos daquela classe. Em JavaScript, as classes são sintaticamente açúcar para funções construtoras.'],
    ['classes_construtor', 'O construtor em uma classe é um método especial utilizado para inicializar novos objetos dessa classe, recebendo parâmetros para configurar propriedades do objeto.'],
    ['classes_metodos', 'Métodos em classes são funções definidas dentro da classe que definem comportamentos para os objetos criados a partir dessa classe.'],
    ['classes_prototype', 'Em JavaScript, cada classe possui um objeto prototype que contém métodos e propriedades compartilhados entre todas as instâncias daquela classe.'],

    // Métodos Estáticos
    ['metodos_estaticos', 'Métodos Estáticos em Classes'],
    ['definicao_metodos_estaticos', 'Métodos estáticos são funções associadas à classe em vez de às instâncias da classe. Eles são chamados diretamente na classe e não podem acessar propriedades de instância.'],
    ['usando_metodos_estaticos', 'Métodos estáticos podem ser usados para funções utilitárias que não dependem do estado de uma instância específica. Exemplo: `ClassName.methodName()`.'],

    // Getters e Setters
    ['getters_setters', 'Getters e Setters em Classes'],
    ['definicao_getters_setters', 'Getters e setters são métodos especiais que permitem acessar e modificar as propriedades de um objeto de forma controlada, garantindo que valores sejam validados ou transformados antes de serem atribuídos.'],
    ['usando_getters', 'Getters são métodos que permitem acessar as propriedades de um objeto. Eles são chamados como se fossem propriedades, mas realizam o processo de leitura através de uma função.'],
    ['usando_setters', 'Setters são métodos que permitem modificar as propriedades de um objeto. Eles permitem controlar a atribuição de valores a uma propriedade e podem validar ou transformar esses valores antes de atribuí-los.']


    // Paradigma Baseado em Eventos
    ['event_driven_conceito', 'Paradigma Baseado em Eventos'],
    ['event_driven_loop', 'Event Loop e Assincronismo: O evento é tratado de forma assíncrona, com um ciclo de eventos gerenciado pela linguagem para garantir que o fluxo do programa não seja bloqueado por operações demoradas, como E/S ou timers.'],
    ['event_driven_pubsub', 'Observer / Pub-Sub: O padrão Publish-Subscribe é amplamente usado em arquiteturas baseadas em eventos, onde componentes podem se inscrever e reagir a eventos sem acoplamento direto.'],
    ['event_driven_dom', 'Event Listeners e DOM: A manipulação de eventos no DOM é um exemplo clássico do paradigma baseado em eventos, permitindo a interação dinâmica entre o usuário e a interface.'],
    ['event_driven_react', 'React como Framework Orientado a Eventos: React adota um modelo baseado em eventos para gerenciar a interação do usuário e a atualização da interface por meio de eventos de interação, como cliques e mudanças de estado.'],

    // Paradigma Reativo
    ['reativo_conceito', 'Paradigma Reativo: Fluxo de Dados e Propagação'],
    ['reativo_streams', 'Streams e Observables: O paradigma reativo usa fluxos contínuos de dados (streams) e observáveis para tratar a comunicação assíncrona de maneira eficiente e declarativa.'],
    ['reativo_rxjs', 'RxJS: Reactive Extensions para JavaScript: RxJS é uma biblioteca poderosa que permite o uso de operadores de fluxo de dados assíncronos, como map, filter e merge, baseados no conceito de observáveis.'],
    ['reativo_backpressure', 'Backpressure e Concorrência Controlada: Backpressure é um mecanismo para controlar a taxa de envio de dados em sistemas reativos, evitando sobrecarga do sistema e garantindo um fluxo constante de dados.'],
    ['reativo_aplicacoes', 'Aplicações Reativas com RxJS, Redux, MobX: Frameworks como Redux e MobX, combinados com RxJS, possibilitam a criação de aplicações com estados previsíveis e reativos.'],

    // Paradigma Concorrente e Paralelo
    ['concorrente_paralelo_conceito', 'Paradigmas Concorrentes vs Paralelos'],
    ['concorrente_event_loop', 'Concorrência no JS com Event Loop: O JavaScript usa o Event Loop para lidar com tarefas assíncronas sem bloquear o thread principal, gerenciando a concorrência de maneira eficiente.'],
    ['concorrente_promises', 'Promises, Async/Await e Microtasks: As Promises e o Async/Await são ferramentas essenciais para o tratamento de operações assíncronas no JavaScript, permitindo uma programação mais simples e legível.'],
    ['concorrente_workers', 'Web Workers e Threads em JS: Web Workers permitem que partes do código JavaScript sejam executadas em threads separados, ajudando a melhorar o desempenho em tarefas pesadas e evitando o bloqueio do thread principal.'],
    ['concorrente_actor_model', 'Actor Model e Isolamento por Mensagem: O modelo de atores é um modelo de concorrência baseado em entidades independentes (atores) que se comunicam por meio de mensagens, com isolamento de estado entre eles.'],

    // Paradigma Lógico
    ['logico_conceito', 'Paradigma Lógico: Programação por Regras'],
    ['logico_prolog', 'Exemplo com Prolog: Prolog é uma linguagem baseada no paradigma lógico, onde a programação é feita através de uma série de declarações lógicas que podem ser consultadas para encontrar soluções.'],
    ['logico_aplicacao', 'Aplicações em Inferência e IA: Paradigmas lógicos são amplamente usados em inteligência artificial, especialmente para sistemas baseados em regras e inferências, como recomendadores ou sistemas especialistas.'],

    // Comparações e Hibridismo
    ['comparativo_paradigmas', 'Comparação entre Paradigmas: Comparar os diferentes paradigmas ajuda a entender seus pontos fortes, fraquezas e as situações em que são mais eficazes, além de ilustrar como combinar abordagens diferentes.'],
    ['js_multi_paradigma', 'JavaScript como Linguagem Multiparadigma: JavaScript é uma linguagem multiparadigma, permitindo a programação imperativa, orientada a objetos, funcional, baseada em eventos e reativa dentro do mesmo código.'],
    ['js_estilos_mistos', 'Estilo Misto: OOP + Funcional + Eventos: Em JavaScript, é comum usar estilos mistos de programação, como POO com funcional e eventos, permitindo aproveitar o melhor de cada paradigma.'],
    ['js_melhores_usos', 'Quando Usar Cada Paradigma no JS: O uso de cada paradigma depende do problema a ser resolvido, com a programação orientada a objetos sendo ideal para sistemas grandes e complexos, enquanto a funcional é útil para manipulação de dados e funções puras.'],

    // Conclusão
    ['conclusao_resumo', 'Resumo Geral sobre Paradigmas: Uma visão geral sobre os paradigmas de programação abordados, suas principais características e como eles ajudam a resolver problemas de forma eficiente e estruturada.'],
    ['conclusao_estudo_aplicado', 'Como Aplicar Paradigmas em Projetos Reais: Como utilizar os diferentes paradigmas de programação em projetos reais para aumentar a qualidade do código e facilitar a manutenção.'],
    ['conclusao_proximos_passos', 'Próximos Passos: Dominar Arquitetura e Estilo de Código: Aprofundar os conhecimentos em arquitetura de software e em melhores práticas de design de código, aproveitando os paradigmas para criar sistemas mais robustos e escaláveis.']


    // async e await e promisses
    ['async_await', 'Async/Await em JavaScript'],
    ['definicao_async_await', 'Definição de async/await: O async/await é uma maneira mais simples e legível de lidar com código assíncrono, tornando-o mais parecido com o código síncrono.'],
    ['vantagens_async_await', 'Vantagens do uso de async/await: Facilita a leitura e manutenção de código assíncrono, reduzindo o uso de callbacks e melhorando a clareza.'],

    // async
    ['async', 'Funções Assíncronas (async): Funções declaradas com o modificador async retornam uma Promise e podem ser usadas com await para simplificar o código assíncrono.'],
    ['funcao_async', 'Definindo Funções Assíncronas: A palavra-chave async é usada para declarar funções que retornam implicitamente uma Promise.'],
    ['execucao_async', 'Execução de Funções Assíncronas: O código assíncrono executa sem bloquear o fluxo de controle principal, permitindo a execução simultânea de outras operações.'],
    ['async_hooks', 'Async Hooks em Node.js: Async Hooks permitem o rastreamento do ciclo de vida de funções assíncronas em Node.js, proporcionando uma maneira de monitorar promessas, callbacks, etc.'],
    ['async_hooks_conceito', 'Conceito de Async Hooks: São APIs que permitem realizar monitoramento de operações assíncronas, ajudando no gerenciamento de contexto e diagnóstico de problemas em Node.js.'],
    ['async_hooks_uso', 'Como Usar Async Hooks: Usar Async Hooks para capturar o ciclo de vida de eventos assíncronos, como quando uma Promise é criada, executada ou concluída.'],
    ['async_paralelismo', 'Execução Paralela com Promises: O uso de promises permite que várias operações assíncronas sejam executadas paralelamente, como no caso de Promise.all ou Promise.race.'],
    ['async_paralelismo_conceito', 'Conceito de Execução Paralela: A execução paralela refere-se ao processamento de múltiplas tarefas ao mesmo tempo, sem depender da ordem de execução.'],
    ['async_paralelismo_exemplo', 'Exemplo de Execução Paralela de Promessas: Exemplo prático onde múltiplas promessas são executadas simultaneamente e seus resultados coletados de forma assíncrona.'],
    ['async_wait_cancelamento', 'Cancelamento de Funções Assíncronas com AbortController: O AbortController permite o cancelamento de operações assíncronas como fetch e outras promessas.'],
    ['abortcontroller_conceito', 'Conceito de AbortController: Uma API para controlar a execução de operações assíncronas e abortá-las quando necessário.'],
    ['abortcontroller_exemplo', 'Exemplo de Cancelamento com AbortController: Exemplo prático de como usar o AbortController para abortar uma operação assíncrona, como uma requisição HTTP.'],

    // await
    ['await', 'Aguardando Promessas com await: O `await` é usado para pausar a execução de uma função assíncrona até que uma Promise seja resolvida ou rejeitada.'],
    ['uso_await', 'Uso do await para Aguardar Promessas: Como usar a palavra-chave await para esperar a resolução de promessas dentro de funções async.'],
    ['erro_await', 'Tratando Erros com await: Como capturar e tratar erros ao usar o await, geralmente com try/catch.'],

    // promisses
    ['promises', 'Promises em JavaScript: Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.'],
    ['definicao_promises', 'Definição de Promises: Promises são usadas para lidar com operações assíncronas, onde o valor final pode estar disponível no futuro.'],
    ['status_promises', 'Status das Promises (pending, resolved, rejected): O estado de uma promise pode ser pendente, resolvida ou rejeitada, e o método .then() é usado para lidar com esses estados.'],
    ['promises_avancado', 'Promise.all, Promise.race, Promise.any'],
    ['promise_all', 'Promise.all e Concorrência: O método Promise.all permite executar múltiplas promessas em paralelo e aguardar todas as suas resoluções.'],
    ['promise_race', 'Promise.race e Atrasos Controlados: Promise.race retorna a primeira promessa que for resolvida ou rejeitada.'],
    ['promise_any', 'Promise.any e Resultados Válidos: Promise.any retorna a primeira promessa que resolve com sucesso, ignorando as promessas rejeitadas.'],
    ['promises_concorrentes', 'Concorrência de Promessas: A execução concorrente de promessas permite a execução paralela de várias tarefas assíncronas, melhorando a performance.'],
    ['promises_encadeadas', 'Encadeamento de Promessas Avançado: O encadeamento de promessas envolve o uso de .then() para criar uma cadeia de promessas.'],
    ['promises_encadeamento', 'Encadeamento de Promessas (Promise Chaining): Encadear promessas é útil quando é necessário executar tarefas assíncronas de forma sequencial.'],
    ['promises_encadeamento_conceito', 'Entendendo o Encadeamento de Promessas: O encadeamento de promessas permite que as promessas sejam tratadas de maneira fluida e sem a complexidade de callbacks aninhados.'],
    ['promises_encadeamento_exemplo', 'Exemplo de Encadeamento de Promessas: Exemplo prático de encadeamento de promessas usando `.then()` e `.catch()`.'],
    ['promises_como_tratar_erros', 'Como Tratar Erros em Promessas'],
    ['promises_tratamento_erros_conceito', 'Tratando Erros no Encadeamento de Promessas: Como capturar erros durante o encadeamento usando `.catch()` ou no bloco try/catch com async/await.'],
    ['promises_tratamento_erros_exemplo', 'Exemplo de Tratamento de Erros em Promessas: Exemplo de como tratar erros ao trabalhar com promessas encadeadas.'],
    ['promise.all', 'Promise.all: Execução Concorrente de Promessas'],
    ['promise_all_conceito', 'Entendendo Promise.all'],
    ['promise_all_exemplo', 'Exemplo de Uso do Promise.all'],
    ['promise.race', 'Promise.race: Primeira Promessa que Resolve'],
    ['promise_race_conceito', 'Conceito de Promise.race'],
    ['promise_race_exemplo', 'Exemplo de Uso do Promise.race'],
    ['promise.any', 'Promise.any: Primeira Promessa que Resolve com Sucesso'],
    ['promise_any_conceito', 'Conceito de Promise.any'],
    ['promise_any_exemplo', 'Exemplo de Uso do Promise.any'],

    // then
    ['promise_then', 'Encadeamento de Promessas com then'],
    ['then_sintaxe', 'Sintaxe do método then'],
    ['encadeamento_then', 'Encadeamento de then em Promises'],

    // promise catch
    ['promise_catch', 'Tratando Erros em Promessas com catch'],
    ['catch_sintaxe', 'Sintaxe do método catch'],
    ['tratamento_erro_promise', 'Tratando Erros de Promise com catch'],

    // streams
    ['manipulacao_streams', 'Manipulação de Streams em JavaScript'],
    ['streams_conceito', 'Conceito de Streams: Streams são objetos que permitem ler ou gravar dados de forma sequencial e assíncrona, como arquivos ou dados de rede.'],
    ['streams_uso', 'Como Trabalhar com Streams em JavaScript'],
    ['streams_exemplo', 'Exemplo de Manipulação de Streams']


    // Segurança e Práticas Avançadas
    ['seguranca_javascript', 'Segurança em JavaScript'],
    ['seguranca_conceito', 'Conceitos de Segurança em JavaScript: Refere-se às melhores práticas e técnicas para proteger aplicações JavaScript contra vulnerabilidades comuns.'],
    ['melhores_praticas_seguranca', 'Melhores Práticas de Segurança em JavaScript: Estratégias para proteger suas aplicações de ataques e garantir a segurança do código e dados.'],

    // xss
    ['xss', 'Prevenção de Cross-Site Scripting (XSS)'],
    ['xss_conceito', 'O que é Cross-Site Scripting (XSS): XSS é um tipo de vulnerabilidade onde atacantes injetam scripts maliciosos em páginas web, que são executados no navegador de outros usuários.'],
    ['xss_prevenção', 'Técnicas para Prevenção de XSS em JavaScript: Inclui a validação de entradas, o uso de bibliotecas de escape de dados e a implementação de Content Security Policy (CSP).'],
    ['xss_filtros', 'Filtros e Validações para Prevenir XSS: Utilização de filtros de entrada e validação de dados para evitar que código malicioso seja executado nas páginas.'],

    // csrf
    ['csrf', 'Prevenção de Cross-Site Request Forgery (CSRF)'],
    ['csrf_conceito', 'O que é Cross-Site Request Forgery (CSRF): CSRF é uma vulnerabilidade onde um atacante faz com que um usuário autenticado realize ações indesejadas em um site.'],
    ['csrf_prevenção', 'Técnicas para Prevenção de CSRF em JavaScript: Uso de tokens CSRF, verificações de origem e cabeçalhos de referer para garantir a autenticidade das requisições.'],
    ['csrf_tokens', 'Uso de Tokens Anti-CSRF: Utilização de tokens únicos que devem ser enviados junto com as requisições para prevenir CSRF.'],

    // injection sql
    ['injection', 'Prevenção de Injeção de Código (SQL, NoSQL, JS)'],
    ['injection_conceito', 'O que é Injeção de Código: Injeção é uma técnica onde um atacante insere código malicioso em uma aplicação para manipular o banco de dados ou o comportamento da aplicação.'],
    ['prevenir_injection', 'Prevenção de Injeção SQL, NoSQL, e JS: Medidas como o uso de Prepared Statements, validação de entradas e escape de dados são essenciais para proteger contra injeções.'],
    ['sql_injection', 'SQL Injection e suas Prevenções: SQL Injection é a inserção de código SQL malicioso em entradas de dados, podendo ser prevenido com Prepared Statements e ORM.'],
    ['nosql_injection', 'NoSQL Injection e suas Prevenções: NoSQL Injection envolve a manipulação de consultas em bancos NoSQL. Prevenção inclui validação e o uso de consultas parametrizadas.'],

    // criptografia
    ['ciphers', 'Criptografia e Cifras em JavaScript'],
    ['criptografia_conceito', 'Conceito de Criptografia: A criptografia é o processo de transformar dados legíveis em uma forma codificada, de modo que somente uma parte autorizada possa acessá-los.'],
    ['criptografia_simetrica', 'Criptografia Simétrica (AES, DES): Criptografia simétrica usa a mesma chave para criptografar e descriptografar os dados, com exemplos como AES e DES.'],
    ['criptografia_assimetrica', 'Criptografia Assimétrica (RSA, ECC): Criptografia assimétrica usa chaves públicas e privadas, como no RSA e ECC, onde uma chave criptografa e a outra descriptografa.'],
    ['criptografia_em_js', 'Implementando Criptografia em JavaScript: Como usar bibliotecas como `crypto` em Node.js ou Web Crypto API para implementar criptografia em aplicações JavaScript.'],

    // hashing
    ['hashing', 'Funções de Hash em JavaScript (bcrypt, scrypt)'],
    ['hashing_conceito', 'Conceito de Funções de Hash: Funções de hash geram um valor fixo a partir de dados de entrada, usado principalmente para armazenar senhas de forma segura.'],
    ['bcrypt', 'Uso de bcrypt para Hash em JavaScript: O bcrypt é um algoritmo de hash seguro que inclui um fator de custo para dificultar ataques de força bruta.'],
    ['scrypt', 'Uso de scrypt para Hash em JavaScript: O scrypt é um algoritmo de hash similar ao bcrypt, mas com maior resistência a ataques de hardware paralelo.'],
    ['salting', 'Uso de Salts em Funções de Hash: O salt é uma string aleatória adicionada ao dado antes de ser processado pela função de hash para evitar ataques de rainbow tables.'],


    // jwt
    ['jwt_token', 'Autenticação com JWT (JSON Web Token)'],
    ['jwt_conceito', 'O que é JSON Web Token (JWT): JWT é um método compacto e seguro para representar informações entre duas partes como um objeto JSON. Usado principalmente em autenticação e troca de informações seguras.'],
    ['jwt_implementacao', 'Implementando Autenticação com JWT em JavaScript: Como implementar autenticação baseada em JWT, gerando tokens e verificando-os nas requisições.'],
    ['jwt_seguranca', 'Segurança com JWT: Práticas Recomendadas: Como garantir que o uso de JWT seja seguro, incluindo armazenamento adequado, validação de assinatura e expiração de tokens.'],
    ['jwt_refresh_token', 'Uso de Refresh Tokens com JWT: Técnica para obter um novo token JWT sem que o usuário precise se autenticar novamente. Usado para sessões longas e segurança aprimorada.'],

    // caching
    ['caching', 'Estratégias de Caching (Redis, Memcached)'],
    ['redis_caching', 'Uso de Redis para Caching: Como usar Redis, um armazenamento de dados na memória, para melhorar o desempenho de leitura em aplicações.'],
    ['memcached_caching', 'Uso de Memcached para Caching: Memcached é outra solução de caching na memória, mais simples e com foco em alta performance para armazenar dados temporários.'],
    ['caching_no_backend', 'Estratégias de Caching no Backend: Como implementar caching no lado do servidor para reduzir a carga de banco de dados e melhorar a resposta das aplicações.'],

    // rate limit
    ['rate_limiting', 'Rate Limiting em APIs'],
    ['rate_limiting_conceito', 'Conceito de Rate Limiting: Técnica para controlar o número de requisições feitas a uma API em um determinado período, evitando sobrecarga e ataques de negação de serviço.'],
    ['rate_limiting_implementacao', 'Implementando Rate Limiting em APIs: Como aplicar rate limiting em uma API usando técnicas como tokens bucket e leaky bucket.'],
    ['limite_de_requisicoes', 'Limite de Requisições por IP/Usuário: Implementando limites de requisição baseados em IP ou usuário para evitar abuso de serviços.'],

    // cors
    ['cros', 'Cross-Origin Resource Sharing (CORS)'],
    ['cros_conceito', 'Conceito de CORS: Mecanismo de segurança que permite ou restringe a requisição de recursos entre diferentes origens (domínios) em uma aplicação web.'],
    ['cros_implementacao', 'Implementando CORS em Aplicações Web: Como configurar e gerenciar CORS no backend de uma aplicação para permitir ou bloquear acessos cross-origin.'],
    ['cros_politicas', 'Políticas de CORS e Segurança: Análise das diversas políticas CORS (ex.: permissões de acesso, controle de headers, etc.) e suas implicações para a segurança das aplicações.'],

    // Monitoramento
    ['monitoramento', 'Monitoramento de Aplicações em JavaScript'],
    ['monitoramento_sistemas', 'Monitoramento de Sistemas em Tempo Real: Como implementar ferramentas e técnicas para monitorar o comportamento das aplicações em tempo real, identificando problemas rapidamente.'],
    ['monitoramento_desempenho', 'Monitoramento de Desempenho de Aplicações JavaScript: Técnicas para analisar o desempenho de aplicações JavaScript, como tempos de resposta, uso de CPU e latência.'],
    ['monitoramento_erros', 'Monitoramento e Relatórios de Erros em JavaScript: Como implementar soluções para monitorar erros e gerar relatórios de falhas nas aplicações JavaScript.'],

    // performace
    ['profiling', 'Profiling e Otimização de Performance em JavaScript'],
    ['profiling_tools', 'Ferramentas de Profiling em JavaScript (Chrome DevTools, Node.js): Como usar ferramentas como Chrome DevTools e Node.js para identificar gargalos de desempenho em seu código JavaScript.'],
    ['profiling_tuning', 'Tuning de Performance com Profiling: Ajustes finos feitos com base em dados coletados durante o profiling para melhorar a performance da aplicação.'],
    ['profiling_exemplo', 'Exemplo de Uso de Profiling para Identificar Gargalos: Demonstração prática de como usar o profiling para encontrar pontos críticos de performance no código JavaScript.'],

    // memoria
    ['heap_snapshot', 'Analisando Snapshots de Heap para Memory Leaks'],
    ['heap_snapshot_tools', 'Ferramentas para Captura e Análise de Snapshots de Heap: Utilização de ferramentas para capturar e analisar o heap da aplicação para encontrar vazamentos de memória.'],
    ['heap_snapshot_exemplo', 'Exemplo de Análise de Heap Snapshot: Como capturar e analisar um heap snapshot para identificar vazamentos de memória em uma aplicação JavaScript.'],
    ['memory_leaks', 'Identificando e Corrigindo Memory Leaks em JavaScript: Técnicas e práticas para identificar e corrigir vazamentos de memória em aplicações JavaScript, que podem causar problemas de desempenho e estabilidade.'],



    // load testing
    ['load_testing', 'Testes de Carga (Load Testing) com Node.js'],
    ['load_testing_tools', 'Ferramentas para Teste de Carga (Artillery, Apache JMeter): Ferramentas para realizar testes de carga em aplicações Node.js e avaliar seu comportamento sob stress.'],
    ['load_testing_estrategias', 'Estratégias para Testes de Carga de Alto Desempenho: Como estruturar e planejar testes de carga para identificar gargalos e otimizar sistemas.'],
    ['load_testing_resultados', 'Interpretando os Resultados de Testes de Carga: Como analisar métricas e resultados de testes para identificar problemas de performance e escalabilidade.'],

    // performance em tuning
    ['performance_tuning', 'Tuning de Performance de Aplicações JavaScript'],
    ['performance_tuning_estrategias', 'Estratégias para Melhorar a Performance: Técnicas e abordagens para otimizar o desempenho do código JavaScript e de aplicações.'],
    ['performance_tuning_nodejs', 'Tuning de Performance em Node.js: Especificidades de otimização de desempenho no ambiente Node.js, como uso de threads, processos e memória.'],
    ['performance_optimization', 'Otimização de Algoritmos e Estruturas de Dados em JavaScript: Melhoria da performance de aplicações JavaScript com a escolha eficiente de algoritmos e estruturas de dados.'],

    // observabilidade
    ['observabilidade', 'Observabilidade em Sistemas Distribuídos'],
    ['observabilidade_conceitos', 'Conceitos de Observabilidade: Logs, Metrics e Tracing: Como coletar e analisar dados sobre o comportamento de sistemas distribuídos usando logs, métricas e tracing.'],
    ['observabilidade_ferramentas', 'Ferramentas de Observabilidade (Prometheus, Grafana, Jaeger): Ferramentas para monitorar, visualizar e analisar a performance e a saúde de sistemas em tempo real.'],
    ['observabilidade_best_practices', 'Boas Práticas de Implementação de Observabilidade: Como implementar observabilidade de maneira eficaz e garantir que as aplicações sejam monitoradas adequadamente.'],

    // logging
    ['logging', 'Gerenciamento de Logs em Node.js'],
    ['logging_ferramentas', 'Ferramentas de Log (Winston, Bunyan, Pino): Ferramentas populares para gerenciamento e monitoramento de logs em aplicações Node.js.'],
    ['logging_niveis', 'Níveis de Log e Como Utilizá-los em Node.js: Como configurar e usar diferentes níveis de log (info, warn, error, debug) para monitorar a execução de uma aplicação.'],
    ['logging_estrategias', 'Estratégias para Gerenciamento e Armazenamento de Logs: Abordagens para organizar, armazenar e analisar logs em grandes sistemas.'],

    // sentry
    ['sentry', 'Integração com Sentry para Monitoramento de Erros'],
    ['sentry_config', 'Configuração e Uso do Sentry em Node.js: Como integrar o Sentry para monitoramento de erros em aplicações Node.js.'],
    ['sentry_monitoramento', 'Monitorando Erros em Produção com Sentry: Como usar o Sentry para detectar, rastrear e corrigir erros em tempo real em ambientes de produção.'],
    ['sentry_alertas', 'Configuração de Alertas e Notificações com Sentry: Como configurar alertas para erros críticos e falhas em aplicações usando o Sentry.'],

    // service workers
    ['service_workers', 'Service Workers e Caching'],
    ['service_workers_conceito', 'Entendendo os Service Workers: O que são e como funcionam os service workers para executar tarefas em segundo plano e cache de recursos.'],
    ['service_workers_implementacao', 'Implementação de Service Workers: Como implementar service workers em uma aplicação web para melhorar o desempenho e a experiência do usuário.'],
    ['service_workers_cache', 'Cache e Armazenamento no Service Worker: Como usar service workers para cache de recursos e garantir o funcionamento offline de aplicações web.'],

    // web workers
    ['web_workers', 'Web Workers para Processamento Assíncrono'],
    ['web_workers_conceito', 'Conceito de Web Workers: Como web workers permitem execução de código JavaScript em threads separadas para não bloquear a UI.'],
    ['web_workers_implementacao', 'Implementação de Web Workers: Como implementar web workers para realizar tarefas pesadas de forma assíncrona sem impactar a experiência do usuário.'],

    // threads
    ['worker_threads', 'Worker Threads em Node.js'],
    ['worker_threads_conceito', 'Conceito de Worker Threads: Como os worker threads em Node.js permitem a execução de código em paralelo, melhorando a escalabilidade de aplicações.'],
    ['worker_threads_implementacao', 'Implementação de Worker Threads em Node.js: Como utilizar worker threads no Node.js para processamento paralelo e melhorar o desempenho de aplicações intensivas.']


    // Depuração e Boas Práticas
    ['debugging', 'Depuração em JavaScript'],
    ['conceito_debugging', 'Conceito de Depuração: Como encontrar e corrigir erros no código JavaScript.'],
    ['metodos_debugging', 'Métodos de Depuração em JavaScript: Técnicas para encontrar e corrigir falhas e erros de lógica.'],

    // Ferramentas de Depuração
    ['debugging_tools', 'Ferramentas de Depuração (Chrome DevTools)'],
    ['chrome_devtools', 'Uso do Chrome DevTools para Depuração: Ferramenta essencial para depurar, inspecionar e otimizar o código JavaScript.'],
    ['devtools_breakpoints', 'Breakpoints no Chrome DevTools: Como usar breakpoints para interromper a execução e inspecionar o estado do código em tempo de execução.'],
    ['devtools_console', 'Console do Chrome DevTools: Como usar o console para exibir variáveis, mensagens e erros para ajudar na depuração.'],

    // Uso do console.log
    ['console_log', 'Uso do console.log para Depuração: Como utilizar o console.log para visualizar variáveis e o fluxo de execução do código.'],
    ['console_log_exemplo', 'Exemplo de uso de console.log: Exemplo prático de como usar o console.log para depurar código JavaScript.'],
    ['console_log_bons_criterios', 'Boas Práticas com console.log: Como utilizar o console.log de forma eficiente e sem poluir o código.'],

    // Linters e Formatters
    ['linters_formatters', 'Linting e Formatting (ESLint, Prettier)'],
    ['eslint', 'Configuração e Uso do ESLint: Como configurar o ESLint para garantir a qualidade do código JavaScript através de regras e padrões.'],
    ['prettier', 'Configuração e Uso do Prettier: Como configurar o Prettier para formatação automática do código, seguindo convenções estabelecidas.'],
    ['integracao_linter', 'Integração de Linters no Processo de Desenvolvimento: Como integrar linters e formatadores no fluxo de trabalho de desenvolvimento.'],

    // Boas Práticas e Clean Code
    ['boas_praticas', 'Boas Práticas e Clean Code'],
    ['clean_code', 'Princípios de Clean Code em JavaScript: Como escrever código legível, fácil de manter e de alta qualidade.'],
    ['legibilidade_codigo', 'Melhorando a Legibilidade do Código: Técnicas para melhorar a legibilidade do código e facilitar a compreensão e manutenção.'],

    // Boas Práticas de Nomeação
    ['boas_praticas_naming', 'Boas Práticas de Nomeação'],
    ['nome_variaveis', 'Boas Práticas de Nomeação para Variáveis: Como nomear variáveis de forma clara e intuitiva.'],
    ['nome_funcoes', 'Boas Práticas de Nomeação para Funções: Como nomear funções de forma a refletir claramente sua responsabilidade.'],
    ['nome_classes', 'Boas Práticas de Nomeação para Classes: Como nomear classes de forma a refletir sua estrutura e propósito.'],

    // Boas Práticas de Estrutura de Código
    ['boas_praticas_codigo', 'Boas Práticas de Estrutura de Código'],
    ['organizar_codigo', 'Como Organizar o Código de Forma Eficiente: Como estruturar um projeto JavaScript para garantir legibilidade e escalabilidade.'],
    ['modularizacao_codigo', 'Modularização de Código em JavaScript: Técnicas para dividir o código em módulos e promover reutilização e manutenção eficiente.'],

    // Boas Práticas para Desempenho
    ['boas_praticas_desempenho', 'Boas Práticas para Desempenho'],
    ['optimizar_funcoes', 'Como Otimizar Funções e Algoritmos: Técnicas para melhorar a eficiência de funções e algoritmos em JavaScript.'],
    ['gerenciamento_memoria', 'Boas Práticas para Gerenciamento de Memória: Como otimizar o uso de memória e evitar vazamentos em JavaScript.'],

    // Testes Unitários
    ['testes_unitarios', 'Testes Unitários em JavaScript'],
    ['frameworks_testes', 'Frameworks para Testes Unitários (Jest, Mocha, Jasmine): Como utilizar frameworks para testar funções e componentes isolados de forma eficaz.'],
    ['escrever_testes_unitarios', 'Como Escrever Testes Unitários Eficientes: Técnicas para escrever testes unitários claros e eficientes, cobrindo todos os cenários possíveis.'],
    ['mocking', 'Uso de Mocking em Testes Unitários: Como simular objetos e funções para testar componentes isolados sem dependências externas.'],

    // Testes de Integração
    ['testes_integracao', 'Testes de Integração em JavaScript'],
    ['testes_integracao_conceito', 'Conceito e Importância dos Testes de Integração: Como garantir que diferentes partes do sistema funcionem corretamente juntas.'],
    ['escrever_testes_integracao', 'Como Escrever Testes de Integração: Como escrever testes que validam a interação entre diferentes partes do código.'],
    ['mocking_integracao', 'Uso de Mocking em Testes de Integração: Como usar mocking para simular dependências externas durante os testes de integração.']


    // Praticando com Aplicações

    // Calculadora
    ['calculadora', 'Criando uma Calculadora em JavaScript'],
    ['calculadora_conceito', 'Conceito de uma Calculadora em JavaScript: Como estruturar e implementar as funcionalidades de uma calculadora.'],
    ['calculadora_funcionalidade', 'Funcionalidades de uma Calculadora: Operações básicas como soma, subtração, multiplicação e divisão.'],
    ['calculadora_interface', 'Interface de Usuário para a Calculadora: Design simples e interativo para a calculadora.'],
    ['calculadora_implementacao', 'Implementação da Lógica da Calculadora: Código para manipulação de eventos e cálculos.'],

    // To-Do List com LocalStorage
    ['todo_list', 'To-Do List com LocalStorage'],
    ['todo_list_conceito', 'Conceito de To-Do List: Como construir uma lista de tarefas que armazena dados localmente.'],
    ['todo_list_estruturacao', 'Estrutura de Dados para To-Do List: Utilizando arrays e objetos para organizar as tarefas.'],
    ['todo_list_localstorage', 'Utilizando LocalStorage para Persistência: Como salvar as tarefas localmente para persistência de dados no navegador.'],
    ['todo_list_interface', 'Interface de Usuário para To-Do List: Criando uma UI simples e intuitiva para o gerenciamento de tarefas.'],
    ['todo_list_funcionalidade', 'Funcionalidades da To-Do List: Como adicionar, editar, remover e marcar tarefas como concluídas.'],

    // Cronômetro com setTimeout e setInterval
    ['cronometro', 'Cronômetro com setTimeout e setInterval'],
    ['cronometro_conceito', 'Conceito de Cronômetro em JavaScript: Implementação de cronômetro utilizando `setTimeout` e `setInterval`.'],
    ['settimeout_setinterval', 'Usando setTimeout e setInterval no Cronômetro: Diferença entre essas funções e como usá-las para controlar o tempo.'],
    ['cronometro_interface', 'Interface de Usuário para o Cronômetro: Design simples e funcional para a interface do cronômetro.'],
    ['cronometro_funcionalidade', 'Funcionalidades do Cronômetro: Contagem regressiva, iniciar, pausar e resetar o cronômetro.'],

    // Gerador de Senhas Aleatórias
    ['gerador_senhas', 'Gerador de Senhas Aleatórias'],
    ['gerador_senhas_conceito', 'Conceito de Gerador de Senhas: Como criar um gerador de senhas seguras e aleatórias em JavaScript.'],
    ['gerador_senhas_aleatorias', 'Gerando Senhas Aleatórias com Math.random: Utilizando `Math.random()` para criar senhas aleatórias.'],
    ['seguranca_gerador_senhas', 'Melhorando a Segurança no Gerador de Senhas: Como adicionar complexidade e segurança nas senhas geradas.'],
    ['gerador_senhas_interface', 'Interface de Usuário para Gerador de Senhas: Criando uma UI simples para geração e exibição das senhas.'],

    // Jogo da Velha em JavaScript
    ['jogo_da_velha', 'Jogo da Velha em JavaScript'],
    ['jogo_da_velha_conceito', 'Conceito de Jogo da Velha: Como criar o jogo da velha com lógica de controle e jogabilidade.'],
    ['jogo_da_velha_logica', 'Lógica por Trás do Jogo da Velha: Implementação de regras e verificações de vitória e empate.'],
    ['jogo_da_velha_interface', 'Interface de Usuário para Jogo da Velha: Como criar uma interface intuitiva para o jogo.'],
    ['jogo_da_velha_multiplayer', 'Jogo da Velha Multiplayer com LocalStorage: Criando uma versão multiplayer usando `LocalStorage` para persistir o estado do jogo.'],

    // Gerando Relatórios em JavaScript
    ['relatorio', 'Gerando Relatórios em JavaScript'],
    ['relatorio_conceito', 'Conceito de Relatórios em JavaScript: Como gerar relatórios dinâmicos a partir de dados.'],
    ['geracao_relatorio', 'Geração de Relatórios em JavaScript: Criando relatórios no formato HTML, JSON ou outros formatos dinâmicos.'],
    ['exportacao_relatorio', 'Exportação de Relatórios para CSV ou PDF: Como exportar os relatórios gerados para formatos como CSV ou PDF.'],
    ['relatorio_interface', 'Interface de Usuário para Geração de Relatórios: Criando uma interface amigável para visualização e exportação de relatórios.']



]);
