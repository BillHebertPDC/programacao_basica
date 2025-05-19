let list = [

    // Fundamentos da linguagem

    ['introducao', 'Introdução ao JavaScript'],
    ['introducao_o_que_e_js', 'O que é JavaScript?'],
    ['introducao_para_que_serve', 'Para Que Serve o JavaScript?'],
    ['introducao_client_server', 'JavaScript no Cliente vs no Servidor'],
    ['introducao_diferencas_linguagens', 'Diferenças entre JavaScript e Outras Linguagens'],
    ['introducao_caracteristicas', 'Características da Linguagem: Dinâmica, Interpretada, Prototype-based'],
    ['introducao_mitos_realidade', 'Mitos e Realidades sobre JavaScript'],

    // historia

    ['historia_js', 'História e Evolução do JavaScript'],
    ['historia_nascimento', 'Nascimento do JavaScript: Netscape e Brendan Eich'],
    ['historia_padronizacao', 'Padronização: ECMAScript e o Papel da ECMA'],
    ['historia_versionamento', 'Versões do ECMAScript: ES3 até ES2025'],
    ['historia_browsers', 'Guerra dos Browsers e Fragmentação do JavaScript'],
    ['historia_node', 'Surgimento do Node.js e Revolução no Backend'],
    ['historia_modernizacao', 'Modernização com ES6+: Sintaxe e Recursos Avançados'],

    // ambientes

    ['ambiente_execucao', 'Ambiente de Execução (Browser vs Node.js)'],
    ['ambiente_browser', 'Execução em Browsers: DOM, BOM, Eventos'],
    ['ambiente_node', 'Execução em Node.js: Módulos, FS, Processos'],
    ['ambiente_diferencas_api', 'Diferenças de API: window vs global, require vs import'],
    ['ambiente_limitacoes', 'Limitações por Ambiente: Segurança, Escopo, Recursos'],
    ['ambiente_use_cases', 'Casos de Uso por Ambiente: SPA vs CLI, SSR vs CSR'],

    // sintaxe

    ['sintaxe_basica', 'Sintaxe Básica em JavaScript'],
    ['sintaxe_tokens', 'Tokens Léxicos: Identificadores, Literais, Delimitadores'],
    ['sintaxe_estrutura_codigo', 'Estrutura de Código: Instruções, Blocos e Linhas'],
    ['sintaxe_terminador_linha', 'Terminação de Linha e ASI (Automatic Semicolon Insertion)'],
    ['sintaxe_case_sensitive', 'Sensibilidade a Maiúsculas e Minúsculas'],
    ['sintaxe_espacos', 'Espaços, Tabulações e Quebras de Linha'],
    ['sintaxe_expressao_instrucao', 'Expressões vs Instruções'],
    ['sintaxe_erros_comuns', 'Erros de Sintaxe Comuns'],


    // comentarios

    ['comentarios', 'Comentários em JavaScript'],
    ['comentarios_linha', 'Comentários de Linha: //'],
    ['comentarios_bloco', 'Comentários de Bloco: /* */'],
    ['comentarios_boas_praticas', 'Boas Práticas ao Comentar Código'],
    ['comentarios_documentacao', 'Padrões de Comentários para Documentação (JSDoc)'],

    // convencoes

    ['convencoes', 'Convenções de Código em JavaScript'],
    ['convencoes_nomenclatura', 'Nomenclatura: camelCase, PascalCase, snake_case'],
    ['convencoes_espacos', 'Espaçamento e Indentação: Tabs vs Spaces'],
    ['convencoes_chaves', 'Posicionamento de Chaves: Inline vs Nova Linha'],
    ['convencoes_semicolon', 'Uso ou Omissão de Ponto e Vírgula'],
    ['convencoes_comentarios', 'Estilo de Comentários e Documentação'],
    ['convencoes_lint', 'Uso de Linters: ESLint e Regras Personalizadas'],
    ['convencoes_formatadores', 'Formatadores de Código: Prettier e Outras Ferramentas'],
    ['convencoes_git', 'Padrões de Commit com JavaScript (Conventional Commits)'],

    // Variáveis e Constantes

    ['variaveis_introducao', 'Introdução a Variáveis'],
    ['variaveis_o_que_sao', 'O que são Variáveis?'],
    ['variaveis_por_que_usar', 'Por que Usar Variáveis?'],
    ['variaveis_como_funcionam', 'Como Variáveis Funcionam na Memória'],
    ['variaveis_enderecamento', 'Endereçamento e Referência de Valor'],
    ['variaveis_declaracao', 'Declaração vs Inicialização'],
    ['variaveis_atribuicao', 'Atribuição: por Valor vs por Referência'],
    ['variaveis_identificadores', 'Regras para Identificadores'],
    ['variaveis_tipos', 'Tipos de Dados em Variáveis'],
    ['variaveis_constantes', 'Declaração de Variáveis'],


    // closures

    ['escopo_de_closures', 'Escopo e Closures'],
    ['closures', 'Closures em JavaScript'],
    ['definicao_closures', 'Definição de Closures'],
    ['exemplo_closures', 'Exemplo de Closures'],
    ['uso_closures', 'Uso de Closures em Funções Anônimas'],

    // contexto

    ['contexto_this', 'Contexto (this) em JavaScript'],
    ['this_global', 'this no Contexto Global'],
    ['this_em_objetos', 'this em Objetos'],
    ['this_em_funcoes', 'this em Funções Normais'],



    // escopo

    ['escopo', 'Escopo em JavaScript'],
    ['escopo_conceito', 'Conceito de Escopo: Lexical vs Dinâmico'],
    ['escopo_local', 'Escopo Local'],
    ['escopo_global', 'Escopo Global'],
    ['escopo_funcao', 'Escopo de Função: Isolamento e Contexto'],
    ['escopo_de_execucao', 'Escopo de Execução'],
    ['contexto_de_execucao', 'Contexto de Execução no JavaScript'],
    ['pilha_de_execucao', 'Pilha de Execução'],
    ['empilhamento_de_execucao', 'Empilhamento e Execução de Funções'],
    // escopo de variaveis

    ['escopo_variaveis', 'Escopo de Variáveis em JavaScript'],
    ['escopo_bloco', 'Escopo de Bloco: if, for, while'],
    ['escopo_aninhado', 'Escopos Aninhados e Cadeia de Escopo'],
    ['escopo_shadowing', 'Shadowing: Variáveis com o Mesmo Nome'],
    ['escopo_resolucao', 'Ordem de Resolução de Identificadores'],

    // var

    ['var_declaracao', 'Declaração com var'],
    ['var_sintaxe', 'Sintaxe do var'],
    ['var_inicializacao_opcional', 'Inicialização Opcional com var'],
    ['var_reatribuicao', 'Reatribuição com var'],
    ['var_redeclaracao', 'Redeclaração Permitida com var'],
    ['var_escopo_funcao', 'Escopo de Função com var'],
    ['var_sem_escopo_bloco', 'Ausência de Escopo de Bloco com var'],
    ['var_colisao_global', 'Colisão com Escopo Global'],
    ['var_problemas_comuns', 'Problemas Comuns com var'],
    ['var_hoisting', 'Hoisting de var'],

    // let

    ['let_declaracao', 'Declaração com let'],
    ['let_sintaxe', 'Sintaxe do let'],
    ['let_inicializacao_opcional', 'Inicialização Opcional com let'],
    ['let_reatribuicao', 'Reatribuição Permitida com let'],
    ['let_nao_redeclaravel', 'let Não Permite Redeclaração no Mesmo Escopo'],
    ['let_escopo_bloco', 'Escopo de Bloco com let'],
    ['let_temporal_dead_zone', 'Temporal Dead Zone com let'],
    ['let_em_loops', 'let em Loops: Comportamento Correto'],
    ['let_em_closures', 'let em Closures: Isolamento Adequado'],

    // const

    ['const_declaracao', 'Declaração com const'],
    ['const_sintaxe', 'Sintaxe do const'],
    ['constantes_naming', 'Convenções de Nomenclatura de Constantes'],
    ['const_requer_inicializacao', 'const Requer Inicialização Imediata'],
    ['const_nao_reatribuivel', 'const Não Permite Reatribuição'],
    ['const_nao_redeclaravel', 'const Não Permite Redeclaração no Mesmo Escopo'],
    ['const_escopo_bloco', 'Escopo de Bloco com const'],
    ['const_temporal_dead_zone', 'Temporal Dead Zone com const'],
    ['const_objetos', 'const com Objetos: Mutabilidade Interna'],
    ['const_arrays', 'const com Arrays: Métodos Permitidos'],
    ['const_congelamento', 'Tornando const Verdadeiramente Imutável com Object.freeze'],
    ['const_em_closures', 'const em Closures: Isolamento Adequado'],

    // funcionalidades

    ['constantes_composicao', 'Composição de Constantes: Enumerações'],
    ['constantes_modularizacao', 'Modularização de Constantes'],
    ['constantes_em_modulos', 'Exportação e Importação de Constantes'],

    // Tipos de Dados

    ['tipos_dados', 'Tipos de Dados em JavaScript'],
    ['tipos_dados_primitivos', 'Tipos de Dados Primitivos'],

    // tipos primitivos

    ['variaveis_tipos_primitivos', 'Tipos Primitivos: Visão Geral'],

    //string

    ['tipos_dados_string', 'Tipo de Dado String'],
    ['string_criar', 'Criando Strings: Aspas Simples, Duplas e Template Literals'],
    ['string_escape', 'Caracteres de Escape em Strings'],

    // metodos da string

    ['string_metodos_basicos', 'Métodos Básicos de String: length, toUpperCase, toLowerCase'],
    ['string_metodos_busca', 'Métodos de Busca: indexOf, lastIndexOf, includes'],
    ['string_metodos_extracao', 'Métodos de Extração: slice, substring, substr'],
    ['string_metodos_modificacao', 'Métodos de Modificação: replace, trim, padStart, padEnd'],
    ['string_metodos_divisao', 'Dividindo Strings: split()'],
    ['string_concat', 'Concatenação de Strings'],
    ['string_interpolacao', 'Interpolação com Template Literals'],
    ['string_comparacao', 'Comparação de Strings: == vs ===, localeCompare'],
    ['string_tamanho', 'Obtendo o Tamanho de uma String'],

    // number

    ['tipos_dados_number', 'Tipo de Dado Number'],
    ['number_criar', 'Criando Números: Inteiros, Decimais, Notação Científica'],

    // number propriedades

    ['number_limites', 'Limites de Number: MAX_VALUE, MIN_VALUE, NaN, Infinity'],

    // metodos de number

    ['number_metodos_formatacao', 'Formatando Números: toFixed, toPrecision, toLocaleString'],
    ['number_operacoes_basicas', 'Operações Básicas: Soma, Subtração, Multiplicação, Divisão'],
    ['number_operacoes_avancadas', 'Operações Avançadas: Math.pow, Math.sqrt, Math.random'],
    ['number_comparacao', 'Comparação de Números'],

    // boolean

    ['tipos_dados_boolean', 'Tipo de Dado Boolean'],
    ['boolean_criar', 'Criando Booleans: Literais e Construtores'],
    ['boolean_valores_falsy', 'Valores Falsy e Truthy'],
    ['boolean_comparacao', 'Comparação com Boolean: == vs ===, !, !!'],

    // null

    ['tipos_dados_null', 'Tipo de Dado Null'],
    ['null_significado', 'Significado de Null em JavaScript'],
    ['null_comparacao', 'Comparação de Null: == vs ==='],
    ['null_vs_undefined', 'Null vs Undefined'],

    // undefined

    ['tipos_dados_undefined', 'Tipo de Dado Undefined'],
    ['undefined_origem', 'Quando algo é Undefined?'],
    ['undefined_comparacao', 'Comparação de Undefined: == vs ==='],

    // symbol

    ['tipos_dados_symbol', 'Tipo de Dado Symbol'],
    ['symbol_criar', 'Criando Symbols: Symbol() e Symbol.for()'],

    // propriedades de sybol

    ['symbol_usos', 'Usos Comuns de Symbols: Propriedades Únicas, Iteradores'],
    ['symbol_descricao', 'Descrição de Symbols e Acesso'],

    // bigint

    ['tipos_dados_bigint', 'Tipo de Dado BigInt'],
    ['bigint_criar', 'Criando BigInt: Literal e Construtor'],
    ['bigint_operacoes', 'Operações com BigInt: Soma, Comparação, Restrições'],

    // Tipos de referencia

    ['tipos_dados_referencia', 'Tipos de Dados por Referência'],
    ['tipos_dados_mutabilidade', 'Mutabilidade: Primitivos vs Referência'],
    ['tipos_dados_tipo_dinamico', 'Tipagem Dinâmica em JavaScript'],
    ['tipos_dados_tipo_coercao', 'Coerção de Tipos: Explícita vs Implícita'],

    // Objeto

    ['objetos', 'Objetos em JavaScript'],

    // atribuir objeto

    ['objetos_criar', 'Criando Objetos'],
    ['objetos_literal', 'Criando Objetos com Notação Literal'],
    ['objetos_construtor', 'Criando Objetos com o Construtor Object'],

    // propriedade de objeto

    ['objetos_acessar', 'Acessando Propriedades de Objetos'],
    ['acesso_dot', 'Acessando Propriedades com Notação de Ponto'],
    ['acesso_colchetes', 'Acessando Propriedades com Notação de Colchetes'],

    // metodos dos objetos

    ['objetos_metodos', 'Métodos de Objeto: Object.keys, Object.values, Object.entries'],
    ['metodo_em_objeto', 'Definindo Métodos em Objetos'],

    // atribuicao e modificacao
    ['objetos_acesso', 'Acessando Propriedades: Notação de Ponto e Colchetes'],
    ['objetos_modificacao', 'Adição, Alteração e Remoção de Propriedades'],

    // json

    ['json', 'Trabalhando com JSON'],
    ['json_parse', 'Método JSON.parse'],
    ['parse_json', 'Convertendo JSON para Objetos com parse'],
    ['parse_erros', 'Erros ao Usar JSON.parse'],
    ['json_stringify', 'Método JSON.stringify'],
    ['stringify_json', 'Convertendo Objetos para JSON com stringify'],
    ['json_fetch', 'Consumindo JSON com fetch'],

    // destruc

    ['desestruturacao', 'Desestruturação de Objetos e Arrays'],
    ['desestruturacao_arrays', 'Desestruturação de Arrays'],
    ['array_desestruturado', 'Extraindo Valores de Arrays com Desestruturação'],
    ['desestruturacao_objetos', 'Desestruturação de Objetos'],
    ['objeto_desestruturado', 'Extraindo Propriedades de Objetos com Desestruturação'],

    // spread

    ['spread', 'Operador Spread'],
    ['spread_arrays', 'Utilizando o Spread em Arrays'],
    ['spread_objetos', 'Utilizando o Spread em Objetos'],


    // array

    ['arrays', 'Arrays em JavaScript'],

    // atribuicao de array

    ['arrays_criar', 'Criando Arrays'],
    ['array_literal', 'Criação de Arrays com Notação Literal'],
    ['array_construtor', 'Criação de Arrays com o Construtor Array'],
    ['array_inicializado', 'Inicializando Arrays com Valores'],

    // acessar array

    ['arrays_acessar', 'Acessando Elementos de Arrays'],
    ['acesso_elemento', 'Acesso de Elementos pelo Índice'],
    ['acesso_com_for', 'Acessando Elementos com Laço for'],
    ['acesso_com_forEach', 'Acessando Elementos com forEach'],

    // metodo map

    ['arrays_map', 'Método map em Arrays'],
    ['map_basico', 'Uso Básico do map'],
    ['map_transformacao', 'Transformação de Dados com map'],
    ['map_com_funcoes', 'Utilizando Funções no map'],

    // metodo filter

    ['arrays_filter', 'Método filter em Arrays'],
    ['filter_basico', 'Uso Básico do filter'],
    ['filter_condicional', 'Filtragem de Dados com Condições no filter'],

    // metodo reduce

    ['arrays_reduce', 'Método reduce em Arrays'],
    ['reduce_basico', 'Uso Básico do reduce'],
    ['reduce_acumulacao', 'Acumulando Resultados com reduce'],
    ['reduce_com_objetos', 'Utilizando reduce para Objetos'],

    // metodo push e pop

    ['arrays_push_pop', 'Métodos push e pop em Arrays'],
    ['push', 'Adicionando Elementos com push'],
    ['pop', 'Removendo Elementos com pop'],

    // metodo shift e unshift

    ['arrays_shift_unshift', 'Métodos shift e unshift em Arrays'],
    ['shift', 'Removendo Elementos com shift'],
    ['unshift', 'Adicionando Elementos com unshift'],

    // metodo splice

    ['arrays_splice', 'Método splice em Arrays'],
    ['splice_adicionar', 'Adicionando Elementos com splice'],
    ['splice_remover', 'Removendo Elementos com splice'],
    ['splice_substituir', 'Substituindo Elementos com splice'],

    // metodo contat

    ['arrays_concat', 'Método concat em Arrays'],
    ['concat_basico', 'Concatenando Arrays com concat'],
    ['concat_multiplos', 'Concatenando Múltiplos Arrays com concat'],

    // metodo find

    ['arrays_find', 'Método find em Arrays'],
    ['find', 'Encontrando um Elemento com find'],

    // metodos de ordenação

    ['arrays_sort', 'Método sort em Arrays'],
    ['sort_ascendente', 'Ordenando Arrays de Forma Ascendente'],
    ['sort_descendente', 'Ordenando Arrays de Forma Descendente'],
    ['sort_com_funcoes', 'Ordenando Arrays com Funções Personalizadas'],

    // metodos para percorrer

    ['arrays_forEach', 'Método forEach em Arrays'],
    ['forEach_basico', 'Iterando Elementos com forEach'],
    ['forEach_com_funcoes', 'Utilizando Funções com forEach'],

    // metodos para verificar condicao

    ['arrays_some', 'Método some em Arrays'],
    ['some', 'Verificando Se Algum Elemento Satisfaz a Condição'],
    ['arrays_every', 'Método every em Arrays'],
    ['every', 'Verificando Se Todos os Elementos Satisfazem a Condição'],

    // bonus
    //data
    ['data_time', 'Manipulação de Datas e Horas (Date API)'],
    ['new_date', 'Criando Objetos Date'],
    ['data_atual', 'Criando Date com a Data Atual'],
    ['data_especifica', 'Criando Date com Data Específica'],
    ['metodos_date', 'Métodos da API Date'],
    ['get_data', 'Obtendo Componentes de Data (getDate, getMonth, etc.)'],
    ['set_data', 'Modificando Componentes de Data (setDate, setMonth, etc.)'],
    ['formatação_data', 'Formatando Datas em JavaScript'],
    ['formatacao_basica', 'Formatando Data para Padrões Básicos'],
    ['bibliotecas_formatacao', 'Usando Bibliotecas para Formatação de Data'],

    // funcoes

    ['funcoes', 'Funções em JavaScript'],
    ['definindo_funcoes', 'Definindo Funções'],
    ['definicao_basica', 'Definição Básica de Funções'],
    ['funcoes_nomeadas', 'Funções Nomeadas'],
    ['funcoes_sem_nome', 'Funções Sem Nome'],
    ['funcoes_parametrizadas', 'Funções com Parâmetros'],

    // composicao

    ['composicao_funcoes', 'Composição de Funções'],
    ['definicao_composicao', 'Definição de Composição de Funções'],
    ['composicao_basica', 'Composição de Funções de Forma Simples'],
    ['composicao_funcional', 'Composição de Funções em Programação Funcional'],




    // funcoes com parametros

    ['parametros', 'Parâmetros de Funções'],
    ['parametros_basicos', 'Parâmetros Simples'],
    ['parametros_multiplo', 'Vários Parâmetros'],
    ['parametros_dinamicos', 'Parâmetros Dinâmicos'],
    ['parametros_com_nomes', 'Parâmetros com Nomes'],

    // parametros pre-definidos

    ['parametros_default', 'Parâmetros Default'],
    ['uso_parametros_default', 'Uso de Parâmetros Default'],
    ['parametros_default_combinados', 'Combinação de Parâmetros Default e Rest'],

    // rest parametros

    ['rest_parameters', 'Rest Parameters'],
    ['definicao_rest_parameters', 'Definição de Rest Parameters'],
    ['uso_rest_parameters', 'Uso de Rest Parameters em Funções'],
    ['rest_parameters_combinados', 'Combinação de Rest Parameters e Parâmetros Default'],
    ['rest_arrays', 'Utilizando Rest para Arrays'],
    ['rest_objetos', 'Utilizando Rest para Objetos'],

    // argumentos nas funcoes

    ['argumentos', 'Argumentos de Funções'],
    ['argumentos_dinamicos', 'Argumentos Dinâmicos em Funções'],
    ['argumentos_excesso', 'Excesso de Argumentos'],
    ['argumentos_anonimos', 'Argumentos Anônimos'],

    // retorno das funcoes

    ['retorno', 'Valor de Retorno em Funções'],
    ['valor_retorno_simples', 'Retorno Simples em Funções'],
    ['retorno_multiple', 'Retorno de Múltiplos Valores'],
    ['retorno_early', 'Retorno Antecipado'],

    // funcoes anonimas

    ['funcoes_anonimas', 'Funções Anônimas'],
    ['definicao_funcoes_anonimas', 'Definição de Funções Anônimas'],
    ['uso_funcoes_anonimas', 'Uso de Funções Anônimas em Callbacks'],
    ['funcoes_anonimas_vantagens', 'Vantagens de Funções Anônimas'],

    // arrow functions

    ['arrow_functions', 'Arrow Functions'],
    ['definicao_arrow_functions', 'Definição de Arrow Functions'],
    ['caracteristicas_arrow_functions', 'Características das Arrow Functions'],
    ['diferença_arrow_vs_funcoes', 'Diferença entre Arrow Functions e Funções Normais'],
    ['this_arrow_functions', 'this em Arrow Functions'],

    // funcoes recursivas

    ['funcoes_recursivas', 'Funções Recursivas'],
    ['definicao_funcoes_recursivas', 'Definição de Funções Recursivas'],
    ['condicao_parada', 'Condição de Parada em Funções Recursivas'],
    ['problemas_funcoes_recursivas', 'Problemas Comuns em Funções Recursivas'],


    // utilização

    ['funcoes_first_class', 'Funções de Primeira Classe'],
    ['funcoes_callbacks', 'Funções como Callbacks'],
    ['funcoes_closure', 'Closures e Escopos Preservados em funcoes'],

    // Funções Avançadas

    // call

    ['call_apply_bind', 'Funções call, apply e bind'],
    ['call', 'Método call'],
    ['call_basico', 'Uso Básico do call'],
    ['call_com_parametros', 'Passando Parâmetros para Funções com call'],
    ['call_com_this', 'Controlando o Valor de this com call'],

    //apply

    ['apply', 'Método apply'],
    ['apply_basico', 'Uso Básico do apply'],
    ['apply_com_parametros', 'Passando Parâmetros para Funções com apply'],
    ['apply_com_this', 'Controlando o Valor de this com apply'],

    // bind

    ['bind', 'Método bind'],
    ['bind_basico', 'Uso Básico do bind'],
    ['bind_com_parametros', 'Passando Parâmetros com bind'],
    ['bind_com_this', 'Controlando o Valor de this com bind'],

    // currying

    ['currying', 'Currying em JavaScript'],
    ['definicao_currying', 'Definição de Currying'],
    ['currying_exemplo', 'Exemplo de Currying em Funções'],
    ['currying_com_parametros', 'Usando Currying para Criar Funções com Parâmetros'],

    // re atribuir
    ['variaveis_inferencia', 'Inferência e Alteração de Tipo em Tempo de Execução'],

    // hosting

    ['hoisting', 'Hoisting de Variáveis'],
    ['hoisting_conceito', 'O que é Hoisting?'],
    ['hoisting_var', 'Hoisting com var: Visível com Valor undefined'],
    ['hoisting_let', 'Hoisting com let: Temporal Dead Zone'],
    ['hoisting_const', 'Hoisting com const: Erros ao Acessar Antes'],
    ['hoisting_funcoes', 'Hoisting de Funções: Declarativas vs Expressões'],
    ['hoisting_ordem_execucao', 'Execução em Etapas: Interpretação e Execução'],
    ['hoisting_problemas', 'Problemas e Confusões com Hoisting'],

    // Operadores

    ['operadores', 'Operadores em JavaScript'],

    // operadores de atribuicao

    ['operadores_atribuicao', 'Operadores de Atribuição'],
    ['operadores_atribuicao_basico', 'Atribuição Básica (=)'],
    ['operadores_atribuicao_compostos', 'Atribuições Compostas (+=, -=, *=, etc.)'],

    // operadores aritimeticos

    ['operadores_aritmeticos', 'Operadores Aritméticos'],
    ['operadores_soma', 'Operador de Soma (+)'],
    ['operadores_subtracao', 'Operador de Subtração (-)'],
    ['operadores_multiplicacao', 'Operador de Multiplicação (*)'],
    ['operadores_divisao', 'Operador de Divisão (/)'],
    ['operadores_modulo', 'Operador Módulo (%)'],
    ['operadores_exponenciacao', 'Operador de Exponenciação (**)'],
    ['operadores_incremento', 'Operadores de Incremento (++) e Decremento (--)'],
    ['operadores_pre_pos', 'Pré e Pós-Incremento/Decremento'],

    // operadores de comparacao

    ['operadores_comparativos', 'Operadores Comparativos'],
    ['operadores_igualdade', 'Operadores de Igualdade (==, ===)'],
    ['operadores_diferente', 'Operadores de Diferença (!=, !==)'],
    ['operadores_maior_menor', 'Operadores de Maior/Menor (>, <, >=, <=)'],
    ['operadores_comparacao_objetos', 'Comparação entre Objetos e Referência'],

    // operadores logicos

    ['operadores_logicos', 'Operadores Lógicos'],
    ['operadores_e', 'Operador Lógico AND (&&)'],
    ['operadores_ou', 'Operador Lógico OR (||)'],
    ['operadores_nao', 'Operador Lógico NOT (!)'],
    ['operadores_logicos_curto_circuito', 'Curto-circuito com Operadores Lógicos'],

    // operadores bitwise

    ['operadores_bitwise', 'Operadores Bitwise'],
    ['bitwise_and', 'Bitwise AND (&)'],
    ['bitwise_or', 'Bitwise OR (|)'],
    ['bitwise_xor', 'Bitwise XOR (^)'],
    ['bitwise_not', 'Bitwise NOT (~)'],
    ['bitwise_shift_esquerda', 'Shift à Esquerda (<<)'],
    ['bitwise_shift_direita', 'Shift à Direita (>>)'],
    ['bitwise_shift_direita_zero', 'Shift à Direita com Zero Fill (>>>)'],

    // operadores ternarios

    ['operadores_ternario', 'Operador Ternário (condição ? valor1 : valor2)'],
    ['operadores_ternario_aninhado', 'Operador Ternário Aninhado'],
    ['expressao_condicional', 'Expressão Condicional (Operador ternário)'],
    ['operador_ternario_comparacao', 'Comparação entre switch e operador ternário'],

    // prioridades

    ['operadores_agrupamento', 'Operadores de Agrupamento'],
    ['agrupamento_parenteses', 'Agrupamento com Parênteses (())'],
    ['agrupamento_colchetes', 'Uso de Colchetes ([]) para Arrays e Acesso'],
    ['precedencia_operadores', 'Precedência e Associatividade de Operadores'],
    ['precedencia_exemplos', 'Exemplos Práticos de Precedência'],
    ['precedencia_tabela', 'Tabela de Precedência de Operadores'],

    // assert

    ['assertions', 'Assertivas em JavaScript'],
    ['assertiva_basica', 'Assertiva Básica com assert'],
    ['assertiva_em_funcoes', 'Uso de Assertivas em Funções'],
    ['assertiva_e_debugging', 'Assertivas no Processo de Debugging'],
    ['assertiva_condicional', 'Assertivas Condicionais com console.assert'],

    // Estruturas de Dados

    ['map_set', 'Map, Set, WeakMap, WeakSet'],

    // map

    ['map', 'Map - Estrutura de Dados'],
    ['definicao_map', 'Definição de Map'],
    ['criar_map', 'Criando um Map'],
    ['acessar_map', 'Acessando Valores de um Map'],
    ['manipular_map', 'Manipulando Map (set, get, delete, has)'],
    ['iterar_map', 'Iterando sobre um Map'],
    ['map_performance', 'Desempenho de Map em JavaScript'],

    // set

    ['set', 'Set - Estrutura de Dados'],
    ['definicao_set', 'Definição de Set'],
    ['criar_set', 'Criando um Set'],
    ['acessar_set', 'Acessando Valores de um Set'],
    ['manipular_set', 'Manipulando Set (add, delete, has)'],
    ['iterar_set', 'Iterando sobre um Set'],
    ['set_performance', 'Desempenho de Set em JavaScript'],

    // weakmap

    ['weakmap', 'WeakMap - Estrutura de Dados'],
    ['definicao_weakmap', 'Definição de WeakMap'],
    ['criar_weakmap', 'Criando um WeakMap'],
    ['acessar_weakmap', 'Acessando Valores de um WeakMap'],
    ['manipular_weakmap', 'Manipulando WeakMap (set, get, delete)'],
    ['weakmap_restricoes', 'Restrições do WeakMap'],

    // weakset

    ['weakset', 'WeakSet - Estrutura de Dados'],
    ['definicao_weakset', 'Definição de WeakSet'],
    ['criar_weakset', 'Criando um WeakSet'],
    ['acessar_weakset', 'Acessando Valores de um WeakSet'],
    ['manipular_weakset', 'Manipulando WeakSet (add, delete, has)'],
    ['weakset_restricoes', 'Restrições do WeakSet'],


    // Estruturas de Controle

    ['estruturas_condicionais', 'Estruturas Condicionais em JavaScript'],

    // if

    ['if', 'Estrutura Condicional if'],
    ['if_exemplo_simples', 'Exemplo Simples de if'],
    ['if_aninhado', 'Estrutura if Aninhada'],
    ['if_versatilidade', 'Versatilidade e Complexidade de if'],

    // else

    ['if_else', 'Estrutura Condicional if/else'],
    ['if_else_exemplo', 'Exemplo de if/else'],
    ['if_else_aninhado', 'Estrutura if/else Aninhada'],

    // else if

    ['else_if', 'Estrutura Condicional else if'],
    ['else_if_comparacao', 'Comparação entre if/else e else if'],
    ['else_if_aninhado', 'Estrutura else if Aninhada'],

    // switch

    ['switch', 'Estrutura Condicional switch'],
    ['switch_simples', 'Exemplo Simples de switch'],
    ['switch_com_escopo', 'Escopo e Variações em switch'],
    ['switch_vs_if', 'Comparação entre switch e if/else'],
    ['switch_fallthrough', 'Fallthrough em switch'],
    ['fallthrough_exemplo', 'Exemplo de Fallthrough em switch'],
    ['fallthrough_perigos', 'Perigos e Cuidados com Fallthrough'],
    ['fallthrough_controlado', 'Controlando o Fallthrough em switch'],

    // Laços de Repetição

    ['estruturas_repeticao', 'Laços de Repetição em JavaScript'],

    // for

    ['for', 'Laço for'],
    ['for_estrutura', 'Estrutura do Laço for'],
    ['for_exemplo_simples', 'Exemplo Simples de Laço for'],
    ['for_uso_com_arrays', 'Uso do Laço for com Arrays'],
    ['for_uso_com_objetos', 'Uso do Laço for com Objetos'],
    ['for_eficiencia', 'Eficiência e Desempenho do Laço for'],

    // for com of

    ['for_of', 'Laço for...of'],
    ['for_of_exemplo', 'Exemplo de Laço for...of'],
    ['for_of_com_arrays', 'Uso do Laço for...of com Arrays'],
    ['for_of_com_strings', 'Uso do Laço for...of com Strings'],
    ['for_of_com_objetos', 'Uso do Laço for...of com Objetos'],

    // for com in

    ['for_in', 'Laço for...in'],
    ['for_in_exemplo', 'Exemplo de Laço for...in'],
    ['for_in_com_objetos', 'Uso do Laço for...in com Objetos'],
    ['for_in_com_arrays', 'Uso do Laço for...in com Arrays'],
    ['for_in_limitações', 'Limitações do Laço for...in'],

    // while

    ['while', 'Laço while'],
    ['while_exemplo', 'Exemplo de Laço while'],
    ['while_uso_com_condicoes', 'Uso do Laço while com Condições Variáveis'],
    ['while_condicional_infinita', 'Evitar Laços while Infinito'],

    // do while

    ['do_while', 'Laço do...while'],
    ['do_while_exemplo', 'Exemplo de Laço do...while'],
    ['do_while_uso_com_condicoes', 'Uso do Laço do...while com Condições Variáveis'],
    ['do_while_vs_while', 'Comparação entre do...while e while'],

    // break e continue

    ['break_continue', 'Instruções break e continue'],
    ['break_funcao', 'Uso do break em Laços'],
    ['continue_funcao', 'Uso do continue em Laços'],
    ['break_continue_em_for', 'Uso de break e continue no Laço for'],
    ['break_continue_em_while', 'Uso de break e continue no Laço while'],

    // loops infinitos

    ['loop_infinito', 'Laços Infinitos'],
    ['loop_infinito_prevenção', 'Prevenção de Laços Infinitos'],
    ['loop_infinito_diagnostico', 'Diagnóstico de Laços Infinitos'],

    // Tratamento de Erros

    ['tratamento_erros', 'Tratamento de Erros'],

    //try catch

    ['try_catch', 'Bloco try/catch'],
    ['uso_basico_try_catch', 'Uso Básico do Bloco try/catch'],
    ['tratamento_excecoes', 'Tratamento de Exceções no Bloco try/catch'],
    ['encadeamento_try_catch', 'Encadeamento de Blocos try/catch'],
    ['finally', 'Bloco finally em try/catch'],

    // throw

    ['throw', 'Instrução throw'],
    ['lançamento_excecao', 'Lançamento de Exceções com throw'],
    ['throw_com_customizado', 'throw com Erros Customizados'],
    ['fluxo_erro_throw', 'Fluxo de Erro ao Usar throw'],

    // tipos de erro

    ['error_handling', 'Gerenciamento de Erros'],
    ['captura_erros', 'Captura e Interceptação de Erros'],
    ['propriedades_erro', 'Propriedades de Objetos de Erro'],
    ['gerenciamento_erro_global', 'Gerenciamento de Erros Globais'],
    ['tratamento_erro_assincrono', 'Tratamento de Erros em Funções Assíncronas'],

    // erro customizados

    ['custom_error', 'Erros Personalizados'],
    ['definicao_erros_personalizados', 'Definição de Erros Personalizados'],
    ['erro_personalizado_em_js', 'Criação de Erros Personalizados em JavaScript'],
    ['lançamento_erro_personalizado', 'Lançamento de Erros Personalizados com throw'],

    // pilhas

    ['call_stack', 'Call Stack em JavaScript'],
    ['call_stack_funcao', 'Como Funciona a Call Stack'],
    ['call_stack_pilha', 'Pilha de Execução na Call Stack'],
    ['pilhas_filas', 'Pilhas e Filas em JavaScript'],
    ['pilha', 'Pilha - Conceito e Implementação'],
    ['definicao_pilha', 'Definição de Pilha'],
    ['operacoes_pilha', 'Operações com Pilha (push, pop, peek)'],
    ['pilha_exemplo', 'Exemplo de Implementação de Pilha'],
    ['pilha_usos', 'Usos Comuns de Pilha'],

    // filas

    ['fila', 'Fila - Conceito e Implementação'],
    ['definicao_fila', 'Definição de Fila'],
    ['operacoes_fila', 'Operações com Fila (enqueue, dequeue, front)'],
    ['fila_exemplo', 'Exemplo de Implementação de Fila'],
    ['fila_usos', 'Usos Comuns de Fila'],

    // listas ligadas

    ['listas_ligadas', 'Listas Ligadas (Implementação Básica)'],

    // lista simples

    ['listas_ligadas_simples', 'Listas Ligadas Simples'],
    ['definicao_lista_simples', 'Definição de Lista Ligada Simples'],
    ['operacoes_lista_simples', 'Operações em Lista Ligada Simples (insert, delete, traverse)'],
    ['implementacao_lista_simples', 'Implementando Lista Ligada Simples'],

    // listas duplas

    ['listas_ligadas_duplas', 'Listas Ligadas Duplas'],
    ['definicao_lista_dupla', 'Definição de Lista Ligada Dupla'],
    ['operacoes_lista_dupla', 'Operações em Lista Ligada Dupla (insert, delete, traverse)'],
    ['implementacao_lista_dupla', 'Implementando Lista Ligada Dupla'],

    // listas circulares

    ['listas_ligadas_circulares', 'Listas Ligadas Circulares'],
    ['definicao_lista_circular', 'Definição de Lista Ligada Circular'],
    ['operacoes_lista_circular', 'Operações em Lista Ligada Circular (insert, delete, traverse)'],
    ['implementacao_lista_circular', 'Implementando Lista Ligada Circular'],




    // Introdução aos Paradigmas
    ['paradigmas_introducao', 'Introdução aos Paradigmas de Programação'],
    ['paradigmas_o_que_sao', 'O que São Paradigmas de Programação?'],
    ['paradigmas_por_que_importam', 'Por Que Estudar Paradigmas?'],
    ['paradigmas_classificacao', 'Classificações dos Paradigmas (Imperativo vs Declarativo)'],

    // Paradigma Imperativo
    ['imperativo_conceito', 'Paradigma Imperativo: Conceito e Fundamentos'],
    ['imperativo_memoria_estado', 'Controle Explícito de Estado e Memória'],
    ['imperativo_exemplos_js', 'Exemplos de Código Imperativo em JavaScript'],
    ['imperativo_comparacao', 'Comparação entre Código Imperativo e Declarativo'],

    // Paradigma Declarativo
    ['declarativo_conceito', 'Paradigma Declarativo: O Que É e Como Funciona'],
    ['declarativo_estilo', 'Estilo Descritivo vs Controle de Fluxo'],
    ['declarativo_sql_html', 'SQL e HTML como Linguagens Declarativas'],
    ['declarativo_exemplos_js', 'Declaratividade com JavaScript: Array Methods e JSX'],

    // Paradigma Funcional
    ['funcional_conceito', 'Paradigma Funcional: Fundamentos e Filosofia'],
    // funcoes pura
    ['pure_functions', 'Funções Puras e Imutabilidade'],
    ['definicao_funcoes_puras', 'Definição e Propriedades das Funções Puras'],
    ['caracteristicas_funcoes_puras', 'Características das Funções Puras'],
    ['beneficios_funcoes_puras', 'Benefícios de Usar Funções Puras'],
    ['impureza_funcoes', 'Funções Impuras e Seus Efeitos Colaterais'],
    ['pure_functions_exemplo', 'Exemplo de Funções Puras'],
    // Funções de Alta Ordem e Programação Funcional
    ['higher_order', 'Funções de Alta Ordem'],
    ['definicao_higher_order', 'Definição de Funções de Alta Ordem'],
    ['caracteristicas_higher_order', 'Características das Funções de Alta Ordem'],
    ['higher_order_exemplo', 'Exemplo de Funções de Alta Ordem'],

    ['funcional_closure', 'Closures e Composição'],
    ['funcional_currying', 'Currying e Partial Application'],
    ['funcional_recursao', 'Recursão como Estrutura de Controle'],
    ['funcional_lazy_eval', 'Lazy Evaluation e Short-Circuit'],
    ['funcional_libs', 'Programação Funcional com Ramda, Lodash/fp, RxJS'],

    // Paradigma Orientado a Objetos
    ['oop_conceito', 'Paradigma OOP: Conceito e Origem'],
    ['poo_basico', 'Conceitos de POO em JS'],

    // encapsulamento

    ['encapsulamento', 'Encapsulamento em POO'],
    ['definicao_encapsulamento', 'Definição de Encapsulamento'],
    ['encapsulamento_objetos', 'Encapsulamento de Objetos'],
    ['encapsulamento_metodos', 'Encapsulamento de Métodos'],
    ['encapsulamento_propriedades', 'Encapsulamento de Propriedades'],
    ['encapsulamento_acesso', 'Acessando e Modificando Propriedades com Getters e Setters'],

    // herança

    ['heranca', 'Herança em JavaScript'],
    ['definicao_heranca', 'Definição de Herança'],
    ['heranca_classe', 'Herança entre Classes'],
    ['heranca_prototype', 'Herança por Prototype'],
    ['heranca_estrutura', 'Estrutura de Herança em JavaScript'],
    ['overriding', 'Sobrescrita de Métodos (Method Overriding)'],

    // polimorfismo

    ['polimorfismo', 'Polimorfismo em JavaScript'],
    ['definicao_polimorfismo', 'Definição de Polimorfismo'],
    ['polimorfismo_classes', 'Polimorfismo em Classes'],
    ['polimorfismo_metodos', 'Polimorfismo de Métodos'],

    // abstração

    ['abstracao', 'Abstração em POO'],
    ['definicao_abstracao', 'Definição de Abstração'],
    ['abstracao_com_classes', 'Abstração em Classes'],
    ['abstracao_interface', 'Abstração através de Interfaces (conceito)'],

    // modularização

    ['modulos', 'Módulos ES6 (import/export)'],
    ['introducao_modulos', 'Introdução aos Módulos ES6'],
    ['modulos_import', 'Importando Módulos'],
    ['modulos_export', 'Exportando Módulos'],
    ['modulos_default', 'Exportação e Importação Default'],
    ['modulos_named', 'Exportação e Importação Nomeada'],
    ['modulos_arquivos', 'Organizando Módulos em Arquivos'],

    ['oop_js_prototype', 'OOP em JavaScript: Prototipagem vs Classes'],
    ['oop_classe_vs_factory', 'Classe vs Factory Function'],
    ['oop_solid', 'Princípios SOLID Aplicados ao JS'],
    ['oop_padroes', 'Padrões de Projeto e OOP'],
    ['poo_com_js', 'Aplicando POO em JavaScript'],
    ['caracteristicas_poo', 'Características do POO'],

    // classes

    ['classes', 'Classes e Prototypes em JavaScript'],
    ['definicao_classes', 'Definição de Classes'],
    ['classes_construtor', 'Construtores em Classes'],
    ['classes_metodos', 'Métodos em Classes'],
    ['classes_prototype', 'Classes e Prototypes'],

    // herança de classes

    ['classes_heranca', 'Herança entre Classes'],
    ['heranca_classes_js', 'Herança em Classes JavaScript'],
    ['heranca_uso', 'Usando Herança entre Classes'],

    // metodos estaticos

    ['metodos_estaticos', 'Métodos Estáticos em Classes'],
    ['definicao_metodos_estaticos', 'Definição de Métodos Estáticos'],
    ['usando_metodos_estaticos', 'Como Usar Métodos Estáticos'],

    // getters e setters

    ['getters_setters', 'Getters e Setters em Classes'],
    ['definicao_getters_setters', 'Definição de Getters e Setters'],
    ['usando_getters', 'Usando Getters em Classes'],
    ['usando_setters', 'Usando Setters em Classes'],

    // Paradigma Baseado em Eventos
    ['event_driven_conceito', 'Paradigma Baseado em Eventos'],
    ['event_driven_loop', 'Event Loop e Assincronismo'],
    ['event_driven_pubsub', 'Observer / Pub-Sub'],
    ['event_driven_dom', 'Event Listeners e DOM'],
    ['event_driven_react', 'React como Framework Orientado a Eventos'],

    // Paradigma Reativo
    ['reativo_conceito', 'Paradigma Reativo: Fluxo de Dados e Propagação'],
    ['reativo_streams', 'Streams e Observables'],
    ['reativo_rxjs', 'RxJS: Reactive Extensions para JavaScript'],
    ['reativo_backpressure', 'Backpressure e Concorrência Controlada'],
    ['reativo_aplicacoes', 'Aplicações Reativas com RxJS, Redux, MobX'],

    // Paradigma Concorrente e Paralelo
    ['concorrente_paralelo_conceito', 'Paradigmas Concorrentes vs Paralelos'],
    ['concorrente_event_loop', 'Concorrência no JS com Event Loop'],
    ['concorrente_promises', 'Promises, Async/Await e Microtasks'],
    ['concorrente_workers', 'Web Workers e Threads em JS'],
    ['concorrente_actor_model', 'Actor Model e Isolamento por Mensagem'],

    // Paradigma Lógico
    ['logico_conceito', 'Paradigma Lógico: Programação por Regras'],
    ['logico_prolog', 'Exemplo com Prolog'],
    ['logico_aplicacao', 'Aplicações em Inferência e IA'],

    // Comparações e Hibridismo
    ['comparativo_paradigmas', 'Comparação entre Paradigmas'],
    ['js_multi_paradigma', 'JavaScript como Linguagem Multiparadigma'],
    ['js_estilos_mistos', 'Estilo Misto: OOP + Funcional + Eventos'],
    ['js_melhores_usos', 'Quando Usar Cada Paradigma no JS'],

    // Conclusão
    ['conclusao_resumo', 'Resumo Geral sobre Paradigmas'],
    ['conclusao_estudo_aplicado', 'Como Aplicar Paradigmas em Projetos Reais'],
    ['conclusao_proximos_passos', 'Próximos Passos: Dominar Arquitetura e Estilo de Código'],


    // async e await e promisses
    ['async_await', 'Async/Await em JavaScript'],
    ['definicao_async_await', 'Definição de async/await'],
    ['vantagens_async_await', 'Vantagens do uso de async/await'],

    // async 

    ['async', 'Funções Assíncronas (async)'],
    ['funcao_async', 'Definindo Funções Assíncronas'],
    ['execucao_async', 'Execução de Funções Assíncronas'],
    ['async_hooks', 'Async Hooks em Node.js'],
    ['async_hooks_conceito', 'Conceito de Async Hooks'],
    ['async_hooks_uso', 'Como Usar Async Hooks'],
    ['async_paralelismo', 'Execução Paralela com Promises'],
    ['async_paralelismo_conceito', 'Conceito de Execução Paralela'],
    ['async_paralelismo_exemplo', 'Exemplo de Execução Paralela de Promessas'],
    ['async_wait_cancelamento', 'Cancelamento de Funções Assíncronas com AbortController'],
    ['abortcontroller_conceito', 'Conceito de AbortController'],
    ['abortcontroller_exemplo', 'Exemplo de Cancelamento com AbortController'],

    // await

    ['await', 'Aguardando Promessas com await'],
    ['uso_await', 'Uso do await para Aguardar Promessas'],
    ['erro_await', 'Tratando Erros com await'],

    // promisses

    ['promises', 'Promises em JavaScript'],
    ['definicao_promises', 'Definição de Promises'],
    ['status_promises', 'Status das Promises (pending, resolved, rejected)'],
    ['promises_avancado', 'Promise.all, Promise.race, Promise.any'],
    ['promise_all', 'Promise.all e Concorrência'],
    ['promise_race', 'Promise.race e Atrasos Controlados'],
    ['promise_any', 'Promise.any e Resultados Válidos'],
    ['promises_concorrentes', 'Concorrência de Promessas'],
    ['promises_encadeadas', 'Encadeamento de Promessas Avançado'],
    ['promises_encadeamento', 'Encadeamento de Promessas (Promise Chaining)'],
    ['promises_encadeamento_conceito', 'Entendendo o Encadeamento de Promessas'],
    ['promises_encadeamento_exemplo', 'Exemplo de Encadeamento de Promessas'],
    ['promises_como_tratar_erros', 'Como Tratar Erros em Promessas'],
    ['promises_tratamento_erros_conceito', 'Tratando Erros no Encadeamento de Promessas'],
    ['promises_tratamento_erros_exemplo', 'Exemplo de Tratamento de Erros em Promessas'],
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
    ['streams_conceito', 'Conceito de Streams'],
    ['streams_uso', 'Como Trabalhar com Streams em JavaScript'],
    ['streams_exemplo', 'Exemplo de Manipulação de Streams'],

    // Segurança e Práticas Avançadas

    ['seguranca_javascript', 'Segurança em JavaScript'],
    ['seguranca_conceito', 'Conceitos de Segurança em JavaScript'],
    ['melhores_praticas_seguranca', 'Melhores Práticas de Segurança em JavaScript'],

    // xss

    ['xss', 'Prevenção de Cross-Site Scripting (XSS)'],
    ['xss_conceito', 'O que é Cross-Site Scripting (XSS)'],
    ['xss_prevenção', 'Técnicas para Prevenção de XSS em JavaScript'],
    ['xss_filtros', 'Filtros e Validações para Prevenir XSS'],

    // csrf

    ['csrf', 'Prevenção de Cross-Site Request Forgery (CSRF)'],
    ['csrf_conceito', 'O que é Cross-Site Request Forgery (CSRF)'],
    ['csrf_prevenção', 'Técnicas para Prevenção de CSRF em JavaScript'],
    ['csrf_tokens', 'Uso de Tokens Anti-CSRF'],

    // injection sql

    ['injection', 'Prevenção de Injeção de Código (SQL, NoSQL, JS)'],
    ['injection_conceito', 'O que é Injeção de Código'],
    ['prevenir_injection', 'Prevenção de Injeção SQL, NoSQL, e JS'],
    ['sql_injection', 'SQL Injection e suas Prevenções'],
    ['nosql_injection', 'NoSQL Injection e suas Prevenções'],

    // criptografia

    ['ciphers', 'Criptografia e Cifras em JavaScript'],
    ['criptografia_conceito', 'Conceito de Criptografia'],
    ['criptografia_simetrica', 'Criptografia Simétrica (AES, DES)'],
    ['criptografia_assimetrica', 'Criptografia Assimétrica (RSA, ECC)'],
    ['criptografia_em_js', 'Implementando Criptografia em JavaScript'],

    // hashing

    ['hashing', 'Funções de Hash em JavaScript (bcrypt, scrypt)'],
    ['hashing_conceito', 'Conceito de Funções de Hash'],
    ['bcrypt', 'Uso de bcrypt para Hash em JavaScript'],
    ['scrypt', 'Uso de scrypt para Hash em JavaScript'],
    ['salting', 'Uso de Salts em Funções de Hash'],

    // jwt

    ['jwt_token', 'Autenticação com JWT (JSON Web Token)'],
    ['jwt_conceito', 'O que é JSON Web Token (JWT)'],
    ['jwt_implementacao', 'Implementando Autenticação com JWT em JavaScript'],
    ['jwt_seguranca', 'Segurança com JWT: Práticas Recomendadas'],
    ['jwt_refresh_token', 'Uso de Refresh Tokens com JWT'],

    // caching

    ['caching', 'Estratégias de Caching (Redis, Memcached)'],
    ['redis_caching', 'Uso de Redis para Caching'],
    ['memcached_caching', 'Uso de Memcached para Caching'],
    ['caching_no_backend', 'Estratégias de Caching no Backend'],

    //rate limit

    ['rate_limiting', 'Rate Limiting em APIs'],
    ['rate_limiting_conceito', 'Conceito de Rate Limiting'],
    ['rate_limiting_implementacao', 'Implementando Rate Limiting em APIs'],
    ['limite_de_requisicoes', 'Limite de Requisições por IP/Usuário'],

    // cors

    ['cros', 'Cross-Origin Resource Sharing (CORS)'],
    ['cros_conceito', 'Conceito de CORS'],
    ['cros_implementacao', 'Implementando CORS em Aplicações Web'],
    ['cros_politicas', 'Políticas de CORS e Segurança'],

    // Monitoramento

    ['monitoramento', 'Monitoramento de Aplicações em JavaScript'],
    ['monitoramento_sistemas', 'Monitoramento de Sistemas em Tempo Real'],
    ['monitoramento_desempenho', 'Monitoramento de Desempenho de Aplicações JavaScript'],
    ['monitoramento_erros', 'Monitoramento e Relatórios de Erros em JavaScript'],

    // performace

    ['profiling', 'Profiling e Otimização de Performance em JavaScript'],
    ['profiling_tools', 'Ferramentas de Profiling em JavaScript (Chrome DevTools, Node.js)'],
    ['profiling_tuning', 'Tuning de Performance com Profiling'],
    ['profiling_exemplo', 'Exemplo de Uso de Profiling para Identificar Gargalos'],

    // memoria

    ['heap_snapshot', 'Analisando Snapshots de Heap para Memory Leaks'],
    ['heap_snapshot_tools', 'Ferramentas para Captura e Análise de Snapshots de Heap'],
    ['heap_snapshot_exemplo', 'Exemplo de Análise de Heap Snapshot'],
    ['memory_leaks', 'Identificando e Corrigindo Memory Leaks em JavaScript'],

    // load testing

    ['load_testing', 'Testes de Carga (Load Testing) com Node.js'],
    ['load_testing_tools', 'Ferramentas para Teste de Carga (Artillery, Apache JMeter)'],
    ['load_testing_estrategias', 'Estratégias para Testes de Carga de Alto Desempenho'],
    ['load_testing_resultados', 'Interpretando os Resultados de Testes de Carga'],

    // performace em tuning

    ['performance_tuning', 'Tuning de Performance de Aplicações JavaScript'],
    ['performance_tuning_estrategias', 'Estratégias para Melhorar a Performance'],
    ['performance_tuning_nodejs', 'Tuning de Performance em Node.js'],
    ['performance_optimization', 'Otimização de Algoritmos e Estruturas de Dados em JavaScript'],

    // observalidade

    ['observabilidade', 'Observabilidade em Sistemas Distribuídos'],
    ['observabilidade_conceitos', 'Conceitos de Observabilidade: Logs, Metrics e Tracing'],
    ['observabilidade_ferramentas', 'Ferramentas de Observabilidade (Prometheus, Grafana, Jaeger)'],
    ['observabilidade_best_practices', 'Boas Práticas de Implementação de Observabilidade'],

    // logging

    ['logging', 'Gerenciamento de Logs em Node.js'],
    ['logging_ferramentas', 'Ferramentas de Log (Winston, Bunyan, Pino)'],
    ['logging_niveis', 'Níveis de Log e Como Utilizá-los em Node.js'],
    ['logging_estrategias', 'Estratégias para Gerenciamento e Armazenamento de Logs'],

    // sentry

    ['sentry', 'Integração com Sentry para Monitoramento de Erros'],
    ['sentry_config', 'Configuração e Uso do Sentry em Node.js'],
    ['sentry_monitoramento', 'Monitorando Erros em Produção com Sentry'],
    ['sentry_alertas', 'Configuração de Alertas e Notificações com Sentry'],

    // services workers
    ['service_workers', 'Service Workers e Caching'],
    ['service_workers_conceito', 'Entendendo os Service Workers'],
    ['service_workers_implementacao', 'Implementação de Service Workers'],
    ['service_workers_cache', 'Cache e Armazenamento no Service Worker'],

    // web workers

    ['web_workers', 'Web Workers para Processamento Assíncrono'],
    ['web_workers_conceito', 'Conceito de Web Workers'],
    ['web_workers_implementacao', 'Implementação de Web Workers'],

    // threads

    ['worker_threads', 'Worker Threads em Node.js'],
    ['worker_threads_conceito', 'Conceito de Worker Threads'],
    ['worker_threads_implementacao', 'Implementação de Worker Threads em Node.js'],

    // Depuração e Boas Práticas

    ['debugging', 'Depuração em JavaScript'],
    ['conceito_debugging', 'Conceito de Depuração'],
    ['metodos_debugging', 'Métodos de Depuração em JavaScript'],

    ['debugging_tools', 'Ferramentas de Depuração (Chrome DevTools)'],
    ['chrome_devtools', 'Uso do Chrome DevTools para Depuração'],
    ['devtools_breakpoints', 'Breakpoints no Chrome DevTools'],
    ['devtools_console', 'Console do Chrome DevTools'],

    ['console_log', 'Uso do console.log para Depuração'],
    ['console_log_exemplo', 'Exemplo de uso de console.log'],
    ['console_log_bons_criterios', 'Boas Práticas com console.log'],

    ['linters_formatters', 'Linting e Formatting (ESLint, Prettier)'],
    ['eslint', 'Configuração e Uso do ESLint'],
    ['prettier', 'Configuração e Uso do Prettier'],
    ['integracao_linter', 'Integração de Linters no Processo de Desenvolvimento'],

    ['boas_praticas', 'Boas Práticas e Clean Code'],
    ['clean_code', 'Princípios de Clean Code em JavaScript'],
    ['legibilidade_codigo', 'Melhorando a Legibilidade do Código'],

    ['boas_praticas_naming', 'Boas Práticas de Nomeação'],
    ['nome_variaveis', 'Boas Práticas de Nomeação para Variáveis'],
    ['nome_funcoes', 'Boas Práticas de Nomeação para Funções'],
    ['nome_classes', 'Boas Práticas de Nomeação para Classes'],

    ['boas_praticas_codigo', 'Boas Práticas de Estrutura de Código'],
    ['organizar_codigo', 'Como Organizar o Código de Forma Eficiente'],
    ['modularizacao_codigo', 'Modularização de Código em JavaScript'],

    ['boas_praticas_desempenho', 'Boas Práticas para Desempenho'],
    ['optimizar_funcoes', 'Como Otimizar Funções e Algoritmos'],
    ['gerenciamento_memoria', 'Boas Práticas para Gerenciamento de Memória'],

    ['testes_unitarios', 'Testes Unitários em JavaScript'],
    ['frameworks_testes', 'Frameworks para Testes Unitários (Jest, Mocha, Jasmine)'],
    ['escrever_testes_unitarios', 'Como Escrever Testes Unitários Eficientes'],
    ['mocking', 'Uso de Mocking em Testes Unitários'],

    ['testes_integracao', 'Testes de Integração em JavaScript'],
    ['testes_integracao_conceito', 'Conceito e Importância dos Testes de Integração'],
    ['escrever_testes_integracao', 'Como Escrever Testes de Integração'],
    ['mocking_integracao', 'Uso de Mocking em Testes de Integração'],

    // praticando com aplicação

    ['calculadora', 'Criando uma Calculadora em JavaScript'],
    ['calculadora_conceito', 'Conceito de uma Calculadora em JavaScript'],
    ['calculadora_funcionalidade', 'Funcionalidades de uma Calculadora'],
    ['calculadora_interface', 'Interface de Usuário para a Calculadora'],
    ['calculadora_implementacao', 'Implementação da Lógica da Calculadora'],

    ['todo_list', 'To-Do List com LocalStorage'],
    ['todo_list_conceito', 'Conceito de To-Do List'],
    ['todo_list_estruturacao', 'Estrutura de Dados para To-Do List'],
    ['todo_list_localstorage', 'Utilizando LocalStorage para Persistência'],
    ['todo_list_interface', 'Interface de Usuário para To-Do List'],
    ['todo_list_funcionalidade', 'Funcionalidades da To-Do List'],

    ['cronometro', 'Cronômetro com setTimeout e setInterval'],
    ['cronometro_conceito', 'Conceito de Cronômetro em JavaScript'],
    ['settimeout_setinterval', 'Usando setTimeout e setInterval no Cronômetro'],
    ['cronometro_interface', 'Interface de Usuário para o Cronômetro'],
    ['cronometro_funcionalidade', 'Funcionalidades do Cronômetro'],

    ['gerador_senhas', 'Gerador de Senhas Aleatórias'],
    ['gerador_senhas_conceito', 'Conceito de Gerador de Senhas'],
    ['gerador_senhas_aleatorias', 'Gerando Senhas Aleatórias com Math.random'],
    ['seguranca_gerador_senhas', 'Melhorando a Segurança no Gerador de Senhas'],
    ['gerador_senhas_interface', 'Interface de Usuário para Gerador de Senhas'],

    ['jogo_da_velha', 'Jogo da Velha em JavaScript'],
    ['jogo_da_velha_conceito', 'Conceito de Jogo da Velha'],
    ['jogo_da_velha_logica', 'Lógica por Trás do Jogo da Velha'],
    ['jogo_da_velha_interface', 'Interface de Usuário para Jogo da Velha'],
    ['jogo_da_velha_multiplayer', 'Jogo da Velha Multiplayer com LocalStorage'],

    ['relatorio', 'Gerando Relatórios em JavaScript'],
    ['relatorio_conceito', 'Conceito de Relatórios em JavaScript'],
    ['geracao_relatorio', 'Geração de Relatórios em JavaScript'],
    ['exportacao_relatorio', 'Exportação de Relatórios para CSV ou PDF'],
    ['relatorio_interface', 'Interface de Usuário para Geração de Relatórios']

]

for (let i = 0; i < list.length; i++) {
    for (let ii = 0; ii < list.length; ii++) {
        if (i != ii) {
            if (list[i][0] == list[ii][0] || list[i][1] == list[ii][1]) {
                console.log(list[i])
            }
        }
    }
}