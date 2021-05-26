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
```


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
# proradis-challenge
