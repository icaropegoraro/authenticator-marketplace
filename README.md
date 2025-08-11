# Assistente de Autenticação para Marketplaces

Este projeto é um assistente simples para facilitar o processo de autenticação em APIs de marketplaces. Atualmente, o foco inicial é a Shopee.

## Funcionalidades

- Geração automática do link de autorização que deve ser enviado ao cliente.
- Recebimento do link de retorno do cliente com o código de autorização.
- Realiza a requisição POST na API da Shopee para troca do código por tokens de acesso.
- Simplifica a integração do processo de autenticação para sistemas que precisam acessar APIs da Shopee.

## Como funciona

1. Gere o link de autenticação para enviar ao cliente.
2. O cliente acessa o link, autoriza o acesso e você recebe um link de callback com o código de autorização.
3. Utilize este código para fazer a requisição de token à API da Shopee.
4. Receba e armazene os tokens para uso nas chamadas autenticadas à API.

## Tecnologias

- Node.js
- JavaScript (ES6+)
- Fetch API (para requisições HTTP)

## Próximos passos

- Implementar assistentes para outros marketplaces.
- Melhorar o tratamento de erros e fluxos assíncronos.
- Adicionar interface gráfica para facilitar o uso.

## Como usar

1. Clone o repositório:<br/>
   git clone https://github.com/seuusuario/assistente-autenticacao-marketplaces.git

2. Instale as dependências<br/>
   npm install

3. Configure as variáveis do ambiente (.env)<br/>
   PARTNER_ID<br/>
   KEY_AUTHENTICATOR_SHOPEE<br/>
   URL_REDIRECT<br/>
   URL_SHOPEE_API
