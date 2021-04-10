<template>
  <Container msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100vw;
  min-width: 300px;
  height: 100vh;
  background: rgb(41,41,41);
  background: rgb(41,41,41);
  background: radial-gradient(circle, rgba(41,41,41,1) 0%, rgba(37,37,37,1) 93%);

  display: grid;
  justify-content: center;
  align-content: center;
}
</style>
