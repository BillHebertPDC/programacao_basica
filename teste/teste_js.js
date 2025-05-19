/*
{
    searchs: [],
    tags: [],
    duration: 0,
    feedback: {
      dislike: 0,
      like: 0
    },
    examples: [],
    files: {
      audio: "",
      video:"",
      quiz:""
    },
    index: 0,
    structure_html: [

    ]
  },
  */
let titulos = new Map()
titulos.set("Introdução", "Introdução")
titulos.set("coercao", "coerção")
titulos.set("valoresFalsy", "Valores falsy")
titulos.set("valoresTruthy", "Valores truthy")
titulos.set("operadoresBooleanos", "Operadores booleanos")
titulos.set("comparadores", "Comparadores")
titulos.set("logico", "Lógico")
titulos.set("boxed", "Boxed")
titulos.set("caracteristicas de tipos primitivos", "Características dos tipos primitivos")
titulos.set("Diferença entre null e undefined", "Diferença entre null e undefined")
titulos.set("Conversões", "Conversões")
titulos.set("Propriedades de null", "Propriedades de null")

const textos = new Map()

textos.set("Características da Stack", `
Armazena variáveis locais e argumentos de funções.  
Tamanho fixo.  
Alocação e desalocação automáticas.  
Mais rápida na alocação e liberação de memória.
`)

textos.set("O que é Stack", `
A Stack é usada para armazenar dados com vida útil limitada à execução de uma função.  
Quando a função termina, a memória é automaticamente liberada.  
Ela é uma área contínua de memória e de acesso rápido, pois a alocação e a liberação são simples e eficientes.
`)

textos.set("O que é Heap", `
A Heap é uma área de memória maior e mais flexível, usada para alocar blocos de memória de tamanho variável durante a execução do programa.  
O programador deve gerenciar essa memória manualmente para evitar vazamentos, embora linguagens como Java ofereçam coletores de lixo que automatizam esse processo.
`)

textos.set("Características da Heap", `
Usada para alocação dinâmica de memória (objetos, strings etc.).  
Tamanho flexível.  
Alocação e desalocação manuais (ou automatizadas por coletor de lixo).  
Mais lenta na alocação e liberação de memória.
`)

textos.set("Stack vs Heap", `
Stack e Heap são áreas de memória usadas pelos programas para armazenar dados.  
A Stack armazena variáveis locais e argumentos de funções, com tamanho fixo determinado no início da execução.  
A Heap é usada para alocação dinâmica de memória, com blocos que podem ser alocados e liberados em qualquer ordem e com tamanho variável.
`)

textos.set("Diferenças entre Stack e Heap", `
A principal diferença entre Stack e Heap é que a Stack possui tamanho fixo e é usada para variáveis locais e argumentos de funções, enquanto a Heap permite alocação dinâmica de memória com tamanho flexível.  
A Stack é mais rápida, pois sua memória é gerenciada automaticamente ao término da função.  
Já a Heap exige controle manual ou automatizado (coletor de lixo), o que pode ser mais lento, mas oferece maior flexibilidade.
`)

textos.set("O que é um objeto", `
Tudo em JavaScript, exceto \`null\` e \`undefined\`, é um objeto — até mesmo valores primitivos (como \`String\`, \`Number\` e \`Boolean\`) herdam de \`Object.prototype\`.  
A diferença é que os primitivos são imutáveis: não podemos definir propriedades neles, apenas acessar seus métodos.  
Quando tentamos atribuir propriedades a um primitivo, o JavaScript cria um objeto temporário (Wrapper Object) e o descarta em seguida.
`)

textos.set("O que define um tipo primitivo", `
**Imutabilidade:**  
O valor não pode ser alterado. Qualquer operação gera um novo valor.

**Não são objetos:**  
Não possuem métodos nem propriedades diretamente. Ao acessar algo como \`toUpperCase()\` em uma string, o JavaScript cria um wrapper temporário, executa o método e o descarta.

**Armazenamento na Stack:**  
São armazenados diretamente na stack, diferente de objetos que são armazenados na heap e acessados por referência.
`)

