# Projeto de login no padrão MVC

## Instruções para iniciar o projeto

Para executá-lo, primeiramente é necessário informar e direcionar a um banco de dados MySQL. Vá no arquivo src/database/dbsecret.js e preencha os campos "usuario" e "senha" com suas informações para conectar ao seu MySQL. 

Após feito isso, basta digitar no node o comando "npm run start" para iniciar o projeto junto ao nodemon.

## Documentação da API

Clique no botão abaixo para ser redirecionado a documentação pelo Insomnia.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://mayconbm.github.io/login_MVC/)

## API

As tecnologias e pacotes utilizados nesse projeto foram Sequelize e Express, com endpoint para Login.

## Login

Na área de login é feito uma autenticação de e-mail e senha que retorna um token gerado pelo [JWT](https://www.npmjs.com/package/jsonwebtoken)

## Usuários

No CRUD foi utilizado o pacote [bcrypt](https://www.npmjs.com/package/bcrypt) fazendo a criptografia na senha do usuário.
