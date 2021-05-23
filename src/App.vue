<template>
  <div id="app">
    <header id="logo">
      <div>
        <span>ProRadis Challenge</span>
      </div>
    </header>
    <div id="nav">
      <router-link to="/">Cadastro Vacinas</router-link> |
      <router-link to="/registerPatient">Cadastro Paciente</router-link> |
      <router-link to="/registerDose">Registro de Doses</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 40px;
}

#logo {
  font-size: 3em;
  padding: 30px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
