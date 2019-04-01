<template>
  <div id="app">
    <div>
      <HelloWorld msg="Carabolo LP is"/>
      <HelloWorld msg="The best solution for you"/>
      <button type="button">DOWNLOAD APP</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #721782;
  color: white;
  padding: 50px;
}

button{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  margin-bottom:60px;
  color: white;
  background-color: #965fd2;
  border-radius: 10px;
  padding: 10px;
}
</style>
