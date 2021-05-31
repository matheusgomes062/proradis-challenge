proradis-challenge
===============

## Prerequisites
Você irá precisar do [Node.js](https://nodejs.org) versão 6.0 ou maior instalada no seu sistema.

## Setup

Pegue o código colando este repositório ou usando o git

    > git clone https://github.com/matheusgomes062/proradis-challenge

... ou [baixando o código fonte](https://github.com/matheusgomes062/proradis-challenge/archive/refs/heads/main.zip) como um arquivo zip.

Uma vez baixado, abra o terminal e execute o seguinte comando para instalar as dependências:

```
yarn install
```

### Compila e dá hot-reload para desenvolvimento
```
yarn run serve
```

### Compila minify para produção
```
yarn run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Desafio Técnico Dev ProRadis

### Vacinação Covid-19
Este desafio consiste em desenvolver um protótipo de aplicação que aborde a temática de vacinação contra COVID-19. Os principais objetivos são: construir um cadastro de vacinas, cadastrar pacientes, e registrar a aplicação de doses. Algumas regras de negócio deverão ser aplicadas para controlar este fluxo. Estas serão estabelecidas na seção 2 (Requisitos).

A aplicação deverá ter como funcionalidades:
1. Cadastro de Vacinas
  a. Fabricante
  b. Lote
  c. Data de Validade
  d. Número de doses
  e. Intervalo mínimo entre doses

2. Cadastro de Pacientes 
  a. Dados pessoais

3. Registro de vacinação
  a. Data de vacinação
  b. Identificação do paciente
  c. Identificação da vacina
  d. Identificação da dose
  e. Controle de dose e reincidência

### Requisitos
- Não deverá ser possível vacinar um paciente duas vezes antes de um intervalo mínimo entre doses
- Não deverá ser possível vacinar um paciente além do número de doses determinado 
- Não deverá ser possível vacinar um paciente com doses de fabricantes diferentes 
- Stack de desenvolvimento: Backend C#/Asp.net core ou PHP, front-end Vuejs

# Informações importantes!

Projeto iniciado no sábado (22/05/2021).
Finalizado dia 31 de Maio.
Total: 10 dias corridos.
Total líquido: 8 dias.

## Explicação do tempo de desenvolvimento
Inicialmente eu concentrei meus esforços no front-end, este levou cerca de 4 horas de desenvolvimento (pois é minha área de maior facilidade), ao iniciar o back-end, eu percebi que ainda estava muito aquém do necessário para efetuar o projeto, portanto ao começar um projeto descobri que o .NET utilizado era o errado (Framework não funciona no MacOs), assim depois de começar o projeto utilzando o datado .NET Framework tive que iniciar outro utilizando o mais recente .NET Core.

Porém o tempo correu rápido e não consegui desenvolver inicialmente essa nova API, até tentei utilizar um boilerplate, mas não foi o suficiente.

Decidi entregar no dia 26/05 com o front-end 70% e o back-end 30%.

Não satisfeito com o resultado, decidi mais uma vez recomeçar o projeto, dessa vez utilizando o framework correto e boas práticas de arquitetura e código limpo.
- Novo projeto iniciado dia 27/05
- Finalizado dia 31/05

## Roteiro de desenvolvimento
1. Criação do boilerplate front-end
2. Criação do design front-end
3. Desenvolvimento front-end esqueleto
4. Desenvolvimento front-end formulários e styles
5. Setup de desenvolvimento back-end
6. Setup banco de dados
7. Setup arquitetura
8. Desenvolvimento .net core api, domain, persistence, application esqueleto
9. Confiugaração dotnet ef core
10. Configuração sqlite (inicial)
11. Configuração controllers, migration, etc.
12. Troca de sqlite para postgresql
13. Adição de cors e seguraça na api
14. Desenvolvimento das requests front-end para back-end
15. Deploy back-end -> [Heroku](https://salty-anchorage-84863.herokuapp.com/)
16. Deploy front-end -> [Vercel](https://proradis-challenge.vercel.app/)
17. Setup Testes unitários front ([jest](https://jestjs.io/)) + back ([xUnit](https://xunit.net/))
18. Documentação

## Informações técnicas

### Front
- VueJs 2
- Sass
- Commitlint
- Jest
- Axios
- VueRouter
- Vue The Mask
- Vue Toastify
- Vuejs-datepicker
- Vuelidate
- Vuex
- Deploy automático no [Vercel](https://proradis-challenge.vercel.app/)

A ideia do desenvolvimento do front-end foi utilizar fortemente código limpo e FormWizards, ou seja, o foco seria em ter uma aplicação que não dependese de rotas para trocar de component, assim utilizei o famoso form-wizard para gerenciar os components de formulário. Não só isso mas tudo que era possível componentizar eu componentizei. As próprias requests utilizando axios foram feitas de forma a não repetir código.

Para fins de evitar perder tempo, tive que recorrer a alumas dependências como o Vue The Mask, que permite adicionar máscaras aos inputs, Vue Toastify, que é um sistema de toastys de sucesso ou fracasso, Vuejs-datepicker, que é um calendário simples em vue, e o Vuelidate, que permite a validação de dados e preenchimento dos mesmos com acesso a erros e avisos.

O store do projeto foi feito de forma escalável também, ou seja, foi utilizado o padrão de módulos para que possa ser fácil adicionar ou remover módulos de state.

Outra facilidade utilizada também foi o lazyloading nas rotas.

No que me comprometi faltou apenas desenvolver testes unitários, aplicar algumas melhorias de UX/UI e por fim fazer uma espécie de dashboard com os dados dos usuários e suas respectivas doses tomadas.

### Back
- ASP.NET Core 3.1
- Walking Skeleton
- Entity Framework Core
- Seeding
- Sqlite
- Postgresql
- CQRS Pattern
- Mediator
- ILogger
- CORS
- Deploy automático no [Heroku](https://salty-anchorage-84863.herokuapp.com/)
- [SecurityHeaders Nota A](https://securityheaders.com/?q=https%3A%2F%2Fsalty-anchorage-84863.herokuapp.com%2F&followRedirects=on)
- Docker
