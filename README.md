# Kenzie Hub

### [Visite aqui minha aplicação ](https://react-kenzie-hub.vercel.app/)

Kenziehub é um hub de portfólios de programadores da Kenzie!
O objetivo dessa aplicação é conseguir criar um frontend de qualidade, utilizando alguns dos conhecimentos em React.
Nesta aplicação o usuário poderá se cadastrar, adicionar as tecnlogias que ele aprendeu e está aprendendo, assim como seus trabalhos realizados.

## API consumida

Para a realização deste projeto, foi utilizado uma API disponibilizada pelo time da Kenzie. Sua documentação se encontra aqui:

[DOCUMENTAÇÃO DA API](https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-api)

## Style Guide

Para esta aplicação foi utilizado o Figma disponibilizado.

### [Figma](https://www.figma.com/file/ccZ4uMlJtuBQISDzCCI1Vq/Kenzie-Hub?node-id=0%3A1)

## Features implementadas

- O usuário pode se cadastrar;
- O usuário pode logar em sua conta;
- O usuário pode cadastrar as tecnologias que ele conhece;
- O usuário consegue visualizar e deletar as tecnologias que ele conhece.

## Regras de negócio

- Todos os formulários tem validações, para não enviar nenhum dado errado para a API;
- O Token está sendo salvo no localStorage de forma correta e sendo utilizado para verificar se o usuário está logado ou não;
- O usuário deslogado não pode acessar o dashboard.

## Bibliotecas utilizadas

- Material Ui
- React Router Dom
- React Hook Form
- Yup
- Axios

## Deploy

A aplicação foi disponibilizada fazendo o deploy no Versel. O link para acesso está disponibilizado no topo da documentação.
