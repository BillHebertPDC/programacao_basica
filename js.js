let itens = [
  { pai: "#container", filho: "introducao", tag: "section", conteudo: "", classe: "" },
  { pai: "#introducao", filho: "introducao_h2", tag: "h2", conteudo: "Introdução" },
  { pai: "#introducao", filho: "introducao_p1", tag: "p", conteudo: "O tipo boolean em JavaScript é um tipo primitivo que representa um valor lógico, com dois possíveis estados: <code>true</code> e <code>false</code>" },
  { pai: "#container", filho: "coercao", tag: "section", conteudo: "" },
  { pai: "#coercao", filho: "coercao_h2", tag: "h2", conteudo: "coerção" },
  { pai: "#coercao", filho: "coercao_p1", tag: "p", conteudo: "JavaScript possui coerção implícita de tipos. O motor (ECMAScript Spec, ToBoolean operation)" },
  { pai: "#coercao", filho: "coercao_pre_1", tag: "pre", conteudo: "" },
  { pai: "#coercao_pre_1", filho: "coercao_pre_h3_1", tag: "h3", conteudo: "Valores falsy" },
  { pai: "#coercao_pre_1", filho: "coercao_code", tag: "code", conteudo: `false 0 -0 0n "" '' \`\` null undefined NaN ` },
  { pai: "#coercao_pre_1", filho: "coercao_pre_h3_2", tag: "h3", conteudo: "Valores truthy" },
  { pai: "#coercao_pre_1", filho: "coercao_code", tag: "code", conteudo: `[] {} function(){} "0" "false" new Boolean(false)` },
  { pai: "#coercao", filho: "coercao_alert", tag: "div", conteudo: "", classe: "alert" },
  {
    pai: "#coercao_alert", filho: "coercao_alert_p", tag: "p", conteudo: `
    Isso tem consequências diretas em:
    <code>if</code>, <code>while</code>, <code>for</code>, <code>?:</code>, <code>&&</code>, <code>||</code>
    Comparações implícitas

    alem de todo objeto ao ser transformado em boolean é truthy

    Boolean(false) // false
    new Boolean(false) // [Boolean: false], mas é truthy

    alem de ter que ficar com muita atenção sobre o que é truthy e falsy

    if ("false") console.log("executa"); // string não vazia = truthy

    if ([]) console.log("executa"); // arrays são truthy, mesmo vazios


    ` },
  {
    pai: "#coercao", filho: "coercao_p2", tag: "p", conteudo: `
    A operação ToBoolean faz parte do Abstract Operations do ECMAScript. Implementada por:
    Boolean() (explicitamente)
    Coerção implícita via estruturas de controle
    ` },
  { pai: "#coercao", filho: "coercao_pre_2", tag: "pre", conteudo: "" },
  { pai: "#coercao_pre_2", filho: "coercao_pre_2_code", tag: "code", conteudo: `!!"abc" === Boolean("abc"); // true` },
  { pai: "#coercao", filho: "coercao_alert_1", tag: "div", conteudo: "", classe: "alert" },
  {
    pai: "#coercao_alert_1", filho: "coercao_alert_1_p", tag: "p", conteudo: `
O operador !! é um hack idiomático para forçar coerção para booleano.
    ` },
  { pai: "#container", filho: "operadores", tag: "section", conteudo: "" },
  { pai: "#operadores", filho: "operadores_h2", tag: "h2", conteudo: "Operadores booleanos" },
  { pai: "#operadores", filho: "operadores_h3_1", tag: "h3", conteudo: "Comparadores" },
  { pai: "#operadores", filho: "operadores_p1", tag: "p", conteudo: "<code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>" },
  { pai: "#operadores", filho: "operadores_h3_1", tag: "h3", conteudo: "Lógico" },
  {
    pai: "#operadores", filho: "operadores_p1", tag: "p", conteudo: `<code>!</code> (NOT), <code>&&</code> (AND), <code>||</code> (OR), <code>??</code> (nullish coalescing)
    ` },

  { pai: "#operadores", filho: "operadores_alert", tag: "div", conteudo: "", classe: "alert" },
  {
    pai: "#operadores_alert", filho: "operadores_alert_p", tag: "p", conteudo: `
    
    Isso tem consequências diretas em:
    <code>if</code>, <code>while</code>, <code>for</code>, <code>?:</code>, <code>&&</code>, <code>||</code>
    Comparações implícitas
    ` },
  { pai: "#container", filho: "boxed", tag: "section", conteudo: "" },
  { pai: "#boxed", filho: "boxed_alert", tag: "div", conteudo: "", classe: "alert" },
  {
    pai: "#boxed_alert", filho: "boxed_alert_p", tag: "p", conteudo: `
    Boolean.prototype.myProp = 123;
    console.log((true).myProp); // 123

    ` },
  { pai: "#container", filho: "introducao", tag: "section", conteudo: "", classe: "" },
  { pai: "#introducao", filho: "introducao_h2", tag: "h2", conteudo: "Introdução" },
  {
    pai: "#introducao", filho: "introducao_p1", tag: "p", conteudo: `
    null é um primitivo em JavaScript que representa a ausência intencional de valor.
    null em JavaScript não representa "vazio genérico", mas uma ausência de valor proposital e explícita, usada com intenção clara — diferente de undefined, que tende a surgir de forma implícita. Compreender suas nuances é fundamental para evitar bugs sutis e escrever código semântico e robusto.
    ` },
  { pai: "#introducao", filho: "limites_div_alert", tag: "div", conteudo: "", classe: "alert" },
  { pai: "#limites_div_alert", filho: "limites_div_alert_h3", tag: "h3", conteudo: "bug histórico" },
  { pai: "#limites_div_alert", filho: "limites_div_alert_pre", tag: "pre", conteudo: "" },
  {
    pai: "#limites_div_alert_pre", filho: "limites_div_alert_pre", tag: "code", conteudo: `
    typeof null // "object" (bug histórico da linguagem)
    // Bug legado do início da linguagem:
    // null é representado internamente como 0x00, o que, em comparação binária, é interpretado como um tipo "object"
 ` },

  { pai: "#container", filho: "null_vs_undefined", tag: "section", conteudo: "", classe: "" },
  { pai: "#null_vs_undefined", filho: "null_vs_undefined_h2", tag: "h2", conteudo: "Diferença entre null e undefined" },
  { pai: "#null_vs_undefined", filho: "null_vs_undefined_pre", tag: "pre", conteudo: "" },
  {
    pai: "#null_vs_undefined_pre", filho: "null_vs_undefined_pre_code", tag: "code", conteudo: `
let x;
console.log(x); // undefined / Ausência de valor não atribuída / Variável não inicializada, argumento omitido / tipo: undefined

let y = null;
console.log(y); // null / Ausência de valor explicitamente atribuída / Reset manual de referência, campo vazio / tipo: object (bug)


null == undefined   // true  (coerção implícita)
null === undefined  // false (sem coerção)

null == false       // false
null == 0           // false
null == ''          // false
    ` },


  { pai: "#container", filho: "conversao", tag: "section", conteudo: "", classe: "" },
  { pai: "#conversao", filho: "conversao_h2", tag: "h2", conteudo: "Conversões" },
  { pai: "#conversao", filho: "conversao_p", tag: "p", conteudo: " Pitfalls em operações com null" },
  { pai: "#conversao", filho: "conversao_pre", tag: "pre", conteudo: "" },
  {
    pai: "#conversao_pre", filho: "conversao_pre_code", tag: "code", conteudo: `
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


    ` },


  { pai: "#container", filho: "propriedade", tag: "section", conteudo: "", classe: "" },
  { pai: "#propriedade", filho: "propriedade_h2", tag: "h2", conteudo: "Propriedade" },
  { pai: "#propriedade", filho: "propriedade_p1", tag: "p", conteudo: "Valores null não ativam default na desestruturação. Somente undefined ativa. Mas null é um valor explícito; diferente de um \"hole\"." },
  { pai: "#propriedade", filho: "propriedade_pre", tag: "pre", conteudo: "" },
  {
    pai: "#propriedade_pre", filho: "propriedade_pre_code", tag: "code", conteudo: `
let { a = 1 } = { a: null };
console.log(a); // null (não aplica valor default!)

let { b = 2 } = {};
console.log(b); // 2

let arr = [null, , undefined];
console.log(arr.length); // 3
console.log(arr[1]);     // undefined (hole)
arr.map(x => x);         // [null, <1 empty item>, undefined]

    ` },

  { pai: "#container", filho: "comparacao", tag: "section", conteudo: "", classe: "" },
  { pai: "#comparacao", filho: "comparacao_h2", tag: "h2", conteudo: "comparacao" },
  {
    pai: "#comparacao", filho: "comparacao_p1", tag: "p", conteudo: `
<code>||</code> e <code>&&</code> avaliam falsy/truthy.
<code>??</code> (nullish coalescing) só trata null e undefined.
    ` },
  { pai: "#comparacao", filho: "comparacao_pre", tag: "pre", conteudo: "" },
  {
    pai: "#comparacao_pre", filho: "comparacao_pre_code", tag: "code", conteudo: `
null || 'default'    // 'default'
null && 'anything'   // null
null ?? 'fallback'   // 'fallback'

// Comparando todos os falsy para reforçar papel de null
[false, 0, '', null, undefined, NaN].map(Boolean); 
// → [false, false, false, false, false, false]

    ` },
  { pai: "#container", filho: "introducao", tag: "section", conteudo: "", classe: "" },
  { pai: "#introducao", filho: "introducao_h2", tag: "h2", conteudo: "Introdução" },
  { pai: "#introducao", filho: "introducao_p1", tag: "p", conteudo: "Em JavaScript, o tipo <code>Number</code> é usado para representar valores numéricos, tanto inteiros quanto de ponto flutuante (decimais). Diferentemente de algumas outras linguagens, o JavaScript possui apenas um tipo numérico para todos os números." },
  { pai: "#container", filho: "representacao", tag: "section", conteudo: "" },
  { pai: "#representacao", filho: "representacao_h2", tag: "h2", conteudo: "Representação Interna (Padrão IEEE 754)" },
  { pai: "#representacao", filho: "representacao_p1", tag: "p", conteudo: "Internamente, os números em JavaScript são representados usando o formato de ponto flutuante de dupla precisão de 64 bits (IEEE 754). Isso significa que cada valor numérico é armazenado em 64 bits, divididos da seguinte forma:" },
  { pai: "#representacao", filho: "representacao_p2", tag: "p", conteudo: "Sinal (1 bit): Indica se o número é positivo (0) ou negativo (1)." },
  { pai: "#representacao", filho: "representacao_p3", tag: "p", conteudo: "Expoente (11 bits): Representa a ordem de magnitude do número (a potência de 2 pela qual a mantissa é multiplicada). O expoente é armazenado com um bias (deslocamento) de 1023." },
  { pai: "#representacao", filho: "representacao_p4", tag: "p", conteudo: "Mantissa (52 bits): Também conhecida como significando, representa os dígitos significativos do número. A mantissa é normalizada (o dígito mais significativo é sempre 1 e não é explicitamente armazenado, economizando um bit de precisão - o chamado \"bit implícito\")." },
  { pai: "#representacao", filho: "representacao_p5", tag: "p", conteudo: "Essa representação permite que o JavaScript lide com uma vasta gama de números, desde valores muito pequenos até valores muito grandes, bem como números com casas decimais." },
  { pai: "#container", filho: "limites", tag: "section", conteudo: "" },
  { pai: "#limites", filho: "limites_h2", tag: "h2", conteudo: "Limites de Precisão" },
  { pai: "#limites", filho: "limites_p1", tag: "p", conteudo: "Devido à natureza de ponto flutuante da representação IEEE 754, é importante entender que nem todos os números reais podem ser representados com precisão total. Isso pode levar a pequenas imprecisões em cálculos envolvendo números decimais." },
  { pai: "#limites", filho: "limites_pre", tag: "pre", conteudo: `` },
  {
    pai: "#limites_pre", filho: "limites_pre_code", tag: "code", conteudo: `
console.log(Number.MAX_SAFE_INTEGER) // (9007199254740991): Representa o maior inteiro que pode ser representado com precisão em JavaScript."
console.log(Number.MIN_SAFE_INTEGER) // (-9007199254740991 ): Representa o menor inteiro que pode ser representado com precisão em JavaScript.
    `
  },
  { pai: "#limites", filho: "limites_div", tag: "div", conteudo: "", classe: "alert" },
  { pai: "#limites_div", filho: "limites_div_h2", tag: "h3", conteudo: "CUIDADO COM OS LIMITES" },
  { pai: "#limites_div", filho: "limites_div_p", tag: "p", conteudo: "Números hexadecimais, binários e octais literais com prefixo 0x, 0b, 0o são válidos" },
  { pai: "#limites_div", filho: "limites_div_pre", tag: "pre", conteudo: "" },
  {
    pai: "#limites_div_pre", filho: "limites_div_pre_code", tag: "code", conteudo: `
// Números inteiros fora desse intervalo podem perder precisão.
Number.MAX_VALUE * 2 // Infinity
Number.MIN_VALUE / 2 // 0
// hexadecimais, binários e octais literais com prefixo 0x, 0b, 0o são válidos
0xff === 255
0b101 === 5
0o10 === 8

    ` },


  { pai: "#container", filho: "especiais", tag: "section", conteudo: "" },
  { pai: "#especiais", filho: "especiais_h2", tag: "h2", conteudo: "Valores Especiais" },
  { pai: "#especiais", filho: "especiais_p1", tag: "p", conteudo: "<code>NaN</code> (Not-a-Number): Representa um valor que não é um número. Geralmente resulta de operações matemáticas inválidas (por exemplo, dividir zero por zero, ou tentar converter uma string não numérica para um número).qualquer operação aritmética com <code>NaN</code> resultará em <code>NaN</code>. Detalhe é <code>Nan</code> não é igual a si mesmo (NaN === NaN é false). Para verificar se um valor é <code>NaN</code>, você deve usar a função global <code>isNaN()</code> ou, de forma mais confiável, <code>Number.isNaN()</code>." },
  { pai: "#especiais", filho: "especiais_p2", tag: "p", conteudo: "<code>Infinity</code>: Representa um valor numérico infinito positivo. Ocorre, por exemplo, ao dividir um número positivo por zero." },
  { pai: "#especiais", filho: "especiais_p3", tag: "p", conteudo: "<code>-Infinity</code>: Representa um valor numérico infinito negativo. Ocorre, por exemplo, ao dividir um número negativo por zero." },
  { pai: "#container", filho: "propriedade", tag: "section", conteudo: "" },
  { pai: "#propriedade", filho: "propriedade_h2", tag: "h2", conteudo: "Propriedades" },

  { pai: "#propriedade", filho: "especiais_p4", tag: "p", conteudo: "O objeto global <code>Number</code> possui algumas propriedades estáticas (acessadas diretamente em Number, e não em instâncias de números) que fornecem informações úteis:" },
  { pai: "#propriedade", filho: "especiais_pre", tag: "pre", conteudo: "" },
  {
    pai: "#especiais_pre", filho: "especiais_pre_code", tag: "code", conteudo: `
    console.log(Number.EPSILON) // 2.220446049250313e-16 A menor diferença entre 1 e o próximo maior número de ponto flutuante representável. Útil para comparações de igualdade aproximada com números de ponto flutuante.
    console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 maximo inteiro
    console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991 minimo inteiro.
    console.log(Number.MAX_VALUE) // 1.7976931348623157e+308 maximo
    console.log(Number.MIN_VALUE) // 5e-324 minimo
    console.log(Number.NaN) // NaN O valor Not-a-Number.
    console.log(Number.POSITIVE_INFINITY) // Infinity O valor Infinity.
    console.log(Number.NEGATIVE_INFINITY) // -Infinity O valor -Infinity.
    ` },
  { pai: "#propriedade", filho: "propriedade_alert", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#propriedade_alert", filho: "propriedade_alert_p", tag: "p", conteudo: ' Erros de precisão: exemplos concretos e Number.EPSILON' },
  { pai: "#propriedade_alert", filho: "propriedade_alert_pre", tag: "pre", conteudo: '' },
  {
    pai: "#propriedade_alert_pre", filho: "propriedade_alert_pre_code", tag: "code", conteudo: `
0.1 + 0.2 === 0.3 // false
function nearlyEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

  ` },

  { pai: "#container", filho: "overflow", tag: "section", conteudo: "" },
  { pai: "#overflow", filho: "overflow_h2", tag: "h2", conteudo: "Overflow e Underflow silenciosos" },
  { pai: "#overflow", filho: "overflow_h3", tag: "h3", conteudo: "JavaScript não lança erro com overflow" },
  { pai: "#overflow", filho: "overflow_pre", tag: "pre", conteudo: "" },
  {
    pai: "#overflow_pre", filho: "overflow_pre_code", tag: "code", conteudo: `
Number.MAX_VALUE * 2 // Infinity
Number.MIN_VALUE / 2 // 0 
  ` },

  { pai: "#container", filho: "metodos", tag: "section", conteudo: "" },
  { pai: "#metodos", filho: "metodos_h2", tag: "h2", conteudo: "Metodos" },
  { pai: "#metodos", filho: "metodos_h3", tag: "h3", conteudo: "Estaticos" },
  { pai: "#metodos", filho: "metodos_h2_p", tag: "p", conteudo: "O objeto Number também possui métodos estáticos para realizar conversões e verificações relacionadas a números:" },

  { pai: "#metodos", filho: "metodos_isNaN_h3_span", tag: "span", conteudo: `Number.isNaN(value)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_isNaN_p1", tag: "p", conteudo: `Verifica se o valor é exatamente o valor especial NaN (Not-a-Number).` },
  { pai: "#metodos", filho: "metodos_isNaN_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_isNaN_pre", filho: "metodos_isNaN_pre_code", tag: "code", conteudo: `
console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN('NaN'));         // false
console.log(Number.isNaN(undefined));     // false
    ` },
  { pai: "#metodos", filho: "metodos_alert_isNaN", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#metodos_alert_isNaN", filho: "metodos_alert_isNaN_p", tag: "p", conteudo: 'Não faz coerção de tipo como a função global isNaN(), ou seja, é mais confiável.' },

  { pai: "#metodos", filho: "metodos_isFinite_h3_span", tag: "span", conteudo: `Number.isFinite(value)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_isFinite_p1", tag: "p", conteudo: `Verifica se o valor é um número finito (nem Infinity, -Infinity, nem NaN).` },
  { pai: "#metodos", filho: "metodos_isFinite_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_isFinite_pre", filho: "metodos_isFinite_pre_code", tag: "code", conteudo: `
console.log(Number.isFinite(10));         // true
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isFinite('10'));       // false
    ` },
  { pai: "#metodos", filho: "metodos_alert_isFinite", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#metodos_alert_isFinite", filho: "metodos_alert_isFinite_p", tag: "p", conteudo: 'Não faz coerção de tipo, diferente da função global isFinite().' },

  { pai: "#metodos", filho: "metodos_isInteger_h3_span", tag: "span", conteudo: `Number.isInteger(value)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_isInteger_p1", tag: "p", conteudo: `Verifica se o valor é do tipo number e é um inteiro.` },
  { pai: "#metodos", filho: "metodos_isInteger_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_isInteger_pre", filho: "metodos_isInteger_pre_code", tag: "code", conteudo: `
console.log(Number.isInteger(42));        // true
console.log(Number.isInteger(4.2));       // false
console.log(Number.isInteger('42'));      // false
    ` },

  { pai: "#metodos", filho: "metodos_isSafeInteger_h3_span", tag: "span", conteudo: `Number.isSafeInteger(value)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_isSafeInteger_p1", tag: "p", conteudo: `Verifica se o valor é um inteiro seguro, ou seja, no intervalo entre Number.MIN_SAFE_INTEGER e Number.MAX_SAFE_INTEGER.` },
  { pai: "#metodos", filho: "metodos_isSafeInteger_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_isSafeInteger_pre", filho: "metodos_isSafeInteger_pre_code", tag: "code", conteudo: `
console.log(Number.isSafeInteger(9007199254740991));  // true
console.log(Number.isSafeInteger(9007199254740992));  // false
console.log(Number.isSafeInteger(3.14));              // false
    ` },
  { pai: "#metodos", filho: "metodos_alert_intervalor", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#metodos_alert_intervalor", filho: "metodos_alert_intervalor_p", tag: "p", conteudo: 'Esse intervalo garante precisão exata nas operações.' },

  { pai: "#metodos", filho: "metodos_parseFloat_h3_span", tag: "span", conteudo: `Number.parseFloat(string)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_parseFloat_p1", tag: "p", conteudo: `Analisa a string e retorna o número de ponto flutuante correspondente.` },
  { pai: "#metodos", filho: "metodos_parseFloat_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_parseFloat_pre", filho: "metodos_parseFloat_pre_code", tag: "code", conteudo: `
console.log(Number.parseFloat("3.14"));    // 3.14
console.log(Number.parseFloat("314e-2"));  // 3.14
console.log(Number.parseFloat("abc"));     // NaN
    ` },
  { pai: "#metodos", filho: "metodos_alert_parsefloat", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#metodos_alert_parsefloat", filho: "metodos_alert_parsefloat_p", tag: "p", conteudo: 'Similar à função global parseFloat(), mas como método do objeto Number.' },

  { pai: "#metodos", filho: "metodos_parseInt_h3_span", tag: "span", conteudo: `Number.parseInt(string, radix)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_parseInt_p1", tag: "p", conteudo: `Analisa a string e retorna um número inteiro de acordo com a base especificada.` },
  { pai: "#metodos", filho: "metodos_parseInt_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_parseInt_pre", filho: "metodos_parseInt_pre_code", tag: "code", conteudo: `
console.log(Number.parseInt("10", 10));    // 10 (decimal)
console.log(Number.parseInt("10", 2));     // 2  (binário -> decimal)
console.log(Number.parseInt("ff", 16));    // 255 (hexadecimal)
    ` },

  { pai: "#metodos", filho: "metodos_alert_parseint", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#metodos_alert_parseint", filho: "metodos_alert_parseint_p", tag: "p", conteudo: 'Similar à função global parseInt(), mas como método do objeto Number.' },

  { pai: "#metodos", filho: "instancia_h3", tag: "h3", conteudo: "Métodos de Instância" },
  { pai: "#metodos", filho: "instancia_p", tag: "p", conteudo: "As instâncias de números (variáveis que armazenam valores do tipo Number) também possuem alguns métodos para formatação" },

  { pai: "#metodos", filho: "metodos_toFixed_h3_span", tag: "span", conteudo: `toFixed(digits)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toFixed_p1", tag: "p", conteudo: `Formata o número para uma string com um número fixo de dígitos após o ponto decimal. Arredonda se necessário. O valor passado deve estar entre 0 e 100.` },
  { pai: "#metodos", filho: "metodos_toFixed_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_toFixed_pre", filho: "metodos_toFixed_pre_code", tag: "code", conteudo: `
let num1 = 123.456;
console.log(num1.toFixed(2));   // "123.46"
console.log(num1.toFixed(0));   // "123"
console.log((2.5).toFixed(0));  // "3" — arredonda para o inteiro mais próximo
    ` },

  { pai: "#metodos", filho: "metodos_toPrecision_h3_span", tag: "span", conteudo: `toPrecision(precision)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toPrecision_p1", tag: "p", conteudo: `Formata o número para uma string com um número específico de dígitos significativos. Pode usar notação exponencial se necessário. Se o número tiver mais dígitos que o especificado, ele é arredondado.` },
  { pai: "#metodos", filho: "metodos_toPrecision_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_toPrecision_pre", filho: "metodos_toPrecision_pre_code", tag: "code", conteudo: `
let num2 = 123.456;
console.log(num2.toPrecision(5));  // "123.46"
console.log(num2.toPrecision(2));  // "1.2e+2"
console.log((0.00456).toPrecision(2)); // "4.6e-3"
    ` },

  { pai: "#metodos", filho: "metodos_toString_h3_span", tag: "span", conteudo: `toString(radix)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toString_p1", tag: "p", conteudo: `Converte o número em uma string na base especificada (entre 2 e 36). Base 2: binário, 8: octal, 10: decimal (padrão), 16: hexadecimal.` },
  { pai: "#metodos", filho: "metodos_toString_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_toString_pre", filho: "metodos_toString_pre_code", tag: "code", conteudo: `
let num3 = 255;
console.log(num3.toString());      // "255" (decimal por padrão)
console.log(num3.toString(16));    // "ff" (hexadecimal)
console.log(num3.toString(2));     // "11111111" (binário)
    ` },

  { pai: "#metodos", filho: "metodos_toLocaleString_h3_span", tag: "span", conteudo: `toLocaleString(locales, options)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toLocaleString_p1", tag: "p", conteudo: `Retorna uma string formatada conforme as convenções do idioma especificado. Suporta opções para estilo numérico, moeda, uso de separador decimal etc. Muito útil para internacionalização e exibição de dados ao usuário.` },
  { pai: "#metodos", filho: "metodos_toLocaleString_pre", tag: "pre", conteudo: `` },
  {
    pai: "#metodos_toLocaleString_pre", filho: "metodos_toLocaleString_pre_code", tag: "code", conteudo: `
let num4 = 1234567.89;

// Exemplo com local "pt-BR" e estilo monetário:
console.log(num4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
// "R$ 1.234.567,89"

// Exemplo com local "en-US" e formato decimal:
console.log(num4.toLocaleString('en-US', { minimumFractionDigits: 2 }));
// "1,234,567.89"

// Exemplo com arredondamento para 0 casas decimais:
console.log(num4.toLocaleString('de-DE', { maximumFractionDigits: 0 }));
// "1.234.568"
    ` },
  { pai: "#metodos", filho: "metodos_Coerção_h2", tag: "h2", conteudo: "Coerção" },
  { pai: "#metodos", filho: "metodos_alert_Coerção", tag: "div", conteudo: "", classe: "alert tip" },
  {
    pai: "#metodos_alert_Coerção", filho: "metodos_alert_Coerção_p", tag: "p", conteudo: `
JavaScript frequentemente realiza coerção de tipo envolvendo números:

Para String: Usar o operador + com uma string ou o método toString() converte um número para uma string.
Para Número: Vários operadores aritméticos (como -, *, /) e funções como Number(), parseInt(), e parseFloat() tentam converter outros tipos para números.

    ` },
  { pai: "#metodos", filho: "metodos_Coerção_pre", tag: "pre", conteudo: "" },
  {
    pai: "#metodos", filho: "metodos_Coerção_pre_code", tag: "code", conteudo: `
'5' - 1   // 4
'5' + 1   // '51'
true + 1  // 2
null + 1  // 1
undefined + 1 // NaN
` },

  { pai: "#metodos", filho: "metodos_Performace_h2", tag: "h2", conteudo: "Performace" },
  { pai: "#metodos", filho: "metodos_alert_Performace", tag: "div", conteudo: "", classe: "alert tip" },
  {
    pai: "#metodos_alert_Performace", filho: "metodos_alert_Performace_p", tag: "p", conteudo: `
As operações aritméticas com números em JavaScript geralmente são rápidas, pois são implementadas nativamente pelo motor JavaScript. No entanto, é importante estar ciente das possíveis imprecisões de ponto flutuante em cálculos complexos.
    ` },
  { pai: "#container", filho: "introducao", tag: "section", conteudo: "" },
  { pai: "#introducao", filho: "introducao_h2", tag: "h2", conteudo: "Introdução" },
  { pai: "#introducao", filho: "introducao_p1", tag: "p", conteudo: "Em JavaScript, uma string é uma sequência de zero ou mais caracteres Unicode. Elas são usadas para representar texto." },
  { pai: "#introducao", filho: "introducao_p2", tag: "p", conteudo: "Um ponto crucial sobre strings em JavaScript é que elas são <strong  id=\"introducao_st\">imutáveis</strong>. Isso significa que, uma vez que uma string é criada, você não pode alterar seus caracteres individualmente. Qualquer operação que pareça modificar uma string, na verdade, cria uma nova string com as alterações desejadas." },
  { pai: "#container", filho: "representacao", tag: "section", conteudo: "" },
  { pai: "#representacao", filho: "representacao_h2", tag: "h2", conteudo: "Representação Interna" },
  { pai: "#representacao", filho: "representacao_p1", tag: "p", conteudo: "Internamente, as strings em JavaScript são codificadas usando UTF-16. Isso significa que cada caractere na string é representado por um ou dois valores de 16 bits (code units)." },
  { pai: "#representacao", filho: "representacao_p2", tag: "p", conteudo: "A maioria dos caracteres comuns é representada por um único code unit." },
  { pai: "#representacao", filho: "representacao_p3", tag: "p", conteudo: "Caracteres Unicode em planos superiores (fora do Plano Multilíngue Básico - BMP) são representados por um par de code units, conhecidos como surrogate pair." },
  { pai: "#representacao", filho: "representacao_p4", tag: "p", conteudo: "É importante estar ciente disso ao trabalhar com propriedades como <code>length</code> e ao iterar sobre strings, pois um único caractere pode ocupar um ou dois \"espaços\" em termos de code units." },
  { pai: "#representacao", filho: "representacao_div", tag: "div", conteudo: "", classe: "alert" },
  { pai: "#representacao_div", filho: "representacao_div_h3", tag: "h3", conteudo: "Exemplo de surrogate pair", },
  { pai: "#representacao_div", filho: "representacao_div_pre", tag: "pre", conteudo: "", },
  {
    pai: "#representacao_div_pre", filho: "representacao_div_pre_code", tag: "code", conteudo: `
  let emojiComplexo = "😊"; // Este emoji é representado por um surrogate pair
  console.log(emojiComplexo.length); // Saída: 2 (conta os code units)
  
  // Para iterar corretamente sobre os caracteres (incluindo surrogate pairs):
  for (const char of emojiComplexo) {
    console.log(char); // Saída: 😊
  }
    `},
  { pai: "#representacao", filho: "representacao_alert", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#representacao_alert", filho: "representacao_alert_h3", tag: "h3", conteudo: 'Strings são array-like mas não arrays.' },
  { pai: "#representacao_alert", filho: "representacao_alert_pre", tag: "pre", conteudo: '' },
  {
    pai: "#representacao_alert_pre", filho: "representacao_alert_pre_code", tag: "code", conteudo: `
const emoji = "💩";
console.log(emoji.charAt(0)); // quebra!
console.log([...emoji][0]);   // correto

    ` },



  { pai: "#container", filho: "criacao", tag: "section", conteudo: "" },
  { pai: "#criacao", filho: "criacao_h2", tag: "h2", conteudo: "Como Criar Strings" },
  { pai: "#criacao", filho: "criacao_p1", tag: "p", conteudo: "Existem várias maneiras de criar strings em JavaScript:" },
  { pai: "#criacao", filho: "criacao_h3_1", tag: "h3", conteudo: "Literais de String" },
  { pai: "#criacao", filho: "criacao_pre_1", tag: "pre", conteudo: "" },
  {
    pai: "#criacao_pre_1", filho: "criacao_code_1", tag: "code",
    conteudo: `
  let texto1 = 'com aspas simples.';
  let texto2 = "com aspas duplas";
        `},
  { pai: "#criacao", filho: "criacao_h3_2", tag: "h3", conteudo: "Template Literals (ES6+)" },
  { pai: "#criacao", filho: "criacao_pre_2", tag: "pre", conteudo: "" },
  {
    pai: "#criacao_pre_2", filho: "criacao_code_2", tag: "code", conteudo: `
  let nome = "Maria";
  let saudacao = \`Olá, \${nome}!\`; // Permite interpolação de variáveis
  
  `},
  { pai: "#criacao", filho: "criacao_h3_3", tag: "h3", conteudo: "Construtor String" },
  { pai: "#criacao", filho: "criacao_pre_3", tag: "pre", conteudo: "" },
  {
    pai: "#criacao_pre_3", filho: "criacao_code_3", tag: "code", conteudo: `
  let texto3 = new String("texto"); // Cria um objeto String (não recomendado para uso geral)
  
  ` },
  { pai: "#criacao", filho: "criacao_h3_4", tag: "h3", conteudo: "String.raw" },
  { pai: "#criacao", filho: "criacao_p_4", tag: "p", conteudo: `String.raw é uma tag built-in (já pronta) do JavaScript para template literals. Ela retorna a string literal crua, ou seja, sem interpretar escapes como \\n, \\t, \\uXXXX, etc. Ideal para quando você precisa da string exatamente como escrita no código-fonte. ` },
  {
    pai: "#criacao", filho: "criacao_pre_4", tag: "pre", conteudo: ``
  },
  {
    pai: "#criacao_pre_4", filho: "criacao_code_4", tag: "code", conteudo: `
String.raw\`linha1\\nlinha2\`
  ` },


  { pai: "#container", filho: "propriedades", tag: "section", conteudo: "" },
  { pai: "#propriedades", filho: "propriedades_h2", tag: "h2", conteudo: "Propriedades" },
  { pai: "#propriedades", filho: "propriedades_div_length", tag: "div", conteudo: "", classe: "method-container" },
  { pai: "#propriedades_div_length", filho: "propriedades_h3_length", tag: "h3", conteudo: `` },
  { pai: "#propriedades_h3_length", filho: "propriedades_h3_length_span", tag: "span", conteudo: `length`, classe: "method-name" },
  { pai: "#propriedades_div_length", filho: "propriedades_p1", tag: "p", conteudo: "Retorna o número de unidades de código (code units) na string." },
  { pai: "#propriedades_div_length", filho: "propriedades_pre", tag: "pre", conteudo: "" },
  {
    pai: "#propriedades_pre", filho: "propriedades_code", tag: "code", conteudo: `
  let texto = "JavaScript";
  console.log(texto.length); // 10
  
  `},
  { pai: "#propriedades_div_length", filho: "propriedades_p2", tag: "p", conteudo: 'Lembre-se que, devido à codificação UTF-16, alguns caracteres (como emojis) podem ocupar duas unidades de código, portanto <code>length</code> pode não corresponder ao número de caracteres visíveis.', classe: "alert" },
  { pai: "#container", filho: "metodos", tag: "section", conteudo: "" },
  { pai: "#metodos", filho: "metodos_h2", "tag": "h2", "conteudo": "Métodos" },

  { pai: "#metodos", filho: "metodos_charAt_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_charAt_h3", filho: "metodos_charAt_h3_span", tag: "span", conteudo: `charAt(index)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_charAt_p1", tag: "p", conteudo: `Retorna o caractere (como uma string) no índice especificado.` },
  { pai: "#metodos", filho: "metodos_charAt_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_charAt_pre", filho: "metodos_charAt_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.charAt(0)); // 'J'` },

  { pai: "#metodos", filho: "metodos_charCodeAt_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_charCodeAt_h3", filho: "metodos_charCodeAt_h3_span", tag: "span", conteudo: `charCodeAt(index)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_charCodeAt_p1", tag: "p", conteudo: `Retorna o valor Unicode (um número inteiro entre 0 e 65535) do caractere no índice especificado. Para surrogate pairs, retorna o valor do primeiro code unit.` },
  { pai: "#metodos", filho: "metodos_charCodeAt_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_charCodeAt_pre", filho: "metodos_charCodeAt_pre_code", tag: "code", conteudo: `let texto = 'A';\nconsole.log(texto.charCodeAt(0)); // 65` },

  { pai: "#metodos", filho: "metodos_codePointAt_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_codePointAt_h3", filho: "metodos_codePointAt_h3_span", tag: "span", conteudo: `codePointAt(index)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_codePointAt_p1", tag: "p", conteudo: `Retorna o valor Unicode real (code point) do caractere no índice especificado. Lida corretamente com surrogate pairs.` },
  { pai: "#metodos", filho: "metodos_codePointAt_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_codePointAt_pre", filho: "metodos_codePointAt_pre_code", tag: "code", conteudo: `let emoji = '😊';\nconsole.log(emoji.codePointAt(0)); // 128522` },

  { pai: "#metodos", filho: "metodos_concat_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_concat_h3", filho: "metodos_concat_h3_span", tag: "span", conteudo: `concat(str1, str2, ...)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_concat_p1", tag: "p", conteudo: `Retorna uma nova string que é a concatenação da string original com as strings fornecidas. O operador + é geralmente preferível para concatenação.` },
  { pai: "#metodos", filho: "metodos_concat_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_concat_pre", filho: "metodos_concat_pre_code", tag: "code", conteudo: `let texto1 = 'Olá ';\nlet texto2 = 'mundo!';\nconsole.log(texto1.concat(texto2)); // 'Olá mundo!'\n// Equivalente a:\nconsole.log(texto1 + texto2); // 'Olá mundo!'` },

  { pai: "#metodos", filho: "metodos_slice_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_slice_h3", filho: "metodos_slice_h3_span", tag: "span", conteudo: `slice(start, end)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_slice_p1", tag: "p", conteudo: `Extrai uma seção da string e retorna uma nova string. O índice end não é incluído. Índices negativos contam a partir do final da string.` },
  { pai: "#metodos", filho: "metodos_slice_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_slice_pre", filho: "metodos_slice_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.slice(0, 4)); // 'Java'\nconsole.log(texto.slice(4)); // 'Script'\nconsole.log(texto.slice(-6)); // 'Script' (começa 6 caracteres a partir do final)` },

  { pai: "#metodos", filho: "metodos_substring_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_substring_h3", filho: "metodos_substring_h3_span", tag: "span", conteudo: `substring(start, end)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_substring_p1", tag: "p", conteudo: `Similar a slice(), mas não lida com índices negativos de forma consistente entre navegadores. Geralmente, slice() é preferível.` },
  { pai: "#metodos", filho: "metodos_substring_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_substring_pre", filho: "metodos_substring_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.substring(0, 4)); // 'Java'` },

  { pai: "#metodos", filho: "metodos_substr_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_substr_h3", filho: "metodos_substr_h3_span", tag: "span", conteudo: `substr(start, length)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_substr_p1", tag: "p", conteudo: `Extrai uma seção da string, começando em start e com o número de caracteres especificado por length. Este método é considerado legado e não é recomendado para uso em código novo.` },
  { pai: "#metodos", filho: "metodos_substr_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_substr_pre", filho: "metodos_substr_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.substr(0, 4)); // 'Java'` },

  { pai: "#metodos", filho: "metodos_toUpperCase_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_toUpperCase_h3", filho: "metodos_toUpperCase_h3_span", tag: "span", conteudo: `toUpperCase()`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toUpperCase_p1", tag: "p", conteudo: `Retorna uma nova string com todos os caracteres convertidos para maiúsculas.` },
  { pai: "#metodos", filho: "metodos_toUpperCase_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_toUpperCase_pre", filho: "metodos_toUpperCase_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.toUpperCase()); // 'JAVASCRIPT'` },

  { pai: "#metodos", filho: "metodos_toLowerCase_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_toLowerCase_h3", filho: "metodos_toLowerCase_h3_span", tag: "span", conteudo: `toLowerCase()`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_toLowerCase_p1", tag: "p", conteudo: `Retorna uma nova string com todos os caracteres convertidos para minúsculas.` },
  { pai: "#metodos", filho: "metodos_toLowerCase_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_toLowerCase_pre", filho: "metodos_toLowerCase_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.toLowerCase()); // 'javascript'` },

  { pai: "#metodos", filho: "metodos_trim_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_trim_h3", filho: "metodos_trim_h3_span", tag: "span", conteudo: `trim()`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_trim_p1", tag: "p", conteudo: `Retorna uma nova string com espaços em branco (espaços, tabulações, quebras de linha, etc.) removidos do início e do final da string.` },
  { pai: "#metodos", filho: "metodos_trim_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_trim_pre", filho: "metodos_trim_pre_code", tag: "code", conteudo: `let texto = '  JavaScript  ';\nconsole.log(texto.trim()); // 'JavaScript'` },

  { pai: "#metodos", filho: "metodos_startsWith_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_startsWith_h3", filho: "metodos_startsWith_h3_span", tag: "span", conteudo: `startsWith(searchString, position)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_startsWith_p1", tag: "p", conteudo: `Retorna um booleano indicando se a string começa com a searchString, opcionalmente a partir da position.` },
  { pai: "#metodos", filho: "metodos_startsWith_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_startsWith_pre", filho: "metodos_startsWith_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.startsWith('Java')); // true\nconsole.log(texto.startsWith('Script', 4)); // true` },

  { pai: "#metodos", filho: "metodos_endsWith_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_endsWith_h3", filho: "metodos_endsWith_h3_span", tag: "span", conteudo: `endsWith(searchString, length)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_endsWith_p1", tag: "p", conteudo: `Retorna um booleano indicando se a string termina com a searchString, opcionalmente até o length especificado.` },
  { pai: "#metodos", filho: "metodos_endsWith_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_endsWith_pre", filho: "metodos_endsWith_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.endsWith('Script')); // true\nconsole.log(texto.endsWith('Java', 4)); // true` },

  { pai: "#metodos", filho: "metodos_includes_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_includes_h3", filho: "metodos_includes_h3_span", tag: "span", conteudo: `includes(searchString, position)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_includes_p1", tag: "p", conteudo: `Retorna um booleano indicando se a string contém a searchString, opcionalmente a partir da position.` },
  { pai: "#metodos", filho: "metodos_includes_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_includes_pre", filho: "metodos_includes_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.includes('Script')); // true\nconsole.log(texto.includes('Type')); // false` },

  { pai: "#metodos", filho: "metodos_indexOf_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_indexOf_h3", filho: "metodos_indexOf_h3_span", tag: "span", conteudo: `indexOf(searchValue, fromIndex)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_indexOf_p1", tag: "p", conteudo: `Retorna o índice da primeira ocorrência de searchValue na string, ou -1 se não for encontrado. A busca começa em fromIndex (opcional).` },
  { pai: "#metodos", filho: "metodos_indexOf_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_indexOf_pre", filho: "metodos_indexOf_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.indexOf('a')); // 1\nconsole.log(texto.indexOf('a', 2)); // 3` },

  { pai: "#metodos", filho: "metodos_lastIndexOf_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_lastIndexOf_h3", filho: "metodos_lastIndexOf_h3_span", tag: "span", conteudo: `lastIndexOf(searchValue, fromIndex)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_lastIndexOf_p1", tag: "p", conteudo: `Retorna o índice da última ocorrência de searchValue na string, ou -1 se não for encontrado. A busca começa de trás para frente a partir de fromIndex (opcional).` },
  { pai: "#metodos", filho: "metodos_lastIndexOf_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_lastIndexOf_pre", filho: "metodos_lastIndexOf_pre_code", tag: "code", conteudo: `let texto = 'JavaScript';\nconsole.log(texto.lastIndexOf('a')); // 3` },

  { pai: "#metodos", filho: "metodos_replace_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_replace_h3", filho: "metodos_replace_h3_span", tag: "span", conteudo: `replace(searchValue, newValue)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_replace_p1", tag: "p", conteudo: `Retorna uma nova string com a primeira ocorrência de searchValue substituída por newValue. searchValue pode ser uma string ou uma expressão regular.` },
  { pai: "#metodos", filho: "metodos_replace_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_replace_pre", filho: "metodos_replace_pre_code", tag: "code", conteudo: `let texto = 'JavaScript é incrível';\nconsole.log(texto.replace('incrível', 'fantástico')); // 'JavaScript é fantástico'` },

  { pai: "#metodos", filho: "metodos_replaceAll_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_replaceAll_h3", filho: "metodos_replaceAll_h3_span", tag: "span", conteudo: `replaceAll(searchValue, newValue)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_replaceAll_p1", tag: "p", conteudo: `Retorna uma nova string com todas as ocorrências de searchValue substituídas por newValue. searchValue pode ser uma string ou uma expressão regular.` },
  { pai: "#metodos", filho: "metodos_replaceAll_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_replaceAll_pre", filho: "metodos_replaceAll_pre_code", tag: "code", conteudo: `let texto = 'maçã, banana, maçã';\nconsole.log(texto.replaceAll('maçã', 'laranja')); // 'laranja, banana, laranja'` },

  { pai: "#metodos", filho: "metodos_split_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_split_h3", filho: "metodos_split_h3_span", tag: "span", conteudo: `split(separator, limit)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_split_p1", tag: "p", conteudo: `Divide a string em um array de substrings, usando o separator especificado. O limit opcional especifica o número máximo de divisões.` },
  { pai: "#metodos", filho: "metodos_split_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_split_pre", filho: "metodos_split_pre_code", tag: "code", conteudo: `let texto = 'maçã,banana,laranja';\nconsole.log(texto.split(',')); // ['maçã', 'banana', 'laranja']\nconsole.log(texto.split(',', 2)); // ['maçã', 'banana']` },

  { pai: "#metodos", filho: "metodos_padStart_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_padStart_h3", filho: "metodos_padStart_h3_span", tag: "span", conteudo: `padStart(targetLength, padString)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_padStart_p1", tag: "p", conteudo: `Preenche o início da string com padString até atingir o targetLength.` },
  { pai: "#metodos", filho: "metodos_padStart_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_padStart_pre", filho: "metodos_padStart_pre_code", tag: "code", conteudo: `let texto = '5';\nconsole.log(texto.padStart(3, '0')); // '005'` },

  { pai: "#metodos", filho: "metodos_padEnd_h3", tag: "h3", conteudo: `` },
  { pai: "#metodos_padEnd_h3", filho: "metodos_padEnd_h3_span", tag: "span", conteudo: `padEnd(targetLength, padString)`, classe: "method-name" },
  { pai: "#metodos", filho: "metodos_padEnd_p1", tag: "p", conteudo: `Preenche o final da string com padString até atingir o targetLength.` },
  { pai: "#metodos", filho: "metodos_padEnd_pre", tag: "pre", conteudo: `` },
  { pai: "#metodos_padEnd_pre", filho: "metodos_padEnd_pre_code", tag: "code", conteudo: `let texto = '5';\nconsole.log(texto.padEnd(3, '0')); // '500'` },

  { pai: "#container", filho: "regex-methods", tag: "section", conteudo: "" },
  { pai: "#regex-methods", filho: "regex_methods_h2", tag: "h2", conteudo: "Métodos com Expressões Regulares" },

  { pai: "#regex-methods", filho: "regex_match", tag: "div", conteudo: "", classe: "method-container" },
  { pai: "#regex_match", filho: "regex_match_h3", tag: "h3", conteudo: `` },
  { pai: "#regex_match", filho: "regex_match_h3_span", tag: "span", conteudo: `match(regexp)`, classe: "method-name" },
  { pai: "#regex_match", filho: "regex_match_p", tag: "p", conteudo: "Retorna um array contendo os resultados da correspondência da expressão regular na string, ou null se não houver correspondência." },
  { pai: "#regex_match", filho: "regex_match_pre", tag: "pre", conteudo: "" },
  {
    pai: "#regex_match_pre", filho: "regex_match_code", tag: "code", conteudo: `
  let texto = "O JavaScript é uma linguagem de programação incrível!";
  console.log(texto.match(/[a-z]+/gi)); // ["O", "JavaScript", "é", "uma", "linguagem", "de", "programação", "incrível"]
  
  `},

  { pai: "#regex-methods", filho: "regex_matchAll", tag: "div", conteudo: "", classe: "method-container" },
  { pai: "#regex_matchAll", filho: "regex_matchAll_h3", tag: "h3", conteudo: `` },
  { pai: "#regex_matchAll_h3", filho: "regex_matchAll_h3_span", tag: "span", conteudo: `matchAll(regexp)`, classe: "method-name" },

  { pai: "#regex_matchAll", filho: "regex_matchAll_p", tag: "p", conteudo: "Retorna um iterador de todos os resultados da correspondência da expressão regular na string. Útil para obter todas as correspondências, especialmente com grupos de captura." },
  { pai: "#regex_matchAll", filho: "regex_matchAll_pre", tag: "pre", conteudo: "" },
  {
    pai: "#regex_matchAll_pre", filho: "regex_matchAll_code", tag: "code", conteudo: `
  let texto = "teste1 teste2 teste3";
  let regexp = /teste(\\d)/g;
  let matches = [...texto.matchAll(regexp)];
  console.log(matches); // Array de correspondências com detalhes dos grupos
  
  `},
  { pai: "#regex-methods", filho: "regex_search", tag: "div", conteudo: "", classe: "method-container" },
  { pai: "#regex_search", filho: "regex_search_h3", tag: "h3", conteudo: `` },
  { pai: "#regex_search_h3", filho: "regex_search_h3_span", tag: "span", conteudo: `search(regexp)`, classe: "method-name" },

  { pai: "#regex_search", filho: "regex_search_p", tag: "p", conteudo: "Retorna o índice da primeira correspondência da expressão regular na string, ou -1 se não houver correspondência." },
  { pai: "#regex_search", filho: "regex_search_pre", tag: "pre", conteudo: "" },
  {
    pai: "#regex_search_pre", filho: "regex_search_code", tag: "code", conteudo: `
  let texto = "JavaScript é incrível";
  console.log(texto.search(/incrível/)); // 14
  
  `},
  { pai: "#container", filho: "coercao", tag: "section", conteudo: "" },
  { pai: "#coercao", filho: "coercao_h2", tag: "h2", conteudo: "Coerção de Tipo" },
  { pai: "#coercao", filho: "coercao_p", tag: "p", conteudo: "JavaScript frequentemente realiza coerção de tipo implícita entre strings e outros tipos de dados. Por exemplo, ao usar o operador + com uma string e outro tipo, o outro tipo geralmente é convertido para string:" },
  { pai: "#coercao", filho: "coercao_pre", tag: "pre", conteudo: "" },
  {
    pai: "#coercao_pre", filho: "coercao_code", tag: "code", conteudo: `
  console.log("5" + 2); // "52" (o número 2 é convertido para string)
  console.log(2 + "5"); // "25" (mesmo comportamento)
  console.log("5" - 2); // 3 (a string "5" é convertida para número)
  console.log("5" * "2"); // 10 (ambas as strings são convertidas para números)
  
  `},
  { pai: "#coercao", filho: "coercao_alert", tag: "div", conteudo: "", classe: "alert tip" },
  { pai: "#coercao_alert", filho: "coercao_alert_p", tag: "p", conteudo: 'Para conversões explícitas, você pode usar funções como <code>Number()</code>, <code>String()</code>, <code>parseInt()</code> ou o operador unário <code>+</code>.' },
  { pai: "#container", filho: "performance", tag: "section", conteudo: "" },
  { pai: "#performance", filho: "performance_h2", tag: "h2", conteudo: "Performance" },
  { pai: "#performance", filho: "performance_p", tag: "p", conteudo: "Devido à imutabilidade das strings, operações que parecem modificar strings (como concatenação repetida dentro de um loop usando +) podem ser ineficientes, pois criam muitas strings intermediárias. Em cenários de manipulação intensiva de strings, é geralmente mais eficiente usar métodos como Array.prototype.join() após manipular as partes da string em um array." },
  { pai: "#performance", filho: "performance_h3", tag: "h3", conteudo: "Exemplo de problema de performance" },
  { pai: "#performance", filho: "performance_pre", tag: "pre", conteudo: "" },
  {
    pai: "#performance_pre", filho: "performance_code", tag: "code", conteudo: `
  // Ineficiente para grandes números de iterações
  let resultado = "";
  for (let i = 0; i < 10000; i++) {
    resultado += "algum texto"; // Cria uma nova string a cada iteração
  }
  
  // Mais eficiente
  let partes = [];
  for (let i = 0; i < 10000; i++) {
    partes.push("algum texto");
  }
  let resultado = partes.join(""); // Cria apenas uma string no final
  
  `},

  { pai: "#container", filho: "seguranca", tag: "section", conteudo: "" },
  { pai: "#seguranca", filho: "seguranca_h2", tag: "h2", conteudo: "Considerações de Segurança" },
  { pai: "#seguranca", filho: "seguranca_p1", tag: "p", conteudo: "Ao lidar com strings que vêm de fontes externas (como entrada do usuário), é crucial tomar precauções de segurança para evitar vulnerabilidades como Cross-Site Scripting (XSS). Isso pode envolver a sanitização ou codificação da entrada para garantir que ela seja tratada como texto e não como código executável." },
  { pai: "#seguranca", filho: "seguranca_div_alert", tag: "div", conteudo: "", attrs: { class: "alert danger" } },
  { pai: "#seguranca_div_alert", filho: "seguranca_h3_alert", tag: "h3", conteudo: "Exemplo de risco de XSS" },
  { pai: "#seguranca_div_alert", filho: "seguranca_pre_alert", tag: "pre", conteudo: "" },
  {
    pai: "#seguranca_pre_alert", filho: "seguranca_code_alert", tag: "code", conteudo: `
  // Dado malicioso (simulando entrada de usuário)
  const userInput = \'< i m g src=x onerror="roubarDados()">\';
  
  // ⚠️ Risco de XSS, independente do método de concatenação:
  const str1 = "Olá, " + userInput; 
  
  element.innerHTML = str1; // Executará o script malicioso!
   
  `},
  { pai: "#seguranca", filho: "seguranca_h3_sanitizacao", tag: "h3", conteudo: "Sanitização/Codificação de Dados" },
  { pai: "#seguranca", filho: "seguranca_p2", tag: "p", conteudo: "Use bibliotecas como DOMPurify para remover código executável de strings:" },
  { pai: "#seguranca", filho: "seguranca_pre1", tag: "pre", conteudo: "" },
  {
    pai: "#seguranca_pre1", filho: "seguranca_code1", tag: "code", conteudo: `
  import DOMPurify from 'dompurify';
  const safeInput = DOMPurify.sanitize(userInput); // Remove scripts!
  const safeStr = ["Olá, ", safeInput].join("");
  
  `},
  { pai: "#seguranca", filho: "seguranca_p3", tag: "p", conteudo: "Para contextos não HTML (como URLs ou atributos), use funções de codificação:" },
  { pai: "#seguranca", filho: "seguranca_pre2", tag: "pre", conteudo: "" },
  {
    pai: "#seguranca_pre2", filho: "seguranca_code2", tag: "code", conteudo: `
  // Codificar para HTML:
  const encodedHTML = userInput.replace(/&/g, '& amp;').replace(/"<"/ g, '&alt;');
  // Codificar para URLs:
  const encodedURL = encodeURIComponent(userInput);
  
  `},
  { pai: "#seguranca", filho: "seguranca_h3_textcontent", tag: "h3", conteudo: "Evite innerHTML quando possível" },
  { pai: "#seguranca", filho: "seguranca_p4", tag: "p", conteudo: "Prefira métodos seguros como textContent para inserir dados não confiáveis:" },
  { pai: "#seguranca", filho: "seguranca_pre3", tag: "pre", conteudo: "" },
  { pai: "#seguranca_pre3", filho: "seguranca_code3", tag: "code", conteudo: `element.textContent = userInput; // Seguro: trata tudo como texto!` },

  { pai: "#container", filho: "normalizacao", tag: "section", conteudo: "" },
  { pai: "#normalizacao", filho: "normalizacao_h2", tag: "h2", conteudo: "Normalização" },
  { pai: "#normalizacao", filho: "normalizacao_p4", tag: "p", conteudo: "Strings com acentos ou caracteres compostos (como é vs e + acento) podem parecer iguais visualmente, mas internamente são diferentes. Isso é crucial para buscas e comparações." },
  { pai: "#normalizacao", filho: "normalizacao_pre", tag: "pre", conteudo: "" },
  {
    pai: "#normalizacao_pre", filho: "normalizacao_pre_code", tag: "code", conteudo: `
const a = 'é'; // U+00E9
const b = 'e\\u0301'; // U+0065 + U+0301 (e + acento)
console.log(a === b); // false
console.log(a.normalize() === b.normalize()); // true
` },

  { pai: "#container", filho: "localidade", tag: "section", conteudo: "" },
  { pai: "#localidade", filho: "localidade_h2", tag: "h2", conteudo: "Comparação de Strings Sensível a Localidade" },
  { pai: "#localidade", filho: "localidade_p4", tag: "p", conteudo: "Comparações padrão com === ou > não respeitam ordenações linguísticas (por exemplo, alemão ou sueco)." },
  { pai: "#localidade", filho: "localidade_pre", tag: "pre", conteudo: "" },
  {
    pai: "#localidade_pre", filho: "localidade_pre_code", tag: "code", conteudo: `
console.log('ä'.localeCompare('z', 'de')); // -1 (alemão)
console.log('ä'.localeCompare('z', 'sv')); // 1 (sueco)
` },


  { pai: "#container", filho: "tagged", tag: "section", conteudo: "" },
  { pai: "#tagged", filho: "tagged_h2", tag: "h2", conteudo: "Tagged Template Literals" },
  { pai: "#tagged", filho: "tagged_p4", tag: "p", conteudo: "Tagged Template Literals em JavaScript são uma feature avançada de template literals (strings com crases `), que permite processar a interpolação de strings com uma função tag personalizada antes que o valor final seja construído." },
  { pai: "#tagged", filho: "tagged_pre", tag: "pre", conteudo: "" },
  {
    pai: "#tagged_pre", filho: "tagged_pre_code", tag: "code", conteudo: `
function tag(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Values:', values);
}

const nome = "Bill";
const idade = 30;

tag\`Nome: \${nome}, Idade: \${idade}\`;
// Strings: ["Nome: ", ", Idade: ", ""]
// Values: ["Bill", 30]

` },






]


function validar_array(array1, campo) {
  for (let valor in array1) {
    for (let valor2 in array1) {
      if (valor != valor2 && array1[valor][campo] == array1[valor2][campo]) {
        console.log(array1[valor][campo])
      }
    }
  }
}
validar_array(itens, "filho")