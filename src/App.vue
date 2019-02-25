<template>
  <div id="app">
      <Menu/>
      <HelloWorld/>
      <Experience/>
      <Registro/>
      
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Registro from './components/Registro.vue'
import Experience from './components/Experience.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Menu,
    Registro,
    Experience
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #123e50;
}
</style>
