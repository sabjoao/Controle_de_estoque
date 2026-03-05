# Controle_de_estoque
📦 Controle de Estoque API

🚀 API REST desenvolvida para gerenciamento e controle de estoque de produtos.
Este projeto foi criado durante a minha capacitação de backend na empresa júnior byron solutions, com o objetivo de praticar conceitos de backend moderno, incluindo autenticação, organização de serviços e integração com banco de dados.

A aplicação permite gerenciar usuários, categorias e produtos, oferecendo um sistema simples e funcional para controle de estoque.

# 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### ⚡ Node.js 

### 🧵 TypeScript

### 📦 Yarn

### 🗄️ Prisma ORM

### 🌐 Express

### 🔐 JWT (JSON Web Token) para autenticação

### 📄 Swagger / OpenAPI para documentação da API

### 🗃️ Banco de dados relacional

### 📚 Funcionalidades

# A API possui funcionalidades essenciais para um sistema de controle de estoque:

## 👤 Usuários

Criar usuário

Autenticar usuário

Buscar informações do usuário autenticado

## 📂 Categorias

Criar categoria

Listar categorias cadastradas

## 📦 Produtos

Criar produto

Upload de imagem do produto

Relacionar produto com categoria

Relacionar produto com usuário

Controle de quantidade em estoque

## 🔐 Autenticação

Login com geração de JWT

Rotas protegidas com middleware de autenticação

## 📑 Documentação

Documentação da API disponível via Swagger UI

## 📁 Estrutura do Projeto
src/
 ├── controllers
 ├── services
 ├── prisma
 ├── routes
 ├── middlewares
 └── config

Arquitetura baseada em Controllers + Services, separando regras de negócio da camada de requisição.

# ⚙️ Instalação

Clone o repositório:

git clone https://github.com/sabjoao/Controle_de_estoque.git

Entre na pasta do projeto:

cd Controle_de_estoque

Instale as dependências:

yarn install
🗄️ Configuração do Banco de Dados

Configure o arquivo .env com a conexão do banco:

DATABASE_URL="sua_url_do_banco"
JWT_SECRET="sua_chave_secreta"

Depois execute as migrations:

npx prisma migrate dev
▶️ Executando o Projeto

Para iniciar o servidor em modo desenvolvimento:

yarn dev

O servidor será iniciado em:

http://localhost:3333
📄 Documentação da API

A documentação interativa da API pode ser acessada através do Swagger:

http://localhost:3333/api-docs

Nela é possível:

visualizar todas as rotas

testar endpoints

enviar requisições diretamente pelo navegador

# 🧪 Exemplos de Rotas
## Criar usuário
POST /v1/user
## Autenticar usuário
POST /v1/session
## Criar categoria
POST /v1/category
## Criar produto
POST /v1/product
# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

praticar desenvolvimento de APIs REST

aprender TypeScript no backend

trabalhar com Prisma ORM

implementar autenticação com JWT

documentar APIs com Swagger

# 👨‍💻 Autor

Desenvolvido por João Pedro

