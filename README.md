proradis-challenge
===============

## Prerequisites
You will need [Node.js](https://nodejs.org) version 6.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

    > git clone https://github.com/matheusgomes062/proradis-challenge

... or [downloading source code](https://github.com/matheusgomes062/proradis-challenge/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and continue with:

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Desafio Técnico Dev Adv

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Important Info!

Projeto iniciado no sábado (22/05/2021).

Inicialmente eu concentrei meus esforços no front end, este levou cerca de 4 horas de desenvolvimento (pois é minha área de maior facilidade), ao iniciar o back-end, eu percebi que ainda estava muito aquém do necessário para efetuar o projeto, portanto ao começar um projeto descobri que o .NET utilizado era o errado (Framework não funciona no MacOs), assim depois de começar um projeto utilzando o datado .NET Framework tive que iniciar outro utilizando o mais recente .NET Core.

Porém mesmo com meus esforços e ajuda de alguns amigos, não foi possível finalizar o processo de desenvolvimento do back-end...

Porém, quero deixar aqui a rota que tomei ao desenvolver tais projetos.

## Front
1. Boilerplate com Vue 2 + Sass + commitlint e jest (FEITO)
2. Desenvolvimento utilizando melhores práticas e formwizards (FEITO)
3. Desenvolvimento de testes unitários utilizando Jest (  )

## Back
1. Estudo sobre APIs e desenvolvimento robusto das mesmas. (FEITO -> Curso utilizado https://www.udemy.com/course/criando-apis-robustas-em-c)
2. Desenvolvimento da API (FEITO PARCIALMENTE)
2.1 Descobrir que o .NET Framework não funciona para MacOs (FEITO 100%)
3. Entender a estrutura utilização de um ORM. (  )
4. Desenvolvimento de testes unitários utilizando MOQ ou XUnity. (  )
5. Aprender e Utilizar o Docker para a utilização do Postgresql (OK)

No final das contas, acredito que foi um grande aprendizado, no entanto ocorreram imprevistos que permitiram descobrir minha própria capacidade como desenvolvedor e onde tenho que melhorar.

Link dos outros dois projetos de back end:

1- https://github.com/matheusgomes062/proradis-challenge-back

2- https://github.com/matheusgomes062/VaccineAPI