textos.set("Quais são os tipos primitivos", `
Os tipos primitivos em JavaScript são:

- <code>string</code> — texto  
- <code>number</code> — números inteiros e decimais  
- <code>boolean</code> — verdadeiro ou falso  
- <code>undefined</code> — valor não atribuído  
- <code>null</code> — ausência intencional de valor  
- <code>symbol</code> — identificadores únicos e imutáveis (ES6+)  
- <code>bigint</code> — números inteiros muito grandes (ES2020+)
`)

textos.set("O que é wrapper", `
Wrapper objects são objetos temporários criados pelo JavaScript quando se tenta acessar ou definir propriedades em valores primitivos.
`)

textos.set("O que é o tipo boolean", `
O tipo boolean em JavaScript é um tipo primitivo que representa um valor lógico com dois estados possíveis:  
<code>true</code> e <code>false</code>.
`)

textos.set("Coerção para boolean", `
JavaScript possui coerção implícita de tipos, conforme definido pela especificação ECMAScript (ToBoolean operation).  
Isso afeta diretamente estruturas como: <code>if</code>, <code>while</code>, <code>for</code>, <code>?:</code>, <code>&&</code> e <code>||</code>.

Todo objeto é considerado <i>truthy</i> quando convertido para booleano.  
Por isso, é fundamental entender a diferença entre valores <i>truthy</i> e <i>falsy</i> para evitar comportamentos inesperados.

A operação ToBoolean é uma **Abstract Operation** da especificação ECMAScript.  
Ela é usada para converter valores em booleanos, seja de forma explícita com <code>Boolean()</code>, ou implícita por estruturas de controle.

O operador <code>!!</code> é um hack idiomático para forçar a coerção para booleano.
`)

textos.set("Operadores booleanos", `
<code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>
`)
textos.set("O que é null", `
null é um primitivo em JavaScript que representa a ausência intencional de valor.  
null em JavaScript não representa "vazio genérico", mas uma ausência de valor proposital e explícita, usada com intenção clara — diferente de undefined, que tende a surgir de forma implícita.  
Compreender suas nuances é fundamental para evitar bugs sutis e escrever código semântico e robusto.
`)

textos.set("A diferença entre null e undefined", `
A diferença entre <code>null</code> e <code>undefined</code> pode parecer sutil à primeira vista, mas entender seus significados e usos é fundamental para escrever código robusto e evitar comportamentos inesperados. Vamos entender melhor:

### undefined

- **Significado:** Representa a ausência *não* intencional de um valor. É o valor padrão de variáveis declaradas mas não inicializadas.
- **Quando ocorre naturalmente:**
  - Variáveis declaradas sem atribuição:
    <code>let x;</code>  
    <code>console.log(x); // undefined</code>
  - Propriedades de objetos que não existem:
    <code>const obj = {};</code>  
    <code>console.log(obj.prop); // undefined</code>
  - Parâmetros de função que não recebem argumentos:
    <code>function foo(a) { console.log(a); }</code>  
    <code>foo(); // undefined</code>
  - Retorno implícito de funções sem <code>return</code>:
    <code>function bar() {}</code>  
    <code>console.log(bar()); // undefined</code>
  - Expressão <code>void(expression)</code>:
    <code>console.log(void 0); // undefined</code>
- **Tipo:** <code>typeof undefined</code> retorna <code>"undefined"</code>.
- **Intenção:** Geralmente indica que algo ainda não foi inicializado ou não existe naquele contexto.

---

### null

- **Significado:** Representa a ausência *intencional* de valor. É um valor atribuído explicitamente para indicar que uma variável não possui valor.
- **Quando é usado:**
  - Atribuição explícita:
    <code>let y = null;</code>  
    <code>console.log(y); // null</code>
  - Para "limpar" uma variável que antes continha um objeto (facilitando o garbage collector):
    <code>let meuObjeto = { chave: "valor" };</code>  
    <code>meuObjeto = null;</code>
- **Tipo:** <code>typeof null</code> retorna <code>"object"</code> (um bug histórico do JavaScript).
- **Intenção:** Indica que o valor está propositalmente ausente ou que uma referência a um objeto não existe mais.

---

**Resumo:**  
Pense em <code>undefined</code> como algo que ainda não tem um valor atribuído (ausência não intencional), enquanto <code>null</code> é um valor definido explicitamente para indicar "sem valor".
`)
textos.set("Pitfalls em operações com null", `
  Operações com null em Node.js (e JavaScript em geral) trazem várias armadilhas ("pitfalls") que podem causar comportamentos inesperados, crashes silenciosos, ou vulnerabilidades difíceis de detectar.
`)
textos.set("Propriedades de null", `
Valores null não ativam default na desestruturação.
Somente undefined ativa. 
Mas null é um valor explícito.
diferente de um \"hole\".
  `)



