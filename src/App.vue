<template>
  <v-app id="app">
    <header>
      <span>Swallom</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Lobster');

body {
  margin: 0;
}

#app {
  font-family: 'Kanit','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

header {
  margin: 0;
  height: 8vh;
  padding: 0 16px 0 24px;
  background-color: #3FB8AF;
  text-align: center;
}

header span {
  font-family: 'Lobster';
  font-size: 5vh;
  color: white;
}
</style>
