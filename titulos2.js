const programacaoBasicaAplicadaJS = new Map([


    // DOM e Eventos

    ['dom', 'Manipulação do DOM'],

    ['acessar_elementos', 'Acessando Elementos no DOM'],
    ['acessar_por_id', 'Acessando Elementos por ID no DOM'],
    ['acessar_por_classe', 'Acessando Elementos por Classe no DOM'],
    ['acessar_por_tag', 'Acessando Elementos por Tag no DOM'],
    ['acessar_por_seletor', 'Acessando Elementos com Seletor CSS no DOM'],

    ['criar_elementos', 'Criando Elementos no DOM'],
    ['criar_elemento', 'Criando um Novo Elemento HTML'],
    ['adicionar_elemento', 'Adicionando Elementos ao DOM'],
    ['atributos_elemento', 'Atribuindo Atributos aos Elementos Criados'],

    ['alterar_elementos', 'Alterando Elementos no DOM'],
    ['alterar_texto', 'Alterando Texto de Elementos no DOM'],
    ['alterar_atributos', 'Alterando Atributos de Elementos no DOM'],
    ['alterar_estilos', 'Alterando Estilos de Elementos no DOM'],
    ['alterar_classes', 'Alterando Classes de Elementos no DOM'],

    ['remover_elementos', 'Removendo Elementos do DOM'],
    ['remover_elemento', 'Removendo um Elemento do DOM'],
    ['remover_por_id', 'Removendo Elementos por ID no DOM'],
    ['remover_por_classe', 'Removendo Elementos por Classe no DOM'],

    ['eventos', 'Eventos em JavaScript'],

    ['event_listener', 'addEventListener'],
    ['adicionar_evento', 'Adicionando um Evento a um Elemento'],
    ['remover_evento', 'Removendo um Evento de um Elemento'],
    ['eventos_padrao', 'Eventos Padrão no JavaScript'],

    ['event_bubbling', 'Event Bubbling'],
    ['definicao_bubbling', 'Definição de Event Bubbling'],
    ['exemplo_bubbling', 'Exemplo de Event Bubbling'],
    ['controle_bubbling', 'Controlando o Fluxo do Event Bubbling'],

    ['event_capture', 'Event Capture'],
    ['definicao_capture', 'Definição de Event Capture'],
    ['exemplo_capture', 'Exemplo de Event Capture'],
    ['controle_capture', 'Controlando o Fluxo do Event Capture'],

    ['delegacao_eventos', 'Delegação de Eventos'],
    ['definicao_delegacao', 'Definição de Delegação de Eventos'],
    ['exemplo_delegacao', 'Exemplo de Delegação de Eventos'],
    ['vantagens_delegacao', 'Vantagens da Delegação de Eventos'],

    ['eventos_customizados', 'Eventos Customizados'],
    ['definicao_eventos_customizados', 'Definição de Eventos Customizados'],
    ['criar_eventos_customizados', 'Criando Eventos Customizados'],
    ['disparar_eventos_customizados', 'Disparando Eventos Customizados'],

    ['forms', 'Formulários em JavaScript'],

    ['form_validacao', 'Validação de Formulários'],
    ['validar_campos', 'Validando Campos de Formulários'],
    ['validar_mensagens', 'Exibindo Mensagens de Validação em Formulários'],

    ['validar_email', 'Validação de Email'],
    ['regex_email', 'Validando Email com Expressões Regulares'],
    ['validar_email_avancado', 'Validação Avançada de Email'],

    ['validar_telefone', 'Validação de Telefone'],
    ['regex_telefone', 'Validando Telefone com Expressões Regulares'],
    ['validar_telefone_formatado', 'Validação de Telefone com Formatação'],

    // Manipulação de Eventos e DOM

    ['dom', 'Manipulação do DOM'],
    ['definicao_dom', 'Definição de DOM'],
    ['estrutura_dom', 'Estrutura do DOM'],

    ['dom_acessar', 'Acessando Elementos no DOM'],
    ['metodos_acesso_dom', 'Métodos para Acessar Elementos no DOM'],
    ['acesso_por_id', 'Acesso por ID no DOM'],
    ['acesso_por_classe', 'Acesso por Classe no DOM'],
    ['acesso_por_tag', 'Acesso por Tag no DOM'],

    ['dom_criar', 'Criando Elementos no DOM'],
    ['criar_elementos', 'Como Criar Elementos no DOM'],
    ['adicionar_elementos', 'Adicionando Elementos ao DOM'],

    ['dom_alterar', 'Alterando Elementos no DOM'],
    ['alterar_texto', 'Alterando Texto dos Elementos'],
    ['alterar_atributos', 'Alterando Atributos dos Elementos'],
    ['alterar_estilos', 'Alterando Estilos dos Elementos'],

    ['dom_remover', 'Removendo Elementos no DOM'],
    ['remover_elementos', 'Métodos para Remover Elementos'],

    ['dom_propriedades', 'Propriedades do DOM'],
    ['propriedades_elemento', 'Propriedades dos Elementos DOM'],
    ['propriedades_documento', 'Propriedades do Documento DOM'],

    ['dom_eventos', 'Eventos no DOM'],
    ['tipos_de_eventos', 'Tipos de Eventos no DOM'],
    ['gerenciamento_eventos', 'Gerenciamento de Eventos no DOM'],

    ['dom_event_listener', 'addEventListener para Eventos'],
    ['event_listener_basico', 'Uso Básico de addEventListener'],
    ['event_listener_com_callbacks', 'addEventListener com Callbacks'],

    ['eventos_bubbling', 'Event Bubbling'],
    ['definicao_bubbling', 'Definição de Event Bubbling'],
    ['fluxo_bubbling', 'Fluxo do Event Bubbling'],

    ['eventos_capture', 'Event Capture'],
    ['definicao_capture', 'Definição de Event Capture'],
    ['fluxo_capture', 'Fluxo do Event Capture'],

    ['delegacao_eventos', 'Delegação de Eventos'],
    ['definicao_delegacao', 'Definição de Delegação de Eventos'],
    ['delegacao_principio', 'Princípio de Delegação de Eventos'],

    ['eventos_customizados', 'Eventos Customizados'],
    ['criacao_eventos_customizados', 'Como Criar Eventos Customizados'],
    ['disparar_eventos_customizados', 'Disparando Eventos Customizados'],

    ['manipulacao_formularios', 'Manipulação de Formulários'],
    ['acesso_formulario', 'Acessando Formulários no DOM'],
    ['modificacao_formulario', 'Modificando Formulários no DOM'],

    ['validacao_formulario', 'Validação de Formulários'],
    ['validacao_campo', 'Validação de Campos em Formulários'],
    ['validacao_generica', 'Validação Genérica de Formulários'],

    ['validacao_email', 'Validação de Email em Formulários'],
    ['validacao_email_regex', 'Validação de Email com Regex'],

    ['validacao_telefone', 'Validação de Telefone em Formulários'],
    ['validacao_telefone_regex', 'Validação de Telefone com Regex'],

    // Fetch e Manipulação de APIs

    ['fetch', 'Requisições HTTP com fetch'],
    ['definicao_fetch', 'Definição de fetch'],
    ['fetch_vs_ajax', 'fetch vs AJAX'],

    ['fetch_sintaxe', 'Sintaxe do método fetch'],
    ['fetch_metodo', 'Método básico fetch'],
    ['fetch_opcoes', 'Opções do método fetch'],

    ['fetch_resposta', 'Tratando Resposta de fetch'],
    ['verificacao_resposta', 'Verificando Resposta com fetch'],
    ['manipulacao_resposta', 'Manipulando a Resposta com fetch'],

    ['fetch_erro', 'Tratando Erros no fetch'],
    ['erro_fetch', 'Erros com fetch'],
    ['tratamento_erro_fetch', 'Tratamento de Erro em fetch'],

    ['api_rest', 'Consumindo APIs REST'],
    ['definicao_api_rest', 'Definição e Conceito de API REST'],
    ['requisição_rest', 'Requisição GET e POST em API REST'],

    ['api_json', 'Trabalhando com JSON em APIs'],
    ['json_parse_api', 'Parse de JSON com API'],
    ['json_stringify_api', 'Stringify de JSON com API'],

    ['manipulacao_api', 'Manipulação de Dados de APIs'],
    ['manipulacao_resposta_api', 'Manipulação de Respostas de APIs'],
    ['enviar_dados_api', 'Enviando Dados para API'],

    // Extras e Fundamentos para Próxima Etapa

    ['event_loop', 'Event Loop, Call Stack e Queue'],
    ['event_loop_conceito', 'Entendendo o Event Loop'],
    ['event_loop_execucao', 'Execução do Event Loop'],

    ['message_queue', 'Message Queue em JavaScript'],
    ['message_queue_conceito', 'Entendendo a Message Queue'],
    ['message_queue_execucao', 'Execução da Message Queue'],

    ['proxies', 'Proxies e Reflect API'],
    ['proxies_conceito', 'Conceito de Proxies'],
    ['proxies_implementacao', 'Implementação de Proxies'],
    ['reflect_api', 'Usando a Reflect API'],

    ['web_storage', 'Web Storage (LocalStorage, SessionStorage)'],
    ['local_storage', 'LocalStorage: Armazenamento Local no Navegador'],
    ['session_storage', 'SessionStorage: Armazenamento por Sessão'],
    ['web_storage_limitações', 'Limitações e Persistência do Web Storage'],

    ['cookies', 'Cookies e Armazenamento no Navegador'],
    ['cookies_conceito', 'Conceito e Uso de Cookies'],
    ['cookies_manipulacao', 'Manipulação de Cookies em JavaScript'],
    ['cookies_segurança', 'Segurança no Uso de Cookies'],

    ['reflexao_final', 'Resumo e Próximos Passos: JS Avançado e Frameworks'],
    ['reflexao_final_avancado', 'Reflexões Finais sobre JavaScript Avançado'],
    ['reflexao_frameworks', 'Próximos Passos: Frameworks e Bibliotecas'],


    // Aplicações Práticas Avançadas

    ['app_tela_login', 'Criando uma Tela de Login com Validação'],
    ['app_tela_login_html', 'Estrutura HTML para Tela de Login'],
    ['app_tela_login_css', 'Estilos CSS para Tela de Login'],
    ['app_tela_login_js', 'Validação e Funcionalidade com JavaScript'],

    ['app_formulario_contato', 'Formulário de Contato com Validação e Envio de Dados'],
    ['app_formulario_contato_html', 'Estrutura HTML do Formulário de Contato'],
    ['app_formulario_contato_validacao', 'Validação de Dados no Formulário de Contato'],
    ['app_formulario_contato_envio', 'Envio de Dados para o Servidor'],

    ['app_calculadora_avancada', 'Calculadora Avançada com Funções Matemáticas'],
    ['app_calculadora_html', 'Estrutura HTML da Calculadora'],
    ['app_calculadora_js', 'Funções Matemáticas e Lógica JavaScript'],
    ['app_calculadora_css', 'Estilos e Design da Calculadora'],

    ['app_chat_em_time_real', 'Construindo um Chat em Tempo Real com WebSockets'],
    ['app_chat_sockets', 'Configuração do WebSocket para Comunicação em Tempo Real'],
    ['app_chat_mensagens', 'Envio e Recebimento de Mensagens no Chat'],
    ['app_chat_ui', 'Interface de Usuário do Chat em Tempo Real'],

    ['app_api_consumo_com_sessao', 'Consumindo APIs com Sessões e Cookies'],
    ['app_api_consumo', 'Conectando e Consumindo Dados da API'],
    ['app_sessao_cookies', 'Gerenciamento de Sessões e Cookies para Autenticação'],

    ['app_crud_com_api', 'CRUD (Create, Read, Update, Delete) com API REST'],
    ['app_crud_create', 'Criação de Dados com API'],
    ['app_crud_read', 'Leitura de Dados com API'],
    ['app_crud_update', 'Atualização de Dados com API'],
    ['app_crud_delete', 'Deletando Dados com API'],

    ['app_autenticacao_token', 'Autenticação com Tokens (JWT)'],
    ['app_autenticacao_token_conceito', 'Entendendo JWT (JSON Web Token)'],
    ['app_autenticacao_token_implementacao', 'Implementando Autenticação com JWT'],

    ['app_pwa_todolist', 'To-Do List com PWA (Progressive Web App)'],
    ['app_pwa_install', 'Instalação e Configuração do PWA'],
    ['app_pwa_funcionalidade', 'Funcionalidade Offline e Sincronização de Dados'],

    ['app_gerenciador_de_senhas', 'Aplicativo de Gerenciamento de Senhas com Segurança'],
    ['app_senhas_criptografia', 'Criptografia e Armazenamento Seguro de Senhas'],
    ['app_senhas_geracao', 'Gerador de Senhas Aleatórias e Seguras'],
    ['app_senhas_ui', 'Interface de Usuário para Gerenciador de Senhas'],

    // Arquitetura e Design de Software

    ['microservices', 'Arquitetura de Microservices com Node.js'],
    ['microservices_conceito', 'Conceito de Microservices'],
    ['microservices_implementacao', 'Como Implementar Microservices em Node.js'],

    ['microservices_api_gateway', 'API Gateway para Microservices'],
    ['api_gateway_conceito', 'Conceito de API Gateway'],
    ['api_gateway_implementacao', 'Implementando um API Gateway em Microservices'],

    ['microservices_comunicao', 'Comunicação entre Microservices (gRPC, REST)'],
    ['comunicacao_microservices', 'Modelos de Comunicação em Microservices'],
    ['grpc_microservices', 'Usando gRPC para Comunicação em Microservices'],
    ['rest_microservices', 'Usando REST para Comunicação em Microservices'],

    ['monolito_vs_microservices', 'Monolito vs Microservices'],
    ['monolito_conceito', 'O que é Arquitetura Monolítica'],
    ['microservices_vs_monolito', 'Diferenças entre Arquitetura Monolítica e Microservices'],

    ['soa', 'Arquitetura Orientada a Serviços (SOA)'],
    ['soa_conceito', 'Conceito de Arquitetura SOA'],
    ['soa_vs_microservices', 'Comparando SOA e Microservices'],

    ['hexagonal_architecture', 'Arquitetura Hexagonal (Ports and Adapters)'],
    ['hexagonal_conceito', 'O Conceito de Arquitetura Hexagonal'],
    ['hexagonal_implementacao', 'Como Implementar Arquitetura Hexagonal'],

    ['event_driven', 'Arquitetura Baseada em Eventos'],
    ['event_driven_conceito', 'O que é Arquitetura Baseada em Eventos'],
    ['event_driven_implementacao', 'Como Implementar Arquitetura Baseada em Eventos'],

    ['event_sourcing', 'Event Sourcing em Sistemas Distribuídos'],
    ['event_sourcing_conceito', 'Conceito de Event Sourcing'],
    ['event_sourcing_implementacao', 'Implementando Event Sourcing em Sistemas Distribuídos'],

    ['CQRS', 'Command Query Responsibility Segregation (CQRS)'],
    ['CQRS_conceito', 'Conceito de CQRS'],
    ['CQRS_implementacao', 'Implementando CQRS em Microservices'],



    // Desenvolvimento Mobile

    ['react_native_basico', 'React Native - Introdução ao Desenvolvimento Mobile'],
    ['react_native_conceitos', 'Conceitos Fundamentais do React Native'],
    ['configuracao_ambiente', 'Configuração do Ambiente de Desenvolvimento para React Native'],
    ['react_native_arquitetura', 'Arquitetura de Aplicações em React Native'],

    ['react_native_navigation', 'Navegação em React Native (Stack, Tab, Drawer)'],
    ['react_native_navigation_basico', 'Navegação Básica em React Native'],
    ['react_native_navigation_stack', 'Navegação Stack em React Native'],
    ['react_native_navigation_tab', 'Navegação Tab em React Native'],
    ['react_native_navigation_drawer', 'Navegação Drawer em React Native'],

    ['react_native_api', 'Consumindo APIs com React Native'],
    ['react_native_fetch', 'Usando Fetch para Consumir APIs no React Native'],
    ['react_native_axios', 'Usando Axios para Consumir APIs no React Native'],
    ['react_native_manipulacao_dados', 'Manipulando Dados de APIs no React Native'],

    ['react_native_localstorage', 'Armazenamento Local no React Native'],
    ['react_native_asyncstorage', 'Uso de AsyncStorage para Armazenamento Local'],
    ['react_native_database', 'Uso de Banco de Dados SQLite no React Native'],
    ['react_native_armazem_local', 'Armazenamento Local com Realm em React Native'],

    ['react_native_ecommerce', 'Criando um E-commerce com React Native'],
    ['react_native_ecommerce_arquitetura', 'Arquitetura de E-commerce em React Native'],
    ['react_native_checkout', 'Criando um Checkout em React Native'],
    ['react_native_pagamento', 'Integração de Pagamentos em React Native'],

    ['capacitor', 'Capacitor para Aplicativos Web e Mobile'],
    ['capacitor_intro', 'Introdução ao Capacitor'],
    ['capacitor_integracao', 'Integração de Capacitor com React Native'],
    ['capacitor_plugins', 'Plugins do Capacitor para React Native'],

    ['pwa_mobilidade', 'Criando PWAs Mobile First'],
    ['pwa_conceitos', 'Conceitos de PWAs (Progressive Web Apps)'],
    ['pwa_mobile_first', 'Estratégias Mobile First em PWAs'],
    ['pwa_implementacao', 'Como Implementar PWAs com React Native'],

    ['offline_first', 'Desenvolvimento Offline First com PWA'],
    ['offline_first_conceito', 'O que é Offline First em PWAs'],
    ['offline_first_implementacao', 'Implementando Offline First com React Native'],


    // DevOps e Infraestrutura

    ['docker_basico', 'Introdução ao Docker para Desenvolvimento'],
    ['docker_o_que_e', 'O que é Docker e como funciona'],
    ['docker_instalacao', 'Instalação do Docker'],
    ['docker_comandos_basicos', 'Comandos Básicos do Docker'],

    ['docker_compose', 'Docker Compose para Gerenciamento de Containers'],
    ['docker_compose_arquitetura', 'Arquitetura e Arquivo docker-compose.yml'],
    ['docker_compose_multi_container', 'Executando Múltiplos Containers com Docker Compose'],
    ['docker_compose_ambientes', 'Configuração de Ambientes no Docker Compose'],

    ['docker_imagens', 'Criação de Imagens Docker'],
    ['dockerfile', 'Escrevendo um Dockerfile'],
    ['docker_build', 'Comando docker build para Criar Imagens'],
    ['docker_imagens_publicas', 'Imagens Docker Públicas e Repositórios'],

    ['docker_networking', 'Redes em Docker (Bridge, Host, Overlay)'],
    ['docker_networks', 'Criando e Gerenciando Redes Docker'],
    ['docker_bridge_network', 'Rede Bridge em Docker'],
    ['docker_host_network', 'Rede Host em Docker'],
    ['docker_overlay_network', 'Rede Overlay em Docker'],

    ['kubernetes', 'Orquestração de Containers com Kubernetes'],
    ['kubernetes_conceito', 'Conceito de Kubernetes e Orquestração de Containers'],
    ['kubernetes_pods', 'Pods e Contêineres no Kubernetes'],
    ['kubernetes_deployments', 'Implantando Aplicações com Kubernetes'],
    ['kubernetes_service', 'Criando Serviços no Kubernetes'],

    ['ci_cd', 'Integração Contínua e Entrega Contínua (CI/CD)'],
    ['ci_cd_conceitos', 'Conceitos de CI/CD'],
    ['ci_cd_pipeline', 'Criando Pipelines CI/CD'],
    ['ci_cd_automacao', 'Automação de Processos CI/CD'],

    ['gitlab_ci', 'Pipeline CI/CD com GitLab CI'],
    ['gitlab_ci_config', 'Configuração de Pipelines no GitLab CI'],
    ['gitlab_ci_runner', 'Configurando GitLab CI Runner'],
    ['gitlab_ci_jobs', 'Criando Jobs no GitLab CI'],

    ['github_actions', 'Automatizando com GitHub Actions'],
    ['github_actions_workflows', 'Criando Workflows com GitHub Actions'],
    ['github_actions_jobs', 'Trabalhando com Jobs em GitHub Actions'],
    ['github_actions_secrets', 'Gerenciando Secrets no GitHub Actions'],

    ['cloud_deployment', 'Implantação em Nuvem (AWS, GCP, Azure)'],
    ['aws_deployment', 'Implantação na AWS'],
    ['gcp_deployment', 'Implantação no GCP'],
    ['azure_deployment', 'Implantação no Azure'],

    ['serverless', 'Computação Serverless com AWS Lambda'],
    ['aws_lambda', 'Trabalhando com AWS Lambda'],
    ['serverless_framework', 'Framework Serverless para Desenvolvimento de Funções'],
    ['serverless_conceitos', 'Conceitos de Computação Serverless'],

    ['terraform', 'Infraestrutura como Código com Terraform'],
    ['terraform_conceitos', 'Conceitos de Terraform'],
    ['terraform_providers', 'Providers no Terraform'],
    ['terraform_arquitetura', 'Arquitetura de Infraestrutura com Terraform'],
    ['terraform_cloud', 'Usando Terraform Cloud para Gerenciamento de Infraestrutura'],


    // GraphQL e APIs Avançadas

    ['graphql', 'Introdução ao GraphQL'],
    ['graphql_o_que_e', 'O que é GraphQL e como funciona'],
    ['graphql_comparacao_rest', 'GraphQL vs REST: Diferenças e Vantagens'],

    ['graphql_queries', 'Consultas em GraphQL'],
    ['graphql_query_sintaxe', 'Sintaxe das Consultas (Queries) em GraphQL'],
    ['graphql_arguments', 'Argumentos e Variáveis em Consultas'],
    ['graphql_query_exemplo', 'Exemplo de Consulta em GraphQL'],

    ['graphql_mutations', 'Mutations em GraphQL'],
    ['graphql_mutation_sintaxe', 'Sintaxe das Mutations em GraphQL'],
    ['graphql_mutation_exemplo', 'Exemplo de Mutation em GraphQL'],
    ['graphql_update_delete', 'Mutations para Update e Delete em GraphQL'],

    ['graphql_subscriptions', 'Subscriptions em GraphQL'],
    ['graphql_subscription_sintaxe', 'Sintaxe das Subscriptions em GraphQL'],
    ['graphql_subscription_exemplo', 'Exemplo de Subscription em GraphQL'],
    ['graphql_websockets', 'Utilizando WebSockets para Subscriptions'],

    ['graphql_nodejs', 'Consumindo APIs GraphQL com Node.js'],
    ['graphql_nodejs_client', 'Consumindo APIs GraphQL com Client Apollo em Node.js'],
    ['graphql_nodejs_server', 'Criando um Servidor GraphQL com Node.js'],
    ['graphql_nodejs_erro', 'Tratando Erros em GraphQL com Node.js'],

    ['apollo_server', 'Criando um Servidor GraphQL com Apollo'],
    ['apollo_server_sintaxe', 'Configurando e Escrevendo um Servidor com Apollo Server'],
    ['apollo_server_schema', 'Definindo Schema e Resolvers com Apollo Server'],
    ['apollo_server_autenticacao', 'Autenticação com Apollo Server'],

    ['graphql_resolvers', 'Resolvers e Schema em GraphQL'],
    ['graphql_resolvers_conceito', 'Conceito de Resolvers e como eles funcionam'],
    ['graphql_resolvers_exemplo', 'Exemplo de Resolvers em GraphQL'],
    ['graphql_resolvers_schema', 'Integrando Resolvers com Schema GraphQL'],

    ['relay', 'Relay para GraphQL - Gerenciamento de Dados'],
    ['relay_conceitos', 'Conceitos do Relay e seu uso com GraphQL'],
    ['relay_arquitetura', 'Arquitetura do Relay em GraphQL'],
    ['relay_cache', 'Gerenciamento de Cache e Data Fetching com Relay'],

    ['graphql_autenticacao', 'Autenticação e Autorização com GraphQL'],
    ['graphql_jwt', 'Autenticação com JWT em GraphQL'],
    ['graphql_permissoes', 'Gerenciando Permissões e Autorização em GraphQL'],
    ['graphql_oauth', 'Implementando OAuth em GraphQL'],




    // Tecnologias Emergentes

    ['iot', 'Internet das Coisas (IoT) com JavaScript'],
    ['iot_como', 'Como Conectar Dispositivos IoT com JavaScript'],
    ['iot_protocolos', 'Protocolos de Comunicação para IoT em JavaScript (MQTT, CoAP)'],
    ['iot_dispositivos', 'Integração com Dispositivos IoT (Sensores, Atuadores)'],
    ['iot_plataformas', 'Plataformas de IoT e JavaScript (Node-RED, Raspberry Pi)'],

    ['webassembly', 'WebAssembly para Execução de Código de Baixo Nível'],
    ['webassembly_conceito', 'Conceitos Fundamentais de WebAssembly'],
    ['webassembly_como_funciona', 'Como o WebAssembly Funciona e Sua Performance'],
    ['webassembly_js', 'Integrando WebAssembly com JavaScript'],
    ['webassembly_exemplo', 'Exemplo de Uso de WebAssembly em Projetos JavaScript'],

    ['blockchain', 'Introdução à Blockchain e Smart Contracts'],
    ['blockchain_conceito', 'Conceitos Fundamentais de Blockchain'],
    ['blockchain_smart_contracts', 'Desenvolvendo Smart Contracts em JavaScript'],
    ['blockchain_aplicacoes', 'Aplicações de Blockchain em JavaScript'],
    ['blockchain_ferramentas', 'Ferramentas de Desenvolvimento em Blockchain (Web3.js, ethers.js)'],

    ['cryptography', 'Criptografia no Contexto de Blockchain e JS'],
    ['cryptography_basico', 'Conceitos Básicos de Criptografia em JavaScript'],
    ['cryptography_algoritmos', 'Algoritmos de Criptografia em JavaScript (RSA, AES)'],
    ['cryptography_assinaturas', 'Assinaturas Digitais e Verificação de Integridade em JavaScript'],
    ['cryptography_blockchain', 'Criptografia em Blockchain com JavaScript'],

    ['artificial_intelligence', 'Inteligência Artificial com JavaScript'],
    ['ai_conceitos', 'Conceitos de Inteligência Artificial em JavaScript'],
    ['ai_algoritmos', 'Algoritmos de Inteligência Artificial (Busca, Aprendizado de Máquina)'],
    ['ai_ferramentas', 'Ferramentas de IA em JavaScript (TensorFlow.js, Brain.js)'],
    ['ai_aplicacoes', 'Aplicações de IA com JavaScript (Reconhecimento de Imagens, Processamento de Linguagem Natural)'],

    ['machine_learning', 'Machine Learning com JavaScript'],
    ['ml_conceitos', 'Conceitos Básicos de Machine Learning'],
    ['ml_algoritmos', 'Algoritmos de Machine Learning (Regressão, Classificação, Clustering)'],
    ['ml_ferramentas', 'Ferramentas para Machine Learning em JavaScript'],
    ['ml_aplicacoes', 'Aplicações de Machine Learning com JavaScript'],

    ['tensorflow_js', 'TensorFlow.js para Machine Learning'],
    ['tensorflow_js_basico', 'Introdução ao TensorFlow.js'],
    ['tensorflow_js_modelos', 'Construindo Modelos de Machine Learning com TensorFlow.js'],
    ['tensorflow_js_implementacao', 'Implementação de Modelos com TensorFlow.js em JavaScript'],
    ['tensorflow_js_avancado', 'Técnicas Avançadas em TensorFlow.js'],

    ['xr', 'Realidade Estendida (XR) com JavaScript'],
    ['xr_conceito', 'Conceitos de Realidade Estendida'],
    ['xr_implementacao', 'Implementando Realidade Estendida com JavaScript'],
    ['xr_aplicacoes', 'Aplicações de XR com JavaScript (WebXR, AR/VR)'],
    ['xr_ferramentas', 'Ferramentas e Frameworks para XR em JavaScript'],

    ['virtual_reality', 'Realidade Virtual (VR) com JavaScript'],
    ['vr_conceito', 'Conceitos de Realidade Virtual'],
    ['vr_aplicacoes', 'Desenvolvimento de Aplicações de VR em JavaScript'],
    ['vr_ferramentas', 'Ferramentas para Desenvolvimento de VR em JavaScript'],
    ['vr_dispositivos', 'Integração com Dispositivos VR em JavaScript'],

    ['augmented_reality', 'Realidade Aumentada (AR) com JavaScript'],
    ['ar_conceito', 'Conceitos de Realidade Aumentada'],
    ['ar_aplicacoes', 'Desenvolvimento de Aplicações de AR em JavaScript'],
    ['ar_ferramentas', 'Ferramentas para Desenvolvimento de AR em JavaScript'],
    ['ar_dispositivos', 'Integração com Dispositivos de AR em JavaScript']


]);