const codigos = new Map()
codigos.set("exemplo de wrapper", `
// Exemplo de wrapper e criação de propriedades temporárias

var s = 'Deividy';    // string primitiva
s.test = 123;         // tenta atribuir propriedade (ignorada)
console.log(s.test);  // undefined

var b = true;         // boolean primitivo
b.test = 123;         // tenta atribuir propriedade (ignorada)
console.log(b.test);  // undefined

Boolean.prototype.testMethod = function() { 
    return "test"; 
};

console.log(true.testMethod()); // "test"

var S = new String('Deividy');       // objeto String
console.log(S);                      // String { "Deividy" }
console.log(S.toString());           // "Deividy"
S.test = 123;                        // atribui propriedade no objeto
console.log(S.test);                 // 123
`)

codigos.set("diferencas entre stack e heap", `
let a = 10;
let b = a;
b = 20;

console.log(a); // 10 — valor copiado, 'a' e 'b' são independentes (armazenados na stack)

let obj1 = { nome: "Lucas" };
let obj2 = obj1;
obj2.nome = "Ana";

console.log(obj1.nome); // "Ana" — obj1 e obj2 referenciam o mesmo objeto na heap
`)

codigos.set("retornos falsy", `
false
0
-0
0n
null
undefined
NaN
""
''
\`\`
`)

codigos.set("retornos truthy", `
[]
{}
"0"
"false"
new Boolean(false)
function name() {}
`)

codigos.set("diferenças entre retornos falsy e truthy", `
Boolean(false)       // false
new Boolean(false)   // [Boolean: false], mas é truthy    
if ("false") console.log("executa"); // string não vazia = truthy
if ([]) console.log("executa");      // arrays são truthy, mesmo vazios
`)

codigos.set("converter em objeto boolean", `
!!"abc" === Boolean("abc"); // true
`)

codigos.set("Operadores lógicos", `
!  // NOT (negação)  
&& // AND (conjunção lógica)  
|| // OR (disjunção lógica)  
?? // Nullish Coalescing (operador de coalescência nula)
`)

codigos.set("objeto boolean", `
Boolean.prototype.myProp = 123;
console.log((true).myProp); // 123
`)

codigos.set("tipo null", `
typeof null // "object" (bug histórico da linguagem)
// Bug legado do início da linguagem:
// null é representado internamente como 0x00, o que, em comparação binária, é interpretado como um tipo "object"
`)

codigos.set("null vs undefined", `
let x;
console.log(x); // undefined / Ausência de valor não atribuída / Variável não inicializada, argumento omitido / tipo: undefined

let y = null;
console.log(y); // null / Ausência de valor explicitamente atribuída / Reset manual de referência, campo vazio / tipo: object (bug)


null == undefined   // true  (coerção implícita)
null === undefined  // false (sem coerção)

null == false       // false
null == 0           // false
null == ''          // false
`)
codigos.set("conversao em null", `
    Boolean(null) // false
    Number(null) // 0
    String(null) // "null"
    //null é usado para anular uma referência, esvaziar um objeto ou resetar um valor
    let user = {
      name: "Bill",
      profile: { ... }
    };
    
    user.profile = null; // remove a referência, indicando "sem perfil"
    
    null + 1         // 1     -> null vira 0
    null > 0         // false -> null vira 0
    null == 0        // false -> comparações == são sutis
    null >= 0        // true  -> coerção + comparação
    
    JSON.stringify({ a: null }); // '{"a":null}'
    JSON.parse('{"a":null}');   // { a: null }
  `)
  codigos.set("propriedades de null",`
    let { a = 1 } = { a: null };
    console.log(a); // null (não aplica valor default!)
    
    let { b = 2 } = {};
    console.log(b); // 2
    
    let arr = [null, , undefined];
    console.log(arr.length); // 3
    console.log(arr[1]);     // undefined (hole)
    arr.map(x => x);         // [null, <1 empty item>, undefined]
`)
//console.log(textos.get(""))


export const Titulos = titulos;
export const Textos = textos;
export const Codigos = codigos;
