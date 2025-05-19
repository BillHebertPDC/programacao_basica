const Textos = new Map([

    // fundamentos
    ['introducao', `
JavaScript é uma das linguagens de programação mais amplamente utilizadas no desenvolvimento moderno. Inicialmente concebida para rodar no navegador e manipular elementos da página (DOM), evoluiu para um ecossistema robusto que cobre desde o frontend até o backend, automação, aplicações mobile e até mesmo IoT e machine learning.
`],

    ['introducao_o_que_e_js', `
JavaScript é uma linguagem de programação interpretada, de alto nível, dinâmica e multiparadigma. É executada primariamente por engines embutidas em navegadores, como V8 (Chrome), SpiderMonkey (Firefox) e JavaScriptCore (Safari). Suporta orientação a objetos, programação funcional e imperativa. Sua principal característica é a manipulação assíncrona de eventos e objetos do ambiente de execução.
`],

    ['introducao_para_que_serve', `
JavaScript é utilizado principalmente para:
- Manipulação da interface e interação com usuários no navegador (frontend);
- Construção de aplicações web completas com frameworks como React, Angular, Vue;
- Desenvolvimento backend com Node.js;
- Automação de processos (scripting);
- Criação de aplicações mobile (React Native, Ionic);
- Desenvolvimento de jogos e visualizações gráficas com WebGL e Canvas;
- Comunicação assíncrona com servidores via APIs REST ou GraphQL.
`],

    ['introducao_client_server', `
No cliente (frontend), JavaScript manipula DOM, lida com eventos e realiza requisições assíncronas (AJAX/fetch). Já no servidor (backend), com Node.js, gerencia conexões, I/O assíncrono, integra com bancos de dados e serve APIs. Ambos os ambientes compartilham a linguagem, mas possuem APIs distintas e responsabilidades completamente diferentes. No cliente, é limitado pelo sandbox do navegador; no servidor, possui acesso ao sistema de arquivos, rede e recursos nativos.
`],

    ['introducao_diferencas_linguagens', `
Comparado a linguagens como Java, C# ou Python:
- JavaScript é interpretado em tempo de execução, enquanto Java/C# são compilados para bytecode;
- É dinamicamente tipado, o que acelera prototipagem mas reduz segurança em tempo de compilação;
- Possui herança baseada em protótipos, não em classes tradicionais (apesar de "class" ter sido introduzido no ES6 como açúcar sintático);
- O modelo de concorrência é baseado em event loop e callbacks/promises/async-await, não em threads;
- A tipagem é fraca e permissiva (ex: "[]" + "{}" resulta em "[object Object]").
`],

    ['introducao_caracteristicas', `
JavaScript é:
- **Dinâmica**: tipos de variáveis podem mudar em tempo de execução;
- **Interpretada**: não há necessidade de compilação prévia, o código é executado diretamente pela engine;
- **Prototype-based**: objetos podem herdar diretamente de outros objetos via cadeia de protótipos, diferente da herança clássica;
- **First-class functions**: funções são objetos, podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções;
- **Event-driven** e assíncrona por natureza, com foco na não-bloqueante via "Promise" e "async/await";
- **Closures** e escopos léxicos são fundamentos de seu modelo de encapsulamento.
`],

    ['introducao_mitos_realidade', `
Mitos comuns:
- *"JavaScript é só para websites simples."* — Falso: JS roda desde sistemas de produção em larga escala até aplicações embarcadas.
- *"Não é uma linguagem séria."* — Errado: corporações como Netflix, PayPal, Uber e Google usam JS em produção crítica.
- *"É fraca porque não tem tipos."* — A tipagem dinâmica é uma escolha de design que privilegia agilidade; pode ser mitigada com TypeScript.
- *"JS é igual a Java."* — Apenas o nome é semelhante; o design, sintaxe e semântica são radicalmente diferentes.

Realidade:
JavaScript é uma linguagem moderna, extremamente flexível, com uma comunidade gigantesca e um ecossistema que dita o ritmo da inovação em desenvolvimento web.
`]

    // historia
    ['historia_js', `
A história do JavaScript é marcada por uma evolução rápida e adaptativa. De um script simples de validação de formulários, tornou-se uma linguagem de propósito geral. Sua trajetória acompanha a própria evolução da Web, ganhando recursos, performance e papel estratégico tanto no frontend quanto no backend.
`],

    ['historia_nascimento', `
JavaScript foi criado em 1995 por Brendan Eich, em apenas 10 dias, enquanto trabalhava na Netscape. O nome original era "Mocha", depois "LiveScript", até ser renomeado para "JavaScript" numa jogada de marketing para aproveitar a popularidade do Java. Sua função inicial era permitir interatividade básica em páginas web.
`],

    ['historia_padronizacao', `
Com o crescimento da Web, surgiu a necessidade de padronizar o comportamento da linguagem. Em 1997, o JavaScript foi submetido à ECMA International, que criou o padrão ECMAScript (ES). A padronização visava garantir que diferentes implementações da linguagem (como nos navegadores) compartilhassem a mesma base sem divergências críticas.
`],

    ['historia_versionamento', `
O ECMAScript evoluiu através de versões:
- **ES3 (1999)**: amplamente suportado, consolidou a linguagem;
- **ES5 (2009)**: adicionou "strict mode", "JSON", métodos funcionais em arrays;
- **ES6 / ES2015**: revolução sintática com "let", "const", arrow functions, classes, modules, promises;
- **ES2016+ (ES7, ES8, ...) até ES2025**: evolução anual, com async/await, optional chaining, nullish coalescing, top-level await, temporal API, etc.
Cada versão busca modernizar a linguagem sem quebrar compatibilidade retroativa.
`],

    ['historia_browsers', `
Durante os anos 2000, os navegadores implementavam JavaScript de forma inconsistente, causando dores de cabeça para desenvolvedores. Essa fragmentação levou ao surgimento de bibliotecas como jQuery, que abstraíam essas diferenças. A "guerra dos browsers" impulsionou a inovação, mas também destacou a importância da padronização e das engines mais eficientes, como a V8 da Google.
`],

    ['historia_node', `
Em 2009, Ryan Dahl criou o Node.js, que permitiu a execução de JavaScript fora do navegador, usando a engine V8 do Chrome. Com isso, JS deixou de ser uma linguagem exclusivamente de frontend e passou a dominar também o backend, permitindo aplicações fullstack com uma única linguagem. Node popularizou o modelo de I/O assíncrono, escalável e não-bloqueante.
`],

    ['historia_modernizacao', `
A partir do ES6 (2015), o JavaScript passou por uma modernização significativa. Introduziu-se uma sintaxe mais limpa, modularização nativa, classes como açúcar sintático, destructuring, template literals e recursos assíncronos modernos. Essa evolução continua até hoje, com novos recursos sendo adicionados anualmente, transformando o JS numa linguagem moderna, poderosa e altamente expressiva.
`],

    // ambientes
    ['ambiente_execucao', `
JavaScript pode ser executado em dois ambientes principais: navegadores (frontend) e servidores (Node.js). Ambos compartilham a linguagem base (ECMAScript), mas fornecem APIs e contextos de execução distintos. Compreender essas diferenças é crucial para escrever código portável, seguro e otimizado para cada cenário.
`],

    ['ambiente_browser', `
No navegador, o JavaScript opera em um ambiente controlado com acesso a:
- **DOM (Document Object Model)**: manipulação da estrutura HTML;
- **BOM (Browser Object Model)**: interação com o navegador (history, location, screen);
- **Eventos**: modelo assíncrono de manipulação de interações do usuário (clicks, scroll, teclado).
Esse ambiente é restrito por questões de segurança (sandboxing) e sujeito a políticas como Same-Origin e CORS.
`],

    ['ambiente_node', `
Node.js fornece um ambiente de execução no lado do servidor, sem acesso ao DOM, mas com APIs nativas como:
- **Módulos (CommonJS e ESModules)**;
- **Sistema de arquivos (fs)**;
- **Gerenciamento de processos, streams, buffers**;
- **Rede: sockets, HTTP, WebSocket**;
- **Processo global ("process", "global", "__dirname")**.
Ideal para aplicações de alta concorrência, APIs REST, CLI tools, servidores Web e microserviços.
`],

    ['ambiente_diferencas_api', `
Diferenças fundamentais entre os ambientes:
- **"window" (browser)** vs **"global" (Node.js)**: escopos globais distintos;
- **"document", "alert", "navigator"**: exclusivos do navegador;
- **"require()" e "module.exports"**: CommonJS em Node.js;
- **"import/export"**: ESModules, com suporte em ambos ambientes (com limitações e configuração);
- **Timers e event loop** são implementados diferentemente sob o capô.
Essas APIs moldam o comportamento do JS e afetam portabilidade de código.
`],

    ['ambiente_limitacoes', `
No **browser**, as limitações envolvem:
- Sem acesso ao sistema de arquivos ou rede arbitrária (segurança);
- Restrições de CORS e políticas de sandbox;
- Sem acesso nativo a threads (até Web Workers);
- APIs assíncronas orientadas a eventos.

No **Node.js**, as limitações são:
- Sem acesso ao DOM ou eventos de UI;
- Execução limitada ao terminal/servidor;
- Necessidade de gerenciamento explícito de dependências e modularização;
- Bloqueios podem afetar performance se não for usado corretamente o modelo assíncrono.
`],

    ['ambiente_use_cases', `
Casos típicos:
- **Browser**:
  - SPAs (Single Page Applications);
  - PWAs (Progressive Web Apps);
  - Interações ricas com o usuário.

- **Node.js**:
  - APIs REST/GraphQL;
  - SSR (Server-Side Rendering) com frameworks como Next.js;
  - Ferramentas de linha de comando (CLI);
  - Microserviços, automação, WebSockets.

- **Híbridos**:
  - SSR vs CSR: trade-offs entre renderização no servidor (melhor para SEO) e no cliente (melhor UX reativa).
  - Isomorfismo com frameworks que compartilham código entre backend e frontend.
`],

    // sintaxe

    ['sintaxe_basica', `
A sintaxe do JavaScript é inspirada em C, mas com nuances específicas que impactam diretamente o comportamento do código. Entender sua base léxica, estrutura de blocos e regras implícitas como o ASI é fundamental para escrever código robusto e evitar bugs silenciosos.
`],

    ['sintaxe_tokens', `
Tokens são as menores unidades significativas na linguagem. Em JavaScript, os principais tipos incluem:
- **Identificadores**: nomes de variáveis, funções, classes (e.g., "myVar");
- **Literals**: valores constantes (e.g., "42", ""texto"", "true");
- **Delimitadores**: símbolos que estruturam o código ("{}", "[]", "()", ";", ",");
- **Operadores**: "+", "-", "==", "===", "=>", entre outros.
Esses elementos são definidos por regras do léxico da linguagem, ignorando espaços em branco e comentários.
`],

    ['sintaxe_estrutura_codigo', `
O código JavaScript é composto por:
- **Instruções (statements)**: comandos que executam ações (e.g., "let x = 10;");
- **Blocos (blocks)**: agrupamentos de instruções entre chaves "{ ... }";
- **Declarações**: instruções especiais que introduzem variáveis, funções ou classes ("var", "let", "const", "function", "class");
A separação em blocos é fundamental para escopo e controle de fluxo.
`],

    ['sintaxe_terminador_linha', `
JavaScript possui o mecanismo de ASI (Automatic Semicolon Insertion), que insere ";" automaticamente em pontos determinados do código. Isso evita erros em muitos casos, mas pode causar comportamento inesperado:
return
  42;
// retorna undefined, pois o ";" é inserido após o return
Portanto, embora opcional, o uso explícito de ponto e vírgula é considerado uma boa prática em ambientes de produção.
`],

    ['sintaxe_case_sensitive', `
JavaScript diferencia letras maiúsculas de minúsculas. "myVariable", "MyVariable" e "MYVARIABLE" são identificadores distintos. Isso se aplica a variáveis, funções, nomes de classes, propriedades e palavras-chave. A inconsistência de capitalização é uma das causas mais comuns de erros em tempo de execução.
`],

    ['sintaxe_espacos', `
Espaços em branco, tabulações e quebras de linha são, em geral, ignorados pelo interpretador, exceto em contextos como:
- Separação de tokens ("let x = 1" vs "letx=1");
- Formatação de strings literais (""linha\noutra linha"");
- Posição de operadores ou blocos condicionais.
A indentação não é obrigatória, mas é crítica para legibilidade e manutenção.
`],

    ['sintaxe_expressao_instrucao', `
- **Expressões (Expressions)**: produzem um valor (e.g., "2 + 2", "x * y", ""abc".length");
- **Instruções (Statements)**: executam uma ação (e.g., "if", "for", "return", "let x = 5");
Expressões podem estar dentro de instruções, mas o inverso não é verdadeiro. Compreender essa distinção é essencial para escrever código sintaticamente correto.
`],
    ['sintaxe_erros_comuns', `
Erros frequentes de sintaxe incluem:
- Esquecer "}" ou ")";
- Declarar variáveis sem "let", "const" ou "var" (modo strict lança erro);
- Confundir atribuição ("=") com comparação ("==", "===");
- Falta de ponto e vírgula em instruções sensíveis ao ASI;
- Uso de palavras reservadas como identificadores ("class", "await", "yield");
Esses erros são geralmente detectados em tempo de parsing pelo interpretador.
`],
    //comentarios


    ['comentarios', `
Comentários em JavaScript são usados para inserir anotações no código, facilitando a compreensão e a manutenção. Eles não são executados e servem para explicar o que o código faz ou registrar informações importantes para outros desenvolvedores (ou para você mesmo no futuro).
`],

    ['comentarios_linha', `
Comentários de linha são usados para anotar pequenas explicações ou desabilitar uma linha de código temporariamente. Eles são feitos com duas barras ("//"). Tudo após essas barras na linha é ignorado pelo interpretador.
Exemplo:
// Isso é um comentário de linha
let x = 10; // Definindo o valor de x
`],

    ['comentarios_bloco', `
Comentários de bloco permitem descrever partes maiores do código. Eles começam com `/*` e terminam com `*/`. São úteis quando se deseja comentar várias linhas de código ao mesmo tempo ou quando uma explicação extensa é necessária.
Exemplo:
/*
  Este é um comentário de bloco.
  Ele pode se estender por várias linhas.
  Ele é útil quando a explicação precisa de mais detalhes.
*/
let y = 20;
`],

    ['comentarios_boas_praticas', `
Boas práticas ao comentar código incluem:
- Evitar comentários óbvios. Comente o "porquê" do código, não o "como" (exemplo: "O loop percorre o array" não é necessário, mas "Este loop garante que o código só rode quando a condição X for verdadeira" é útil).
- Mantenha os comentários atualizados. Comentários desatualizados podem ser mais prejudiciais do que a ausência deles.
- Utilize comentários para explicar escolhas complexas ou não triviais, como otimizações ou abordagens não comuns.
- Evite comentários redundantes ou excessivos que apenas “decorem” o que o código já diz.
`],

    ['comentarios_documentacao', `
Padrões de documentação como o JSDoc são essenciais para garantir a clareza e a manutenção do código. O JSDoc é uma ferramenta para gerar automaticamente documentação a partir dos comentários do código.
Exemplo básico de uso:
/**
 * Soma dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois números.
 */
function soma(a, b) {
  return a + b;
}
Esses comentários permitem gerar documentação automatizada que pode ser usada em qualquer linguagem que suporte JSDoc, além de melhorar a legibilidade do código.
`]
    // convencoes

    ['convencoes', `
Convenções de código são práticas padronizadas que promovem legibilidade, consistência e manutenção facilitada. Em JavaScript, seguir convenções é especialmente importante devido à natureza dinâmica e flexível da linguagem. Equipes maduras adotam guias de estilo rígidos, suportados por ferramentas automáticas.
`],

    ['convencoes_nomenclatura', `
Padrões de nomenclatura em JavaScript:
- **camelCase**: usado para variáveis e funções (ex: \`minhaVariavel\`, \`executarTarefa()\`);
- **PascalCase**: usado para construtores e classes (ex: \`MinhaClasse\`);
- **snake_case**: raramente usado em JS moderno; mais comum em dados ou APIs legadas;
- **UPPER_CASE**: reservado para constantes globais imutáveis (ex: \`MAX_TENTATIVAS\`).

Consistência é essencial. Misturar estilos gera confusão e dificulta a manutenção.
`],

    ['convencoes_espacos', `
Espaçamento e indentação devem ser uniformes:
- **Spaces vs Tabs**: escolha um e mantenha em todo o projeto. A maioria das equipes modernas opta por 2 ou 4 espaços.
- Use indentação para indicar claramente blocos aninhados, como estruturas de controle, funções, callbacks, etc.

Exemplo:
\`\`\`js
function exemplo() {
  if (condicao) {
    executar();
  }
}
\`\`\`

Use um formatador automático (como Prettier) para padronizar isso.
`],

    ['convencoes_chaves', `
Há dois estilos principais de posicionamento de chaves:
- **Inline (K&R)**: mais comum em JavaScript, adota a chave na mesma linha do controle:
  \`\`\`js
  if (condicao) {
    executar();
  }
  \`\`\`
- **Nova Linha (Allman)**: menos usado, a chave abre numa nova linha:
  \`\`\`js
  if (condicao)
  {
    executar();
  }
  \`\`\`

O estilo inline é padrão em praticamente todos os projetos JS modernos. Seja consistente.
`],

    ['convencoes_semicolon', `
O uso de ponto e vírgula (\`; \`) em JavaScript é opcional, mas **recomendado**.

Embora o mecanismo de ASI (Automatic Semicolon Insertion) adicione \`; \` onde necessário, ele pode falhar em cenários ambíguos:
\`\`\`js
return
  valor; // retorna undefined
\`\`\`

Decida uma regra clara (usar sempre ou nunca) e aplique com ferramentas como ESLint/Prettier.
`],

    ['convencoes_comentarios', `
Comentários devem seguir um padrão claro:
- Use \`//\` para comentários curtos e \`/** */\` para documentação (ex: JSDoc);
- Alinhe visualmente com o código comentado;
- Evite comentários redundantes ou "autoexplicativos".

Exemplo válido:
\`\`\`js
// Verifica se o token expirou
if (isTokenExpired()) {
  renovarToken();
}
\`\`\`
`],

    ['convencoes_lint', `
Linters analisam o código estaticamente e impõem regras definidas. O mais usado é o **ESLint**, com suporte a plugins como:
- \`eslint-plugin-import\`
- \`eslint-plugin-react\`
- \`@typescript-eslint\`

Você pode definir regras personalizadas ou herdar de estilos populares:
- Airbnb
- StandardJS
- Google

Inclua o lint no pipeline de CI/CD.
`],

    ['convencoes_formatadores', `
Formatadores como **Prettier** automatizam o estilo do código (espaços, quebras de linha, aspas, etc.) e evitam discussões em PRs.

Diferente do ESLint (semântico), Prettier foca apenas no formato. Integre ambos:
- Use Prettier para estética;
- Use ESLint para qualidade e segurança.

Configure via \`.prettierrc\` e execute com hooks do Git ou em CI.
`],

    ['convencoes_git', `
Seguir padrões de commit melhora o histórico e permite automação (como changelogs e versionamento semântico). O mais adotado é o **Conventional Commits**:

Formato:
\`<tipo>(escopo opcional): descrição\`

Exemplos:
- \`feat(api): adicionar suporte a filtros por data\`
- \`fix(auth): corrigir bug no token JWT\`
- \`chore(deps): atualizar dependências do projeto\`

Use ferramentas como \`commitlint\` e \`cz-cli\` para reforçar isso via CLI.
`]

    // Variáveis e Constantes
    ['variaveis_introducao', `
Variáveis são os blocos fundamentais de armazenamento de dados em qualquer linguagem de programação. Em JavaScript, variáveis são usadas para guardar valores que podem ser acessados e manipulados posteriormente, tornando o código dinâmico e reutilizável.
`],

    ['variaveis_o_que_sao', `
Variáveis são identificadores que apontam para valores armazenados na memória. Elas permitem que você nomeie dados para reutilização e manipulação ao longo do tempo de execução do seu programa.
Exemplo:
\`\`\`js
let nome = 'Alice';
let idade = 30;
\`\`\`
`],

    ['variaveis_por_que_usar', `
Usamos variáveis para:
- Evitar repetição de valores literais;
- Tornar o código mais legível e semântico;
- Armazenar resultados intermediários de operações;
- Permitir abstração, modularidade e reuso de lógica.

Elas são essenciais para controle de fluxo, funções, manipulação de dados e mais.
`],

    ['variaveis_como_funcionam', `
Quando uma variável é criada, o engine do JavaScript aloca um espaço na memória e associa um identificador a esse endereço. O tipo de dado e o modo como ele é armazenado (valor ou referência) influenciam o comportamento da variável em tempo de execução.
`],

    ['variaveis_enderecamento', `
Variáveis em JavaScript operam com dois modelos principais:
- **Por valor**: tipos primitivos (Number, String, Boolean, etc.) — o valor é copiado;
- **Por referência**: objetos, arrays e funções — a variável armazena um ponteiro para o local na memória onde o dado está.

Modificações em variáveis por referência afetam todas as variáveis que apontam para o mesmo objeto.
`],

    ['variaveis_declaracao', `
**Declaração** é o ato de criar uma variável (sem atribuir valor).  
**Inicialização** é quando se fornece um valor a ela.

Exemplo:
\`\`\`js
let a;       // Declaração
a = 10;      // Inicialização
let b = 20;  // Declaração + Inicialização
\`\`\`

Em JavaScript, variáveis podem ser declaradas com \`var\`, \`let\` ou \`const\`, cada uma com escopo e comportamento distintos.
`],

    ['variaveis_atribuicao', `
**Atribuição por valor** copia o dado (tipos primitivos), enquanto **por referência** copia o ponteiro (objetos e arrays).

Exemplo por valor:
\`\`\`js
let x = 10;
let y = x;
y++; // x continua 10
\`\`\`

Exemplo por referência:
\`\`\`js
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 99; // obj1.a também será 99
\`\`\`
`],

    ['variaveis_identificadores', `
Identificadores são os nomes das variáveis e seguem regras:
- Devem começar com letra, \`$\` ou \`_\`;
- Não podem começar com número;
- Não podem ser palavras reservadas (como \`if\`, \`while\`, \`class\`, etc.);
- Case-sensitive: \`valor\` e \`Valor\` são diferentes.

Boas práticas:
- Use nomes semânticos e descritivos;
- Prefira inglês técnico padrão do ecossistema.
`],

    ['variaveis_tipos', `
Os tipos de dados em JavaScript influenciam diretamente o comportamento das variáveis:
- **Primitivos**: \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`;
- **Referência**: \`object\`, \`array\`, \`function\`, \`map\`, \`set\`, etc.

JavaScript é **dinamicamente tipado**, o que significa que o tipo é inferido e pode mudar em tempo de execução:
\`\`\`js
let valor = 42;      // number
valor = 'quarenta';  // agora é string
\`\`\`
`],

    ['variaveis_constantes', `
Constantes são declaradas com \`const\` e **devem** ser inicializadas na declaração. Elas não podem ser reatribuídas, mas **referências mutáveis** ainda podem ser modificadas.

Exemplo:
\`\`\`js
const PI = 3.14;
PI = 3.14159; // Erro

const config = { debug: true };
config.debug = false; // Válido, pois o objeto continua o mesmo
\`\`\`

Use \`const\` como default e só use \`let\` se houver necessidade de reatribuição.
`]
    // closures
    ['escopo_de_closures', `
Escopo é o contexto onde variáveis e funções são acessíveis. Em JavaScript, existem três níveis principais de escopo:
- **Global**: acessível de qualquer lugar do código;
- **De função**: acessível apenas dentro da função onde foi declarada;
- **De bloco**: válido dentro de blocos delimitados por chaves (\`{}\`), como em \`if\`, \`for\`, etc.

JavaScript usa **escopo léxico** (lexical scoping): funções acessam variáveis do escopo onde foram **definidas**, não onde são **executadas**.
Closures exploram esse comportamento.
`],

    ['closures', `
Closures são uma combinação de uma função com o escopo léxico em que ela foi criada. Isso significa que uma função interna "lembra" das variáveis do seu escopo externo, mesmo após esse escopo ter sido encerrado.

Closures são fundamentais para encapsulamento, funções fábrica, currying, memoização e programação funcional em geral.
`],

    ['definicao_closures', `
Formalmente, um **closure** é quando uma função interna mantém acesso ao escopo da função externa **mesmo depois que essa função externa terminou de executar**.

Esse comportamento ocorre porque o motor JavaScript mantém o ambiente léxico "vivo" se ainda houver referências à função interna.

Exemplo:
\`\`\`js
function criarContador() {
  let count = 0;
  return function () {
    return ++count;
  }
}

const contador = criarContador();
contador(); // 1
contador(); // 2
\`\`\`
\`count\` permanece acessível graças ao closure.
`],

    ['exemplo_closures', `
Exemplo avançado de closure com encapsulamento de estado:
\`\`\`js
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
\`\`\`

Isso simula **encapsulamento** típico de orientação a objetos, usando closures.
`],

    ['uso_closures', `
Closures são frequentemente usados com **funções anônimas** e **callbacks**. São úteis para:
- Manter estado interno em funções reutilizáveis;
- Criar funções parcialmente aplicadas (currying);
- Adiar execução mantendo contexto;

Exemplo com função anônima:
\`\`\`js
function delayedLog(msg) {
  setTimeout(() => {
    console.log('Mensagem:', msg);
  }, 1000);
}

delayedLog('Olá Closure!');
\`\`\`

A função anônima passada ao \`setTimeout\` captura a variável \`msg\`, mantendo seu valor mesmo após o término da execução de \`delayedLog\`.
`]
    // contexto

    ['contexto_this', `
O valor de \`this\` em JavaScript depende de **como uma função é chamada**, não de onde ou como ela foi definida. Isso torna seu comportamento poderoso, mas também propenso a confusão.

\`this\` representa o **contexto de execução atual** — ou seja, o objeto "dono" da execução daquele código. Ele varia conforme o modo de chamada: global, método de objeto, função normal, arrow function, entre outros.

Importante: \`this\` não aponta para a função em si, nem para seu escopo léxico (exceto em arrow functions).
`],

    ['this_global', `
No **escopo global**:
- Em navegadores, \`this\` se refere ao objeto \`window\`.
- Em Node.js, no topo de um módulo, \`this\` é \`{}\` (não \`global\`).

Exemplo (navegador):
\`\`\`js
console.log(this); // window
function globalFunc() {
  console.log(this); // window (modo não estrito)
}
globalFunc();
\`\`\`

No modo **estrito** (\`'use strict'\`), \`this\` será \`undefined\` em funções globais:
\`\`\`js
'use strict';
function strictFunc() {
  console.log(this); // undefined
}
strictFunc();
\`\`\`
`],

    ['this_em_objetos', `
Quando uma função é chamada como **método de um objeto**, \`this\` aponta para o objeto que faz a chamada.

Exemplo:
\`\`\`js
const usuario = {
  nome: 'Ana',
  saudacao() {
    return 'Olá, ' + this.nome;
  }
};

usuario.saudacao(); // "Olá, Ana"
\`\`\`

Se a função for desacoplada do objeto, \`this\` se perde:
\`\`\`js
const f = usuario.saudacao;
f(); // undefined (ou erro em modo estrito)
\`\`\`

Isso pode ser contornado com \`.bind()\`, \`.call()\` ou \`.apply()\`.
`],

    ['this_em_funcoes', `
Em **funções normais**, o valor de \`this\` depende de como a função é invocada:
- No contexto global: \`this\` é \`window\` (ou \`global\` no Node) — a menos que o modo estrito esteja ativo;
- Em métodos de objeto: \`this\` é o objeto chamador;
- Em eventos DOM: \`this\` é o elemento que disparou o evento.

Atenção: ao passar funções como callbacks, o contexto original de \`this\` pode ser perdido.

Exemplo:
\`\`\`js
function log() {
  console.log(this);
}
log(); // window (modo não estrito)

const obj = { id: 1, log };
obj.log(); // obj
\`\`\`

**Problemas comuns**:
\`\`\`js
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this); // o botão
});

btn.addEventListener('click', () => {
  console.log(this); // escopo léxico, provavelmente window
});
\`\`\`

Ou seja: **arrow functions não possuem seu próprio this**, elas herdam o valor do escopo onde foram definidas.
`]
    // escopo
    ['escopo', `
Escopo define **onde variáveis e funções estão visíveis e acessíveis**. Em JavaScript, o escopo é **léxico** (determinado pela estrutura do código no momento da definição) e pode ser:
- Global
- De função
- De bloco

O controle de escopo é essencial para evitar conflitos de nomes, proteger variáveis e garantir modularidade e manutenção do código.
`],

    ['escopo_conceito', `
**Escopo Léxico** significa que o escopo de uma variável é resolvido com base em **onde ela foi declarada** no código, e não onde ela é usada.

Exemplo:
\`\`\`js
function externa() {
  const a = 1;
  function interna() {
    console.log(a); // acessa 'a' por escopo léxico
  }
  interna();
}
\`\`\`

**Escopo Dinâmico** (não usado no JavaScript) resolveria \`a\` com base em quem chama a função, o que não é o caso aqui.
`],

    ['escopo_local', `
Variáveis declaradas dentro de funções ou blocos com \`let\` ou \`const\` possuem **escopo local**, ou seja, só são acessíveis dentro do bloco onde foram declaradas.

Exemplo:
\`\`\`js
function exemplo() {
  let x = 10;
  console.log(x); // OK
}
console.log(x); // ReferenceError
\`\`\`
`],

    ['escopo_global', `
Variáveis declaradas fora de qualquer função ou bloco pertencem ao **escopo global**.

- Em navegadores, isso significa que elas se tornam propriedades do objeto \`window\`.
- Em Node.js, ficam no módulo atual, não no objeto global.

Evitar poluir o escopo global é uma boa prática fundamental.

Exemplo:
\`\`\`js
var x = 5;
console.log(window.x); // 5 (em navegador)
\`\`\`
`],

    ['escopo_funcao', `
**Funções criam escopos isolados**. Variáveis declaradas dentro de uma função não são acessíveis de fora dela. Esse isolamento é útil para evitar conflitos e para criar closures.

Exemplo:
\`\`\`js
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
console.log(resultado); // ReferenceError
\`\`\`
`],

    ['escopo_de_execucao', `
O **escopo de execução** é criado sempre que uma função é invocada. Ele define o ambiente onde variáveis são resolvidas, e é diferente da pilha de execução, que trata de ordem de chamadas.

Cada chamada cria um **contexto de execução**, com escopo próprio.
`],

    ['contexto_de_execucao', `
O **contexto de execução** representa o ambiente no qual o código JavaScript é avaliado e executado.

Existem três tipos principais:
- Contexto Global
- Contexto de Função
- Contexto de Avaliação (por \`eval()\`)

Cada contexto tem uma variável especial: \`this\`, além de seu escopo léxico.
`],

    ['pilha_de_execucao', `
A **pilha de execução** (call stack) é uma estrutura de dados que gerencia as funções em execução.

- A função global entra primeiro;
- Cada nova função chamada empilha um novo contexto;
- Ao retornar, o contexto é desempilhado.

Exemplo:
\`\`\`js
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
\`\`\`
`],

    ['empilhamento_de_execucao', `
O empilhamento de funções define a ordem da execução de chamadas:

1. A função é invocada.
2. Um novo contexto de execução é criado e empilhado.
3. Após terminar, o contexto é removido da pilha.
4. A execução retorna ao ponto anterior.

Isso influencia diretamente o comportamento assíncrono, exceções e stack traces.
`]
    // escopo de variaveis
    ['escopo_variaveis', `
O escopo de variáveis em JavaScript determina **onde elas são visíveis e acessíveis no código**.

Existem três formas principais de declaração de variáveis, cada uma com regras distintas de escopo:
- \`var\`: escopo de função.
- \`let\` e \`const\`: escopo de bloco.

Compreender essas diferenças é essencial para evitar bugs relacionados a visibilidade, shadowing e hoisting.
`],

    ['escopo_bloco', `
Com \`let\` e \`const\`, variáveis respeitam **escopo de bloco**, ou seja, ficam visíveis apenas dentro de \`if\`, \`for\`, \`while\`, etc.

Exemplo:
\`\`\`js
if (true) {
  let x = 42;
}
console.log(x); // ReferenceError
\`\`\`

Por outro lado, \`var\` ignora o escopo de bloco e "vaza" para o escopo de função mais próximo:
\`\`\`js
if (true) {
  var y = 10;
}
console.log(y); // 10
\`\`\`
`],

    ['escopo_aninhado', `
Escopos podem ser **aninhados**. Um escopo interno tem acesso aos identificadores declarados em escopos externos, mas não o contrário.

Exemplo:
\`\`\`js
function externa() {
  const a = 1;
  function interna() {
    const b = 2;
    console.log(a); // 1 — acesso ao escopo externo
  }
  interna();
  console.log(b); // ReferenceError — escopo interno não acessível de fora
}
\`\`\`

Isso forma uma **cadeia de escopos léxicos** (scope chain), usada na resolução de nomes.
`],

    ['escopo_shadowing', `
**Shadowing** ocorre quando uma variável em um escopo interno tem o mesmo nome de outra em um escopo externo. A variável interna "sombra" a externa.

Exemplo:
\`\`\`js
let valor = 10;
function exemplo() {
  let valor = 20; // shadowing
  console.log(valor); // 20
}
exemplo();
\`\`\`

Evitar shadowing excessivo melhora a legibilidade e reduz ambiguidades. Linters como ESLint podem alertar para casos perigosos de shadowing.
`],

    ['escopo_resolucao', `
A **resolução de identificadores** segue a **cadeia léxica de escopos**: o JavaScript procura o identificador no escopo mais interno e, se não encontrar, sobe para escopos externos.

Ordem de resolução:
1. Escopo local (mais interno);
2. Escopos pai, até o escopo global;
3. Se não encontrado: \`ReferenceError\`.

Exemplo:
\`\`\`js
let a = 1;
function teste() {
  let b = 2;
  function interna() {
    console.log(a, b); // 1, 2 — resolução via cadeia de escopos
  }
  interna();
}
teste();
\`\`\`

Essa busca é **estática** e ocorre na hora da definição do código, não na execução.
`]
    // var
    ['var_declaracao', `
A palavra-chave \`var\` é uma das formas mais antigas de declarar variáveis em JavaScript (anterior ao ES6). Apesar de ainda ser suportada, seu uso é desencorajado em código moderno por conta de comportamentos perigosos e imprevisíveis relacionados a escopo e hoisting.
`],

    ['var_sintaxe', `
A sintaxe básica do \`var\` é direta:
\`\`\`js
var nomeDaVariavel;
var outraVariavel = 10;
\`\`\`
Uma variável pode ser declarada sem inicialização, sendo automaticamente atribuída como \`undefined\`.
`],

    ['var_inicializacao_opcional', `
Com \`var\`, a inicialização é opcional. Se não fornecida, a variável assume o valor \`undefined\`.

Exemplo:
\`\`\`js
var contador;
console.log(contador); // undefined
\`\`\`

Não declarar e tentar acessar antes do hoisting ainda leva a comportamento confuso.
`],

    ['var_reatribuicao', `
Variáveis declaradas com \`var\` **podem ser reatribuídas** livremente dentro do seu escopo:

\`\`\`js
var nome = 'Alice';
nome = 'Bob'; // OK
\`\`\`
Esse comportamento é comum, mas pode mascarar erros se a variável for sobrescrita involuntariamente.
`],

    ['var_redeclaracao', `
Com \`var\`, **é permitido redeclarar a mesma variável** dentro do mesmo escopo sem erro — o que pode gerar bugs sutis:

\`\`\`js
var x = 1;
var x = 2; // permitido
console.log(x); // 2
\`\`\`

Com \`let\` e \`const\`, isso dispara um erro.
`],

    ['var_escopo_funcao', `
O escopo de \`var\` é limitado **à função em que é declarado**. Se declarado fora de uma função, pertence ao escopo global.

Exemplo:
\`\`\`js
function exemplo() {
  var x = 10;
}
console.log(x); // ReferenceError
\`\`\`

Esse comportamento contrasta com \`let\` e \`const\`, que respeitam o escopo de bloco.
`],

    ['var_sem_escopo_bloco', `
\`var\` **ignora escopos de bloco** como \`if\`, \`for\`, e \`while\`. Isso pode causar vazamento de variáveis para fora do bloco:

\`\`\`js
if (true) {
  var x = 5;
}
console.log(x); // 5
\`\`\`

Com \`let\` ou \`const\`, isso resultaria em erro.
`],

    ['var_colisao_global', `
Variáveis globais declaradas com \`var\` se tornam propriedades do objeto global (\`window\` no navegador). Isso cria alto risco de **colisão com outras variáveis globais**:

\`\`\`js
var alert = 'quebrado';
console.log(window.alert); // 'quebrado', sobrescreve a função nativa!
\`\`\`

Evitar o uso global de \`var\` é uma regra fundamental de boas práticas.
`],

    ['var_problemas_comuns', `
Problemas típicos relacionados ao uso de \`var\` incluem:

- **Hoisting com valor \`undefined\`** inesperado
- **Shadowing silencioso** (sobrescrever variáveis)
- **Vazamento de escopo de bloco**
- **Dificuldade de manutenção e refatoração**
- **Colisões com variáveis globais**

Por esses motivos, o uso moderno recomenda preferencialmente \`let\` e \`const\`.
`],

    ['var_hoisting', `
Declarações com \`var\` sofrem **hoisting**: são içadas para o topo do escopo de função. No entanto, **apenas a declaração é içada, não a inicialização**.

Exemplo:
\`\`\`js
console.log(a); // undefined
var a = 10;
\`\`\`

O interpretador entende como:
\`\`\`js
var a;
console.log(a); // undefined
a = 10;
\`\`\`

Isso é fonte comum de bugs e confusão, especialmente em funções longas ou em códigos com múltiplas declarações.
`]
    // let
    ['let_declaracao', `
A palavra-chave \`let\` foi introduzida no ECMAScript 2015 (ES6) como uma alternativa moderna ao \`var\`, com regras de escopo mais previsíveis e seguras. É atualmente a forma recomendada de declarar variáveis mutáveis em JavaScript.
`],

    ['let_sintaxe', `
A sintaxe é idêntica à do \`var\`, com a vantagem de um comportamento mais seguro:

\`\`\`js
let idade;
let nome = 'João';
\`\`\`

Pode ser usada para declarar variáveis em qualquer escopo, inclusive dentro de blocos.
`],

    ['let_inicializacao_opcional', `
Assim como \`var\`, \`let\` permite declarar variáveis sem inicializá-las:

\`\`\`js
let contador;
console.log(contador); // undefined
\`\`\`

Porém, diferentemente de \`const\`, a inicialização não é obrigatória no momento da declaração.
`],

    ['let_reatribuicao', `
Variáveis declaradas com \`let\` podem ser reatribuídas livremente dentro do mesmo escopo:

\`\`\`js
let status = 'ativo';
status = 'inativo'; // válido
\`\`\`

Esse comportamento é adequado para casos onde o valor precisa mudar, mas ainda dentro de um escopo bem definido.
`],

    ['let_nao_redeclaravel', `
Diferente de \`var\`, \`let\` **não permite redeclarar** a mesma variável no mesmo escopo:

\`\`\`js
let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared
\`\`\`

Isso evita colisões silenciosas e favorece a consistência do código.
`],

    ['let_escopo_bloco', `
\`let\` obedece **escopo de bloco** (qualquer par de chaves \`{...}\`), diferentemente de \`var\`, que ignora blocos:

\`\`\`js
if (true) {
  let interno = 123;
}
console.log(interno); // ReferenceError
\`\`\`

Isso evita vazamento de variáveis para escopos indesejados e melhora o isolamento lógico.
`],

    ['let_temporal_dead_zone', `
Com \`let\`, as variáveis estão sujeitas à **Temporal Dead Zone (TDZ)** — o período entre o início do escopo e a declaração, no qual a variável existe mas não pode ser acessada:

\`\`\`js
console.log(x); // ReferenceError
let x = 5;
\`\`\`

Isso é diferente de \`var\`, onde ocorre hoisting com valor \`undefined\`. O TDZ reforça práticas mais seguras e previsíveis.
`],

    ['let_em_loops', `
\`let\` resolve corretamente o comportamento de variáveis em loops, especialmente com closures. Cada iteração de um loop com \`let\` cria um novo escopo de bloco:

\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 0, 1, 2
\`\`\`

Com \`var\`, o resultado seria 3, 3, 3 devido ao escopo de função compartilhado.
`],

    ['let_em_closures', `
Closures que capturam variáveis declaradas com \`let\` obtêm o valor corretamente por escopo, não sendo afetadas por reatribuições subsequentes:

\`\`\`js
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
\`\`\`

Esse isolamento por iteração é essencial para evitar bugs sutis com funções assíncronas.
`]
    // const
]);
