<template>
  <div id="app">
      <Menu/>
      <HelloWorld/>
      <places />
      <Experience/> 
      <Carousel/>   
      <Registro/>
      <Footers/>

  </div>
</template>
<script>

import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Registro from './components/Registro.vue'
// import Experience from './components/Experience.vue'
import Footers from './components/Footers.vue'
import Carousel from './components/Carousel.vue'
import Places from './components/places.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Menu,
    Registro,
    // Experience,
    Footers,
    Carousel,
    Places
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
